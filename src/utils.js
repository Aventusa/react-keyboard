export default function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

export const getFullYear = () => {
    const d = new Date()
    return d.getFullYear()
}