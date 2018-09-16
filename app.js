//node app  --length=12 --special=2 --digits=3 --uppercase=3
//result: xbpyKMWxhmdq#$766
//also added default parameters 
var argv = require('minimist')(process.argv.slice(2));


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


var sum =(argv.special+ argv.digits + argv.uppercase)
if(argv.length < 8){
  console.log('ERROR minimal length is 8 characters');
}else if (sum>argv.length) {
  console.log('ERROR password length cannot be less than'+sum)
}

else{
  console.log(generateString(argv.length, argv.special, argv.digits, argv.uppercase))

}
