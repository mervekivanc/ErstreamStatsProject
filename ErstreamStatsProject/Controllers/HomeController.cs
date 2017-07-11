using ErstreamStatsProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace WebApplication6.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult StreamReports()
        {
            return View();
        }

        public ActionResult LocationReports()
        {
            return View();
        }
        public ActionResult DeviceReports()
        {
            return View();
        }
        public ActionResult UserAgentReports()
        {
            return View();
        }
        public ActionResult PieChart()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }

        public ActionResult WorldMapExample()
        {
            return View();
        }
        
        //public JsonResult KanalGetir(int id)
        //{
        //    List<Kanallar> Kanal = new List<Kanallar>
        //    {
        //        new Kanallar { ID=1, KanalAdi= "Ariana News" , IzlenmeSayisi=15222 },
        //        new Kanallar { ID=3, KanalAdi= "ATV" , IzlenmeSayisi=34234 }
        //    };
        //    Kanallar kanal = Kanal.FirstOrDefault(o => o.ID == id);
        //    return Json(kanal, JsonRequestBehavior.AllowGet);
        //}
        //public JsonResult TumKanallar()
        //{
        //    List<Kanallar> Kanal = new List<Kanallar>
        //    {
        //        new Kanallar { ID=1, KanalAdi= "Ariana News" , IzlenmeSayisi=15222 },
        //        new Kanallar { ID=3, KanalAdi= "ATV" , IzlenmeSayisi=34234 }
        //    };

        //    return Json(Kanal, JsonRequestBehavior.AllowGet);
        //}


    }
}