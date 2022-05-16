import { StatusBar } from 'expo-status-bar';
import {
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Button,
} from 'react-native';

import Form from './src/Components/Form';

import { style } from './src/Style/App.style';

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior='position'
          enabled
          style={{ width: '100%' }}
        >
          <>
            <Text style={style.title}> Faça seu login </Text>
            <Form />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}
