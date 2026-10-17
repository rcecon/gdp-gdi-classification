import { BookOpen, Flame } from 'lucide-react';
import { LevelId } from '../types';

interface HeaderProps {
  currentLevel: LevelId;
  onSelectLevel: (lvl: LevelId) => void;
  onOpenCheatSheet: () => void;
  streak: number;
  mistakesCount: number;
}

export function Header({
  currentLevel,
  onSelectLevel,
  onOpenCheatSheet,
  streak,
  mistakesCount,
}: HeaderProps) {
  const navItems: { id: LevelId; label: string; short: string }[] = [
    { id: 0, label: 'Level 0: GDP of HK', short: 'L0: GDP' },
    { id: 1, label: 'Level 1: GDP or GNI?', short: 'L1: GDP/GNI' },
    { id: 2, label: 'Level 2: From GDP to GNI', short: 'L2: Adjust' },
    { id: 3, label: 'Level 3: Exam Challenge', short: 'L3: Exam' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-pastel-200/70 shadow-xs">
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        {/* Row 1: Brand & Actions */}
        <div className="h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand */}
          <button
            onClick={() => onSelectLevel(0)}
            className="text-left group cursor-pointer focus:outline-hidden flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-pastel-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
              HK
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 group-hover:text-pastel-700 transition-colors whitespace-nowrap block leading-tight">
                HKDSE Economics
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:block leading-tight">
                GDP & GNI Classification Master
              </span>
            </div>
          </button>

          {/* Right Zone: Streak + Quick Rules button */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {streak > 0 && (
              <div
                aria-label={`Current streak: ${streak}`}
                className="flex items-center gap-1 px-2.5 py-1.5 bg-pastel-50 text-pastel-900 rounded-lg text-xs font-semibold tabular-nums border border-pastel-200"
              >
                <Flame className="w-3.5 h-3.5 fill-pastel-500 text-pastel-600" />
                <span>{streak}</span>
              </div>
            )}

            <button
              onClick={onOpenCheatSheet}
              className="min-h-[38px] flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-pastel-950 bg-pastel-100 hover:bg-pastel-200 active:bg-pastel-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-pastel-700" />
              <span>DSE Rules</span>
            </button>
          </div>
        </div>

        {/* Row 2: Level Navigation Tabs (scrollable on mobile) */}
        <div className="pb-2.5 -mt-0.5 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {navItems.map((item) => {
            const isActive = currentLevel === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectLevel(item.id)}
                className={`min-h-[36px] px-3 py-1 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer flex items-center ${
                  isActive
                    ? 'bg-pastel-500 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 bg-slate-50/60'
                }`}
              >
                <span className="sm:hidden">{item.short}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}

          {mistakesCount > 0 && (
            <button
              onClick={() => onSelectLevel('review')}
              className={`min-h-[36px] px-3 py-1 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer flex items-center gap-1.5 ${
                currentLevel === 'review'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200/80'
              }`}
            >
              <span>Mistakes ({mistakesCount})</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
