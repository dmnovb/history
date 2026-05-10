import type { Person } from '../people/types'

export const seedPeople: Person[] = [
  {
    id: 'julius-caesar',
    displayName: 'Julius Caesar',
    wikiUrl: 'https://en.wikipedia.org/wiki/Julius_Caesar',
    infobox: {
      Born: '12 July 100 BC Rome, Italy',
      Died: '15 March 44 BC Rome, Italy',
      'Political party': 'Populares',
      'Spouse(s)': 'Cornelia (m. 84 BC; died 69 BC); Pompeia (m. 67 BC; div. 62 BC); Calpurnia (m. 59 BC)',
      'Children': 'Julia; Caesarion',
      'Military service': 'Roman army',
    },
  },
  {
    id: 'cleopatra',
    displayName: 'Cleopatra',
    wikiUrl: 'https://en.wikipedia.org/wiki/Cleopatra',
    infobox: {
      'Reign': '51–30 BC',
      'Born': '70/69 BC Alexandria, Ptolemaic Kingdom',
      Died: '10 August 30 BC Alexandria, Ptolemaic Kingdom',
      'Dynasty': 'Ptolemaic',
      'Spouse(s)': 'Ptolemy XIII; Ptolemy XIV; Mark Antony',
      'Children': 'Caesarion; Alexander Helios; Cleopatra Selene II; Ptolemy Philadelphus',
    },
  },
  {
    id: 'hannibal',
    displayName: 'Hannibal',
    wikiUrl: 'https://en.wikipedia.org/wiki/Hannibal',
    infobox: {
      Born: 'c. 247 BC Carthage',
      Died: 'c. 183/181 BC Bithynia',
      Allegiance: 'Carthage',
      'Years of service': '221–202 BC',
      Battles: 'Second Punic War',
    },
  },
]

