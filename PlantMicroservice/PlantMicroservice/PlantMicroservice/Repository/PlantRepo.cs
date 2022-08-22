using Microsoft.EntityFrameworkCore;
using PlantMicroservice.Data;
using PlantMicroservice.Models;

namespace PlantMicroservice.Repository
{
    public class PlantRepo : IPlantRepo
    {
        private readonly PlantDbContext _context;
        public PlantRepo(PlantDbContext context)
        {
            _context = context;
        }

        public async Task<List<PlantReorderDetails>> ViewPartsReorder()
        {
            return await _context.PlantReoDetail.ToListAsync();
        }

        public async Task<List<ReorderRules>> ViewReorderDetails()
        {
            return await _context.ReoRule.ToListAsync();
        }

        public async Task<Part> ViewStockInHand(int partId)
        {
            var stock = await _context.Parts.Where(x => x.PartId == partId).Select(x => new Part()
            {
                PartId = x.PartId,
                PartDescription = x.PartDescription,
                PartSpecification = x.PartSpecification,
                StockInHand = x.StockInHand
            }).FirstOrDefaultAsync();
            return stock;
        }

        public async Task<List<ReorderRules>> UpdateMinMax(updateobj request)
        {
            List<ReorderRules> reo = _context.ReoRule.ToList();
            List<Demand> dem = _context.Demands.ToList();
            {
                var rec = from r in reo
                          join d in dem on r.PartId equals d.PartId
                          where r.PartId == request.id
                          select d.DemandCount;

                if (request.min > (.3 * request.max) && request.min <= (.5 * request.max))
                {
                    if (request.max < 0.2 * rec.First())
                    {
                        //rec.MinQuantity = min;
                        var dbSup = await _context.ReoRule.FindAsync(request.id);
                        dbSup.MinQuantity = request.min;
                        dbSup.MaxQuantity = request.max;

                        await _context.SaveChangesAsync();
                        return await _context.ReoRule.ToListAsync();
                    }
                }
                return null;
            }
        }
    }
}
