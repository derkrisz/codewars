# Simple Pig Latin

# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples

# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !

import string

def pig_it(text):
    punctuations = string.punctuation
    return ' '.join([word[1:] + word[0] + 'ay' if word not in punctuations else word for word in text.split()])

