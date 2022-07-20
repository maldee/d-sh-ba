//ClearDB Integration

// module.exports = {
//     HOST: "us-cdbr-east-02.cleardb.com",
//     USER: "b64db9545d6b9a",
//     PASSWORD: "0ddcd162",
//     DB: "heroku_d1b3fa7d8905dd7",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };


//Heroku Integration

module.exports = {
    HOST: "ec2-52-72-56-59.compute-1.amazonaws.com",
    USER: "biyvxvqhulpkic",
    PASSWORD: "fd00b50b3108e67213323e604ce5c75dae81d492add513443913cc546d9cabcd",
    DB: "dfhbuqbq6ccef7",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

//Localhost Integration

// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "admin",
//     DB: "deeshop",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };