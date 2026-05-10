import type { HistoricalEvent } from '../events/types'

export const events: HistoricalEvent[] = [
  // ── France ───────────────────────────────────────────────────────────────
  {
    id: 'french-revolution',
    title: 'The French Revolution',
    date: { start: 1789, end: 1799 },
    era: '18th Century (Enlightenment)',
    century: 18,
    country: 'FR',
    summary: "A decade of radical political and social transformation that overthrew the French monarchy, dismantled the feudal system, and reshaped Europe's political order.",
    narrative: `France in 1789 stood at the edge of collapse. Decades of royal extravagance, compounded by the catastrophic cost of supporting the American Revolution, had left the treasury bankrupt. A series of failed harvests drove bread prices beyond the reach of ordinary Parisians, while the rigid social hierarchy of the Ancien Régime — which shielded the nobility and clergy from taxation — made meaningful reform nearly impossible. When Louis XVI convened the Estates-General in May 1789, the first such assembly in 175 years, the accumulated grievances of an entire society found a voice.

What began as a fiscal crisis rapidly transformed into a constitutional revolution. The Third Estate, representing 97 percent of the population, broke from the Estates-General in June to form a National Assembly, declaring itself the sovereign representative of the French people. The storming of the Bastille on 14 July 1789 — more symbolic than strategic — electrified the nation and marked the decisive rupture with royal authority. Across the countryside, peasants rose against their landlords in what became known as the Great Fear, burning records of feudal dues and redistributing property.

The revolution grew steadily more radical under pressure from war and internal dissent. By 1793, France was at war with most of Europe, and the Committee of Public Safety, dominated by Maximilien Robespierre, wielded near-dictatorial power in the name of republican virtue. The Reign of Terror executed tens of thousands accused of counter-revolutionary sentiment, consuming not only enemies of the republic but eventually the revolutionaries themselves. Robespierre was guillotined in July 1794 in the Thermidorian reaction that ended the Terror's worst excesses.

The revolution's final phase — the Directory (1795–1799) — was unstable and corrupt, lurching between royalist and radical threats. It was brought down in November 1799 when a young general named Napoleon Bonaparte staged a coup d'état, installing himself as First Consul. He would go on to codify many of the revolution's legal reforms while reversing its democratic politics entirely.

The French Revolution permanently shattered the divine right of kings as a governing principle in Europe. Its ideals — liberté, égalité, fraternité — became the vocabulary of every subsequent democratic movement, from Latin American independence to the revolutions of 1848. The Declaration of the Rights of Man, drafted in its first months, remains one of the foundational documents of modern human rights.`,
    figures: ['louis-xvi', 'marie-antoinette', 'robespierre', 'napoleon'],
    sources: ['https://en.wikipedia.org/wiki/French_Revolution'],
  },
  {
    id: 'napoleonic-wars',
    title: 'The Napoleonic Wars',
    date: { start: 1803, end: 1815 },
    era: '19th Century (Napoleonic Era)',
    century: 19,
    country: 'FR',
    summary: "A series of conflicts in which Napoleon Bonaparte's French Empire dominated continental Europe, reshaping borders, spreading revolutionary law codes, and triggering a new age of nationalism.",
    narrative: `Napoleon Bonaparte rose to power not despite the French Revolution but through it. Born in Corsica in 1769, he had been a brilliant artillery officer who made his name suppressing a royalist uprising in Paris and then conducting a spectacularly successful Italian campaign. By 1799 he had manoeuvred himself into the position of First Consul, and by 1804, crowned himself Emperor in Notre-Dame Cathedral — with the Pope present but pointedly prevented from placing the crown on his head. Napoleon did it himself.

His military genius lay in speed and concentration. Where opposing armies moved ponderously by the logic of supply lines, Napoleon's corps marched quickly, living partly off the land, and concentrated at the decisive point before the enemy could respond. At Austerlitz in December 1805, he destroyed the combined Austro-Russian army in what military historians still consider the most perfectly executed battle in history. By 1807, after defeats at Jena and Friedland, the major European powers had all been brought to terms.

But Napoleon's ambitions outpaced his grasp. The Peninsular War, begun in 1808, tied down hundreds of thousands of French troops in a brutal guerrilla conflict in Spain and Portugal that they could never fully suppress. The invasion of Russia in 1812 was catastrophic: the Grande Armée of over 600,000 men marched to Moscow only to find it burned and abandoned, then retreated through a Russian winter that killed the army by attrition. Of the soldiers who crossed the Niemen River into Russia, fewer than 100,000 returned fit for duty.

Sensing weakness, the European powers formed a new coalition. At Leipzig in October 1813, the "Battle of Nations," Napoleon was decisively defeated by the combined armies of Austria, Prussia, Russia, and Sweden. He abdicated in April 1814 and was exiled to Elba. His return during the Hundred Days ended at Waterloo in June 1815, where the Duke of Wellington and Field Marshal Blücher ended his rule permanently. He died in exile on Saint Helena in 1821.

The Napoleonic Wars left Europe transformed. The Congress of Vienna redrew the map of the continent on principles of balance of power that largely preserved peace among the great powers for nearly a century. The Napoleonic Code — a rational, written legal framework based on equality before the law — survived Napoleon himself and became the basis of civil law across most of continental Europe and beyond. Paradoxically, by spreading French nationalism, Napoleon helped ignite the nationalisms that would eventually dismember his empire.`,
    figures: ['napoleon', 'josephine', 'wellington'],
    sources: ['https://en.wikipedia.org/wiki/Napoleonic_Wars'],
  },

  // ── Germany ───────────────────────────────────────────────────────────────
  {
    id: 'protestant-reformation',
    title: 'The Protestant Reformation',
    date: { start: 1517, end: 1648 },
    era: '16th Century (Early Modern)',
    century: 16,
    country: 'DE',
    summary: "A religious revolution that fractured Western Christianity, beginning with Martin Luther's challenge to papal authority and culminating in the permanent establishment of Protestant churches across Europe.",
    narrative: `The Catholic Church of the early sixteenth century was an institution under strain. A century of Renaissance humanism had accustomed educated Europeans to examining ancient texts critically, and they turned that lens on scripture and church practice with increasingly uncomfortable results. Simony — the sale of church offices — was widespread. Indulgences, certificates supposedly reducing time in purgatory, were openly peddled across Germany to fund the construction of Saint Peter's Basilica in Rome. It was these indulgences that pushed an Augustinian monk at the University of Wittenberg to act.

Martin Luther posted his Ninety-Five Theses in October 1517 — probably nailing them to the Castle Church door in Wittenberg, though more likely sending them to his bishop by letter. His argument was theological: salvation came through faith alone, not through good works or purchased indulgences. The printing press, invented just decades earlier, transformed what might have been a local academic dispute into a continental firestorm. Within weeks, copies of Luther's theses circulated across Germany; within months, across Europe. When Luther refused to recant before the Diet of Worms in 1521, he became the focal point of a movement that had already grown beyond any individual's control.

The Reformation rapidly diversified. Huldrych Zwingli established a more radical reform in Zurich, stripping churches of images and rejecting Luther's nuanced position on the Eucharist. John Calvin in Geneva built a systematic theology of predestination and a model of church governance that spread through France, the Netherlands, Scotland, and England's Puritan movement. The English Reformation, triggered by Henry VIII's need for an annulment, produced the Church of England — reformed in structure but initially conservative in doctrine.

The political consequences were severe. The principle of cuius regio, eius religio — whose realm, his religion — meant that Europe's religious map was decided by the faith of princes, creating patchworks of confessional territories that became permanent points of conflict. The Thirty Years War (1618–1648) devastated Central Europe, killing perhaps a third of the German-speaking population through combat, famine, and plague. It ended with the Peace of Westphalia, which recognised the permanent existence of Protestant and Catholic territories and established the modern principles of state sovereignty.

The Reformation's legacy extended far beyond religion. By insisting on individual conscience against institutional authority, it planted seeds of religious individualism that would grow into the Enlightenment and liberal political philosophy. The emphasis on reading scripture drove literacy and printing. The break with Rome fractured Europe's cultural unity in ways that still shape the continent's religious, political, and social geography.`,
    figures: ['martin-luther', 'charles-v', 'john-calvin'],
    sources: ['https://en.wikipedia.org/wiki/Reformation'],
  },
  {
    id: 'unification-of-germany',
    title: 'German Unification',
    date: { start: 1864, end: 1871 },
    era: '19th Century (Nationalism)',
    century: 19,
    country: 'DE',
    summary: "Otto von Bismarck's orchestrated series of wars that forged dozens of German states into a single empire, shifting the European balance of power and setting the stage for the conflicts of the twentieth century.",
    narrative: `In 1862, when Otto von Bismarck was appointed Minister President of Prussia, Germany was a jigsaw of 39 sovereign states loosely united in the German Confederation under Austrian presidency. Nationalism had been a powerful force since at least the Napoleonic era, but the revolutions of 1848 had failed to produce unification by liberal means. Bismarck had no interest in liberal means. "The great questions of the day," he told the Prussian parliament in his first major speech, "will not be decided by speeches and resolutions of the majority — that was the mistake of 1848 and 1849 — but by iron and blood."

He meant it. Bismarck engineered three wars with surgical precision, each achieving a specific strategic objective. The Danish War of 1864 brought the German-speaking duchies of Schleswig and Holstein under joint Prussian-Austrian administration — creating a diplomatic friction point Bismarck would exploit next. The Austro-Prussian War of 1866, fought ostensibly over those same duchies, lasted just seven weeks before Prussian forces defeated Austria at the Battle of Königgrätz. The resulting peace expelled Austria from German affairs entirely, leaving Prussia as the undisputed hegemon of northern Germany.

The final act came through France. Bismarck manipulated a diplomatic dispute over the Spanish succession into a war he knew France would start and Prussia could win. The Franco-Prussian War of 1870–71 swept through northern France, besieged Paris, and forced a humiliating French capitulation. The southern German states — Bavaria, Württemberg, Baden — which had initially been cautious about Prussian dominance, joined in the patriotic fervour and agreed to enter a unified German empire.

On 18 January 1871, in the Hall of Mirrors at the Palace of Versailles — pointedly chosen for its symbolism — King William I of Prussia was proclaimed German Emperor before an assembly of German princes and military officers. The new German Empire was the most powerful state on the European continent: industrially dynamic, militarily formidable, and diplomatically aggressive.

The unification created a power whose weight Europe's existing balance could not comfortably accommodate. France nursed deep resentment over its lost provinces of Alsace-Lorraine. Austria-Hungary, displaced from German affairs, turned its ambitions south and east into the Balkans. Bismarck himself spent the next two decades in a complicated alliance system trying to manage the tensions his creation had produced. When that system broke down in 1914, the consequences would be catastrophic.`,
    figures: ['otto-von-bismarck', 'william-i'],
    sources: ['https://en.wikipedia.org/wiki/Unification_of_Germany'],
  },

  // ── United Kingdom ────────────────────────────────────────────────────────
  {
    id: 'magna-carta',
    title: 'Magna Carta',
    date: 1215,
    era: '13th Century (Medieval)',
    century: 13,
    country: 'GB',
    summary: "A royal charter sealing limits on the power of the English Crown, forced upon King John by rebellious barons — and the first step toward constitutional government in the English-speaking world.",
    narrative: `King John of England had a talent for making enemies. By 1215 he had managed to alienate virtually every powerful constituency in his kingdom: he had lost Normandy to the French crown in 1204, had been excommunicated by Pope Innocent III after refusing the papal candidate for Archbishop of Canterbury, and had taxed his barons repeatedly for wars they had little interest in fighting. When a military campaign in France collapsed in 1214, the barons of the north and east rose in open rebellion.

The confrontation came to a head on 15 June 1215 at Runnymede, a meadow beside the Thames between Windsor and Staines. What the barons forced upon John was a charter of liberties — Magna Carta, or "Great Charter" — containing 63 clauses that addressed specific grievances: limits on royal taxation without consent, rights of inheritance, freedom of the Church, and crucially, protections against arbitrary royal justice. Clause 39 stated that no free man could be imprisoned, dispossessed, or harmed "except by the lawful judgement of his peers or by the law of the land." Clause 40 read: "To no one will we sell, to no one deny or delay right or justice."

John had no intention of honouring it. He appealed to Pope Innocent III, who annulled the charter within weeks as "shameful, demeaning, illegal and unjust." Civil war resumed, and John died the following year, his kingdom in the hands of rebel barons allied with a French invading force. It was his nine-year-old son's regents who made Magna Carta stick, reissuing it in 1216 and 1217 to win baronial support for the young Henry III's regime — and again in 1225 in a more definitive form that entered the statute books permanently.

The specific feudal grievances of 1215 became less important than the symbolic principles the charter represented. When seventeenth-century parliamentarians struggled against the Stuart kings, they reached for Magna Carta as their precedent: here was proof that even the Crown was subject to law. Jurists like Edward Coke transformed its clauses into the foundations of habeas corpus, trial by jury, and due process — principles that crossed the Atlantic with the English colonists and entered the American Constitution and Bill of Rights.

Today only four of the original 63 clauses remain on the English statute book, but the document's influence is immeasurable. It established the principle — radical in 1215, now foundational to liberal democracy — that power must be exercised under the constraint of law, and that subjects have rights which rulers may not arbitrarily override.`,
    figures: ['king-john', 'stephen-langton'],
    sources: ['https://en.wikipedia.org/wiki/Magna_Carta'],
  },
  {
    id: 'industrial-revolution',
    title: 'The Industrial Revolution',
    date: { start: 1760, end: 1840 },
    era: '18th Century (Industrial Age)',
    century: 18,
    country: 'GB',
    summary: "The transformation of Britain from an agricultural economy to an industrial one — the first such shift in human history — powered by coal, steam, and a new relationship between capital and labour.",
    narrative: `Britain's industrialisation was not an accident of geography or intellect alone, though it had advantages of both. Its island security freed it from the standing armies that consumed continental tax revenues. Its coal deposits were accessible and near navigable water. Its enclosure movement had driven agricultural workers off common land and into towns willing to take factory work. Its empire provided raw materials and markets. And its particular configuration of social class — with a landed gentry willing to invest in commercial ventures that French aristocrats would have found demeaning — channelled wealth into productive enterprise.

The textile industry was the crucible. John Kay's flying shuttle (1733), James Hargreaves's spinning jenny (1765), Richard Arkwright's water frame (1769), and Edmund Cartwright's power loom (1785) transformed cloth-making from a cottage industry into a factory one, collapsing the cost of production and multiplying output. The mills that sprang up along the rivers of Lancashire and Yorkshire concentrated workers in numbers and conditions that had no precedent in human history — 12-hour days, six days a week, for adults and children alike.

Steam power was the revolution's nervous system. James Watt's improved steam engine (1769), made commercially viable through his partnership with the manufacturer Matthew Boulton, was adaptable to any industry that needed rotary motion. It pumped water out of mines, drove textile machines, and eventually propelled George Stephenson's locomotives along iron rails. The Liverpool and Manchester Railway, opened in 1830, was the first steam-powered passenger railway; within two decades a rail network had stitched Britain together, reducing journey times from days to hours and moving goods at a fraction of the previous cost.

The social consequences were profound and deeply ambivalent. Cities grew with staggering speed — Manchester's population grew tenfold between 1750 and 1850 — but without the sanitation, housing, or governance to accommodate the influx. The average industrial worker was poorer in real terms than the agricultural labourer of a generation before. Child labour was ubiquitous. The reform movements that emerged in response — trade unionism, Chartism, the Factory Acts, the public health movement — were themselves products of the industrial city's concentrations of literate, organised workers.

Britain's industrial lead lasted roughly a century before Germany and the United States caught and surpassed it. But the template — factory production, fossil fuels, global trade, wage labour, urbanisation — spread across the world over the following two centuries, transforming every society it touched. The carbon embedded in that coal is still cycling through the atmosphere today.`,
    figures: ['james-watt', 'george-stephenson'],
    sources: ['https://en.wikipedia.org/wiki/Industrial_Revolution'],
  },

  // ── United States ─────────────────────────────────────────────────────────
  {
    id: 'american-revolution',
    title: 'The American Revolution',
    date: { start: 1775, end: 1783 },
    era: '18th Century (Enlightenment)',
    century: 18,
    country: 'US',
    summary: "The colonial rebellion that broke thirteen American colonies free from British rule and produced the Declaration of Independence, establishing the world\'s first modern democratic republic.",
    narrative: `The American Revolution grew from a constitutional argument about taxation. Britain's national debt had roughly doubled after the Seven Years' War (1756–1763), and Parliament decided that the American colonies, who had benefited from British military protection in that war, should contribute to its cost. The Stamp Act of 1765 taxed legal documents, newspapers, and pamphlets; the Townshend Acts of 1767 imposed duties on glass, paper, and tea. The colonists' objection was not primarily economic — the sums involved were modest — but principled: they had no representatives in Parliament, and a parliament without their consent had no right to tax them. "No taxation without representation" became the rallying cry.

Tensions escalated through incidents on both sides: the Boston Massacre (1770), the destruction of the East India Company's tea in Boston Harbour (1773), and Parliament's punitive Coercive Acts that closed Boston's port and revoked Massachusetts' self-governance. By April 1775, when British regulars marched to seize colonial militias' weapons at Concord, Massachusetts, shots were fired. Paul Revere rode his midnight warning. The first battles of the war — Lexington and Concord — showed that the colonial militias, fighting on home ground, could inflict serious casualties on professional British soldiers.

The Second Continental Congress, meeting in Philadelphia, moved from attempting reconciliation to organizing for independence. Thomas Jefferson, drawing on John Locke's political philosophy and the specific colonial grievances, drafted a Declaration of Independence that was adopted on 4 July 1776. Its claim that "all men are created equal" and endowed with "unalienable rights" to life, liberty, and the pursuit of happiness articulated a theory of government by consent that would resonate across two centuries.

The military balance was asymmetric: Britain had the world's most professional army and navy; the Continental Army under George Washington was underfunded, poorly supplied, and fought against constant desertion. What turned the war was the French alliance secured by Benjamin Franklin in 1778, which transformed a colonial rebellion into a global conflict Britain could not easily win. French financial support, French troops under Rochambeau, and critically the French fleet that trapped Cornwallis's army at Yorktown in 1781 made American victory possible. Britain recognised American independence in the Treaty of Paris in 1783.

The Constitution drafted in 1787, and the Bill of Rights added in 1791, attempted to put the revolution's principles into durable institutional form: separation of powers, federalism, freedom of speech and religion, protection against arbitrary detention. The result was imperfect — the Constitution explicitly accommodated slavery, the most profound contradiction of its own principles — but the framework it established has proven remarkably durable, serving as a template for constitutions around the world.`,
    figures: ['george-washington', 'thomas-jefferson', 'benjamin-franklin'],
    sources: ['https://en.wikipedia.org/wiki/American_Revolution'],
  },
  {
    id: 'american-civil-war',
    title: 'The American Civil War',
    date: { start: 1861, end: 1865 },
    era: '19th Century (Industrial Age)',
    century: 19,
    country: 'US',
    summary: "The deadliest conflict in American history, fought between the Union and the Confederate States over slavery and the nature of the federal union — ending in the abolition of slavery and the preservation of the United States.",
    narrative: `The American Civil War was, at its root, a war about slavery. The Southern economy — cotton, tobacco, rice — was built on the forced labour of four million enslaved people, and Southern politicians had successfully blocked federal action on slavery for decades through a combination of constitutional interpretation and political leverage. The election of Abraham Lincoln in 1860, on a platform of preventing slavery's expansion into new western territories, convinced the Deep South that the institution's long-term survival required independence. South Carolina seceded in December 1860; six more states followed before Lincoln's inauguration.

The war began in April 1861 when Confederate forces bombarded Fort Sumter, a federal garrison in Charleston Harbour. Both sides expected a short conflict; instead they stumbled into four years of industrialised slaughter unprecedented in the Western hemisphere. The early years went badly for the Union. Confederate generals Robert E. Lee and Stonewall Jackson won a series of brilliant victories in the Eastern theatre, defeating larger Union armies at the Seven Days, Second Bull Run, Fredericksburg, and Chancellorsville. In the West, Union forces made steadier progress, Ulysses S. Grant capturing Fort Donelson and then surviving the near-catastrophe at Shiloh before taking Vicksburg in July 1863.

The war's character changed profoundly in September 1862, when Lincoln issued a preliminary Emancipation Proclamation following the Union's narrow victory at Antietam. The final proclamation of 1 January 1863 declared enslaved people in Confederate states to be free — partly as a war measure, partly as a redefinition of what the war was for. Two hundred thousand Black soldiers subsequently served in the Union Army, and the abolition of slavery became an explicit Union war aim that foreclosed any European recognition of the Confederacy.

The turning point came at Gettysburg, Pennsylvania in July 1863, where Lee's invasion of the North was repulsed with enormous casualties on both sides. Combined with Grant's capture of Vicksburg the same day, it marked the high-water mark of Confederate power. In 1864, Grant was given command of all Union armies. His strategy was attritional — grind down Confederate forces everywhere simultaneously, using the Union's greater industrial and manpower resources remorselessly. William Tecumseh Sherman's march through Georgia destroyed the Confederacy's economic infrastructure and broke civilian morale. Lee surrendered to Grant at Appomattox Court House on 9 April 1865.

Lincoln was assassinated five days later, before he could implement his relatively lenient Reconstruction plans. The war had killed 620,000 soldiers — more than all other American wars combined until the twentieth century — and transformed the republic utterly. The Thirteenth Amendment abolished slavery; the Fourteenth guaranteed equal citizenship; the Fifteenth protected Black voting rights. The Reconstruction that followed was imperfect and eventually abandoned, but the constitutional amendments it produced would serve as the legal foundation for the Civil Rights movement a century later.`,
    figures: ['abraham-lincoln', 'ulysses-grant', 'robert-e-lee'],
    sources: ['https://en.wikipedia.org/wiki/American_Civil_War'],
  },

  // ── Italy ─────────────────────────────────────────────────────────────────
  {
    id: 'fall-of-western-rome',
    title: 'The Fall of Western Rome',
    date: 476,
    era: '5th Century (Late Antiquity)',
    century: 5,
    country: 'IT',
    summary: "The deposition of the last Western Roman Emperor in 476 AD, ending five centuries of Roman rule in the West and marking the beginning of what would later be called the Middle Ages.",
    narrative: `The fall of Rome was not a single catastrophic event but the slow unravelling of a complex civilisation under pressures that had been building for centuries. The empire at its height in the second century AD stretched from Scotland to Mesopotamia, from the Rhine to the Sahara, administering perhaps 70 million people under a common law, currency, and military. By the fourth century, it had been divided administratively between a Western and an Eastern half. The Eastern empire, wealthier and more urbanised, would survive as the Byzantine Empire for another thousand years. It was the West — poorer, more rural, more exposed to the Rhine-Danube frontier — that came undone.

The immediate pressure came from mass migrations set in motion by the Huns, a nomadic people from the Central Asian steppes who swept westward in the 370s and pushed Germanic peoples — Visigoths, Ostrogoths, Vandals, Burgundians, Franks — across the Roman frontier. The empire had incorporated Germanic soldiers and settlers for generations, but the scale and speed of fourth and fifth century immigration overwhelmed its capacity to assimilate them. In 376, a large Gothic force crossed the Danube with Roman permission; two years later, after being mistreated by corrupt Roman officials, they inflicted a catastrophic defeat on the Eastern emperor Valens at Adrianople.

The fifth century was a relentless erosion. Visigoths sacked Rome in 410 — for the first time in eight centuries — sending a shockwave of disbelief through the Roman world. Vandals seized North Africa in the 430s, cutting off the grain supplies that fed the city of Rome. Attila the Hun ravaged Gaul and northern Italy in the 450s. The Western emperors became increasingly irrelevant figureheads, their real power held by German military commanders. The last of these emperors, a teenage boy named Romulus Augustulus, was deposed in 476 by Odoacer, a Germanic chieftain who declared himself King of Italy rather than bothering to appoint another puppet emperor.

Whether contemporaries understood this as a decisive event is doubtful. Odoacer maintained Roman law and administration; the Eastern emperor in Constantinople remained the nominal sovereign. But historians looking back came to see 476 as a convenient marker for the end of something — a whole civilisation's way of organising political and economic life. The following centuries would see profound disruption: cities shrank, long-distance trade contracted, literacy rates fell, the road networks fell into disrepair.

Rome's legacy, however, proved indestructible. Roman law underpins most European legal systems to this day. The Catholic Church, which had grown within the empire, carried Roman administrative practices and the Latin language through the medieval period and into modernity. The very concept of "Europe" as a cultural unity is in large measure a product of the shared Roman inheritance that even the barbarian kingdoms claimed, imitated, and passed on.`,
    figures: ['romulus-augustulus', 'odoacer'],
    sources: ['https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire'],
  },
  {
    id: 'italian-renaissance',
    title: 'The Italian Renaissance',
    date: { start: 1300, end: 1600 },
    era: '14th Century (Renaissance)',
    century: 14,
    country: 'IT',
    summary: "A flowering of art, science, and humanist thought centred on the Italian city-states — rediscovering classical antiquity and producing some of history\'s most enduring works of human creativity.",
    narrative: `The Renaissance began as a recovery project. Medieval Europe had preserved many ancient texts, but much of Greek and Roman thought had been lost or neglected, surviving in Arabic translations or dusty monastic libraries. Italian scholars of the fourteenth century — Petrarch most influentially — began insisting that the literature and philosophy of antiquity were not merely useful repositories of useful knowledge but models of human achievement to be studied, imitated, and surpassed. This reorientation toward the human world, human achievement, and human potential became known as humanism.

The material conditions for this intellectual revolution were largely provided by Italy's city-states — Florence, Venice, Milan, Rome, Genoa — which had grown wealthy through trade and banking in ways that produced both the surplus resources to patronise art and the mercantile worldview that valued practical knowledge and this-worldly achievement. The Medici of Florence were the supreme example: a banking family whose patronage of Leonardo da Vinci, Botticelli, Michelangelo, and Machiavelli made their city the cultural capital of Europe. Lorenzo de' Medici, "the Magnificent," kept a household that was simultaneously a banking empire, a political machine, and a philosophical academy.

The visual arts underwent a transformation so complete that it is difficult now to appreciate how radical it was. Medieval painting was symbolic and hierarchical — figures sized by spiritual importance, gold backgrounds signifying the divine realm, emotion subordinated to theological message. Renaissance painters like Giotto, then Masaccio, then Leonardo and Raphael introduced mathematical perspective, anatomically accurate figures, natural landscapes, and the portrayal of psychological states. Michelangelo's Sistine Chapel ceiling, painted between 1508 and 1512, depicted the biblical narrative with a muscular, fully human physicality that had no medieval precedent.

The Renaissance was not only an artistic movement. Leonardo da Vinci's notebooks reveal a mind that treated painting, engineering, anatomy, and natural philosophy as a single integrated inquiry into the workings of the world. Galileo's later astronomical work — conducted just as the Renaissance was giving way to the Scientific Revolution — drew on the same combination of mathematical rigour and direct observation. Machiavelli's political writings abandoned the medieval tradition of advising rulers to be virtuous in the Christian sense, offering instead a cold-eyed analysis of power as it actually functioned.

The Italian Renaissance spread northward through the sixteenth century, reaching Germany, France, the Netherlands, and England. Northern humanists like Erasmus and Thomas More applied the critical methods of classical scholarship to Church texts, contributing to the intellectual ferment that produced the Protestant Reformation. Shakespeare's plays are steeped in Renaissance ideas about individual psychology, ambition, and the moral complexity of political life. The Renaissance did not merely produce beautiful objects — it changed what educated Europeans believed human beings were capable of, and what they thought was worth knowing.`,
    figures: ['leonardo-da-vinci', 'lorenzo-de-medici', 'michelangelo'],
    sources: ['https://en.wikipedia.org/wiki/Italian_Renaissance'],
  },

  // ── Spain ─────────────────────────────────────────────────────────────────
  {
    id: 'reconquista',
    title: 'The Reconquista',
    date: { start: 718, end: 1492 },
    era: '8th Century (Medieval)',
    century: 8,
    country: 'ES',
    summary: "The centuries-long campaign by Christian kingdoms to reclaim the Iberian Peninsula from Muslim rule, culminating in the fall of Granada and creating one of medieval Europe's most complex civilisations before its violent conclusion.",
    narrative: `The Reconquista was not a single campaign but eight centuries of intermittent warfare, coexistence, intermarriage, conversion, and cultural exchange. Muslim armies crossed from North Africa in 711 and within seven years controlled virtually the entire peninsula. The Christian kingdoms that survived in the mountainous north — Asturias, León, Navarre, and later Castile, Aragon, and Portugal — began pushing back from the eighth century, slowly and unevenly. The advance was rarely motivated purely by religious ideology; land, tribute, and dynastic ambition played equal parts. The caliphate of Córdoba, at its peak in the tenth century, was the most sophisticated state in western Europe — its libraries, scholarship, and architecture (the Mezquita, the Alhambra) far surpassing anything north of the Pyrenees. Muslim, Christian, and Jewish scholars worked side by side translating ancient Greek texts into Latin that would eventually fuel the European Renaissance.

The pace of reconquest accelerated after the caliphate fragmented into petty taifa states after 1031, allowing the northern kingdoms to exact tribute and seize territory. The fall of Toledo in 1085 was the decisive early advance; the crushing Christian victory at Las Navas de Tolosa in 1212 broke the power of the Almohad dynasty and opened the path to Andalusia. By the mid-thirteenth century, only the Emirate of Granada remained under Muslim rule, surviving as a tributary state for two more centuries.

The final chapter belonged to Isabella of Castile and Ferdinand of Aragon, whose marriage in 1469 united the two dominant Christian kingdoms. They launched a sustained campaign against Granada in 1482, capturing the emirate city by city. The last Nasrid sultan, Muhammad XII — called Boabdil — surrendered the keys of Granada on 2 January 1492. The same year, Ferdinand and Isabella expelled Spain's Jewish population through the Alhambra Decree, forced the conversion or expulsion of remaining Muslims, and funded Christopher Columbus's voyage west.

The coincidence of events in 1492 marked a brutal turning point: the tolerant complexity of medieval Iberia replaced by the religious uniformity the new Spanish monarchy demanded. The Inquisition, established in 1478, prosecuted converted Jews and Muslims suspected of secretly practising their old faiths. Yet the cultural legacy of eight centuries of interchange — in architecture, mathematics, philosophy, medicine, and music — was indestructible, embedded in the Spanish language and landscape to this day.`,
    figures: ['isabella-i', 'ferdinand-ii', 'boabdil'],
    sources: ['https://en.wikipedia.org/wiki/Reconquista'],
  },
  {
    id: 'spanish-armada',
    title: 'The Spanish Armada',
    date: 1588,
    era: '16th Century (Early Modern)',
    century: 16,
    country: 'ES',
    summary: "Philip II's fleet of 130 ships sent to invade Protestant England — defeated by English naval tactics and Atlantic storms, marking the beginning of Spain's long naval decline.",
    narrative: `The Enterprise of England, as Philip II called it, was the largest naval undertaking in European history to that point: 130 ships, 8,000 sailors, and nearly 19,000 soldiers assembled to carry a Spanish army across the Channel and onto English soil. The plan was to depose the Protestant Elizabeth I and restore Catholic rule to England. It seemed achievable. Spain controlled the world's most powerful empire, with silver flowing from American mines to fund the most professional army in Europe. England was a second-rate Protestant kingdom that had been sheltering Dutch rebels and privateering against Spanish shipping with sea captains like Francis Drake.

The Armada's plan required precise coordination: the fleet would sail north through the Channel, link up with Alexander Farnese's army waiting in Flanders, and convey that army across the shoal-ridden coastal waters to a landing on the Kent coast. The plan fell apart almost immediately. The Armada could find no deep-water port in Flanders where Farnese's flat-bottomed invasion barges could rendezvous with the ocean-going galleons. The English refused a conventional broadside battle, maintaining stand-off range and pounding the Spanish ships with heavier, faster-firing guns. At Gravelines, the English sent in fireships at night — unmanned vessels packed with burning material — that broke the Armada's defensive formation and sent the fleet scattering northward in panic.

Philip ordered the fleet home around Scotland and Ireland, where Atlantic storms inflicted more damage than English guns had managed. Perhaps 60 of the 130 ships were lost, along with thousands of men drowned or killed when they washed ashore. The English losses were minimal in battle, though disease in the fleet killed many more sailors than the fighting had.

The defeat did not end the war with Spain, which dragged on until 1604, nor did it end Spain's status as a great power. But it transformed the symbolic landscape of the conflict. Elizabeth I's England, seemingly vulnerable, had repelled what was framed as a Catholic crusade. Protestant providence seemed confirmed. In the longer term, Spanish naval supremacy began a slow decline, creating space for the Dutch and then the English to build their own maritime empires on the routes Spain could no longer monopolise.`,
    figures: ['philip-ii', 'francis-drake'],
    sources: ['https://en.wikipedia.org/wiki/Spanish_Armada'],
  },
  {
    id: 'spanish-civil-war',
    title: 'The Spanish Civil War',
    date: { start: 1936, end: 1939 },
    era: '20th Century (Interwar)',
    century: 20,
    country: 'ES',
    summary: "A brutal ideological conflict between the elected Republican government and Nationalist forces led by Francisco Franco — serving as a dress rehearsal for World War II and a crucible for Europe's political extremes.",
    narrative: `The Spanish Civil War began with a military coup that failed. On 17 July 1936, General Francisco Franco and a group of nationalist officers rose against the elected Popular Front government. They expected a swift success; instead they provoked a revolution. In the major cities, workers' militias organised by trade unions and anarchist collectives poured into the streets to resist. Within days, Spain had fractured: Nationalist territory in the conservative north and south, Republican territory in the urban industrialised regions. The coup had become a civil war, and the civil war rapidly became a proxy battleground for Europe's ideological struggles.

Germany and Italy intervened immediately on Franco's side. The German Condor Legion provided aircraft, including the Heinkel bombers that destroyed the Basque town of Guernica in April 1937 — an event immortalised in Picasso's painting and the century's iconic image of civilian terror bombing. Italy sent over 70,000 troops. The democratic powers pursued non-intervention, leaving the Republic to rely on Soviet military aid that came with political strings, twisting the Republican side into fratricidal conflict between Communists and anarchists. The International Brigades — some 35,000 volunteers from 50 countries, including George Orwell, who recorded his disillusionment in Homage to Catalonia — arrived to fight for the Republic.

The Republic proved impossible to govern under war conditions. Competing loyalties of regional governments in Catalonia and the Basque Country, Communist suppression of rival leftists, and the superior German and Italian air power gave the Nationalists decisive advantages. Madrid held for over two years under siege, sustained by Soviet arms and extraordinary civilian resistance. But the fall of Catalonia in January 1939 cut the Republic in two. Franco's armies entered Madrid on 28 March 1939.

Perhaps 500,000 people had died in combat; tens of thousands were executed after the Nationalist victory, and half a million refugees fled to France. The war was the dress rehearsal in which German military technology was tested, systematic aerial bombing of civilians became normalised, and Europe's left-right divide hardened into global conflict. Franco's dictatorship lasted until his death in 1975, making Spain's wounds among the longest-unhealed in Europe.`,
    figures: ['francisco-franco', 'george-orwell'],
    sources: ['https://en.wikipedia.org/wiki/Spanish_Civil_War'],
  },

  // ── Netherlands ───────────────────────────────────────────────────────────
  {
    id: 'dutch-golden-age',
    title: 'The Dutch Golden Age',
    date: { start: 1588, end: 1672 },
    era: '16th Century (Early Modern)',
    century: 16,
    country: 'NL',
    summary: "A small waterlogged republic on the margin of Europe became within a generation the world's wealthiest state per capita, its foremost maritime power, and a cultural furnace that produced Rembrandt, Vermeer, and Spinoza within a single century.",
    narrative: `The Dutch Golden Age was one of history's most improbable episodes of concentrated achievement. A republic at the margin of Europe, with no monarch, no standing army, and no natural resources beyond its harbour, became within a generation the world's foremost maritime power. The foundation was trade. The Dutch had been the carriers of northern Europe's bulk goods for a century before independence. When Portugal and Spain, distracted by religious war and imperial overextension, opened gaps in their monopolies on the eastern spice trade, Dutch merchants stepped through.

The Dutch East India Company (VOC), founded in 1602, was the world's first publicly traded joint-stock company, pooling merchant capital through tradable shares in a way that distributed risk and attracted investment at an unprecedented scale. The VOC established trading posts across Asia, ultimately controlling the nutmeg trade in the Moluccas, the pepper trade in Java, and commerce throughout the Indian Ocean. Amsterdam became the nerve centre of a global commercial network. Its banking innovations — the Amsterdam Exchange Bank (1609), sophisticated credit instruments, insurance markets — created the financial infrastructure of modern capitalism.

Religious tolerance — relative, partial, and pragmatic rather than principled — made Amsterdam a refuge for Huguenots expelled from France, Jews expelled from Iberia, and intellectuals persecuted elsewhere, including Descartes, who wrote much of his philosophy there, and Spinoza, a lens-grinder's son who developed one of the Enlightenment's most radical philosophies. In painting, the era produced a transformation as significant as the Italian Renaissance: Rembrandt's psychological portraiture, Vermeer's captured light, Jan Steen's satirical genre scenes — all funded by a middle class of merchants who wanted their world depicted rather than religious allegories.

The Dutch miracle was fragile. Louis XIV's France, joined by England and two German bishoprics, invaded simultaneously in 1672 — the Rampjaar, or disaster year. French armies swept across the flat Dutch interior in weeks before the Dutch opened their dike system, flooding the land to halt the advance. William of Orange was appointed Stadtholder in the crisis and led the eventual recovery. But the Republic never fully recovered its commercial supremacy. The wars had cost too much, shifted trade patterns, and pushed England into overtaking Dutch maritime dominance over the following century.`,
    figures: ['rembrandt', 'william-of-orange'],
    sources: ['https://en.wikipedia.org/wiki/Dutch_Golden_Age'],
  },

  // ── Greece ────────────────────────────────────────────────────────────────
  {
    id: 'fall-of-constantinople',
    title: 'The Fall of Constantinople',
    date: 1453,
    era: '15th Century (Medieval)',
    century: 15,
    country: 'GR',
    summary: "The eleven-century Eastern Roman capital fell to the Ottoman Sultan Mehmed II after a 53-day siege — ending the Byzantine Empire, reshaping Mediterranean power, and accelerating the European search for new trade routes to Asia.",
    narrative: `For eleven centuries, Constantinople had stood as the capital of the Eastern Roman — Byzantine — Empire, the most sophisticated and continuously inhabited city in the Christian world. Its triple landward walls, built by Emperor Theodosius in the early fifth century, had repelled Avars, Persians, Arabs, and Bulgars. When it finally fell on 29 May 1453, it fell not to a superior civilisation but to superior artillery — specifically, the massive bombards cast by a Hungarian engineer named Urban, employed by the twenty-one-year-old Ottoman Sultan Mehmed II.

The siege lasted 53 days. The defending force — barely 7,000 men, including Genoese and Venetian volunteers — faced an Ottoman army estimated at 60,000-80,000. Emperor Constantine XI Palaiologos refused offers of exile and led the final defence at the city's walls, dying in the last assault when Ottoman troops found a postern gate left unlocked. Mehmed rode into the city through the Charisius Gate, dismounted at the Hagia Sophia, and converted it immediately to a mosque.

The fall sent shockwaves through Europe. Eastern scholars, fleeing the conquered city, brought Greek manuscripts to Italy that contributed directly to the Renaissance's engagement with classical texts. Ottoman control of Anatolian and Balkan land routes intensified the search for maritime routes to Asia that led within four decades to Vasco da Gama's rounding of Africa and Columbus's Atlantic crossing.

Mehmed styled himself not merely Sultan but Emperor, claiming the legacy of Rome — and he was in many ways correct. Constantinople, renamed Istanbul, became the capital of an empire stretching from the Danube to the Persian Gulf. The Hagia Sophia, built by Justinian in 537, served as the imperial mosque of the Ottomans as it had served as the imperial church of the Byzantines for nine centuries before them.`,
    figures: ['mehmed-ii', 'constantine-xi'],
    sources: ['https://en.wikipedia.org/wiki/Fall_of_Constantinople'],
  },
  {
    id: 'greek-war-of-independence',
    title: 'Greek War of Independence',
    date: { start: 1821, end: 1829 },
    era: '19th Century (Nationalism)',
    century: 19,
    country: 'GR',
    summary: "Greece's uprising against Ottoman rule that eventually secured independence with European support — a war that captivated Romantic Europe, established the template for Balkan nationalism, and cost Lord Byron his life.",
    narrative: `Greece's war of independence began on 25 March 1821 when the Metropolitan of Patras blessed the uprising in the Peloponnese. Within months, Greek fighters had seized much of the Peloponnese and besieged Ottoman garrisons. The Ottomans responded with atrocities; the Greeks responded with their own, massacring Muslim and Jewish populations in areas they captured. The course of the war was tangled and almost suicidal. Greek factions — Westernised intellectuals who wanted a constitutional republic, island ship-owners who wanted commercial autonomy, and mountain warlords who wanted personal power — spent as much energy fighting each other as the Ottomans.

What saved Greece was its hold on European imagination. The Philhellenic movement — educated Europeans who saw in the Greek struggle the rebirth of the classical world they had studied — sent money, volunteers, and eventually political pressure. Lord Byron, the most famous poet in Europe, came to fight and died of fever at Missolonghi in 1824, transforming the struggle into a Romantic legend. European public opinion pressured governments toward intervention. In 1827, the navies of Britain, France, and Russia destroyed the combined Ottoman-Egyptian fleet at the Battle of Navarino — the last major battle fought entirely between sailing ships — without a formal declaration of war.

By 1825, Egyptian forces under Ibrahim Pasha, fighting for the Ottomans, had reconquered most of the Peloponnese through systematic devastation. The cause seemed lost until Navarino changed the strategic balance. The Treaty of Adrianople (1829) secured Greek autonomy, confirmed as full independence at the London Conference of 1830.

The new state was small — much of what Greeks thought of as historical Greece remained under Ottoman control — but it existed. The war established a template for Balkan nationalism that would play out repeatedly over the following century: a subject people, Romantic European sympathy, great power intervention, a new state carved from an old empire.`,
    figures: ['lord-byron', 'kolokotronis'],
    sources: ['https://en.wikipedia.org/wiki/Greek_War_of_Independence'],
  },

  // ── Poland ────────────────────────────────────────────────────────────────
  {
    id: 'solidarity-movement',
    title: 'The Solidarity Movement',
    date: { start: 1980, end: 1989 },
    era: '20th Century (Cold War)',
    century: 20,
    country: 'PL',
    summary: "The Polish trade union that became the first independent union in the Soviet bloc — ten million members strong, it catalysed the peaceful fall of communism across Eastern Europe.",
    narrative: `On 14 August 1980, workers at the Lenin Shipyard in Gdańsk put down their tools and occupied the facility. Their initial demands were specific: the reinstatement of two dismissed workers and a pay rise. Within days the strike had spread nationally and the demands had grown: the right to form free trade unions independent of the communist party, the right to strike, freedom of speech, and the release of political prisoners. The communist government, after tense negotiations brokered by Catholic intellectuals, signed the Gdańsk Agreement on 31 August 1980 — the first time a communist government had agreed in writing to workers' demands for independent representation.

Solidarność — Solidarity — grew with startling speed to ten million members, nearly a third of Poland's entire population. It was simultaneously a trade union, a civic movement, a vehicle for Polish nationalism, and an underground network for a society suffocating under communist management of every aspect of life. Its leader, a shipyard electrician named Lech Wałęsa, became the global symbol of peaceful resistance — possessing a negotiating cunning that continually surprised analysts who expected either confrontation or capitulation.

In December 1981, General Jaruzelski declared martial law, interning Wałęsa and thousands of activists and dissolving the union. Solidarity went underground, sustained partly by CIA financial support and by the moral authority of Pope John Paul II — a Pole — whose visits to Poland demonstrated the enormous gap between communist claims of public support and what Poles actually believed.

Martial law failed to solve Poland's problems. By 1988, new strikes brought Solidarity back to the table. The "Round Table" talks of 1989 agreed to partially free elections. Solidarity won 99 of 100 Senate seats and every freely contested Sejm seat. In August 1989, Tadeusz Mazowiecki became the first non-communist Prime Minister in the Soviet bloc since the 1940s. The dominoes that fell across Eastern Europe that year — Hungary, East Germany, Czechoslovakia, Romania — had been pushed first in Gdańsk.`,
    figures: ['lech-walesa', 'john-paul-ii'],
    sources: ['https://en.wikipedia.org/wiki/Solidarity_(Polish_trade_union)'],
  },

  // ── Portugal ──────────────────────────────────────────────────────────────
  {
    id: 'age-of-exploration',
    title: 'The Age of Exploration',
    date: { start: 1415, end: 1600 },
    era: '15th Century (Early Modern)',
    century: 15,
    country: 'PT',
    summary: "Portugal's pioneering voyages opened sea routes to Africa, Asia, and Brazil — the most consequential geographical project in human history, initiating global trade, the Atlantic slave trade, and centuries of European colonialism.",
    narrative: `Portugal's age of exploration was the most consequential geographical project in human history. Beginning with the capture of Ceuta in North Africa in 1415 and culminating in the first circumnavigation of the globe completed by Magellan's expedition in 1522, a small nation on the Atlantic edge of Europe opened the sea routes that would make the modern interconnected world possible — and in doing so, initiated centuries of European colonialism.

Prince Henry "the Navigator," though he personally sailed little, established at Sagres a court that systematically gathered geographical knowledge, improved ship designs — the caravel, lighter and more manoeuvrable than Mediterranean galleys — and trained navigators in astronomical instruments. His captains crept southward along the African coast year by year. They reached the Azores (1427), Cape Verde (1456), the Equator (1473), and the Cape of Good Hope in 1488, when Bartolomeu Dias proved that Africa had a southern tip that could be rounded.

Vasco da Gama completed the circuit in 1497-1499, sailing from Lisbon around the Cape and across the Indian Ocean to Calicut on India's southwest coast. He returned with spices worth sixty times the cost of the voyage. The Portuguese immediately understood: a maritime route that bypassed every middleman between Asia and Europe. Within a decade, Alfonso de Albuquerque had seized Goa, Hormuz, and Malacca — the three strategic choke points controlling Indian Ocean trade — establishing a maritime empire held not by settlement but by naval force.

Pedro Álvares Cabral, blown westward from Africa during the 1500 voyage to India, reached what is now Brazil — an accident that gave Portugal the only Portuguese-speaking country in the Americas. The effects were planetary: the first direct links between Europe, sub-Saharan Africa, the Americas, and Asia; the Atlantic slave trade; the introduction of New World crops to Asia and Europe; the spread of European diseases to populations with no immunity. Lisbon, for a century, was the entrepôt of the world.`,
    figures: ['vasco-da-gama', 'henry-the-navigator'],
    sources: ['https://en.wikipedia.org/wiki/Age_of_Discovery'],
  },

  // ── Sweden ────────────────────────────────────────────────────────────────
  {
    id: 'swedish-empire',
    title: 'The Swedish Empire',
    date: { start: 1611, end: 1721 },
    era: '17th Century (Early Modern)',
    century: 17,
    country: 'SE',
    summary: "A sparsely populated Scandinavian kingdom achieved military domination of northern Europe and control of the Baltic for a century — built on military innovation and Protestant ideology before Russia ended it at Poltava.",
    narrative: `Sweden's emergence as a great European power in the seventeenth century is one of history's stranger episodes: a kingdom with a population barely a tenth of France's achieving military domination of northern Europe and holding it for a century. The Swedish Empire — the Stormaktstiden, or Age of Great Power — was built on military innovation, Protestant ideology, and the exploitation of German manpower and resources during the chaos of the Thirty Years War.

King Gustavus Adolphus, who came to the throne in 1611 at sixteen, created a new kind of army. Swedish soldiers were conscripts rather than mercenaries, fighting for a national cause. Their tactics broke from the mass formation infantry of the day, combining mobile artillery with flexible formations that could fire rolling salvoes while advancing. When Gustavus entered the Thirty Years War in 1630, landing in northern Germany to defend Protestant princes against Habsburg Catholic domination, his armies demonstrated these innovations spectacularly. At Breitenfeld in 1631, his forces destroyed an Imperial army twice their size. He was killed at Lützen in 1632, but his chancellor Axel Oxenstierna kept Sweden in the war. At the Peace of Westphalia (1648), Sweden emerged with Baltic territories that made it the dominant regional power.

Swedish dominance rested on controlling the Baltic's southern shore — the territories through which German and Polish grain flowed to western Europe. The customs revenues from this trade financed a military establishment far beyond what Sweden's own population could support. It was a network of strategic control points more than a conventional colonial empire.

The structure was ultimately too dependent on military success. Peter the Great of Russia had been modernising his army on Swedish models. At Poltava in 1709, the army of Charles XII was destroyed by Russian forces after a disastrous winter campaign through Ukraine. The Great Northern War ended in 1721 with the Treaty of Nystad, which transferred Sweden's Baltic territories to Russia and ended the Stormaktstiden permanently. Sweden's era of imperial adventure was over; in subsequent centuries it developed instead into the model of peaceful neutrality it would be celebrated for.`,
    figures: ['gustavus-adolphus', 'charles-xii'],
    sources: ['https://en.wikipedia.org/wiki/Swedish_Empire'],
  },

  // ── United Kingdom (additional) ───────────────────────────────────────────
  {
    id: 'english-civil-war',
    title: 'The English Civil War',
    date: { start: 1642, end: 1651 },
    era: '17th Century (Early Modern)',
    century: 17,
    country: 'GB',
    summary: "The conflict between Parliament and King Charles I that ended with the execution of a king — establishing the principle of parliamentary sovereignty and laying the foundation for constitutional monarchy.",
    narrative: `The English Civil War was fought over a question that appears abstract but was then urgently practical: who was sovereign — the King, or the King-in-Parliament? Charles I governed with a conception of divine-right monarchy that sat badly with a Parliament increasingly assertive about its role in taxation and law. When he tried to rule without Parliament entirely between 1629 and 1640 — the "Personal Rule" — he raised forced loans, imprisoned those who refused to pay, and imposed religious changes that alienated his Calvinist subjects in Scotland and his Puritan subjects in England alike.

The crisis broke in 1640 when a Scottish Presbyterian army invaded northern England to resist Charles's attempt to impose Anglican liturgy on the Kirk. Unable to fight without tax revenues and unable to raise taxes without Parliament, Charles was forced to reconvene the Parliament he had dissolved eleven years before. It abolished the Star Chamber, passed an act preventing its own dissolution without its consent, and impeached the King's chief ministers. Charles responded in January 1642 by marching with soldiers to arrest five Members of Parliament — they had been warned and escaped — a violation of parliamentary privilege that made war inevitable.

The New Model Army, created in 1645 under Parliamentary ordinance, brought professional discipline to the Parliamentary cause. Its cavalry commander Oliver Cromwell proved consistently superior to Royalist generals. The decisive battles of Marston Moor (1644) and Naseby (1645) shattered the main Royalist field armies. Charles surrendered, spent years negotiating with different Parliamentary factions while secretly seeking Scottish military intervention, and was eventually tried and executed outside the Banqueting House in Whitehall on 30 January 1649 — an event that shocked Europe, where monarchy's divine sanction was still the bedrock of political order.

The republic that followed lasted until 1660, when Charles II was restored. But the principle that a king could be held accountable — that sovereignty ultimately rested somewhere other than royal will — had been permanently established. The Glorious Revolution of 1688 would build on it to create the constitutional monarchy that endures.`,
    figures: ['charles-i', 'oliver-cromwell'],
    sources: ['https://en.wikipedia.org/wiki/English_Civil_War'],
  },
  {
    id: 'wwii-britain',
    title: 'Britain in World War II',
    date: { start: 1939, end: 1945 },
    era: '20th Century (World War II)',
    century: 20,
    country: 'GB',
    summary: "From standing alone after Dunkirk to D-Day, Britain's six-year war transformed the nation — ending with victory but also the exhaustion that accelerated the end of empire.",
    narrative: `Britain declared war on Germany on 3 September 1939, two days after the German invasion of Poland. The months that followed were quiet on the Western Front, but the collapse of France in May-June 1940 transformed the situation catastrophically. A force of 330,000 Allied soldiers was evacuated from Dunkirk by an improvised fleet of naval vessels and civilian boats in a retreat framed as a miracle but unmistakably a military disaster. France signed an armistice on 22 June. Britain stood alone.

Winston Churchill, appointed Prime Minister in May 1940, refused to consider the negotiated peace that several Cabinet members advocated. His speeches — particularly the June 1940 address promising to "fight on the beaches" — stiffened civilian resolve during a summer when German invasion seemed imminent. The Battle of Britain, fought between July and September 1940, was an air campaign in which the Royal Air Force, relying on radar, skilled pilots, and the Spitfire and Hurricane fighters, inflicted sufficient losses on the Luftwaffe to force Germany to abandon its invasion plans. Hitler turned east instead, invading the Soviet Union in June 1941.

The war Britain then fought was global and grinding — the North African campaign, the Battle of the Atlantic where U-boats threatened to starve the island, the liberation of Italy, and the D-Day landings on 6 June 1944, the largest amphibious operation in history. Britain emerged from the war victorious but exhausted and financially ruined, borrowing from the United States through loans that took until 2006 to fully repay.

The war's aftermath confirmed Britain's diminished position. The United States and Soviet Union were the real victors — superpowers whose global reach made Britain's empire a historical relic. Indian independence in 1947 and the Suez Crisis of 1956, when American pressure forced Britain to abandon an intervention in Egypt, traced the rapid retreat from global power. Yet the war's cultural memory remained central to British identity for generations: the idea of "standing alone" in 1940, of civilian endurance, of a "finest hour."`,
    figures: ['winston-churchill'],
    sources: ['https://en.wikipedia.org/wiki/United_Kingdom_in_World_War_II'],
  },

  // ── France (additional) ───────────────────────────────────────────────────
  {
    id: 'hundred-years-war',
    title: "The Hundred Years' War",
    date: { start: 1337, end: 1453 },
    era: '14th Century (Medieval)',
    century: 14,
    country: 'FR',
    summary: "A 116-year conflict between England and France over the French throne — during which Joan of Arc emerged, the longbow revolution dismantled the armoured knight, and French national identity crystallised.",
    narrative: `The Hundred Years' War was a series of campaigns, truces, treaties, and renewed conflicts spanning 116 years, fought between England and France over the English crown's claims to French territory and eventually to the French throne itself. It began as a feudal dispute and ended as something new: a war between nations, fought by armies that thought of themselves as English and French rather than merely subjects of competing dynasties.

The war's origins lay in the tangled succession of the Capetian dynasty. When Charles IV of France died without a male heir in 1328, Edward III of England asserted a claim to the French throne through his mother. At Crécy in 1346 and Poitiers in 1356, English armies of longbowmen dismantled numerically superior French forces in engagements that shook aristocratic military assumptions about the centrality of the mounted knight. The Black Death, killing roughly a third of Europe's population, disrupted both sides, but the war resumed. Henry V's victory at Agincourt in 1415 — against overwhelming odds, celebrated in Shakespeare — brought England closer to controlling France than it had ever been. The Treaty of Troyes (1420) disinherited the French Dauphin and made Henry heir to the French crown.

Henry died young in 1422 before he could consolidate the conquest. Into the resulting stalemate entered Joan of Arc — a teenage peasant girl from Lorraine who claimed to hear the voices of saints commanding her to drive the English from France. She persuaded the sceptical Dauphin, led the relief of besieged Orléans in May 1429, and personally accompanied Charles VII to his coronation at Reims. Captured by Burgundians in 1430, sold to the English, tried for heresy, and burned at the stake in Rouen at approximately nineteen — her martyrdom transformed her almost immediately into a French national symbol.

The military momentum she had restored proved durable. The Burgundians reconciled with the French crown; English territorial control contracted steadily. When Bordeaux, the last major English-held city, fell in October 1453, the war ended not with a peace treaty but simply because the English had run out of territory to lose. France emerged with a centralised monarchy, a sense of national identity, and a bitter memory of English occupation that shaped its politics for centuries.`,
    figures: ['joan-of-arc', 'henry-v', 'charles-vii'],
    sources: ["https://en.wikipedia.org/wiki/Hundred_Years%27_War"],
  },

  // ── Germany (additional) ──────────────────────────────────────────────────
  {
    id: 'world-war-i',
    title: 'World War I',
    date: { start: 1914, end: 1918 },
    era: '20th Century (World War I)',
    century: 20,
    country: 'DE',
    summary: "A cascade of alliance obligations triggered by a Sarajevo assassination produced four years of industrialised slaughter — destroying four empires, killing 20 million people, and sowing the seeds of an even larger catastrophe.",
    narrative: `The First World War began with a cascade of obligations. The assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on 28 June 1914 triggered an Austrian ultimatum to Serbia, Russian mobilisation, German mobilisation in support of Austria-Hungary, the Schlieffen Plan's invasion of Belgium, and a British declaration of war on Germany — all within six weeks. The European alliance system, designed to provide security through deterrence, instead converted a regional crisis into a continental catastrophe.

Germany's strategic situation was precarious from the outset. The Schlieffen Plan — a massive wheeling movement through Belgium designed to knock France out in six weeks before turning east to face Russia — failed at the Marne in September 1914, where French and British forces halted the German advance. The war of movement froze into four years of trench warfare along a line stretching from the Channel to Switzerland. The Western Front became a killing machine: artillery bombardments that left the lunar landscape of the Somme and Verdun, poison gas attacks violating laws of war, and systematic attrition of the best-educated generation Europe had produced.

Germany fought on two fronts simultaneously, as Bismarck had always feared. In the East, the war was more mobile: German forces inflicted crushing defeats on Russia at Tannenberg and the Masurian Lakes, eventually forcing Russia's withdrawal through the Treaty of Brest-Litovsk in March 1918 after the Bolshevik Revolution. This released forces for a final offensive in the West — the Spring Offensive of 1918, which came close to breaking the Allied line before losing momentum against fresh American troops.

The armistice of 11 November 1918 ended the fighting, but Germany's political collapse had come earlier. Kaiser Wilhelm II abdicated; revolution swept through German cities. The republic that emerged — the Weimar Republic — was born in defeat and associated in the minds of nationalists with betrayal. The "stab in the back" myth — that the army had not been defeated but betrayed by socialists at home — was factually false but politically devastating. The Treaty of Versailles imposed sole responsibility for the war on Germany and demanded reparations. It was neither punitive enough to permanently disable Germany nor generous enough to reconcile it — achieving the worst of both options. Hitler would weaponize this humiliation throughout the 1920s.`,
    figures: ['kaiser-wilhelm-ii', 'paul-von-hindenburg'],
    sources: ['https://en.wikipedia.org/wiki/World_War_I'],
  },
  {
    id: 'third-reich',
    title: 'The Third Reich',
    date: { start: 1933, end: 1945 },
    era: '20th Century (World War II)',
    century: 20,
    country: 'DE',
    summary: "Hitler's totalitarian state — built from democratic collapse, sustained by racial ideology, and ended in total destruction — perpetrated the Holocaust and engulfed the world in its most destructive war.",
    narrative: `Adolf Hitler became Chancellor of Germany on 30 January 1933 through legal means — appointed by President Hindenburg, who believed he could be managed. Within a year, using the Reichstag fire as pretext for emergency powers and the Enabling Act that gave him legislative authority, Hitler had transformed the Weimar Republic into a one-party totalitarian state. The speed and efficiency of this transition shocked observers who had assumed democracy had deeper roots.

The Third Reich's ideology combined extreme German nationalism, biological racism, and conspiratorial antisemitism into a programme openly stated in Mein Kampf. The Nuremberg Laws of 1935 stripped Jews of citizenship; Kristallnacht in November 1938 saw organised pogroms destroy 7,500 Jewish businesses and over 1,400 synagogues. These were rehearsals. When war came and Nazi Germany conquered most of Europe, the regime constructed an industrial system for mass murder — the Holocaust — conducted through deportation, shooting pits in the East, and six death camps in occupied Poland, of which Auschwitz-Birkenau was the largest. Six million Jews and millions of others were murdered.

The war was initiated by Germany. The invasion of Poland on 1 September 1939 triggered British and French declarations of war; the invasion of France in May 1940 brought stunning victories. By June 1941, Germany controlled virtually all of continental Europe west of the Soviet Union. The invasion of the USSR — Operation Barbarossa — was the hinge on which the war turned. German forces advanced to the outskirts of Moscow, Leningrad, and Stalingrad, but could not deliver the knockout blow the plan required. After Stalingrad (February 1943), Germany was permanently on the defensive.

Hitler died by suicide in his Berlin bunker on 30 April 1945; Germany surrendered unconditionally on 8 May. The country was divided into four occupation zones. The Federal Republic in the west and the Democratic Republic in the east remained separated until 1990. The Third Reich's legacy — the Holocaust, the total defeat, the occupation — forced a reckoning with national history that Germany pursued more honestly than most nations have managed, making it a case study in how societies can confront catastrophic guilt.`,
    figures: ['adolf-hitler', 'erwin-rommel'],
    sources: ['https://en.wikipedia.org/wiki/Nazi_Germany'],
  },
  {
    id: 'fall-of-berlin-wall',
    title: 'The Fall of the Berlin Wall',
    date: 1989,
    era: '20th Century (Cold War)',
    century: 20,
    country: 'DE',
    summary: "The Wall fell on 9 November 1989 because of a bureaucratic misunderstanding communicated on live television — one of history's most accidental revolutions, opening the path to German reunification.",
    narrative: `The Berlin Wall fell not because anyone decided it should, but because of a bureaucratic misunderstanding communicated on live television. East Germany's Communist Party spokesman Günter Schabowski, announcing new regulations for travel permits at a press conference, had not been briefed on when they were to take effect. Asked when the rules would apply, he shuffled his papers and said: "Immediately, without delay." Thousands of East Berliners gathered at the checkpoints. Guards, who had received no orders, eventually stepped aside. People began climbing the Wall.

The Wall had stood for 28 years as the most potent symbol of the Cold War — a concrete barrier 155 kilometres long, built in August 1961 to stop the haemorrhage of skilled workers fleeing to the West. At least 140 people had been killed attempting to cross it. Its construction had split families, severed streets, divided a city that was geographically inseparable. Its presence made the political abstraction of "the Iron Curtain" physically real in a way no map could convey.

The collapse was the culmination of a year of extraordinary change. Gorbachev's reforms in the Soviet Union had signalled that Moscow would not intervene to save its Eastern European client states as it had in Hungary in 1956 and Czechoslovakia in 1968. Poland had held free elections in June; Hungary had opened its border with Austria in May, creating a gap in the Iron Curtain through which East Germans began fleeing west in thousands. In East Germany, the Monday Demonstrations in Leipzig grew weekly: 70,000 on 9 October, 300,000 on 23 October.

Reunification followed with remarkable speed. West German Chancellor Helmut Kohl pushed for rapid unification over the caution of allies who feared a resurgent Germany. The Two Plus Four Treaty restored full German sovereignty. On 3 October 1990, Germany was reunified. The economic and social disparities between East and West — what Germans called the "wall in the head" that long outlasted the physical wall — have not fully resolved even decades later. But the fall of the Wall remains the defining image of 1989's peaceful revolution and the end of the Cold War.`,
    figures: ['helmut-kohl', 'mikhail-gorbachev'],
    sources: ['https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall'],
  },

  // ── United States (additional) ────────────────────────────────────────────
  {
    id: 'wwii-america',
    title: 'America in World War II',
    date: { start: 1941, end: 1945 },
    era: '20th Century (World War II)',
    century: 20,
    country: 'US',
    summary: "Pearl Harbor pulled America from isolationism into the most complete national mobilisation in its history — the Arsenal of Democracy that supplied Allied victory and emerged as the world's dominant superpower.",
    narrative: `The United States entered the Second World War overnight — on 7 December 1941, when Japanese carrier aircraft struck the US Pacific Fleet at Pearl Harbor, Hawaii, killing 2,403 Americans. Franklin Roosevelt called it "a date which will live in infamy." Congress declared war on Japan the following day; Germany and Italy declared war on the United States four days later. The isolationist debate that had paralysed American policy for two years ended instantly.

What followed was the most complete industrial and social mobilisation in American history. Automobile factories retooled to produce tanks and aircraft. GDP grew by 75 percent between 1940 and 1945. Unemployment, still at 14 percent in 1940, fell to practically zero as sixteen million Americans entered military service and millions more — including women in large numbers for the first time — entered the industrial workforce. The "Arsenal of Democracy" Roosevelt had promised supplied not only American forces but, through Lend-Lease, the armies of Britain, the Soviet Union, and other allies. Soviet sources later attributed a significant portion of their war-winning logistics — trucks, food, aircraft, communications equipment — to American supply.

American forces fought on three fronts simultaneously. In the Pacific, a naval war of extraordinary ferocity, fought through carrier aviation and amphibious island assaults, reversed the Japanese advance — Midway in June 1942 destroyed Japan's carrier striking force. In North Africa and then Italy, US forces joined British forces in campaigns that cleared the Mediterranean. In Western Europe, the D-Day landings on 6 June 1944 — 156,000 Allied troops landing on five Normandy beaches — opened the second front the Soviet Union had demanded. By May 1945, Germany had surrendered; by August 1945, after the atomic bombing of Hiroshima and Nagasaki, Japan followed.

The war transformed America's relationship to the world. The United States emerged as the dominant economic and military power, possessing atomic weapons and the only major economy that had grown rather than been destroyed by the fighting. The decisions made in the war's final months — the division of Europe at Yalta and Potsdam, the creation of the United Nations — established a world order in which the United States would be centrally involved for the rest of the century and beyond.`,
    figures: ['franklin-roosevelt', 'dwight-eisenhower', 'harry-truman'],
    sources: ['https://en.wikipedia.org/wiki/United_States_in_World_War_II'],
  },
  {
    id: 'civil-rights-movement',
    title: 'The Civil Rights Movement',
    date: { start: 1954, end: 1968 },
    era: '20th Century (Civil Rights Era)',
    century: 20,
    country: 'US',
    summary: "The organised nonviolent campaign by Black Americans to dismantle segregation and secure equal rights — producing the Civil Rights Act of 1964, the Voting Rights Act of 1965, and a permanent transformation of American law and conscience.",
    narrative: `The Civil Rights Movement was the culmination of a struggle as old as the American republic — the demand by Black Americans that the Constitution's promises of equality be made real. In the decades following the Civil War, the Reconstruction amendments had formally abolished slavery and guaranteed equal citizenship, but the Supreme Court's 1896 Plessy v. Ferguson ruling had sanctioned "separate but equal" segregation, and across the South a system of racial apartheid — Jim Crow — was enforced through law, economic coercion, and the constant threat of extralegal violence, including lynching.

The NAACP's Legal Defense Fund, under Thurgood Marshall, systematically challenged segregation in the courts. The landmark Brown v. Board of Education ruling in 1954, which overturned Plessy and declared school segregation unconstitutional, demonstrated that the legal system could be used as an instrument of change. Rosa Parks's refusal to give up her bus seat in Montgomery in 1955 sparked a 381-day bus boycott that revealed both the power of economic pressure and the strategic genius of a young minister named Martin Luther King Jr. King's synthesis of Christian theology, Gandhian nonviolence, and American constitutionalism gave the movement a moral framework that was deeply challenging to the conscience of white America and a watching world.

The movement's confrontations with Southern white supremacy produced images that could not be suppressed. Police Commissioner Bull Connor's use of fire hoses and attack dogs against peaceful demonstrators in Birmingham, Alabama in 1963, broadcast nationally, created exactly the crisis that King had sought — forcing the Kennedy administration to propose comprehensive civil rights legislation. The March on Washington in August 1963, where 250,000 people gathered peacefully and King delivered his "I Have a Dream" address, was a demonstration of mass political will without precedent. The Civil Rights Act of 1964 and the Voting Rights Act of 1965 prohibited discrimination in public accommodations and removed the barriers that had effectively disenfranchised Black voters across the South.

King was assassinated in Memphis on 4 April 1968, while supporting a sanitation workers' strike. His death triggered riots across the nation and marked the end of the movement's coherent nonviolent phase. The Civil Rights Act remains the most significant domestic legislation of the twentieth century, and the movement it culminated remains the model — studied across the world — of how disciplined nonviolent mass action can change a society's laws and, more slowly, its conscience.`,
    figures: ['martin-luther-king', 'rosa-parks', 'thurgood-marshall'],
    sources: ['https://en.wikipedia.org/wiki/Civil_rights_movement'],
  },

  // ── Bulgaria ──────────────────────────────────────────────────────────────
  {
    id: 'first-bulgarian-empire',
    title: 'The First Bulgarian Empire',
    date: { start: 681, end: 1018 },
    era: '7th Century (Medieval)',
    century: 7,
    country: 'BG',
    summary: "Founded when Khan Asparuh's Bulgars forced Byzantium to sign a humiliating peace treaty, the First Bulgarian Empire became the dominant power of early medieval Eastern Europe and the cultural parent of the Slavic Orthodox world.",
    narrative: `The First Bulgarian Empire was born from Byzantine military failure. Khan Asparuh led his Bulgars — a semi-nomadic Turkic-Altaic people who had migrated westward from the Pontic steppe — south of the Danube into Byzantine-claimed territory around 679. Emperor Constantine IV marched against them with a large force, was routed at the Battle of Ongala in the Danube delta marshes, and in 681 signed a formal treaty recognising the Bulgarian state and agreeing to pay annual tribute. A polity had been extracted from the most powerful Christian empire in the world through force of arms.

The early empire was a fusion of its two constituent peoples. The Bulgar military aristocracy gradually merged with the Slavic majority they governed, adopting the Slavic language within three centuries while lending the new people their name. Under Khan Krum (803–814), Bulgaria reached violently into Byzantine territory: Krum sacked Adrianople, devastated Thrace, and in 811 ambushed and killed Emperor Nikephoros I in a mountain pass — the first Byzantine emperor slain in battle by an enemy in over a century — reportedly having his skull lined with silver as a ceremonial drinking cup.

The empire's zenith was the reign of Simeon I "the Great" (893–927). Educated in Constantinople's imperial academy, Simeon combined Byzantine cultural sophistication with military relentlessness. He defeated Byzantine armies repeatedly, besieged Constantinople itself more than once, and assumed the title "Emperor of Bulgarians and Romans" — a direct challenge to Byzantine imperial primacy. Under his patronage, Cyrillic script was refined at the Preslav Literary School and a vast body of Old Church Slavonic literature produced, making Bulgaria the cultural centre of the Slavic world.

The empire's decline unfolded over the following century as Byzantine power revived under the Macedonian dynasty. The catastrophic end came under Emperor Basil II, who earned the epithet "Bulgar-Slayer" (Boulgaroktonos). After the Battle of Kleidion in 1014, he blinded some 15,000 Bulgarian prisoners, leaving one eye to every hundredth man so they could lead the rest home. Tsar Samuel, viewing the returning army, died of shock. By 1018, the empire had been absorbed into Byzantium — but its legacy endured. The Cyrillic alphabet, the Bulgarian Patriarchate, and the literary tradition it fostered would survive the occupation and transmit Bulgarian identity through the centuries ahead.`,
    figures: ['khan-asparuh', 'simeon-i-the-great', 'boris-i-of-bulgaria'],
    sources: ['https://en.wikipedia.org/wiki/First_Bulgarian_Empire'],
  },
  {
    id: 'christianization-of-bulgaria',
    title: 'The Christianization of Bulgaria',
    date: 864,
    era: '9th Century (Medieval)',
    century: 9,
    country: 'BG',
    summary: "Khan Boris I's conversion to Christianity in 864 inserted Bulgaria into European civilization and, through the Cyrillic alphabet and the Preslav Literary School, made Bulgaria the cultural parent of Orthodox Slavic Christianity.",
    narrative: `The conversion of Bulgaria to Christianity in 864 was less a spiritual awakening than a geopolitical calculation. Khan Boris I, ruling a powerful pagan state between the Christian empires of Byzantium and the Carolingian west, recognised that remaining outside the Christian world meant remaining outside its diplomatic community. The question was not whether to convert but to whom — Rome or Constantinople — and what ecclesiastical autonomy Bulgaria could extract from the bargain.

Boris initially approached Rome, hoping to secure an independent Bulgarian patriarchate under papal authority. Pope Nicholas I's response was detailed but disappointing: a famous list of answers to Bulgarian questions about customs and practices, but no patriarchate. Boris pivoted to Byzantium, accepted baptism in 864, and took the Christian name Michael after his godfather Emperor Michael III. Through persistent negotiation, he eventually secured an autonomous Bulgarian archbishopric — enough independence to proceed on his own terms.

The most enduring consequence of Bulgaria's conversion was not ecclesiastical but literary. The disciples of Saints Cyril and Methodius — Byzantine missionaries who had created the Glagolitic alphabet for the Slavic peoples — were expelled from Moravia after their patrons' deaths and found refuge in Bulgaria. Clement of Ohrid established a literary school in western Bulgaria; Naum worked at Preslav. From their work, the Cyrillic alphabet was systematized, and the Preslav Literary School produced religious and secular literature in Old Church Slavonic at a scale that turned Bulgaria into the transmission belt of Byzantine civilisation to the Slavic world. Russia, Serbia, and other Orthodox Slavic peoples received Christianity, literacy, and much of their early literary culture through Bulgarian intermediaries.

Boris abdicated in 889 to become a monk, but returned to depose his eldest son Vladimir, who had attempted to reverse the Christianization and restore Bulgar paganism. He installed his younger son Simeon — Constantinople-educated and culturally formidable — as ruler instead, a choice that shaped Bulgaria's subsequent golden age. The Christianization Boris engineered was thus doubly transformative: it inserted Bulgaria into European civilization and, through the vehicle of Cyrillic literacy, made Bulgaria the cultural parent of the Slavic Orthodox world.`,
    figures: ['boris-i-of-bulgaria'],
    sources: ['https://en.wikipedia.org/wiki/Christianization_of_Bulgaria'],
  },
  {
    id: 'fall-of-bulgaria-to-ottomans',
    title: 'The Fall of Bulgaria to the Ottomans',
    date: 1393,
    era: '14th Century (Medieval)',
    century: 14,
    country: 'BG',
    summary: "The fall of Tarnovo in 1393 ended the Second Bulgarian Empire after two centuries of restored independence — beginning nearly five centuries of Ottoman rule that would define Bulgarian national memory.",
    narrative: `The Second Bulgarian Empire, restored from Byzantine rule in 1185 when the brothers Asen and Peter launched a revolt from Tarnovo, had experienced both greatness and fragmentation. Under Ivan Asen II (1218–1241), it dominated the Balkan peninsula, controlling territory from the Adriatic to the Black Sea and striking coins that named him "Tsar of the Bulgarians, Greeks, and Albanians." But the century after his death was one of dynastic conflict, Mongol incursions, and the steady fragmentation of central authority, until the empire had splintered into competing Bulgarian states too weak to resist the new power rising in Anatolia.

The Ottoman Turks crossed into Europe at Gallipoli in 1354 and advanced methodically through the Balkans. The Bulgarian lands were absorbed region by region rather than in a single campaign. Sofia fell in 1382. Tsar Ivan Shishman, ruler of the Tarnovo state, briefly survived by submitting as an Ottoman vassal and placing a daughter in the sultan's harem — humiliating terms that bought only temporary respite. In 1393, Sultan Bayezid I besieged Tarnovo for three months. The city fell in July. Patriarch Evtimiy, the spiritual leader of the Bulgarian resistance, was arrested and sent into exile. The capital of the Bulgarian tsars for two centuries ceased to be Bulgarian.

Ivan Shishman was captured and executed in 1395. The following year, the Battle of Nicopolis crushed the last hope of external rescue: a crusading army assembled by Western powers was catastrophically defeated by Bayezid, eliminating any possibility of relief. The remaining Bulgarian state at Vidin fell in 1422. Bulgaria had entered an Ottoman rule that would last nearly five centuries.

The Ottoman centuries were neither uniformly catastrophic nor devoid of continuity. The millet system granted the Bulgarian Orthodox community religious self-governance, and Bulgarian merchants and craftsmen carved out prosperous niches within the empire's economy. But the landowning and military aristocracy was eliminated or converted, the great medieval cities were transformed, and Bulgarian peasants became tax-paying subjects on land controlled by Ottoman timar-holders. The medieval Bulgarian state, church, and cultural institutions were submerged. Their recovery — and the national memory of what had been lost — would define the Bulgarian National Revival of the eighteenth and nineteenth centuries.`,
    figures: ['patriarch-evtimiy'],
    sources: ['https://en.wikipedia.org/wiki/Second_Bulgarian_Empire'],
  },
  {
    id: 'april-uprising-and-liberation',
    title: 'The April Uprising and Liberation of Bulgaria',
    date: { start: 1876, end: 1878 },
    era: '19th Century (Nationalism)',
    century: 19,
    country: 'BG',
    summary: "The failed April Uprising of 1876 and its brutal suppression provoked European outrage, triggering a Russian-led war that liberated Bulgaria from Ottoman rule — only for the Treaty of Berlin to immediately redraw the map and leave a wound that drove Bulgarian foreign policy for the next half-century.",
    narrative: `The April Uprising of 1876 was the culmination of a Bulgarian national awakening that had been building for over a century. Father Paisius of Hilendar's "History of Slavo-Bulgarians," written in 1762 in a mountaintop monastery, had called on Bulgarians to remember their medieval greatness and resist cultural assimilation — a polemic that circulated in handwritten copies for decades before print became available. The following century saw Bulgarian-language schools established, a Bulgarian Exarchate separated from the Greek Patriarchate in 1870, and a revolutionary underground built by Vasil Levski — the "Apostle of Freedom" — into a clandestine network of committees across the country. When Levski was captured and hanged in Sofia in February 1873, the movement lost its most disciplined organiser, but not its momentum.

The uprising was planned for May 1876 but launched prematurely in April when the organisation was compromised. Rebels seized Koprivshtitsa, Panagyurishte — the uprising's headquarters where the revolt was formally proclaimed — Klisura, Perushtitsa, and Bratsigovo, but were overwhelmed within weeks. The Ottoman response was ferocious: irregular bashi-bazouk forces committed mass atrocities across the Plovdiv region, with the massacre at Batak — where an estimated 3,000–5,000 people were killed in the church and churchyard — becoming the most notorious. The poet Hristo Botev crossed the Danube from Romania with 200 volunteers and died in combat near Vratsa within weeks. The uprising had failed militarily, but its aftermath changed everything.

Reports by the American journalist Januarius MacGahan and the British consul Eugene Schuyler documented the atrocities with precision. William Gladstone published "The Bulgarian Horrors and the Question of the East" in September 1876, a pamphlet that sold 200,000 copies and forced the Disraeli government onto the defensive. European public opinion was inflamed. Russia, with its own strategic interests in weakening the Ottoman Empire, declared war in April 1877. The Russo-Turkish War was decided at two sites: Shipka Pass, where Bulgarian volunteers and Russian troops held the mountain crossing through a brutal winter, and Pleven, where a fortified Ottoman garrison resisted a five-month siege before surrendering. The Russian army crossed the Balkans and advanced toward Constantinople.

The Treaty of San Stefano (March 1878) created a large Bulgarian state encompassing most of the historical Bulgarian lands — a "Big Bulgaria" stretching from the Danube to the Aegean. Britain and Austria-Hungary, alarmed by the expansion of Russian influence in the Balkans, forced a revision at the Congress of Berlin (July 1878), which reduced Bulgaria to a small principality, left Macedonia and Eastern Rumelia outside its borders, and consigned Thrace to continued Ottoman rule. Bulgarians — and Russians — considered Berlin a betrayal. The "San Stefano borders" became a national obsession that drove Bulgarian foreign policy for the next half-century, drawing the country into the Balkan Wars and two World Wars in pursuit of territories that had seemed briefly within reach on the morning of 3 March 1878.`,
    figures: ['vasil-levski', 'hristo-botev'],
    sources: ['https://en.wikipedia.org/wiki/April_uprising_in_Bulgaria', 'https://en.wikipedia.org/wiki/Russo-Turkish_War_(1877%E2%80%931878)'],
  },

  // ── Italy (additional) ────────────────────────────────────────────────────
  {
    id: 'risorgimento',
    title: 'Italian Unification',
    date: { start: 1848, end: 1871 },
    era: '19th Century (Nationalism)',
    century: 19,
    country: 'IT',
    summary: "The Risorgimento unified a peninsula divided for fourteen centuries into a single nation — accomplished through Piedmontese statecraft, Romantic nationalist idealism, and Garibaldi's audacious military adventure.",
    narrative: `The Risorgimento — the "resurgence" — was the political and military movement that unified the Italian peninsula, divided since the fall of the Western Roman Empire, into a single nation-state. It was accomplished within two decades through a combination of Piedmontese statecraft, Romantic nationalist idealism, and military adventure that reads, in retrospect, like an improbable novel.

The 1848 revolutions swept Europe and Italy was no exception: uprisings occurred in Milan, Venice, Palermo, and Rome, where a short-lived Roman Republic was proclaimed under Giuseppe Mazzini. All were suppressed, mostly by Austrian force. The lesson drawn by Count Camillo di Cavour, Prime Minister of Piedmont-Sardinia from 1852, was that Italian unification could not be accomplished through romantic popular uprising alone — it required great power support and diplomatic cunning. Cavour modernised Piedmont's economy, built its railway system, and manoeuvred Piedmont into the Crimean War to establish international standing. He then secretly negotiated with Napoleon III of France: France would support Piedmont militarily against Austria in exchange for Savoy and Nice.

The war of 1859 brought French and Piedmontese forces victories over Austria at Magenta and Solferino. But the most dramatic act belonged to Giuseppe Garibaldi, who with a volunteer force of a thousand red-shirted fighters — the "Expedition of the Thousand" — landed in Sicily in May 1860 and conquered first Sicily, then the Kingdom of Naples, in months, handing these territories to King Victor Emmanuel II. It was the greatest private military adventure of the nineteenth century.

The Kingdom of Italy was proclaimed on 17 March 1861, though Rome (under papal rule protected by French troops) and Venice (Austrian) remained outside. Venice was incorporated after the Austro-Prussian War of 1866. Rome was seized in September 1870 when the Franco-Prussian War compelled France to withdraw its garrison; Italian troops entered through a breach in the Aurelian Wall at Porta Pia. The Pope retreated to the Vatican, declaring himself a "prisoner" — a tension that persisted until the Lateran Treaty of 1929. The phrase attributed to d'Azeglio captured the challenge ahead: "Italy is made; now we must make Italians."`,
    figures: ['giuseppe-garibaldi', 'camillo-di-cavour', 'victor-emmanuel-ii'],
    sources: ['https://en.wikipedia.org/wiki/Italian_unification'],
  },
]
