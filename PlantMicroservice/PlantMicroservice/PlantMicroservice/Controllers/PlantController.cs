using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantMicroservice.Data;
using PlantMicroservice.Models;
using PlantMicroservice.Repository;

namespace PlantMicroserviceervice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PlantController : ControllerBase
    {
        /* --------[SETUP]-------- */
        private readonly IPlantRepo _plantRepo;

        public PlantController(IPlantRepo plantRepo)
        {
            _plantRepo = plantRepo;
        }

        /* --------[GET REQUESTS]-------- */

        // GET: api/ViewPartsReorder
        // API to fetch All Reordered Parts from the database
        [HttpGet("ViewPartsReorder")]
        public async Task<ActionResult<List<PlantReorderDetails>>> ViewPartsReorder()
        {
            try
            {
                var parts = await _plantRepo.ViewPartsReorder();
                if (parts == null)
                    return NotFound();
                return Ok(parts);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/ViewReorderDetails
        // API to fetch All Reorder rules details from the database
        [HttpGet("ViewReorderDetails")]
        public async Task<ActionResult<List<ReorderRules>>> ViewReorderDetails()
        {
            try
            {
                var reorders = await _plantRepo.ViewReorderDetails();
                if (reorders == null)
                    return NotFound();
                return Ok(reorders);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/ViewStockInHand/2
        // API to fetch All Stock details based on Part Id from the database
        [HttpGet("ViewStockInHand/{PartId}")]
        public async Task<ActionResult<Part>> ViewStockInHand(int PartId)
        {
            try
            {
                if (PartId < 0) throw new Exception("Invalid Part ID."); //Throwing exception for invalid part id.
                var stock = await _plantRepo.ViewStockInHand(PartId);
                if (stock == null)
                    return NotFound();
                return Ok(stock);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /* --------[PUT REQUESTS]-------- */

        // PUT: api/UpdateMinMax
        // API to Update Minimum and Maximum quatity based on certain conditions
        [HttpPut("UpdateMinMax")]
        public async Task<ActionResult<List<ReorderRules>>> UpdateMinMax(updateobj request)
        {
            try
            {
                if (request.id < 0) throw new Exception("Invalid ID."); //Throwing an exception for invalid part id.
                var reorders = await _plantRepo.UpdateMinMax(request);
                if (reorders == null)
                    return NotFound();
                return Ok(reorders);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}