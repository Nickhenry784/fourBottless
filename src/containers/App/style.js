import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '6%',
    left: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export const paymentStyle = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export const buttonStyle = StyleSheet.create({
  buttons: {
    padding: 10,
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: '10%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 3,
  },
  button: {
    color: 'white',
    width: '45%',
    textAlign: 'center',
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    backgroundColor: `#fff`,
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSmall: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export const homeStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  home: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buy: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  cart: {
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  turn: {
    fontSize: 20,
    color: 'red',
  },
  seasonGroup: {
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  season: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
