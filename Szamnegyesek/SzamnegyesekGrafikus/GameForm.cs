using System;
using System.Drawing;
using System.Windows.Forms;

class GameForm : Form
{
    private int[,] table = new int[3, 3];
    private Button[,] buttons = new Button[3, 3];
    private Button btnA, btnB, btnC, btnD, btnReset;

    public GameForm()
    {
        Text = "Számnégyesek";
        Size = new Size(300, 400);
        InitializeGrid();
        InitializeButtons();
    }

    private void InitializeGrid()
    {
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                buttons[i, j] = new Button
                {
                    Text = "0",
                    Location = new Point(50 + j * 50, 30 + i * 50),
                    Size = new Size(40, 40)
                };
                Controls.Add(buttons[i, j]);
            }
        }
    }

    private void InitializeButtons()
    {
        btnA = new Button { Text = "A", Location = new Point(50, 200), Size = new Size(40, 30) };
        btnB = new Button { Text = "B", Location = new Point(100, 200), Size = new Size(40, 30) };
        btnC = new Button { Text = "C", Location = new Point(150, 200), Size = new Size(40, 30) };
        btnD = new Button { Text = "D", Location = new Point(200, 200), Size = new Size(40, 30) };
        btnReset = new Button { Text = "Visszaállítás", Location = new Point(100, 250), Size = new Size(80, 30) };

        btnA.Click += (s, e) => IncrementSection(0, 0);
        btnB.Click += (s, e) => IncrementSection(0, 1);
        btnC.Click += (s, e) => IncrementSection(1, 0);
        btnD.Click += (s, e) => IncrementSection(1, 1);
        btnReset.Click += (s, e) => ResetGrid();

        Controls.Add(btnA);
        Controls.Add(btnB);
        Controls.Add(btnC);
        Controls.Add(btnD);
        Controls.Add(btnReset);
    }

    private void IncrementSection(int row, int col)
    {
        for (int i = row; i < row + 2; i++)
        {
            for (int j = col; j < col + 2; j++)
            {
                table[i, j]++;
                buttons[i, j].Text = table[i, j].ToString();
            }
        }
    }

    private void ResetGrid()
    {
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                table[i, j] = 0;
                buttons[i, j].Text = "0";
            }
        }
    }
}
