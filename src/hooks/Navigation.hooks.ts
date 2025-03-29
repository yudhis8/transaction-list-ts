import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainNavigationParamList} from '@Types/navigation.type';

export const useTypedRoute = <
  RouteParams extends Record<string, object | undefined>,
  RouteName extends keyof RouteParams,
>() => {
  const route = useRoute<RouteProp<RouteParams, RouteName>>();
  return route;
};

export const useNavigationWithParams = () => {
  return useNavigation<NativeStackNavigationProp<MainNavigationParamList>>();
};
