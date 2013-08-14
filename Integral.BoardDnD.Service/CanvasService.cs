using System;
using System.IO;
using Integral.BoardDnD.Entity;

namespace Integral.BoardDnD.Service
{
    public class CanvasService
    {
        public static Canvas GetCanvasEntity(int campaignId)
        {
            var text = File.ReadAllText(@"TestData\TestJSON.txt");
            var c = Serializer.Deserialize<Entity.Canvas>(text);

            //var text = File.ReadAllText(@"TestData\SingleEntity.txt");
            //var c = Serializer.Deserialize<Entity.Base>(text);


            return c;
        }

        public static void UpdateCanvas(int campaignId, Canvas canvas)
        {
            throw new NotImplementedException();
        }
    }
}
