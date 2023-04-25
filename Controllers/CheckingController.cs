using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Validation.Controllers
{
    public class CheckingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Customer()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Customer(object obj)
        {
            if (ModelState.IsValid)
            {

            }
            else
            {
                return View(obj);
            }
            return RedirectToAction("Index");
        }
    }
}
