import { MockDataType } from '../types';

export const DATA: MockDataType = {
    usuarios: [
        { id: 1, nome: "Carlos Paciente", email: "paciente@vidaplus.com", senha: "123", tipo: "PACIENTE", foto: "https://i.pravatar.cc/150?img=11" },
        { id: 2, nome: "Dra. Ana Médica", email: "medico@vidaplus.com", senha: "123", tipo: "MEDICO", foto: "https://i.pravatar.cc/150?img=5" },
        { id: 3, nome: "Geraldo Admin", email: "admin@vidaplus.com", senha: "123", tipo: "ADMIN", foto: "https://i.pravatar.cc/150?img=12" },
    ],
    notificacoes: [
        { id: 1, titulo: "Consulta Confirmada", mensagem: "Sua consulta com Dra. Ana foi confirmada para amanhã.", data: "Hoje, 10:00", lida: false },
        { id: 2, titulo: "Resultado de Exame", mensagem: "O hemograma completo já está disponível.", data: "Ontem, 14:30", lida: true },
        { id: 3, titulo: "Vacinação", mensagem: "Campanha de gripe começa dia 20.", data: "05/12", lida: false },
    ],
    prontuariosPendentes: [
        { id: 10, paciente: "João da Silva", motivo: "Dor Torácica", status: "Em Aberto", ultimaAtualizacao: "10 min atrás" },
        { id: 11, paciente: "Maria Oliveira", motivo: "Retorno Diabetes", status: "Aguardando Assinatura", ultimaAtualizacao: "1 hora atrás" },
        { id: 12, paciente: "Pedro Souza", motivo: "Check-up Geral", status: "Em Aberto", ultimaAtualizacao: "Ontem" },
    ],
    pacientesLista: [
        { id: 1, nome: "João da Silva", ultimaConsulta: "10/10/2023", condicao: "Hipertenso" },
        { id: 2, nome: "Maria Oliveira", ultimaConsulta: "01/12/2023", condicao: "Diabética" },
    ],
    internacoes: [
        { id: 101, paciente: "Roberto Costa", leito: "304-A", entrada: "05/12/2023", status: "UTI" },
        { id: 102, paciente: "Julia Lima", leito: "202-B", entrada: "06/12/2023", status: "Observação" },
    ],
    consultas: [
        { id: 1, medico: "Dr. Ana Souza", especialidade: "Cardiologia", data: "10/12/2023", horario: "14:00", status: "Agendado", tipo: "Presencial" },
        { id: 2, medico: "Dr. Pedro Santos", especialidade: "Clínico Geral", data: "12/12/2023", horario: "09:30", status: "Concluído", tipo: "Telemedicina" },
    ],
    prontuarios: [
        { id: 1, data: "01/11/2023", diagnostico: "Hipertensão Leve", prescricao: "Losartana 50mg" },
        { id: 2, data: "15/09/2023", diagnostico: "Gripe Sazonal", prescricao: "Dipirona e Repouso" },
    ],
    admin: {
        leitosOcupados: 45,
        leitosTotais: 60,
        faturamentoMes: "R$ 150.000,00",
        alertas: ["Estoque de Dipirona baixo", "Manutenção Ar-condicionado UTI"]
    },
    agendaMedico: [
        { id: 1, horario: "08:00", paciente: "Roberto Carlos", procedimento: "Primeira Consulta", status: "Concluído" },
        { id: 2, horario: "09:00", paciente: "Julia Roberts", procedimento: "Retorno", status: "Confirmado" },
        { id: 3, horario: "10:30", paciente: "Tom Cruise", procedimento: "Avaliação Cirúrgica", status: "Pendente" },
        { id: 4, horario: "14:00", paciente: "Sandra Bullock", procedimento: "Rotina", status: "Confirmado" },
    ],
    relatoriosGerais: [
        { id: 1, titulo: "Fechamento Financeiro - Nov/2023", dataGeracao: "01/12/2023", tipo: "PDF", tamanho: "2.4 MB" },
        { id: 2, titulo: "Relatório de Ocupação de Leitos", dataGeracao: "05/12/2023", tipo: "XLS", tamanho: "500 KB" },
        { id: 3, titulo: "Auditoria de Estoque", dataGeracao: "06/12/2023", tipo: "CSV", tamanho: "120 KB" },
        { id: 4, titulo: "Performance Médica Anual", dataGeracao: "07/12/2023", tipo: "PDF", tamanho: "5.1 MB" },
    ]
};