export interface Booking {
  id: string;          // ID da reserva
  userId: string;      // ID do usuário (supondo que cada reserva tem um usuário)
  startDate: Date;     // Data de início da reserva
  endDate: Date;       // Data de fim da reserva
  createdAt: Date;     // Data de criação
}
