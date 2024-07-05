using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Business.Abstract;
using DataAccess.Abstract;
using Entities;

namespace Business.Concrete
{
    public class ToDoTaskManager : IToDoTaskService
    {
        private IToDoTaskRepository _toDoTaskRepository;

        public ToDoTaskManager(IToDoTaskRepository toDoTaskRepository)
        {
            _toDoTaskRepository = toDoTaskRepository;
        }

        public void Create(ToDoTask entity)
        {
            _toDoTaskRepository.Create(entity);
        }

        public void Delete(ToDoTask entity)
        {
            _toDoTaskRepository.Delete(entity);
        }

        public List<ToDoTask> GetAll()
        {
            return _toDoTaskRepository.GetAll();
        }

        public ToDoTask GetById(int id)
        {
            return _toDoTaskRepository.GetById(id);
        }

        public ToDoTask GetById(string id)
        {
            return _toDoTaskRepository.GetById(id);
        }

        public void Update(ToDoTask entity)
        {
            _toDoTaskRepository.Update(entity); ;
        }
    }
}
