/**
 * Class describes an electronic device.
 * @class ElectronicDevice
 * @export
 */
class ElectronicDevice {
    /**
     * @constructor 
     * @param {string} model model number of electronic device.
     * @param {string} brand brand of electronic device.
     * @param {number} weight weight of electronic device.
     * @param {number} price price of electronic device.
     * @param {number} version version of electronic device.
     */
    constructor(model, brand, weight, price, version) {
        this.model = model;
        this.brand = brand;
        this.weight = weight;
        this.price = price;
        this.version = version;
    }
}

module.exports = ElectronicDevice;
