let dict = {
    "hi": "Khulumkha",
    "hello":"khulumkha",
    "i": "ang",
    "you": "nwng",
    "how": "bahai",
    "what": "tamo",
    "why":"tamoni",
    "where":"boro",
    "when":"bufuru",
    "now":"tabuk",
    "then":"afru",
    "here":"oro",
    "there":"aro",
    "it":"mo",
    "this":"omo",
    "that":"amo",
    "he": "bo",
    "do": "khai",
    "eat": "cha",
    "good":"kaham",
    "bad":"hamya",
    "beautiful":"naithok",
    "who":"sabo",
    "us":"chwngno",
    "them":"borokno",
    "him":"bono",
    "your":"nini",
    "my":"ani",
    "our":"chini",
    "his":"bini",
    "rice":"mai",
    "school":"rwngnok",
    "home":"nok"
};

const skipWords = ["am", "is", "are"];

const button = document.getElementById("btn");

button.addEventListener("click", function () {

    const input = document.getElementById("userInput").value;

    const words = input.toLowerCase().split(/\s+/);

    let translated = [];

    for (let word of words) {

        if (skipWords.includes(word)) {
            continue;       // Skip am, is, are
        }

        translated.push(dict[word] || word);
    }

    document.getElementById("result").innerText = translated.join(" ");
});

