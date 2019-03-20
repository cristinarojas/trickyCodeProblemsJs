/* _.omit() funtion
var myObj = {a: 'test', b: 'test1', c: 'test2' }
var newObj = _.omit(myObj, ['a', 'c']);
// newObj = { b: 'test1' }
*/

// Implement _.omit() using Es6 or Native Javascript API.
for (item in myObj) {
    if (item.a || item.b) {
        delete item.a
    }
}

// Object.prototype.omit = function(keys) {
//}

/*
function myCustomOmit(object, keys) {


}*/
