using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Integral.BoardDnD.Service;

namespace Integral.BoardDnd.Service.Test
{
    [TestClass]
    public class CanvasServiceTest
    {
        [TestMethod]
        public void GetCanvasEntityTest()
        {
            Assert.IsNotNull(CanvasService.GetCanvasEntity(0));
        }

        [TestMethod]
        [ExpectedException(typeof(NotImplementedException))]
        public void GetCanvasEntityTestFail()
        {
            CanvasService.GetCanvasEntity(0);
        }
    }
}
