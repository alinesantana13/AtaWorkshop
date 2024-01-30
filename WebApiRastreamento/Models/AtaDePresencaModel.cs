using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebApiRastreamento.Models
{
    public class AtaDePresencaModel
    {
        public int Id { get; set; }
        public int WorkshopId { get; set; }
        public int ColaboradorId { get; set; }
        public AtaDePresencaModel(int workshopId, int colaboradorId)
        {
            WorkshopId = workshopId;
            ColaboradorId = colaboradorId;
        }
    }
}