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
  
router.get('/:name', function(req, res, next) {
  fs.readFile(__dirname + '/data/last.txt', (err, data) => {
      const last = req.params.name
      const lastArry = last.split('')
      var lastVals = 0;
      for(let i = 0; i < lastArry.length; i++) {
          lastVals = lastVals += charVal(lastArry[i])
      }
      const ret = data.toString();
      const nameArray = ret.split('\n')
      res.send({name: nameArray[lastVals%50]})
  })
});

module.exports = router;