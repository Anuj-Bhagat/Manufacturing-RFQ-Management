using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RFQMicroservice.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RFQ",
                columns: table => new
                {
                    rfqId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    demandid = table.Column<int>(type: "int", nullable: false),
                    Part_Id = table.Column<int>(type: "int", nullable: false),
                    partName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Quantity = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    timetoSupply = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Specification = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RFQ", x => x.rfqId);
                });

            migrationBuilder.CreateTable(
                name: "SUPPLIER",
                columns: table => new
                {
                    Part_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Supplier_id = table.Column<int>(type: "int", nullable: false),
                    Supplier_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Feedback = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SUPPLIER", x => x.Part_id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RFQ");

            migrationBuilder.DropTable(
                name: "SUPPLIER");
        }
    }
}
