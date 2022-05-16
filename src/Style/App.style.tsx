import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    paddingTop: getStatusBarHeight(true) + 20,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
  },
  form: {
    padding: 50,
  },
  emailForm: {
    color: '#fff',
    fontSize: 18,
  },
  passwordForm: {
    color: '#fff',
    fontSize: 18,
    marginTop: 20,
  },
  formInputEmail: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
    height: 50,
    color: '#fff',
  },
  formInputPassword: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    width: '100%',
    height: 50,
    color: '#fff',
    marginBottom: 20,
  },
});
