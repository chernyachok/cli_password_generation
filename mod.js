
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
module.exports = generateString;
