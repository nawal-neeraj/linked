import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { Root } from "native-base";
import AppRouter from './src/routes/Routes';
import RNBootSplash from "react-native-bootsplash";


function App() {
  useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);

  return (
    <Root>
      <AppRouter />
    </Root>
  )
}

export default App;