/* jshint -W024 */
/* jshint expr:true */
/* jshint -W030 */

var listOfTests = ['likes.js', 'util.js', 'data.js', 'searchForm.js', 'searchResults.js'];

require(['require', 'chai', 'chai-jquery', 'mocha', 'sinon','jquery.simulate'],
    function(require, chai, chaiJquery,  mocha, sinon, $){

  // test mode -- 'tdd', 'bdd-should', or 'bdd-expect'
  var mode = 'tdd';

  if ( mode === 'tdd' ) {
    window.assert = chai.assert;
  }

  if ( mode === 'bdd-should' ) {
    window.should = chai.should();
  }

  if ( mode === 'bdd-expect' ) {
    window.expect = chai.expect;
  }

  chai.use(chaiJquery);

  /*globals mocha */
  //mocha.setup('bdd');
  mocha.setup({
    ui: mode.split('-')[0],
    globals: [ 'XMLHttpRequest' ]
  });

  //let mocha continue run tests after first fail
  mocha.bail(false);

  require(listOfTests, function(require) {
    window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
  });
});
