export const PIECE_SIZE_ROWS = 4;
export const PIECE_SIZE_COLS = 4;

const I = {
    name: "I",
    matrix: [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    color: "#00f0f0"
}
const O = {
    name: "O",
    matrix: [
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    color: "#f0f000"
}
const J = {
    name: "J",
    matrix: [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    color: "#0000f0"
}
const L = {
    name: "L",
    matrix: [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
    ],
    color: "#f000f0"
}
const T = {
    name: "T",
    matrix: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    color: "#00f000"
}
const S = {
    name: "S",
    matrix: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    color: "#a0f000"
}
const Z = {
    name: "Z",
    matrix: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    color: "#a0f0f0"
}

const PIECES = [I, O, J, L, T, S, Z];

/**
 * Returns a random tetromino piece object.
 * @returns {Object} A random tetromino piece object
 */

export function randomPiece() {
    const p = PIECES[Math.floor(Math.random() * PIECES.length)];
    const matrix = p.matrix.map(row => row.slice()); // Create a copy of the matrix
    return{
        matrix,
        color: p.color,
        name: p.name,
        x: 0,
        y: 0
    }
}