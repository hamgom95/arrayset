const {expect} = require("chai");
const {ArraySet} = require("./index");

describe('new ArraySet()', function () {

    const a1 = new ArraySet(1,1,1,1,2,2);

    it('should only contain unique values', function () {

        expect(a1).to.have.lengthOf(2);

        expect(a1).to.have.members([1,2]);

    });
});
