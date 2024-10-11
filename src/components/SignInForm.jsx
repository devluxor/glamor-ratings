import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
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
      placeholderTextColor: '#999',
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
      color: '#d73a4a',
      marginBottom: 15,
      textAlign: 'left',
    },
    errorInput: {
      borderColor: '#d73a4a',
    }
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, formik.errors.username && styles.errorInput]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput
        style={[styles.input, formik.errors.password && styles.errorInput]}
        placeholder="Password"
        value={formik.values.password}
        secureTextEntry
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
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