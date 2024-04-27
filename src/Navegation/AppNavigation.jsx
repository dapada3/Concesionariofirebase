import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Offerts from '../Screens/Offerts';
import Shopping  from '../Screens/Shopping';
import VehicleCredit from '../Screens/VehicleCredit';
import  VehicleInsurance  from '../Screens/VehicleInsurance';


const Tab = createBottomTabNavigator();

const AppNavigation = ()=> {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home'  component={Home}/>
            <Tab.Screen name='Ofertas' component={Offerts}/>
            <Tab.Screen name='Compras' component={Shopping}/>
            <Tab.Screen name='Creditos' component={VehicleCredit}/>
            <Tab.Screen name='Seguros' component={VehicleInsurance}/>
        </Tab.Navigator>
    )
}

export default AppNavigation