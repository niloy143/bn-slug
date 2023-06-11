"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adjective_json_1 = __importDefault(require("../assets/adjective.json"));
const animal_json_1 = __importDefault(require("../assets/animal.json"));
const color_json_1 = __importDefault(require("../assets/color.json"));
const loop = (n, action) => { Array(n).fill("").forEach((_, i) => { action(i + 1); }); };
const randomIndex = (min, max) => Math.round(Math.random() * (max - min)) + min;
const generateSlug = (type = "bn") => {
    const slug = `${color_json_1.default[randomIndex(0, color_json_1.default.length - 1)][type]} ${adjective_json_1.default[randomIndex(0, adjective_json_1.default.length - 1)][type]} ${animal_json_1.default[randomIndex(0, animal_json_1.default.length - 1)][type]}`;
    return slug.split(" ").map(_ => _.toLowerCase()).join("-");
};
exports.default = generateSlug;
//# sourceMappingURL=generate-slug.js.map