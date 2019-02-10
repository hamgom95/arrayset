const uniqArray = arr => [...new Set(arr)];
const flattenArray = arr => arr.reduce((acc, sl) => Array.isArray(sl) ? [...acc, ...sl] : [...acc, sl], []);

/**
 * Array with set-like functionality.
 */
class ArraySet extends Array {
    /**
     * Create set with items.
     * 
     * @param items Initial items.
     */
    constructor(...items) {
        super();
        for (const item of uniqArray(items)) this.push(item);
    }

    /**
     * Filter out non unique items.
     * @returns Uniq set
     */
    uniq() {
        const items = uniqArray(this);
        return new this.constructor(...items);
    }

    /**
     * Create Union-Set with all unique items from input sets.
     * @param otherArrays Input sets.
     * @returns Union-Set
     */
    union(...otherArrays) {
        const items = flattenArray([this, ...otherArrays]);
        return new this.constructor(...items);
    }

    /**
     * Create Intersection-Set with all common items from input sets.
     * @param otherArrays Input sets.
     * @returns Intersection-Set
     */
    intersection(...otherArrays) {
        const items = this.filter(item => otherArrays.every(other => other.includes(item)));
        return new this.constructor(...items);
    }

    /**
     * Create Difference-Set with all items not in input sets.
     * @param otherArrays Input sets.
     * @returns Difference-Set
     */
    difference(...otherArrays) {
        const items = this.filter(item => !otherArrays.some(other => other.includes(item)));
        return new this.constructor(...items);
    }

    /**
     * Check whether array is superset of input sets.
     * @param otherArrays Input sets.
     * @returns If set is superset.
     */
    isSuperset(...otherArrays) {
        return otherArrays.every(other => other.every(item => this.includes(item)));
    }

    /**
     * Check whether array is subset of input sets.
     * @param otherArrays Input sets.
     * @returns If set is subset.
     */
    isSubset(...otherArrays) {
        return this.every(item => otherArrays.every(other => other.includes(item)));
    }
}

module.exports = {
    ArraySet
};