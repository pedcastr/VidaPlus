import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Card, Text, Chip, FAB, Button, useTheme } from 'react-native-paper';
import { DATA } from '../data/mockData';
import { Consulta } from '../types';

const AppointmentsScreen = () => {
    const theme = useTheme();

    const renderItem = ({ item }: { item: Consulta }) => (
        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.row}>
                    <View>
                        <Text variant="titleMedium">{item.medico}</Text>
                        <Text variant="bodySmall">{item.especialidade}</Text>
                    </View>
                    <Chip icon={item.tipo === 'Telemedicina' ? 'video' : 'hospital-building'}>{item.tipo}</Chip>
                </View>
                <View style={[styles.row, { marginTop: 10 }]}>
                    <Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>
                        {item.data} às {item.horario}
                    </Text>
                    <Text style={{ color: item.status === 'Agendado' ? 'orange' : 'green' }}>{item.status}</Text>
                </View>
            </Card.Content>
            <Card.Actions>
                <Button textColor={theme.colors.error}>Cancelar</Button>
                <Button>Reagendar</Button>
            </Card.Actions>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA.consultas}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ padding: 15 }}
            />
            <FAB
                icon="plus"
                label="Nova"
                color="white"
                style={[styles.fab, { backgroundColor: theme.colors.primary }]}
                onPress={() => console.log('Abrir modal')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f4f7', marginTop: 30 },
    card: { marginBottom: 10, backgroundColor: 'white' },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    fab: { position: 'absolute', margin: 16, right: 0, bottom: 0 },
});

export default AppointmentsScreen;