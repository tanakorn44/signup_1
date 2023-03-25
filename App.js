import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TextInputExample = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [Username, onChangeText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.discordapp.com/attachments/1062934363127427122/1085579503738290206/2fd41d26aaf313ac.png',
          }}
        />
      </View>
      <Text style={styles.signupText}>Signup</Text>
      <Text style={styles.loginText2}>
        ป้อนข้อมูลรับรองของคุณเพื่อดำเนินการต่อ
      </Text>

      <Text style={styles.labelText}>Usename</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
      />
      <Text style={styles.labelText}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        keyboardType="email-address"
        autoCompleteType="email"
      />
      <Text style={styles.labelText}>Password</Text>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry={!passwordVisible}
          autoCompleteType="password"
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon
            name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <Button
        title="Sign Up"
        color="#53B175"
        onPress={() => Alert.alert('Sign Up')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },

  signupText: {
    fontSize: 23,
    color: 'black',
    textAlign: 'left',

    marginLeft: 10,
  },

  loginText2: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'left',
    marginBottom: 30,
    marginLeft: 10,
  },

  labelText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    margin: 12,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  iconContainer: {
    padding: 10,
  },
  
});

export default TextInputExample;
