using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ErstreamStatsProject
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
            routes.MapRoute(
                name: "StreamReports",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "StreamReports", id = UrlParameter.Optional }
            );
            routes.MapRoute(
               name: "LocationReports",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "LocationReports", id = UrlParameter.Optional }
           );
            routes.MapRoute(
               name: "DeviceReports",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "DeviceReports", id = UrlParameter.Optional }
           );
            routes.MapRoute(
               name: "UserAgentReports",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "UserAgentReports", id = UrlParameter.Optional }
           );
            routes.MapRoute(
               name: "PieChart",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "PieChart", id = UrlParameter.Optional }
           );
            routes.MapRoute(
                name: "Login",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Login", id = UrlParameter.Optional }
            );

            routes.MapRoute(
               name: "WorldMapExample",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "WorldMapExample", id = UrlParameter.Optional }
           );

        }
    }
}
