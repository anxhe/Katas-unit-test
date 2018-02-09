const hasSumEqualTo =  require('../hasSumEqualTo');
const expect = require('expect.js');

describe('Kata hasSumEqualTo' , ()=> {
  context(' when sum of a couple inside array is equal to the given number', ()=> {
    it('return true if array [1,3,4,6] and number 9', ()=>{
      expect(hasSumEqualTo([1,3,4,6],9)).to.be(true)
    });
    it('return true if array [1,3,4,6] and number 8)', ()=>{
      expect(hasSumEqualTo([1,3,4,6],8)).to.be(false)
    });
  })
});
