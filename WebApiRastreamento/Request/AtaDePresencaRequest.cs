using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiRastreamento.Request
{
    public record AtaDePresencaRequest(int workshopId, int colaboradorId);
}