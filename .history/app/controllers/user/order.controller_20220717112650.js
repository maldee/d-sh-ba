const db = require("../../models");
const config = require("../../config/auth.config");
const User = db.user;
const Order = db.order;


exports.createOrder = (req, res) => {
    const order = {
        productId: req.body.productId,
        placedOn: req.body.placedOn,
        paid: req.body.paid,
        total: req.body.total,
        status: req.body.status,
        soldBy: req.body.soldBy,
    };

    // Save post in database
    Order.create(order)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving order",
            });
        });
};

exports.findAllOrders = (req, res) => {

    Order.findAll()
        .then((data) => {
            var objectArray = [];
            for (var i in data) {
                var d = data[i];

                var totalItemCount = data.length;

                var results = {
                    id: d.id,
                    productId: d.productId,
                    placedOn: d.placedOn,
                    paid: d.paid,
                    total: d.total,
                    status: d.status,
                    soldBy: d.soldBy,
                };
                objectArray.push(results);
            }
            res.send({ dataCount: totalItemCount, results: objectArray });
        })
        .catch((err) => {
            res.send(500).send({
                message: err.message || "Some error accurred while retrieving orders."
            });
        });
};

// exports.findByProductId = (req, res) => {

//     StoreProducts.findAll({
//             where: {
//                 id: req.params.id,
//             }
//         }).then(data => {
//             var objectArray = [];
//             for (var i in data) {
//                 var d = data[i];

//                 var totalItemCount = data.length;

//                 var results = {
//                     id: d.id,
//                     title: d.title,
//                     description: d.description,
//                     price: d.price,
//                     image_1: d.image_1,
//                     image_2: d.image_2,
//                     image_3: d.image_3,
//                     image_4: d.image_4,
//                     image_5: d.image_5,
//                 };
//                 objectArray.push(results);
//             }
//             res.send({ dataCount: totalItemCount, results: objectArray });
//         })
//         .catch(err => {
//             res.send(500).send({
//                 message: err.message || "Some error accurred while retrieving phrases."
//             });
//         });
// };