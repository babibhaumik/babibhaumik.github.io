let dict = {
    "hi": "Khulumlkha",
    "i": "ang",
    "you": "nwng",
    "how": "bahai",
    "what": "tamo",
    "he": "bo",
    "do": "khai",
    "eat": "cha",
    "we":"chwng",
    "me":"ano",
    "they":"borok",
    "y'all":"norok",
    "go":"thang",
    "come":"phai",
    "goood":"kaham",
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

