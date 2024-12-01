export interface User {
    id: string; // Identificador único do usuário
    name: string; // Nome do usuário
    email: string; // Email do usuário (deve ser validado)
    cellphone: string; // Número de celular (pode incluir DDD)
    taxNumber: string; // CPF ou CNPJ (dependendo de ser pessoa física ou jurídica)
    createdAt?: Date; // Data de criação do usuário (opcional)
    updatedAt?: Date; // Data da última atualização do usuário (opcional)
  }
  