import { randomPiece } from "./tetrominoes";

/**
 * @param {number} rows
 * @param {number} cols
 * @returns {Array}
 */

export function creadGrid(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

/**
 * @param {Array} grid
 * @param {Object} piece
 * @param {number} dx
 * @param {number} dy
 * @returns {boolean}
 */

export function canMove(grid, piece, dx, dy) {
  const rows = grid.length;
  const cols = grid[0].length;
  const { matrix, x, y } = piece;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c]) {
        const newY = y + r + dy;
        const newX = x + c + dx;

        if (newX < 0 || newX >= cols) return false;
        if (newY >= rows) return false;
        if (newY >= 0 && grid[newY][newX]) return false;
      }
    }
  }
  return true;
}

/**
 * @param {Array} grid
 * @param {Object} piece
 * @returns {Array}
 */

export function mergePiece(grid, piece) {
  const copy = grid.map((row) => row.slice());
  const { matrix, x, y, color } = piece;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c]) {
        const gy = y + r;
        const gx = x + c;

        if (gy >= 0 && gy < copy.length && gx >= 0 && gx < copy[0].length) {
          copy[gy][gx] = color;
        }
      }
    }
  }
  return copy;
}

/**
 * @param {Object} piece
 * @returns {Object}
 */

export function rotatePiece(piece) {
  const matrix = piece.matrix;
  const rows = matrix.length;
  const cols = matrix[0].length;

  const size = Math.max(rows, cols);
  const tempMatrix = Array.from({ length: size }, () => Array(size).fill(0));

  const offsetY = Math.floor((size - rows) / 2);
  const offsetX = Math.floor((size - cols) / 2);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        tempMatrix[r + offsetY][c + offsetX] = matrix[r][c] || 0;
    }
  }


  
}
