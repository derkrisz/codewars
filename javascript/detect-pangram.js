/*
Detect pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let ar = [];
    const lowerCased = string.toLowerCase()
    for (var i = 0; i < lowerCased.length; i++) {
      if ( alphabet.includes(lowerCased.charAt(i)) && ar.indexOf(lowerCased.charAt(i)) === -1) {
        ar.push(lowerCased.charAt(i))
      }
    }
    return ar.length === 26
  }