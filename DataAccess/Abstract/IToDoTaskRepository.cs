using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;

namespace DataAccess.Abstract
{
    public interface IToDoTaskRepository : IRepository<ToDoTask>
    {
        public ToDoTask GetByStrId(string id);
    }
}
