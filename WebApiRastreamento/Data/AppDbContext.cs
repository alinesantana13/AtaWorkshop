using Microsoft.EntityFrameworkCore;
using WebApiRastreamento.Models;

namespace WebApiRastreamento.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<ColaboradorModel> Colaboradores { get; set; }
        public DbSet<WorkshopModel> Workshops { get; set; }
        public DbSet<AtaDePresencaModel> AtaDePresenca { get; set; }

    }
}
