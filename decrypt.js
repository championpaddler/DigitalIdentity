var fs = require('fs');
var crypto = require('crypto');

var key = '14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd';
var cipher = crypto.createDecipher('aes-256-cbc', key);
var input = fs.createReadStream('QmdtX7HAdhH7UPrC6bEPASaCaoKMV21HRBR1shyhKmhHWm.enc');
var output = fs.createWriteStream('output.json');

input.pipe(cipher).pipe(output);

output.on('finish', function() {
  console.log('Data Decrypted');
});