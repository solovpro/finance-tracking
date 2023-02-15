import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

export const useNavigationType = () => useNavigation<NavigationProp<ParamListBase>>();
