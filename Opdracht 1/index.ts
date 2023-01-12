// Code to base it on input
// import PromptSync from "prompt-sync"
// const prompt = PromptSync()
//

const wordList: string[] = ["silent", "listen", "tensile", "race", "care", "acre"]

// Code to base it on input
// console.log("Insert a word. Leave empty to stop.")
// while (true) {
//     const input: string = prompt("")
//     if (input !== "") wordList.push(input)
//     else break
// }
//

const findAnagrams = (array: string[]) => {

    const anagramLists = array.map((word: string) => {
        const wordAnagrams: string[] = []
        array.forEach((comparisonWord: string) => {
            if (word.length !== comparisonWord.length) return
            if (JSON.stringify(word.split("").sort()) !== JSON.stringify(comparisonWord.split("").sort())) return
            wordAnagrams.push(comparisonWord)
        })
        return wordAnagrams
    })

    const anagramListsStrings = anagramLists.map((anagramList: string[]) => JSON.stringify(anagramList))

    return anagramLists.filter((anagramList: string[], index: number) => anagramListsStrings.indexOf(JSON.stringify(anagramList)) === index)
}

const sortedWordList = findAnagrams(wordList);
console.log(sortedWordList);

// Code to base it on input
// console.time("Matches found in")
// console.timeLog("Matches found in")
// console.table(wordList)
//