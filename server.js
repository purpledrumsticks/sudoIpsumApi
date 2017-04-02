let express = require('express');
let app = express();

app.get('/:sudoIpsum', (req, res) => {
   // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
   const shuffle = function (array) {
     let tmp, current, top = array.length;

     if (top) while(--top) {
       current = Math.floor(Math.random() * (top + 1));
       tmp = array[current];
       array[current] = array[top];
       array[top] = tmp;
     }
     return array;
   }

   let arr = [
     'Pizza',
     'Cats',
     'dogs',
     'unity',
     'solodev',
     'mlh',
     'pizza',
     'noodles',
     'hammocks',
     'Stetson',
     'sudo',
     'hack',
     'hackers',
     'hacked',
     'microsoft',
     'apple',
     'ios',
     'app',
     'application',
     'fun',
     'tech',
     'coffee',
     'bagels',
     'drone',
     'major',
     'league',
     'git',
     'aws',
     'swag',
     'swagger',
     'docker',
     'Pizza',
     'Cats',
     'dogs',
     'unity',
     'solodev',
     'mlh',
     'pizza',
     'noodles',
     'hammocks',
     'Stetson',
     'sudo',
     'hack',
     'hackers',
     'hacked',
     'microsoft',
     'apple',
     'ios',
     'app',
     'application',
     'fun',
     'tech',
     'coffee',
     'bagels',
     'drone',
     'major',
     'league',
     'git',
     'aws',
     'swag',
     'swagger',
     'docker',
     'Pizza',
     'Cats',
     'dogs',
     'unity',
     'solodev',
     'mlh',
     'pizza',
     'noodles',
     'hammocks',
     'Stetson',
     'sudo',
     'hack',
     'hackers',
     'hacked',
     'microsoft',
     'apple',
     'ios',
     'app',
     'application',
     'fun',
     'tech',
     'coffee',
     'bagels',
     'drone',
     'major',
     'league',
     'git',
     'aws',
     'swag',
     'swagger',
     'docker'
   ]

   const ipsumObject = {
     text: shuffle(arr).join(' ')
   }

   res.send(ipsumObject);
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Example app is listening on port 3000');
})
