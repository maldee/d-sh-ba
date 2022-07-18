module.exports = (sequelize, Sequelize) => {
    const store_order = sequelize.define("store_order", {
        id: {
            type: Sequelize.INTEGER
        },
        productId: {
            type: Sequelize.TEXT('long')
        },
        placedOn: {
            type: Sequelize.INTEGER
        },
        paid: {
            type: Sequelize.TEXT('long')
        },
        total: {
            type: Sequelize.TEXT('long')
        },
        status: {
            type: Sequelize.TEXT('long')
        },
        soldBy: {
            type: Sequelize.TEXT('long')
        },
        

    }, {
        timestamps: false,
        freezeTableName: true,
    });

    return store_order;
};