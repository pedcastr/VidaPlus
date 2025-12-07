import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, Icon } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

import DashboardScreen from '../screens/DashboardScreen';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import TelemedicineScreen from '../screens/TelemedicineScreen';
import {
    DoctorPatientsScreen,
    MedicalRecordsScreen,
    AdminAdmissionsScreen,
    AdminDashboardScreen,
    AdminAnalyticsScreen,
    DoctorAgendaScreen
} from '../screens/RoleScreens';

const Tab = createBottomTabNavigator();

const PaperTabBar = ({ navigation, state, descriptors, insets }: any) => (
    <BottomNavigation.Bar
        navigationState={state}
        safeAreaInsets={insets}
        style={{ backgroundColor: 'white', borderTopWidth: 1, borderTopColor: '#f0f0f0' }}

        onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
            });

            if (event.defaultPrevented) {
                preventDefault();
            } else {
                navigation.dispatch({
                    ...CommonActions.navigate({
                        name: (route as any).name,
                        params: (route as any).params,
                    }),
                    target: state.key,
                });
            }
        }}
        renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
            }
            return null;
        }}
        getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            return options.tabBarLabel as string;
        }}
    />
);

export default function MainNavigator() {
    const { user } = useContext(AuthContext);

    if (!user) return null;

    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <PaperTabBar {...props} />}
        >
            {/* --- ABAS DE PACIENTE --- */}
            {user.tipo === 'PACIENTE' && (
                <>
                    <Tab.Screen
                        name="Home"
                        component={DashboardScreen}
                        options={{
                            tabBarLabel: 'Início',
                            tabBarIcon: ({ color }) => <Icon source="home" size={24} color={color} />
                        }}
                    />
                    <Tab.Screen
                        name="Agenda"
                        component={AppointmentsScreen}
                        options={{
                            tabBarLabel: 'Agenda',
                            tabBarIcon: ({ color }) => <Icon source="calendar" size={24} color={color} />
                        }}
                    />
                    <Tab.Screen
                        name="Telemedicina"
                        component={TelemedicineScreen}
                        options={{
                            tabBarLabel: 'Telemedicina',
                            tabBarIcon: ({ color }) => <Icon source="video" size={24} color={color} />
                        }}
                    />
                </>
            )}

            {/* --- ABAS DE MÉDICO --- */}
            {user.tipo === 'MEDICO' && (
                <>
                    <Tab.Screen
                        name="AgendaMedico"
                        component={DoctorAgendaScreen}
                        options={{ tabBarLabel: 'Minha Agenda', tabBarIcon: ({ color }) => <Icon source="calendar-clock" size={24} color={color} /> }}
                    />
                    <Tab.Screen
                        name="Prontuarios"
                        component={MedicalRecordsScreen}
                        options={{
                            tabBarLabel: 'Prontuários',
                            tabBarIcon: ({ color }) => <Icon source="clipboard-pulse" size={24} color={color} />
                        }}
                    />
                    <Tab.Screen
                        name="Pacientes"
                        component={DoctorPatientsScreen}
                        options={{
                            tabBarLabel: 'Pacientes',
                            tabBarIcon: ({ color }) => <Icon source="account-group" size={24} color={color} />
                        }}
                    />
                </>
            )}

            {/* --- ABAS DE ADMIN --- */}
            {user.tipo === 'ADMIN' && (
                <>
                    <Tab.Screen
                        name="DashboardAdmin"
                        component={AdminDashboardScreen}
                        options={{ tabBarLabel: 'Dashboard', tabBarIcon: ({ color }) => <Icon source="view-dashboard" size={24} color={color} /> }}
                    />
                    <Tab.Screen
                        name="Internacoes"
                        component={AdminAdmissionsScreen}
                        options={{ tabBarLabel: 'Internações', tabBarIcon: ({ color }) => <Icon source="bed" size={24} color={color} /> }}
                    />
                    <Tab.Screen
                        name="Relatorios"
                        component={AdminAnalyticsScreen}
                        options={{ tabBarLabel: 'Relatórios', tabBarIcon: ({ color }) => <Icon source="file-chart" size={24} color={color} /> }}
                    />
                </>
            )}
        </Tab.Navigator>
    );
}