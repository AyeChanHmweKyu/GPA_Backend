const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req,res) => {
    res.send('<h1>Server is working</h1>');
  });

  app.post('/getgpa',(req,res)=>{
    console.log(req.body);
    var data = req.body;
    var total=0.0;
    var totalWeight=0.0;
    data.map((row)=>{
        var tempValue=0;
        if(parseInt(row.grade)>=90){
            tempValue=4;
        }
        else if(parseInt(row.grade)>=70){
            tempValue=3;
        }
        else if(parseInt(row.grade)>=70){
            tempValue=2;
        }
        else if(parseInt(row.grade)>=60){
            tempValue=1;
        }
        else if(parseInt(row.grade)>=60){
            tempValue=0.5;
        }
        total +=  tempValue* parseFloat(row.weight);
        totalWeight += parseInt(row.weight);
    })
    var grade = total/totalWeight;
    res.json({"grade":parseFloat(grade).toFixed(2)});
  });

  app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });