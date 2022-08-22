using PlantMicroservice.Models;

namespace PlantMicroservice.Repository
{
    public interface IPlantRepo
    {
        Task<List<PlantReorderDetails>> ViewPartsReorder();
        Task<List<ReorderRules>> ViewReorderDetails();
        Task<Part> ViewStockInHand(int partId);
        Task<List<ReorderRules>> UpdateMinMax(updateobj request);
    }
}
