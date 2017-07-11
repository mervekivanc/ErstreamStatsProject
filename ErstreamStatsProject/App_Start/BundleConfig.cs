using System.Web;
using System.Web.Optimization;

namespace ErstreamStatsProject.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = false;
            #region Style


            bundles.Add(new StyleBundle("~/Content/metronic/css")
                        .Include("~/Content/metronic_v4.7.5/assets/global/plugins/font-awesome/css/font-awesome.min.css")
                        .Include("~/Content/metronic_v4.7.5/assets/global/plugins/simple-line-icons/simple-line-icons.min.css")
                        .Include("~/Content/metronic_v4.7.5/assets/global/plugins/bootstrap/css/bootstrap.min.css")
                        .Include("~/Content/metronic_v4.7.5/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css")

                        );
            bundles.Add(new StyleBundle("~/Content/layout/css").Include(
                "~/Content/metronic_v4.7.5/assets/global/css/components.min.css",
                "~/Content/metronic_v4.7.5/assets/global/css/plugins.min.css",
                "~/Content/metronic_v4.7.5/assets/layouts/layout4/css/layout.min.css",
                "~/Content/metronic_v4.7.5/assets/layouts/layout4/css/themes/default.min.css",
                "~/Content/metronic_v4.7.5/assets/layouts/layout4/css/custom.min.css",
                "~/Content/site.css"
                ));
            #endregion

            #region Script

            bundles.Add(new ScriptBundle("~/bundles/metronic/global")
                         .Include("~/Content/metronic_v4.7.5/assets/global/plugins/jquery.min.js")
                         .Include("~/Content/metronic_v4.7.5/assets/global/plugins/bootstrap/js/bootstrap.min.js")
                         .Include("~/Content/metronic_v4.7.5/assets/global/plugins/js.cookie.min.js")
                         .Include("~/Content/metronic_v4.7.5/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js")
                         .Include("~/Content/metronic_v4.7.5/assets/global/plugins/jquery.blockui.min.js")
                         .Include("~/Content/metronic_v4.7.5/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js")
                         .Include("~/Scripts/jquery.cookie.js")

                         );


            bundles.Add(new ScriptBundle("~/bundles/layout/js")
                .Include("~/Content/metronic_v4.7.5/assets/layouts/layout4/scripts/layout.min.js")
                .Include("~/Content/metronic_v4.7.5/assets/layouts/layout4/scripts/demo.min.js")
                .Include("~/Content/metronic_v4.7.5/assets/layouts/global/scripts/quick-sidebar.min.js")
                .Include("~/Content/metronic_v4.7.5/assets/layouts/global/scripts/quick-nav.min.js")
                );


            #endregion
        }
    }
}