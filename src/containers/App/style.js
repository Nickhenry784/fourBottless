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
    fontSize: 20,
    fontWeight: 'bold',
  },
  textSmall: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export const homeStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  listChoices: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  turn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cart: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  choices: {
    width: '33.333333%',
    height: 60,
    marginTop: 10,
  },
  backgroundChoices: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  contentChoices: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  buttonPlay: {
    width: 160,
    height: 80,
    resizeMode: 'contain',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  back: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
