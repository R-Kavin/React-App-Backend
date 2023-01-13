module.exports = (sequelize, DataTypes) =>{
    const patient = sequelize.define( "patient", {
        id: {
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
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            
          },
    })
    // doctor.associate=(models)=>{
    //   doctor.hasMany(models.appointment,{
    //     onDelete:'cascade'
    //   })
    // }
    return patient
}