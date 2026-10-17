import React from 'react';
import { Check, X, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';
import { Question, LevelId } from '../types';
import { MISCONCEPTIONS } from '../data/misconceptions';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOptionId: string | null;
  isSubmitted: boolean;
  isCorrect: boolean | null;
  onSelectOption: (id: string) => void;
  onSubmitAnswer: () => void;
  onNextQuestion: () => void;
  levelLabel: string;
}

export function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  selectedOptionId,
  isSubmitted,
  isCorrect,
  onSelectOption,
  onSubmitAnswer,
  onNextQuestion,
  levelLabel,
}: QuestionCardProps) {
  const misconception = question.misconceptionKey
    ? MISCONCEPTIONS[question.misconceptionKey]
    : null;

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-pastel-200 shadow-xs p-4 sm:p-6 md:p-8 transition-all">
      {/* Top Meta: Level label and Progress indicator */}
      <div className="flex items-center justify-between gap-3 mb-3 text-xs">
        <span className="font-semibold text-pastel-800 tracking-wide uppercase text-[11px] truncate">
          {levelLabel}
        </span>
        <span className="font-mono text-slate-500 tabular-nums shrink-0">
          {currentIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-pastel-500 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Prompt */}
      <div className="mb-5 sm:mb-6">
        <h2 className="text-[16px] sm:text-[17px] font-semibold text-slate-900 leading-snug whitespace-pre-line mb-3">
          {question.prompt}
        </h2>
        {question.itemText && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-[15px] sm:text-[16px] text-slate-800 leading-relaxed">
            {question.itemText}
          </div>
        )}
      </div>

      {/* Answer Options */}
      <div className="space-y-2.5 mb-5 sm:mb-6" role="radiogroup" aria-label="Answer options">
        {question.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          const isThisCorrect = opt.id === question.correctOptionId;

          // Compute style based on whether submitted
          let optionStyle =
            'border-slate-200 hover:border-pastel-300 hover:bg-pastel-50/40 text-slate-800';
          let indicatorIcon = null;

          if (!isSubmitted) {
            if (isSelected) {
              optionStyle =
                'border-pastel-400 bg-pastel-50/90 text-pastel-950 font-medium ring-1 ring-pastel-300';
            }
          } else {
            // Already submitted: Show results
            if (isThisCorrect) {
              optionStyle =
                'border-pastel-500 bg-pastel-50 text-pastel-950 font-medium ring-1 ring-pastel-400';
              indicatorIcon = <Check className="w-4 h-4 text-pastel-600 shrink-0" />;
            } else if (isSelected && !isThisCorrect) {
              optionStyle =
                'border-rose-300 bg-rose-50/70 text-rose-950 font-medium ring-1 ring-rose-200';
              indicatorIcon = <X className="w-4 h-4 text-rose-600 shrink-0" />;
            } else {
              optionStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={opt.id}
              role="radio"
              aria-checked={isSelected}
              disabled={isSubmitted}
              onClick={() => onSelectOption(opt.id)}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between gap-3 text-[15px] sm:text-[16px] cursor-pointer disabled:cursor-default ${optionStyle}`}
            >
              <span className="leading-snug">{opt.text}</span>
              {indicatorIcon ? (
                indicatorIcon
              ) : (
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'border-pastel-500 bg-pastel-500'
                      : 'border-slate-300'
                  }`}
                >
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Action Button: Check Answer or Next Question */}
      {!isSubmitted ? (
        <div className="pt-2">
          <button
            onClick={onSubmitAnswer}
            disabled={!selectedOptionId}
            className="w-full py-3.5 px-4 bg-pastel-500 hover:bg-pastel-600 active:bg-pastel-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-semibold text-[15px] rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            Check answer
          </button>
        </div>
      ) : (
        <div className="space-y-4 pt-1">
          {/* Feedback Banner */}
          <div
            className={`p-4 rounded-xl border text-sm leading-relaxed ${
              isCorrect
                ? 'bg-pastel-50/90 border-pastel-200 text-pastel-950'
                : 'bg-amber-50/80 border-amber-200 text-amber-950'
            }`}
          >
            <div className="flex items-start gap-2.5">
              {isCorrect ? (
                <Check className="w-5 h-5 text-pastel-600 shrink-0 mt-0.5" />
              ) : (
                <X className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1.5">
                <p className="font-semibold text-xs tracking-wide uppercase">
                  {isCorrect ? 'Correct' : 'Incorrect'}
                </p>
                <p className="text-slate-700 text-xs sm:text-sm">
                  {question.explanation}
                </p>

                {/* Show targeted misconception note if incorrect */}
                {!isCorrect && misconception && (
                  <div className="mt-3 pt-2.5 border-t border-amber-200/60 text-xs text-amber-900 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Common Misconception: </span>
                      <span>{misconception.title}</span>
                      <p className="mt-1 text-slate-600 font-normal">
                        Key Rule: {misconception.coreRule}
                      </p>
                    </div>
                  </div>
                )}

                {/* Level 2 Hint if wrong and hint exists */}
                {!isCorrect && question.level === 2 && question.hint && (
                  <div className="mt-2 text-xs text-slate-600 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>DSE Hint: {question.hint}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Next Question Button */}
          <button
            onClick={onNextQuestion}
            autoFocus
            className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold text-[15px] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>{currentIndex + 1 < totalQuestions ? 'Next question' : 'View Level Summary'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Question Source Attribution (kept under the Check Answer button / action area) */}
      {question.sourceRef && (
        <div className="mt-4 pt-3 border-t border-slate-100 text-center text-xs text-slate-400">
          Source: {question.sourceRef}
        </div>
      )}
    </div>
  );
}
