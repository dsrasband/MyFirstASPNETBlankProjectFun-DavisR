using Microsoft.AspNetCore.Mvc;

namespace MyFirstASPNETBlankProjectFun.wwwroot.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
