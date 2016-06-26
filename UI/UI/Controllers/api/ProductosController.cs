using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Serialization;
using System.Web.Http;
using UI.Models;

namespace UI.Controllers.api
{
    public class ProductosController : ApiController
    {
        // GET: api/Productos
        public IEnumerable<Product> Get()
        {
            try
            {
                using (var db = new NWEntities())
                {
                    return db.Products.OrderBy(x=>x.ProductName).ToList();
                }
            }
            catch (SerializationException ex)
            {
                throw ex;
            }
        }

        // GET: api/Productos/5
        public Product Get(int id)
        {
            try
            {
                using (var db = new NWEntities())
                {
                    var data = db.Products.Where(x => x.ProductID == id).Include("Category").FirstOrDefault();
                    return data;
                }
            }
            catch (Exception ex)
            {
                throw ex;
                throw;
            }
        }

        // POST: api/Productos
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Productos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Productos/5
        public void Delete(int id)
        {
        }
    }
}
