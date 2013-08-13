using System;
using System.Collections.Generic;

namespace Integral.BoardDnD.Entity
{
    [Serializable]
    public class Base
    {
        public string Type { get; set; }
        public string OriginX { get; set; }
        public string OriginY { get; set; }
        public int Left { get; set; }
        public int Top { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string Fill { get; set; }
        public object OverlayFill { get; set; }
        public object Stroke { get; set; }
        public int StrokeWidth { get; set; }
        public object StrokeDashArray { get; set; }
        public string StrokeLineCap { get; set; }
        public string StrokeLineJoin { get; set; }
        public int StrokeMiterLimit { get; set; }
        public int ScaleX { get; set; }
        public int ScaleY { get; set; }
        public int Angle { get; set; }
        public bool FlipX { get; set; }
        public bool FlipY { get; set; }
        public int Opacity { get; set; }
        public bool Selectable { get; set; }
        public bool HasControls { get; set; }
        public bool HasBorders { get; set; }
        public bool HasRotatingPoint { get; set; }
        public bool TransparentCorners { get; set; }
        public bool PerPixelTargetFind { get; set; }
        public object Shadow { get; set; }
        public bool Visible { get; set; }
        public object ClipTo { get; set; }
        public int Radius { get; set; }
        public int? Rx { get; set; }
        public int? Ry { get; set; }
        public int? X { get; set; }
        public int? Y { get; set; }
        public string Src { get; set; }
        public List<object> Filters { get; set; }
    }
}
