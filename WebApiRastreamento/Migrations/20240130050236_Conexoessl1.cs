using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApiRastreamento.Migrations
{
    /// <inheritdoc />
    public partial class Conexoessl1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            string sql = File.ReadAllText("../WebApiRastreamento/Db/table.sql");

            // Executa os comandos SQL no banco de dados
            migrationBuilder.Sql(sql);
        }

    }
}
