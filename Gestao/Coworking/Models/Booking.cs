
using System;


public class Booking {
    public string Id { get; set; }
    public string Users { get; set; }
    public DateTime CriadoEm { get; set; }


    public Booking() {
        Id = Guid.NewGuid().ToString();
        CriadoEm = DateTime.Now;
    }
}
