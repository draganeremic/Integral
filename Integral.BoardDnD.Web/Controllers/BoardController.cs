using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using Integral.BoardDnD.Service;

namespace Integral.BoardDnD.Web.Controllers
{
    public class BoardController : Controller
    {
        //
        // GET: /WorldBoard/

        public ActionResult WorldBoard()
        {
            return View("WorldBoard");
        }

        public JsonResult GetBoard()
        {
            return Json(CanvasService.GetCanvasEntity(0));
        }

    }
}
