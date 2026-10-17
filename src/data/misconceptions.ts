import { Misconception, MisconceptionKey } from '../types';

export const MISCONCEPTIONS: Record<MisconceptionKey, Misconception> = {
  PLACE_VS_RESIDENCE: {
    title: 'Place of Production vs. Residence of Earner',
    description:
      'GDP cares about WHERE production takes place (within HK by an RPU), whereas GNI cares about WHO earns the factor income (HK resident vs non-resident).',
    coreRule:
      'Local production by non-residents is in HK GDP (not GNI). Overseas factor income earned by HK residents is in HK GNI (not GDP).',
  },
  GDP_VS_GNI: {
    title: 'Confusing GDP with GNI',
    description:
      'GDP measures the total value of current production by all resident producing units within an economy. GNI measures total factor income earned by residents anywhere.',
    coreRule:
      'GNI = GDP + Factor income earned by residents abroad − Factor income earned by non-residents locally.',
  },
  NATIONALITY_TRAP: {
    title: 'Nationality Trap vs. Resident Status',
    description:
      'In HKDSE Economics, nationality does NOT determine residency. An individual is a resident if they have stayed in HK for at least 12 months or intend to do so.',
    coreRule:
      'Foreign passport holders living/working in HK for ≥12 months are HK residents. Working in HK for <12 months means they are non-residents.',
  },
  FACTOR_VS_TRANSFER: {
    title: 'Factor Income vs. Transfer Payments & Capital Assets',
    description:
      'Only factor income (wages, rent, interest, profit/dividends) earned by providing factors of production is counted. Transfer payments, scholarships, and capital gains are excluded.',
    coreRule:
      'Transfer payments (CSSA, Old Age Allowance) and capital gains (asset price appreciation) involve no production of goods/services.',
  },
  WRONG_ADJUSTMENT: {
    title: 'Wrong Adjustment for GDP to GNI',
    description:
      'To convert GDP to GNI, add factor income earned by HK residents from abroad, and deduct factor income earned by non-residents in HK.',
    coreRule:
      'Add: HK residents abroad. Deduct: Non-residents in HK. No adjustment: HK residents working in HK (already in both).',
  },
  SECOND_HAND_COMMISSION: {
    title: 'Second-hand Goods vs. Commission / Service Fees',
    description:
      'Second-hand goods represent existing assets produced in past periods (excluded). However, the agent commission or middleman fee is a current service produced now (included).',
    coreRule:
      'Resale price is excluded from GDP. Agent/broker commission is included in GDP.',
  },
  INTERMEDIATE_DOUBLE_COUNTING: {
    title: 'Intermediate Goods vs. Final Goods',
    description:
      'Intermediate goods are completely used up in producing final goods. Their value is already embodied in the final price and is not counted separately.',
    coreRule:
      'Only final goods and services (or sum of value-added) are counted to avoid double counting.',
  },
  PAST_INVENTORY: {
    title: 'Past Inventory vs. Current Production',
    description:
      'Goods produced in prior years and sold in the current year were already included in past GDP. They are not current production.',
    coreRule:
      'Only goods and services produced in the specified current period are included in current GDP.',
  },
};
