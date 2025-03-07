namespace SzamnegyesekConsole;

class Program
{
    static int[] GetTableIncrements(int[,] table)
    {
        if (table.GetLength(0) != 3 || table.GetLength(1) != 3)
            return new int[] { -1 };

        int a = table[0, 0] + table[0, 1] + table[1, 0] + table[1, 1];
        int b = table[0, 1] + table[0, 2] + table[1, 1] + table[1, 2];
        int c = table[1, 0] + table[1, 1] + table[2, 0] + table[2, 1];
        int d = table[1, 1] + table[1, 2] + table[2, 1] + table[2, 2];
        
        return new int[] { a / 4, b / 4, c / 4, d / 4 };
    }

    static void Main()
    {
        int[,] table1 = {
            { 1, 2, 1 },
            { 2, 4, 2 },
            { 1, 2, 1 }
        };

        int[,] table2 = {
            { 3, 7, 4 },
            { 5, 16, 11 },
            { 2, 9, 7 }
        };

        Console.WriteLine("Első: " + string.Join(", ", GetTableIncrements(table1)));
        Console.WriteLine("Második: " + string.Join(", ", GetTableIncrements(table2)));
    }
}