interface IRequest {
  firstPlay: 'rock' | 'paper' | 'scissor';
  secondPlay: 'rock' | 'paper' | 'scissor';
}

interface ICases {
  rock: {
    rock: string;
    paper: string;
    scissor: string;
  };
  paper: {
    rock: string;
    paper: string;
    scissor: string;
  };
  scissor: {
    rock: string;
    paper: string;
    scissor: string;
  };
}

/**
 * @function play
 *
 * @description Create a mock file (good for testing purposes)
 */

function play({ firstPlay, secondPlay }: IRequest): string {
  const cases: ICases = {
    rock: {
      rock: 'draw',
      paper: 'rock loses',
      scissor: 'rock wins',
    },
    paper: {
      rock: 'paper wins',
      paper: 'draw',
      scissor: 'paper loses',
    },
    scissor: {
      rock: 'scissor loses',
      paper: 'scissor wins',
      scissor: 'draw',
    },
  };

  return cases[firstPlay][secondPlay];
}

function dontPlayMe({ firstPlay, secondPlay }: IRequest): any {
  if (firstPlay === secondPlay) return 'draw';

  if (firstPlay === 'rock' && secondPlay === 'scissor') {
    return 'rock ganhou';
  }

  if (firstPlay === 'rock' && secondPlay === 'paper') {
    return 'rock loses';
  }

  if (firstPlay === 'paper' && secondPlay === 'rock') {
    return 'paper wins';
  }

  if (firstPlay === 'paper' && secondPlay === 'scissor') {
    return 'scissor wins';
  }

  if (firstPlay === 'scissor' && secondPlay === 'paper') {
    return 'scissor wins';
  }

  if (firstPlay === 'scissor' && secondPlay === 'rock') {
    return 'scissor loses';
  }

  return 'aaaa';
}

export { play, dontPlayMe };
