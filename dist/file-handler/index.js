"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const fileHandler = (readPath, createPath) => new Promise(() => {
    const encoding = "utf8";
    fs_1.default.readFile(readPath, encoding, (err, data) => {
        if (err)
            return console.log({ err });
        const result = JSON.stringify(data.split("\n").map(l => {
            const line = l.split("\r").join("");
            const [banglaPart, en] = line.split(" - ");
            const [bn, pronouncePart] = banglaPart.split(" (");
            const pron = pronouncePart.split(")").join("");
            return { bn, pron, en };
        }));
        const start = Date.now();
        fs_1.default.writeFile(createPath, result, encoding, (err) => {
            if (err)
                console.log({ err });
            else
                console.log(`done in ${Date.now() - start}ms.`);
        });
    });
});
exports.default = fileHandler;
//# sourceMappingURL=index.js.map