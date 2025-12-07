import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Text, Checkbox, useTheme } from 'react-native-paper';

const RegisterScreen = ({ navigation }: any) => {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#f0f4f7' }}>
            <Text variant="headlineMedium" style={{ color: theme.colors.primary, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', marginTop: 20 }}>Criar Conta</Text>
            <ScrollView contentContainerStyle={styles.container}>

                <TextInput label="Nome Completo" mode="outlined" style={styles.input} />
                <TextInput label="CPF" keyboardType="numeric" mode="outlined" style={styles.input} />
                <TextInput label="E-mail" keyboardType="email-address" mode="outlined" style={styles.input} />
                <TextInput label="Senha" secureTextEntry mode="outlined" style={styles.input} />
                <TextInput label="Confirmar Senha" secureTextEntry mode="outlined" style={styles.input} />

                <View style={styles.checkboxContainer}>
                    <Checkbox status="checked" />
                    <Text style={{ flex: 1 }}>Li e aceito os Termos de Uso e Política de Privacidade do VidaPlus.</Text>
                </View>

                <Button mode="contained" style={styles.btn} onPress={() => navigation.goBack()}>
                    Cadastrar
                </Button>

                <Button mode="text" onPress={() => navigation.goBack()}>
                    Voltar para Login
                </Button>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexGrow: 1 },
    input: { marginBottom: 15, backgroundColor: 'white' },
    checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    btn: { marginBottom: 10, height: 50, justifyContent: 'center' }
});

export default RegisterScreen;