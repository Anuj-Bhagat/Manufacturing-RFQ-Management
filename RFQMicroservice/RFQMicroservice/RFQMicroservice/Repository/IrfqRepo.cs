using RFQMicroservice.Model;

namespace RFQMicroservice.Repository

{
    public interface IRFQRepo
    {
        Task<List<Rfq>> GetAllRFQ();
        Task<List<Rfq>> GetRFQ(int Id);
        Task<IEnumerable<RFQSupplier>> GetFeedback(int rId);
    }
}
