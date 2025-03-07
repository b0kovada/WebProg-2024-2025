namespace SzamnegyesekGrafikus;

static class Program
{
    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new GameForm());
    }
}