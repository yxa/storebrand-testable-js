// integration test for the likes page in lecture 1

casper.test.begin('search should return results', 4, function suite(test) {
    casper.start("http://localhost:4000", function() {
        test.assertTitle("Storebrand", "likes page title is the one expected");
        test.assertExists('form[id="searchForm"]', "main form is found");
        this.fill('form[id="searchForm"]', {
            q: "cat"
        }, true);
    });

    casper.then(function() {
        test.assertTitle("Storebrand", "title is ok");
        test.assertEval(function() {
            return __utils__.findAll("li.result").length === 6;
        }, "search for \"cat\" retrieved 5 hits");
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('search should not return results', 4, function suite(test) {
    casper.start("http://localhost:4000", function() {
        test.assertTitle("Storebrand", "likes page title is the one expected");
        test.assertExists('form[id="searchForm"]', "main form is found");
        this.fill('form[id="searchForm"]', {
            q: "nothingfound"
        }, true);
    });

    casper.then(function() {
        test.assertTitle("Storebrand", "title is ok");
        test.assertEval(function() {
            return __utils__.findAll("li.result").length === 0;
        }, "search for \"nothingfound\" retrieved 0 hits");
    });

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('user should be able to like a person', 1, function suite(test) {
    casper.start("http://localhost:4000", function() {
        this.fill('form[id="searchForm"]', {
            q: "cat"
        }, true);
    });

    casper.then(function() {
      this.click('#results li:nth-child(1) a');
    });

    casper.then(function() {
        this.click('#results li:nth-child(2) a');
        test.assertEval(function() {
            return __utils__.findAll("#liked > li").length === 2;
        }, "liking 2 persons should add em to the like box");
    });

    casper.run(function() {
        test.done();
    });
});

