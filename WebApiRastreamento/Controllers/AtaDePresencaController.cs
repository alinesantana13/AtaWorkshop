using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebApiRastreamento.Data;
using WebApiRastreamento.Models;
using WebApiRastreamento.Request;

namespace WebApiRastreamento.Controllers
{
    [Route("api/atadepresenca")]
    public class AtaDePresencaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AtaDePresencaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAtaDePresenca()
        {
            var ataDePresenca = _context.AtaDePresenca.ToList();

            return Ok(ataDePresenca);
        }

        [HttpGet("workshopId")]
        public IActionResult GetAtaDePresencaByWorkshop(int workshopId)
        {

            try
            {
                var atadepresenca = _context.AtaDePresenca.Where(x => x.WorkshopId == workshopId);

                if (atadepresenca.Count() == 0)
                {
                    return NotFound();
                }

                return Ok(atadepresenca);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Erro inersperado no servidor: " + ex.Message);
            }
        }

        [HttpGet("colaboradorId")]
        public IActionResult GetAtaDePresencaByColaborador(int colaboradorId)
        {

            try
            {
                var atadepresenca = _context.AtaDePresenca.Where(x => x.ColaboradorId == colaboradorId);

                if (atadepresenca.Count() == 0)
                {
                    return NotFound();
                }

                return Ok(atadepresenca);
            }
            catch (DbUpdateException ex)
            {
                return StatusCode(500, "Erro ao salvar as alterações no banco de dados: " + ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Erro inersperado no servidor: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateAtaDePresenca(AtaDePresencaRequest request)
        {
            try
            {
                var novaAssinatura = new AtaDePresencaModel(request.workshopId,
                request.colaboradorId);

                // var colaborador = _context.Colaboradores.FirstOrDefault(x => x.Id == request.colaboradorId);
                // Console.WriteLine($"Resposta: {colaborador}");

                await _context.AtaDePresenca.AddAsync(novaAssinatura);
                await _context.SaveChangesAsync();

                var ataDePresenca = _context.AtaDePresenca.ToList();

                return Ok(ataDePresenca);
            }

            catch (Exception ex)
            {
                return StatusCode(500, "Erro: " + ex.Message);
            }

        }

        [HttpPut]
        public async Task<IActionResult> UpdateAtaDePresenca(AtaDePresencaModel editarAtaDePresenca)
        {
            try
            {
                var ataDePresenca = _context.AtaDePresenca.FirstOrDefault(x => x.Id == editarAtaDePresenca.Id);


                if (ataDePresenca == null)
                {
                    return NotFound();
                }

                ataDePresenca.WorkshopId = editarAtaDePresenca.WorkshopId;
                ataDePresenca.ColaboradorId = editarAtaDePresenca.ColaboradorId;

                await _context.SaveChangesAsync();

                var atasDePresenca = _context.AtaDePresenca.ToList();

                return Ok(atasDePresenca);

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Erro: " + ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAtaDePresenca(int id)
        {
            try
            {
                var ataDePresenca = _context.AtaDePresenca.FirstOrDefault(x => x.Id == id);

                if (ataDePresenca == null)
                {
                    return NotFound();
                }

                _context.AtaDePresenca.Remove(ataDePresenca);
                await _context.SaveChangesAsync();

                var atasDePresenca = _context.AtaDePresenca.ToList();

                return Ok(atasDePresenca);
            }
            catch (Exception ex)
            {

                return StatusCode(500, "Erro: " + ex.Message);
            }
        }
    }
}