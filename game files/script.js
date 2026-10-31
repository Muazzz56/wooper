/* ==========================================================================
   WOOPER — daily word ladder, Wordle edition
   --------------------------------------------------------------------------
   • One letter per move, start word  →  goal word.
   • Every accepted word is guaranteed to still be able to reach the goal.
   • 3:30 timer, daily streak tracking, shareable emoji result.
   =*************************************************************************
   The dictionary below is embedded so the game works with no network access.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------ dictionary ------------------------------ */

  const DICT_SRC = "aahed aalii aapas aargh aarti abaca abaci aback abacs abaft abaht abaka abamp aband abase abash abask abate abaya abbas abbed abbes abbey abbot abcee abeam abear abeat abeer abele abeng abers abets abeys abhor abide abies abius abjad abjud abled abler ables ablet ablow abmho abnet abode abohm aboil aboma aboon abord abore aborn abort about above abram abray abrim abrin abris absey absit abuna abune abura aburn abuse abuts abuzz abyes abysm abyss acais acara acari accas accha accoy accra acedy acene acerb acers aceta achar ached acher aches achey achoo acids acidy acies acing acini ackee acker acmes acmic acned acnes acock acoel acold acone acorn acral acred acres acrid acron acros acryl actas acted actin acton actor actus acute acyls adage adapt adats adawn adaws adays adbot addas addax added adder addin addio addle addra adead adeem adept adhan adhoc adieu adios adits adlib adman admen admin admit admix adnex adobe adobo adoon adopt adorb adore adorn adown adoze adrad adraw adred adret adrip adsum aduki adult adunc adust advew advts adyta adyts adzed adzes aecia aedes aeger aegis aeons aerie aeros aesir aevum afald afanc afara afars afear affix affly afion afire afizz aflaj aflap aflow afoam afoot afore afoul afret afrit afros after aftos again agals agama agami agamy agape agars agasp agast agate agaty agave agaze agbas agene agent agers aggag agger aggie aggri aggro aggry aghas agidi agila agile aging agios agism agist agita aglee aglet agley agloo aglow aglus agmas agoge agogo agone agons agony agood agora agree agria agrin agros agrum agued agues aguey aguna agush aguti ahead aheap ahent ahigh ahind ahing ahint ahold ahole ahull ahuru aidas aided aider aides aidoi aidos aiery aigas aight ailed aimag aimak aimed aimer ainee ainga aioli aired airer airns airth airts aisle aitch aitus aiver aixes aiyah aiyee aiyoh aiyoo aizle ajies ajiva ajuga ajupa ajwan akara akees akela akene aking akita akkas akker akoia akoja akoya aksed akses alaap alack alala alamo aland alane alang alans alant alapa alaps alarm alary alata alate alays albas albee albid album alcea alces alcid alcos aldea alder aldol aleak aleck alecs aleem alefs aleft aleph alert alews aleye alfas algae algal algas algid algin algor algos algum alias alibi alick alien alifs align alike alims aline alios alist alive aliya alkie alkin alkos alkyd alkyl allan allay allee allel allen aller alley allin allis allod allot allow alloy allus allyl almah almas almeh almes almud almug alods aloed aloes aloft aloha aloin alone along aloof aloos alose aloud alowe alpha altar alter altho altos alula alums alumy alure alurk alvar alway amahs amain amari amaro amass amate amaut amaze amban amber ambit amble ambos ambry ameba ameer amend amene amens ament amias amice amici amide amido amids amies amiga amigo amine amino amins amirs amiss amity amlas amman ammas ammon ammos amnia amnic amnio amoks amole among amore amort amour amove amowt amped ample amply ampul amrit amuck amuse amyls anana anata ancho ancle ancon andic andro anear anele anent angas angel anger angle anglo angry angst anigh anile anils anima anime animi anion anise anker ankhs ankle ankus anlas annal annan annas annat annex annoy annul annum annus anoas anode anole anomy ansae ansas antae antar antas anted antes antic antis antra antre antsy anura anvil anyon aorta apace apage apaid apart apayd apays apeak apeek apers apert apery apgar aphid aphis apian aping apiol apish apism apnea apode apods apols apoop aport appal appam appay appel apple apply appro appts appui appuy apres apron apses apsis apsos apted apter aptly aquae aquas araba araks arame arars arbah arbas arbor arced archi arcos arcus ardeb ardor ardri aread areae areal arear areas areca aredd arede arefy areic arena arene arepa arere arete arets arett argal argan argil argle argol argon argot argue argus arhat arias ariel ariki arils ariot arise arish arith arked arled arles armed armer armet armil armor arnas arnis arnut aroba aroha aroid aroma arose arpas arpen arrah arras array arret arris arrow arroz arsed arses arsey arsis arson artal artel arter artic artis artly artsy aruhe arums arval arvee arvos aryls asada asana ascon ascot ascus asdic ashed ashen ashes ashet aside asity askar asked asker askew askoi askos aspen asper aspic aspie aspis aspro assai assam assay assed asses asset assez assot aster astir astun asura asway aswim asyla ataps ataxy atigi atilt atimy atlas atman atmas atmos atocs atoke atoks atoll atoms atomy atone atony atopy atria atrip attap attar attas atter attic atuas aucht audad audax audio audit augen auger auges aught augur aulas aulic auloi aulos aumil aunes aunts aunty aurae aural aurar auras aurei aures auric auris aurum autos auxin avail avale avant avast avels avens avers avert avgas avian avine avion avise aviso avize avoid avows avyze await awake award aware awari awarn awash awato awave aways awdls aweel aweto awful awing awkin awmry awned awner awoke awols awork axels axial axile axils axing axiom axion axite axled axles axman axmen axoid axone axons ayahs ayaya ayelp aygre ayins aymag ayont ayres ayrie azans azide azido azine azlon azoic azole azons azote azoth azuki azure azurn azury azygy azyme azyms baaed baals baaps babas babby babel babes babka baboo babul babus bacca bacco baccy bacha bachs backs backy bacne bacon badam baddy badge badly baels baffs baffy bafta bafts bagel baggy baghs bagie bagsy bagua bahts bahus bahut baiks baile bails bairn baisa baith baits baiza baize bajan bajra bajri bajus baked baken baker bakes bakra balas balds baldy baled baler bales balks balky ballo balls bally balms balmy baloi balon baloo balot balsa balti balun balus balut bamas bambi bamma bammy banak banal banco bancs banda bandh bands bandy baned banes bangs bania banjo banks banky banns bants bantu banty bantz banya baons baozi bappu bapus barbe barbs barby barca barde bardo bards bardy bared barer bares barfi barfs barfy barge baric barks barky barms barmy barns barny baron barps barra barre barro barry barye basal basan basas based basen baser bases basha basho basic basij basil basin basis basks bason basse bassi basso bassy basta baste basti basto basts batch bated bates bathe baths batik baton batos batta batts battu batty bauds bauks baulk baurs bavin bawds bawdy bawks bawls bawns bawrs bawty bayas bayed bayer bayes bayle bayou bayts bazar bazas bazoo bball bdays beach beads beady beaks beaky beals beams beamy beano beans beany beard beare bears beast beath beats beaty beaus beaut beaux bebop becap becke becks bedad bedel bedes bedew bedim bedye beech beedi beefs beefy beeps beers beery beets befit befog begad began begar begat begem beget begin begob begot begum begun beige beigy being beins beira beisa bekah belah belar belay belch belee belga belie belit belle belli bello bells belly belon below belts belve bemad bemas bemix bemud bench bends bendy benes benet benga benis benji benne benni benny bento bents benty bepat beray beres beret bergs berko berks berme berms berob berry berth beryl besat besaw besee beses beset besit besom besot besti bests betas beted betel betes beths betid beton betta betty bevan bevel bever bevor bevue bevvy bewdy bewet bewig bezel bezes bezil bezzy bhais bhaji bhang bhats bhava bhels bhoot bhuna bhuts biach biali bialy bibbs bibes bibis bible biccy bicep bices bicky biddy bided bider bides bidet bidis bidon bidri bield biers biffo biffs biffy bifid bigae biggs biggy bigha bight bigly bigos bigot bihon bijou biked biker bikes bikie bikky bilal bilat bilbo bilby biled biles bilge bilgy bilks bills billy bimah bimas bimbo binal bindi binds biner bines binge bingo bings bingy binit binks binky bints biogs biome bions biont biose biota biped bipod bippy birch birdo birds biris birks birle birls biros birrs birse birsy birth birze birzz bises bisks bisom bison bitch biter bites bitey bitos bitou bitsy bitte bitts bitty bivia bivvy bizes bizzo bizzy blabs black blade blads blady blaer blaes blaff blags blahs blain blame blams blanc bland blank blare blart blase blash blast blate blats blatt blaud blawn blaws blays blaze bleah bleak blear bleat blebs blech bleed bleep blees blend blent blert bless blest blets bleys blimp blimy blind bling blini blink blins bliny blips bliss blist blite blits blitz blive bloat blobs block blocs blogs bloke blond blonx blood blook bloom bloop blore blots blown blows blowy blubs blude bluds bludy blued bluer blues bluet bluey bluff bluid blume blunk blunt blurb blurs blurt blush blype boabs boaks board boars boart boast boats boaty bobac bobak bobas bobby bobol bobos bocca bocce bocci boche bocks boded bodes bodge bodgy bodhi bodle bodoh boeps boers boeti boets boeuf boffo boffs bogan bogey boggy bogie bogle bogue bogus bohea bohos boils boing boink boite boked bokeh bokes bokos bolar bolas boldo bolds boles bolet bolix bolks bolls bolos bolts bolus bomas bombe bombo bombs bomoh bomor bonce bonds boned boner bones boney bongo bongs bonie bonks bonne bonny bonum bonus bonza bonze booai booay boobs booby boody booed boofy boogy boohs books booky bools booms boomy boong boons boord boors boose boost booth boots booty booze boozy boppy borak boral boras borax borde bords bored boree borek borel borer bores borgo boric borks borms borna borne boron borts borty bortz bosey bosie bosks bosky bosom boson bossa bossy bosun botas botch boteh botel botes botew bothy botos botte botts botty bouge bough bouks boule boult bound bouns bourd bourg bourn bouse bousy bouts boutu bovid bowat bowed bowel bower bowes bowet bowie bowls bowne bowrs bowse boxed boxen boxer boxes boxla boxty boyar boyau boyed boyey boyfs boygs boyla boyly boyos boysy bozos braai brace brach brack bract brads braes brags brahs braid brail brain brake braks braky brame brand brane brank brans brant brash brass brast brats brava brave bravi bravo brawl brawn braws braxy brays braza braze bread break bream brede breds breed breem breer brees breid breis breme brens brent brere brers breve brews breys briar bribe brick bride brief brier bries brigs briki briks brill brims brine bring brink brins briny brios brise brisk briss brith brits britt brize broad broch brock brods brogh brogs broil broke brome bromo bronc brond brood brook brool broom broos brose brosy broth brown brows bruck brugh bruhs bruin bruit bruja brujo brule brume brung brunt brush brusk brust brute bruts bruvs buats buaze bubal bubas bubba bubbe bubby bubus buchu bucko bucks bucku budas buddy buded budes budge budis budos buena buffa buffe buffi buffo buffs buffy bufos bufty bugan buggy bugle buhls buhrs buiks build built buist bukes bukos bulbs bulge bulgy bulks bulky bulla bulls bully bulse bumbo bumfs bumph bumps bumpy bunas bunce bunch bunco bunde bundh bunds bundt bundu bundy bungs bungy bunia bunje bunjy bunko bunks bunns bunny bunts bunty bunya buoys buppy buran buras burbs burds buret burfi burgh burgs burin burka burke burks burls burly burns burnt buroo burps burqa burra burro burrs burry bursa burse burst busby bused buses bushy busks busky bussu busti busts busty butch buteo butes butle butoh butte butts butty butut butyl buxom buyer buyin buzzy bwana bwazi byded bydes byked bykes bylaw byres byrls byssi bytes byway caaed cabal cabas cabby caber cabin cable cabob caboc cabre cacao cacas cache cacks cacky cacti caddy cadee cades cadet cadge cadgy cadie cadis cadre caeca caese cafes caffe caffs caged cager cages cagey cagot cahow caids cains caird cairn cajon cajun caked cakes cakey calfs calid calif calix calks calla calle calls calms calmy calos calpa calps calve calyx caman camas camel cameo cames camis camos campi campo camps campy camus canal cando candy caned caneh caner canes cangs canid canna canns canny canoe canon canso canst canti canto cants canty capas capax caped caper capes capex caphs capiz caple capon capos capot capri capul caput carap carat carbo carbs carby cardi cards cardy cared carer cares caret carex cargo carks carle carls carne carns carny carob carol carom caron carpe carpi carps carrs carry carse carta carte carts carve carvy casas casco cased caser cases casks casky caste casts casus catch cater cates catty cauda cauks cauld caulk cauls caums caups cauri causa cause cavas caved cavel caver caves cavie cavil cavus cawed cawks caxon cease ceaze cebid cecal cecum cedar ceded ceder cedes cedis ceiba ceili ceils celeb cella celli cello cells celly celom celts cense cento cents centu ceorl cepes cerci cered ceres cerge ceria ceric cerne ceroc ceros certs certy cesse cesta cesti cetes cetyl cezve chaap chaat chace chack chaco chado chads chafe chaff chaft chain chair chais chalk chals champ chams chana chang chank chant chaos chape chaps chapt chara chard chare chark charm charr chars chart chary chase chasm chats chava chave chavs chawk chawl chaws chaya chays cheap cheat cheba check chedi cheeb cheek cheep cheer cheet chefs cheka chela chelp chemo chems chere chert chess chest cheth chevy chews chewy chiao chias chiba chibs chica chich chick chico chics chide chief chiel chiko chiks child chile chili chill chimb chime chimo chimp china chine ching chink chino chins chips chirk chirl chirm chiro chirp chirr chirt chiru chiti chits chiva chive chivs chivy chizz chock choco chocs chode chogs choil choir choke choko choky chola choli cholo chomp chons choof chook choom choon chops chord chore chose choss chota chott chout choux chowk chows chubs chuck chufa chuff chugs chump chums chunk churl churn churr chuse chute chuts chyle chyme chynd cibol cided cider cides ciels cigar ciggy cilia cills cimar cimex cinch cinct cines cinqs cions cippi circa circs cires cirls cirri cisco cissy cists cital cited citee citer cites cives civet civic civie civil civvy clach clack clade clads claes clags claim clair clame clamp clams clang clank clans claps clapt claro clart clary clash clasp class clast clats claut clave clavi claws clays clean clear cleat cleck cleek cleep clefs cleft clegs cleik clems clepe clept clerk cleve clews click clied clies cliff clift climb clime cline cling clink clint clipe clips clipt clits cloak cloam clock clods cloff clogs cloke clomb clomp clone clonk clons cloop cloot clops close clote cloth clots cloud clour clous clout clove clown clows cloye cloys cloze clubs cluck clued clues cluey clump clung clunk clype cnida coach coact coady coala coals coaly coapt coarb coast coate coati coats cobbs cobby cobia coble cobot cobra cobza cocas cocci cocco cocks cocky cocoa cocos cocus codas codec coded coden coder codes codex codon coeds coffs cogie cogon cogue cohab cohen cohoe cohog cohos coifs coign coils coins coirs coits coked cokes cokey colas colby colds coled coles coley colic colin colle colls colly colog colon color colts colza comae comal comas combe combi combo combs comby comer comes comet comfy comic comix comma comme commo comms commy compo comps compt comte comus conch condo coned cones conex coney confs conga conge congo conia conic conin conks conky conne conns conte conto conus convo cooch cooed cooee cooer cooey coofs cooks cooky cools cooly coomb cooms coomy coons coops coopt coost coots cooty cooze copal copay coped copen coper copes copha coppy copra copse copsy coqui coral coram corbe corby corda cords cored corer cores corey corgi coria corks corky corms corni corno corns cornu corny corps corse corso cosec cosed coses coset cosey cosie costa coste costs cotan cotch coted cotes coths cotta cotts couch coude cough could count coupe coups courb courd coure cours court couta couth coved coven cover coves covet covey covin cowal cowan cowed cower cowks cowls cowps cowry coxae coxal coxed coxes coxib coyau coyed coyer coyly coypu cozed cozen cozes cozey cozie craal crabs crack craft crags craic craig crake crame cramp crams crane crank crans crape craps crapy crare crash crass crate crave crawl craws crays craze crazy creak cream credo creds creed creek creel creep crees crein crema creme crems crena crepe creps crept crepy cress crest crewe crews crias cribo cribs crick cried crier cries crime crimp crims crine crink crins crios cripe crips crise crisp criss crith crits croak croci crock crocs croft crogs cromb crome crone cronk crons crony crook crool croon crops crore cross crost croup crout crowd crowl crown crows croze cruck crude crudo cruds crudy cruel crues cruet cruft crumb crump crunk cruor crura cruse crush crust crusy cruve crwth cryer cryne crypt ctene cubby cubeb cubed cuber cubes cubic cubit cucks cudda cuddy cueca cuffo cuffs cuifs cuing cuish cuits cukes culch culet culex culls cully culms culpa culti cults culty cumec cumin cundy cunei cunit cunny cunts cupel cupid cuppa cuppy cupro curat curbs curch curds curdy cured curer cures curet curfs curia curie curio curli curls curly curns curny currs curry curse cursi curst curve curvy cusec cushy cusks cusps cuspy cusso cusum cutch cuter cutes cutey cutie cutin cutis cutto cutty cutup cuvee cuzes cwtch cyano cyans cyber cycad cycas cycle cyclo cyder cylix cymae cymar cymas cymes cymol cynic cysts cytes cyton czars daals dabba daces dacha dacks dadah dadas daddy dadis dadla dados daffs daffy dagga daggy dagos dahis dahls daiko daily daine daint dairy daisy daker daled dalek dales dalis dalle dally dalts daman damar dames damme damna damns damps dampy dance dancy danda dandy dangs danio danks danny danse dants dappy daraf darbs darcy dared darer dares darga dargs daric daris darks darky darls darns darre darts darzi dashi dashy datal dated dater dates datil datos datto datum daube daubs dauby dauds dault daunt daurs dauts daven davit dawah dawds dawed dawen dawgs dawks dawns dawts dayal dayan daych daynt dazed dazer dazes dbags deads deair deals dealt deans deare dearn dears deary deash death deave deaws deawy debag debar debby debel debes debit debts debud debug debur debus debut debye decad decaf decal decan decay decim decko decks decor decos decoy decry decyl dedal deeds deedy deely deems deens deeps deere deers deets deeve deevs defat defer deffo defis defog degas degum degus deice deids deify deign deils deink deism deist deity deked dekes dekko delay deled deles delfs delft delis della dells delly delos delph delta delts delve deman demes demic demit demob demoi demon demos demot dempt demur denar denay dench denes denet denim denis dense dente dents deoch deoxy depot depth derat deray derby dered deres derig derma derms derns derny deros derpy derro derry derth dervs desex deshi desis desks desse detag deter detox deuce devas devel devil devis devon devos devot dewan dewar dewax dewed dexes dexie dexys dhaba dhaks dhals dhikr dhobi dhole dholl dhols dhoni dhoti dhows dhuti diact dials diana diane diary diazo dibbs diced dicer dices dicey dicht dicks dicky dicot dicta dicto dicts dictu dicty diddy didie didis didos didst diebs diels diene diets diffs dight digit dikas diked diker dikes dikey dildo dilli dills dilly dimbo dimer dimes dimly dimps dinar dined diner dines dinge dingo dings dingy dinic dinks dinky dinlo dinna dinos dints dioch diode diols diota dippy dipso diram direr dirge dirke dirks dirls dirts dirty disas disci disco discs dishy disks disme dital ditas ditch dited dites ditsy ditto ditts ditty ditzy divan divas dived diver dives divey divis divna divos divot divvy diwan dixie dixit diyas dizen dizzy djinn djins doabs doats dobby dobes dobie dobla doble dobra dobro docht docks docos docus doddy dodge dodgy dodos doeks doers doest doeth doffs dogal dogan doges dogey doggo doggy dogie dogly dogma dohyo doilt doily doing doits dojos dolce dolci doled dolee doles doley dolia dolie dolls dolly dolma dolor dolos dolts domal domed domes domic donah donas donee doner donga dongs donko donna donne donny donor donsy donut doobs dooce doody doofs dooks dooky doole dools dooly dooms doomy doona doorn doors doozy dopas doped doper dopes dopey doppe dorad dorba dorbs doree dores doric doris dorje dorks dorky dorms dormy dorps dorrs dorsa dorse dorts dorty dosai dosas dosed doseh doser doses dosha dotal doted doter dotes dotty douar doubt douce doucs dough douks doula douma doums doups doura douse douts doved doven dover doves dovie dowak dowar dowds dowdy dowed dowel dower dowfs dowie dowle dowls dowly downa downs downy dowps dowry dowse dowts doxed doxes doxie doyen doyly dozed dozen dozer dozes drabs drack draco draff draft drags drail drain drake drama drams drank drant drape draps drapy drats drave drawl drawn draws drays dread dream drear dreck dreed dreer drees dregs dreks drent drere dress drest dreys dribs drice dried drier dries drift drill drily drink drips dript drive drock droid droil droit droke drole droll drome drone drony droob droog drook drool droop drops dropt dross drouk drove drown drows drubs drugs druid drums drunk drupe druse drusy druxy dryad dryas dryer dryly dsobo dsomo duads duals duans duars dubbo dubby ducal ducat duces duchy ducks ducky ducti ducts duddy duded dudes duels duets duett duffs dufus duing duits dukas duked dukes dukka dukun dulce dules dulia dulls dully dulse dumas dumbo dumbs dumka dumky dummy dumps dumpy dunam dunce dunch dunes dungs dungy dunks dunno dunny dunsh dunts duomi duomo duped duper dupes duple duply duppy dural duras dured dures durgy durns duroc duros duroy durra durrs durry durst durum durzi dusks dusky dusts dusty dutch duvet duxes dwaal dwale dwalm dwams dwamy dwang dwarf dwaum dweeb dwell dwelt dwile dwine dyads dyers dying dyked dykes dykey dykon dynel dynes dynos dzhos eager eagle eagly eagre ealed eales eaned eards eared earls early earns earnt earst earth eased easel easer eases easle easts eaten eater eathe eatin eaved eaver eaves ebank ebbed ebbet ebena ebene ebike ebons ebony ebook ecads ecard ecash eched eches echos ecigs eclat ecole ecrus edema edged edger edges edict edify edile edits educe educt eejit eensy eerie eeven eever eevns effed effer efits egads egers egest eggar egged egger egmas egret ehing eider eidos eight eigne eiked eikon eilds eiron eisel eject ejido ekdam eking ekkas elain eland elans elate elbow elchi elder eldin elect eleet elegy elemi elfed elfin eliad elide elint elite elmen eloge elogy eloin elope elops elpee elsin elude elute elvan elven elver elves emacs email embar embay embed ember embog embow embox embus emcee emeer emend emerg emery emeus emics emirs emits emmas emmer emmet emmew emmys emoji emong emote emove empts empty emule emure emyde emyds enact enarm enate ended ender endew endow endue enema enemy enews enfix eniac enjoy enlit enmew ennog ennui enoki enols enorm enows enrol ensew ensky ensue enter entia entre entry enure enurn envoi envoy enzym eolid eorls eosin epact epees epena epene ephah ephas ephod ephor epics epoch epode epopt epoxy eppie epris equal eques equid equip erase erbia erect erevs ergon ergos ergot erhus erica erick erics ering erned ernes erode erose erred error erses eruct erugo erupt eruvs erven ervil escar escot esile eskar esker esnes esrog essay esses ester estoc estop estro etage etape etats etens ethal ether ethic ethne ethos ethyl etics etnas etrog ettin ettle etude etuis etwee etyma eughs euked eupad euros eusol evade evegs evens event evert every evets evhoe evict evils evite evohe evoke ewers ewest ewhow ewked exact exalt exams excel exeat execs exeem exeme exert exfil exier exies exile exine exing exist exite exits exode exome exons expat expel expos extol extra exude exuls exult exurb eyass eyers eying eyots eyras eyres eyrie eyrir ezine fabbo fabby fable faced facer faces facet facey facia facie facta facto facts facty faddy faded fader fades fadge fados faena faery faffs faffy faggy fagin fagot faiks fails faine fains faint faire fairs fairy faith faked faker fakes fakey fakie fakir falaj fales falls false falsy famed fames fanal fancy fands fanes fanga fango fangs fanks fanny fanon fanos fanum faqir farad farce farci farcy fards fared farer fares farle farls farms faros farro farse farts fasci fasti fasts fatal fated fates fatly fatso fatty fatwa fauch faugh fauld fault fauna fauns faurd faute fauts fauve favas favel faver faves favor favus fawns fawny faxed faxes fayed fayer fayne fayre fazed fazes feals feard feare fears feart fease feast feats feaze fecal feces fecht fecit fecks fedai fedex feebs feeds feels feely feens feers feese feeze fehme feign feint feist felch felid felix fella fells felly felon felts felty femal femes femic femme femmy femur fence fends fendy fenis fenks fenny fents feods feoff feral ferer feres feria ferly fermi ferms ferns ferny ferox ferry fesse festa fests festy fetal fetas fetch feted fetes fetid fetor fetta fetts fetus fetwa feuar feuds feued fever fewer feyed feyer feyly fezes fezzy fiars fiats fiber fibre fibro fices fiche fichu ficin ficos ficta ficus fides fidge fidos fidus fiefs field fiend fient fiere fieri fiers fiery fiest fifed fifer fifes fifis fifth fifty figgy fight figos fiked fikes filar filch filed filer files filet filii filks fille fillo fills filly filmi films filmy filon filos filth filum final finca finch finds fined finer fines finis finks finny finos fiord fiqhs fique fired firer fires firie firks firma firms firni firns firry first firth fiscs fisho fishy fisks fists fisty fitch fitly fitna fitte fitts fiver fives fixed fixer fixes fixie fixit fizzy fjeld fjord flabs flack flaff flags flail flair flake flaks flaky flame flamm flams flamy flane flank flans flaps flare flary flash flask flats flava flawn flaws flawy flaxy flays fleam fleas fleck fleek fleer flees fleet flegs fleme flesh fleur flews flexi flexo fleys flick flics flied flier flies flimp flims fling flint flips flirs flirt flisk flite flits flitt float flobs flock flocs floes flogs flong flood floor flops flora flore flors flory flosh floss flota flote flour flout flown flows flowy flubs flued flues fluey fluff fluid fluke fluky flume flump flung flunk fluor flurr flush flute fluty fluyt flyby flyer flyin flype flyte fnarr foals foams foamy focal focus foehn fogey foggy fogie fogle fogos fogou fohns foids foils foins foist folds foley folia folic folie folio folks folky folly fomes fonda fonds fondu fones fonio fonly fonts foods foody fools foots footy foram foray forbs forby force fordo fords forel fores forex forge forgo forks forky forma forme forms forte forth forts forty forum forza forze fossa fosse fouat fouds fouer fouet foule fouls found fount fours fouth fovea fowls fowth foxed foxes foxie foyer foyle foyne frabs frack fract frags frail fraim frais frame franc frank frape fraps frass frate frati frats fraud fraus frays freak freed freer frees freet freit fremd frena freon frere fresh frets friar fribs fried frier fries frigs frill frise frisk frist frita frite frith frits fritt fritz frize frizz frock froes frogs fromm frond frons front froom frore frorn frory frosh frost froth frown frows frowy froyo froze frugs fruit frump frush frust fryer fubar fubby fubsy fucks fucus fuddy fudge fudgy fuels fuero fuffs fuffy fugal fuggy fugie fugio fugis fugle fugly fugue fugus fujis fulla fulls fully fulth fulwa fumed fumer fumes fumet funda fundi fundo funds fundy fungi fungo fungs funic funis funks funky funny funsy funts fural furan furca furls furol furor furos furrs furry furth furze furzy fused fusee fusel fuses fusil fusks fussy fusts fusty futon fuzed fuzee fuzes fuzil fuzzy fyces fyked fykes fyles fyrds fytte gabba gabby gable gaddi gades gadge gadgy gadid gadis gadje gadjo gadso gaffe gaffs gaged gager gages gaids gaily gains gairs gaita gaits gaitt gajos galah galas galax galea galed gales galia galis galls gally galop galut galvo gamas gamay gamba gambe gambo gambs gamed gamer games gamey gamic gamin gamma gamme gammy gamps gamut ganch gandy ganef ganev gangs ganja ganks ganof gants gaols gaped gaper gapes gapos gappy garam garba garbe garbo garbs garda garde gares garis garms garni garre garri garth garum gases gashy gasps gaspy gassy gasts gatch gated gater gates gaths gator gauch gaucy gauds gaudy gauge gauje gault gaums gaumy gaunt gaups gaurs gauss gauze gauzy gavel gavot gawcy gawds gawks gawky gawps gawsy gayal gayer gayly gazal gazar gazed gazer gazes gazon gazoo geals geans geare gears geasa geats gebur gecko gecks geeks geeky geeps geese geest geist geits gelds gelee gelid gelly gelts gemel gemma gemmy gemot genae genal genas genes genet genic genie genii genin genio genip genny genoa genom genre genro gents genty genua genus geode geoid gerah gerbe geres gerle germs germy gerne gesse gesso geste gests getas getup geums geyan geyer ghast ghats ghaut ghazi ghees ghest ghost ghoul ghusl ghyll giant gibed gibel giber gibes gibli gibus giddy gifts gigas gighe gigot gigue gilas gilds gilet gilia gills gilly gilpy gilts gimel gimme gimps gimpy ginch ginga ginge gings ginks ginny ginzo gipon gippo gippy gipsy girds girlf girls girly girns giron giros girrs girsh girth girts gismo gisms gists gitch gites giust gived given giver gives gizmo glace glade glads glady glaik glair glamp glams gland glans glare glary glass glatt glaum glaur glaze glazy gleam glean gleba glebe gleby glede gleds gleed gleek glees gleet gleis glens glent gleys glial glias glibs glide gliff glift glike glime glims glint glisk glits glitz gloam gloat globe globi globs globy glode glogg gloms gloom gloop glops glory gloss glost glout glove glows glowy gloze glued gluer glues gluey glugg glugs glume glums gluon glute gluts glyph gnapi gnarl gnarr gnars gnash gnats gnawn gnaws gnome gnows goads goafs goaft goals goary goats goaty goave goban gobar gobbe gobbi gobbo gobby gobis gobos godet godly godso goels goers goest goeth goety gofer goffs gogga gogos goier going gojis gokes golds goldy golem goles golfs golly golpe golps gombo gomer gompa gonad gonch gonef goner gongs gonia gonif gonks gonna gonof gonys gonzo gooby goodo goods goody gooey goofs goofy googs gooks gooky goold gools gooly goomy goons goony goops goopy goors goory goose goosy gopak gopik goral goras goray gorbs gordo gored gores gorge goris gorms gormy gorps gorse gorsy gosht gosse gotch goths gothy gotta gouch gouge gouks goura gourd gouts gouty goved goves gowan gowds gowfs gowks gowls gowns goxes goyim goyle graal grabs grace grade grads graff graft grail grain graip grama grame gramp grams grana grand grano grans grant grape graph grapy grasp grass grata grate grats grave gravs gravy grays graze great grebe grebo grece greed greek green grees greet grege grego grein grens greps grese greve grews greys grice gride grids grief griff grift grigs grike grill grime grimy grind grins griot gripe grips gript gripy grise grist grisy grith grits grize groan groat grody grogs groin groks groma groms grone groof groom grope gross grosz grots grouf group grout grove grovy growl grown grows grrls grrrl grubs grued gruel grues grufe gruff grume grump grund grunt gryce gryde gryke grype grypt guaco guana guano guans guard guars guava gubba gucks gucky gudes guess guest guffs gugas guggl guide guido guids guild guile guilt guimp guiro guise gulab gulag gular gulas gulch gules gulet gulfs gulfy gulls gully gulph gulps gulpy gumbo gumma gummi gummy gumps gunas gundi gundy gunge gungy gunks gunky gunny guppy guqin gurdy gurge gurks gurls gurly gurns gurry gursh gurus gushy gusla gusle gusli gussy gusto gusts gusty gutsy gutta gutty guyed guyle guyot guyse gwine gyals gyans gybed gybes gyeld gymps gynae gynie gynny gynos gyoza gypes gypos gyppo gyppy gypsy gyral gyred gyres gyron gyros gyrus gytes gyved gyver gyves haafs haars haats habit hable habus hacek hacks hacky hadal haded hades hadji hadst haems haere haets haffs hafiz hafta hafts haggs haham hahas haick haika haiks haiku hails haily hains haint hairs hairy haith hajes hajis hajji hakam hakas hakea hakes hakim hakus halal haldi haled haler hales halfa halfs halid hallo halls halma halms halon halos halse halsh halts halva halve halwa hamal hamba hamed hamel hames hammy hamza hanap hance hanch handi hands handy hangi hangs hanks hanky hansa hanse hants haole haoma hapas hapax haply happi happy hapus haram hards hardy hared harem hares harim harks harls harms harns haros harps harpy harry harsh harts hashy hasks hasps hasta haste hasty hatch hated hater hates hatha hathi hatty hauds haufs haugh haugo hauld haulm hauls hault hauns haunt hause haute havan havel haven haver haves havoc hawed hawks hawms hawse hayed hayer hayey hayle hazan hazed hazel hazer hazes hazle heads heady heald heals heame heaps heapy heard heare hears heart heast heath heats heaty heave heavy heben hebes hecht hecks heder hedge hedgy heeds heedy heels heeze hefte hefts hefty heiau heids heigh heils heirs heist hejab hejra heled heles helio helix hella hello hells helly helms helos helot helps helve hemal hemes hemic hemin hemps hempy hence hench hends henge henna henny henry hents hepar herbs herby herds heres herls herma herms herns heron heros herps herry herse hertz herye hesps hests hetes heths heuch heugh hevea hevel hewed hewer hewgh hexad hexed hexer hexes hexyl heyed hiant hibas hicks hided hider hides hiems hifis highs hight hijab hijra hiked hiker hikes hikoi hilar hilch hillo hills hilly hilsa hilts hilum hilus himbo hinau hinds hinge hings hinky hinny hints hiois hiped hiper hipes hiply hippo hippy hired hiree hirer hires hissy hists hitch hithe hived hiver hives hizen hoach hoaed hoagy hoard hoars hoary hoast hobby hobos hocks hocus hodad hodja hoers hogan hogen hoggs hoghs hogoh hogos hohed hoick hoied hoiks hoing hoise hoist hokas hoked hokes hokey hokis hokku hokum holds holed holes holey holks holla hollo holly holme holms holon holos holts homas homed homer homes homey homie homme homos honan honda honds honed honer hones honey hongi hongs honks honky honor hooch hoods hoody hooey hoofs hoogo hooha hooka hooks hooky hooly hoons hoops hoord hoors hoosh hoots hooty hoove hopak hoped hoper hopes hoppy horah horal horas horde horis horks horme horns horny horse horst horsy hosed hosel hosen hoser hoses hosey hosta hosts hotch hotel hoten hotis hotly hotte hotty houff houfs hough hound houri hours house houts hovea hoved hovel hoven hover hoves howay howbe howdy howes howff howfs howks howls howre howso howto hoxed hoxes hoyas hoyed hoyle hubba hubby hucks hudna hudud huers huffs huffy huger huggy huhus huias huies hukou hulas hules hulks hulky hullo hulls hully human humas humfs humic humid humor humph humps humpy humus hunch hundo hunks hunky hunts hurds hurls hurly hurra hurry hurst hurts hurty hushy husks husky husos hussy hutch hutia huzza huzzy hwyls hydel hydra hydro hyena hyens hygge hying hykes hylas hyleg hyles hylic hymen hymns hynde hyoid hyped hyper hypes hypha hyphy hypos hyrax hyson hythe iambi iambs ibrik icers iched iches ichor icier icily icing icker ickle icons ictal ictic ictus idant iddah iddat iddut ideal ideas idees ident idiom idiot idled idler idles idlis idola idols idyll idyls iftar igapo igged igloo iglus ignis ihram iiwis ikans ikats ikons ileac ileal ileum ileus iliac iliad ilial ilium iller illth image imago imagy imams imari imaum imbar imbed imbos imbue imide imido imids imine imino imlis immew immit immix imped impel impis imply impot impro imshi imshy inane inapt inarm inbox inbye incas incel incle incog incur incus incut indew index india indie indol indow indri indue inept inerm inert infer infix infos infra ingan ingle ingot inion inked inker inkle inlay inlet inned inner innie innit inorb input inros inrun insee inset inspo intel inter intil intis intra intro inula inure inurn inust invar inver inwit iodic iodid iodin ionic ioras iotas ippon irade irate irids iring irked iroko irone irons irony isbas ishes isled isles islet isnae issei issue istle itchy items ither ivied ivies ivory ixias ixnay ixora ixtle izard izars izzat jaaps jabot jacal jacet jacks jacky jaded jades jafas jaffa jagas jager jaggs jaggy jagir jagra jails jaker jakes jakey jakie jalap jaleo jalop jambe jambo jambs jambu james jammy jamon jamun janes janky janns janny janty japan japed japer japes jarks jarls jarps jarta jarul jasey jaspe jasps jatha jatis jatos jauks jaune jaunt jaups javas javel jawan jawed jawns jaxie jazzy jeans jeats jebel jedis jeels jeely jeeps jeera jeers jeeze jefes jeffs jehad jehus jelab jello jells jelly jembe jemmy jenny jeons jerid jerks jerky jerry jesse jessy jests jesus jetee jetes jeton jetty jeune jewed jewel jewie jhala jheel jhils jiaos jibba jibbs jibed jiber jibes jiffs jiffy jiggy jigot jihad jills jilts jimmy jimpy jingo jings jinks jinne jinni jinns jirds jirga jirre jisms jitis jitty jived jiver jives jivey jnana jobed jobes jocko jocks jocky jocos jodel joeys johns joins joint joist joked joker jokes jokey jokol joled joles jolie jollo jolls jolly jolts jolty jomon jomos jones jongs jonty jooks joram jorts jorum jotas jotty jotun joual jougs jouks joule jours joust jowar jowed jowls jowly joyed jubas jubes jucos judas judge judgy judos jugal jugum juice juicy jujus juked jukes jukus julep julia jumar jumbo jumby jumps jumpy junco junks junky junta junto jupes jupon jural jurat jurel jures juris juror juste justs jutes jutty juves juvie kaama kabab kabar kabob kacha kacks kadai kades kadis kafir kagos kagus kahal kaiak kaids kaies kaifs kaika kaiks kails kaims kaing kains kajal kakas kakis kalam kalas kales kalif kalis kalpa kalua kamas kames kamik kamis kamme kanae kanal kanas kanat kandy kaneh kanes kanga kangs kanji kants kanzu kaons kapai kapas kapha kaphs kapok kapow kappa kapur kapus kaput karai karas karat karee karez karks karma karns karoo karos karri karst karsy karts karzy kasha kasme katal katas katis katti kaugh kauri kauru kaury kaval kavas kawas kawau kawed kayak kayle kayos kazis kazoo kbars kcals keaki kebab kebar kebob kecks kedge kedgy keech keefs keeks keels keema keeno keens keeps keets keeve kefir kehua keirs kelep kelim kells kelly kelps kelpy kelts kelty kembo kembs kemps kempt kempy kenaf kench kendo kenos kente kents kepis kerbs kerel kerfs kerky kerma kerne kerns keros kerry kerve kesar kests ketas ketch ketes ketol kevel kevil kexes keyed keyer khadi khads khafs khaki khana khans khaph khats khaya khazi kheda kheer kheth khets khirs khoja khors khoum khuds khula khyal kiaat kiack kiaki kiang kiasu kibbe kibbi kibei kibes kibla kicks kicky kiddo kiddy kidel kideo kidge kiefs kiers kieve kievs kight kikay kikes kikoi kiley kilig kilim kills kilns kilos kilps kilts kilty kimbo kimet kinas kinda kinds kindy kines kings kingy kinin kinks kinky kinos kiore kiosk kipah kipas kipes kippa kipps kipsy kirby kirks kirns kirri kisan kissy kists kitab kited kiter kites kithe kiths kitke kitty kitul kivas kiwis klang klaps klett klick klieg kliks klong kloof kluge klutz knack knags knaps knarl knars knaur knave knawe knead kneed kneel knees knell knelt knick knife knish knits knive knobs knock knoll knoop knops knosp knots knoud knout knowd knowe known knows knubs knule knurl knurr knurs knuts koala koans koaps koban kobos koels koffs kofta kogal kohas kohen kohls koine koiwi kojis kokam kokas koker kokra kokum kolas kolos kombi kombu konbu kondo konks kooks kooky koori kopek kophs kopje koppa korai koran koras korat kores koris korma koros korun korus koses kotch kotos kotow koura kraal krabs kraft krais krait krang krans kranz kraut krays kreef kreen kreep kreng krewe krill kriol krona krone kroon krubi krump krunk ksars kubie kudos kudus kudzu kufis kugel kuias kukri kukus kulak kulan kulas kulfi kumis kumys kunas kunds kuris kurre kurta kurus kusso kusti kutai kutas kutch kutis kutus kuyas kuzus kvass kvell kwaai kwela kwink kwirl kyack kyaks kyang kyars kyats kybos kydst kyles kylie kylin kylix kyloe kynde kynds kypes kyrie kytes kythe kyudo laarf laari labda label labia labis labne labor labra laccy laced lacer laces lacet lacey lacis lacka lacks lacky laddu laddy laded ladee laden lader lades ladle ladoo laers laevo lagan lagar lager laggy lahal lahar laich laics laide laids laigh laika laiks laird lairs lairy laith laity laked laker lakes lakhs lakin laksa laldy lalls lamas lambs lamby lamed lamer lames lamia lammy lamps lanai lanas lance lanch lande lands laned lanes lanks lanky lants lapas lapel lapin lapis lapje lappa lappy lapse larch lards lardy laree lares larfs larga large largo laris larks larky larns larnt larum larva lased laser lases lassi lasso lassu lassy lasts latah latch lated laten later latex lathe lathi laths lathy latke latte latus lauan lauch laude lauds laufs laugh laund laura laval lavas laved laver laves lavra lavvy lawed lawer lawin lawks lawns lawny lawsy laxed laxer laxes laxly layby layed layer layin layup lazar lazed lazes lazos lazzi lazzo leach leads leady leafs leafy leaks leaky leams leans leant leany leaps leapt leare learn lears leary lease leash least leats leave leavy leaze leben leccy leche ledes ledge ledgy ledum leear leech leeks leeps leers leery leese leets leeze lefte lefts lefty legal leger leges legge leggo leggy legit legno lehrs lehua leirs leish leman lemed lemel lemes lemma lemme lemon lemur lends lenes lengs lenis lenos lense lenti lento leone lepak leper lepid lepra lepta lered leres lerps lesbo leses lesos lests letch lethe letty letup leuch leuco leuds leugh levas levee level lever leves levin levis lewis lexes lexis lezes lezza lezzo lezzy liana liane liang liard liars liart libel liber libor libra libre libri licet lichi licht licit licks lidar lidos liefs liege liens liers lieus lieve lifer lifes lifey lifts ligan liger ligge light ligne liked liken liker likes likin lilac lills lilos lilts lilty liman limas limax limba limbi limbo limbs limby limed limen limes limey limit limma limns limos limpa limps linac linch linds lindy lined linen liner lines liney linga lingo lings lingy linin links linky linns linny linos lints linty linum linux lions lipas lipes lipid lipin lipos lippy liras lirks lirot lises lisks lisle lisps lists litai litas lited litem liter lites lithe litho liths litie litre lived liven liver lives livid livor livre liwaa liwas llama llano loach loads loafs loams loamy loans loast loath loave lobar lobby lobed lobes lobos lobus local loche lochs lochy locie locis locks locky locos locum locus loden lodes lodge loess lofts lofty logan loges loggy logia logic logie login logoi logon logos lohan loids loins loipe loirs lokes lokey lokum lolas loled lollo lolls lolly lolog lolos lomas lomed lomes loner longa longe longs looby looed looey loofa loofs looie looks looky looms loons loony loops loopy loord loose loots loped loper lopes loppy loral loran lords lordy lorel lores loric loris lorry losed losel losen loser loses lossy lotah lotas lotes lotic lotos lotsa lotta lotte lotto lotus loued lough louie louis louma lound louns loupe loups loure lours loury louse lousy louts lovat loved lovee lover loves lovey lovie lowan lowed lowen lower lowes lowly lownd lowne lowns lowps lowry lowse lowth lowts loxed loxes loyal lozen luach luaus lubed lubes lubra luces lucid lucks lucky lucre ludes ludic ludos luffa luffs luged luger luges lulls lulus lumas lumbi lumen lumme lummy lumps lumpy lunar lunas lunch lunes lunet lunge lungi lungs lunks lunts lupin lupus lurch lured lurer lures lurex lurgi lurgy lurid lurks lurry lurve luser lushy lusks lusts lusty lusus lutea luted luter lutes luvvy luxed luxer luxes lweis lyams lyard lyart lyase lycea lycee lycra lying lymes lymph lynch lynes lyres lyric lysed lyses lysin lysis lysol lyssa lyted lytes lythe lytic lytta maaed maare maars maban mabes macas macaw macca maced macer maces mache machi macho machs macka macks macle macon macro macte madal madam madar maddy madge madid madly mados madre maedi maerl mafia mafic mafts magas mages maggs magic magma magna magot magus mahal mahem mahis mahoe mahrs mahua mahwa maids maiko maiks maile maill mailo mails maims mains maire mairs maise maist maize majas majat majoe major majos makaf makai makan makar makee maker makes makie makis makos malae malai malam malar malas malax maleo males malic malik malis malky malls malms malmy malts malty malus malva malwa mamak mamas mamba mambo mambu mamee mamey mamie mamil mamma mammy manas manat mandi mands mandy maneb maned maneh manes manet manga mange mangi mango mangs mangy mania manic manie manis manks manky manly manna manny manoa manor manos manse manso manta mante manto mants manty manul manus manzo mapau mapes maple mapou mappy maqam maqui marae marah maral maran maras maray march marcs mards mardy mares marga marge margo margs maria marid maril marka marks marle marls marly marma marms maron maror marra marri marry marse marsh marts marua marvy masas mased maser mases masha mashy masks mason massa masse massy masts masty masur masus masut matai match mated mater mates matey mathe maths matin matlo matra matsu matte matts matty matza matzo mauby mauds mauka maula mauls maums maumy maund maunt mauri mausy mauts mauve mauvy mauzy maven mavie mavin mavis mawed mawks mawky mawla mawns mawps mawrs maxed maxes maxim maxis mayan mayas maybe mayed mayor mayos mayst mazac mazak mazar mazas mazed mazel mazer mazes mazet mazey mazut mbari mbars mbila mbira mbret mbube mbuga meads meake meaks meals mealy meane means meant meany meare mease meath meats meaty mebbe mebos mecca mecha mechs mecks mecum medal media medic medii medin medle meech meeds meeja meeps meers meets meffs meids meiko meils meins meint meiny meism meith mekka melam melas melba melch melds melee meles melic melik mells meloe melon melos melts melty memes memic memos menad mence mends mened menes menge mengs menil mensa mense mensh menta mento ments menus meous meows merch mercs mercy merde merds mered merel merer meres merge meril meris merit merks merle merls merry merse mersk mesad mesal mesas mesca mesel mesem meses meshy mesia mesic mesne meson messy mesto mesyl metal metas meted meteg metel meter metes methi metho meths methy metic metif metis metol metre metro metta meums meuse meved meves mewed mewls meynt mezes mezza mezze mezzo mgals mhorr miais miaou miaow miasm miaul micas miche michi micht micks micky micos micra micro middy midge midgy midis midst miens mieux mieve miffs miffy mifty miggs might migma migod mihas mihis mikan miked mikes mikos mikra mikva milch milds miler miles milfs milia milko milks milky mille mills milly milor milos milpa milts milty miltz mimed mimeo mimer mimes mimic mimis mimsy minae minar minas mince mincy mindi minds mined miner mines minge mingi mings mingy minim minis minke minks minny minor minos minse mints minty minus minxy miraa mirah mirch mired mires mirex mirid mirin mirkn mirks mirky mirls mirly miros mirrl mirrs mirth mirvs mirza misal misch misdo miser mises misgo misky misls misos missa missy misto mists misty mitas mitch miter mites mitey mitie mitis mitre mitry mitta mitts mivey mivvy mixed mixen mixer mixes mixie mixis mixte mixup miyas mizen mizes mizzy mmkay mneme moais moaky moals moana moans moany moars moats mobby mobed mobee mobes mobey mobie moble mobos mocap mocha mochi mochs mochy mocks mocky mocos mocus modal model modem moder modes modge modii modin modoc modom modus moeni moers mofos mogar mogas moggy mogos mogra mogue mogul mohar mohel mohos mohrs mohua mohur moile moils moira moire moist moits moity mojos moker mokes mokey mokis mokky mokos mokus molal molar molas molds moldy moled moler moles moley molie molla molle mollo molls molly moloi molos molto molts molue molvi molys momes momie momma momme mommy momos mompe momus monad monal monas monde mondo moner money mongo mongs monic monie monks monos monpe monte month monty moobs mooch moods moody mooed mooey mooks moola mooli mools mooly moong mooni moons moony moops moors moory moose mooth moots moove moped moper mopes mopey moppy mopsy mopus morae morah moral moran moras morat moray moree morel mores morgy moria morin mormo morna morne morns moron moror morph morra morro morse morts moruk mosed moses mosey mosks mosso mossy moste mosto mosts moted motel moten motes motet motey moths mothy motif motis moton motor motte motto motts motty motus motza mouch moues moufs mould moule mouls moult mouly mound mount moups mourn mouse moust mousy mouth moved mover moves movie mowas mowed mower mowie mowra moxas moxie moyas moyle moyls mozed mozes mozos mpret mrads msasa mtepe mucho mucic mucid mucin mucko mucks mucky mucor mucro mucus mudar muddy mudge mudif mudim mudir mudra muffs muffy mufti mugga muggs muggy mugho mugil mugos muhly muids muils muirs muiry muist mujik mukim mukti mulai mulch mulct muled mules muley mulga mulie mulla mulls mulse mulsh mumbo mumms mummy mumph mumps mumsy mumus munch munds mundu munga munge mungi mungo mungs mungy munia munis munja munjs munts muntu muons mural muras mured mures murex murgh murgi murid murks murky murls murly murra murre murri murrs murry murth murti muruk murva musar musca mused musee muser muses muset musha mushy music musit musks musky musos musse mussy musta musth musts musty mutas mutch muted muter mutes mutha mutic mutis muton mutti mutts mutum muvva muxed muxes muzak muzzy mvula mvule mvuli myall myals mylar mynah mynas myoid myoma myons myope myops myopy myrrh mysid mysie mythi myths mythy myxos mzees naams naans naats nabam nabby nabes nabis nabks nabla nabob nache nacho nacre nadas nadir naeve naevi naffs nagar nagas nages naggy nagor nahal naiad naibs naice naids naieo naifs naiks nails naily nains naios naira nairu naive najib nakas naked naker nakfa nalas naled nalla namad namak namaz named namer names namma namus nanas nance nancy nandu nanna nanny nanos nante nanti nanto nants nanty nanua napas naped napes napoh napoo nappa nappe nappy naras narco narcs nards nares naric naris narks narky narod narra narre nasal nashi nasho nasis nason nasty nasus natak natal natch nates natis natto natty natya nauch naunt naval navar naved navel naves navew navvy nawab nawal nazar nazes nazir nazis nazzy nduja neafe neals neant neaps nears neath neato neats nebby nebek nebel neche necks neddy neebs needs needy neefs neeld neele neemb neems neeps neese neeze nefie negri negro negus neifs neigh neist neive nelia nelis nelly nemas nemic nemns nempt nenes nenta neons neosa neoza neper nepit neral neram nerds nerdy nerfs nerka nerks nerol nerts nertz nerve nervy neski nests nesty netas netes netop netta netts netty neuks neume neums nevel never neves nevis nevus nevvy newbs newed newel newer newie newly newsy newts nexal nexin nexts nexum nexus ngaio ngaka ngana ngapi ngati ngege ngoma ngoni ngram ngwee nibby nicad niced nicer nicey niche nicht nicks nicky nicol nidal nided nides nidor nidus niece niefs niess nieve nifes niffs niffy nifle nifty niger nigga nighs night nigre nigua nihil nikab nikah nikau nilas nills nimbi nimbs nimby nimps niner nines ninja ninny ninon ninta ninth niopo nioza nipas nipet nippy niqab nirls nirly nisei nisin nisse nisus nital niter nites nitid niton nitre nitro nitry nitta nitto nitty nival nivas nivel nixed nixer nixes nixie nizam njirl nkosi nmoli nmols noahs nobby noble nobly nocks nodal noddy noded nodes nodum nodus noels noema noeme nogal noggs noggy nohow noias noils noily noint noire noirs noise noisy nokes noles nolle nolls nolos nomad nomas nomen nomes nomic nomoi nomos nonan nonas nonce noncy nonda nondo nones nonet nongs nonic nonis nonna nonno nonny nonyl noobs noois nooit nooks nooky noone noons noops noose noove nopal noria norie noris norks norma norms north nosed noser noses nosey noshi nosir notal notam notch noted noter notes notum nougs nouja nould noule nouls nouns nouny noups noust novae novas novel novia novio novum noway nowds nowed nowls nowts nowty noxal noxas noxes noyau noyed noyes nrtta nrtya nsima nubby nubia nucha nucin nuddy nuder nudes nudge nudgy nudie nudzh nuevo nuffs nugae nujol nuked nukes nulla nullo nulls nully numbs numen nummy numps nunks nunky nunny nunus nuque nurds nurdy nurls nurrs nurse nurts nurtz nused nuses nutso nutsy nutty nyaff nyala nyams nying nylon nymph nyong nyssa nyung nyuse nyuze oafos oaked oaken oaker oakum oared oarer oasal oases oasis oasts oaten oater oaths oaves obang obbos obeah obeli obese obeys obias obied obiit obits objet oboes obole oboli obols occam occur ocean ocher oches ochre ochry ocker ocote ocrea octad octal octan octas octet octic octli octyl oculi odahs odals odder oddly odeon odeum odism odist odium odoom odors odour odums odyle odyls ofays offal offed offer offie oflag often ofter ofuro ogams ogeed ogees oggin ogham ogive ogled ogler ogles ogmic ogres ohelo ohias ohing ohmic ohone oicks oidia oiled oiler oilet oinks oints oiran ojime okapi okays okehs okies oking okole okras okrug oktas olate olden older oldie oldly olehs oleic olein olent oleos oleum oleyl oligo olios oliva olive ollas ollav oller ollie ology olona olpae olpes omasa omber ombre ombus omdah omdas omdda omdeh omees omega omens omers omiai omits omlah ommel ommin omnes omovs omrah omuls oncer onces oncet oncus ondes ondol onely oners onery ongon onion onium onkus onlap onlay onmun onned onsen onset ontal ontic ooaas oobit oohed ooids oojah oomph oonts oopak ooped oopsy oorie ooses ootid ooyah oozed oozes oozie oozle opahs opals opens opepe opera opery opgaf opihi opine oping opium oppos opsat opsin opsit opted opter optic opzit orach oracy orals orang orans orant orate orbat orbed orbic orbit orcas orcin order ordie ordos oread orfes orful organ orgia orgic orgue oribi oriel origo orixa orles orlon orlop ormer ornee ornis orped orpin orris ortet ortho orval orzos osars oscar osetr oseys oshac osier oskin oslin osmic osmol osone ossia ostia otaku otary other othyl otium ottar otter ottos oubit ouche oucht oueds ouens ought ouija oulks oumas ounce oundy oupas ouped ouphe ouphs ourey ourie ousel ousia ousts outby outdo outed outen outer outgo outie outre outro outta ouzel ouzos ovals ovary ovate ovels ovens overs overt ovine ovism ovist ovoid ovoli ovolo ovule oware owari owche owers owies owing owled owler owlet owned owner ownio owres owrie owsen oxbow oxeas oxers oxeye oxide oxids oxies oxime oxims oxine oxlip oxman oxmen oxter oyama oyers ozeki ozena ozone ozzie paaho paals paans pacai pacas pacay paced pacer paces pacey pacha packs packy pacos pacta pacts padam padas paddo paddy padis padle padma padou padre padri paean paedo paeon pagan paged pager pages pagle pagne pagod pagri pahit pahos pahus paiks pails pains paint paipe paips paire pairs paisa paise pakay pakka pakki pakua pakul palak palar palas palay palea paled paler pales palet palis palki palla palls pallu pally palms palmy palpi palps palsa palsy palus pamby pampa panax pance panch panda pands pandy paned panel panes panga pangs panic panim panir panko panks panna panne panni panny pansy panto pants panty paoli paolo papad papal papas papaw paper papes papey pappi pappy papri parae paras parch parcs pardi pards pardy pared paren pareo parer pares pareu parev parge pargo parid paris parka parki parks parky parle parly parma parmo parms parol parps parra parrs parry parse parte parti parts party parve parvo pasag pasar pasch paseo pases pasha pashm paska pasmo paspy passe passu pasta paste pasts pasty patas patch pated patee patel paten pater pates paths patia patin patio patka patly patsy patta patte pattu patty patus pauas pauls pause pauxi pavan pavas paved paven paver paves pavid pavie pavin pavis pavon pavvy pawas pawaw pawed pawer pawks pawky pawls pawns paxes payed payee payer payor paysd peace peach peage peags peake peaks peaky peals peans peare pearl pears peart pease peasy peats peaty peavy peaze pebas pecan pechs pecia pecke pecks pecky pects pedal pedes pedis pedon pedos pedro peece peeks peeky peels peely peens peent peeoy peepe peeps peepy peers peery peeve peevo peggy peghs pegma pegos peine peins peise peisy peize pekan pekau pekea pekes pekid pekin pekoe pelas pelau pelch peles pelfs pells pelma pelog pelon pelsh pelta pelts pelus penal pence pends pendu pened penes pengo penie penis penks penna penne penni penny pense pensy pents peola peons peony pepla peple pepon pepos peppy pepsi pequi perae perai perce perch percs perdu perdy perea peres perfs peril peris perks perky perle perls perms permy perne perns perog perps perry perse persp perst perts perve pervo pervs pervy pesch pesky pesos pesta pesto pests pesty petal petar peter petit petos petre petri petti petto petty pewed pewee pewit peyse pfftt phage phang phare pharm phase phasm pheer pheme phene pheon phese phial phies phish phizz phlox phobe phoca phone phono phons phony phooh phooo phota photo phots photy phpht phubs phuts phutu phwat phyla phyle phyma phynx physa piais piani piano pians pibal pical picas piccy picey pichi picks picky picon picot picra picul piece pieds piend piers piert pieta piets piety piezo piggy pight pigly pigmy piing pikas pikau piked pikel piker pikes pikey pikis pikul pilae pilaf pilao pilar pilau pilaw pilch pilea piled pilei piler piles piley pilin pilis pills pilon pilot pilow pilum pilus pimas pimps pinas pinax pince pinch pinda pinds pined piner pines piney pinga pinge pingo pings pinko pinks pinky pinna pinny pinol pinon pinot pinta pinto pints pinup pions piony pious pioye pioys pipal pipas piped piper pipes pipet pipid pipis pipit pippy pipul pique piqui pirai pirks pirls pirns pirog pirre pirri pirrs pisco pises pisky pisos pissy piste pitas pitch piths pithy piton pitot pitso pitsu pitta pittu piuma piums pivos pivot pixel pixes pixie piyut pized pizer pizes pizza plaas place plack plaga plage plaid plaig plain plait planc plane planh plank plans plant plaps plash plasm plast plate plats platt platy plaud plaur plavs playa plays plaza plead pleas pleat plebe plebs pleck pleep plein plena plene pleno pleon plesh plets plews plexi plica plied plier plies pligs plims pling plink plips plish ploat ploce plock plods ploit plomb plong plonk plook ploot plops plore plots plotz plouk plout plows plowt ploye ploys pluck pluds plues pluff plugs pluke plumb plume plump plums plumy plung plunk pluot plups plush plute pluto pluty plyer pneus poach poaka poake poalo pobby poboy pocan poche pocho pocks pocky podal poddy podex podge podgy podia podos podus poems poena poeps poesy poete poets pogey pogge poggy pogos pogue pohed poilu poind point poire poise pokal poked poker pokes pokey pokie pokit polar poled poler poles poley polio polis polje polka polks pollo polls polly polos polts polyp polys pomas pombe pomes pomme pommy pomos pompa pomps ponce poncy ponds pondy pones poney ponga pongo pongs pongy ponks ponor ponto ponts ponty ponzu pooay pooch poods pooed pooey poofs poofy poohs poohy pooja pooka pooks pools pooly poons poopa poops poopy poori poort poots pooty poove poovy popes popia popos poppa poppy popsy popup porae poral porch pored porer pores porey porge porgy porin porks porky porno porns porny porta porte porth ports porty porus posca posed poser poses poset posey posho posit posol posse poste posts potae potai potch poted potes potin potoo potro potsy potto potts potty pouce pouch pouff poufs poufy pouis pouke pouks poule poulp poult pound poupe poupt pours pousy pouts pouty povos powan power powie powin powis powlt pownd powns powny powre powsy poxed poxes poyas poynt poyou poyse pozzy praam prads prags prahu prams prana prang prank praos praps prase prate prats pratt praty praus prawn prays preak predy preed preem preen prees preif preke prems premy prent preon preop preps presa prese press prest preta preux preve prexy preys prial prian price prick pricy pride pridy pried prief prier pries prigs prill prima prime primi primo primp prims primy pring prink print prion prior prise prism priss prius privy prize proal proas probe probs proby prodd prods proem profs progs proin proke prole proll promo proms prone prong pronk proof prook proot props prora prore prose proso pross prost prosy proto proud proul prove prowk prowl prows proxy proyn prude prune pruno prunt pruny pruta pryan pryer pryse psalm pseud pshaw pshut psias psion psoae psoai psoas psora psych psyop ptish ptype pubby pubco pubes pubic pubis pubsy pucan pucer puces pucka pucks puddy pudge pudgy pudic pudor pudsy pudus puers puffa puffs puffy puggy pugil puhas pujah pujas pukas puked puker pukes pukey pukka pukus pulao pulas puled puler pules pulik pulis pulka pulks pulli pulls pully pulmo pulps pulpy pulse pulus pulut pumas pumie pumps pumpy punas punce punch punga pungi pungo pungs pungy punim punji punka punks punky punny punto punts punty pupae pupal pupas pupil puppa puppy pupus purao purau purda purdy pured puree purer pures purga purge purin puris purls puros purps purpy purre purrs purry purse pursy purty puses pushy pusle pussy putas puter putid putin puton putos putti putto putts puttu putty putza puuko puyas puzel puzta pwned pyats pyets pygal pygmy pyins pylon pyned pynes pyoid pyots pyral pyran pyres pyrex pyric pyros pyrus pyuff pyxed pyxes pyxie pyxis pzazz qadis qaids qajaq qanat qapik qibla qilas qipao qophs qorma quabs quack quads quaff quags quail quair quais quake quaky quale qualm qualy quank quant quare quark quarl quart quash quasi quass quate quats quawk quaws quayd quays qubit quean queck queek queem queen queer quell queme quena quern query queso quest quete queue queyn queys queyu quibs quich quick quids quies quiet quiff quila quill quilt quims quina quine quink quino quins quint quipo quips quipu quire quirk quirl quirt quist quite quits quoad quods quoif quoin quois quoit quoll quonk quops quork quorl quota quote quoth quouk quoys quran qursh quyte raads raake rabat rabbi rabic rabid rabis raced racer races rache racks racon radar raddi raddy radge radgy radif radii radio radix radon rafee raffs raffy rafik rafiq rafts rafty ragas ragde raged ragee rager rages ragga raggs raggy ragis ragus rahed rahui raiah raias raids raike raiks raile rails raine rains rainy raird raise raita raith raits rajah rajas rajes raked rakee raker rakes rakhi rakia rakis rakki raksi rakus rales ralli rally ralph ramal ramee ramen rames ramet ramie ramin ramis rammy ramon ramps ramse ramsh ramus ranas rance ranch rando rands randy raned ranee ranes ranga range rangi rangs rangy ranid ranis ranke ranks ranns ranny ranse rants ranty raped rapee raper rapes raphe rapid rapin rappe rapso rared raree rarer rares rarks rasam rasas rased raser rases rasps raspy rasse rasta ratal ratan ratas ratch rated ratel rater rates ratha rathe raths ratio ratoo ratos ratti ratty ratus rauli rauns raupo raved ravel raven raver raves ravey ravin rawdy rawer rawin rawks rawly rawns raxed raxes rayah rayas rayed rayle rayls rayne rayon razai razed razee razer razes razet razoo razor reach react readd reads ready reais reaks realm realo reals reame reams reamy reans reaps reard rearm rears reast reata reate reave rebab rebar rebbe rebec rebel rebid rebit rebop rebud rebus rebut rebuy recal recap recce recco reccy recep recit recks recon recta recte recti recto recue recur recut redan redds reddy reded redes redia redid redif redig redip redly redon redos redox redry redub redug redux redye reeaf reech reede reeds reedy reefs reefy reeks reeky reels reely reems reens reerd reest reeve reeze refan refed refel refer reffo refis refit refix refly refry regal regar reges reget regex reggo regia regie regle regma regna regos regot regur rehab rehem reifs reify reign reiki reiks reine reing reink reins reird reist reive rejas rejig rejon reked rekes rekey relax relay relet relic relie relit rello relos reman remap remen remet remex remit remix remou renal renay rends rendu renew reney renga rengs renig renin renks renne renos rente rents reoil reorg repas repat repay repeg repel repen repin repla reply repos repot repps repro repun reput reran rerig rerun resam resat resaw resay resee reses reset resew resid resin resit resod resol resow resto rests resty resue resus retag retam retax retch retem retia retie retin retip retox retro retry reune reups reuse revel revet revie revow revue rewan rewax rewed rewet rewin rewon rewth rexes rezes rhabd rheas rheid rheme rheum rhies rhime rhine rhino rhody rhomb rhone rhumb rhyme rhymy rhyne rhyta riads rials riant riata riato ribas ribby ribes riced ricer rices ricey riche richt ricin ricks rider rides ridge ridgy ridic riels riems rieve rifer riffs riffy rifle rifte rifts rifty riggs right rigid rigmo rigol rigor rikka rikwa riled riles riley rille rills rilly rimae rimed rimer rimes rimon rimus rince rinds rindy rines ringe rings ringy rinks rinse rioja rione riots rioty riped ripen riper ripes ripps riqqs risen riser rises rishi risks risky risps rists risus rites rithe ritts ritzy rival rivas rived rivel riven river rives rivet riyal rizas roach roads roady roake roaky roams roans roany roars roary roast roate robbo robed rober robes robin roble robot robug robur roche rocks rocky roded rodeo rodes rodny roers rogan roger rogue roguy rohan rohes rohun rohus roids roils roily roins roist rojak rojis roked roker rokes rokey rokos rolag roleo roles rolfs rolls rolly romal roman romeo romer romps rompu rompy ronde rondo roneo rones ronin ronne ronte ronts ronuk roods roofs roofy rooks rooky rooms roomy roons roops roopy roosa roose roost roots rooty roped roper ropes ropey roque roral rores roric rorid rorie rorts rorty rosal rosco rosed roses roset rosha roshi rosin rosit rosps rossa rosso rosti rosts rotal rotan rotas rotch roted rotes rotis rotls roton rotor rotos rotta rotte rotto rotty rouen roues rouet roufs rouge rough rougy rouks rouky roule rouls roums round roups roupy rouse roust route routh routs roved roven rover roves rowan rowdy rowed rowel rowen rower rowet rowie rowme rownd rowns rowth rowts royal royet royne royst rozes rozet rozit ruach ruana rubai ruban rubby rubel rubes rubin rubio ruble rubli rubor rubus ruche ruchy rucks rudas rudds ruddy ruder rudes rudie rudis rueda ruers ruffe ruffs ruffy rufus rugae rugal rugas rugby ruggy ruice ruing ruins rukhs ruled ruler rules rully rumal rumba rumbo rumen rumes rumly rummy rumor rumpo rumps rumpy runce runch runds runed runer runes rungs runic runny runos runts runty runup ruote rupee rupia rural rurps rurus rusas ruses rushy rusks rusky rusma russe rusts rusty ruths rutin rutty ruvid ryals rybat ryiji ryijy ryked rykes rymer rymme rynds ryoti ryots ryper rypin rythe ryugi saags sabal sabed saber sabes sabha sabin sabir sabji sable sabos sabot sabra sabre sabzi sacks sacra sacre saddo saddy sades sadhe sadhu sadic sadis sadly sados sadza saeta safed safer safes sagar sagas sager sages saggy sagos sagum sahab saheb sahib saice saick saics saids saiga sails saims saine sains saint sairs saist saith sajou sakai saker sakes sakia sakis sakti salad salal salas salat salep sales salet salic salis salix salle sally salmi salol salon salop salpa salps salsa salse salto salts salty salud salue salut salve salvo saman samas samba sambo samek samel samen sames samey samfi samfu sammy sampi samps sanad sands sandy saned saner sanes sanga sangh sango sangs sanko sansa santo sants saola sapan sapid sapor sappy saran sards sared saree sarge sargo sarin sarir saris sarks sarky sarod saros sarus sarvo saser sasin sasse sassy satai satay sated satem sater sates satin satis satyr sauba sauce sauch saucy saugh sauls sault sauna saunf saunt saury saute sauts sauve saved saver saves savey savin savor savoy savvy sawah sawed sawer saxes sayas sayed sayee sayer sayid sayne sayon sayst sazes scabs scads scaff scags scail scala scald scale scall scalp scaly scamp scams scand scans scant scapa scape scapi scare scarf scarp scars scart scary scath scats scatt scaud scaup scaur scaws sceat scena scend scene scent schav schif schmo schul schwa scifi scind scion scire sclim scobe scody scoff scogs scold scone scoog scoop scoot scopa scope scops score scorn scorp scote scots scoug scoup scour scout scowl scowp scows scrab scrae scrag scram scran scrap scrat scraw scray scree screw scrim scrip scrob scrod scrog scroo scrow scrub scrum scuba scudi scudo scuds scuff scuft scugs sculk scull sculp sculs scums scups scurf scurs scuse scuta scute scuts scuzz scyes sdayn sdein seals seame seams seamy seans seare sears sease seats seaze sebum secco sechs sects sedan seder sedes sedge sedgy sedum seeds seedy seeks seeld seels seely seems seeps seepy seers sefer segar segas segni segno segol segos segue sehri seifs seils seine seirs seise seism seity seiza seize sekos sekts selah seles selfs selfy selky sella selle sells selva semas semee semen semes semie semis senas sends senes senex sengi senna senor sensa sense sensi sensu sente senti sents senvy senza sepad sepal sepia sepic sepoy seppo septa septs serac serai seral sered serer seres serfs serge seria seric serif serin serir serks seron serow serra serre serrs serry serum serve servo sesey sessa setae setal seter seths seton setts setup sevak seven sever sevir sewan sewar sewed sewel sewen sewer sewin sexed sexer sexes sexor sexto sexts seyen sezes shack shade shads shady shaft shags shahs shaka shake shako shakt shaky shale shall shalm shalt shaly shama shame shams shand shank shans shape shaps shard share shark sharn sharp shart shash shaul shave shawl shawm shawn shaws shaya shays shchi sheaf sheal shear sheas sheds sheel sheen sheep sheer sheet sheik shelf shell shend sheng shent sheol sherd shere shero shets sheva shewn shews shiai shied shiel shier shies shift shill shily shims shine shins shiny shiok ships shire shirk shirr shirs shirt shish shiso shist shite shits shiur shiva shive shivs shlep shlub shmek shmoe shoal shoat shock shoed shoer shoes shogi shogs shoji shojo shola shone shonk shook shool shoon shoos shoot shope shops shore shorl shorn short shote shots shott shoud shout shove showd shown shows showy shoyu shred shrew shris shrow shrub shrug shtar shtik shtum shtup shuba shuck shule shuln shuls shuns shunt shura shush shute shuts shwas shyer shyly sials sibbs sibia sibyl sices sicht sicko sicks sicky sidas sided sider sides sidey sidha sidhe sidle siege sield siens sient sieth sieur sieve sifts sighs sight sigil sigla sigma signa signs sigri sijos sikas siker sikes silds siled silen siler siles silex silks silky sills silly silos silts silty silva simar simas simba simis simps simul since sinds sined sines sinew singe sings sinhs sinks sinky sinsi sinus siped sipes sippy sired siree siren sires sirih siris siroc sirra sirup sisal sises sissy sista sists sitar sitch sited sites sithe sitka situp situs siver sixer sixes sixmo sixte sixth sixty sizar sized sizel sizer sizes skags skail skald skank skarn skart skate skats skatt skaws skean skear skeds skeed skeef skeen skeer skees skeet skeev skeez skegg skegs skein skelf skell skelm skelp skene skens skeos skeps skerm skers skets skews skids skied skier skies skiey skiff skill skimo skimp skims skink skins skint skios skips skirl skirr skirt skite skits skive skivy sklim skoal skobe skody skoff skofs skogs skols skool skort skosh skran skrik skroo skuas skugs skulk skull skunk skyed skyer skyey skyfs skyre skyrs skyte slabs slack slade slaes slags slaid slain slake slams slane slang slank slant slaps slart slash slate slats slaty slave slaws slays slebs sleds sleek sleep sleer sleet slept slews sleys slice slick slide slier slily slime slims slimy sling slink slipe slips slipt slish slits slive sloan slobs sloes slogs sloid slojd sloka slomo sloom sloop sloot slope slops slopy slorm slosh sloth slots slove slows sloyd slubb slubs slued slues sluff slugs sluit slump slums slung slunk slurb slurp slurs sluse slush sluts slyer slyly slype smaak smack smaik small smalm smalt smarm smart smash smaze smear smeek smees smeik smeke smell smelt smerk smews smick smile smily smirk smirr smirs smite smith smits smize smock smogs smoke smoko smoky smolt smoor smoot smore smorg smote smout smowt smugs smurs smush smuts snabs snack snafu snags snail snake snaky snaps snare snarf snark snarl snars snary snash snath snaws snead sneak sneap snebs sneck sneds sneed sneer snees snell snibs snick snide snied snies sniff snift snigs snipe snips snipy snirt snits snive snobs snods snoek snoep snogs snoke snood snook snool snoop snoot snore snort snots snout snowk snows snowy snubs snuck snuff snugs snush snyes soaks soaps soapy soare soars soave sobas sober socas soces socia socko socks socle sodas soddy sodic sodom sofar sofas softa softs softy soger soggy sohur soils soily sojas sojus sokah soken sokes sokol solah solan solar solas solde soldi soldo solds soled solei soler soles solid solon solos solum solus solve soman somas sonar sonce sonde sones songo songs songy sonic sonly sonne sonny sonse sonsy sooey sooks sooky soole sools sooms soops soote sooth soots sooty sophs sophy sopor soppy sopra soral soras sorbi sorbo sorbs sorda sordo sords sored soree sorel sorer sores sorex sorgo sorns sorra sorry sorta sorts sorus soths sotol sotto souce souct sough souks souls souly soums sound soups soupy sours souse south souts sowar sowce sowed sower sowff sowfs sowle sowls sowms sownd sowne sowps sowse sowth soxes soyas soyle soyuz sozin space spack spacy spade spado spads spaed spaer spaes spags spahi spail spain spait spake spald spale spall spalt spams spane spang spank spans spard spare spark spars spart spasm spate spats spaul spawl spawn spaws spayd spays spaza spazz speak speal spean spear speat speck specs spect speed speel speer speil speir speks speld spelk spell spelt spend spent speos sperm spesh spets speug spews spewy spial spica spice spick spics spicy spide spied spiel spier spies spiff spifs spike spiks spiky spile spill spilt spims spina spine spink spins spiny spire spirt spiry spite spits spitz spivs splat splay split splog spode spods spoil spoke spoof spook spool spoom spoon spoor spoot spore spork sport sposa sposh sposo spots spout sprad sprag sprat spray spred spree sprew sprig sprit sprod sprog sprue sprug spuds spued spuer spues spugs spule spume spumy spunk spurn spurs spurt sputa spyal spyre squab squad squat squaw squee squeg squib squid squit squiz srsly stabs stack stade staff stage stags stagy staid staig stain stair stake stale stalk stall stamp stand stane stang stank stans staph staps stare stark starn starr stars start stary stash state stats statu staun stave staws stays stead steak steal steam stean stear stedd stede steds steed steek steel steem steen steep steer steez steik steil stein stela stele stell steme stems stend steno stens stent steps stept stere stern stets stews stewy steys stich stick stied sties stiff stilb stile still stilt stime stims stimy sting stink stint stipa stipe stire stirk stirp stirs stive stivy stoae stoai stoas stoat stobs stock stoep stogs stogy stoic stoit stoke stole stoln stoma stomp stond stone stong stonk stonn stony stood stook stool stoop stoor stope stops stopt store stork storm story stoss stots stott stoun stoup stour stout stove stown stowp stows strad strae strag strak strap straw stray strep strew stria strig strim strip strop strow stroy strum strut stubs stuck stucs stude studs study stuff stull stulm stumm stump stums stung stunk stuns stunt stupa stupe sture sturt stush styed styes style styli stylo styme stymy styre styte suave subah subak subas subby suber subha succi sucks sucky sucre sudan sudds sudor sudsy suede suent suers suete suets suety sugan sugar sughs sugos suhur suids suing suint suite suits sujee sukhs sukis sukuk sulci sulfa sulfo sulks sulky sulls sully sulph sulus sumac sumis summa sumos sumph sumps sunis sunks sunna sunns sunny sunts sunup suona suped super supes supra surah sural suras surat surds sured surer sures surfs surfy surge surgy surly surra sused suses sushi susus sutor sutra sutta swabs swack swads swage swags swail swain swale swaly swami swamp swamy swang swank swans swaps swapt sward sware swarf swarm swart swash swath swats swayl sways sweal swear sweat swede sweed sweel sweep sweer swees sweet sweir swell swelt swept swerf sweys swies swift swigs swile swill swims swine swing swink swipe swire swirl swish swiss swith swits swive swizz swobs swole swoll swoln swoon swoop swops swopt sword swore sworn swots swoun swung sybbe sybil syboe sybow sycee syces sycon syeds syens syker sykes sylis sylph sylva symar synch syncs synds syned synes synod synth syped sypes syphs syrah syren syrup sysop sythe syver taals taata tabac tabby taber tabes tabid tabis tabla table tabls taboo tabor tabos tabun tabus tacan taces tacet tache tachi tacho tachs tacit tacks tacky tacos tacts tadah taels taffy tafia taggy tagma tagua tahas tahrs taiga taigs taiko tails tains taint taira taish taits tajes takas taken taker takes takhi takht takin takis takky talak talaq talar talas talcs talcy talea taler tales talik talks talky talls tally talma talon talpa taluk talus tamal tamas tamed tamer tames tamin tamis tammy tamps tanas tanga tangi tango tangs tangy tanhs tania tanka tanks tanky tanna tansu tansy tante tanti tanto tanty tapas taped tapen taper tapes tapet tapir tapis tappa tapus taras tardo tards tardy tared tares targa targe tarka tarns taroc tarok taros tarot tarps tarre tarry tarse tarsi tarte tarts tarty tarzy tasar tasca tased taser tases tasks tassa tasse tasso taste tasto tasty tatar tater tates taths tatie tatou tatts tatty tatus taube tauld taunt tauon taupe tauts tauty tavah tavas taver tawaf tawai tawas tawed tawer tawie tawny tawse tawts taxed taxer taxes taxis taxol taxon taxor taxus tayra tazza tazze teach teade teads teaed teaks teals teams tears teary tease teats teaze techs techy tecta tecum teddy teels teems teend teene teens teeny teers teeth teets teffs teggs tegua tegus tehee tehrs teiid teils teind teins tekke telae telco teles telex telia telic tells telly teloi telos temed temes tempi tempo temps tempt temse tench tends tendu tenes tenet tenge tenia tenne tenno tenny tenon tenor tense tenth tents tenty tenue tepal tepas tepee tepid tepoy terai teras terce terek teres terfe terfs terga terms terne terns terra terre terry terse terts terza tesla testa teste tests testy tetes teths tetra tetri teuch teugh tewed tewel tewit texas texes texta texts thack thagi thaim thale thali thana thane thang thank thans thanx tharm thars thaws thawt thawy thebe theca theed theek thees theft thegn theic thein their thelf thema theme thens theor theow there therm these thesp theta thete thews thewy thick thief thigh thigs thilk thill thine thing think thins thiol third thirl thoft thole tholi thong thorn thoro thorp those thots thous thowl thrae thraw three threw thrid thrip throb throe throw thrum thuds thugs thuja thumb thump thunk thurl thuya thyme thymi thymy tians tiara tiare tiars tibia tical ticca ticed tices tichy ticks ticky tidal tiddy tided tides tiefs tiers tiffs tifos tifts tiger tiges tight tigon tikas tikes tikia tikis tikka tilak tilde tiled tiler tiles tills tilly tilth tilts timbo timed timer times timid timon timps tinas tinct tinds tinea tined tines tinge tings tinks tinny tinto tints tinty tipis tippy tipsy tipup tired tires tirls tiros tirrs tirth titan titar titas titch titer tithe tithi titin titir titis title titre titty titup tiyin tiyns tizes tizzy toads toady toast toaze tocks tocky tocos today todde toddy todea todos toeas toffs toffy tofts tofus togae togas toged toges togue tohos toidy toile toils toing toise toits toity tokay toked token toker tokes tokos tolan tolar tolas toled toles tolls tolly tolts tolus tolyl toman tombo tombs tomen tomes tomia tomin tomme tommy tomos tomoz tonal tondi tondo toned toner tones toney tonga tongs tonic tonka tonks tonne tonus tools tooms toons tooth toots topaz toped topee topek toper topes tophe tophi tophs topic topis topoi topos toppy toque torah toran toras torch torcs tores toric torii toros torot torrs torse torsi torsk torso torta torte torts torus tosas tosed toses toshy tossy tosyl total toted totem toter totes totty touch tough touks touns tours touse tousy touts touze touzy towai towed towel tower towie towno towns towny towse towsy towts towze towzy toxic toxin toyed toyer toyon toyos tozed tozes tozie trabs trace track tract trade trads trady traga tragi trags tragu traik trail train trait tramp trams trank tranq trans trant trape trapo traps trapt trash trass trats tratt trave trawl trayf trays tread treat treck treed treen trees trefa treif treks trema trems trend tress trest trets trews treyf treys triac triad trial tribe trice trick tride tried trier tries trifa triff trigo trigs trike trild trill trims trine trins triol trior trios tripe trips tripy trist trite troad troak troat trock trode trods trogs trois troke troll tromp trona tronc trone tronk trons troop trooz trope tropo troth trots trout trove trows troys truce truck trued truer trues trugo trugs trull truly trump trunk truss trust truth tryer tryke tryma tryps tryst tsade tsadi tsars tsked tsuba tsubo tuans tuart tuath tubae tubal tubar tubas tubby tubed tuber tubes tucks tufas tuffe tuffs tufts tufty tugra tuile tuina tuism tuktu tules tulip tulle tulpa tulps tulsi tumid tummy tumor tumps tumpy tunas tunds tuned tuner tunes tungs tunic tunny tupek tupik tuple tuque turbo turds turfs turfy turks turme turms turns turnt turon turps turrs tushy tusks tusky tutee tutes tutor tutti tutty tutus tuxes tuyer twaes twain twals twang twank twats tways tweak tweed tweel tween tweep tweer tweet twerk twerp twice twier twigs twill twilt twine twink twins twiny twire twirk twirl twirp twist twite twits twixt twocs twoer twonk twyer tyees tyers tying tyiyn tykes tyler tymps tynde tyned tynes typal typed types typey typic typos typps typto tyran tyred tyres tyros tythe tzars ubacs ubity udals udder udons udyog ugali ugged uhlan uhuru ukase ulama ulans ulcer ulema ulmin ulmos ulnad ulnae ulnar ulnas ulpan ultra ulvas ulyie ulzie umami umbel umber umble umbos umbra umbre umiac umiak umiaq ummah ummas ummed umped umphs umpie umpty umrah umras unagi unais unapt unarm unary unaus unbag unban unbar unbed unbid unbox uncap unces uncia uncle uncos uncoy uncus uncut undam undee under undid undos undue undug uneth unfed unfit unfix ungag unget ungod ungot ungum unhat unhip unica unify union unios unite units unity unjam unked unket unkey unkid unkut unlap unlaw unlay unled unleg unlet unlid unlit unmad unman unmet unmew unmix unode unold unown unpay unpeg unpen unpin unply unpot unput unred unrid unrig unrip unsaw unsay unsee unset unsew unsex unsod unsub untag untax untie until untin unwed unwet unwit unwon unzip upbow upbye updos updry upend upful upjet uplay upled uplit upped upper upran uprun upsee upset upsey uptak upter uptie uraei urali uraos urare urari urase urate urban urbex urbia urdee ureal ureas uredo ureic ureid urena urent urged urger urges urial urine urite urman urnal urned urped ursae ursid urson urubu urupa urvas usage usens users useta usher using usnea usnic usque ustad uster usual usure usurp usury uteri utero utile utter uveal uveas uvula vacas vacay vacua vacui vacuo vadas vaded vades vadge vagal vague vagus vaids vails vaire vairs vairy vajra vakas vakil vales valet valid valis valli valor valse value valve vamps vampy vanda vaned vanes vanga vangs vants vaped vaper vapes vapid vapor varan varas varda vardo vardy varec vares varia varix varna varus varve vasal vases vasts vasty vatas vatha vatic vatje vatos vatus vauch vault vaunt vaute vauts vawte vaxes veale veals vealy veena veeps veers veery vegan vegas veges veggo vegie vegos vehme veils veily veins veiny velar velds veldt veles vells velum venae venal venas vends vendu veney venge venin venom venti vents venue venus verba verbs verde verge verra verre verry versa verse verso verst verte verts vertu verve vespa vesta vests vetch veuve veves vexed vexer vexes vexil vezir vials viand vibed vibes vibex vibey vicar viced vices vichy vicus video viers vieux views viewy vifda viffs vigas vigia vigil vigor vilde viler villa ville villi vills vimen vinal vinas vinca vined viner vines vinew vinho vinic vinny vinos vints vinyl viola viold viols viper viral vired vireo vires virga virge virgo virid virls virtu virus visas vised vises visie visit visna visne vison visor vista visto vitae vital vitas vitex vitro vitta vivas vivat vivda viver vives vivid vivos vivre vixen vizir vizor vlast vleis vlies vlogs voars vobla vocab vocal voces voddy vodka vodou vodun voema vogie vogue voice voici voids voila voile voips volae volar voled voles volet volke volks volta volte volti volts volva volve vomer vomit voted voter votes vouch vouge voulu vowed vowel vower voxel voxes vozhd vraic vrils vroom vrous vrouw vrows vuggs vuggy vughs vughy vulgo vulns vulva vutty vygie vying waacs wacke wacko wacks wacky wadas wadds waddy waded wader wades wadge wadis wadts wafer waffs wafts waged wager wages wagga wagon wagyu wahay wahey wahoo waide waifs waift wails wains wairs waist waite waits waive wakas waked waken waker wakes wakfs waldo walds waled waler wales walie walis walks walla walls wally walty waltz wamed wames wamus wands waned wanes waney wangs wanks wanky wanle wanly wanna wanta wants wanty wanze waqfs warbs warby wards wared wares warez warks warms warns warps warre warst warts warty wases washi washy wasms wasps waspy waste wasts watap watch water watts wauff waugh wauks waulk wauls waurs waved waver waves wavey wawas wawes wawls waxed waxen waxer waxes wayed wazir wazoo weald weals weamb weans wears weary weave webby weber wecht wedel wedge wedgy weeds weedy weeis weeke weeks weels weems weens weeny weeps weepy weest weete weets wefte wefts weids weigh weils weird weirs weise weize wekas welch welds welke welks welkt wells welly welsh welts wembs wench wends wenge wenny wents werfs weros wersh wests wetas wetly wexed wexes whack whale whamo whams whang whaps whare wharf whata whats whaup whaur wheal whear wheat wheek wheel wheen wheep wheft whelk whelm whelp whens where whets whews wheys which whids whies whiff whift whigs while whilk whims whine whins whiny whios whips whipt whirl whirr whirs whish whisk whiss whist white whits whity whizz whole whomp whoof whoop whoot whops whore whorl whort whose whoso whows whump whups whyda wicca wicks wicky widdy widen wider wides widow width wield wiels wifed wifes wifey wifie wifts wifty wigan wigga wiggy wight wikis wilco wilds wiled wiles wilga wilis wilja wills willy wilts wimps wimpy wince winch winds windy wined wines winey winge wings wingy winks winky winna winns winos winze wiped wiper wipes wired wirer wires wirra wirri wised wiser wises wisha wisht wisps wispy wists witan witch wited wites withe withs withy witty wived wiver wives wizen wizes wizzo woads woady woald wocks wodge wodgy woful wojus woken woker wokka wolds wolfs wolly wolve woman womas wombs womby women womyn wonga wongi wonks wonky wonts woods woody wooed wooer woofs woofy woold wools wooly woons woops woopy woose woosh wootz woozy words wordy works worky world worms wormy worry worse worst worth worts would wound woven wowed wowee wowse woxen wrack wrang wraps wrapt wrast wrate wrath wrawl wreak wreck wrens wrest wrick wried wrier wries wring wrist write writs wroke wrong wroot wrote wroth wrung wryer wryly wuddy wudus wuffs wulls wunga wurst wuses wushu wussy wuxia wyled wyles wynds wynns wyted wytes wythe xebec xenia xenic xenon xeric xerox xerus xoana xolos xrays xviii xylan xylem xylic xylol xylyl xysti xysts yaars yaass yabas yabba yabby yacca yacht yacka yacks yadda yaffs yager yages yagis yagna yahoo yaird yajna yakka yakow yales yamen yampa yampy yamun yandy yangs yanks yapok yapon yapps yappy yarak yarco yards yarer yarfa yarks yarns yarra yarrs yarta yarto yates yatra yauds yauld yaups yawed yawey yawls yawns yawny yawps yayas ybore yclad ycled ycond ydrad ydred yeads yeahs yealm yeans yeard yearn years yeast yecch yechs yechy yedes yeeds yeeek yeesh yeggs yelks yells yelms yelps yelts yenta yente yerba yerds yerks yeses yesks yests yesty yetis yetts yeuch yeuks yeuky yeven yeves yewen yexed yexes yfere yield yiked yikes yills yince yipes yippy yirds yirks yirrs yirth yites yitie ylems ylide ylids ylike ylkes ymolt ympes yobbo yobby yocks yodel yodhs yodle yogas yogee yoghs yogic yogin yogis yohah yohay yoick yojan yokan yoked yokeg yokel yoker yokes yokul yolks yolky yolps yomim yomps yonic yonis yonks yonny yoofs yoops yopos yoppo yores yorga yorks yorps youks young yourn yours yourt youse youth yowed yowes yowie yowls yowsa yowza yoyos yrapt yrent yrivd yrneh ysame ytost yuans yucas yucca yucch yucko yucks yucky yufts yugas yuked yukes yukky yukos yulan yules yummo yummy yumps yupon yuppy yurta yurts yuzus zabra zacks zaida zaide zaidy zaire zakat zamac zamak zaman zambo zamia zamis zanja zante zanza zanze zappy zarda zarfs zaris zatis zawns zaxes zayde zayin zazen zeals zebec zebra zebub zebus zedas zeera zeins zendo zerda zerks zeros zests zesty zetas zexes zezes zhomo zhush zhuzh zibet ziffs zigan zikrs zilas zilch zilla zills zimbi zimbs zinco zincs zincy zineb zines zings zingy zinke zinky zinos zippo zippy ziram zitis zitty zizel zizit zlote zloty zoaea zobos zobus zocco zoeae zoeal zoeas zoism zoist zokor zolle zombi zonae zonal zonda zoned zoner zones zonks zooea zooey zooid zooks zooms zoomy zoons zooty zoppa zoppo zoril zoris zorro zorse zouks zowee zowie zulus zupan zupas zuppa zurfs zuzim zygal zygon zymes zymic";   // ~4.5k five-letter words, frequency-ordered
  const NICE_SRC = "aback abase abate abbey abide abled abode abort about above abuse abyss acorn acrid actor acute adage admin admit adobe adore adorn afire after again agape agate agent agile aging aglow agony agree ahead aider alarm alert algae alien align alike alive allay alley allot allow alloy aloft alone along aloof aloud alpha altar alter amass amaze amber amble amend amiss among ample amply amuse angel anger angle anime ankle annul anode antic aorta apart aphid aping apple apply apron aptly arbor ardor arena argue arise armor aroma arose array arson artsy ascot ashen aside askew assay asset atone attic audio audit augur aunty avert avian avoid awake award aware awash awoke axiom axion azure bacon badge badly bagel baggy baker baler balmy banal banjo barge baron basal basic basil basin basis baste batch bathe baton batty bawdy beach beady beard beast beech beefy befit began begat beget begin begun being belch belie belle belly below bench beret berry berth beset betel bevel bezel bible bicep biddy bigot bilge billy binge bingo biome birch birth bison bitty black blade blame bland blank blare blast blaze bleak bleat bleed bleep blend bless blimp blind blink bliss blitz bloat block bloke blond blood bloom blown bluer bluff blunt blurb blurt blush board boast bobby boney bongo bonus booby boost booth booty booze boozy borax borne bosom bossy botch bough boule bound bowel boxer brace braid brain brake brand brash brass brave bravo brawl brawn bread break breed briar bribe brick bride brief brine bring brink briny brisk broad broil broke brood brook broom broth brown brunt brush brute buddy budge buggy bugle build built bulge bulky bully bunch bunny burly burnt burst bused bushy butch butte buyer cabal cabby cabin cable cacao cache cacti caddy cadet cagey cairn camel cameo canal candy canny canoe canon caper caput carat cargo carol carry carve caste catch cater catty caulk cause cavil cease cedar cello chafe chaff chain chair chalk champ chant chaos chard charm chart chase chasm cheap cheat check cheek cheer chess chest chick chide chief child chili chill chime china chirp chock choir choke chord chore chose chuck chump chunk churn chute cider cigar cinch circa civic civil clack claim clamp clang clank clash clasp class clean clear cleat cleft clerk click cliff climb cling clink cloak clock clone close cloth cloud clout clove clown cluck clued clump clung coach coast cobra cocoa colon color comet comfy comic comma conch condo conic copse coral corer corny couch cough could count coupe court coven cover covet covey cower coyly crack craft cramp crane crank crash crass crate crave crawl craze crazy creak cream credo creed creek creep creme crepe crept cress crest crick cried crier crime crimp crisp croak crock crone crony crook cross croup crowd crown crude cruel crumb crump crush crust crypt cubic cumin curio curly curry curse curve curvy cutie cyber cynic daddy daily dairy daisy dally dance dandy daunt dealt death debar debit debug debut decal decay decor decoy decry defer deity delay delta delve demon demur denim dense depot depth derby deter detox deuce devil diary dicey digit dilly dimly diner dingo dingy dirge dirty disco ditch ditto ditty diver dizzy dodge dodgy dogma doing dolly donor dopey dough dowdy dowel downy dowry dozen draft drain drake drama drank drape drawl drawn dread dream dress dried drier drift drill drink drive droit droll drone drool droop dross drove drown druid drunk dryer dryly duchy dully dummy dumpy dunce dusky dusty dutch dwarf dwell dwelt dying eager eagle early earth easel eaten eater ebony edict eerie eight eject eking elate elder elect elegy elfin elide elite elope elude embed ember empty endow ensue enter entry erase erect erode erupt essay ester ether ethos etude event every evict exert exile eying fable facet faint fairy faith false fancy fanny farce fatal fatty fault fauna favor feast fecal fella felon femme femur fence feral ferry fetal fetch fetid fetus fever fewer fiber fibre ficus field fiend fiery fifth fifty fight filer filet filly filmy filth final finch finer first fishy fixer fizzy flack flail flair flake flaky flame flank flare flash flask fleck fleet flesh flick flier fling flint flirt float flock flood floor flora floss flour flout flown fluff fluid fluke flume flung flunk flush flute flyer foamy focal focus foggy foist folio folly foray force forge forgo forte forth forty forum found foyer frail frame frank fraud freak freed freer fresh friar fried frill frisk fritz frock frond front frost froth frown froze fruit fudge fugue fully fungi funky funny furor furry fussy fuzzy gaffe gaily gamer gamma gamut gassy gaudy gauge gaunt gauze gavel gawky gayer gayly gazer gecko geeky geese genie genre ghost giant giddy gipsy girly girth given giver glade gland glare glass glaze gleam glean glide glint gloat globe gloom glory gloss glove gnash godly going golem golly gonad goner goody gooey goofy goose gorge gouge gourd grace grade graft grail grain grand grant grape graph grasp grass grate grave gravy graze great greed green greet grief grill grime grimy grind gripe groan groin groom grope gross group grout grove growl grown gruel gruff grunt guard guava guess guest guide guild guile guilt guise gulch gully gumbo gummy guppy gusto gusty gypsy hairy halve handy happy hardy harem harpy harry harsh haste hasty hatch hater haunt haute haven hazel heady heard heart heath heave heavy hedge hefty heist helix hello hence heron hilly hinge hippo hippy hitch hoard hobby hoist holly homer honey honor horde horny horse hotel hotly hound house hovel hover howdy human humid humph humus hunch hunky hurry husky hussy hutch hyena hyper icing ideal idler idyll igloo iliac impel imply incur index inept inert infer ingot inlay inlet inner input inter intro ionic irate irony islet jaunt jelly jerky jetty jewel jiffy joint joist joker jolly joust judge juice juicy jumbo jumpy junta junto juror kappa karma kebab khaki kinky kitty knack knave knead kneed kneel knelt knife knock knoll known koala krill label labor laden ladle lager lance lanky lapel large larva lasso latch later lathe latte laugh layer leach leafy leaky leant leapt learn lease leash least leave ledge leech leery lefty legal leggy lemon lemur leper level lever libel liege light liken limbo limit linen liner lingo lipid lithe liver livid loamy loath lobby local locus lodge lofty logic login loopy loose lorry loser louse lousy lover lower lowly loyal lucid lucky lumen lumpy lunar lunch lunge lupus lurch lurid lusty lying lynch lyric macaw macho macro madam madly mafia magic magma maize major maker mambo mamma mammy manga mange mango mangy mania manic manly manor maple march marry marsh mason masse match matey mauve maxim mayor mealy meant meaty mecca medal media medic melee melon mercy merge merit merry metal meter metro micro midge might milky mimic mince miner minim minor minty minus mirth miser missy mocha modal model modem mogul moist molar moldy money month moody moose moral moron morph mossy motel motif motor motto moult mound mount mourn mouse mouth mover movie mower mucky mucus muddy mulch mummy munch mural murky mushy music musky musty nadir naive nanny nasal nasty natal naval navel needy neigh nerdy nerve never newer newly nicer niche niece night ninja ninny ninth noble nobly noise noisy nomad noose north nosey notch novel nudge nurse nutty nylon oaken ocean octal odder offer often olden older olive ombre onion onset opera opine optic orbit order organ other otter ought ounce outdo outer outgo ovary ovate overt ovine ovoid owing owner oxide ozone paddy pagan paint paler palsy panel panic pansy papal paper parer parka parry parse party pasta paste pasty patch patio patsy patty pause payee payer peace peach pearl pecan pedal penal pence penne penny perch peril perky pesky pesto petal petty phase phone phony photo piano picky piece piety piggy pilot pinch piney pinky pinto piper pitch pithy pivot pixel pixie place plaid plain plait plane plank plant plate plaza plead pleat plied plier pluck plumb plume plump plunk plush poesy point poise poker polar polka polyp pooch poppy porch poser posit posse pouch pound pouty power prank prawn preen press price prick pride pried prime primo print prior prism privy prize probe prone prong proof prose proud prove prowl proxy prude prune pubic pudgy puffy pulpy pulse punch pupal pupil puppy puree purer purge purse pushy putty pygmy quack quail quake qualm quark quart quash quasi queen queer quell query quest queue quick quiet quill quilt quirk quite quota quote quoth rabid racer radar radii radio rainy raise rajah rally ramen ranch randy range rapid rarer raspy ratio ratty raven rayon razor reach react ready realm rearm rebar rebel rebus rebut recap recur recut reedy refer refit regal rehab relax relay relic remit renal renew repay repel reply rerun reset resin retch retro retry reuse revel revue rhino rhyme rider ridge rifle right rigor rinse ripen riper risen riser risky rival river rivet roach roast robin rocky rodeo roger rogue roomy roost rotor rouge rough round rouse route rover rowdy rower royal ruddy ruder rugby ruler rumba rupee rural rusty sadly safer saint salad sally salon salsa salty salve salvo sandy saner sappy sassy satin satyr sauce saucy sauna saute savor savoy savvy scald scale scalp scaly scamp scant scare scarf scary scene scent scoff scold scone scoop scope score scorn scour scout scowl scram scrap scree screw scrub scrum scuba sedan seedy seize semen sense sepia serif serum serve setup seven sever sewer shack shade shady shaft shake shaky shale shall shalt shame shank shape shard share shark sharp shave shawl shear sheen sheep sheer sheet sheik shelf shell shied shift shine shiny shire shirk shirt shoal shock shone shook shoot shore shorn short shout shove shown showy shrew shrub shrug shuck shunt shush shyly siege sieve sight sigma silky silly since sinew singe siren sissy sixth sixty skate skier skiff skill skimp skirt skulk skull skunk slack slain slang slant slash slate slave sleek sleep sleet slept slice slick slide slime slimy sling slink sloop slope slosh sloth slump slung slunk slurp slush slyly smack small smart smash smear smell smelt smile smirk smite smith smock smoke smoky smote snack snail snake snaky snare snarl sneak sneer snide sniff snipe snoop snore snort snout snowy snuck snuff soapy sober soggy solar solid solve sonar sonic sooth sooty sorry sound south sower space spade spank spare spark spawn speak spear speck speed spell spelt spend spent sperm spice spicy spied spiel spike spiky spill spilt spine spiny spire spite splat split spoil spoke spoof spook spool spoon spore sport spout spray spree sprig spunk spurn spurt stack staff stage staid stain stair stake stale stalk stall stamp stand stank stare stark start stash state stave stead steak steal steam steed steel steep steer stein stern stick stiff still stilt sting stink stint stock stoic stoke stole stomp stone stony stood stool stoop store stork storm story stout stove strap straw stray strip strut stuck study stuff stump stung stunk stunt style suave sugar suing suite sulky sully sunny super surer surge surly swami swamp swarm swash swath swear sweat sweep sweet swell swept swift swill swine swing swirl swish swoon swoop sword swore sworn swung synod syrup tabby table taboo tacit tacky taffy taint taken taker tally talon tamer tango tangy taper tapir tardy tarot taste tasty tatty taunt tawny teach teary tease teddy teeth tempo tenet tenor tense tenth tepee tepid terra terse testy thank theft their theme there these theta thick thief thigh thing think third thong thorn those three threw throb throw thumb thump thyme tiara tibia tidal tiger tight tilde timer timid tipsy titan tithe title toast today toddy token tonal tonga tonic tooth topic torch torso torus total totem touch tough towel tower toxic toxin trace track tract trade trail train trait tramp trash trawl tread treat trend triad trial tribe trice trick tried tripe trite troll troop trope trout trove truce truck truer truly trump trunk truss trust truth tryst tubal tuber tulle tunic twang tweak tweed tweet twice twine twirl twist twixt tying udder umbra uncle uncut under undid undue unfed unfit unify union unite unity unlit unmet unset untie until unwed unzip upper upset urine usher utile utter vague valet valid valor value valve vapid vapor vault vaunt vegan venom venue verge verse verso verve video vigor villa vinyl viola viper viral virus visit visor vista vital vivid vixen vocal vogue voice voila voter vouch vowel vying wacky wafer wager waist waive waltz warty waste watch water waver waxen weary weave wedge weedy weigh weird welch welsh wench whack whale wharf wheat wheel whelp where which whiff while whine whiny whirl whisk white whole whoop whose widen wider wield wight willy wimpy wince winch windy wiser wispy witch witty woken woman women woody wooer wooly woozy wordy world worry worse worst worth would wound woven wrack wrath wreak wreck wrest wring wrist write wrong wrote wrung wryly yearn yahoo yeast yield youth zebra zesty zonal";   // curated common words used as start / goal

  const DICT = DICT_SRC.split(" ");
  const DICT_SET = new Set(DICT);
  const NICE = NICE_SRC.split(" ");
  const NICE_SET = new Set(NICE);
  const LEN = 5;

  /* ------------------------------- constants ------------------------------ */

  /* ---- tunable settings ------------------------------------------------ */
  const CONFIG = {
    minPar: 3,             // easiest daily ladder
    maxPar: 5,             // hardest daily ladder (raise to 6 for brutal days)
    hintsByPar: { 3: 1, 4: 2, 5: 2 },  // hints per ladder, by its par
    hintsPerGame: 2,       // fallback for any par not listed above
    hintsAbovePar: 3,      // hints for ladders with par greater than 5
    hintTimeCost: 15,      // seconds off the clock per hint · 0 = free hints
    secondsPerLadder: 120, // the clock: 2 minutes, unlimited guesses
  };

  // Optional cloud backend. Paste a Supabase project URL + anon key to switch on
  // email sign-in and cross-device streak sync. Empty = fully local (see SETUP.md).
  const AUTH_CONFIG = {
    supabaseUrl: "https://zfgwpokdflhsfniwsnqd.supabase.co",
    anonKey: "sb_publishable_qhHqxpiXP6FUnt06fa8x7w_ACYmjZl7",
    table: "wooper_progress",
  };
  const SAVE_PREFIX = "wooper.v4.save:";
  const STREAK_KEY = "wooper.v4.streaks";
  const THEME_KEY = "wooper.v4.theme";
  const REVEAL_STAGGER = 70;
  const REVEAL_LEN = 300;
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

  const $ = (id) => document.getElementById(id);

  /* -------------------------------- state --------------------------------- */

  const state = {
    daily: null,        // { dateKey, start, goal, par, distToGoal }
    ladder: [],         // [startWord, ...guesses]
    typed: "",
    finished: false,
    won: false,
    busy: false,        // true while a row is flipping
    hintsUsed: 0,
    deadline: 0,        // ms timestamp, set on the first letter typed
    reason: null,       // "time" when the clock ran out
    streakToastShown: false,
  };

  let toastTimer = null;
  let adjacency = null;
  let firstVisit = false;

  /* -------------------------------- helpers ------------------------------- */

  // A "day" is the player's local calendar day: the ladder turns over at their midnight.
  function dayKey(date = new Date()) {
    return (
      date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0")
    );
  }

  // Day 1 of the daily ladder. Today = No. 1, tomorrow = No. 2, and so on.
  // Change this to the date you want to count from.
  const EPOCH_KEY = "2026-10-31";

  function puzzleNumber(dateKey = dayKey()) {
    // never show a day before launch (a device sitting on an earlier date)
    return Math.max(1, daysBetween(EPOCH_KEY, dateKey) + 1);
  }

  function prettyDate(dateKey = dayKey()) {
    const [y, m, d] = dateKey.split("-").map(Number);
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    return months[m - 1] + " " + d + ", " + y;
  }

  function keyMinusDays(dateKey, days) {
    const [y, m, d] = dateKey.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d));
    dt.setUTCDate(dt.getUTCDate() - days);
    return (
      dt.getUTCFullYear() + "-" +
      String(dt.getUTCMonth() + 1).padStart(2, "0") + "-" +
      String(dt.getUTCDate()).padStart(2, "0")
    );
  }

  function daysBetween(fromKey, toKey) {
    const [y1, m1, d1] = fromKey.split("-").map(Number);
    const [y2, m2, d2] = toKey.split("-").map(Number);
    return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
  }

  function hashStr(str) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function oneLetterApart(a, b) {
    if (a.length !== LEN || b.length !== LEN || a === b) return false;
    let diff = 0;
    for (let i = 0; i < LEN; i++) {
      if (a[i] !== b[i] && ++diff > 1) return false;
    }
    return diff === 1;
  }

  /* --------------------------- word graph (BFS) --------------------------- */

  // Neighbours of a word = every dictionary word one letter away.
  function buildAdjacency() {
    const map = new Map();
    for (const word of DICT) {
      const list = [];
      for (let i = 0; i < LEN; i++) {
        const head = word.slice(0, i);
        const tail = word.slice(i + 1);
        for (let c = 0; c < 26; c++) {
          const next = head + ALPHABET[c] + tail;
          if (next !== word && DICT_SET.has(next)) list.push(next);
        }
      }
      map.set(word, list);
    }
    return map;
  }

  function getAdjacency() {
    if (!adjacency) adjacency = buildAdjacency();
    return adjacency;
  }

  // Breadth-first search out from `from`.
  //   dist   word -> minimum moves needed to reach `from` (also the reachability set)
  //   parent word -> next word on a shortest route to `from`
  function graphFrom(from) {
    const adj = getAdjacency();
    const dist = new Map([[from, 0]]);
    const parent = new Map([[from, null]]);
    const queue = [from];
    for (let head = 0; head < queue.length; head++) {
      const word = queue[head];
      const d = dist.get(word) + 1;
      for (const next of adj.get(word) || []) {
        if (!dist.has(next)) {
          dist.set(next, d);
          parent.set(next, word);
          queue.push(next);
        }
      }
    }
    return { dist, parent };
  }

  // The shortest ladder from `word` to the goal, as a list of words.
  function shortestLadder(word) {
    const parent = state.daily.parentToGoal;
    const goal = state.daily.goal;
    const path = [word];
    let at = word;
    let guard = 0;
    while (at !== goal && guard++ < 40) {
      const next = parent.get(at);
      if (!next) return null;
      path.push(next);
      at = next;
    }
    return at === goal ? path : null;
  }

  /* ---------------------------- daily puzzle ------------------------------ */

  // Same puzzle for everyone, every day: deterministic from the UTC date.
  // Candidate goals are scored by how "clean" their shortest ladder is, so the
  // intended route runs through ordinary words rather than obscure ones.
  // ---- today's ladder ------------------------------------------------------
  // Curated pairs, one per day, starting 2026-10-31 = No. 1. Everyone in the
  // world plays the same pair on the same day.
  //
  // To choose a day by hand: edit that line. The order IS the calendar, so
  // line N is day N. A bare `null` hands that day back to the generator, and
  // anything past the end of the list is generated too — you never have to
  // keep this filled in to ship.
  //
  // Before committing:
  //   python3 tools/validate-daily.py --pair START GOAL   // try a word pair
  //   python3 tools/validate-daily.py --table             // see No. / date / par
  //   python3 tools/validate-daily.py                     // the gate
  //   node tools/gen-daily.js --days 30 --mix 20,50,30    // draft a run
  //
  // par is computed at runtime from the dictionary, so the comment's par is a
  // convenience — it can never disagree with the game.
  const DAILY = [
    ["slate", "crane"],        // No. 1 · 2026-10-31 · par 3
    ["stilt", "slick"],        // No. 2 · 2026-11-01 · par 4
    ["motel", "lover"],        // No. 3 · 2026-11-02 · par 4
    ["jolly", "daily"],        // No. 4 · 2026-11-03 · par 3
    ["quote", "spiky"],        // No. 5 · 2026-11-04 · par 5
    ["butch", "beech"],        // No. 6 · 2026-11-05 · par 3
    ["manly", "mafia"],        // No. 7 · 2026-11-06 · par 4
    ["scold", "swami"],        // No. 8 · 2026-11-07 · par 5
    ["bulky", "belie"],        // No. 9 · 2026-11-08 · par 4
    ["mulch", "lynch"],        // No. 10 · 2026-11-09 · par 3
    ["crime", "stump"],        // No. 11 · 2026-11-10 · par 5
    ["caste", "sauce"],        // No. 12 · 2026-11-11 · par 4
    ["droop", "krill"],        // No. 13 · 2026-11-12 · par 4
    ["tying", "trick"],        // No. 14 · 2026-11-13 · par 4
    ["truce", "thick"],        // No. 15 · 2026-11-14 · par 3
    ["brood", "freed"],        // No. 16 · 2026-11-15 · par 4
    ["tramp", "slash"],        // No. 17 · 2026-11-16 · par 5
    ["pluck", "sting"],        // No. 18 · 2026-11-17 · par 5
    ["woven", "loser"],        // No. 19 · 2026-11-18 · par 4
    ["ditto", "batty"],        // No. 20 · 2026-11-19 · par 3
    ["hilly", "daily"],        // No. 21 · 2026-11-20 · par 3
    ["swath", "clash"],        // No. 22 · 2026-11-21 · par 3
    ["woozy", "bobby"],        // No. 23 · 2026-11-22 · par 3
    ["jelly", "bulky"],        // No. 24 · 2026-11-23 · par 3
    ["drake", "tract"],        // No. 25 · 2026-11-24 · par 4
    ["print", "stink"],        // No. 26 · 2026-11-25 · par 4
    ["repel", "leper"],        // No. 27 · 2026-11-26 · par 4
    ["waist", "crept"],        // No. 28 · 2026-11-27 · par 4
    ["beach", "punch"],        // No. 29 · 2026-11-28 · par 3
    ["round", "world"],        // No. 30 · 2026-11-29 · par 3
    ["vogue", "valve"],        // No. 31 · 2026-11-30 · par 3
    ["sheer", "break"],        // No. 32 · 2026-12-01 · par 5
    ["hardy", "fairy"],        // No. 33 · 2026-12-02 · par 3
    ["shift", "shine"],        // No. 34 · 2026-12-03 · par 3
    ["swept", "sleek"],        // No. 35 · 2026-12-04 · par 3
    ["belle", "jolly"],        // No. 36 · 2026-12-05 · par 3
    ["think", "start"],        // No. 37 · 2026-12-06 · par 5
    ["trace", "chick"],        // No. 38 · 2026-12-07 · par 4
    ["three", "screw"],        // No. 39 · 2026-12-08 · par 3
    ["recut", "debug"],        // No. 40 · 2026-12-09 · par 3
    ["drunk", "flank"],        // No. 41 · 2026-12-10 · par 3
    ["range", "badly"],        // No. 42 · 2026-12-11 · par 5
    ["poser", "sewer"],        // No. 43 · 2026-12-12 · par 3
    ["shaft", "whole"],        // No. 44 · 2026-12-13 · par 4
    ["forte", "gauge"],        // No. 45 · 2026-12-14 · par 4
    ["scant", "plank"],        // No. 46 · 2026-12-15 · par 3
    ["tiger", "gamer"],        // No. 47 · 2026-12-16 · par 3
    ["leash", "welsh"],        // No. 48 · 2026-12-17 · par 5
    ["grade", "drake"],        // No. 49 · 2026-12-18 · par 3
    ["spark", "shall"],        // No. 50 · 2026-12-19 · par 4
    ["harpy", "randy"],        // No. 51 · 2026-12-20 · par 3
    ["trial", "break"],        // No. 52 · 2026-12-21 · par 4
    ["folly", "sadly"],        // No. 53 · 2026-12-22 · par 4
    ["blush", "sloth"],        // No. 54 · 2026-12-23 · par 3
    ["sleep", "sweat"],        // No. 55 · 2026-12-24 · par 3
    ["theme", "clone"],        // No. 56 · 2026-12-25 · par 5
    ["watch", "dutch"],        // No. 57 · 2026-12-26 · par 3
    ["trail", "flair"],        // No. 58 · 2026-12-27 · par 3
    ["verve", "tense"],        // No. 59 · 2026-12-28 · par 3
    ["glaze", "crave"],        // No. 60 · 2026-12-29 · par 3
    ["crass", "flask"],        // No. 61 · 2026-12-30 · par 4
    ["hover", "semen"],        // No. 62 · 2026-12-31 · par 5
    ["poser", "fewer"],        // No. 63 · 2027-01-01 · par 4
    ["stale", "shorn"],        // No. 64 · 2027-01-02 · par 4
    ["twice", "pride"],        // No. 65 · 2027-01-03 · par 3
    ["diner", "given"],        // No. 66 · 2027-01-04 · par 3
    ["pride", "slink"],        // No. 67 · 2027-01-05 · par 5
    ["women", "cower"],        // No. 68 · 2027-01-06 · par 4
    ["frill", "troop"],        // No. 69 · 2027-01-07 · par 5
    ["touch", "cinch"],        // No. 70 · 2027-01-08 · par 3
    ["hence", "peach"],        // No. 71 · 2027-01-09 · par 3
    ["liver", "covet"],        // No. 72 · 2027-01-10 · par 3
    ["wafer", "inter"],        // No. 73 · 2027-01-11 · par 4
    ["foist", "point"],        // No. 74 · 2027-01-12 · par 3
    ["hitch", "lunch"],        // No. 75 · 2027-01-13 · par 3
    ["bloat", "flood"],        // No. 76 · 2027-01-14 · par 5
    ["sheen", "blend"],        // No. 77 · 2027-01-15 · par 5
    ["lease", "roach"],        // No. 78 · 2027-01-16 · par 4
    ["caper", "purse"],        // No. 79 · 2027-01-17 · par 5
    ["bland", "flesh"],        // No. 80 · 2027-01-18 · par 5
    ["burly", "daisy"],        // No. 81 · 2027-01-19 · par 5
    ["reply", "decoy"],        // No. 82 · 2027-01-20 · par 5
    ["clasp", "sooth"],        // No. 83 · 2027-01-21 · par 5
    ["chick", "prize"],        // No. 84 · 2027-01-22 · par 4
    ["crimp", "slurp"],        // No. 85 · 2027-01-23 · par 4
    ["relax", "fecal"],        // No. 86 · 2027-01-24 · par 5
    ["bound", "world"],        // No. 87 · 2027-01-25 · par 3
    ["dairy", "curry"],        // No. 88 · 2027-01-26 · par 4
    ["recur", "rebus"],        // No. 89 · 2027-01-27 · par 3
    ["spear", "sheep"],        // No. 90 · 2027-01-28 · par 3
  ];

  function pickDailyPuzzle() {
    const dateKey = dayKey();

    // 1) a hand-checked pair for this issue number
    const curated = DAILY[puzzleNumber(dateKey) - 1];
    if (curated && DICT_SET.has(curated[0]) && DICT_SET.has(curated[1])) {
      const { dist: distToGoal, parent: parentToGoal } = graphFrom(curated[1]);
      if (distToGoal.has(curated[0])) {
        return {
          dateKey,
          start: curated[0],
          goal: curated[1],
          par: distToGoal.get(curated[0]),
          distToGoal,
          parentToGoal,
          curated: true,
        };
      }
    }

    // 2) fallback: derive a pair from the date
    const rng = mulberry32(hashStr("wooper:" + dateKey));
    const adj = getAdjacency();

    for (let attempt = 0; attempt < 8; attempt++) {
      const start = NICE[Math.floor(rng() * NICE.length)];

      // BFS from the start word, keeping parents so we can retrace any ladder.
      const dist = new Map([[start, 0]]);
      const parent = new Map([[start, null]]);
      const queue = [start];
      for (let head = 0; head < queue.length; head++) {
        const word = queue[head];
        const d = dist.get(word) + 1;
        for (const next of adj.get(word) || []) {
          if (!dist.has(next)) {
            dist.set(next, d);
            parent.set(next, word);
            queue.push(next);
          }
        }
      }

      let pool = [];
      let fewestObscure = Infinity;
      for (const goal of NICE) {
        const d = dist.get(goal);
        if (d === undefined || d < CONFIG.minPar || d > CONFIG.maxPar) continue;
        let obscure = 0;
        for (let at = goal; at !== start; at = parent.get(at)) {
          if (!NICE_SET.has(at)) obscure++;
        }
        if (obscure < fewestObscure) {
          fewestObscure = obscure;
          pool = [[goal, d]];
        } else if (obscure === fewestObscure) {
          pool.push([goal, d]);
        }
      }

      if (pool.length) {
        const [goal, par] = pool[Math.floor(rng() * pool.length)];
        const { dist: distToGoal, parent: parentToGoal } = graphFrom(goal);
        return { dateKey, start, goal, par, distToGoal, parentToGoal };
      }
    }

    // Practically unreachable, but never leave the player without a game.
    const { dist: distToGoal, parent: parentToGoal } = graphFrom("shine");
    return { dateKey, start: "stone", goal: "shine", par: 4, distToGoal, parentToGoal };
  }

  /* ------------------------------ persistence ----------------------------- */

  function saveKey() {
    return SAVE_PREFIX + state.daily.dateKey;
  }

  function saveState() {
    if (!state.daily) return;
    try {
      localStorage.setItem(
        saveKey(),
        JSON.stringify({
          dateKey: state.daily.dateKey,
          ladder: state.ladder,
          finished: state.finished,
          won: state.won,
          hintsUsed: state.hintsUsed,
          deadline: state.deadline,
          reason: state.reason,
        })
      );
    } catch (err) {
      /* storage blocked — the game still plays fine in memory */
    }
  }

  function restoreState() {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(saveKey()) || "null");
    } catch (err) {
      saved = null;
    }
    const { start, goal, distToGoal } = state.daily;

    if (saved && Array.isArray(saved.ladder) && saved.ladder[0] === start) {
      const valid = saved.ladder.every((word, i, arr) =>
        i === 0
          ? word === start
          : DICT_SET.has(word) &&
            oneLetterApart(arr[i - 1], word) &&
            distToGoal.has(word)
      );
      if (valid) {
        state.ladder = saved.ladder;
        state.finished = Boolean(saved.finished);
        state.won = Boolean(saved.won);
        state.hintsUsed = Number.isFinite(saved.hintsUsed) ? saved.hintsUsed : 0;
        state.deadline = Number.isFinite(saved.deadline) ? saved.deadline : 0;
        state.reason = saved.reason || null;
        if (state.ladder[state.ladder.length - 1] === goal) {
          state.finished = true;
          state.won = true;
        }
        return true;
      }
    }

    state.ladder = [start];
    state.finished = false;
    state.won = false;
    state.hintsUsed = 0;
    state.deadline = 0;
    state.reason = null;
    return false;
  }

  /* -------------------------------- streaks ------------------------------- */

  function emptyStreaks() {
    return { current: 0, max: 0, played: 0, wins: 0, lastSolved: null, lastPlayed: null, history: {} };
  }

  function loadStreaks() {
    try {
      const raw = JSON.parse(localStorage.getItem(STREAK_KEY) || "null");
      if (raw && typeof raw === "object") return Object.assign(emptyStreaks(), raw);
    } catch (err) {
      /* ignore */
    }
    return emptyStreaks();
  }

  function saveStreaks(s) {
    try {
      localStorage.setItem(STREAK_KEY, JSON.stringify(s));
    } catch (err) {
      /* ignore */
    }
  }

  function recordPlay(dateKey) {
    const s = loadStreaks();
    if (s.lastPlayed !== dateKey) {
      s.played = (s.played || 0) + 1;
      s.lastPlayed = dateKey;
      saveStreaks(s);
    }
    return s;
  }

  function recordResult(dateKey, won) {
    const s = loadStreaks();
    if (s.history[dateKey]) return s; // already counted today

    if (s.lastPlayed !== dateKey) {
      s.played = (s.played || 0) + 1;
      s.lastPlayed = dateKey;
    }
    s.history[dateKey] = won ? "win" : "loss";

    // trim history to the last 30 days
    const keys = Object.keys(s.history).sort();
    while (keys.length > 30) delete s.history[keys.shift()];

    if (won) {
      s.wins = (s.wins || 0) + 1;
      if (s.lastSolved && daysBetween(s.lastSolved, dateKey) === 1) {
        s.current = (s.current || 0) + 1;
      } else if (s.lastSolved === dateKey) {
        s.current = Math.max(1, s.current || 1);
      } else {
        s.current = 1;
      }
      s.lastSolved = dateKey;
      s.max = Math.max(s.max || 0, s.current);
    } else {
      s.current = 0; // a failed ladder ends the streak
    }

    saveStreaks(s);
    return s;
  }

  /* --------------------------------- theme -------------------------------- */

  // One theme: the pink one. No toggle, no storage, no dark mode.
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", "light");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", "#fbeef8");
  }

  function initTheme() {
    // one theme only: the pink one
    try {
      localStorage.removeItem(THEME_KEY);
    } catch (err) { /* storage blocked */ }
    applyTheme();
  }

  /* --------------------------------- toast -------------------------------- */

  function toast(text, ms = 1500) {
    const el = $("toast");
    el.textContent = text;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), ms);
  }

  /* -------------------------------- scoring ------------------------------- */

  // Wordle feedback for a word, measured against the goal word.
  function feedback(word) {
    const goal = state.daily.goal;
    const marks = new Array(LEN).fill("absent");
    const pool = goal.split("");

    for (let i = 0; i < LEN; i++) {
      if (word[i] === goal[i]) {
        marks[i] = "correct";
        pool[i] = null;
      }
    }
    for (let i = 0; i < LEN; i++) {
      if (marks[i] === "correct") continue;
      const at = pool.indexOf(word[i]);
      if (at !== -1) {
        marks[i] = "present";
        pool[at] = null;
      }
    }
    return marks;
  }

  function statesForKeyboard() {
    const rank = { absent: 0, present: 1, correct: 2 };
    const map = new Map();
    const rows = [state.daily.start, ...state.ladder.slice(1)];
    for (const word of rows) {
      const marks = feedback(word);
      for (let i = 0; i < LEN; i++) {
        const letter = word[i];
        const mark = marks[i];
        const prev = map.get(letter);
        if (!prev || rank[mark] > rank[prev]) map.set(letter, mark);
      }
    }
    return map;
  }

  /* --------------------------------- render ------------------------------- */

  function makeTile(letter, extraClass) {
    const tile = document.createElement("div");
    tile.className = "tile" + (extraClass ? " " + extraClass : "");
    tile.textContent = letter ? letter.toUpperCase() : "";
    return tile;
  }

  function renderTargets() {
    const { start, goal, par } = state.daily;
    const startRow = $("startTiles");
    const goalRow = $("goalTiles");
    startRow.innerHTML = "";
    goalRow.innerHTML = "";
    [...start].forEach((letter, i) => {
      const tile = document.createElement("span");
      tile.className = "mini-tile";
      tile.textContent = letter;
      tile.style.animationDelay = i * 45 + "ms";
      startRow.appendChild(tile);
    });
    [...goal].forEach((letter, i) => {
      const tile = document.createElement("span");
      tile.className = "mini-tile";
      tile.textContent = letter;
      tile.style.animationDelay = 220 + i * 45 + "ms";
      goalRow.appendChild(tile);
    });
    $("parPill").textContent = "PAR " + par;
  }

  // jump (not glide) to the newest rung — used right after a guess lands
  function scrollBoardBottom() {
    const board = $("board");
    if (!board) return;
    board.scrollTo({ top: board.scrollHeight, behavior: "instant" });
    board.scrollTop = board.scrollHeight;
  }

  // jump (not glide) to the first rung — how a finished ladder reads on a return visit
  function scrollBoardTop() {
    const board = $("board");
    if (!board) return;
    board.scrollTo({ top: 0, behavior: "instant" });
    board.scrollTop = 0;
  }

  function renderBoard(animateIndex = -1) {
    const board = $("board");
    board.innerHTML = "";

    // Given start word, coloured against the goal like every other row
    const startRow = document.createElement("div");
    startRow.className = "row start-row";
    startRow.setAttribute("aria-label", "Start word " + state.daily.start);
    const startMarks = feedback(state.daily.start);
    [...state.daily.start].forEach((letter, i) => {
      startRow.appendChild(makeTile(letter, startMarks[i]));
    });
    board.appendChild(startRow);

    // Guesses
    state.ladder.slice(1).forEach((word, idx) => {
      const row = document.createElement("div");
      row.className = "row";
      const marks = feedback(word);
      const animate = idx + 1 === animateIndex;
      [...word].forEach((letter, i) => {
        const tile = makeTile(letter);
        if (!animate) {
          tile.classList.add(marks[i]);
        } else {
          tile.dataset.mark = marks[i];
          tile.style.animationDelay = i * REVEAL_STAGGER + "ms";
          tile.classList.add("reveal");
        }
        row.appendChild(tile);
      });
      if (word === state.daily.goal && !animate) row.classList.add("win-row");
      board.appendChild(row);
    });

    // Typing row
    if (!state.finished) {
      const row = document.createElement("div");
      row.className = "row typing-row";
      for (let i = 0; i < LEN; i++) {
        const tile = makeTile(state.typed[i] || "", state.typed[i] ? "filled" : "");
        row.appendChild(tile);
      }
      board.appendChild(row);
    }

    // a finished ladder reads top-down; a live one keeps the newest rung in view
    if (state.finished) scrollBoardTop();
    else board.scrollTop = board.scrollHeight;
  }

  function paintKeyboard() {
    const marks = statesForKeyboard();
    document.querySelectorAll(".key[data-letter]").forEach((key) => {
      key.classList.remove("absent", "present", "correct");
      const mark = marks.get(key.dataset.letter);
      if (mark) key.classList.add(mark);
    });
  }

  function renderStatus() {
    const moves = Math.max(0, state.ladder.length - 1);
    const pill = $("parPill");
    const current = state.ladder[state.ladder.length - 1];
    const left = state.daily.distToGoal.get(current);

    if (state.won) {
      $("moveInfo").textContent = "SOLVED IN " + moves;
      pill.textContent = moves <= state.daily.par ? "PAR BEATEN" : "PAR OVERSHOT";
      pill.classList.add("hit");
      $("distInfo").textContent = "";
    } else if (state.finished) {
      $("moveInfo").textContent = state.reason === "time" ? "TIME'S UP" : "DONE";
      pill.textContent = "PAR " + state.daily.par;
      pill.classList.remove("hit");
      $("distInfo").textContent = "";
    } else {
      $("moveInfo").textContent = "MOVE " + moves;
      pill.textContent = "PAR " + state.daily.par;
      pill.classList.remove("hit");
      $("distInfo").textContent =
        moves === 0 || left === undefined ? "" : left === 1 ? "1 TO GO" : left + " TO GO";
    }
    $("distInfo").classList.remove("danger");
    paintClock();

    const hintsLeft = Math.max(0, hintLimit() - state.hintsUsed);
    const hintBtn = $("hintBtn");
    $("hintBadge").textContent = hintsLeft;
    $("hintBadge").hidden = hintsLeft === 0;
    hintBtn.disabled = state.finished || state.busy || hintsLeft === 0;
    hintBtn.classList.toggle("spent", hintsLeft === 0);
    const price = CONFIG.hintTimeCost > 0 ? " · costs " + CONFIG.hintTimeCost + " seconds" : "";
    hintBtn.setAttribute(
      "aria-label",
      hintsLeft ? "Hint, " + hintsLeft + " left" + price : "No hints left"
    );
    hintBtn.title = hintsLeft ? "Hint (" + hintsLeft + " left)" + price : "No hints left";

    renderDoneState();
    renderStreakChip();
  }

  // A finished ladder is unmistakable: banner + locked keyboard, on every visit.
  function renderDoneState() {
    const banner = $("doneBanner");
    banner.hidden = !state.finished;
    banner.classList.toggle("lost", state.finished && !state.won);
    $("keyboard").classList.toggle("locked", state.finished);
    if (!state.finished) return;

    const moves = Math.max(0, state.ladder.length - 1);
    $("doneText").textContent = state.won
      ? "Solved today · " + moves + (moves === 1 ? " move" : " moves") + " · par " + state.daily.par
      : "Time's up today · the goal was " + state.daily.goal.toUpperCase();
  }

  // A streak stays alive until a whole day is missed.
  function effectiveStreak(s) {
    if (!s.lastSolved) return 0;
    const gap = daysBetween(s.lastSolved, dayKey());
    return gap <= 1 ? s.current || 0 : 0;
  }

  function renderStreakChip() {
    const live = effectiveStreak(loadStreaks());
    const badge = $("streakCount");
    if (!badge) return;
    badge.textContent = live;
    badge.hidden = !live;                 // the number rides on the stats icon
    $("streakBtn").classList.toggle("hot", live >= 3);
  }

  function render() {
    renderBoard();
    paintKeyboard();
    renderStatus();
  }

  /* ------------------------------- game flow ------------------------------ */

  function shakeRow() {
    const row = $("board").querySelector(".typing-row");
    if (!row) return;
    row.classList.remove("shake");
    void row.offsetWidth;
    row.classList.add("shake");
  }

  function reject(message) {
    toast(message);
    shakeRow();
  }

  // A row takes a moment to flip. Letters typed in that moment go straight into
  // the next row, and a word you finish while the flip is still running waits in
  // this queue instead of being swallowed — the clock is running, so nobody
  // should lose keystrokes to an animation.
  const guessQueue = [];

  function flushQueue() {
    if (!guessQueue.length || state.busy || state.finished) return;
    // send the held word without touching what has been typed for the row after it
    submitGuess(guessQueue.shift());
  }

  function typeLetter(letter) {
    if (state.finished) return;
    if (state.typed.length >= LEN) {
      // a complete word is already sitting there — send it, then start the next
      if (state.busy && guessQueue.length === 0) submitGuess();
      if (state.typed.length >= LEN) return;
    }
    startClock();
    state.typed += letter;
    // repaint just the typing row so the pop animation is per-key
    const row = $("board").querySelector(".typing-row");
    if (!row) return;
    const tile = row.children[state.typed.length - 1];
    if (tile) {
      tile.textContent = letter.toUpperCase();
      tile.classList.add("filled");
      tile.style.animation = "none";
      void tile.offsetWidth;
      tile.style.animation = "";
    }
  }

  function backspace() {
    if (state.finished || !state.typed.length) return;
    state.typed = state.typed.slice(0, -1);
    const row = $("board").querySelector(".typing-row");
    if (!row) return;
    const tile = row.children[state.typed.length];
    if (tile) {
      tile.textContent = "";
      tile.classList.remove("filled");
    }
  }

  function submitGuess(queued) {
    if (state.finished) return;
    if (state.busy && !queued) {
      // the previous row is still flipping — hold this word, send it next
      if (state.typed.length < LEN) return reject("Not enough letters");
      if (guessQueue.length < 2) guessQueue.push(state.typed);
      state.typed = "";
      const row = $("board").querySelector(".typing-row");
      if (row) {
        [...row.children].forEach((tile) => {
          tile.textContent = "";
          tile.classList.remove("filled");
        });
      }
      return;
    }
    startClock();
    const guess = queued || state.typed;
    const current = state.ladder[state.ladder.length - 1];
    const { goal, distToGoal } = state.daily;

    if (guess.length < LEN) return reject("Not enough letters");

    // 1) must be a real five-letter word
    if (!DICT_SET.has(guess)) return reject("Not in word list");

    // 2) must be exactly one letter away from the current word
    if (!oneLetterApart(current, guess)) return reject("Change exactly one letter");

    // 3) must still be able to become the goal word
    if (!distToGoal.has(guess)) return reject("That word can't reach the goal");

    // 4) no repeats inside one ladder
    if (state.ladder.includes(guess)) return reject("Already used that word");

    recordPlay(state.daily.dateKey);
    if (!queued) state.typed = "";
    $("hintLine").hidden = true;
    state.ladder.push(guess);
    state.busy = true;

    const rowIndex = state.ladder.length - 1;
    renderBoard(rowIndex);
    renderStatus();
    saveState();

    // Flip the tiles, colouring each one as its animation passes the halfway mark.
    const row = $("board").querySelectorAll(".row")[rowIndex];
    const tiles = row ? [...row.children] : [];
    tiles.forEach((tile, i) => {
      setTimeout(() => {
        if (tile.dataset.mark) tile.classList.add(tile.dataset.mark);
      }, i * REVEAL_STAGGER + REVEAL_LEN / 2);
    });

    setTimeout(() => {
      state.busy = false;
      paintKeyboard();
      if (guess === goal) {
        winGame();
      } else {
        const away = distToGoal.get(guess);
        renderStatus();
        toast(away === 1 ? "One move from the goal!" : away + " moves from the goal", 1300);
        // the flip threw away the old typing row — give the next move a fresh one
        renderBoard();
        $("board").scrollTop = $("board").scrollHeight;
        flushQueue();
      }
    }, (LEN - 1) * REVEAL_STAGGER + REVEAL_LEN + 20);
  }

  function winGame() {
    guessQueue.length = 0;
    state.finished = true;
    state.won = true;
    saveState();
    recordResult(state.daily.dateKey, true);
    if (typeof pushProgress === "function") pushProgress();
    renderStatus();

    // drop the empty rows first so the goal row is the last one
    $("board").querySelectorAll(".typing-row, .pending-row").forEach((row) => row.remove());

    const rows = $("board").querySelectorAll(".row");
    const row = rows[rows.length - 1];
    if (row) {
      row.classList.add("win-row");
      [...row.children].forEach((tile, i) => {
        tile.classList.remove("reveal");
        tile.style.animationDelay = i * 90 + "ms";
      });
    }

    $("streakBtn").classList.remove("bump");
    void $("streakBtn").offsetWidth;
    $("streakBtn").classList.add("bump");

    // keep the winning rung in view, then show the card
    scrollBoardBottom();
    setTimeout(() => { scrollBoardBottom(); showResult(); }, 900);
  }

  // A hint peeks at the next optimal word. There are only a few per ladder.
  const HINT_NOTE_KEY = "wooper.v4.hintnoted";

  function hintNoteSeen() {
    try {
      return localStorage.getItem(HINT_NOTE_KEY) === "1";
    } catch (err) {
      return true; // storage blocked — don't nag
    }
  }

  // The price is on the tin: the first time anyone reaches for a hint, say what it
  // costs before taking it. After that it's a single tap.
  function useHint() {
    if (!state.daily || state.finished || state.busy) return;
    if (state.hintsUsed >= hintLimit()) return toast("No hints left on this ladder", 1600);
    if (CONFIG.hintTimeCost > 0 && !hintNoteSeen()) return openHintNote();
    applyHint();
  }

  // Hint counts in the rules are built from the same settings as gameplay.
  function hintCopy() {
    // every par the game can actually deal, whether or not the table names it
    const pars = new Set(Object.keys(CONFIG.hintsByPar || {}).map(Number));
    for (let par = CONFIG.minPar; par <= CONFIG.maxPar; par++) pars.add(par);

    const groups = new Map();
    [...pars]
      .sort((a, b) => a - b)
      .forEach((par) => {
        const listed = CONFIG.hintsByPar && CONFIG.hintsByPar[par];
        const n = Number.isFinite(listed) ? listed : CONFIG.hintsPerGame;
        if (!groups.has(n)) groups.set(n, []);
        groups.get(n).push(String(par));
      });

    if (Number.isFinite(CONFIG.hintsAbovePar)) {
      if (!groups.has(CONFIG.hintsAbovePar)) groups.set(CONFIG.hintsAbovePar, []);
      groups.get(CONFIG.hintsAbovePar).push("6+");
    }

    if (!groups.size) {
      const n = CONFIG.hintsPerGame;
      return "You get <b>" + n + (n === 1 ? " hint" : " hints") + "</b> per ladder";
    }

    const join = (list) =>
      "par " + (list.length === 1 ? list[0] : list.slice(0, -1).join(", ") + " and " + list[list.length - 1]);

    const parts = [...groups.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([n, pars]) => join(pars) + (n === 1 ? " gives you <b>1 hint</b>" : " give you <b>" + n + " hints</b>"));

    const sentence = parts.join(", ");
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  function paintHintCopy() {
    const rule = $("hintRule");
    if (!rule) return;
    const cost = CONFIG.hintTimeCost;
    rule.innerHTML =
      "Stuck? " + hintCopy() +
      " — each one tells you which letter to change and to what" +
      (cost > 0 ? ", and takes <b>" + cost + " seconds</b> off the clock." : ".");
  }

  function openHintNote() {
    const left = hintLimit() - state.hintsUsed;
    const p = $("hintCostText");
    p.innerHTML =
      "Each hint takes <b>" + CONFIG.hintTimeCost + " seconds</b> off the clock." +
      " You have <b>" + left + "</b> " + (left === 1 ? "hint" : "hints") + " left on this ladder.";
    $("hintConfirmBtn").textContent = "Use a hint · −" + CONFIG.hintTimeCost + "s";
    $("hintDialog").showModal();
  }

  // How many hints today's ladder is worth: short ladders hand out fewer.
  function hintLimit() {
    const par = state.daily && state.daily.par;
    const listed = CONFIG.hintsByPar && CONFIG.hintsByPar[par];
    if (Number.isFinite(listed)) return listed;
    if (par > 5 && Number.isFinite(CONFIG.hintsAbovePar)) return CONFIG.hintsAbovePar;
    return CONFIG.hintsPerGame;
  }

  function applyHint() {
    const current = state.ladder[state.ladder.length - 1];
    const route = shortestLadder(current);
    if (!route || route.length < 2) return;

    const next = route[1];
    state.hintsUsed++;

    // a hint eats into the clock (CONFIG.hintTimeCost)
    if (CONFIG.hintTimeCost > 0 && state.deadline) {
      const floor = Date.now() + 5000;
      state.deadline = Math.max(floor, state.deadline - CONFIG.hintTimeCost * 1000);
      paintClock();
      const clock = $("clock");
      clock.classList.remove("penalty");
      void clock.offsetWidth;
      clock.classList.add("penalty");
      setTimeout(() => clock.classList.remove("penalty"), 900);
    }
    saveState();

    let pos = 1;
    for (let i = 0; i < LEN; i++) {
      if (current[i] !== next[i]) {
        pos = i + 1;
        break;
      }
    }
    const letter = next[pos - 1].toUpperCase();
    const line = $("hintLine");
    line.hidden = false;
    line.textContent =
      "HINT  ·  CHANGE LETTER " + pos + " TO \"" + letter + "\"  ·  " +
      (hintLimit() - state.hintsUsed) + " LEFT" +
      (CONFIG.hintTimeCost > 0 ? "  ·  −" + CONFIG.hintTimeCost + "S" : "");
    renderStatus();
  }

  function loseGame(reason) {
    guessQueue.length = 0;
    if (state.finished) return;
    state.finished = true;
    state.won = false;
    state.reason = reason || "time";
    state.typed = "";
    state.busy = false;
    stopClock();
    saveState();
    recordResult(state.daily.dateKey, false);
    if (typeof pushProgress === "function") pushProgress();

    $("board").querySelectorAll(".typing-row, .pending-row").forEach((row) => row.remove());
    renderStatus();
    paintClock();
    scrollBoardBottom();
    toast(state.reason === "time" ? "Time's up" : "Ladder over", 1600);
    setTimeout(() => { scrollBoardBottom(); showResult(); }, 800);
  }

  /* --------------------------------- clock -------------------------------- */
  // 2:00, unlimited guesses. The clock only starts once you start playing,
  // and the deadline is saved, so a reload resumes the same countdown.
  let clockId = null;

  function clockLeftMs() {
    if (state.finished) return 0;
    if (!state.deadline) return CONFIG.secondsPerLadder * 1000;
    return Math.max(0, state.deadline - Date.now());
  }

  function clockText() {
    const total = Math.ceil(clockLeftMs() / 1000);
    return Math.floor(total / 60) + ":" + String(total % 60).padStart(2, "0");
  }

  function paintClock() {
    const el = $("clock");
    if (!el) return;
    const left = clockLeftMs();
    el.textContent = state.finished ? (state.won ? "DONE" : "0:00") : clockText();
    el.classList.toggle("running", !state.finished && Boolean(state.deadline));
    el.classList.toggle("warn", !state.finished && Boolean(state.deadline) && left <= 30000);
    el.classList.toggle("critical", !state.finished && Boolean(state.deadline) && left <= 10000);
  }

  function startClock() {
    if (state.finished || state.deadline || !state.daily) return;
    const penalty = CONFIG.hintTimeCost * 1000 * state.hintsUsed;
    state.deadline = Date.now() + CONFIG.secondsPerLadder * 1000 - penalty;
    saveState();
    stopClock();
    clockId = setInterval(tickClock, 250);
    tickClock();
  }

  function stopClock() {
    if (clockId) {
      clearInterval(clockId);
      clockId = null;
    }
  }

  function tickClock() {
    paintClock();
    if (state.finished) return stopClock();
    if (!state.deadline) return;
    if (clockLeftMs() <= 0) {
      stopClock();
      loseGame("time");
    }
  }

  /* -------------------------------- account ------------------------------- */

  const SESSION_KEY = "wooper.v4.session";

  function authReady() {
    return Boolean(AUTH_CONFIG.supabaseUrl && AUTH_CONFIG.anonKey);
  }

  function loadSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
    } catch (err) {
      return null;
    }
  }

  function saveSession(session) {
    try {
      if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      else localStorage.removeItem(SESSION_KEY);
    } catch (err) {
      /* private mode — the session just won't persist */
    }
  }

  // The default Supabase email contains a LINK, not a code. When someone taps it
  // they come back here with the session in the URL fragment — pick it up,
  // remember it, and tidy the address bar.
  function consumeMagicLink() {
    const hash = location.hash || "";
    if (!hash.includes("access_token")) {
      if (hash.includes("error_description")) {
        try {
          const params = new URLSearchParams(hash.slice(1));
          const why = decodeURIComponent(params.get("error_description") || "").replace(/\+/g, " ");
          history.replaceState(null, "", location.pathname + location.search);
          setTimeout(() => toast("Sign-in link failed: " + why, 3500), 900);
        } catch (err) { /* ignore */ }
      }
      return false;
    }
    try {
      const params = new URLSearchParams(hash.slice(1));
      const access = params.get("access_token");
      if (!access) return false;
      const claims = JSON.parse(atob(access.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
      saveSession({
        access_token: access,
        refresh_token: params.get("refresh_token"),
        expires_at: Date.now() + Number(params.get("expires_in") || 3600) * 1000,
        email: claims.email || "",
        user_id: claims.sub,
      });
      history.replaceState(null, "", location.pathname + location.search);
      return true;
    } catch (err) {
      return false;
    }
  }

  async function api(path, { method = "GET", body, token, prefer } = {}) {
    const base = AUTH_CONFIG.supabaseUrl.replace(/\/$/, "");
    const res = await fetch(base + path, {
      method,
      headers: {
        "Content-Type": "application/json",
        apikey: AUTH_CONFIG.anonKey,
        ...(prefer ? { Prefer: prefer } : {}),
        ...(token ? { Authorization: "Bearer " + token } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;
    if (!res.ok) {
      const msg = (data && (data.msg || data.message || data.error_description || data.error)) || "Request failed";
      throw new Error(msg);
    }
    return data;
  }

  // Everything that belongs to a player, in one blob.
  function snapshot() {
    return { streaks: loadStreaks(), save: state.daily ? { dateKey: state.daily.dateKey, ladder: state.ladder, finished: state.finished, won: state.won, hintsUsed: state.hintsUsed } : null };
  }

  async function pushProgress() {
    const session = loadSession();
    if (!authReady() || !session) return;
    try {
      await api("/rest/v1/" + AUTH_CONFIG.table + "?on_conflict=user_id", {
        method: "POST",
        token: session.access_token,
        prefer: "resolution=merge-duplicates,return=minimal",
        body: { user_id: session.user_id, data: snapshot(), updated_at: new Date().toISOString() },
      });
    } catch (err) {
      /* offline — the local copy is still the source of truth */
    }
  }

  async function pullProgress() {
    const session = loadSession();
    if (!authReady() || !session) return false;
    try {
      const rows = await api(
        "/rest/v1/" + AUTH_CONFIG.table + "?select=data,updated_at&user_id=eq." + encodeURIComponent(session.user_id),
        { token: session.access_token }
      );
      if (!rows || !rows.length || !rows[0].data) return false;
      const remote = rows[0].data;
      const local = loadStreaks();
      const remoteNewer =
        remote.streaks && (remote.streaks.lastPlayed || "") > (local.lastPlayed || "");
      if (remoteNewer) {
        localStorage.setItem(STREAK_KEY, JSON.stringify(remote.streaks));
        if (state.daily) renderStreakChip();
      }
      return Boolean(remoteNewer);
    } catch (err) {
      return false;
    }
  }

  function accountUI() {
    const session = loadSession();
    const signedIn = Boolean(session && session.email);
    $("accountSignedOut").hidden = signedIn;
    $("accountSignedIn").hidden = !signedIn;
    if (signedIn) {
      $("accountEmail").textContent = session.email;
      $("syncNote").textContent = "Signed in — your streak syncs to this account.";
    }
    $("sendCodeBtn").disabled = !authReady();
    $("authHint").textContent = authReady()
      ? "We email you a code — no password to remember."
      : "Accounts need a backend: paste your Supabase URL and anon key into AUTH_CONFIG (see SETUP.md). Until then streaks stay on this device.";
    $("settingsNo").textContent = state.daily ? puzzleNumber(state.daily.dateKey) : 1;
  }

  // The same pair of forms appears twice: on the gate before the front page and
  // in Settings, for anyone who skipped the gate.
  const AUTH_FORM_SETTINGS = { email: "emailInput", code: "codeInput", msg: "authMsg", codeForm: "codeForm" };
  const AUTH_FORM_GATE = { email: "gateEmail", code: "gateCode", msg: "gateMsg", codeForm: "gateCodeForm" };

  async function sendCode(form = AUTH_FORM_SETTINGS) {
    const email = $(form.email).value.trim();
    const msg = $(form.msg);
    if (!email) return;
    if (!authReady()) {
      msg.textContent = "Accounts aren't connected on this copy of the game.";
      return;
    }
    msg.textContent = "Sending…";
    try {
      await api("/auth/v1/otp", { body: { email, create_user: true } });
      msg.textContent = "Sent to " + email + " — tap the link in the email, or type the code here.";
      $(form.codeForm).hidden = false;
      $(form.code).focus();
    } catch (err) {
      msg.textContent = "Couldn't send the code: " + err.message;
    }
  }

  async function verifyCode(form = AUTH_FORM_SETTINGS) {
    const email = $(form.email).value.trim();
    const code = $(form.code).value.trim();
    const msg = $(form.msg);
    if (!code) return;
    msg.textContent = "Checking…";
    try {
      const data = await api("/auth/v1/verify", { body: { email, token: code, type: "email" } });
      saveSession({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: Date.now() + (data.expires_in || 3600) * 1000,
        email: (data.user && data.user.email) || email,
        user_id: data.user && data.user.id,
      });
      await pullProgress();
      await pushProgress();
      msg.textContent = "";
      accountUI();
      toast("Signed in as " + (data.user && data.user.email ? data.user.email : email), 2200);
      if (form === AUTH_FORM_GATE) closeGate(false);
    } catch (err) {
      msg.textContent = "That code didn't work: " + err.message;
    }
  }

  /* ------------------------------- pre-game ------------------------------- */

  // The gate before the board — like the daily-word-game front page.
  function renderSplash() {
    const streaks = loadStreaks();
    const moves = Math.max(0, state.ladder.length - 1);
    const left = state.daily.distToGoal.get(state.ladder[state.ladder.length - 1]);

    $("splashDate").textContent = prettyDate(state.daily.dateKey);
    $("splashNo").textContent = "No. " + puzzleNumber(state.daily.dateKey);
    $("splashStart").textContent = state.daily.start;
    $("splashGoal").textContent = state.daily.goal;
    $("splashPar").textContent = "par " + state.daily.par;

    let line;
    let label;

    if (state.finished && state.won) {
      line = "You solved today's ladder in " + moves + (moves === 1 ? " move" : " moves") + ". A new one drops at midnight.";
      label = "See result";
    } else if (state.finished) {
      line = "You ran out of time today. Tomorrow's ladder drops at midnight.";
      label = "See result";
    } else if (moves > 0) {
      line = "You're on move " + moves + " of today's ladder. <b>" +
        (left === 1 ? "One move" : left + " moves") + " to go.</b>";
      label = "Continue";
    } else if (streaks.current > 0) {
      line = "Go ahead, add another day to your <b>" + streaks.current + "-day streak</b>.";
      label = "Play";
    } else {
      line = "Turn the start word into the goal word, one letter per move. <b>Two minutes</b> on the clock.";
      label = "Play";
    }

    $("splashLine").innerHTML = line;
    $("playBtn").textContent = label;
  }

  const GUEST_KEY = "wooper.v4.guest:";

  function guestToday() {
    try {
      return localStorage.getItem(GUEST_KEY + dayKey()) === "1";
    } catch (err) {
      return false;
    }
  }

  function openGate() {
    const signedIn = Boolean(loadSession() && loadSession().email);
    if (signedIn || guestToday()) return openSplash();

    const dateKey = state.daily.dateKey;
    $("gateDate").textContent = prettyDate(dateKey);
    $("gateNo").textContent = "No. " + puzzleNumber(dateKey);
    $("gateEmailForm").hidden = false;
    $("gateCodeForm").hidden = true;
    $("gateMsg").textContent = "";
    $("gateSendBtn").disabled = !authReady();
    $("gateNote").textContent = authReady()
      ? "Without an account, streaks stay on this device."
      : "Accounts aren't connected yet — play as a guest and your streak stays on this device.";

    $("gate").hidden = false;
    $("splash").hidden = true;
    document.body.classList.add("splash-open");
  }

  function closeGate(guest) {
    if (guest) {
      try {
        localStorage.setItem(GUEST_KEY + dayKey(), "1");
      } catch (err) { /* ignore */ }
    }
    $("gate").hidden = true;
    document.body.classList.remove("splash-open");
    openSplash();
  }

  function openSplash() {
    guessQueue.length = 0;
    renderSplash();
    $("splash").hidden = false;
    document.body.classList.add("splash-open");
  }

  function closeSplash() {
    $("splash").hidden = true;
    document.body.classList.remove("splash-open");
    // "See result" jumps straight to the card; otherwise hand over to the board
    if (state.finished) setTimeout(showResult, 140);
  }

  /* -------------------------------- results ------------------------------- */

  function renderSolution() {
    const box = $("solutionBox");
    const route = shortestLadder(state.daily.start) || [];
    box.innerHTML = "";

    route.forEach((word, index) => {
      const row = document.createElement("div");
      row.className = "sol-row" + (index === 0 ? " sol-start" : "") +
        (index === route.length - 1 ? " sol-goal" : "");

      const label = document.createElement("span");
      label.className = "sol-label";
      label.textContent = index === 0 ? "START" : index === route.length - 1 ? "GOAL" : String(index);

      const tiles = document.createElement("div");
      tiles.className = "sol-tiles";
      const previous = index > 0 ? route[index - 1] : null;
      [...word].forEach((letter, i) => {
        const tile = document.createElement("span");
        tile.className = "sol-tile" +
          (previous && previous[i] !== letter ? " changed" : "") +
          (index === route.length - 1 ? " finish" : "");
        tile.textContent = letter.toUpperCase();
        tiles.appendChild(tile);
      });

      row.append(label, tiles);
      box.appendChild(row);
    });

    const note = document.createElement("p");
    note.className = "sol-note";
    const moves = Math.max(0, state.ladder.length - 1);
    note.textContent =
      route.length - 1 === moves && state.won
        ? "That is exactly the route you took — flawless."
        : "The shortest route takes " + (route.length - 1) + " moves (par " + state.daily.par + ").";
    box.appendChild(note);
    box.hidden = false;
    $("revealBtn").disabled = true;
    $("revealBtn").textContent = "Shortest ladder shown";
  }

  function emojiGrid() {
    const glyph = { correct: "🩷", present: "🟧", absent: "🟪" };
    return state.ladder
      .slice(1)
      .map((word) => feedback(word).map((m) => glyph[m]).join(""))
      .join("\n");
  }

  // Same grid, drawn with colour chips so it never depends on an emoji font.
  function renderResultGrid() {
    const grid = $("resultGrid");
    grid.innerHTML = "";
    state.ladder.slice(1).forEach((word) => {
      const row = document.createElement("div");
      row.className = "g-row";
      feedback(word).forEach((mark) => {
        const chip = document.createElement("span");
        chip.className = "g " + mark;
        row.appendChild(chip);
      });
      grid.appendChild(row);
    });
  }

  function showResult() {
    const { start, goal, par } = state.daily;
    const moves = Math.max(0, state.ladder.length - 1);
    const streaks = loadStreaks();
    const hintNote = state.hintsUsed
      ? " · " + state.hintsUsed + (state.hintsUsed === 1 ? " hint" : " hints")
      : "";

    let title;
    if (state.won) {
      title = moves <= par ? "Perfect ladder!" : moves <= par + 2 ? "Splendid!" : "Phew — you made it!";
      $("resultSub").innerHTML =
        "<b>" + start.toUpperCase() + "</b> → <b>" + goal.toUpperCase() + "</b> · " +
        moves + (moves === 1 ? " move" : " moves") + " · par " + par + hintNote;
    } else {
      title = state.reason === "time" ? "Time's up" : "Ladder over";
      const away = state.daily.distToGoal.get(state.ladder[state.ladder.length - 1]);
      $("resultSub").innerHTML =
        "<b>" + start.toUpperCase() + "</b> → <b>" + goal.toUpperCase() + "</b> · " +
        "time ran out after " + moves + (moves === 1 ? " move" : " moves") +
        (away ? " · you were " + away + (away === 1 ? " move" : " moves") + " away" : "");
    }

    $("resultTitle").textContent = title;
    renderResultGrid();
    $("solutionBox").hidden = true;
    $("solutionBox").innerHTML = "";
    $("revealBtn").disabled = false;
    $("revealBtn").textContent = "Show the shortest ladder · " + par + " moves";
    $("resultStreak").textContent = state.won
      ? (streaks.current > 1
          ? "Day " + streaks.current + " of your streak" + (streaks.current === streaks.max ? " — a personal best!" : "")
          : "Streak started — come back tomorrow to keep it going")
      : "Streak reset — solve tomorrow's ladder to start again.";

    openDialog("resultDialog");
  }

  async function shareResult() {
    const { start, goal, par } = state.daily;
    const moves = Math.max(0, state.ladder.length - 1);
    const message =
      "WOOPER " + state.daily.dateKey + "\n" +
      start.toUpperCase() + " → " + goal.toUpperCase() + " · " +
      (state.won ? moves + (moves === 1 ? " move" : " moves") : "X") +
      " · par " + par + "\n" +
      emojiGrid();
    try {
      await navigator.clipboard.writeText(message);
      toast("Copied to clipboard", 1200);
    } catch (err) {
      const area = document.createElement("textarea");
      area.value = message;
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        toast("Copied to clipboard", 1200);
      } catch (e) {
        toast("Copy failed", 1400);
      }
      area.remove();
    }
  }

  function showStats() {
    const s = loadStreaks();
    const live = effectiveStreak(s);
    $("statPlayed").textContent = s.played || 0;
    $("statWinPct").textContent = s.played ? Math.round(((s.wins || 0) / s.played) * 100) + "%" : "0%";
    $("statStreak").textContent = live;
    $("statMax").textContent = s.max || 0;

    const row = $("historyRow");
    row.innerHTML = "";
    const today = dayKey();
    for (let i = 6; i >= 0; i--) {
      const key = keyMinusDays(today, i);
      const cell = document.createElement("div");
      const entry = s.history[key];
      cell.className = "history-cell" + (entry ? " " + entry : "");
      cell.textContent = String(Number(key.slice(-2)));
      cell.title = key + (entry ? " · " + entry : " · not played");
      row.appendChild(cell);
    }

    const note = $("streakNote");
    if (!live) {
      note.textContent = "No streak yet — solve today to get on the board.";
    } else if (s.lastSolved === today) {
      note.textContent = live + " day" + (live === 1 ? "" : "s") + " and counting. See you tomorrow!";
    } else {
      note.textContent = live + " day" + (live === 1 ? "" : "s") + " on the line today.";
    }
    $("statsNext").textContent = countdownText();
    openDialog("statsDialog");
  }

  /* --------------------------------- dialogs ------------------------------ */

  function openDialog(id) {
    const dialog = $(id);
    if (dialog && !dialog.open) dialog.showModal();
  }

  function closeDialog(id) {
    const dialog = $(id);
    if (dialog && dialog.open) dialog.close();
  }

  /* -------------------------------- keyboard ------------------------------ */

  function buildKeyboard() {
    const container = $("keyboard");
    container.innerHTML = "";
    const rows = [
      "qwertyuiop".split(""),
      "asdfghjkl".split(""),
      ["enter", ..."zxcvbnm".split(""), "backspace"],
    ];
    rows.forEach((letters) => {
      const row = document.createElement("div");
      row.className = "krow";
      letters.forEach((key) => {
        const button = document.createElement("button");
        button.type = "button";
        if (key === "enter" || key === "backspace") {
          button.className = "key wide";
          button.textContent = key === "enter" ? "enter" : "del";
          button.setAttribute("aria-label", key === "enter" ? "Submit word" : "Delete letter");
          button.dataset.action = key;
        } else {
          button.className = "key";
          button.textContent = key;
          button.dataset.letter = key;
        }
        row.appendChild(button);
      });
      container.appendChild(row);
    });
  }

  function countdownText() {
    const now = new Date();
    const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    const seconds = Math.max(0, Math.floor((next - now) / 1000));
    return (
      String(Math.floor(seconds / 3600)).padStart(2, "0") + ":" +
      String(Math.floor((seconds % 3600) / 60)).padStart(2, "0") + ":" +
      String(seconds % 60).padStart(2, "0")
    );
  }

  function tickCountdown() {
    const text = countdownText();
    $("dailyTimer").textContent = text;
    if ($("statsNext")) $("statsNext").textContent = text;
    if (state.daily && dayKey() !== state.daily.dateKey) location.reload();
  }

  /* ---------------------------------- boot -------------------------------- */

  function boot() {
    initTheme();
    buildKeyboard();
    bindEvents();
    $("board").innerHTML = '<div class="board-empty">Loading today\'s ladder…</div>';

    try {
      firstVisit = !localStorage.getItem("wooper.v4.seen");
      localStorage.setItem("wooper.v4.seen", "1");
    } catch (err) {
      firstVisit = false;
    }
    // let the shell paint before the word graph is built
    setTimeout(startGame, 20);
  }

  function startGame() {
    state.daily = pickDailyPuzzle();
    const restored = restoreState();

    // the clock survives reloads: resume it, or call the run if it already ran out
    if (!state.finished && state.deadline) {
      if (state.deadline <= Date.now()) {
        state.finished = true;
        state.won = false;
        state.reason = "time";
        state.deadline = Date.now();
        saveState();
        recordResult(state.daily.dateKey, false);
      }
    }

    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [dy, dm, dd] = state.daily.dateKey.split("-").map(Number);
    $("brandMeta").textContent =
      "No. " + puzzleNumber(state.daily.dateKey) + "  ·  " + MONTHS[dm - 1] + " " + dd;

    renderTargets();
    render();

    if (!state.finished && state.deadline) {
      stopClock();
      clockId = setInterval(tickClock, 250);
      tickClock();
    }

    tickCountdown();
    setInterval(tickCountdown, 1000);

    // arriving from an emailed sign-in link? that already counts as signed in
    const fromLink = authReady() && consumeMagicLink();
    if (fromLink) {
      accountUI();
      pullProgress();
      setTimeout(() => toast("Signed in as " + (loadSession() || {}).email, 2600), 900);
    }

    if (fromLink) openSplash();
    else openGate();

    const streak = loadStreaks();
    if (state.won) {
      toast("Next ladder in " + countdownText(), 2200);
    } else if (state.finished) {
      toast("Next ladder in " + countdownText(), 2200);
    } else if (restored && state.ladder.length > 1) {
      toast("Ladder restored — pick up where you left off", 1800);
    } else if (streak.current > 0 && streak.lastSolved !== state.daily.dateKey) {
      setTimeout(() => {
        if (!state.streakToastShown && !state.finished && state.ladder.length === 1) {
          state.streakToastShown = true;
          toast(streak.current + "-day streak on the line", 2200);
        }
      }, 1600);
    }
  }

  function bindEvents() {
    $("playBtn").addEventListener("click", closeSplash);
    $("splashHelpBtn").addEventListener("click", () => openDialog("helpDialog"));
    $("helpBtn").addEventListener("click", () => openDialog("helpDialog"));
    $("streakBtn").addEventListener("click", showStats);
    $("backBtn").addEventListener("click", openSplash);
    $("settingsBtn").addEventListener("click", () => {
      accountUI();
      openDialog("settingsDialog");
    });

    $("signInForm").addEventListener("submit", (e) => { e.preventDefault(); sendCode(AUTH_FORM_SETTINGS); });
    $("codeForm").addEventListener("submit", (e) => { e.preventDefault(); verifyCode(AUTH_FORM_SETTINGS); });
    paintHintCopy();
    $("gateEmailForm").addEventListener("submit", (e) => { e.preventDefault(); sendCode(AUTH_FORM_GATE); });
    $("gateCodeForm").addEventListener("submit", (e) => { e.preventDefault(); verifyCode(AUTH_FORM_GATE); });
    $("gateSkipBtn").addEventListener("click", () => closeGate(true));
    $("signOutBtn").addEventListener("click", () => {
      saveSession(null);
      try {
        localStorage.removeItem(GUEST_KEY + dayKey());
      } catch (err) { /* ignore */ }
      accountUI();
      toast("Signed out — streaks stay on this device", 2200);
    });
    $("clearDataBtn").addEventListener("click", () => {
      try {
        Object.keys(localStorage)
          .filter((k) => k.startsWith(SAVE_PREFIX))
          .forEach((k) => localStorage.removeItem(k));
      } catch (err) { /* ignore */ }
      toast("Today's progress cleared", 2000);
      setTimeout(() => location.reload(), 800);
    });
    $("hintBtn").addEventListener("click", useHint);
    $("hintConfirmBtn").addEventListener("click", () => {
      try {
        localStorage.setItem(HINT_NOTE_KEY, "1");
      } catch (err) { /* ignore */ }
      $("hintDialog").close();
      applyHint();
    });
    $("doneResultBtn").addEventListener("click", showResult);
    $("revealBtn").addEventListener("click", renderSolution);
    $("shareBtn").addEventListener("click", shareResult);

    document.querySelectorAll("[data-close]").forEach((btn) => {
      btn.addEventListener("click", () => closeDialog(btn.dataset.close));
    });

    // clicking the backdrop closes a dialog
    document.querySelectorAll("dialog").forEach((dialog) => {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
      });
    });

    $("keyboard").addEventListener("click", (event) => {
      const key = event.target.closest(".key");
      if (!key) return;
      if (key.dataset.action === "enter") submitGuess();
      else if (key.dataset.action === "backspace") backspace();
      else if (key.dataset.letter) typeLetter(key.dataset.letter);
    });

    document.addEventListener("keydown", (event) => {
      if (document.querySelector("dialog[open]")) return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "Enter") {
        event.preventDefault();
        submitGuess();
      } else if (event.key === "Backspace") {
        event.preventDefault();
        backspace();
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        typeLetter(event.key.toLowerCase());
      }
    });

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
