import { TabNavigator } from 'react-navigation';
import SettingContainer from '../containers/SettingContainer';
import AppoContainer from '../containers/AppoContainer';

const TabNavigator = TabNavigator({
    SettingContainer: {screen: SettingContainer},
    SettingConAppoContainertainer: {screen: AppoContainer},
},{
    tabBarOptions:{
        fontWeight:'600',
    }
});

export default TabNavigator;