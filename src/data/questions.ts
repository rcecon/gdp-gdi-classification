import { Question } from '../types';

/**
 * Question bank exclusively based on past HKDSE examination items and options
 * (2012 PP, 2013, 2015, 2018, 2019, 2020, 2022, 2023, 2025, 2026 DSE).
 *
 * All options are set in 細楷 (lowercase) adhering strictly to HKDSE examination standards.
 */

export const QUESTIONS: Question[] = [
  // ==========================================
  // LEVEL 0: GDP of Hong Kong
  // Options: "include in GDP" | "do not include in GDP"
  // ==========================================
  {
    id: 'l0-01',
    level: 0,
    sourceRef: 'Adapted from 2018 DSE Q24 / 2023 DSE Q24',
    prompt: 'Should this item be included in the GDP of Hong Kong for the current year?',
    itemText:
      'The commission received by a real estate agent from handling the transaction of a second-hand residential flat in Hong Kong',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'include',
    explanation:
      'Included in GDP because the agent’s commission reflects the market value of agency services currently produced by a resident producing unit in Hong Kong.',
    hint: 'Distinguish between the existing property (asset transfer) and the agent’s agency service provided right now.',
    misconceptionKey: 'SECOND_HAND_COMMISSION',
  },
  {
    id: 'l0-02',
    level: 0,
    sourceRef: 'Adapted from 2015 DSE Q24 / 2023 DSE Q24',
    prompt: 'Should this item be included in the GDP of Hong Kong for 2024?',
    itemText:
      'The market value of a private residential flat built in 2022 but sold to a buyer in 2024',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'exclude',
    explanation:
      'Excluded from 2024 GDP because the flat was constructed in 2022 (past inventory). Only goods and services produced in the current specified period are counted.',
    hint: 'Check the year when the physical construction took place.',
    misconceptionKey: 'PAST_INVENTORY',
  },
  {
    id: 'l0-03',
    level: 0,
    sourceRef: 'Adapted from 2015 DSE Q24 / 2023 DSE Q24',
    prompt: 'Should this item be included in the GDP of Hong Kong?',
    itemText:
      'The monthly Old Age Living Allowance paid by the Hong Kong Government to elderly citizens',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'exclude',
    explanation:
      'Excluded because government social allowances are one-way transfer payments that do not involve any current production of goods or services.',
    hint: 'Does receiving a government welfare allowance involve providing goods or productive factors in return?',
    misconceptionKey: 'FACTOR_VS_TRANSFER',
  },
  {
    id: 'l0-04',
    level: 0,
    sourceRef: 'Adapted from 2015 DSE Q24',
    prompt: 'Should this item be included in the GDP of Hong Kong for the current year?',
    itemText:
      'The salary received by a salesperson working in a retail boutique selling second-hand designer handbags in Central, Hong Kong',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'include',
    explanation:
      'Included in Hong Kong’s GDP because the salary is payment for retailing services currently produced by a resident producing unit within Hong Kong.',
    hint: 'While the handbag itself is second-hand, does the salesperson provide current retailing service?',
    misconceptionKey: 'SECOND_HAND_COMMISSION',
  },
  {
    id: 'l0-05',
    level: 0,
    sourceRef: 'Adapted from 2018 DSE Q24',
    prompt: 'Should this item be included in the GDP of Hong Kong?',
    itemText:
      'The estimated rental value of an owner-occupied residential property in Hong Kong',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'include',
    explanation:
      'Included in GDP as imputed rent, which measures the market value of housing services currently produced by residential properties located in Hong Kong.',
    hint: 'Owner-occupied properties continuously generate housing services during the period.',
    misconceptionKey: 'GDP_VS_GNI',
  },
  {
    id: 'l0-06',
    level: 0,
    sourceRef: 'Adapted from 2023 DSE Q24',
    prompt: 'Should this item be included in the GDP of Hong Kong?',
    itemText:
      'The capital gain earned by an investor from reselling shares on the Hong Kong Stock Exchange',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'exclude',
    explanation:
      'Excluded from GDP because a capital gain is an increase in the market price of an existing financial asset and does not represent any current production.',
    hint: 'Does an increase in asset price generate new goods or services?',
    misconceptionKey: 'FACTOR_VS_TRANSFER',
  },
  {
    id: 'l0-07',
    level: 0,
    sourceRef: 'Adapted from 2023 DSE Q24',
    prompt: 'Should this item be included in the GDP of Hong Kong for the current year?',
    itemText:
      'The commission earned by a stockbroker from executing share transactions on behalf of clients in Hong Kong',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'include',
    explanation:
      'Included in GDP because brokerage commissions represent the value of financial intermediary services currently produced by a local resident producing unit.',
    hint: 'Brokerage fees compensate for the provision of current transaction facilitation services.',
    misconceptionKey: 'SECOND_HAND_COMMISSION',
  },
  {
    id: 'l0-08',
    level: 0,
    sourceRef: 'Adapted from 2013 DSE Q21 / 2015 DSE Q24',
    prompt: 'Should this item be included in the GDP of Hong Kong?',
    itemText:
      'The rental income earned from real estate holdings located in Vancouver, Canada, owned by a Hong Kong resident',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'exclude',
    explanation:
      'Excluded from Hong Kong’s GDP because the housing services are produced outside Hong Kong’s domestic economic territory (in Canada).',
    hint: 'GDP strictly measures production located within the domestic economy.',
    misconceptionKey: 'PLACE_VS_RESIDENCE',
  },
  {
    id: 'l0-09',
    level: 0,
    sourceRef: 'Adapted from 2018 DSE Q24 / 2026 DSE Q24',
    prompt: 'Should this item be included in the GDP of Hong Kong?',
    itemText:
      'A scholarship of HK$50,000 received by a university undergraduate from a local charitable educational trust',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'exclude',
    explanation:
      'Excluded from GDP because a scholarship is a transfer payment with no goods or services produced in exchange.',
    hint: 'Scholarships are transfers of purchasing power without economic production.',
    misconceptionKey: 'FACTOR_VS_TRANSFER',
  },
  {
    id: 'l0-10',
    level: 0,
    sourceRef: 'Adapted from 2020 DSE Q25',
    prompt: 'Should this item be included in the GDP of Hong Kong for the current year?',
    itemText:
      'The match fee and ticket revenue generated from an exhibition football match played at Hong Kong Stadium by a visiting overseas club',
    options: [
      { id: 'include', text: 'include in GDP' },
      { id: 'exclude', text: 'do not include in GDP' },
    ],
    correctOptionId: 'include',
    explanation:
      'Included in Hong Kong’s GDP because the entertainment and sporting services were physically produced within the domestic territory of Hong Kong.',
    hint: 'Did the performance service take place within Hong Kong?',
    misconceptionKey: 'PLACE_VS_RESIDENCE',
  },

  // ==========================================
  // LEVEL 1: GDP or GNI?
  // Options:
  // "included in both GDP and GNI"
  // "included in GDP only"
  // "included in GNI only"
  // "included in neither GDP nor GNI"
  // ==========================================
  {
    id: 'l1-01',
    level: 1,
    sourceRef: 'Adapted from 2019 DSE Q25',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'The salary earned by a Hong Kong resident from working as a secretary at the Hong Kong branch office of an Australian bank',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'both',
    explanation:
      'Included in both: In GDP because services are produced inside Hong Kong by a local branch RPU; in GNI because the factor income is earned by a Hong Kong resident.',
    hint: 'Production is inside Hong Kong AND the earner is a Hong Kong resident.',
    misconceptionKey: 'GDP_VS_GNI',
  },
  {
    id: 'l1-02',
    level: 1,
    sourceRef: 'Adapted from 2013 DSE Q21 / 2025 DSE Q24',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'Dividends received by a US resident from holding shares of a Hong Kong public utility company',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'gdp_only',
    explanation:
      'Included in GDP only: Generated by production activities in HK, but excluded from HK GNI because the dividend is received by a non-resident (factor income paid abroad).',
    hint: 'The company produces in HK, but the shareholder resides in the US.',
    misconceptionKey: 'PLACE_VS_RESIDENCE',
  },
  {
    id: 'l1-03',
    level: 1,
    sourceRef: 'Adapted from 2013 DSE Q21',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'Salary received by an Indian engineering consultant who worked for the Hong Kong Airport Authority on a 3-month contract',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'gdp_only',
    explanation:
      'Included in GDP only: Produced in HK (in GDP); since the consultant stayed less than 12 months, he is a non-resident, so his income is excluded from HK GNI.',
    hint: 'Staying only 3 months means the consultant is a non-resident of Hong Kong.',
    misconceptionKey: 'NATIONALITY_TRAP',
  },
  {
    id: 'l1-04',
    level: 1,
    sourceRef: 'Adapted from 2013 DSE Q21 / 2019 DSE Q25',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'Rental income received by a Hong Kong resident from leasing out a residential property in Tokyo, Japan',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'gni_only',
    explanation:
      'Included in GNI only: Housing services are produced in Japan (excluded from HK GDP); included in HK GNI as factor income earned by a HK resident from abroad.',
    hint: 'Property is located outside HK, but the recipient is a HK resident.',
    misconceptionKey: 'PLACE_VS_RESIDENCE',
  },
  {
    id: 'l1-05',
    level: 1,
    sourceRef: 'Adapted from 2013 DSE Q21 & DSE Question Bank',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'The income received by a Japanese teacher who worked in a language school in Hong Kong for one year (12 months)',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'both',
    explanation:
      'Included in both: Teaching occurs in HK (GDP); because the teacher remained in HK for at least 12 months, he is classified as a Hong Kong resident (GNI).',
    hint: 'Note the duration: staying for at least 12 months confers HK residency regardless of nationality.',
    misconceptionKey: 'NATIONALITY_TRAP',
  },
  {
    id: 'l1-06',
    level: 1,
    sourceRef: 'Adapted from 2022 DSE Q27 & 2026 DSE Q24',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'The salary received by a Filipino domestic worker who has lived and worked for a Hong Kong family for two years',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'both',
    explanation:
      'Included in both GDP and GNI: Services are produced in HK; having resided in HK for 2 years (≥12 months), she is legally a HK resident for national income accounting.',
    hint: 'Two years satisfies the 12-month residency rule.',
    misconceptionKey: 'NATIONALITY_TRAP',
  },
  {
    id: 'l1-07',
    level: 1,
    sourceRef: 'Adapted from 2026 DSE Q24',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'Profit earned by a Hong Kong manufacturing corporation from its direct investment in factories located in India',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'gni_only',
    explanation:
      'Included in GNI only: Production takes place in India (outside HK GDP); included in HK GNI as factor income from abroad earned by a HK resident firm.',
    hint: 'Production takes place abroad, but the owner is a HK resident enterprise.',
    misconceptionKey: 'PLACE_VS_RESIDENCE',
  },
  {
    id: 'l1-08',
    level: 1,
    sourceRef: 'Adapted from 2019 DSE Q25 / 2020 DSE Q25',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'Money received by a Hong Kong resident from selling an investment property in Sydney, Australia to a foreign buyer',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'neither',
    explanation:
      'Included in neither GDP nor GNI: The sale of an existing capital asset is an asset transfer, not factor income generated from current production.',
    hint: 'Is selling an existing property a factor income or an asset transaction?',
    misconceptionKey: 'FACTOR_VS_TRANSFER',
  },
  {
    id: 'l1-09',
    level: 1,
    sourceRef: 'Adapted from 2026 DSE Q24',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'Commercial property rental income earned by a UK investment corporation from shopping malls situated in Hong Kong',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'gdp_only',
    explanation:
      'Included in GDP only: Generated by commercial properties located in HK; excluded from HK GNI because the income belongs to a UK non-resident entity.',
    hint: 'The properties are in HK, but the recipient is a UK non-resident.',
    misconceptionKey: 'PLACE_VS_RESIDENCE',
  },
  {
    id: 'l1-10',
    level: 1,
    sourceRef: 'Adapted from 2026 DSE Q24 / 2018 DSE Q24',
    prompt: 'Categorise this item into the GDP and/or GNI of Hong Kong:',
    itemText:
      'A postgraduate scholarship received by a Hong Kong resident student from a university in the United States',
    options: [
      { id: 'both', text: 'included in both GDP and GNI' },
      { id: 'gdp_only', text: 'included in GDP only' },
      { id: 'gni_only', text: 'included in GNI only' },
      { id: 'neither', text: 'included in neither GDP nor GNI' },
    ],
    correctOptionId: 'neither',
    explanation:
      'Included in neither GDP nor GNI: A scholarship is a transfer payment, not factor income earned by supplying factor inputs in production.',
    hint: 'Scholarships involve no factor supply or production of goods and services.',
    misconceptionKey: 'FACTOR_VS_TRANSFER',
  },

  // ==========================================
  // LEVEL 2: From GDP to GNI
  // Formula: GNI = GDP + Factor Income from Abroad − Factor Income to Abroad
  // Options: "add" | "deduct" | "no adjustment"
  // ==========================================
  {
    id: 'l2-01',
    level: 2,
    sourceRef: 'Adapted from 2019 DSE Q25',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The rental income received by a Hong Kong resident from leasing his house in Japan to a Japanese tenant',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'add',
    explanation:
      'Add: This is factor income earned by a Hong Kong resident from abroad. Not included in Hong Kong’s GDP, it must be added to calculate GNI.',
    hint: 'Factor income earned by a local resident from abroad is added to GDP.',
    misconceptionKey: 'WRONG_ADJUSTMENT',
  },
  {
    id: 'l2-02',
    level: 2,
    sourceRef: 'Adapted from 2019 DSE Q25',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The income earned by a Japanese chef who worked in a Hong Kong restaurant for two months',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'deduct',
    explanation:
      'Deduct: The chef stayed for only 2 months (<12 months) and is a non-resident. His income is part of HK GDP, so it must be deducted as factor income to abroad to obtain GNI.',
    hint: 'Working for only 2 months makes him a non-resident earner inside HK.',
    misconceptionKey: 'WRONG_ADJUSTMENT',
  },
  {
    id: 'l2-03',
    level: 2,
    sourceRef: 'Adapted from 2019 DSE Q25',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The salary earned by a Hong Kong resident from working as a secretary at the Hong Kong branch office of an Australian company',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'none',
    explanation:
      'No adjustment: The services are produced in HK (in GDP) and earned by a HK resident (in GNI). It is already in both measures, requiring no adjustment.',
    hint: 'If an item is already inside both GDP and GNI, no cross-border adjustment is needed.',
    misconceptionKey: 'GDP_VS_GNI',
  },
  {
    id: 'l2-04',
    level: 2,
    sourceRef: 'Adapted from 2019 DSE Q25 / 2020 DSE Q25',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The proceeds received from selling an apartment in Australia by a Hong Kong resident',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'none',
    explanation:
      'No adjustment: Selling an existing property is an asset transaction and is not factor income. It enters neither GDP nor GNI and requires no adjustment.',
    hint: 'Asset sales are not factor incomes, so they are not used in converting GDP to GNI.',
    misconceptionKey: 'FACTOR_VS_TRANSFER',
  },
  {
    id: 'l2-05',
    level: 2,
    sourceRef: 'Adapted from 2022 DSE Q27',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The dividend earned by a Filipino investor from his holding of shares of a Hong Kong telecommunications company',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'deduct',
    explanation:
      'Deduct: The profit is produced in HK (counted in GDP), but earned by a non-resident. It represents factor income paid abroad, so it must be deducted.',
    hint: 'Dividends generated in HK paid to non-residents are factor income to abroad.',
    misconceptionKey: 'WRONG_ADJUSTMENT',
  },
  {
    id: 'l2-06',
    level: 2,
    sourceRef: 'Adapted from 2026 DSE Q24',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The profit earned by a Hong Kong manufacturing firm from its direct investment in factories in India',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'add',
    explanation:
      'Add: This profit is factor income earned by a Hong Kong resident unit from abroad. Since it is excluded from HK GDP, it is added to GDP to obtain GNI.',
    hint: 'Factor income earned by a HK resident firm abroad is added to GDP.',
    misconceptionKey: 'WRONG_ADJUSTMENT',
  },
  {
    id: 'l2-07',
    level: 2,
    sourceRef: 'Adapted from 2020 DSE Q25',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The match fee paid by a Hong Kong sports promoter to a Japanese football club for an exhibition match in Hong Kong',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'deduct',
    explanation:
      'Deduct: The sporting service was produced in HK (in GDP), but the income belongs to a foreign non-resident team (factor income to abroad), so it must be deducted.',
    hint: 'The service is in HK GDP, but the earner is a non-resident organisation.',
    misconceptionKey: 'PLACE_VS_RESIDENCE',
  },
  {
    id: 'l2-08',
    level: 2,
    sourceRef: 'Adapted from 2022 DSE Q27 & 2026 DSE Q24',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The salary received by a Filipino domestic helper who has worked for a Hong Kong family for 18 months',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'none',
    explanation:
      'No adjustment: Since the domestic helper has remained in Hong Kong for more than 12 months, she is a Hong Kong resident. Her salary is in both GDP and GNI.',
    hint: '18 months (≥12 months) makes the worker a Hong Kong resident.',
    misconceptionKey: 'NATIONALITY_TRAP',
  },
  {
    id: 'l2-09',
    level: 2,
    sourceRef: 'Adapted from 2026 DSE Q24',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The rental income earned by a UK investment corporation from commercial properties in Hong Kong',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'deduct',
    explanation:
      'Deduct: The rental income is produced in HK (in GDP), but received by a non-resident UK entity. It is deducted as factor income to abroad.',
    hint: 'Property is in HK, but landlord is a non-resident foreign entity.',
    misconceptionKey: 'WRONG_ADJUSTMENT',
  },
  {
    id: 'l2-10',
    level: 2,
    sourceRef: 'Adapted from 2013 DSE Q21',
    prompt:
      'When converting the GDP of Hong Kong to the GNI of Hong Kong, how should this item be treated?',
    itemText:
      'The salary received by an Indian IT consultant who worked for the Hong Kong Airport Authority for 3 months',
    options: [
      { id: 'add', text: 'add' },
      { id: 'deduct', text: 'deduct' },
      { id: 'none', text: 'no adjustment' },
    ],
    correctOptionId: 'deduct',
    explanation:
      'Deduct: The consultant remained in HK for less than 12 months (non-resident). The services produced in HK are in GDP, so the income must be deducted to find GNI.',
    hint: 'Worked for only 3 months -> non-resident factor income to abroad.',
    misconceptionKey: 'NATIONALITY_TRAP',
  },

  // ==========================================
  // LEVEL 3: Exam Challenge
  // All options formatted in 細楷 (lowercase)
  // ==========================================
  {
    id: 'l3-01',
    level: 3,
    sourceRef: 'Recombined from 2015 DSE Q24, 2018 DSE Q24 & 2023 DSE Q24',
    prompt:
      'Which of the following would be included in the calculation of Hong Kong’s gross domestic product (GDP)?',
    itemText: 'Select the correct option from the examination choices below:',
    options: [
      {
        id: 'A',
        text: 'A. the allowance under the Comprehensive Social Security Assistance Scheme received by a needy family',
      },
      {
        id: 'B',
        text: 'B. the market value of a private residential flat built in 2022 but sold in 2024',
      },
      {
        id: 'C',
        text: 'C. the commission received by a real estate agent from handling the sale of a second-hand property',
      },
      {
        id: 'D',
        text: 'D. the rental income from a residential property in Canada owned by a Hong Kong resident',
      },
    ],
    correctOptionId: 'C',
    explanation:
      'Correct answer is C: The real estate agent’s commission reflects current agency service produced by an RPU in HK. A is a transfer payment; B is past inventory; D is production in Canada.',
    misconceptionKey: 'SECOND_HAND_COMMISSION',
  },
  {
    id: 'l3-02',
    level: 3,
    sourceRef: 'Recombined from 2018 DSE Q24, 2020 DSE Q25 & 2023 DSE Q24',
    prompt:
      'Which of the following are included in the calculation of Hong Kong’s gross domestic product (GDP)?\n(1) the commission earned by a stockbroker from transactions of shares for clients\n(2) the fee paid by a Hong Kong sports club to an overseas football team for playing an exhibition match in Hong Kong\n(3) the capital gain earned by a household from reselling a residential property',
    itemText: 'Choose the correct combination:',
    options: [
      { id: 'A', text: 'A. (1) and (2) only' },
      { id: 'B', text: 'B. (1) and (3) only' },
      { id: 'C', text: 'C. (2) and (3) only' },
      { id: 'D', text: 'D. (1), (2) and (3)' },
    ],
    correctOptionId: 'A',
    explanation:
      'Correct answer is A: (1) Broker commission is current service production in HK. (2) Exhibition match service was produced in HK. (3) Capital gain is an asset price change involving no production.',
    misconceptionKey: 'FACTOR_VS_TRANSFER',
  },
  {
    id: 'l3-03',
    level: 3,
    sourceRef: 'Recombined from 2019 DSE Q25, 2022 DSE Q27 & 2026 DSE Q24',
    prompt:
      'To calculate the gross national income (GNI) of Hong Kong, which of the following should be added to the GDP of Hong Kong?',
    itemText: 'Select the item that must be added to GDP to obtain GNI:',
    options: [
      {
        id: 'A',
        text: 'A. the dividend earned by a Filipino investor from his holding of shares of a Hong Kong company',
      },
      {
        id: 'B',
        text: 'B. the salary received by an Indian IT consultant who worked for the Hong Kong Airport Authority for three months',
      },
      {
        id: 'C',
        text: 'C. the rental income received by a Hong Kong resident from leasing his house in Japan to a Japanese tenant',
      },
      {
        id: 'D',
        text: 'D. the money received from selling an apartment in Australia by a Hong Kong resident',
      },
    ],
    correctOptionId: 'C',
    explanation:
      'Correct answer is C: Rental income earned by a HK resident from abroad is factor income from abroad and must be added to GDP. A & B are deducted (factor income to abroad); D is an asset sale.',
    misconceptionKey: 'WRONG_ADJUSTMENT',
  },
  {
    id: 'l3-04',
    level: 3,
    sourceRef: 'Recombined from 2020 DSE Q25, 2022 DSE Q27 & 2026 DSE Q24',
    prompt:
      'Which of the following should be deducted from the gross domestic product of Hong Kong to calculate the gross national income of Hong Kong?',
    itemText: 'Identify the item deducted as factor income to abroad:',
    options: [
      {
        id: 'A',
        text: 'A. the profit earned by a Hong Kong manufacturing firm from its direct investment in factories in India',
      },
      {
        id: 'B',
        text: 'B. the rental income earned by a UK investment corporation from its commercial property investment in Hong Kong',
      },
      {
        id: 'C',
        text: 'C. the salary received by an Indonesian domestic worker who worked for a Hong Kong family for two years',
      },
      {
        id: 'D',
        text: 'D. the dividend paid by a listed corporation in Tokyo to a Hong Kong resident investor',
      },
    ],
    correctOptionId: 'B',
    explanation:
      'Correct answer is B: The commercial rental is produced in HK (in GDP), but received by a UK non-resident entity, so it is deducted. A & D are added; C is a HK resident (no adjustment).',
    misconceptionKey: 'WRONG_ADJUSTMENT',
  },
  {
    id: 'l3-05',
    level: 3,
    sourceRef: 'Recombined from 2013 DSE Q21, 2022 DSE Q27 & 2025 DSE Q24',
    prompt:
      'Which of the following is NOT included in the gross national income (GNI) of Hong Kong?',
    itemText: 'Identify which item is excluded from Hong Kong’s GNI:',
    options: [
      {
        id: 'A',
        text: 'A. the dividends received by a US resident from shares of a Hong Kong public utility company',
      },
      {
        id: 'B',
        text: 'B. the salary received by a British consultant who has worked for a local firm in Hong Kong for 18 months',
      },
      {
        id: 'C',
        text: 'C. the interest received by a Hong Kong resident holding silver bonds issued by the Hong Kong Government',
      },
      {
        id: 'D',
        text: 'D. the rental income received by a Hong Kong resident from leasing out an apartment in Tokyo',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Correct answer is A: The US shareholder is a non-resident; dividends paid to non-residents are counted in HK GDP but NOT in HK GNI. In B, 18 months makes him a HK resident. C & D are HK resident factor incomes.',
    misconceptionKey: 'GDP_VS_GNI',
  },
  {
    id: 'l3-06',
    level: 3,
    sourceRef: 'Recombined from 2013 DSE Q21, 2018 DSE Q24 & 2022 DSE Q27',
    prompt:
      'Which of the following items is NOT included in the calculation of Hong Kong’s net factor income from abroad (net external primary income flows)?',
    itemText: 'Select the item that does NOT belong to cross-border factor flows:',
    options: [
      {
        id: 'A',
        text: 'A. the income received by a Japanese teacher who worked in a language school in Hong Kong for one year (12 months)',
      },
      {
        id: 'B',
        text: 'B. rental income earned from real estate holdings in Canada owned by a Hong Kong resident',
      },
      {
        id: 'C',
        text: 'C. salary received by an Indian consultant who worked for the Hong Kong Airport Authority for three months',
      },
      {
        id: 'D',
        text: 'D. dividends earned from shares in a Hong Kong company held by a US resident',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Correct answer is A: Residing and working in HK for 12 months makes the teacher a HK resident. His earnings are local resident income earned in HK, NOT a cross-border flow (not in NIFA).',
    misconceptionKey: 'NATIONALITY_TRAP',
  },
  {
    id: 'l3-07',
    level: 3,
    sourceRef: 'Adapted from HKDSE Past Paper items',
    prompt:
      'Which of the following would be added to the GDP of Hong Kong to calculate its GNI?',
    itemText: 'Select the correct option from the choices below:',
    options: [
      {
        id: 'A',
        text: 'A. the profits earned by a retail shop in Shenzhen operated by a Hong Kong resident.',
      },
      {
        id: 'B',
        text: 'B. the salary received by a British pilot who has been working for Cathay Pacific in Hong Kong for five years.',
      },
      {
        id: 'C',
        text: 'C. the money received by a Hong Kong resident from selling his apartment in London.',
      },
      {
        id: 'D',
        text: 'D. a scholarship received by a Hong Kong student from a university in the United States.',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Correct answer is A: The retail shop’s profits earned in Shenzhen represent factor income earned by a Hong Kong resident from abroad, which must be added to GDP to calculate GNI. B is already in both GDP and GNI (the pilot has worked in HK for >12 months); C is a capital asset transfer; D is a transfer payment.',
    misconceptionKey: 'WRONG_ADJUSTMENT',
  },
  {
    id: 'l3-08',
    level: 3,
    sourceRef: 'Recombined from 2013 DSE Q21, 2019 DSE Q25 & 2022 DSE Q27',
    prompt:
      'Which of the following would be included in the gross national income (GNI) of Hong Kong but EXCLUDED from its gross domestic product (GDP)?',
    itemText: 'Choose the correct item:',
    options: [
      {
        id: 'A',
        text: 'A. the salary received by a French chef who worked in a Hong Kong restaurant for two months',
      },
      {
        id: 'B',
        text: 'B. the rental income received by a Hong Kong resident from leasing out a flat in Tokyo',
      },
      {
        id: 'C',
        text: 'C. the salary earned by a local resident working in a trading company in Hong Kong',
      },
      {
        id: 'D',
        text: 'D. the Old Age Living Allowance paid by the Hong Kong Government to an elderly resident',
      },
    ],
    correctOptionId: 'B',
    explanation:
      'Correct answer is B: Rental from Tokyo is produced outside HK (excluded from HK GDP), but earned by a HK resident (included in HK GNI as factor income from abroad). A is in GDP only; C is in both; D is in neither.',
    misconceptionKey: 'PLACE_VS_RESIDENCE',
  },
  {
    id: 'l3-09',
    level: 3,
    sourceRef: 'Recombined from 2013 DSE Q21, 2022 DSE Q27 & 2026 DSE Q24',
    prompt:
      'Which of the following would be included in the gross domestic product (GDP) of Hong Kong but EXCLUDED from its gross national income (GNI)?',
    itemText: 'Choose the correct item:',
    options: [
      {
        id: 'A',
        text: 'A. the rental income earned by an Australian investor from leasing his commercial property located in Hong Kong',
      },
      {
        id: 'B',
        text: 'B. the profit earned by a Hong Kong manufacturing firm from factories in India',
      },
      {
        id: 'C',
        text: 'C. the salary received by a Filipino domestic helper who worked for a Hong Kong family for two years',
      },
      {
        id: 'D',
        text: 'D. the scholarship received by a Hong Kong university student from an overseas institution',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Correct answer is A: The commercial property is located in HK (in GDP), but the income is earned by a non-resident (excluded from GNI as factor income to abroad). B is in GNI only; C is in both; D is in neither.',
    misconceptionKey: 'PLACE_VS_RESIDENCE',
  },
  {
    id: 'l3-10',
    level: 3,
    sourceRef: 'Recombined from 2015 DSE Q24, 2019 DSE Q25 & 2022 DSE Q27',
    prompt:
      'Which of the following would be included in BOTH the gross domestic product (GDP) and the gross national income (GNI) of Hong Kong?',
    itemText: 'Choose the correct item:',
    options: [
      {
        id: 'A',
        text: 'A. the salary received by a Japanese language teacher who worked in a language centre in Hong Kong for two years',
      },
      {
        id: 'B',
        text: 'B. the dividends received by a Hong Kong resident from holding shares of an automobile company in France',
      },
      {
        id: 'C',
        text: 'C. the dividends earned by a Canadian investor from holding shares of a Hong Kong public utility company',
      },
      {
        id: 'D',
        text: 'D. the capital gain received by a Hong Kong resident from selling an apartment in Hong Kong',
      },
    ],
    correctOptionId: 'A',
    explanation:
      'Correct answer is A: Teaching is produced in HK (in GDP); having stayed for two years (≥12 months), the teacher is a HK resident (in GNI). B is in GNI only; C is in GDP only; D is in neither.',
    misconceptionKey: 'NATIONALITY_TRAP',
  },
];
