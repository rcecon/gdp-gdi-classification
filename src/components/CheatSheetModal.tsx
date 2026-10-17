import { X, BookOpen, CheckCircle, AlertCircle, ArrowRightLeft } from 'lucide-react';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheatSheetModal({ isOpen, onClose }: CheatSheetModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="p-2 bg-pastel-50 text-pastel-700 rounded-lg shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-title" className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                HKDSE Chapter 19 Rules
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                National Income (I): GDP, GNI & Resident Principles
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close revision guide"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-slate-400 hover:text-slate-700 active:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-6 text-sm text-slate-700">
          {/* Rule 1: GDP Definition */}
          <section className="space-y-2">
            <h3 className="font-semibold text-pastel-900 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-pastel-600 shrink-0" />
              1. GDP: Gross Domestic Product
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed pl-6">
              Total value of production of all <strong>resident producing units (RPUs)</strong> of an economy in a specified period.
            </p>
            <div className="pl-6 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                <span className="font-semibold text-slate-800 block mb-0.5">① Current</span>
                Produced during the specified period (not past inventory).
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                <span className="font-semibold text-slate-800 block mb-0.5">② Production</span>
                Creates goods/services (not transfer payments or capital gain).
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/60">
                <span className="font-semibold text-slate-800 block mb-0.5">③ By Local RPU</span>
                Produced inside Hong Kong by resident producing units.
              </div>
            </div>
          </section>

          {/* Rule 2: GNI & NIFA Formula */}
          <section className="space-y-2">
            <h3 className="font-semibold text-pastel-900 flex items-center gap-2">
              <ArrowRightLeft className="w-4 h-4 text-pastel-600 shrink-0" />
              2. GNI & Conversion Formula
            </h3>
            <div className="pl-6 space-y-2 text-xs">
              <div className="p-3 bg-pastel-50/80 border border-pastel-200 rounded-xl font-mono text-pastel-950 font-medium">
                GNI = GDP + Factor Income from Abroad − Factor Income to Abroad
              </div>
              <p className="text-slate-600">
                <strong>Net income from abroad (NIFA)</strong> = Factor income from abroad − Factor income to abroad.
                <br />
                When NIFA &gt; 0, GNI &gt; GDP. When NIFA &lt; 0, GNI &lt; GDP.
              </p>
            </div>
          </section>

          {/* Rule 3: Resident vs Non-Resident */}
          <section className="space-y-2">
            <h3 className="font-semibold text-pastel-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-pastel-600 shrink-0" />
              3. The 12-Month Resident Test (Nationality Trap)
            </h3>
            <div className="pl-6 text-xs text-slate-600 space-y-1.5">
              <p>
                An individual is a <strong>resident</strong> if he/she has remained in the economy for <strong>at least 12 months</strong>, or intends to do so, <span className="underline decoration-pastel-400 font-medium">regardless of nationality</span>.
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li>Foreign domestic worker working in HK for 2 years → <strong>HK resident</strong> (income in both GDP and GNI).</li>
                <li>Foreign consultant/chef working in HK for 2–6 months → <strong>Non-resident</strong> (in GDP, deducted as factor income to abroad to get GNI).</li>
              </ul>
            </div>
          </section>

          {/* Rule 4: Common Exclusions */}
          <section className="space-y-2">
            <h3 className="font-semibold text-pastel-900 flex items-center gap-2">
              <X className="w-4 h-4 text-rose-500 shrink-0" />
              4. Items Excluded from GDP and/or GNI
            </h3>
            <div className="pl-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-rose-50/40 rounded-lg border border-rose-100">
                <span className="font-semibold text-rose-900 block mb-0.5">Transfer Payments</span>
                CSSA, Old Age Allowance, scholarships, donations (no production).
              </div>
              <div className="p-2.5 bg-rose-50/40 rounded-lg border border-rose-100">
                <span className="font-semibold text-rose-900 block mb-0.5">Capital Gains</span>
                Increase in asset prices (reselling properties/shares).
              </div>
              <div className="p-2.5 bg-rose-50/40 rounded-lg border border-rose-100">
                <span className="font-semibold text-rose-900 block mb-0.5">Second-Hand Goods</span>
                Resale value is excluded, but <em>agent commission</em> IS included.
              </div>
              <div className="p-2.5 bg-rose-50/40 rounded-lg border border-rose-100">
                <span className="font-semibold text-rose-900 block mb-0.5">Financial Assets</span>
                Purchase of shares/bonds is excluded, but <em>brokerage fees</em> ARE included.
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-pastel-950 bg-pastel-100 hover:bg-pastel-200 rounded-lg transition-colors cursor-pointer"
          >
            Got it, back to practice
          </button>
        </div>
      </div>
    </div>
  );
}
