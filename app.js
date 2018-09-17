//node app also with default parameters
var program = require('commander');

var generateString = (def_length=8, special = 1, digits = 1, uppercase = 1)=> {
  var text = "";
  var possible = `abcdefghijklmnopqrstuvwxyz`;
  var specialChar = "!#$%&?"
  for (var i = 0; i < def_length; i++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  for(var i =0; i< uppercase; i++){
      var index = Math.floor(Math.random() * text.length)
      text = text.replace(text.charAt(index), text.charAt(index).toUpperCase());
  }

  for(var i = 0; i <special; i++){
    text+=specialChar.charAt(Math.floor(Math.random() * specialChar.length));
  }
  for( var i =0; i< digits; i++){
    text+= Math.floor(Math.random()*10);
  }

  return text;
}

program
  .version('0.1.0')
  .option('-l, --length <n>', 'option length')
  .option('-s, --special <n>', 'special chars')
  .option('-d, --digits <n>', 'added digits')
  .option('-u, --uppercase <n>', 'uppercased')
  .parse(process.argv);

//console.log(generateString(program.length, program.special, program.digits, program.uppercase))
  let length = parseInt(program.length) || 8;
  let special = parseInt(program.special) || 1;
  let digits = parseInt(program.digits) || 1;
  let uppercase = parseInt(program.uppercase) || 1;

  let sum =special+digits+uppercase;

  if(length<8){
    console.log('ERROR minimal length is 8 characters')
  }else if (sum > length) {
    console.log('ERROR too low characters')
  }else{
    console.log(generateString(length, special, digits, uppercase))
  }
