module.exports.init = (sequelize, { DataTypes, Model }) => {
  class User extends Model { }

  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User'
  })

  return User
}

module.exports.associate = models => {
  models.User.hasMany(models.Character, {
    foreignKey: 'userId',
    as: 'characters'
  })
}