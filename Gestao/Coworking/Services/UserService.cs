// using API.Models;


// public class UserService

// {
//     public User[] getAll(){
//     if(ctx.Users.Any())
//     {
//         return Results.Ok(ctx.Users.Tolist());
//     }
//     return Results.NotFound();
// }

// public User getById(){
//     User? user = ctx.User.Find(id);

//     if (user == null)
//     {
//         return Results.NotFound();
//     }
//     return Results.Ok(user);
// }

// public User Create (){
//     ctx.Users.Add(user);
//     ctx.SaveChanges();
//     return Results.Created();
// }

// public void Delete(){
//     User? user = ctx.User.Find(id);
    
//     if (user == null)
//     {
//         return Results.NotFound();
//     }

//     ctx.Users.Remove(user);
//     ctx.SaveChanges();
//     return Results.Ok(user);
// }

// public User Update(){
//     User? user = ctx.User.Find(id);
//     if (user == null)
//     {
//         return Results.NotFound();
//     }
//     user.Name = userAlterado.Name;
//     user.Email = userAlterado.Email;
//     user.Cellphone = userAlterado.Cellphone;
//     user.TaxNumber = userAlterado.TaxNumber;
//     user.Password = userAlterado.Password;
//     ctx.Users.Update(user);
//     ctx.SaveChanges();
//     return Results.Ok(user);
// }

// }