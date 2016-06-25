namespace UI.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class NWEntities : DbContext
    {
        public NWEntities()
            : base("NWEntities")
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

    }
}
