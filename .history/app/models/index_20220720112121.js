const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        dialectOptions: {},
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

// Localhost 

// dialectOptions: {}


// Heroku Host

// dialectOptions: {
//     "ssl": true,
//     ssl: { rejectUnauthorized: false }
// },

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user/user.model.js")(sequelize, Sequelize);
db.order = require("../models/user/order.model.js")(sequelize, Sequelize);

db.role = require("../models/user/role.model.js")(sequelize, Sequelize);

db.store_product = require("../models/store/store.product.model.js")(sequelize, Sequelize);
db.store_product_category = require("../models/store/store.product.category.model.js")(sequelize, Sequelize);


db.blog_post = require("../models/blog/blog.post.model.js")(sequelize, Sequelize);
db.blog_category = require("../models/blog/blog.category.model.js")(sequelize, Sequelize);
db.blog_author = require("../models/blog/blog.author.model.js")(sequelize, Sequelize);
db.blog_comment = require("../models/blog/blog.comment.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
    through: "user_roles",
    otherKey: "roleId",
    foreignKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["User", "Admin", "Moderator"];

module.exports = db;