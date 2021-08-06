/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import store from './store/store';
import { Provider } from 'react-redux';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        accent: 'yellow',
    },
};

export default function Main() {
    return (
        <PaperProvider
            theme={theme}
            settings={{
                icon: props => <AwesomeIcon {...props} />,
            }}

        >
            <Provider store={store}>
                <App />
            </Provider>
        </PaperProvider>
    );
}



AppRegistry.registerComponent(appName, () => Main);
