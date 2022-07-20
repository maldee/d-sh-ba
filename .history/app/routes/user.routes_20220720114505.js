const { authJwt } = require("../middleware");
const controller = require("../controllers/user/user.controller");
const orderController = require("../controllers/user/order.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/test/all", controller.allAccess);

    app.get(
        "/api/test/user", [authJwt.verifyToken],
        controller.userBoard
    );

    app.get(
        "/api/user/orders",
        orderController.findAllOrders
    );

    app.get(
        "/api/user/createOrder",
        orderController.createOrder
    );

    app.get(
        "/api/user/order/:id",
        orderController.findByOrderId
    );

    app.get(
        "/api/test/mod", [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );

    app.get(
        "/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );
};