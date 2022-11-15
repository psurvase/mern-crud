const mongoose = require("mongoose");


const load = (callback) => {

    mongoose
        .connect("mongodb+srv://comuser:comuser@cluster0.rjib6ln.mongodb.net/testdb", { useNewUrlParser: true })
        .then(() => {
            callback()

        });
}



module.exports = { load };
