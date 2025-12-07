import React, { useContext } from 'react';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

interface AppHeaderProps {
    title?: string;
    subtitle?: string;
    showNotificationIcon?: boolean;
    onNotificationPress?: () => void;
}

const AppHeader = ({ title, subtitle, showNotificationIcon, onNotificationPress }: AppHeaderProps) => {
    const { user, signOut } = useContext(AuthContext);
    const theme = useTheme();

    if (!user) return null;

    return (
        <Appbar.Header style={{ backgroundColor: theme.colors.primary }} elevated>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Avatar.Image size={40} source={{ uri: user.foto }} />
            </View>

            <Appbar.Content
                title={title || `Olá, ${user.nome.split(' ')[0]}`}
                subtitle={subtitle || user.tipo}
                titleStyle={{ color: 'white', fontWeight: 'bold' }}
                subtitleStyle={{ color: '#e0f2f1' }}
            />

            {showNotificationIcon && (
                <Appbar.Action icon="bell" color="white" onPress={onNotificationPress} />
            )}

            <Appbar.Action icon="logout" color="white" onPress={signOut} />
        </Appbar.Header>
    );
};

import { View } from 'react-native'; // Necessário para envolver o Avatar
export default AppHeader;