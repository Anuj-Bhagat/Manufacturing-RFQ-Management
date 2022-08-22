using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PlantMicroservice.Models;

namespace PlantMicroservice.UnitTest.MockData
{
    public static class PlantMockData
    {
        public static List<PlantReorderDetails> GetPlants()
        {
            return new List<PlantReorderDetails>()
            {
                new PlantReorderDetails()
                {
                    PartId = 1,
                    PlantReorderId = 1,
                    PartDetails = "Part1",
                    ReorderStatus = "true",
                    ReorderDate = new DateTime(2022,08,21)
                }
            };
        }

        public static List<ReorderRules> GetReorders()
        {
            return new List<ReorderRules>()
            {
                new ReorderRules()
                {
                    PartId = 1,
                    ReorderId = 1,
                    DemandId = 1,
                    MinQuantity = 4,
                    MaxQuantity = 12,
                    ReorderFrequency = 2
                }
            };
        }

        public static List<Part> GetStocks()
        {
            return new List<Part>()
            {
                new Part()
                {
                    PartId = 1,
                    PartDescription = "Description 1",
                    PartSpecification = "Spec 1",
                    StockInHand = 12
                }
            };
        }
    }
}
