import React from 'react';
import { Button as Btn, ButtonProps as BtnProps } from 'react-native';

interface ButtonProps extends BtnProps {
  titleButton: string;
}

export default function Button({ titleButton, ...props }: ButtonProps) {
  return <Btn title={titleButton} color={'#00a573'} {...props} />;
}
