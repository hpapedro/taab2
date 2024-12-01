export interface Payment {
    id: string; // Identificador único do pagamento
    userId?: string; // ID do usuário associado ao pagamento (opcional)
    spaceId?: string; // ID do espaço associado ao pagamento (opcional)
    amount: number; // Valor do pagamento
    status?: 'pending' | 'paid' | 'failed'; // Status do pagamento, pode ser 'pending', 'paid', ou 'failed'
    createdAt: Date; // Data e hora de criação do pagamento
  }
  
