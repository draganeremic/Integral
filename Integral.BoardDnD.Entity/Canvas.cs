using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Integral.BoardDnD.Entity
{
    [Serializable]
    public class Canvas
    {
        public List<Object> objects { get; set; }
        public string background { get; set; }
    }
}
