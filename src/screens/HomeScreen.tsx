import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const HomeScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [focusEmail, setFocusEmail] = useState<boolean>(false);

  const onChangeEmail = (text: string) => setEmail(text);
  const onFocus = () => setFocusEmail(true);
  const onBlur = () => setFocusEmail(false);

  return (
    <View style={styles.container}>
      <TextInput
        label={
          focusEmail ? 'Correo electrónico' : 'Escribe tu correo electrónico'
        }
        value={email}
        onChangeText={onChangeEmail}
        placeholderTextColor={'#7876B1'}
        contentStyle={[styles.inputContentStyle]}
        style={[styles.inputStyle, styles.inputContentStyleWithBorder]}
        textColor="#fff"
        onFocus={onFocus}
        onBlur={onBlur}
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="off"
        right={
          focusEmail && (
            <TextInput.Icon icon={'eye'} onPress={() => setEmail('')} />
          )
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputStyle: {
    height: 60,
    fontSize: 18,
    paddingHorizontal: 25,
    backgroundColor: '#141534',
    borderRadius: 15,
  },
  inputContentStyle: {
    borderRadius: 15,
    height: 60,
  },
  inputContentStyleWithBorder: {
    borderColor: '#7D77FF',
    borderWidth: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
