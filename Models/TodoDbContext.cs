using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace p2_test.Models
{
  public class TodoDbContext : DbContext
  {
    public TodoDbContext(DbContextOptions<TodoDbContext> options)
    : base(options)
    {
    }

    public DbSet<TodoItemDTO> TodoItems { get; set; }

  }
}
