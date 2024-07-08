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
        public string taskId { get; set; }
        public string text { get; set; }
        public bool isCompleted { get; set; }
        [NotMapped]
        public bool isDeleted { get; set; }
        [NotMapped]
        public bool isNew { get; set; }
        [NotMapped]
        public bool isUpdated { get; set; }


    }
}
