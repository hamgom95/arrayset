# @hamgom95/arrayset

Set-like Array.

## API Documentation

<a name="ArraySet"></a>

### ArraySet
Array with set-like functionality.

**Kind**: global class  

* [ArraySet](#ArraySet)
    * [new ArraySet(...items)](#new_ArraySet_new)
    * [.uniq()](#ArraySet+uniq) ⇒
    * [.union(...otherArrays)](#ArraySet+union) ⇒
    * [.intersection(...otherArrays)](#ArraySet+intersection) ⇒
    * [.difference(...otherArrays)](#ArraySet+difference) ⇒
    * [.isSuperset(...otherArrays)](#ArraySet+isSuperset) ⇒
    * [.isSubset(...otherArrays)](#ArraySet+isSubset) ⇒

<a name="new_ArraySet_new"></a>

#### new ArraySet(...items)
Create set with items.


| Param | Description |
| --- | --- |
| ...items | Initial items. |

<a name="ArraySet+uniq"></a>

#### arraySet.uniq() ⇒
Filter out non unique items.

**Kind**: instance method of [<code>ArraySet</code>](#ArraySet)  
**Returns**: Uniq set  
<a name="ArraySet+union"></a>

#### arraySet.union(...otherArrays) ⇒
Create Union-Set with all unique items from input sets.

**Kind**: instance method of [<code>ArraySet</code>](#ArraySet)  
**Returns**: Union-Set  

| Param | Description |
| --- | --- |
| ...otherArrays | Input sets. |

<a name="ArraySet+intersection"></a>

#### arraySet.intersection(...otherArrays) ⇒
Create Intersection-Set with all common items from input sets.

**Kind**: instance method of [<code>ArraySet</code>](#ArraySet)  
**Returns**: Intersection-Set  

| Param | Description |
| --- | --- |
| ...otherArrays | Input sets. |

<a name="ArraySet+difference"></a>

#### arraySet.difference(...otherArrays) ⇒
Create Difference-Set with all items not in input sets.

**Kind**: instance method of [<code>ArraySet</code>](#ArraySet)  
**Returns**: Difference-Set  

| Param | Description |
| --- | --- |
| ...otherArrays | Input sets. |

<a name="ArraySet+isSuperset"></a>

#### arraySet.isSuperset(...otherArrays) ⇒
Check whether array is superset of input sets.

**Kind**: instance method of [<code>ArraySet</code>](#ArraySet)  
**Returns**: If set is superset.  

| Param | Description |
| --- | --- |
| ...otherArrays | Input sets. |

<a name="ArraySet+isSubset"></a>

#### arraySet.isSubset(...otherArrays) ⇒
Check whether array is subset of input sets.

**Kind**: instance method of [<code>ArraySet</code>](#ArraySet)  
**Returns**: If set is subset.  

| Param | Description |
| --- | --- |
| ...otherArrays | Input sets. |

