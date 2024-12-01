// using API.Models;
// using System;
// using System.Linq; // Para o uso de métodos LINQ
// using Microsoft.EntityFrameworkCore;

// public class BookingRepositories {
//     private readonly DbContext _context;

//     public BookingRepositories(DbContext context) {
//         _context = context;
//     }

//     // Método para pegar todos os bookings
//     public Booking[] GetAll() {
//         return _context.Set<Booking>().ToArray(); // Retorna todos os registros como array
//     }

//     // Método para pegar um booking pelo ID
//     public Booking GetById(int id) {
//         return _context.Set<Booking>().Find(id); // Retorna o booking pelo ID
//     }

//     // Método para criar um novo booking
//     public void Create(Booking booking) {
//         _context.Set<Booking>().Add(booking); // Adiciona o booking ao banco
//         _context.SaveChanges(); // Salva as mudanças no banco
//     }

//     // Método para atualizar um booking pelo ID
//     public void UpdateById(int id, Booking bookingAtualizado) {
//         var bookingExistente = _context.Set<Booking>().Find(id); // Localiza o booking existente

//         if (bookingExistente != null) {
//             bookingExistente.Users = bookingAtualizado.Users;
//             bookingExistente.Date = bookingAtualizado.Date;

//             _context.Entry(bookingExistente).State = EntityState.Modified; // Marca o booking como modificado
//             _context.SaveChanges(); // Salva as mudanças no banco
//         }
//     }

//     // Método para deletar um booking pelo ID
//     public void DeleteById(int id) {
//         var booking = _context.Set<Booking>().Find(id); // Localiza o booking

//         if (booking != null) {
//             _context.Set<Booking>().Remove(booking); // Remove o booking do banco
//             _context.SaveChanges(); // Salva as mudanças no banco
//         }
//     }

//     // Método para gerar um novo ID, se necessário
//     public int GenerateNewId() {
//         // Supondo que você queira gerar IDs incrementais
//         return _context.Set<Booking>().Max(b => b.Id) + 1;
//     }
// }
