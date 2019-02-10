export class ArraySet<T> extends Array<T> {
    constructor(...items: T[]);
    uniq(): ArraySet<T>;
    union(...otherArrays: T[][]): ArraySet<T>;
    intersection(other: T[]): ArraySet<T>;
    difference(other: T[]): ArraySet<T>;
    isSuperset(other: T[]): boolean;
    isSubset(other: T[]): boolean;
}
