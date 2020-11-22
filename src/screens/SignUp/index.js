import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../../state/AuthContext';
import AuthSVG from '_assets/svg/login.svg';
import { StyledView } from '../../styles/shared/StyledView';
import {
  StyledButton,
  StyledButtonText,
} from '../../styles/shared/StyledButton';
import { StyledInputAuth } from '../../styles/shared/StyledInputAuth';

export default function SignUpScreen({ navigation }) {
  const { state, signup, removeErrors } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    signup({ email, password, username });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      removeErrors();
    });

    return unsubscribe;
  }, [navigation, removeErrors]);

  return (
    <StyledView style={styles.view}>
      <AuthSVG style={{ position: 'absolute', top: 0}}/>
      <Text style={styles.header}>Sign Up</Text>
      <StyledInputAuth
        placeholder="Username"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#6c757d"
        onChangeText={setUsername}
        value={username}
      />
      <StyledInputAuth
        placeholder="Email"
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor="#6c757d"
        onChangeText={setEmail}
        value={email}
      />
      <StyledInputAuth
        placeholder="Password"
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor="#6c757d"
        onChangeText={setPassword}
        value={password}
        // secureTextEntry={true}
      />
      <View style={styles.actionsContainer}>
        <StyledButton onPress={() => handleSignUp()}>
          <StyledButtonText>SIGN UP</StyledButtonText>
        </StyledButton>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}> Have an account? Go to login</Text>
        </TouchableOpacity>
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      </View>
    </StyledView>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    height: '100%',
  },
  header: {
    fontSize: 35,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 40,
  },
  text: {
    fontSize: 14,
    color: '#000',
    marginTop: 20,
    fontStyle: 'italic'
  },
  actionsContainer: {
    marginBottom: 60,
  },
  errorMessage: {
    color: 'red',
    marginTop: 20
  }
});
