class TicTacToe {
    constructor() {
        this._field = [[null, null, null],
                       [null, null, null],
                       [null, null, null]];
        this._first_player = true;
    }

    getResults() {
        const f = this._field;
        return [[f[0][0], f[0][1], f[0][2]],
                [f[1][0], f[1][1], f[1][2]],
                [f[2][0], f[2][1], f[2][2]],
                [f[0][0], f[1][0], f[2][0]],
                [f[0][1], f[1][1], f[2][1]],
                [f[0][2], f[1][2], f[2][2]],
                [f[0][0], f[1][1], f[2][2]],
                [f[0][2], f[1][1], f[2][0]],
            ]
    }

    getCurrentPlayerSymbol() {
        return this._first_player ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (rowIndex > 2 || columnIndex > 2) throw 'wrong index';
        if (this._field[rowIndex][columnIndex] !== null) { return }
        this._field[rowIndex][columnIndex] = this._first_player ? 'x' : 'o';
        this._first_player = !this._first_player;
    }

    isFinished() {
        return Boolean(this.getWinner() || this.noMoreTurns())
    }

    getWinner() {
        const res = this.getResults().filter(el => el.every(el => el === 'x') || el.every(el => el === 'o'));
        return res.length ? res[0][0] : null
    }


    noMoreTurns() {
        console.log(this._field)
        console.log(this.getResults())
        return this.getResults().filter(el => el.indexOf(null) > -1).length === 0  
    }

    isDraw() {
       if (this.noMoreTurns() && !this.getWinner()) return true;
       if (!this.noMoreTurns() || this.getWinner()) return false
    }

    getFieldValue(rowIndex, colIndex) {
        if (rowIndex > 2 || colIndex > 2) throw 'wrong index';
        const val = this._field[rowIndex][colIndex]
        return  val !== 0 ? val : null             
    }
}

const game = new TicTacToe;

game.nextTurn(2, 1);
game.nextTurn(0, 2);
game.nextTurn(1, 0);
game.nextTurn(2, 2);
game.nextTurn(0, 1);
game.nextTurn(1, 2);

console.log(game._field)
console.log(game.noMoreTurns())