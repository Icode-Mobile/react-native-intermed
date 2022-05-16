import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import { style } from '../../Style/App.style';

import Button from '../Button';

export default function Form() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    alert('Email mudado');
  }, []);

  const showEmailAndPassword = () => {
    console.log(email, password);
  };

  function showEmailAndPasswordSecond() {
    console.log(email, password);
  }

  return (
    <View style={style.form}>
      <Text style={style.emailForm}> Email </Text>
      <TextInput
        placeholder='Email'
        placeholderTextColor={'#cfcfcf'}
        style={style.formInputEmail}
        onChangeText={setEmail}
        keyboardType='default'
        autoCapitalize='none'
        autoComplete='off'
        autoCorrect={false}
      />
      <Text style={style.passwordForm}> Senha </Text>
      <TextInput
        placeholder='Senha'
        placeholderTextColor={'#cfcfcf'}
        style={style.formInputPassword}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        titleButton={'Fazer Login'}
        onPress={showEmailAndPasswordSecond}
      />
    </View>
  );
}
