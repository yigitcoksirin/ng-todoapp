using System.Threading.Tasks;
using Business.Abstract;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ToDoAppAngular.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private IToDoTaskService _taskService;

        public TaskController(IToDoTaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        [Route("get-tasks")]
        public ActionResult<IEnumerable<ToDoTask>> GetTasks()
        {
            var tasks = _taskService.GetAll();
            if (tasks != null)
            {
                return tasks;
            }
            return Ok();
        }

        [HttpPost]
        [Route("save-changes")]
        public ActionResult SaveChanges(List<ToDoTask> tasks)
        {
            var tasksToDelete = new List<ToDoTask>();
            for (var i = 0; i < tasks.Count; i++)
            {
                //if not deleted and created => create
                if (!tasks[i].isDeleted && tasks[i].isNew)
                {
                    _taskService.Create(tasks[i]);
                }

                //if it exists on db...
                if (_taskService.GetByStrId(tasks[i].taskId) != null)
                {
                    //if deleted and it exists on db => delete
                    if (tasks[i].isDeleted)
                    {
                        _taskService.Delete(tasks[i]);
                    }
                    else
                    {
                        _taskService.Update(tasks[i]);
                    }

                }
            }
            return Ok();
        }
    }
}
