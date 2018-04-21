module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      // Giving the Burger model a name of type STRING
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      burger_name: DataTypes.STRING,
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }
    });
  
    return Burger;
  };