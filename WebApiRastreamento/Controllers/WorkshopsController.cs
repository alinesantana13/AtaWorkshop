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
    [Route("api/workshops")]
    public class WorkshopsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public WorkshopsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetWorkshops()
        {
            var workshops = _context.Workshops.ToList();

            return Ok(workshops);
        }

        [HttpGet("{id}")]
        public IActionResult GetWorkshopById(int id)
        {

            try
            {
                var workshop = _context.Workshops.FirstOrDefault(x => x.Id == id);

                if (workshop == null)
                {
                    return NotFound();
                }

                return Ok(workshop);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Erro inersperado no servidor: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateColaborador(WorkshopRequest request)
        {
            try
            {
                var novoWorkshop = new WorkshopModel(request.nome,
                request.dataDeRealizacao,
                request.descricao);

                await _context.Workshops.AddAsync(novoWorkshop);
                await _context.SaveChangesAsync();

                var workshops = _context.Workshops.ToList();

                return Ok(workshops);
            }
            catch (Exception ex)
            {

                return StatusCode(500, "Erro interno no servidor" + ex.Message);
            }
        }
    }
}