export type LevelId = 0 | 1 | 2 | 3 | 'review';

export type MisconceptionKey =
  | 'PLACE_VS_RESIDENCE'
  | 'GDP_VS_GNI'
  | 'NATIONALITY_TRAP'
  | 'FACTOR_VS_TRANSFER'
  | 'WRONG_ADJUSTMENT'
  | 'SECOND_HAND_COMMISSION'
  | 'INTERMEDIATE_DOUBLE_COUNTING'
  | 'PAST_INVENTORY';

export interface Misconception {
  title: string;
  description: string;
  coreRule: string;
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  level: 0 | 1 | 2 | 3;
  sourceRef?: string; // e.g. "2015 DSE Q24", "Chapter 19 Notes Table 5.5", "2019 DSE Q25"
  prompt: string;
  itemText: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  hint?: string;
  misconceptionKey?: MisconceptionKey;
}

export interface PracticeSessionState {
  currentQuestionIndex: number;
  selectedOptionId: string | null;
  isSubmitted: boolean;
  isCorrect: boolean | null;
  streak: number;
  bestStreak: number;
  totalAnswered: number;
  totalCorrect: number;
  incorrectQuestionIds: string[];
}
