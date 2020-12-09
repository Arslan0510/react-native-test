import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {login} from '../redux/action';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const state = useSelector(cred => cred);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(login(email, password));
  };
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Sign In" onPress={handleClick} />
      {state &&
        state.map((record, index) => (
          <View key={index}>
            <Text>Email: {record.email}</Text>
            <Text>password: {record.password}</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 10,
    // backgroundColor: '#1e90ff',
  },
});
