import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
    await dbRun("DROP TABLE products")
    await dbRun("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, picture TEXT, price REAL)");

    const products = [
        { name: "Kenyer", description: "kicsi", picture: "https://egyunkhelyit.hu/wp-content/uploads/2018/11/tulipan-helyi-termek-bolt-pekaru.jpg", price: 650 },
        { name: "Kolbasz", description: "200 oldal", picture: "https://egyunkhelyit.hu/wp-content/uploads/2018/11/tulipan-helyi-termek-bolt-kolbasz.jpg", price: 2690 },
        { name: "Kifli", description: "L méretű", picture: "https://egyunkhelyit.hu/wp-content/uploads/2018/11/tulipan-helyi-termek-bolt-peksutemeny.jpg", price: 110 }
    ];

    for (const product of products) {
         await dbRun("INSERT INTO products (name, description, picture, price) VALUES (?, ?, ?, ?)", [product.name, product.description, product.picture, product.price]);
    }
};

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { db, dbQuery, dbRun, initializeDB };
