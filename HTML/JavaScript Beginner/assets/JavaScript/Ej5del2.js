const exercise5 = () => {
    let startTime = 0, endTime = 0, startTime2 = 0, endTime2 = 0, words = 0, chars = 0
    let response = "";
    let questions = [
        "Replace chars by signs?",
        "Capitalize?",
        "Replace spaces with commas?"
    ];
    let options = {
        replaceChars: false,
        capitalize: false,
        replaceSpaces: false,
    };
    let string = "";
    do {
        string = prompt('Please, enter your string').trim();
    } while (!string || string.length == 0);
    words = string.split(" ").length
    chars = [...string].length
    for (let index = 0; index < questions.length; index++) {
        do {
            response = prompt(questions[index]).trim()
            console.log(response);
            switch (index) {
                case 0:
                    options.replaceChars = response == 'y' ?? false;
                    break;
                case 1:
                    options.capitalize = response == 'y' ?? false;
                    break;
                case 2:
                    options.replaceSpaces = response == 'y' ?? false;
                    break;
            }
        } while (!response || response.length == 0 || !(/y|n/i.test(response)));

    }
    startTime = performance.now()
    console.time("work done in ")
    startTime2 = new Date().getTime();
    stringManager(string, options)
    endTime = performance.now()
    console.log(`${words} words, ${chars} chars`);
    console.timeEnd("work done in ")
    endTime2 = new Date().getTime();
    console.log(`with performance: ${endTime - startTime} ms`);
    console.log(`with Date(): ${endTime2 - startTime2} ms`);
}