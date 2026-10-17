/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { QuestionCard } from './components/QuestionCard';
import { LevelSummary } from './components/LevelSummary';
import { CheatSheetModal } from './components/CheatSheetModal';
import { QUESTIONS } from './data/questions';
import { LevelId, Question } from './types';
import { CheckCircle2, RotateCcw } from 'lucide-react';

export default function App() {
  const [currentLevel, setCurrentLevel] = useState<LevelId>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Gamified metrics
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  // Round metrics
  const [roundCorrectCount, setRoundCorrectCount] = useState(0);

  // Persistent session mistake tracker
  const [mistakeQuestionIds, setMistakeQuestionIds] = useState<string[]>([]);

  // Cheat sheet modal visibility
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  // Get current questions list based on active level
  const activeQuestions = useMemo<Question[]>(() => {
    if (currentLevel === 'review') {
      return QUESTIONS.filter((q) => mistakeQuestionIds.includes(q.id));
    }
    return QUESTIONS.filter((q) => q.level === currentLevel);
  }, [currentLevel, mistakeQuestionIds]);

  const currentQuestion = activeQuestions[currentIndex];

  const handleSelectLevel = (lvl: LevelId) => {
    setCurrentLevel(lvl);
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setIsCorrect(null);
    setIsCompleted(false);
    setRoundCorrectCount(0);
  };

  const handleSelectOption = (optId: string) => {
    if (isSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!currentQuestion || !selectedOptionId || isSubmitted) return;

    const correct = selectedOptionId === currentQuestion.correctOptionId;
    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > bestStreak) {
        setBestStreak(nextStreak);
      }
      setRoundCorrectCount((prev) => prev + 1);

      // If in review mode and answered correctly, remove from mistake list
      if (currentLevel === 'review') {
        setMistakeQuestionIds((prev) => prev.filter((id) => id !== currentQuestion.id));
      }
    } else {
      setStreak(0);
      setMistakeQuestionIds((prev) => {
        if (!prev.includes(currentQuestion.id)) {
          return [...prev, currentQuestion.id];
        }
        return prev;
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsSubmitted(false);
      setIsCorrect(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRetryCurrentLevel = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsSubmitted(false);
    setIsCorrect(null);
    setIsCompleted(false);
    setRoundCorrectCount(0);
  };

  const handleProceedNextLevel = () => {
    if (typeof currentLevel === 'number' && currentLevel < 3) {
      handleSelectLevel((currentLevel + 1) as LevelId);
    }
  };

  const getLevelLabel = (lvl: LevelId) => {
    switch (lvl) {
      case 0:
        return 'Level 0 · GDP of Hong Kong';
      case 1:
        return 'Level 1 · GDP or GNI Classification';
      case 2:
        return 'Level 2 · From GDP to GNI (Add / Deduct)';
      case 3:
        return 'Level 3 · DSE Exam Challenge';
      case 'review':
        return 'Mistakes Review Round';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-pastel-50/40 text-slate-900 font-sans">
      {/* Top Navigation */}
      <Header
        currentLevel={currentLevel}
        onSelectLevel={handleSelectLevel}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        streak={streak}
        mistakesCount={mistakeQuestionIds.length}
      />

      {/* Main Practice Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-8 md:py-10 flex flex-col justify-center">
        {/* Review Mode Empty State */}
        {currentLevel === 'review' && activeQuestions.length === 0 ? (
          <div className="w-full max-w-md mx-auto bg-white rounded-2xl border border-pastel-200 p-8 text-center shadow-xs">
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-pastel-50 text-pastel-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              No Mistakes to Review
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              You haven't made any mistakes in this session or you've cleared them all! Select any level above to continue practising.
            </p>
            <button
              onClick={() => handleSelectLevel(0)}
              className="w-full py-2.5 px-4 bg-pastel-500 hover:bg-pastel-600 active:bg-pastel-700 text-white font-medium text-xs rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              Start from Level 0
            </button>
          </div>
        ) : isCompleted ? (
          /* Level Finished Summary Screen */
          <LevelSummary
            level={currentLevel}
            totalQuestions={activeQuestions.length}
            correctCount={roundCorrectCount}
            bestStreak={bestStreak}
            hasMistakes={mistakeQuestionIds.length > 0}
            mistakesCount={mistakeQuestionIds.length}
            onRetryLevel={handleRetryCurrentLevel}
            onNextLevel={currentLevel !== 3 ? handleProceedNextLevel : undefined}
            onReviewMistakes={() => handleSelectLevel('review')}
          />
        ) : currentQuestion ? (
          /* Single Question Active View */
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={activeQuestions.length}
            selectedOptionId={selectedOptionId}
            isSubmitted={isSubmitted}
            isCorrect={isCorrect}
            onSelectOption={handleSelectOption}
            onSubmitAnswer={handleSubmitAnswer}
            onNextQuestion={handleNextQuestion}
            levelLabel={getLevelLabel(currentLevel)}
          />
        ) : (
          <div className="text-center py-12 text-slate-500 text-sm">
            No questions available for this level.
          </div>
        )}
      </main>

      {/* Subtle Footer */}
      <footer className="py-4 border-t border-pastel-200/70 bg-white/50 text-center text-[12px] text-slate-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>HKDSE Economics Practice · Chapter 19 National Income</span>
          <div className="flex items-center gap-4 text-slate-400">
            <span>GDP (Territory & RPU)</span>
            <span>·</span>
            <span>GNI (Resident Factor Income)</span>
          </div>
        </div>
      </footer>

      {/* Cheat Sheet & Key Rules Modal */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
}
