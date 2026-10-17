import React from 'react';
import { Award, RotateCcw, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { LevelId } from '../types';

interface LevelSummaryProps {
  level: LevelId;
  totalQuestions: number;
  correctCount: number;
  bestStreak: number;
  hasMistakes: boolean;
  mistakesCount: number;
  onRetryLevel: () => void;
  onNextLevel?: () => void;
  onReviewMistakes: () => void;
}

export function LevelSummary({
  level,
  totalQuestions,
  correctCount,
  bestStreak,
  hasMistakes,
  mistakesCount,
  onRetryLevel,
  onNextLevel,
  onReviewMistakes,
}: LevelSummaryProps) {
  const accuracy = Math.round((correctCount / totalQuestions) * 100);

  const getLevelName = (lvl: LevelId) => {
    switch (lvl) {
      case 0:
        return 'Level 0 — GDP of Hong Kong';
      case 1:
        return 'Level 1 — GDP or GNI?';
      case 2:
        return 'Level 2 — From GDP to GNI';
      case 3:
        return 'Level 3 — Exam Challenge';
      case 'review':
        return 'Mistakes Review Round';
      default:
        return 'Practice Complete';
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl border border-pastel-200 shadow-xs p-6 sm:p-8 text-center">
      {/* Icon */}
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-pastel-50 text-pastel-600 flex items-center justify-center">
        {accuracy >= 80 ? (
          <Award className="w-6 h-6" />
        ) : (
          <CheckCircle2 className="w-6 h-6" />
        )}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-slate-900 mb-1">
        {getLevelName(level)} Finished
      </h2>
      <p className="text-xs text-slate-500 mb-6">
        Here is your performance summary for this round:
      </p>

      {/* Metrics Strip */}
      <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6 text-left">
        <div>
          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Score</span>
          <span className="text-lg font-bold text-slate-900 tabular-nums">
            {correctCount} / {totalQuestions}
          </span>
        </div>
        <div>
          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Accuracy</span>
          <span className="text-lg font-bold text-pastel-600 tabular-nums">
            {accuracy}%
          </span>
        </div>
        <div>
          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Best Streak</span>
          <span className="text-lg font-bold text-slate-900 tabular-nums">
            {bestStreak}
          </span>
        </div>
      </div>

      {/* Feedback text */}
      <p className="text-sm text-slate-600 mb-6">
        {accuracy === 100
          ? 'Flawless! You have mastered all concepts in this section.'
          : accuracy >= 70
          ? 'Strong work! Solid grasp of HKDSE national income principles.'
          : 'Good attempt. Reviewing the misconception notes will help lock down these core marks.'}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
        {hasMistakes && (
          <button
            onClick={onReviewMistakes}
            className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-50 hover:bg-amber-100 text-amber-900 font-medium text-xs sm:text-sm rounded-xl border border-amber-200 transition-colors cursor-pointer"
          >
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>Practise Mistakes ({mistakesCount})</span>
          </button>
        )}

        <button
          onClick={onRetryLevel}
          className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Practise Again</span>
        </button>

        {onNextLevel && level !== 3 && level !== 'review' && (
          <button
            onClick={onNextLevel}
            className="min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-5 bg-pastel-500 hover:bg-pastel-600 active:bg-pastel-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            <span>Proceed to Next Level</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
