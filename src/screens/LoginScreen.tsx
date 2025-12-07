import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const { signIn } = useContext(AuthContext);
    const theme = useTheme();
    const navigation = useNavigation<any>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        await signIn(email, password);
        setLoading(false);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} keyboardShouldPersistTaps="handled">
                <View style={styles.container}>

                    <View style={styles.loginBox}>
                        <View style={styles.logoArea}>
                            <View style={styles.logoCircle}>
                                <Text style={styles.logoText}>VP</Text>
                            </View>
                            <Text variant="displaySmall" style={styles.appTitle}>VidaPlus</Text>
                            <Text variant="bodyMedium" style={{ color: '#797878ff' }}>Saúde Inteligente</Text>
                        </View>

                        <Text variant="headlineSmall" style={styles.welcomeText}>Bem-vindo</Text>

                        <TextInput
                            label="E-mail"
                            value={email}
                            onChangeText={setEmail}
                            mode="outlined"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            style={styles.input}
                            left={<TextInput.Icon icon="email" />}
                        />

                        <TextInput
                            label="Senha"
                            value={password}
                            onChangeText={setPassword}
                            mode="outlined"
                            secureTextEntry
                            style={styles.input}
                            left={<TextInput.Icon icon="lock" />}
                        />

                        <Button
                            mode="contained"
                            onPress={handleLogin}
                            loading={loading}
                            disabled={loading}
                            style={styles.loginBtn}
                            contentStyle={{ height: 50 }}
                        >
                            Acessar Sistema
                        </Button>

                        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerLink}>
                            <Text style={{ color: theme.colors.primary }}>Não tem conta? <Text style={{ fontWeight: 'bold' }}>Cadastre-se</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, minHeight: 600, backgroundColor: '#f5f5f5' },
    logoArea: { alignItems: 'center', marginBottom: 40 },
    logoCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#00695c', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
    logoText: { fontSize: 30, fontWeight: 'bold', color: 'white' },
    appTitle: { color: '#00695c', fontWeight: 'bold' },
    loginBox: { width: '100%', padding: 25},
    welcomeText: { textAlign: 'center', marginBottom: 8, fontWeight: 'bold', color: '#555555ff' },
    input: { marginBottom: 15, backgroundColor: 'white' },
    loginBtn: { marginTop: 10, borderRadius: 8 },
    registerLink: { marginTop: 20, alignSelf: 'center' },
    hintBox: { marginTop: 30, padding: 10, backgroundColor: '#f5f5f5', borderRadius: 5 }
});

export default LoginScreen;