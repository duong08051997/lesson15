function isPalindrome(kiTu) {
    for (let i = 0; i < kiTu.length/2; i++) {
        if (kiTu[i] !== kiTu[kiTu.length - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('sgdf'));
console.log(isPalindrome('sdads'));
