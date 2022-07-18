module.exports = (sequelize, Sequelize) => {
    const user_order = sequelize.define("user_order", {
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

    return user_order;
};