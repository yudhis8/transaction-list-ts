import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';

import RouteName from '@Constants/Route.constants';
import TransactionNavigation from '@Navigation/Transaction.navigation';

const Stack = createNativeStackNavigator();
const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator
          initialRouteName={RouteName.TransactionNavigation}
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={RouteName.TransactionNavigation}
            component={TransactionNavigation}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavigation;
