import React, { useContext, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text, Card, Avatar, Button, useTheme } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import NotificationsModal from '../components/NotificationsModal';
import AppHeader from '../components/AppHeader';

const DashboardScreen = () => {
    const theme = useTheme();
    const { user } = useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);

    if (!user) return null;

    return (
        <View style={{ flex: 1, backgroundColor: '#f0f4f7' }}>

            <AppHeader
                showNotificationIcon={true}
                onNotificationPress={() => setModalVisible(true)}
            />

            <ScrollView contentContainerStyle={styles.content}>
                <Card style={styles.card}>
                    <Card.Title title="Próxima Consulta" left={(props) => <Avatar.Icon {...props} icon="calendar-clock" />} />
                    <Card.Content>
                        <Text variant="titleMedium">Dra. Ana Médica</Text>
                        <Text variant="bodyMedium">Cardiologia - 10/12 às 14:00</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Ver Detalhes</Button>
                    </Card.Actions>
                </Card>

                <Card style={[styles.card, { marginTop: 20 }]}>
                    <Card.Title title="Histórico Recente" left={(props) => <Avatar.Icon {...props} icon="history" />}/>
                    <Card.Content>
                        <Text>• Exame de Sangue (01/11)</Text>
                        <Text>• Consulta Dermatologista (15/09)</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Ver Detalhes</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>

            <NotificationsModal visible={modalVisible} onDismiss={() => setModalVisible(false)} />
        </View>
    );
};

const styles = StyleSheet.create({
    content: { padding: 15 },
    card: { marginBottom: 15, backgroundColor: 'white' },
    quickActions: { flexDirection: 'row', gap: 10 },
    actionBtn: { flex: 1 }
});

export default DashboardScreen;