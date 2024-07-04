using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Abstract
{
    public interface IRepository<T>
    {
        public T GetById(int id);
        public List<T> GetAll();
        public void Create(T entity);
        public void Update(T entity);
        public void Delete(T entity);
    }
}
