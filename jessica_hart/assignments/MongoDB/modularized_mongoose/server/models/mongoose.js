var mongoose = require('mongoose')

var MongooseSchema = new mongoose.Schema({
  name: {type: String, required: true},
  desc: {type: String}
}, {timestamps: true})

mongoose.model('mongooses', MongooseSchema)
