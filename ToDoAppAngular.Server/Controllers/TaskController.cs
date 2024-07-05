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
            return _taskService.GetAll();
        }

        [HttpPost]
        [Route("save-changes")]
        public ActionResult SaveChanges(List<ToDoTask> tasks)
        {
            for (var i = 0; i < tasks.Count; i++)
            {
                Console.WriteLine(tasks[i].Text);
            }
            return Ok();
        }
    }
}
