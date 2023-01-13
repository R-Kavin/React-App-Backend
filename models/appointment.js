module.exports = (sequelize, DataTypes) =>{
    const appointment = sequelize.define( "appointment", {
        apid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          
          age: {
            type: DataTypes.STRING,
            allowNull: false,
            
          },
          query: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
          },
          mobileno: {
            type: DataTypes.STRING,
            allowNull: false,
            
          },
          date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
          time: {
            type: DataTypes.TIME,
            allowNull: false,
          },
    })
    return appointment
}