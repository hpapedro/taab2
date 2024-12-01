using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Coworking.Migrations
{
    /// <inheritdoc />
    public partial class ChangePayment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Quantidade",
                table: "Payment");

            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Payment",
                newName: "userId");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "Payment",
                newName: "status");

            migrationBuilder.AddColumn<string>(
                name: "spaceId",
                table: "Payment",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "spaceId",
                table: "Payment");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "Payment",
                newName: "Nome");

            migrationBuilder.RenameColumn(
                name: "status",
                table: "Payment",
                newName: "Descricao");

            migrationBuilder.AddColumn<int>(
                name: "Quantidade",
                table: "Payment",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
