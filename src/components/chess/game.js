// export const observe = (receive) => {
//     const randPos = () => Math.floor(Math.random()*8)
//     setInterval(() => {
//         receive([randPos(),randPos()])
//     }, 500);
// }


let knightPosition = [1,7]
let observer = null
const emitChanges = () => {
    observer(knightPosition)
}
export const observe = (o) => {
    if (observer) {
        throw new Error("Multiple observers not implemented")
    }
    observer = o
    emitChanges()
}
export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y

    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}
export const moveKnight = (toX, toY) => {
    knightPosition = [toX, toY]
    emitChanges()
}