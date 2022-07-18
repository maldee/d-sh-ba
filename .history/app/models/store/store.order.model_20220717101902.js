module.exports = (sequelize, Sequelize) => {
    const store_order = sequelize.define("store_order", {
        id: {
            type: Sequelize.INTEGER
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
            type: Sequelize.TEXT('long')
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

    return store_order;
};