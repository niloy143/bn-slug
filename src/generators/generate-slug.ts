import adjectives from "../assets/adjective.json";
import animals from "../assets/animal.json";
import colors from "../assets/color.json";

const loop = (n: number, action: Function) => { Array(n).fill("").forEach((_, i) => { action(i + 1) }) }
const randomIndex = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min

const generateSlug = (type: "bn" | "pron" | "en" = "bn"): string => {
    const slug = `${colors[randomIndex(0, colors.length - 1)][type]} ${adjectives[randomIndex(0, adjectives.length - 1)][type]} ${animals[randomIndex(0, animals.length - 1)][type]}`;
    return slug.split(" ").map(_ => _.toLowerCase()).join("-");
};

export default generateSlug;