using Microsoft.EntityFrameworkCore;

namespace API.Models;

public class AppDataContext : DbContext
{
    public DbSet<Payment> Payment { get; set; }
    public DbSet<User> User { get; set; }
    public DbSet<Spaces> Spaces { get; set; }
    public DbSet<Booking> Booking { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=Ecommerce.db");
    }

}