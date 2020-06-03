'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const ColumnSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        value: {
            type: Number,
            required: true
        }
    });
    return mongoose.model('Column', ColumnSchema);
};