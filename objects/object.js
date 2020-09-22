/*


let myObj = {
  name :'Sunny',
  qux : 3
};

let myProtoObj = Object.create(myObj);



myProtoObj = {
  foo: 1,
  bar: 2,
};

// copyObj() creates and returns a copy of an obj

function copyObj(object, copyKeys = Object.keys(object)) {
  let newObj = {};
  
  for (let i = 0; i < copyKeys.length; i += 1) {
    newObj[copyKeys[i]] = object[copyKeys[i]];
  }

  return newObj;
}

newOb = copyObj(myProtoObj);
console.log(newOb.foo);
console.log(newOb.bar);

newOb2 = copyObj(myProtoObj, ['foo']);
console.log(newOb2.foo);
console.log(newOb2.bar);

*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objUpper = Object.keys(obj);
// console.log(objUpper.map(l => l.toUpperCase()));
// console.log(objUpper);




let myProtoObj = {
  foo: 1,
  bar: 2,
};

let Obj = Object.create(myProtoObj);
Obj['qux'] = 3;

for (let key in Obj) {
  if (Obj.hasOwnProperty(key)) {
    // console.log(key);
  }
}


let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(objectC, arrayKeys = Object.keys(objectC)) {
  let createObj = {};
  arrayKeys.forEach(key => createObj[key] = objectC[key]);
  
  return createObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined

