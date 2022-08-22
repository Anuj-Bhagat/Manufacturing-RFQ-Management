using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupplierMicroservice.Repository;
using System.Web.Http.Cors;

namespace SupplierMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SupplierController : ControllerBase
    {
        /* --------[SETUP]-------- */
        private readonly ISupplierRepo _supplierRepo;
        public SupplierController(ISupplierRepo supplierRepo)
        {
            _supplierRepo = supplierRepo;
        }

        /* --------[GET REQUESTS]-------- */

        // GET: api/Supplier/GetAllSuppliers
        // API to fetch all Suppliers from the database
        [HttpGet("GetAllSuppliers")]
        public async Task<ActionResult<List<Supplier>>> GetAllSuppliers()
        {
            try
            {
                var allSuppliers = await _supplierRepo.GetAllSuppliers();
                if (allSuppliers == null)
                    return NotFound();
                return Ok(allSuppliers);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET: api/Supplier/GetSupplierOfPart/2
        // API to fetch all Suppliers based on given Part Id
        [HttpGet("GetSupplierOfPart/{id}")]
        public async Task<ActionResult<List<Supplier>>> GetSupplierOfPart(int id)
        {
            try
            {
                if (id < 0) throw new Exception("Invalid ID"); // Throws Exception for Invalid ID.
                var suppliers = await _supplierRepo.GetSupplierOfPart(id);
                if (suppliers == null)
                    return NotFound();
                return Ok(suppliers);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/Supplier/AddSupplier
        // API to add Supplier details on the database
        [HttpPost("AddSupplier")]
        public async Task<ActionResult<List<Supplier>>> AddSupplier(Supplier sup)
        {
            try
            {
                if (sup.supplier_id < 0) throw new Exception("Invalid ID"); // Throws Exception for Invalid ID.
                var suppliers = await _supplierRepo.AddSupplier(sup);
                if (suppliers == null)
                    return NotFound();
                return Ok(suppliers);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/Supplier/Update
        // API to update Supplier details on the database
        [HttpPut("UpdateSupplier")]
        public async Task<ActionResult<List<Supplier>>> UpdateSupplier(Supplier request)
        {
            try
            {
                if (request.supplier_id < 0) throw new Exception("Invalid ID"); // Throws Exception for Invalid ID.
                var supplier = await _supplierRepo.UpdateSupplier(request);
                if (supplier == null)
                    return NotFound();
                return Ok(supplier);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT: api/Supplier/UpdateFeedback
        // API to update Feedback details on the database
        [HttpPut("UpdateFeedback")]
        public async Task<ActionResult<List<Supplier>>> UpdateFeedback(Supplier request)
        {
            try
            {
                if (request.supplier_id < 0) throw new Exception("Invalid ID"); // Throws Exception for Invalid ID.
                var supplier = await _supplierRepo.UpdateFeedback(request);
                if (supplier == null)
                    return NotFound();
                return Ok(supplier);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}