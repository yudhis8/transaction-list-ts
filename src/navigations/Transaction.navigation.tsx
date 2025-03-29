import {ColorToken} from '@Constants/Color.constants';
import RouteName from '@Constants/Route.constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailTransaction from '@Screens/transaction/detail';
import ListTransaction from '@Screens/transaction/list';
import * as React from 'react';

const Stack = createNativeStackNavigator();
const TransactionNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.ListTransaction}
      screenOptions={{
        headerShown: true,
        contentStyle: {backgroundColor: ColorToken.Background},
      }}>
      <Stack.Screen
        options={{headerTitle: 'Transaction List'}}
        name={RouteName.ListTransaction}
        component={ListTransaction}
      />
      <Stack.Screen
        options={{headerTitle: 'Transaction Detail'}}
        name={RouteName.DetailTransaction}
        component={DetailTransaction}
      />
    </Stack.Navigator>
  );
};

export default TransactionNavigation;
