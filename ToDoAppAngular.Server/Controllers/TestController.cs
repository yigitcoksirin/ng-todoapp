using Microsoft.AspNetCore.Mvc;

namespace ToDoAppAngular.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {

        [HttpGet]
        [Route("get-numbers")]
        public ActionResult<int[]> GetNumbers()
        {
            int[] numbers = new int[3];
            numbers[0] = 1;
            numbers[1] = 2;
            numbers[2] = 3;
            return Ok(numbers);
        }
    }
}
