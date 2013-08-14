using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Integral.BoardDnD.Service
{
    internal class Serializer
    {
        public static T Deserialize<T>(string json)
        {
            return JsonConvert.DeserializeObject<T>(json);
            //Newtonsoft.Json.JsonSerializer.Create()
        }


        //public static T Deserialize<T>(string json)
        //{
        //    var obj = Activator.CreateInstance<T>();
        //    var ms = new MemoryStream(Encoding.Unicode.GetBytes(json));
        //    var serializer = new DataContractJsonSerializer(obj.GetType());
        //    obj = (T)serializer.ReadObject(ms);
        //    ms.Close();
        //    return obj;
        //}

        //public static string Serialize<T>(T obj)
        //{
        //    var serializer = new DataContractJsonSerializer(obj.GetType());
        //    var ms = new MemoryStream();
        //    serializer.WriteObject(ms, obj);
        //    string retVal = Encoding.UTF8.GetString(ms.ToArray());
        //    return retVal;
        //}
    }
}
