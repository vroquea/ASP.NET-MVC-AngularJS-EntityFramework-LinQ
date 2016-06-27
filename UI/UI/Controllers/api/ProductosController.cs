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
                using (var db = new NWEntities())
                {
                    var data = db.Products.OrderBy(x => x.ProductName).ToList();
                    return data;
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
        public void Post([FromBody]Product product)
        {
            try
            {
                using (var db = new NWEntities())
                {
                    var myProduct = db.Products.Where(x => x.ProductID == product.ProductID).FirstOrDefault();

                    if (myProduct != null)
                    {
                        db.Entry(myProduct).State = EntityState.Modified;
                        db.Entry(myProduct).CurrentValues.SetValues(product);
                    }
                    else
                    {
                        db.Products.Add(product);
                    }
                   

                    db.SaveChanges();

                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
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
