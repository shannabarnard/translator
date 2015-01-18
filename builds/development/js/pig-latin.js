angular.module('pigLatin', []).
filter('pigLatin', function() {

 var isVowel = function(ch) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(ch.toLowerCase()) !== -1;
 };

 var determineFirstVowel = function(str) {
  if (!str || !str.length) return -1;
  for (var i = 0; i < str.length; i++) {
   if (isVowel(str[i])) return i;
  }
  return -1;
 };

 var translateToPigLatin = function(word) {
  if (!word || !word.length) return '';

  // If word starts with a vowel,
  word = word.replace(/\b([aeiou][a-z]*)\b/i, "$1way");
  word = word.replace(/\b([bcdfghjklmnpqrstvwxy]+)([a-z]*)\b/i, "$2$1ay");

  return word;
 };

 return function(englishString) {
  if (!englishString) return '';

  englishString = '' + englishString;

    var englishWords = englishString.split(' ');
    var pigLatinWords = [];

  angular.forEach(englishWords, function(word) {
   word = translateToPigLatin(word);
      pigLatinWords.push(word);
  });
    return pigLatinWords.join(' ');
 };
});
