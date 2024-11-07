import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
  textTitle: string;
  info: string;
  handleChange: (value: string) => void;
  handleBlur: () => void;
  values: string | string[] | undefined;
}

export const EmailInputComponent = ({ textTitle, info, handleBlur, handleChange, values }: Props) => {
  // Convertimos el valor en string si es un arreglo o indefinido
  const stringValue = Array.isArray(values) ? values[0] || '' : values || '';

  const handleTextChange = (text: string) => {
    // Eliminamos los espacios del texto ingresado
    const noSpaceText = text.replace(/\s/g, '');
    handleChange(noSpaceText); // Actualizamos solo con texto sin espacios
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{textTitle}</Text>
      <TextInput
        onChangeText={handleTextChange}
        onBlur={handleBlur}
        value={stringValue}
        style={globalStyles.input}
        placeholder={info}
        placeholderTextColor="lightgray"
      />
    </View>
  );
};
