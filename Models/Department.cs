﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Validation.Models
{
    public class Department
    {
        [Key]
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
    }
}
