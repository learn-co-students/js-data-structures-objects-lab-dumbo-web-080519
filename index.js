// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
};

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromDriverByKey(object, key){
  const newObject = {}
  delete newObject.key
  return newObject
}

function destructivelyDeleteFromDriverByKey(object, key){
  delete object[key]
  return object
}
