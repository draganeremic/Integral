using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Integral.BoardDnD.Entity
{
    [Serializable]
    public class Base
    {
        [JsonProperty(PropertyName = "type")]
        public string Type { get; set; }
        
        [JsonProperty(PropertyName = "originX")]
        public string OriginX { get; set; }

        [JsonProperty(PropertyName = "originY")]
        public string OriginY { get; set; }

        [JsonProperty(PropertyName = "left")]
        public int Left { get; set; }

        [JsonProperty(PropertyName = "top")]
        public int Top { get; set; }

        [JsonProperty(PropertyName = "width")]
        public int Width { get; set; }

        [JsonProperty(PropertyName = "height")]
        public int Height { get; set; }

        [JsonProperty(PropertyName = "fill")]
        public string Fill { get; set; }

        [JsonProperty(PropertyName = "overlayFill")]
        public object OverlayFill { get; set; }

        [JsonProperty(PropertyName = "stroke")]
        public object Stroke { get; set; }

        [JsonProperty(PropertyName = "strokeWidth")]
        public int StrokeWidth { get; set; }

        [JsonProperty(PropertyName = "strokeDashArray")]
        public object StrokeDashArray { get; set; }

        [JsonProperty(PropertyName = "strokeLineCap")]
        public string StrokeLineCap { get; set; }

        [JsonProperty(PropertyName = "strokeLineJoin")]
        public string StrokeLineJoin { get; set; }

        [JsonProperty(PropertyName = "strokeMiterLimit")]
        public int StrokeMiterLimit { get; set; }

        [JsonProperty(PropertyName = "scaleX")]
        public int ScaleX { get; set; }

        [JsonProperty(PropertyName = "scaleY")]
        public int ScaleY { get; set; }
        
        [JsonProperty(PropertyName = "angle")]
        public int Angle { get; set; }

        [JsonProperty(PropertyName = "flipX")]
        public bool FlipX { get; set; }

        [JsonProperty(PropertyName = "flipY")]
        public bool FlipY { get; set; }

        [JsonProperty(PropertyName = "opacity")]
        public int Opacity { get; set; }

        [JsonProperty(PropertyName = "selectable")]
        public bool Selectable { get; set; }

        [JsonProperty(PropertyName = "hasControls")]
        public bool HasControls { get; set; }

        [JsonProperty(PropertyName = "hasBorders")]
        public bool HasBorders { get; set; }

        [JsonProperty(PropertyName = "hasRotatingPoint")]
        public bool HasRotatingPoint { get; set; }

        [JsonProperty(PropertyName = "transparentCorners")]
        public bool TransparentCorners { get; set; }

        [JsonProperty(PropertyName = "perPixelTargetFind")]
        public bool PerPixelTargetFind { get; set; }

        [JsonProperty(PropertyName = "shadow")]
        public object Shadow { get; set; }

        [JsonProperty(PropertyName = "visible")]
        public bool Visible { get; set; }

        [JsonProperty(PropertyName = "clipTo")]
        public object ClipTo { get; set; }

        [JsonProperty(PropertyName = "radius")]
        public int Radius { get; set; }

        [JsonProperty(PropertyName = "rx")]
        public int? Rx { get; set; }
        
        [JsonProperty(PropertyName = "ry")]
        public int? Ry { get; set; }

        [JsonProperty(PropertyName = "x")]
        public int? X { get; set; }

        [JsonProperty(PropertyName = "y")]
        public int? Y { get; set; }

        [JsonProperty(PropertyName = "src")]
        public string Src { get; set; }

        [JsonProperty(PropertyName = "filters")]
        public List<object> Filters { get; set; }
    }
}
