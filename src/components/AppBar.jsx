import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    padding: 20,
    backgroundColor: '#24292e',
  },
  // ...
});

const AppBar = () => {

  return (
    <Pressable 
      onPress={() => console.log('aloha! bar pressed!')}
    >
      <View style={styles.container}>
        <Text
          color='primary'
          fontWeight="bold"
        >
          Repositories
        </Text>
      </View>
    </Pressable>

);
};

export default AppBar;