import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Modal, Portal, Text, Button, List, IconButton, useTheme } from 'react-native-paper';
import { DATA } from '../data/mockData';

interface Props {
    visible: boolean;
    onDismiss: () => void;
}

const NotificationsModal = ({ visible, onDismiss }: Props) => {
    const theme = useTheme();

    return (
        <Portal>
            <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modalContainer}>
                <View style={styles.header}>
                    <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Notificações</Text>
                    <IconButton icon="close" onPress={onDismiss} />
                </View>

                <ScrollView>
                    {DATA.notificacoes.map((notif) => (
                        <List.Item
                            key={notif.id}
                            title={notif.titulo}
                            description={notif.mensagem}
                            left={props => <List.Icon {...props} icon={notif.lida ? "bell-outline" : "bell-ring"} color={notif.lida ? 'gray' : theme.colors.primary} />}
                            right={() => <Text variant="labelSmall" style={{ marginTop: 15 }}>{notif.data}</Text>}
                            style={{ backgroundColor: notif.lida ? 'transparent' : '#e0f2f1', borderRadius: 8, marginBottom: 5 }}
                        />
                    ))}
                </ScrollView>

                <Button mode="outlined" onPress={onDismiss} style={{ marginTop: 10 }}>
                    Marcar todas como lidas
                </Button>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        height: '75%', 
        marginTop: 'auto', 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        justifyContent: 'flex-start'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    }
});

export default NotificationsModal;