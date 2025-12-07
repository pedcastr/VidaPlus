export type UserRole = 'ADMIN' | 'MEDICO' | 'PACIENTE';

export interface User {
  id: number;
  nome: string;
  email: string;
  senha?: string;
  tipo: UserRole;
  foto: string;
}

export interface Notification {
  id: number;
  titulo: string;
  mensagem: string;
  data: string;
  lida: boolean;
}

export interface Consulta {
  id: number;
  medico: string;
  especialidade: string;
  data: string;
  horario: string;
  status: 'Agendado' | 'Concluído' | 'Cancelado';
  tipo: 'Presencial' | 'Telemedicina';
}

export interface Prontuario {
  id: number;
  data: string;
  diagnostico: string;
  prescricao: string;
}

export interface AdminData {
  leitosOcupados: number;
  leitosTotais: number;
  faturamentoMes: string;
  alertas: string[];
}

export interface ProntuarioPendente {
  id: number;
  paciente: string;
  motivo: string;
  status: string;
  ultimaAtualizacao: string;
}

export interface CompromissoMedico {
  id: number;
  horario: string;
  paciente: string;
  procedimento: string;
  status: 'Confirmado' | 'Pendente' | 'Concluído';
}

export interface RelatorioAdmin {
  id: number;
  titulo: string;
  dataGeracao: string;
  tipo: 'PDF' | 'XLS' | 'CSV';
  tamanho: string;
}

export interface MockDataType {
  usuarios: User[];
  consultas: Consulta[];
  agendaMedico: CompromissoMedico[];
  prontuarios: Prontuario[];
  prontuariosPendentes: ProntuarioPendente[];
  pacientesLista: any[];
  internacoes: any[];
  notificacoes: Notification[];
  relatoriosGerais: RelatorioAdmin[];
  admin: AdminData;
}