
function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

       
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return true;
}

const string = ('madam');
const value = checkPalindrome(string);

console.log(value);
