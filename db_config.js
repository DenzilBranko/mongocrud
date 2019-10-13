var mongoose    =   require("mongoose");
mongoose.connect('mongodb://root:root@localhost:27017/db_mongocrud',{
    useNewUrlParser: true
}).then(()=>{
    console.log("connected")
}).catch((err) => {
    console.log("error in connection"+err)
});

module.exports = mongoose
