var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var schemaName = new Schema({
	name: String,
	password: String
}, {
	collection: 'userinfo'
});
var Model = mongoose.model('Model', schemaName);


mongoose.connect("mongodb://localhost/twitterdb",function(error)
{

    if(error){

        console.log("error"+error);

    }
    else
    {

        console.log("open done")
        var doc = mongoose.model('Model')

         doc.find({}, function(err,collection){ 
             collection.forEach(function(element) {
                 
                console.log(element.name);
              });
            
            
            });}
});









