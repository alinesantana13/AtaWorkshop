using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApiRastreamento.Data;
using WebApiRastreamento.Models;
using WebApiRastreamento.Request;

namespace WebApiRastreamento.Controllers
{
    [ApiController]
    [Route("api/colaboradores")]
    public class ColaboradoresController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ColaboradoresController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetColaboradores()
        {
            var colaboradores = _context.Colaboradores.ToList();

            return Ok(colaboradores);
        }

        [HttpGet("{id}")]
        public IActionResult GetColaboradorById(int id)
        {

            try
            {
                var colaborador = _context.Colaboradores.FirstOrDefault(x => x.Id == id);

                if (colaborador == null)
                {
                    return NotFound();
                }

                return Ok(colaborador);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Erro inersperado no servidor: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateColaborador(ColaboradorRequest request)
        {
            try
            {
                var novoColaborador = new ColaboradorModel(request.nome);

                await _context.Colaboradores.AddAsync(novoColaborador);
                await _context.SaveChangesAsync();

                var colaboradores = _context.Colaboradores.ToList();

                return Ok(colaboradores);
            }
            catch (Exception ex)
            {

                return StatusCode(500, "Erro interno no servidor" + ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateColaborador(ColaboradorModel editarColaborador)
        {
            try
            {
                var colaborador = _context.Colaboradores.FirstOrDefault(x => x.Id == editarColaborador.Id);


                if (colaborador == null)
                {
                    return NotFound();
                }

                colaborador.Nome = editarColaborador.Nome;

                await _context.SaveChangesAsync();

                var colaboradores = _context.Colaboradores.ToList();

                return Ok(colaboradores);

            }
            catch (Exception ex)
            {
                return StatusCode(500, "Erro: " + ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteColaborator(int id)
        {
            try
            {
                var colaborador = _context.Colaboradores.FirstOrDefault(x => x.Id == id);

                if (colaborador == null)
                {
                    return NotFound();
                }

                _context.Colaboradores.Remove(colaborador);
                await _context.SaveChangesAsync();

                var colaboradores = _context.Colaboradores.ToList();

                return Ok(colaboradores);
            }
            catch (Exception ex)
            {

                return StatusCode(500, "Erro: " + ex.Message);
            }
        }
    }
}