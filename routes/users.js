var express = require('express');
var router = express.Router();
var fs = require('fs')

var consonant = (letter) => {
  if(letter === 'q' || letter === 'z' || letter === 'x') {
    return 10;
  }
  else if (letter === 'k' || letter === 'j' || letter === 'w' || letter === 'v' || letter === 'g' ) {
    return 5;
  }
  else if (letter === 'm' || letter === 'l' || letter === 'd' || letter === 'p' || letter === 't' ) {
    return 3;
  }
  else {
    return 1;
  }
}

var charVal = (vowl) => {
  switch(vowl) {
    case ' ':
      return 0;
      break
    case 'y': 
      return 10;
      break
    case 'u':
      return 5;
      break
    case 'o': 
      return 5;
      break
    case 'i':
      return 3;
      break
    case 'e': 
      return 3;
      break
    case 'a':
      return 3;
      break
    default:
      return consonant(vowl)
      break
  }
}

/* GET users listing. */
router.get('/:person', function(req, res, next) {
  const parm = JSON.parse(req.params.person)
  var givenName = parm.first.split('');
  var gender = parm.gender;

  let firstNameVal = 0

  var namesList = []
  for(let i = 0; i < givenName.length; i++) {
    firstNameVal = firstNameVal += charVal(givenName[i].toLowerCase())
  }
  if(gender === 'Guy') {
    fs.readFile(__dirname + '/data/guys_first.txt', (err, data) => {
      const ret = data.toString()
      const array = ret.split('\n')
      for(var i = 0; i < array.length; i++) {
        const string = array[i].substr(0, array[i].length-1)
        const temp = string
        namesList.push(temp)
      }
      res.send({name: namesList[firstNameVal%50]})
    })
  }
  else if (gender === 'Girl') {
    fs.readFile(__dirname + '/data/girls_first.txt', (err, data) => {
      const ret = data.toString()
      const array = ret.split('\n')
      for(var i = 0; i < array.length; i++) {
        const string = array[i].substr(0, array[i].length-1)
        const temp = string
        namesList.push(temp)
      }
      res.send({name: namesList[firstNameVal%50]})
  })
}
  else {
    fs.readFile(__dirname + '/data/all.txt', (err, data) => {
      const ret = data.toString()
      const array = ret.split('\n')
      for(var i = 0; i < array.length; i++) {
        const string = array[i].substr(0, array[i].length-1)
        const temp = string
        namesList.push(temp)
      }
      res.send({name: namesList[firstNameVal%50]})
    })
  }

});

module.exports = router;
