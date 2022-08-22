using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RFQMicroservice.DBContext;
using RFQMicroservice.Model;
using RFQMicroservice.Repository;
using System.Web.Http.Cors;

namespace RFQMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RFQController : ControllerBase
    {
        /* --------[SETUP]-------- */

        private readonly IRFQRepo _repo;

        public RFQController(IRFQRepo repo)
        {
            _repo = repo;
        }

        /* --------[GET REQUESTS]-------- */

        // GET: api/RFQ/GetAllRFQ
        // API to fetch all Rfq details from the database
        [HttpGet("GetAllRFQ")]
        public async Task<ActionResult<List<Rfq>>> GetAllRFQ()
        {
            try
            {
                var rfqs = await _repo.GetAllRFQ();
                if (rfqs == null)
                {
                    return NotFound();
                }
                return Ok(rfqs);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/RFQ/GetRFQ/2
        // API to fetch a particular Rfq data based on RFQ_Id from the database
        [HttpGet("GetRFQ/{id}")]
        public async Task<ActionResult<Rfq>> GetRFQ(int id)
        {
            try
            {
                if (id < 0) throw new Exception("Invalid ID"); // Throws Exception for Invalid ID.
                var rfq = await _repo.GetRFQ(id);
                if (rfq == null)
                {
                    return NotFound();
                }
                return Ok(rfq);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/RFQ/GetFeedback/2
        // API to fetch a particular Supplier name with Feedback details based on RFQ_Id from the database
        [HttpGet("GetFeedback/{id}")]
        public async Task<ActionResult<Supplier>> GetFeedback(int id)
        {
            try
            {
                if (id < 0) throw new Exception("Invalid ID"); // Throws Exception for Invalid ID.
                //if (id == 0) return NotFound();
                var rfq = await _repo.GetFeedback(id);
                if (rfq == null || id==0)
                {
                    return NotFound();
                }
                return Ok(rfq);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}