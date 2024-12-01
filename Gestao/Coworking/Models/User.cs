namespace API.Models;

public class User
{
    public User()
    {
        Id = Guid.NewGuid().ToString();
        CriadoEm = DateTime.Now;
        
    }
    
        public string ? Name  {get; set;}
        public string ? Id {get; set;}
        public string ? Email {get; set;}
        public int ? Cellphone {get; set;}
        public string ? taxNumber {get; set;}
        public string ? Password {get; set;}
        public  DateTime ? CriadoEm {get; set;}
    


}