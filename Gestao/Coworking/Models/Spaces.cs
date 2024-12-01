using System;
using System.Collections.Generic;
using System.Linq;

namespace API.Models
{
    public class Spaces
    {
        public Spaces()
        {
            Id = Guid.NewGuid().ToString();
            Reservations = new List<Reservation>(); 
        }

        public string Id { get; set; } 
        public string Name { get; set; }
        public int Capacity { get; set; }
        public decimal PricePerHour { get; set; }
        public List<Reservation> Reservations { get; set; }

       
 }

    public class Reservation
    {
        public Guid Id { get; set; } 
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public bool Overlaps(Reservation otherReservation)
        {
            return StartDate < otherReservation.EndDate && EndDate > otherReservation.StartDate;
        }
    }
}