import { Text, TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
    },
  });

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        secureTextEntry
        onChangeText={formik.handleChange('password')}
      />
      <Pressable onPress={formik.handleSubmit}>
        <Text>Calculate</Text>
      </Pressable>
    </View>
  );
};


export default SignInForm;