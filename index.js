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
        super(...uniqArray(items));
    }

    /**
     * Filter out non unique items.
     * @returns Uniq set
     */
    uniq() {
        const items = uniqArray(this);
        return this.constructor(...items);
    }

    /**
     * Create Union-Set with all unique items from input sets.
     * @param otherArrays Input sets.
     * @returns Union-Set
     */
    union(...otherArrays) {
        const items = flattenArray(otherArrays);
        return this.constructor(...items);
    }

    /**
     * Create Intersection-Set with all common items from input sets.
     * @param otherArrays Input sets.
     * @returns Intersection-Set
     */
    intersection(...otherArrays) {
        const items = this.filter(item => otherArrays.reduce((acc, other) => acc && other.includes(item), true)).uniq();
        return this.constructor(...items);
    }

    /**
     * Create Difference-Set with all items not in input sets.
     * @param otherArrays Input sets.
     * @returns Difference-Set
     */
    difference(...otherArrays) {
        const items = this.filter(item => otherArrays.reduce((acc, other) => acc && !other.has(item), true)).uniq();
        return this.constructor(...items);
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
        return this.every(item => otherArrays.every(other => other.has(item)));
    }
}

module.exports = {
    ArraySet
}