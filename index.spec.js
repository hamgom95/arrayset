const {expect} = require("chai");
const {ArraySet} = require("./index");

describe('ArraySet', function () {

    
    it('should only contain unique values', function () {
        const a1 = new ArraySet(1,1,1,1,2,2);
        expect(a1).to.have.lengthOf(2);
        expect(a1).to.have.members([1,2]);
    });

    it('union()', function () {
        expect(new ArraySet(1,2).union([3,4], [5])).to.have.members([1,2,3,4,5]);
    });

    it('difference()', function () {
        expect(new ArraySet(1,2,3).difference([1], [3])).to.have.members([2]);
    });

    it('intersection()', function () {
        expect(new ArraySet(1,2).intersection([1], [1])).to.have.members([1]);
    });

    it('isSuperset()', function () {
        expect(new ArraySet(1,2).isSuperset([1], [1,2])).to.be.true;
    });

    it('isSubset()', function () {
        expect(new ArraySet(1).isSubset([1,2], [1,3])).to.be.true;
    });
});
