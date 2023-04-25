const fs = require('fs');

let sourceItem = {
  id: 1,
  name: randomString(16),
};

function randomString(e) {
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz",
    a = t.length,
    n = "";
  for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}

let bigJSON = { data: [] };

for (let i = 0; i < 1000000; i++) {
  bigJSON.data.push({
    id: i,
    name: randomString(12),
  });
}

const data = JSON.stringify(bigJSON);

// write JSON string to a file
fs.writeFile('big.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
