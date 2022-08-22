using AuthMicroservice.Models;

namespace AuthMicroservice.Provider
{
    public class PensionProvider : IAuthProvider
    {
        private static List<Auth> List = new List<Auth>()
        {
            new Auth{ Username = "anujbhagat", Password = "bhagat"},
            new Auth{ Username = "jayantmorkar", Password = "morkar"},
            new Auth{ Username = "ashishsahu", Password = "sahu"},
            new Auth{ Username = "mineshgandhi", Password = "gandhi"},
            new Auth{ Username = "naiyaparekh", Password = "naiya"},
        };
        public List<Auth> GetList()
        {
            return List;
        }

        public Auth GetRFQ(Auth cred)
        {
            List<Auth> rList = GetList();
            Auth penCred = rList.FirstOrDefault(user => user.Username == cred.Username && user.Password == cred.Password);

            return penCred;
        }
    }
}
