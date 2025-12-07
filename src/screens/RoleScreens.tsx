import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { Text, Card, List, FAB, useTheme, Button, IconButton, Chip, Divider, Avatar } from 'react-native-paper';
import { DATA } from '../data/mockData';
import AppHeader from '../components/AppHeader';

// --- TELAS DE MÉDICO ---

export const DoctorAgendaScreen = () => {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: '#f0f4f7' }}>
            <AppHeader title="Minha Agenda" subtitle="Hoje, 07 de Dezembro" />

            <FlatList
                data={DATA.agendaMedico}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ padding: 15 }}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        {/* Coluna do Horário */}
                        <View style={{ width: 60, alignItems: 'center', marginRight: 10, paddingTop: 10 }}>
                            <Text variant="titleMedium" style={{ fontWeight: 'bold', color: theme.colors.primary }}>{item.horario}</Text>
                            <View style={{ width: 2, flex: 1, backgroundColor: '#ddd', marginTop: 5 }}></View>
                        </View>

                        {/* Card do Compromisso */}
                        <Card style={{ flex: 1, backgroundColor: 'white' }}>
                            <Card.Content>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{item.paciente}</Text>
                                    <Chip
                                        compact
                                        textStyle={{ fontSize: 10 }}
                                        mode="outlined"
                                        selectedColor={item.status === 'Confirmado' ? 'green' : item.status === 'Pendente' ? 'orange' : 'gray'}
                                    >
                                        {item.status}
                                    </Chip>
                                </View>
                                <Text variant="bodyMedium">{item.procedimento}</Text>
                            </Card.Content>
                            <Card.Actions style={{ justifyContent: 'flex-end' }}>
                                <Button compact>Ver Prontuário</Button>
                                {item.status !== 'Concluído' && <Button mode="contained" compact>Iniciar</Button>}
                            </Card.Actions>
                        </Card>
                    </View>
                )}
            />
        </View>
    );
};

export const DoctorPatientsScreen = () => (
    <View style={{ flex: 1, backgroundColor: '#f0f4f7' }}>
        <AppHeader title="Meus Pacientes" subtitle="Gestão de Carteira" />

        <View style={{ padding: 10, flex: 1 }}>
            <FlatList
                data={DATA.pacientesLista}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={{ marginBottom: 10, backgroundColor: 'white' }}>
                        <Card.Title
                            title={item.nome}
                            subtitle={`Condição: ${item.condicao}`}
                            left={(props) => <List.Icon {...props} icon="account-circle" />}
                            right={(props) => <IconButton {...props} icon="chevron-right" />}
                        />
                    </Card>
                )}
            />
        </View>
    </View>
);

export const MedicalRecordsScreen = () => {
    const theme = useTheme();
    const prontuarios = DATA.prontuariosPendentes || [];

    return (
        <View style={{ flex: 1, backgroundColor: '#f0f4f7' }}>
            <AppHeader title="Prontuários" subtitle="Atualizações Pendentes" />

            <View style={{ padding: 15 }}>
                <Text variant="titleMedium" style={{ marginBottom: 10, fontWeight: 'bold' }}>Em Edição / Pendentes</Text>

                <FlatList
                    data={prontuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card style={{ marginBottom: 12, backgroundColor: 'white' }}>
                            <Card.Content>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{item.paciente}</Text>
                                    <Chip compact textStyle={{ fontSize: 10 }}>{item.status}</Chip>
                                </View>
                                <Text variant="bodyMedium" style={{ marginTop: 5 }}>Motivo: {item.motivo}</Text>
                                <Text variant="bodySmall" style={{ color: 'gray', marginTop: 5 }}>Atualizado: {item.ultimaAtualizacao}</Text>
                            </Card.Content>
                            <Card.Actions>
                                <Button mode="text">Histórico</Button>
                                <Button mode="contained" compact>Editar</Button>
                            </Card.Actions>
                        </Card>
                    )}
                />

                {prontuarios.length === 0 && (
                    <Text style={{ textAlign: 'center', marginTop: 20, color: 'gray' }}>Nenhum prontuário pendente.</Text>
                )}
            </View>

            <FAB
                icon="plus"
                color="white"
                style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: theme.colors.primary }}
                onPress={() => console.log('Novo prontuário')}
            />
        </View>
    );
};

// --- TELAS DE ADMIN ---

export const AdminDashboardScreen = () => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: '#f0f4f7' }}>
            <AppHeader title="Dashboard Administrativo" subtitle="Visão Geral" />
            <ScrollView style={{ padding: 20 }}>
                {/* Cards de KPI */}
                <Card style={{ backgroundColor: theme.colors.secondaryContainer, marginBottom: 20 }}>
                    <Card.Title title="Financeiro" left={(props) => <List.Icon {...props} icon="cash" />} />
                    <Card.Content>
                        <Text variant="displaySmall" style={{ color: theme.colors.primary }}>{DATA.admin.faturamentoMes}</Text>
                        <Text variant="bodyMedium">Faturamento Acumulado (Mês)</Text>
                    </Card.Content>
                </Card>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <Card style={{ flex: 1, backgroundColor: 'white' }}>
                        <Card.Content style={{ alignItems: 'center' }}>
                            <Text variant="displaySmall" style={{ color: theme.colors.error }}>{DATA.admin.leitosOcupados}</Text>
                            <Text variant="labelSmall" style={{ textAlign: 'center' }}>Leitos Ocupados</Text>
                        </Card.Content>
                    </Card>
                    <Card style={{ flex: 1, backgroundColor: 'white' }}>
                        <Card.Content style={{ alignItems: 'center' }}>
                            <Text variant="displaySmall" style={{ color: 'green' }}>{DATA.admin.leitosTotais - DATA.admin.leitosOcupados}</Text>
                            <Text variant="labelSmall" style={{ textAlign: 'center' }}>Leitos Livres</Text>
                        </Card.Content>
                    </Card>
                </View>
                
                <Text variant="titleMedium" style={{ marginTop: 20, marginBottom: 10, fontWeight: 'bold' }}>Alertas do Sistema</Text>
                <Card style={{ backgroundColor: 'white' }}>
                    <Card.Content>
                        <List.Item title="Estoque Baixo: Dipirona" left={() => <List.Icon icon="alert" color="orange" />} />
                        <List.Item title="Manutenção: Ar-condicionado UTI" left={() => <List.Icon icon="tools" color="gray" />} />
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};

export const AdminAnalyticsScreen = () => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: '#f0f4f7' }}>
            <AppHeader title="Central de Relatórios" subtitle="Exportação de Dados" />
            <ScrollView style={{ padding: 15 }}>
                <Text variant="titleMedium" style={{ marginBottom: 15, fontWeight: 'bold' }}>Relatórios Disponíveis</Text>

                {DATA.relatoriosGerais.map((relatorio) => (
                    <Card key={relatorio.id} style={{ marginBottom: 10, backgroundColor: 'white' }} mode="outlined">
                        <List.Item
                            title={relatorio.titulo}
                            description={`Gerado em: ${relatorio.dataGeracao} • ${relatorio.tamanho}`}
                            left={props => (
                                <Avatar.Icon
                                    {...props}
                                    icon={relatorio.tipo === 'PDF' ? 'file-pdf-box' : relatorio.tipo === 'XLS' ? 'file-excel' : 'file-delimited'}
                                    size={40}
                                    style={{ backgroundColor: relatorio.tipo === 'PDF' ? '#ffebee' : '#e8f5e9', marginLeft: 5 }}
                                    color={relatorio.tipo === 'PDF' ? '#d32f2f' : '#2e7d32'}
                                />
                            )}
                            right={props => <IconButton {...props} icon="download" />}
                        />
                    </Card>
                ))}
            </ScrollView>

            <FAB
                icon="filter"
                label="Filtrar Data"
                color='white'
                style={{ position: 'absolute', margin: 16, right: 0, bottom: 0, backgroundColor: theme.colors.primary }}
                onPress={() => { }}
            />
        </View>
    );
};

export const AdminAdmissionsScreen = () => (
    <View style={{ flex: 1, backgroundColor: '#f0f4f7' }}>
        <AppHeader title="Internações" subtitle="Controle de Leitos" />
        <ScrollView style={{ padding: 10 }}>
            {DATA.internacoes.map((int) => (
                <Card key={int.id} style={{ marginBottom: 10, backgroundColor: 'white' }}>
                    <Card.Title
                        title={int.paciente}
                        subtitle={`Entrada: ${int.entrada}`}
                        left={(props) => <List.Icon {...props} icon="bed" color={int.status === 'UTI' ? 'red' : 'blue'} />}
                    />
                    <Card.Content>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text variant="labelLarge">Leito: <Text style={{ fontWeight: 'bold' }}>{int.leito}</Text></Text>
                            <Chip mode="outlined" selectedColor={int.status === 'UTI' ? 'red' : 'blue'}>{int.status}</Chip>
                        </View>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    </View>
);