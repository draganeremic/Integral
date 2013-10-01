using System.Web;
using System.Web.Optimization;

namespace Integral.BoardDnD.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/libs/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/libs/jquery-ui-{version}.custom.js"));

            bundles.Add(new ScriptBundle("~/bundles/flexslider").Include(
                        "~/Scripts/libs/jquery.flexslider.js"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/libs/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/fabric").Include(
                        "~/Scripts/libs/fabric-*"));

            bundles.Add(new ScriptBundle("~/bundles/AllModels").Include(
                        "~/Scripts/app/models/BaseModel.js",
                        "~/Scripts/app/models/Character.js",
                        "~/Scripts/app/models/EnvironmentObject.js",
                        "~/Scripts/app/models/NonPlayableCharacter.js",
                        "~/Scripts/app/models/PlayableCharacter.js",
                        "~/Scripts/app/models/SoundTriggerObject.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/WorldBoard").Include(
                        "~/Scripts/app/pages/WorldBoard.js"));

            bundles.Add(new ScriptBundle("~/bundles/WorldBoardToolbox").Include(
                    "~/Scripts/app/components/WorldBoardToolbox.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));
        }
    }
}