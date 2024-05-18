const mongoose=require('mongoose')

const Schema=mongoose.Schema

const vendor_detailSchema= new Schema({
    vendorName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    stateId:{
        type:Schema.Types.ObjectId,
        ref:'state'
    },
    cityId:{
        type:Schema.Types.ObjectId,
        ref:'city'
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    pincode:{
        type:String,
        required:true
    },
    contactNum:{
        type:String,
        required:true
    },
    customerSupportNumber:{
        type:String,
        required:true
    },
    feedbackemail:{
        type:String,
        required:true
    }

})


module.exports=mongoose.model('vendor_detail',vendor_detailSchema)