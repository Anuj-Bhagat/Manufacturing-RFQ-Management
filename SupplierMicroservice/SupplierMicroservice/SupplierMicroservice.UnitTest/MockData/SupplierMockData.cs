using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SupplierMicroservice.UnitTest.MockData
{
    public static class SupplierMockData
    {
        public static List<Supplier> GetSuppliers()
        {
            return new List<Supplier>()
            {
                new Supplier()
                {
                    supplier_id = 1,
                    name = "Jaini",
                    email = "jaini@cognizant.com",
                    phone = "9181191906",
                    location = "Bhopal",
                    feedback = 4
                },
                 new Supplier()
                {
                    supplier_id = -2,
                    name = "Jaini",
                    email = "jaini@cognizant.com",
                    phone = "9181191906",
                    location = "Bhopal",
                    feedback = 4
                }
            };
        }
    }
}
