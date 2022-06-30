// Regex
/*
Regex has 2 things
a) pattern : text (pattern to check)
b) flags : g (global), i(case insensitive), m(multiline)
*/

// Creating Pattern with RegExp Constructor
let pattern = 'love'
let flag = 'gi'

let regex = new RegExp(pattern,flag)

// Creating wothout RegExp Constructor
let regex_1 = /love/gi

// RegExp Object Methods
// test():Tests for a match in a string. It returns true or false.
let str_1 = 'I love you. And you Love me'
console.log(regex_1.test(str_1))

// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found.
console.log(str_1.match(regex_1))

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
console.log(str_1.search(regex_1))

// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
console.log (str_1.replace(regex_1, 'hate'))

/*
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
^: starts with
$: ends with
. : any character except new line character(\n)
?: zero or one times
*: zero or more times
+: one or more times
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
(): Capture and group
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits

Example : /^[Aa]pple|[Bb]anana.*\d[3]
*/

let pattern_1 = /\w\d+/g
text  = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
sum = 0
console.log(Array(text.match(pattern_1)))
matches = text.match(pattern_1)
modified = matches.map((num) => parseInt(num))
console.log(modified.reduce((acc,cur)=> acc+cur,0))

// Exercise : Level 2
// Wrong code
function tenMostFrequentWords(paragraph, count){
    paragraph = paragraph.toLowerCase()
    words = paragraph.match(/\w+\b/g)
    word= new Set(words)
    const frequent = []
    for(elem of word){
        let count =0
        for(i of word){
            if(i.localeCompare(elem))
                count++;
        }
        frequent.push({word:elem,count:count})        
    }
    frequent.sort(function(a,b){return b.count-a.count});
    console.log(frequent)
    return frequent.slice(0,10)
}

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph,10))
