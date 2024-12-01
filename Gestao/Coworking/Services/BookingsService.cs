// using API.Models;

// public class BookingService {
//     public BookingService() {
//         // Construtor
//     }

//     public Booking[] GetAll() {
//         return BookingRepositories.GetAll(); 
//     }
//     public Booking Create(string userName, DateTime date) {
//         Booking booking = new Booking {
//             Users = userName,
//             Date = date,
//             Id = BookingRepositories.GenerateNewId()
//         };

//         BookingRepositories.Create(booking);
//         return booking;
//     }

//     public Booking Update(string id, string newUserName, DateTime newDate) {
//         Booking bookingToUpdate = BookingRepositories.GetById(id);

//         if (bookingToUpdate != null) {
//             bookingToUpdate.Users = newUserName;
//             bookingToUpdate.Date = newDate;

//             BookingRepositories.UpdateById(id, bookingToUpdate);
//             return bookingToUpdate; 
//         }

//         throw new Exception("Booking não encontrado.");
//     }

//     public void Delete(string id) {
//         BookingRepositories.DeleteById(id);
//     }

//     public Booking GetById(string id) {
//         return BookingRepositories.GetById(id); 
//     }
// }
