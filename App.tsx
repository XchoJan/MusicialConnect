import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigations from './src/navigations';
import { Provider } from 'react-redux';
import { store } from './src/store/store.ts';
import CustomToast from './src/components/CustomToast.tsx';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <CustomToast />
        <RootNavigations />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
