using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Integral.BoardDnD.Service;

namespace Integral.BoardDnd.Service.Test
{
    [TestClass]
    public class CanvasServiceTest
    {
        [TestMethod]
        [ExpectedException(typeof(NotImplementedException))]
        public void GetCanvasEntityTest()
        {
            CanvasService.GetCanvasEntity(0);
        }

        [TestMethod]
        [ExpectedException(typeof(NotImplementedException))]
        public void GetCanvasEntityTestFail()
        {
            CanvasService.GetCanvasEntity(0);
        }
    }
}
