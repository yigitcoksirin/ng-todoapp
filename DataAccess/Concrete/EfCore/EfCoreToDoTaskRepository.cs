using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Abstract;
using Entities;

namespace DataAccess.Concrete.EfCore
{
    public class EfCoreToDoTaskRepository :
        EfCoreGenericRepository<ToDoTask>, IToDoTaskRepository
    {
        public EfCoreToDoTaskRepository(ToDoContext context) : base(context) 
        {

        }

        private ToDoContext ToDoContext
        {
            get { return context as ToDoContext; }
        }

        public ToDoTask GetById(string id)
        {
            return context.Set<ToDoTask>().Find(id);
        }

        public ToDoTask GetByStrId(string id)
        {
            return context.Set<ToDoTask>().Find(id);
        }
    }
}
