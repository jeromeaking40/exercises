// Write a function called letterCapitalize which takes a single string parameter
// and capitalizes the first letter of each word in the string.
// You can assume that words in the input string will be separated by only one space.
function letterCapitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
letterCapitalize("jerome")
