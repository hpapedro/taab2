// using System;
// using System.Collections.Generic;
// using System.Linq;
// using API.Models; // Ensure the namespace is correct

// public class SpaceService
// {


//     public SpaceService()
//     {
//         _context = context;
//     }

//     public List<Spaces> GetAll()
//     {
//         return _context.Spaces.ToList();
//     }

//     public Spaces GetById(Guid id)
//     {
//         return _context.Spaces.Find(id);
//     }

//     public void Create(Spaces spaces)
//     {
//         _context.Spaces.Add(spaces);
//         _context.SaveChanges();
//     }

//     public void CreateMultipleSpaces()
//     {
//         for (int i = 1; i <= 20; i++)
//         {
//             var space = new Space
//             {
//                 Name = $"Room {i}",
//                 Capacity = 10,
//                 PricePerHour = 50.00m
//             };
//             Create(space);
//         }
//     }

//     public void Update(Guid id, Spaces space)
//     {
//         var existingSpace = GetById(id);
//         if (existingSpace != null)
//         {
//             existingSpace.Name = space.Name;
//             existingSpace.Capacity = space.Capacity;
//             existingSpace.PricePerHour = space.PricePerHour;
//             _context.SaveChanges();
//         }
//     }

//     public void Delete(Guid id)
//     {
//         var spaceToRemove = GetById(id);
//         if (spaceToRemove != null)
//         {
//             _context.Spaces.Remove(spaceToRemove);
//             _context.SaveChanges();
//         }
//     }

//     public bool ReserveSpace(Guid spaceId, Reservation reservation)
//     {
//         var space = GetById(spaceId);
//         if (space != null)
//         {
//             return space.ReserveSpace(reservation);
//         }
//         return false; // Space not found
//     }
// }
