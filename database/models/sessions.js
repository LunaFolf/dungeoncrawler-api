module.exports.init = (sequelize, { DataTypes, Model }) => {
  class Session extends Model { }

  Session.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      description: 'Optional nickname for the session'
    },
    hostId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      description: 'The user who is hosting the session'
    }
  }, {
    sequelize,
    modelName: 'Session'
  })

  return Session
}

module.exports.associate = models => {
  models.Session.belongsTo(models.User, {
    foreignKey: 'hostId',
    as: 'host'
  })

  models.Session.belongsToMany(models.Character, {
    through: 'SessionPlayer',
    foreignKey: 'sessionId',
    as: 'characters'
  })
}