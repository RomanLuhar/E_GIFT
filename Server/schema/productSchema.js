const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  productName: {
    type: String,
    // required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  brandId: {
    type: Schema.Types.ObjectId,
    ref: '/brand'
  },
  basePrice: {
    type: String,
    // required: true

  },
  description: {
    type: String
  },
qty:{
  type:Number

},
 
file:{
  name: {
    type: String,
  
},
size:{
    type: Number,
},
url:{
    type: String,
},
type:{
    type: String,
}
}



  
  
})

module.exports = mongoose.model('product', productSchema)