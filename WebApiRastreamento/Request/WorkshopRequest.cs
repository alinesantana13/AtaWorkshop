using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiRastreamento.Request
{
    public record WorkshopRequest(string nome, DateTime dataDeRealizacao, string descricao);
}