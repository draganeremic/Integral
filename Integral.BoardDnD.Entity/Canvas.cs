using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Integral.BoardDnD.Entity
{
    [Serializable]
    public class Canvas
    {
        [JsonProperty(PropertyName = "objects")]
        public List<Base> Objects { get; set; }

        [JsonProperty(PropertyName = "background")]
        public string Background { get; set; }
    }
}
