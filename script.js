let situations = [
    'sadder', 'funnier', 'stronger', 'louder', 'messier', 'sillier', 'wierder',
    'stranger', 'crazier'
]


let ingVerbs = [
    'golfing', 'flying', 'running', 'singing', 'laughing', 'swimming', 'skateboarding',
    'sky-diving', 'bowling', 'soccer-playing'
]
let nouns = [
    'antelope', 'penguin', 'giraffe', 'zebra', 'kangaroo', 'cheetah', 'hippo', 'hyena',
    'rhino', 'elephant'
]

const comparativeGen = (arr1, arr2, arr3) => {
    let h = Math.floor(Math.random() * arr1.length)
    let i = Math.floor(Math.random() * arr2.length);
    let j = Math.floor(Math.random() * arr3.length);
    return `That is ${arr1[h]} than a ${arr2[i]} ${arr3[j]}!!!`
};

console.log(comparativeGen(situations, ingVerbs, nouns));