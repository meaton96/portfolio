const romanMap = {
    1000 : 'M',
    500 : 'D',
    100 : 'C',
    50 : 'L',
    10 : 'X',
    5 : 'V',
    1 : 'I',  
}
function intToRoman(num: number): string {
    return intToRomanRecursive(num, '');
};

function intToRomanRecursive(num: number, s: string) :string
 {
    if (num === 0) {
        return s;
    }
    Object.keys(romanMap).forEach(key => {
        if (num - parseInt(key) >= 0) {
            return intToRomanRecursive(num - parseInt(key), s + romanMap[key]);
        }
    });
    return '';
 }
