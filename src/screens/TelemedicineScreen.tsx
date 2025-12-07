import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button, Card, Text, Divider } from 'react-native-paper';
import { DATA } from '../data/mockData';

const TelemedicineScreen = () => {
    const [sintomas, setSintomas] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Iniciar Atendimento Rápido" subtitle="Descreva o que sente para triagem" />
                <Card.Content>
                    <TextInput
                        label="Sintomas"
                        value={sintomas}
                        onChangeText={text => setSintomas(text)}
                        mode="outlined"
                        multiline
                        numberOfLines={4}
                        style={{ marginBottom: 10, backgroundColor: 'white' }}
                    />
                    <Button mode="contained" icon="send" onPress={() => alert('Dados enviados para triagem!')}>
                        Enviar para Triagem
                    </Button>
                </Card.Content>
            </Card>

            <Text variant="titleMedium" style={styles.sectionTitle}>Histórico de Prontuários (Digital)</Text>

            {DATA.prontuarios.map((prontuario) => (
                <Card key={prontuario.id} style={styles.historyCard}>
                    <Card.Content>
                        <View style={styles.row}>
                            <Text variant="labelLarge">{prontuario.data}</Text>
                            <Text variant="labelLarge" style={{ color: 'purple' }}>Telemedicina</Text>
                        </View>
                        <Divider style={{ marginVertical: 8 }} />
                        <Text variant="bodyMedium"><Text style={{ fontWeight: 'bold' }}>Diagnóstico:</Text> {prontuario.diagnostico}</Text>
                        <Text variant="bodyMedium"><Text style={{ fontWeight: 'bold' }}>Prescrição:</Text> {prontuario.prescricao}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button icon="download">Baixar Receita PDF</Button>
                    </Card.Actions>
                </Card>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15, backgroundColor: '#f0f4f7', marginTop: 30 },
    card: { marginBottom: 20, backgroundColor: 'white' },
    historyCard: { marginBottom: 10, backgroundColor: '#fff' },
    sectionTitle: { marginBottom: 10, marginTop: 10 },
    row: { flexDirection: 'row', justifyContent: 'space-between' }
});

export default TelemedicineScreen;