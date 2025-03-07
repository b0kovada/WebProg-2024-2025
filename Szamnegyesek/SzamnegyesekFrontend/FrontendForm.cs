using System.Text;
using System.Text.Json;
public class FrontendForm : Form
{
    private TextBox inputBox;
    private Button submitButton, fetchButton;
    private ListBox resultList;
    private static readonly HttpClient client = new HttpClient { BaseAddress = new Uri("http://localhost:5000") };

    public FrontendForm()
    {
        Text = "Number Fours Manager";
        Size = new System.Drawing.Size(400, 300);

        inputBox = new TextBox { Location = new System.Drawing.Point(20, 20), Width = 200 };
        submitButton = new Button { Text = "Submit", Location = new System.Drawing.Point(230, 18) };
        fetchButton = new Button { Text = "Fetch", Location = new System.Drawing.Point(230, 50) };
        resultList = new ListBox { Location = new System.Drawing.Point(20, 80), Width = 340, Height = 150 };

        submitButton.Click += async (s, e) => await SubmitNumbers();
        fetchButton.Click += async (s, e) => await FetchNumbers();

        Controls.Add(inputBox);
        Controls.Add(submitButton);
        Controls.Add(fetchButton);
        Controls.Add(resultList);
    }

    private async Task SubmitNumbers()
    {
        string[] parts = inputBox.Text.Split(',');
        if (parts.Length != 4 || !int.TryParse(parts[0], out _) || !int.TryParse(parts[1], out _)
            || !int.TryParse(parts[2], out _) || !int.TryParse(parts[3], out _))
        {
            MessageBox.Show("Please enter four comma-separated numbers.");
            return;
        }

        int[] numbers = Array.ConvertAll(parts, int.Parse);
        var content = new StringContent(JsonSerializer.Serialize(numbers), Encoding.UTF8, "application/json");
        var response = await client.PostAsync("/fours", content);

        if (response.IsSuccessStatusCode)
        {
            MessageBox.Show("Numbers submitted successfully!");
        }
        else
        {
            MessageBox.Show("Error: " + await response.Content.ReadAsStringAsync());
        }
    }

    private async Task FetchNumbers()
    {
        var response = await client.GetAsync("/fours");
        if (response.IsSuccessStatusCode)
        {
            var jsonResponse = await response.Content.ReadAsStringAsync();
            var numbers = JsonSerializer.Deserialize<List<int[]>>(jsonResponse);
            resultList.Items.Clear();
            foreach (var numSet in numbers)
            {
                resultList.Items.Add(string.Join(", ", numSet));
            }
        }
        else
        {
            MessageBox.Show("Failed to fetch numbers.");
        }
    }
}
