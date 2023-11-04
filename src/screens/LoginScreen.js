import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ width: 150, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png',
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.TitleHeader}>Login to your account</Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.BoxEmail}>
            <FontAwesomeIcon style={{ marginLeft: 8 }} icon={faEnvelope} size={24} color="gray" />
            <TextInput
              textContentType="emailAddress"
              style={styles.InputEmail}
              placeholder="enter your Email"
              placeholderTextColor="gray"
              value={email}
              onChange={(text) => {
                setEmail(text);
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={styles.BoxEmail}>
            <FontAwesomeIcon style={{ marginLeft: 8 }} icon={faLock} size={24} color="gray" />
            <TextInput
              textContentType="password"
              style={[styles.InputEmail, { fontSize: password ? 16 : 16 }]}
              placeholder="enter your Email"
              placeholderTextColor="gray"
              value={password}
              onChange={(text) => {
                setPassword(text);
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
          }}
        >
          <Text style={{ color: '#000000' }}>Keep me login in</Text>
          <Text style={{ fontWeight: 500, color: '#007FFF' }}>Forgot password</Text>
        </View>
        <Pressable
          style={{
            width: 200,
            backgroundColor: 'black',
            padding: 15,
            marginTop: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 6,
          }}
        >
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
        </Pressable>
        <Pressable
          style={{ marginTop: 10 }}
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}>
            Don't have an account? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
  },
  TitleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  BoxEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
  },
  InputEmail: {
    color: 'gray',
    marginVertical: 5,
    width: 300,
  },
});
