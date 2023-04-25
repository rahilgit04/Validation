using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Validation.Models.ViewModel
{
    public class EmployeeDepartmentListViewModel
    {
        public List<Employee> employees { get; set; }
        public List<Department> departments { get; set; }
    }
}
