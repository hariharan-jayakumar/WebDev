require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology : true, useNewUrlParser : true});

const {Schema} = mongoose;
const personSchema = new Schema({
  name : {type : String, required: true},
  age : Number,
  favoriteFoods : [String]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  var hari = new Person({name:"Hariharan Jayakumar", age: 84, favoriteFoods : ["Apple", "Orange"]});
  hari.save((err,data)=>{
    if(err) return console.error(err);
    done(null,data);
  });
};

var arrayOfPeople = [
  {name:"Hariharan 1", age: 84, favoriteFoods : ["Apple", "Orange"]},
  {name:"Hariharan 2", age: 84, favoriteFoods : ["Apple", "Orange"]},
  {name:"Hariharan 3", age: 84, favoriteFoods : ["Apple", "Orange"]}
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err,people)=>{
    if(err) return console.error(err);
    done(null,people);
  });
};

personName = "Hariharan 1";

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, personFound) => {
    if(err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, personFound) => {
    if(err) return console.log(err);
    done(null, personFound);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};
