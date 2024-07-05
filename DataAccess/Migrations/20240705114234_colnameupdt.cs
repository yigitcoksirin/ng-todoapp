using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccess.Migrations
{
    /// <inheritdoc />
    public partial class colnameupdt : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Text",
                table: "ToDoTasks",
                newName: "text");

            migrationBuilder.RenameColumn(
                name: "TaskId",
                table: "ToDoTasks",
                newName: "taskId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "text",
                table: "ToDoTasks",
                newName: "Text");

            migrationBuilder.RenameColumn(
                name: "taskId",
                table: "ToDoTasks",
                newName: "TaskId");
        }
    }
}
