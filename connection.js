
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = (url,namep,passp,reqq,ress) => {
    var schemaName = new Schema({
        name: String,
        password: String
    }, {
            collection: 'userinfo'
        });
    var Model = mongoose.model('Model', schemaName);

     var test=0;
    mongoose.connect(url, function (error) {

        if (error) {

            console.log("error" + error);

        }
        else {

            console.log("open done")
            var doc = mongoose.model('Model')

            doc.find({}, function (err, collection) {
                collection.forEach(function (element) {
                    if(element.name==namep&&element.password==passp)
                    {
                       test=1;
                    }
                   
                });
                if(test==1)
                {
                  ress.sendFile(__dirname + '/tweet.html')
                }
                else{
                    ress.send('Wrong user')
                }


            });



        }



    });

}

