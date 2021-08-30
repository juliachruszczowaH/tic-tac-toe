class TicTacToe {
  constructor() {
    this.curr = 'x';
    this.pane = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.curr;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.pane[rowIndex][columnIndex]) {
      this.pane[rowIndex][columnIndex] = this.curr;
      this.curr = this.curr == 'x' ? 'o' : 'x';
    }
  }

  isFinished() {
    return this.isDraw() || !!this.getWinner();
  }

  getWinner() {
    if (
      this.pane[0][0] === this.pane[1][1] &&
      this.pane[0][0] === this.pane[2][2]
    ) {
      return (this.winner = this.pane[0][0]);
    }
    if (
      this.pane[0][2] === this.pane[1][1] &&
      this.pane[0][2] === this.pane[2][0]
    ) {
      return (this.winner = this.pane[0][2]);
    }
    for (let i = 0; i < 3; i++) {
      if (
        this.pane[i][0] === this.pane[i][1] &&
        this.pane[i][0] === this.pane[i][2]
      ) {
        return (this.winner = this.pane[i][0]);
      }
      if (
        this.pane[0][i] === this.pane[1][i] &&
        this.pane[0][i] === this.pane[2][i]
      ) {
        return (this.winner = this.pane[0][i]);
      }
    }

    return null;
  }

  noMoreTurns() {
    if (
      this.pane
        .reduce((s, i) => {
          return s.concat(i);
        })
        .includes(null)
    ) {
      return false;
    }
    return true;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.pane[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
