using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
var app = builder.Build();

List<int[]> numberFours = new();

app.MapGet("/fours", () => Results.Ok(numberFours));

app.MapGet("/fours/{id}", (int id) =>
{
    if (id < 0 || id >= numberFours.Count)
        return Results.NotFound("Index out of range");
    return Results.Ok(numberFours[id]);
});

app.MapPost("/fours", ([FromBody] int[] numbers) =>
{
    if (numbers.Length != 4)
        return Results.BadRequest("Invalid data");
    
    if (!numberFours.Exists(n => n[0] == numbers[0] && n[1] == numbers[1] && n[2] == numbers[2] && n[3] == numbers[3]))
    {
        numberFours.Add(numbers);
    }
    return Results.Ok(numbers);
});

app.Run();