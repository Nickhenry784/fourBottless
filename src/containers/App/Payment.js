import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Alert, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import RNIap, {
  Product,
  ProductPurchase,
  PurchaseError,
  acknowledgePurchaseAndroid,
  purchaseErrorListener,
  purchaseUpdatedListener,
  finishTransaction,
} from 'react-native-iap';
import dataBuys from './data/buys';
import { incrementTurn } from './actions';
import Button from './Button';
import { paymentStyle } from './style';

let purchaseUpdateSubscription;
let purchaseErrorSubscription;

function Payment() {
  const dispatch = useDispatch();
  const [buys, setBuys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialIAP();
    return () => {
      if (purchaseUpdateSubscription) {
        purchaseUpdateSubscription.remove();
      }
      if (purchaseErrorSubscription) {
        purchaseErrorSubscription.remove();
      }
    };
  }, []);

  const initialIAP = useCallback(async () => {
    try {
      setIsLoading(true);
      const ps = await RNIap.getProducts(dataBuys.map(item => item.sku));
      console.log(ps);
      setBuys(ps);

      const result = await RNIap.initConnection();
      console.log('connection is => ', result);
      await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
      purchaseUpdateSubscription = purchaseUpdatedListener(purchase => {
        const receipt = purchase.purchaseToken;
        if (receipt) {
          finishTransaction(purchase, true)
            .then(() => {
              handleCompletePurchase(purchase.productId);
            })
            .catch(() => {
              Alert.alert('purchase is failed', 'the purchase is failed');
            });
        }
      });
    } catch (err) {
      Alert.alert(err.message);
      // console.warn(err.code, err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCompletePurchase = productId => {
    switch (productId) {
      case dataBuys[0].sku:
        dispatch(incrementTurn(dataBuys[0].value));
        break;
      case dataBuys[1].sku:
        dispatch(incrementTurn(dataBuys[1].value));
        break;
      case dataBuys[2].sku:
        dispatch(incrementTurn(dataBuys[2].value));
        break;
      case dataBuys[3].sku:
        dispatch(incrementTurn(dataBuys[3].value));
        break;
      default:
        break;
    }
  };

  const requestPurchase = async sku => {
    try {
      await RNIap.requestPurchase(sku, false);
    } catch (err) {
      console.warn(err.code, err.message);
    }
  };

  return isLoading ? (
    <View style={paymentStyle.center}>
      <ActivityIndicator size="small" />
    </View>
  ) : (
    <>
      {buys.map((buy, buyKey) => (
        <Button
          key={buyKey}
          item={buy}
          onClick={() => requestPurchase(buy.sku)}
        />
      ))}
    </>
  );
}

Payment.propTypes = {};

export default Payment;
