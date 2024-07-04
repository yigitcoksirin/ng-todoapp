using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;

namespace Business.Abstract
{
    public interface IToDoTaskService
    {
        public ToDoTask GetById(int id);
        public List<ToDoTask> GetAll();
        public void Create(ToDoTask entity);
        public void Update(ToDoTask entity);
        public void Delete(ToDoTask entity);
    }
}
