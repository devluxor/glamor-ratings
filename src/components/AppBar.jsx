import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    padding: 10,
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
      </ScrollView>
    </View>
  );
};

export default AppBar;