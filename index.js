// Import stylesheets
import './style.css';

const deepCopyFunction = (inObject) => {
    let outObject, value, key
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject 
    }
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
      outObject[key] = deepCopyFunction(value)
    }
  
    return outObject
  }

  let originalArray = [37, 3700, { hello: "world" }, 8]

  let deepCopiedArray = deepCopyFunction(originalArray)
originalArray[2].hello = "moon";


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>${JSON.stringify(deepCopiedArray)}</h1>`;