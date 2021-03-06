// Empties: null, "", [], {}

const data = {
  "a": 1,
  "b": "blah",
  "c": {
    "d": [],
    "e": {
      "f": 12,
      "g": [0, 1, 2, 3, 4],
      "h": "blah blah"
    },
    "i": []
  },
  "j": [],
  "k": ["test", "test", "test"],
  "l": 50,
  "m": "",
  "n": null,
  "o": 0,
  "p": [0, 1, 2],
  "q": {}
};

const removeEmpty = (d) => {
  const cleanData = {};

  Object.keys(d).map(k => {
    if (d[k] && !Array.isArray(d[k]) && typeof d[k] === 'object' && Object.keys(d[k]).length !== 0) {
      cleanData[k] = removeEmpty(d[k]);
    } else if (d[k] && Array.isArray(d[k]) && d[k].length !== 0) {
      cleanData[k] = d[k];
    } else if (d[k] !== null && d[k] !== "" && !Array.isArray(d[k]) && typeof d[k] !== 'object') {
      cleanData[k] = d[k];
    }
  });

  return {...cleanData};
};

console.log(removeEmpty(data));