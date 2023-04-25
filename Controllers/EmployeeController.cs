using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Validation.Data;
using Validation.Models.ViewModel;

namespace Validation.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly ApplicationContext context;

        public EmployeeController(ApplicationContext context)
        {
            this.context = context;
        }
        //Using Linq Join Method
        public IActionResult Index()
        {
            var data = (from e in context.Employees
                        join d in context.Departments
                        on e.DepartmentId equals d.DepartmentId 
                        select new EmployeeDepartmentViewModel{
                            EmployeeId=e.EmployeeId,
                            FirstName=e.FirstName,
                            LastName=e.LastName,
                            Gender=e.Gender,
                            IsActive=e.IsActive,
                            DepartmentName=d.DepartmentName
                        }).ToList();
            return View(data);
        }


        //Using merge modal
        public IActionResult EmployeeList()
        {
            EmployeeDepartmentListViewModel emp = new EmployeeDepartmentListViewModel();
            //emp.employees = context.Employees.ToList();
            //emp.departments = context.Departments.ToList();

            var empData = context.Employees.ToList();
            var depData = context.Departments.ToList();
            emp.employees = empData;
            emp.departments = depData;
            return View(emp);
        }
    }
}
