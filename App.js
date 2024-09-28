import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
};

export default App;