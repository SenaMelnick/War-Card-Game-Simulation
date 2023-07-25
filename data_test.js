var expect = chai.expect;

describe(`My functions`, function(){
    describe(`checkVal`, function(){
        it(`check the value of the card`, function(){
            var x = checkVal("Ace of Hearts");
            expect(x).to.equal(1);
        });
    });
});