module.exports.init = (sequelize, { DataTypes, Model }) => {
  class Character extends Model { }

  Character.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    stats: { // Done as a JSON meta, to allow for custom stats
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {}
    }
  }, {
    sequelize,
    modelName: 'Character'
  })

  return Character
}

module.exports.associate = models => {
  models.Character.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'user'
  })

  models.Character.belongsToMany(models.Session, {
    through: 'SessionPlayer',
    foreignKey: 'characterId',
    as: 'sessions'
  })
}