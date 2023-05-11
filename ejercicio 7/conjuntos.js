
const familyNam = ["luis", "angela", "wil", "yo"];

const familyName = new Set(familyNam);
console.log(familyName);

familyName.add("yo");
console.log(familyName);

familyNam.add("JavaScript");