let chai = require('chai');
let expect = chai.expect;

let User = require('../../../../domain-layer/classes/User');

describe('Unit Tests: User class', function() {
    it('should be able to create objects using the class constructor', () => {
        let user = new User(true, 'fn', 'ln', 'ad', 'em', 12, 'pw', 'sid', 34);
        expect(user).to.be.instanceOf(User);
        expect(user).to.be.an('object');
        expect(user).to.have.own.property('isAdmin');
        expect(user).to.have.own.property('firstName');
        expect(user).to.have.own.property('lastName');
        expect(user).to.have.own.property('address');
        expect(user).to.have.own.property('email');
        expect(user).to.have.own.property('phone');
        expect(user).to.have.own.property('password');
        expect(user).to.have.own.property('sessionID');
        expect(user).to.have.own.property('id');
    });
});
