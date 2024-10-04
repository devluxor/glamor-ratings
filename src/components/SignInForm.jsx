import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
    },
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      paddingHorizontal: 20,
      paddingTop: 20,
      backgroundColor: '#f8f8f8',
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor: '#fff',
    },
    label: {
      fontSize: 16,
      color: '#333',
      marginBottom: 5,
    },
    button: {
      backgroundColor: '#0165d4',
      paddingVertical: 15,
      borderRadius: 8,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        secureTextEntry
        onChangeText={formik.handleChange('password')}
      />
      <Pressable 
        style={styles.button}
        onPress={formik.handleSubmit}
      >
        <Text
          style={styles.buttonText}
        >Sign In</Text>
      </Pressable>
    </View>
  );
};


export default SignInForm;