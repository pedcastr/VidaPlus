import React, { createContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';
import { User } from '../types';
import { DATA } from '../data/mockData';

interface AuthContextData {
    user: User | null;
    signIn: (email: string, pass: string) => Promise<boolean>;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const signIn = async (email: string, pass: string): Promise<boolean> => {
        await new Promise(resolve => setTimeout(resolve, 500));

        const usuarioEncontrado = DATA.usuarios.find(u => u.email === email && u.senha === pass);

        if (usuarioEncontrado) {
            setUser(usuarioEncontrado);
            return true;
        } else {
            Alert.alert("Erro", "Email ou senha inválidos");
            return false;
        }
    };

    const signOut = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};