/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();
LogBox.ignoreAllLogs();
AppRegistry.registerComponent(appName, () => App);
