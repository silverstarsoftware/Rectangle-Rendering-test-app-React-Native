import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';



const Root = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
});

export const HCLibAppNavigations = createAppContainer(Root);
