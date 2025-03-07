namespace SzamnegyesekFrontend;

static class Program
{
    [STAThread]
    public static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new global::FrontendForm());
    }
}