var express = require('express')

var app = express()

function compiler(str,path)
{

}
console.log(__dirname)

app.set('views', __dirname+'\\views')
app.set('view engine', 'jade')
//app.use(express.logger('dev'))
app.use(express.static(__dirname+'/public'))

app.get('/', function (req, res) {
    res.render('index',
    { title : 'Home' 
, fName: 'Jade'
,lName:'Jacob'
,address:'5th Avenue, 2nd Block Wale, CA '
,grade:'4B'  }
    )
  })

app.listen(3030)