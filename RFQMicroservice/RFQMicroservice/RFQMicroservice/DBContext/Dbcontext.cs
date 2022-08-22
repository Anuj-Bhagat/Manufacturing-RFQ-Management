using Microsoft.EntityFrameworkCore;
using RFQMicroservice.Model;

namespace RFQMicroservice.DBContext
{
    public class Dbcontext : DbContext
    {
        public Dbcontext(DbContextOptions<Dbcontext> options) : base(options)
        {}
        public DbSet<Rfq> RFQ { get; set; }
        public DbSet<Supplier> SUPPLIER { get; set; }
    }
}
