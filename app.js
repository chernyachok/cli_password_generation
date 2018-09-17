//node app also with default parameters
const generateString = require('./mod');
var program = require('commander');


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
