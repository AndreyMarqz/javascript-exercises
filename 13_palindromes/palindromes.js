const palindromes = function (str) {
    const alphaNumerical = "abcdefghijklmnopqrstuvwxyz0123456789"

    const cleanedString = str
    .toLowerCase()
    .split("")
    .filter((character) => alphaNumerical.includes(character))
    .join("");

    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
