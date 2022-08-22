using RFQMicroservice.Model;

namespace RFQMicroservice.Repository
{
    public class RFQRepo : IRFQRepo
    {
        private readonly Dbcontext _context;
        public RFQRepo(Dbcontext context)
        {
            _context = context;
        }

        public async Task<List<Rfq>> GetAllRFQ()
        {
            var lrfq = await _context.RFQ.ToListAsync();
            //var query = from r in lrfq
            //            select new { r.rfqId, r.partName, r.demandid, r.Specification, r.Quantity, r.timetoSupply };
            return lrfq;
        }

        public async Task<List<Rfq>> GetRFQ(int Id)
        {
            var rec = await _context.RFQ.Where(x => x.Part_Id == Id).Select(x => new Rfq()
            {
                rfqId = x.rfqId,
                partName = x.partName,
                demandid = x.demandid,
                Specification = x.Specification,
                Quantity = x.Quantity,
                timetoSupply = x.timetoSupply
            }).ToListAsync();

            return rec;
        }

        public async Task<IEnumerable<RFQSupplier>> GetFeedback(int rId)
        {
            if (rId == 0) return null;
            List<Rfq> rfq = await _context.RFQ.ToListAsync();
            List<Supplier> supplier = await _context.SUPPLIER.ToListAsync();
            var rfqViewModel = from s in supplier
                               join r in rfq on s.Part_id equals r.Part_Id
                               where r.rfqId == rId && s.Feedback > 7
                               select new RFQSupplier()
                               { PartId = s.Part_id, RFQId = r.rfqId, SupplierName = s.Supplier_Name, Feedback = s.Feedback };
            return rfqViewModel;
        }
    }
}
