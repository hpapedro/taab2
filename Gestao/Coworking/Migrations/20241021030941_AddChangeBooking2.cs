using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Coworking.Migrations
{
    /// <inheritdoc />
    public partial class AddChangeBooking2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Booking",
                newName: "CriadoEm");

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "Booking",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CriadoEm",
                table: "Booking",
                newName: "Date");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Booking",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT")
                .Annotation("Sqlite:Autoincrement", true);
        }
    }
}
