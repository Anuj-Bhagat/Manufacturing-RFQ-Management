using RFQMicroservice.Model;
using RFQMicroservice.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RFQMicroservice.UnitTest.MockData
{
    public static class RFQMockData
    {
        public static List<Rfq> GetRfqs()
        {
            return new List<Rfq>()
            {
                new Rfq()
                {
                    rfqId = 1,
                    demandid = 1,
                    Part_Id = 2,
                    partName = "part 1",
                    Quantity = "7",
                    timetoSupply = new DateTime(2022,09,11),
                    Specification = "specs 1"
                }
            };
        }

        public static List<RFQSupplier> GetRfqSuppliers()
        {
            return new List<RFQSupplier>()
            {
                new RFQSupplier()
                {
                    RFQId = 1,
                    PartId = 2,
                    SupplierName = "Saitama",
                    Feedback = 10
                }
            };
        }
    }
}
