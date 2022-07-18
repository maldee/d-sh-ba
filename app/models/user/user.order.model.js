module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("order", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productId: {
            type: Sequelize.INTEGER
        },
        placedOn: {
            type: Sequelize.TEXT
        },
        paid: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        total: {
            type: Sequelize.FLOAT
        },
        status: {
            type: Sequelize.TEXT
        },
        soldBy: {
            type: Sequelize.TEXT
        },
        

    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return order;
};