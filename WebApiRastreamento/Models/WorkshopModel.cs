using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebApiRastreamento.Models
{
    public class WorkshopModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public DateTime DataDeRealizacao { get; set; }

        public string Descricao { get; set; }

        public WorkshopModel(string nome, DateTime dataDeRealizacao, string descricao)
        {
            Nome = nome;
            DataDeRealizacao = dataDeRealizacao;
            Descricao = descricao;
        }
    }
}