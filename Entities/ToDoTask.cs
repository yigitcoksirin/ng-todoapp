using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class ToDoTask
    {
        [Key]
        public int TaskId { get; set; }
        public string Text { get; set; }
        public bool isCompleted { get; set; }
        [NotMapped]
        public bool isDeleted { get; set; }
    }
}
