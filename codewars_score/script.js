async function fetchUser(){
        let felhasznaloNev = document.getElementById("felhasznNev").value;        
        await fetch("https://www.codewars.com/api/v1/users/"+felhasznaloNev)
            .then(response => {                
                return response.json()
            })
            .then(user => {             
                if(user.name == null){
                    document.getElementById("lekertAdatok").innerHTML = "<strong>A felhasználó nem létezik.</strong>";
                }
                else{
                    let felhasznaloAdat = `
                    <h2>Felhasználó adatai:</h2>
                    <p>Név: ${user.name}</p>
                    <p>Felhasználónév: ${user.username}</p>
                    <p>Becsület: ${user.honor}</p>
                    <p>Klán: ${user.clan}</p>
                    <p>Globális helyezés: ${user.leaderboardPosition}</p>
                    <p>Képességek: ${user.skills}</p>
                `;
                document.getElementById("lekertAdatok").innerHTML = felhasznaloAdat;
                }
                
                
            })
            .catch(error => {
                document.getElementById("lekertAdatok").innerHTML = error;
            });
            
    };

async function fetchUserRanksOverall(){
    let felhasznaloNev = document.getElementById("felhasznNev").value;        
    await fetch("https://www.codewars.com/api/v1/users/"+felhasznaloNev)
        .then(response => {                
            return response.json()
        })
        .then(user => {  
            if(user.name == null){
                document.getElementById("lekertAdatok").innerHTML = "<strong>A felhasználó nem létezik.</strong>";
            }
            else{              
            let felhasznaloAdat = `
                <h2>Overall:</h2>
                <p>Helyezés: ${user.ranks.overall.rank}</p>
                <p>Név: ${user.ranks.overall.name}</p>
                <p>Szín: ${user.ranks.overall.color}</p>
                <p>Pontszám: ${user.ranks.overall.score}</p>
            `;
            document.getElementById("lekertAdatok").innerHTML = felhasznaloAdat;
            }
        })
        .catch(error => {
            document.getElementById("lekertAdatok").innerHTML = error;
        });
        
};

async function fetchUserRanksLanguages(){
    let felhasznaloNev = document.getElementById("felhasznNev").value;        
    await fetch("https://www.codewars.com/api/v1/users/"+felhasznaloNev)
        .then(response => {                
            return response.json()
        })
        .then(user => {    
            if(user.name == null){
                document.getElementById("lekertAdatok").innerHTML = "<strong>A felhasználó nem létezik.</strong>";
            }
            else if(user.ranks.languages.csharp == null){
                let felhasznaloAdat = `
                <h2>Javascript:</h2>
                <p>Helyezés: ${user.ranks.languages.javascript.rank}</p>
                <p>Név: ${user.ranks.languages.javascript.name}</p>
                <p>Szín: ${user.ranks.languages.javascript.color}</p>
                <p>Pontszám: ${user.ranks.languages.javascript.score}</p>
                <p>\n</p>
                <p><strong>A felhasználó nem teljesített C# kurzust!</strong></p>`;
                document.getElementById("lekertAdatok").innerHTML = felhasznaloAdat;
            }
            else if(user.ranks.languages.javascript == null){
                let felhasznaloAdat= 
                `<h2>C#:</h2>
                <p>Helyezés: ${user.ranks.languages.csharp.rank}</p>
                <p>Név: ${user.ranks.languages.csharp.name}</p>
                <p>Szín: ${user.ranks.languages.csharp.color}</p>
                <p>Pontszám: ${user.ranks.languages.csharp.score}</p>
                <p>\n</p>
                <p><strong>A felhasználó nem teljesített javaScript kurzust!</strong></p>`;
                document.getElementById("lekertAdatok").innerHTML = felhasznaloAdat;

            }
            else{
                let felhasznaloAdat = `
                <h2>Javascript:</h2>
                <p>Helyezés: ${user.ranks.languages.javascript.rank}</p>
                <p>Név: ${user.ranks.languages.javascript.name}</p>
                <p>Szín: ${user.ranks.languages.javascript.color}</p>
                <p>Pontszám: ${user.ranks.languages.javascript.score}</p>
                <p>\n</p>
                <h2>C#:</h2>
                <p>Helyezés: ${user.ranks.languages.csharp.rank}</p>
                <p>Név: ${user.ranks.languages.csharp.name}</p>
                <p>Szín: ${user.ranks.languages.csharp.color}</p>
                <p>Pontszám: ${user.ranks.languages.csharp.score}</p>
            `;
            document.getElementById("lekertAdatok").innerHTML = felhasznaloAdat;
            }           
            
        })
        .catch(error => {
            document.getElementById("lekertAdatok").innerHTML = error;
        });
        
};
