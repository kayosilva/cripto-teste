var crypto = require('crypto');


function criptografar(senha) {
    var cipher = crypto.createCipher("aes256", 'chaves');
    cipher.update(senha);
    return cipher.final('hex');
}

console.log(criptografar(123456));
