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
            int[] numbers = new int[6];
            numbers[0] = 1;
            numbers[1] = 2;
            numbers[2] = 3;
            numbers[3] = 4;
            numbers[4] = 5;
            numbers[5] = 6;
            return Ok(numbers);
        }
    }
}
