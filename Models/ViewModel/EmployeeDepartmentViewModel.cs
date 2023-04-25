using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Validation.Models.ViewModel
{
    public class EmployeeDepartmentViewModel
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public char Gender { get; set; }
        public bool IsActive { get; set; }
        public string DepartmentName { get; set; }
    }
}
