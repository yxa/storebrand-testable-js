var express   = require( 'express' );
var Faker     = require( 'Faker' );
var _         = require( 'underscore' );
var app       = express( express.bodyParser() );
var baseDir   = __dirname + '/../';

var fakeData = [];

for (var i = 0; i < 1000; i++) {
  fakeData.push(Faker.Helpers.userCard());
}

app.use( '/', express.static( baseDir + 'version1' ) );

app.get( '/data/search.json', function(req, res) {
  var query = req.query.q;
  var results = [];

  if (!query || !query.trim()) {
    console.log('Query was empty.');
  } else {
    results = _.filter(fakeData, function(item) {
      var possibles = [ item.name, item.email, item.company.name ];
      return _.any(possibles, function(p) {
        return p.toLowerCase().match(query.toLowerCase());
      });
    });
  }

  res.end(JSON.stringify({ results : results }));
});


app.listen( 4000 );

console.log( 'Serving on http://localhost:4000' );
