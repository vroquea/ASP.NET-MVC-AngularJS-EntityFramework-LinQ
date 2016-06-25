using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UI.Models;

namespace UI.Controllers.api
{
    public class CategoriasController : ApiController
    {
        // GET: api/Categorias
        public IEnumerable<Category> Get()
        {
            try
            {
                using (var db = new NWEntities())
                {
                    var data = db.Categories.ToList();
                    return data;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        // GET: api/Categorias/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Categorias
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Categorias/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Categorias/5
        public void Delete(int id)
        {
        }
    }
}
