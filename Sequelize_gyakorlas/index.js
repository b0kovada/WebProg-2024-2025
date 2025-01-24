// index.js
const sequelize = require('./sequelize');  // Importáljuk az adatbázis kapcsolatot
const Student = require('./models/student');  // Importáljuk a modell

// 1. Táblázat létrehozása
(async () => {
  try {
    await sequelize.sync({ force: true }); // A tábla létrehozása (force: true felülírja)
    console.log('Students tábla sikeresen létrehozva.');
    
    // 2. Adatok beszúrása (bulkCreate)
    const students = await Student.bulkCreate([
      { name: 'Alice', favorite_class: 'Math', school_year: 1 },
      { name: 'Bob', favorite_class: 'Computer Science', school_year: 2, has_language_examination: false },
      { name: 'Charlie', favorite_class: 'Physics', school_year: 3 },
      { name: 'Diana', favorite_class: 'Computer Science', school_year: 4 },
      { name: 'Eve', favorite_class: 'History', school_year: 1, has_language_examination: false }
    ]);
    console.log('Adatok sikeresen hozzáadva:', students);

    // 3. a) Diákok nevei, akiknek kedvenc tantárgya a Computer Science vagy van nyelvvizsgájuk
    const studentsQuery = await Student.findAll({
      attributes: ['name'],
      where: {
        [Sequelize.Op.or]: [
          { favorite_class: 'Computer Science' },
          { has_language_examination: true }
        ]
      }
    });
    console.log('Diákok nevei:', studentsQuery.map(student => student.name));

    // 3. b) Évfolyamonkénti tanulószám
    const studentCounts = await Student.findAll({
      attributes: [
        'school_year',
        [Sequelize.fn('COUNT', Sequelize.col('student_id')), 'num_students']
      ],
      group: ['school_year']
    });
    studentCounts.forEach(count => {
      console.log(`Évfolyam: ${count.school_year}, Tanulók száma: ${count.get('num_students')}`);
    });

  } catch (error) {
    console.error('Hiba történt:', error);
  }
})();
