const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const search = require('./search');
const user = require('./user');
const set = require('./set');
const answer = require('./answer');

var responseString;

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse()

  const userInput = req.body.Body.toLowerCase()
Promise.resolve().then(function (){
  if (userInput.indexOf("responseString") >= 0) {
    return answer(userInput);
  } else if (userInput.indexOf("search") {
    return search(userInput);
  } else if (userInput.indexOf("user")){
    return user(userInput);
  } else if (userInput.indexOf("set")){
    return set(userInput));
  } 
})
  .then(result => ((result && Object.keys(result).length !== 0) ? result : "I'm afraid I can't do that."))
  .catch(err => {
    console.log(err)
    return "I'm afraid I can't do that."
  })
  .then(result => twiml.message(result))
  .then(() => res.writeHead(200, {'Content-Type': 'text/xml'}))
  .then(() => res.end(twiml.toString()))
});

http.createServer(app).listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port ' + (process.env.PORT || 3000))
})
