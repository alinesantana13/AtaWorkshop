using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiRastreamento.Models
{
    public class ColaboradorModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public ColaboradorModel(string nome)
        {
            Nome = nome;
        }

    }
}