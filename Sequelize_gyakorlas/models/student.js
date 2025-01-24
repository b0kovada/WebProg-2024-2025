// models/student.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // importáljuk a sequelize kapcsolatot

// Modell definiálása
const Student = sequelize.define('Student', {
  student_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      len: [4, 20] // Minimum 4, maximum 20 karakter
    }
  },
  favorite_class: {
    type: DataTypes.STRING(25),
    defaultValue: 'Computer Science'
  },
  school_year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  has_language_examination: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'students', // explicit táblanév
  timestamps: false // Ha nincs createdAt és updatedAt oszlop
});

module.exports = Student;
