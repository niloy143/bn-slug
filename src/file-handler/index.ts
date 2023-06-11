import fs from "fs";

const fileHandler = (readPath: string, createPath: string) => new Promise(() => {
    const encoding = "utf8";
    fs.readFile(readPath, encoding, (err, data) => {
        if (err) return console.log({ err })
        const result = JSON.stringify(data.split("\n").map(l => {
            const line = l.split("\r").join("");
            const [banglaPart, en] = line.split(" - ");
            const [bn, pronouncePart] = banglaPart.split(" (");
            const pron = pronouncePart.split(")").join("");
            return { bn, pron, en }
        }));
        const start = Date.now();
        fs.writeFile(createPath, result, encoding, (err) => {
            if (err) console.log({ err })
            else console.log(`done in ${Date.now() - start}ms.`)
        })
    })
})

export default fileHandler