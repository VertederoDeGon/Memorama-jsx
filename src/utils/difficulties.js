export const DEFAULT_DIFFICULTIES = {
  EASY: ['Easy', 30],
  NORMAL: ['Normal', 20],
  HARD: ['Hard', 15],
  INSANE: ['Insane', 10]
}

export const DIFFICULTIES_NAME = Object.values(DEFAULT_DIFFICULTIES).map(
  ([difficulty, _]) => difficulty
)
