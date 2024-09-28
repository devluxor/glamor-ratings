import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    padding: 20,
    backgroundColor: '#24292e',
  },
  flexContainer: {
    display: 'flex',
  },
  flexContainerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    gap: 20,
  },
});

const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable 
        onPress={() => console.log('aloha! bar pressed!')}
      >
        <View style={[styles.flexContainerRow, styles.container]}>
          <Link to="/sign-in">
            <Text
              color='primary'
              fontWeight="bold"
            >
              SignIn
            </Text>
          </Link>
          <Link to="/">
            <Text
              color='primary'
              fontWeight="bold"
            >
              Repositories
            </Text>
          </Link>
        </View>
      </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;