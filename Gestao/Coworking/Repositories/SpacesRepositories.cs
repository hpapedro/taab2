// using System;
// using API.Models;
// using System.Collections.Generic;
// using System.Linq;

// public class SpacesRepository
// {


//     public SpacesRepository()
//     {
//         _context = context;
//     }

//     public List<Spaces> GetAll()
//     {
//         return _context.Spacess.ToList();
//     }

//     public Spaces GetById(Guid id)
//     {
//         return _context.Spacess.Find(id); // Remove the second return statement
//     }

//     public void Add(Spaces Spaces)
//     {
//         _context.Spacess.Add(Spaces);
//         _context.SaveChanges();
//     }

//     public void Update(Spaces Spaces)
//     {
//         _context.Spacess.Update(Spaces);
//         _context.SaveChanges();
//     }

//     public void Remove(Spaces Spaces)
//     {
//         _context.Spacess.Remove(Spaces);
//         _context.SaveChanges();
//     }
// }