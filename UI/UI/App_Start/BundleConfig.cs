using System.Web;
using System.Web.Optimization;

namespace UI.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            BundleTable.EnableOptimizations = true;
        }
    }
}