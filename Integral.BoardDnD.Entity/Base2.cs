using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Integral.BoardDnD.Entity
{
    public class Base2
    {
        public string type { get; set; }
        public string originX { get; set; }
        public string originY { get; set; }
        public int left { get; set; }
        public int top { get; set; }
        public int width { get; set; }
        public int height { get; set; }
        public string fill { get; set; }
        public object overlayFill { get; set; }
        public object stroke { get; set; }
        public int strokeWidth { get; set; }
        public object strokeDashArray { get; set; }
        public string strokeLineCap { get; set; }
        public string strokeLineJoin { get; set; }
        public int strokeMiterLimit { get; set; }
        public int scaleX { get; set; }
        public int scaleY { get; set; }
        public int angle { get; set; }
        public bool flipX { get; set; }
        public bool flipY { get; set; }
        public int opacity { get; set; }
        public bool selectable { get; set; }
        public bool hasControls { get; set; }
        public bool hasBorders { get; set; }
        public bool hasRotatingPoint { get; set; }
        public bool transparentCorners { get; set; }
        public bool perPixelTargetFind { get; set; }
        public object shadow { get; set; }
        public bool visible { get; set; }
        public object clipTo { get; set; }
        public int radius { get; set; }
        public int? rx { get; set; }
        public int? ry { get; set; }
        public int? x { get; set; }
        public int? y { get; set; }
        public string src { get; set; }
        public List<object> filters { get; set; }
    }
}
