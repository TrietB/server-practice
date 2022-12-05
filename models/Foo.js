const mongoose = require('mongoose')

const fooSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        flag: {type: Boolean, enum: [true, false], require: true},
    },
    {
        timestamps: true,
      }
)
const Foo = mongoose.model('Foo', fooSchema)

module.exports = Foo