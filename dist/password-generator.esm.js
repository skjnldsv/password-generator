var randomInt = (minimumValue, maximumValue) => {
	if (maximumValue === undefined) {
		maximumValue = minimumValue;
		minimumValue = 0;
	}

	if (typeof minimumValue !== 'number' || typeof maximumValue !== 'number') {
		throw new TypeError('Expected all arguments to be numbers');
	}

	return Math.floor(
		(Math.random() * (maximumValue - minimumValue + 1)) + minimumValue
	);
};

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);

function shuffle(array, i0 = 0, i1 = array.length) {
  var m = i1 - (i0 = +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
}

const animals = [
	'meerkat',
	'aardvark',
	'addax',
	'alligator',
	'alpaca',
	'anteater',
	'antelope',
	'aoudad',
	'ape',
	'argali',
	'armadillo',
	'baboon',
	'badger',
	'basilisk',
	'bat',
	'bear',
	'beaver',
	'bighorn',
	'bison',
	'boar',
	'budgerigar',
	'buffalo',
	'bull',
	'bunny',
	'burro',
	'camel',
	'canary',
	'capybara',
	'cat',
	'chameleon',
	'chamois',
	'cheetah',
	'chimpanzee',
	'chinchilla',
	'chipmunk',
	'civet',
	'coati',
	'colt',
	'cougar',
	'cow',
	'coyote',
	'crocodile',
	'crow',
	'deer',
	'dingo',
	'doe',
	'dung beetle',
	'dog',
	'donkey',
	'dormouse',
	'dromedary',
	'duckbill platypus',
	'dugong',
	'eland',
	'elephant',
	'elk',
	'ermine',
	'ewe',
	'fawn',
	'ferret',
	'finch',
	'fish',
	'fox',
	'frog',
	'gazelle',
	'gemsbok',
	'gila monster',
	'giraffe',
	'gnu',
	'goat',
	'gopher',
	'gorilla',
	'grizzly bear',
	'ground hog',
	'guanaco',
	'guinea pig',
	'hamster',
	'hare',
	'hartebeest',
	'hedgehog',
	'highland cow',
	'hippopotamus',
	'hog',
	'horse',
	'hyena',
	'ibex',
	'iguana',
	'impala',
	'jackal',
	'jaguar',
	'jerboa',
	'kangaroo',
	'kitten',
	'koala',
	'lamb',
	'lemur',
	'leopard',
	'lion',
	'lizard',
	'llama',
	'lovebird',
	'lynx',
	'mandrill',
	'mare',
	'marmoset',
	'marten',
	'mink',
	'mole',
	'mongoose',
	'monkey',
	'moose',
	'mountain goat',
	'mouse',
	'mule',
	'musk deer',
	'musk-ox',
	'muskrat',
	'mustang',
	'mynah bird',
	'newt',
	'ocelot',
	'okapi',
	'opossum',
	'orangutan',
	'oryx',
	'otter',
	'ox',
	'panda',
	'panther',
	'parakeet',
	'parrot',
	'peccary',
	'pig',
	'octopus',
	'thorny devil',
	'starfish',
	'blue crab',
	'snowy owl',
	'chicken',
	'rooster',
	'bumble bee',
	'eagle owl',
	'polar bear',
	'pony',
	'porcupine',
	'porpoise',
	'prairie dog',
	'pronghorn',
	'puma',
	'puppy',
	'quagga',
	'rabbit',
	'raccoon',
	'ram',
	'rat',
	'reindeer',
	'rhinoceros',
	'salamander',
	'seal',
	'sheep',
	'shrew',
	'silver fox',
	'skunk',
	'sloth',
	'snake',
	'springbok',
	'squirrel',
	'stallion',
	'steer',
	'tapir',
	'tiger',
	'toad',
	'turtle',
	'vicuna',
	'walrus',
	'warthog',
	'waterbuck',
	'weasel',
	'whale',
	'wildcat',
	'bald eagle',
	'wolf',
	'wolverine',
	'wombat',
	'woodchuck',
	'yak',
	'zebra',
	'zebu'
];

const colours = [
	'alice blue',
	'antique white',
	'aqua',
	'aquamarine',
	'azure',
	'beige',
	'bisque',
	'black',
	'blanched almond',
	'blue',
	'blue violet',
	'brown',
	'buff',
	'burlywood',
	'cadet blue',
	'chartreuse',
	'chocolate',
	'coral',
	'cornflower blue',
	'cornsilk',
	'crimson',
	'cyan',
	'dark blue',
	'dark brown',
	'dark buff',
	'dark cyan',
	'dark gold',
	'dark goldenrod',
	'dark gray',
	'dark green',
	'dark ivory',
	'dark khaki',
	'dark magenta',
	'dark mustard',
	'dark olive green',
	'dark orange',
	'dark orchid',
	'dark pink',
	'dark red',
	'dark salmon',
	'dark sea green',
	'dark silver',
	'dark slate blue',
	'dark slate gray',
	'dark turquoise',
	'dark violet',
	'dark yellow',
	'deep pink',
	'deep sky blue',
	'dim gray',
	'dodger blue',
	'firebrick',
	'floral white',
	'forest green',
	'fuchsia',
	'gainsboro',
	'ghost white',
	'gold',
	'goldenrod',
	'gray',
	'green',
	'green yellow',
	'honeydew',
	'hot pink',
	'indian red',
	'indigo',
	'ivory',
	'khaki',
	'lavender',
	'lavender blush',
	'lawn green',
	'lemon chiffon',
	'light black',
	'light blue',
	'light brown',
	'light buff',
	'light coral',
	'light cyan',
	'light gold',
	'light goldenrod',
	'light gray',
	'light green',
	'light ivory',
	'light magenta',
	'light mustard',
	'light orange',
	'light pink',
	'light red',
	'light salmon',
	'light sea green',
	'light silver',
	'light sky blue',
	'light slate gray',
	'light steel blue',
	'light turquoise',
	'light violet',
	'light yellow',
	'lime',
	'lime green',
	'linen',
	'magenta',
	'maroon',
	'medium aquamarine',
	'medium blue',
	'medium orchid',
	'medium purple',
	'medium sea green',
	'medium slate blue',
	'medium spring green',
	'medium turquoise',
	'medium violet red',
	'midnight blue',
	'mint cream',
	'misty rose',
	'moccasin',
	'mustard',
	'navajo white',
	'navy blue',
	'old lace',
	'olive',
	'olive drab',
	'orange',
	'orange red',
	'orchid',
	'pale goldenrod',
	'pale green',
	'pale turquoise',
	'pale violet red',
	'papaya whip',
	'peach puff',
	'peru',
	'pink',
	'plum',
	'powder blue',
	'purple',
	'rebecca purple',
	'red',
	'rosy brown',
	'royal blue',
	'saddle brown',
	'salmon',
	'sandy brown',
	'sea green',
	'seashell',
	'sienna',
	'silver',
	'sky blue',
	'slate blue',
	'slate gray',
	'snow',
	'spring green',
	'steel blue',
	'tan',
	'teal',
	'thistle',
	'tomato',
	'turquoise',
	'violet',
	'web gray',
	'web green',
	'web maroon',
	'web purple',
	'wheat',
	'white',
	'white smoke',
	'yellow',
	'yellow green'
];

const fruits = [
	'akee',
	'apple',
	'apricot',
	'avocado',
	'açaí',
	'banana',
	'bilberry',
	'black sapote',
	'blackberry',
	'blackcurrant',
	'blueberry',
	'boysenberry',
	'buddhas hand',
	'cherimoya',
	'cherry',
	'chico fruit',
	'cloudberry',
	'coconut',
	'crab apples',
	'cranberry',
	'cucumber',
	'currant',
	'damson',
	'date palm',
	'dragonfruit',
	'durian',
	'elderberry',
	'feijoa',
	'fig',
	'goji berry',
	'gooseberry',
	'grape',
	'grapefruit',
	'guava',
	'honeyberry',
	'huckleberry',
	'jabuticaba',
	'jackfruit',
	'jambul',
	'japanese plum',
	'jostaberry',
	'jujube',
	'juniper berry',
	'kiwano',
	'kiwifruit',
	'kumquat',
	'lemon',
	'lime',
	'longan',
	'loquat',
	'lychee',
	'mango',
	'mangosteen',
	'marionberry',
	'melon',
	'miracle fruit',
	'mulberry',
	'nance',
	'nectarine',
	'orange',
	'papaya',
	'passionfruit',
	'peach',
	'pear',
	'persimmon',
	'pineapple',
	'pineberry',
	'pitaya',
	'plantain',
	'plum',
	'plumcot',
	'pomegranate',
	'pomelo',
	'purple mangosteen',
	'quince',
	'rambutan',
	'raspberry',
	'redcurrant',
	'salak',
	'salal',
	'satsuma',
	'soursop',
	'star apple',
	'star fruit',
	'strawberry',
	'surinam cherry',
	'tamarillo',
	'tamarind',
	'white currant',
	'white sapote',
	'yuzu'
];

const nouns = [
	'ability',
	'abroad',
	'abuse',
	'access',
	'accident',
	'account',
	'act',
	'action',
	'active',
	'activity',
	'actor',
	'addition',
	'address',
	'administration',
	'adult',
	'advance',
	'advantage',
	'advice',
	'affair',
	'affect',
	'afternoon',
	'age',
	'agency',
	'agent',
	'agreement',
	'air',
	'airline',
	'airport',
	'alarm',
	'alcohol',
	'alternative',
	'ambition',
	'amount',
	'analysis',
	'analyst',
	'anger',
	'angle',
	'animal',
	'annual',
	'answer',
	'anxiety',
	'anybody',
	'anything',
	'anywhere',
	'apartment',
	'appeal',
	'appearance',
	'apple',
	'application',
	'appointment',
	'area',
	'argument',
	'arm',
	'army',
	'arrival',
	'art',
	'article',
	'aside',
	'aspect',
	'assignment',
	'assist',
	'assistance',
	'assistant',
	'associate',
	'association',
	'assumption',
	'atmosphere',
	'attack',
	'attempt',
	'attention',
	'attitude',
	'audience',
	'author',
	'average',
	'award',
	'awareness',
	'baby',
	'back',
	'background',
	'bag',
	'bake',
	'balance',
	'ball',
	'band',
	'bank',
	'bar',
	'base',
	'baseball',
	'basis',
	'basket',
	'bat',
	'bath',
	'bathroom',
	'battle',
	'beach',
	'bear',
	'beat',
	'beautiful',
	'bed',
	'bedroom',
	'beer',
	'bell',
	'belt',
	'bench',
	'bend',
	'benefit',
	'bet',
	'beyond',
	'bicycle',
	'bid',
	'big',
	'bike',
	'bill',
	'bird',
	'birth',
	'birthday',
	'bit',
	'bite',
	'bitter',
	'black',
	'blame',
	'blank',
	'blind',
	'block',
	'blood',
	'blow',
	'blue',
	'board',
	'boat',
	'body',
	'bone',
	'bonus',
	'book',
	'boot',
	'border',
	'boss',
	'bother',
	'bottle',
	'bottom',
	'bowl',
	'box',
	'boy',
	'boyfriend',
	'brain',
	'branch',
	'brave',
	'bread',
	'break',
	'breakfast',
	'breast',
	'breath',
	'brick',
	'bridge',
	'brief',
	'brilliant',
	'broad',
	'brother',
	'brown',
	'brush',
	'buddy',
	'budget',
	'bug',
	'building',
	'bunch',
	'burn',
	'bus',
	'business',
	'button',
	'buy',
	'buyer',
	'cabinet',
	'cable',
	'cake',
	'calendar',
	'call',
	'calm',
	'camera',
	'camp',
	'campaign',
	'can',
	'cancel',
	'cancer',
	'candidate',
	'candle',
	'candy',
	'cap',
	'capital',
	'car',
	'card',
	'care',
	'career',
	'carpet',
	'carry',
	'case',
	'cash',
	'cat',
	'catch',
	'category',
	'cause',
	'celebration',
	'cell',
	'chain',
	'chair',
	'challenge',
	'champion',
	'championship',
	'chance',
	'change',
	'channel',
	'chapter',
	'character',
	'charge',
	'charity',
	'chart',
	'check',
	'cheek',
	'chemical',
	'chemistry',
	'chest',
	'chicken',
	'child',
	'childhood',
	'chip',
	'chocolate',
	'choice',
	'church',
	'cigarette',
	'city',
	'claim',
	'class',
	'classic',
	'classroom',
	'clerk',
	'click',
	'client',
	'climate',
	'clock',
	'closet',
	'clothes',
	'cloud',
	'club',
	'clue',
	'coach',
	'coast',
	'coat',
	'code',
	'coffee',
	'cold',
	'collar',
	'collection',
	'college',
	'combination',
	'combine',
	'comfort',
	'comfortable',
	'command',
	'comment',
	'commercial',
	'commission',
	'committee',
	'common',
	'communication',
	'community',
	'company',
	'comparison',
	'competition',
	'complaint',
	'complex',
	'computer',
	'concentrate',
	'concept',
	'concern',
	'concert',
	'conclusion',
	'condition',
	'conference',
	'confidence',
	'conflict',
	'confusion',
	'connection',
	'consequence',
	'consideration',
	'consist',
	'constant',
	'construction',
	'contact',
	'contest',
	'context',
	'contract',
	'contribution',
	'control',
	'conversation',
	'convert',
	'cook',
	'cookie',
	'copy',
	'corner',
	'cost',
	'count',
	'counter',
	'country',
	'county',
	'couple',
	'courage',
	'course',
	'court',
	'cousin',
	'cover',
	'cow',
	'crack',
	'craft',
	'crash',
	'crazy',
	'cream',
	'creative',
	'credit',
	'crew',
	'criticism',
	'cross',
	'cry',
	'culture',
	'cup',
	'currency',
	'current',
	'curve',
	'customer',
	'cut',
	'cycle',
	'dad',
	'damage',
	'dance',
	'dare',
	'dark',
	'data',
	'database',
	'date',
	'daughter',
	'day',
	'dead',
	'deal',
	'dealer',
	'dear',
	'death',
	'debate',
	'debt',
	'decision',
	'deep',
	'definition',
	'degree',
	'delay',
	'delivery',
	'demand',
	'department',
	'departure',
	'dependent',
	'deposit',
	'depression',
	'depth',
	'description',
	'design',
	'designer',
	'desire',
	'desk',
	'detail',
	'development',
	'device',
	'devil',
	'diamond',
	'diet',
	'difference',
	'difficulty',
	'dig',
	'dimension',
	'dinner',
	'direction',
	'director',
	'dirt',
	'disaster',
	'discipline',
	'discount',
	'discussion',
	'disease',
	'dish',
	'disk',
	'display',
	'distance',
	'distribution',
	'district',
	'divide',
	'doctor',
	'document',
	'dog',
	'door',
	'dot',
	'double',
	'doubt',
	'draft',
	'drag',
	'drama',
	'draw',
	'drawer',
	'dream',
	'dress',
	'drink',
	'drive',
	'driver',
	'drop',
	'drunk',
	'due',
	'dump',
	'dust',
	'duty',
	'ear',
	'earth',
	'ease',
	'east',
	'eat',
	'economics',
	'economy',
	'edge',
	'editor',
	'education',
	'effect',
	'effective',
	'efficiency',
	'effort',
	'egg',
	'election',
	'elevator',
	'emergency',
	'emotion',
	'emphasis',
	'employ',
	'employee',
	'employer',
	'employment',
	'energy',
	'engine',
	'engineer',
	'entertainment',
	'enthusiasm',
	'entrance',
	'entry',
	'environment',
	'equal',
	'equipment',
	'equivalent',
	'error',
	'escape',
	'essay',
	'establishment',
	'estate',
	'estimate',
	'evening',
	'event',
	'evidence',
	'exam',
	'examination',
	'example',
	'exchange',
	'excitement',
	'excuse',
	'exercise',
	'exit',
	'experience',
	'expert',
	'explanation',
	'expression',
	'extension',
	'extent',
	'external',
	'extreme',
	'eye',
	'face',
	'fact',
	'factor',
	'fail',
	'failure',
	'fall',
	'familiar',
	'family',
	'fan',
	'farm',
	'farmer',
	'fat',
	'father',
	'fault',
	'fear',
	'feature',
	'fee',
	'feed',
	'feedback',
	'feel',
	'female',
	'few',
	'field',
	'fight',
	'figure',
	'file',
	'fill',
	'film',
	'final',
	'finance',
	'finger',
	'finish',
	'fire',
	'fish',
	'fix',
	'flight',
	'floor',
	'flow',
	'flower',
	'fly',
	'focus',
	'fold',
	'food',
	'foot',
	'football',
	'force',
	'forever',
	'formal',
	'fortune',
	'foundation',
	'frame',
	'freedom',
	'friend',
	'friendship',
	'front',
	'fruit',
	'fuel',
	'fun',
	'function',
	'funeral',
	'funny',
	'future',
	'gain',
	'game',
	'gap',
	'garage',
	'garbage',
	'garden',
	'gas',
	'gate',
	'gather',
	'gear',
	'gene',
	'general',
	'gift',
	'girl',
	'girlfriend',
	'give',
	'glad',
	'glass',
	'glove',
	'go',
	'goal',
	'god',
	'gold',
	'golf',
	'good',
	'government',
	'grab',
	'grade',
	'grand',
	'grandfather',
	'grandmother',
	'grass',
	'great',
	'green',
	'grocery',
	'ground',
	'group',
	'growth',
	'guarantee',
	'guard',
	'guess',
	'guest',
	'guidance',
	'guide',
	'guitar',
	'guy',
	'habit',
	'hair',
	'half',
	'hall',
	'hand',
	'handle',
	'hang',
	'harm',
	'hat',
	'hate',
	'head',
	'health',
	'heart',
	'heavy',
	'height',
	'hell',
	'hello',
	'help',
	'hide',
	'high',
	'highlight',
	'highway',
	'hire',
	'historian',
	'history',
	'hit',
	'hold',
	'hole',
	'holiday',
	'home',
	'homework',
	'honey',
	'hook',
	'hope',
	'horror',
	'horse',
	'hospital',
	'host',
	'hotel',
	'hour',
	'house',
	'housing',
	'human',
	'hunt',
	'hurry',
	'hurt',
	'husband',
	'ice',
	'idea',
	'ideal',
	'if',
	'illegal',
	'image',
	'imagination',
	'impact',
	'implement',
	'importance',
	'impress',
	'impression',
	'improvement',
	'incident',
	'income',
	'increase',
	'independence',
	'independent',
	'indication',
	'individual',
	'industry',
	'inevitable',
	'inflation',
	'influence',
	'information',
	'initial',
	'initiative',
	'injury',
	'insect',
	'inside',
	'inspection',
	'inspector',
	'instance',
	'instruction',
	'insurance',
	'intention',
	'interaction',
	'interest',
	'internal',
	'international',
	'internet',
	'interview',
	'introduction',
	'investment',
	'invite',
	'iron',
	'island',
	'issue',
	'it',
	'item',
	'jacket',
	'job',
	'join',
	'joint',
	'joke',
	'judge',
	'judgment',
	'juice',
	'jump',
	'junior',
	'jury',
	'keep',
	'key',
	'kick',
	'kid',
	'kill',
	'kind',
	'king',
	'kiss',
	'kitchen',
	'knee',
	'knife',
	'knowledge',
	'lab',
	'lack',
	'ladder',
	'lady',
	'lake',
	'land',
	'landscape',
	'language',
	'laugh',
	'law',
	'lawyer',
	'lay',
	'layer',
	'lead',
	'leader',
	'leadership',
	'league',
	'leather',
	'leave',
	'lecture',
	'leg',
	'length',
	'lesson',
	'let',
	'letter',
	'level',
	'library',
	'lie',
	'life',
	'lift',
	'light',
	'limit',
	'line',
	'link',
	'lip',
	'list',
	'listen',
	'literature',
	'load',
	'loan',
	'local',
	'location',
	'lock',
	'log',
	'long',
	'look',
	'loss',
	'love',
	'low',
	'luck',
	'lunch',
	'machine',
	'magazine',
	'mail',
	'main',
	'maintenance',
	'major',
	'make',
	'male',
	'mall',
	'man',
	'management',
	'manager',
	'manner',
	'manufacturer',
	'many',
	'map',
	'march',
	'mark',
	'market',
	'marriage',
	'master',
	'match',
	'mate',
	'material',
	'math',
	'matter',
	'maximum',
	'maybe',
	'meal',
	'measurement',
	'meat',
	'media',
	'medicine',
	'medium',
	'meet',
	'meeting',
	'member',
	'membership',
	'memory',
	'mention',
	'menu',
	'mess',
	'message',
	'metal',
	'method',
	'middle',
	'midnight',
	'might',
	'milk',
	'mind',
	'mine',
	'minimum',
	'minor',
	'minute',
	'mirror',
	'miss',
	'mission',
	'mistake',
	'mix',
	'mixture',
	'mobile',
	'mode',
	'model',
	'mom',
	'moment',
	'money',
	'monitor',
	'month',
	'mood',
	'morning',
	'mortgage',
	'most',
	'mother',
	'motor',
	'mountain',
	'mouse',
	'mouth',
	'move',
	'movie',
	'mud',
	'muscle',
	'music',
	'nail',
	'name',
	'nasty',
	'nation',
	'national',
	'native',
	'natural',
	'nature',
	'neat',
	'necessary',
	'neck',
	'negative',
	'negotiation',
	'nerve',
	'net',
	'network',
	'news',
	'newspaper',
	'night',
	'nobody',
	'noise',
	'normal',
	'north',
	'nose',
	'note',
	'nothing',
	'notice',
	'novel',
	'nurse',
	'object',
	'objective',
	'obligation',
	'occasion',
	'offer',
	'office',
	'officer',
	'official',
	'oil',
	'one',
	'operation',
	'opinion',
	'opportunity',
	'opposite',
	'option',
	'orange',
	'order',
	'ordinary',
	'organization',
	'original',
	'other',
	'outcome',
	'outside',
	'oven',
	'owner',
	'pace',
	'pack',
	'package',
	'page',
	'pain',
	'paint',
	'pair',
	'panic',
	'paper',
	'parent',
	'park',
	'parking',
	'part',
	'particular',
	'partner',
	'party',
	'pass',
	'passage',
	'passenger',
	'passion',
	'past',
	'path',
	'patience',
	'patient',
	'pattern',
	'pause',
	'pay',
	'payment',
	'peace',
	'peak',
	'pen',
	'penalty',
	'pension',
	'people',
	'percentage',
	'perception',
	'performance',
	'period',
	'permission',
	'permit',
	'person',
	'personal',
	'personality',
	'perspective',
	'phase',
	'philosophy',
	'phone',
	'photo',
	'phrase',
	'physical',
	'physics',
	'piano',
	'pick',
	'picture',
	'pie',
	'piece',
	'pin',
	'pipe',
	'pitch',
	'pizza',
	'plan',
	'plane',
	'plant',
	'plastic',
	'plate',
	'platform',
	'play',
	'player',
	'pleasure',
	'plenty',
	'poem',
	'poet',
	'poetry',
	'point',
	'police',
	'policy',
	'politics',
	'pollution',
	'pool',
	'pop',
	'population',
	'position',
	'positive',
	'possession',
	'possibility',
	'possible',
	'post',
	'pot',
	'potato',
	'potential',
	'pound',
	'power',
	'practice',
	'preference',
	'preparation',
	'presence',
	'present',
	'presentation',
	'president',
	'press',
	'pressure',
	'price',
	'pride',
	'priest',
	'primary',
	'principle',
	'print',
	'prior',
	'priority',
	'private',
	'prize',
	'problem',
	'procedure',
	'produce',
	'product',
	'profession',
	'professional',
	'professor',
	'profile',
	'profit',
	'program',
	'progress',
	'project',
	'promise',
	'promotion',
	'prompt',
	'proof',
	'property',
	'proposal',
	'protection',
	'psychology',
	'public',
	'pull',
	'punch',
	'purchase',
	'purple',
	'purpose',
	'push',
	'put',
	'quality',
	'quantity',
	'quarter',
	'queen',
	'question',
	'quiet',
	'quit',
	'quote',
	'race',
	'radio',
	'rain',
	'raise',
	'range',
	'rate',
	'ratio',
	'raw',
	'reach',
	'reaction',
	'read',
	'reality',
	'reason',
	'reception',
	'recipe',
	'recognition',
	'recommendation',
	'record',
	'recover',
	'red',
	'reference',
	'reflection',
	'refrigerator',
	'refuse',
	'region',
	'register',
	'regret',
	'regular',
	'relation',
	'relationship',
	'relative',
	'release',
	'relief',
	'remote',
	'remove',
	'rent',
	'repair',
	'repeat',
	'replacement',
	'reply',
	'report',
	'representative',
	'republic',
	'reputation',
	'request',
	'requirement',
	'research',
	'reserve',
	'resident',
	'resist',
	'resolution',
	'resolve',
	'resort',
	'resource',
	'respect',
	'respond',
	'response',
	'responsibility',
	'rest',
	'restaurant',
	'result',
	'return',
	'reveal',
	'revenue',
	'review',
	'revolution',
	'reward',
	'rice',
	'rich',
	'ride',
	'ring',
	'rip',
	'rise',
	'risk',
	'river',
	'road',
	'rock',
	'role',
	'roll',
	'roof',
	'room',
	'rope',
	'rough',
	'round',
	'routine',
	'row',
	'royal',
	'rub',
	'ruin',
	'rule',
	'run',
	'rush',
	'sad',
	'safe',
	'safety',
	'sail',
	'salad',
	'salary',
	'sale',
	'salt',
	'sample',
	'sand',
	'sandwich',
	'satisfaction',
	'save',
	'savings',
	'scale',
	'scene',
	'schedule',
	'scheme',
	'school',
	'science',
	'score',
	'scratch',
	'screen',
	'screw',
	'script',
	'sea',
	'search',
	'season',
	'seat',
	'secret',
	'secretary',
	'section',
	'sector',
	'security',
	'selection',
	'self',
	'sell',
	'senior',
	'sense',
	'sensitive',
	'sentence',
	'series',
	'serve',
	'service',
	'session',
	'set',
	'sex',
	'shake',
	'shame',
	'shape',
	'share',
	'she',
	'shelter',
	'shift',
	'shine',
	'ship',
	'shirt',
	'shock',
	'shoe',
	'shoot',
	'shop',
	'shot',
	'shoulder',
	'show',
	'shower',
	'sick',
	'side',
	'sign',
	'signal',
	'signature',
	'significance',
	'silly',
	'silver',
	'simple',
	'singer',
	'single',
	'sink',
	'sir',
	'sister',
	'site',
	'situation',
	'size',
	'skill',
	'skin',
	'skirt',
	'sky',
	'sleep',
	'slice',
	'slide',
	'slip',
	'smell',
	'smile',
	'smoke',
	'snow',
	'society',
	'sock',
	'soft',
	'software',
	'soil',
	'solid',
	'solution',
	'somewhere',
	'son',
	'song',
	'sort',
	'sound',
	'soup',
	'source',
	'south',
	'space',
	'spare',
	'speaker',
	'special',
	'specialist',
	'specific',
	'speech',
	'speed',
	'spell',
	'spend',
	'spirit',
	'spiritual',
	'spite',
	'split',
	'sport',
	'spot',
	'spray',
	'spread',
	'spring',
	'square',
	'stable',
	'staff',
	'stage',
	'stand',
	'standard',
	'star',
	'start',
	'state',
	'statement',
	'station',
	'status',
	'stay',
	'steak',
	'steal',
	'step',
	'stick',
	'still',
	'stock',
	'stomach',
	'stop',
	'storage',
	'store',
	'storm',
	'story',
	'strain',
	'stranger',
	'strategy',
	'street',
	'strength',
	'stress',
	'stretch',
	'strike',
	'string',
	'strip',
	'stroke',
	'structure',
	'struggle',
	'student',
	'studio',
	'stuff',
	'stupid',
	'style',
	'subject',
	'substance',
	'success',
	'suck',
	'sugar',
	'suggestion',
	'suit',
	'summer',
	'sun',
	'supermarket',
	'support',
	'surgery',
	'surprise',
	'surround',
	'survey',
	'suspect',
	'sweet',
	'swim',
	'switch',
	'sympathy',
	'system',
	'table',
	'tackle',
	'tale',
	'talk',
	'tank',
	'tap',
	'target',
	'task',
	'taste',
	'tax',
	'tea',
	'teach',
	'teacher',
	'team',
	'tear',
	'technology',
	'telephone',
	'television',
	'tell',
	'temperature',
	'temporary',
	'tennis',
	'tension',
	'term',
	'test',
	'text',
	'thanks',
	'theme',
	'theory',
	'thing',
	'thought',
	'throat',
	'ticket',
	'tie',
	'till',
	'tip',
	'title',
	'today',
	'toe',
	'tomorrow',
	'tone',
	'tongue',
	'tonight',
	'tool',
	'tooth',
	'top',
	'topic',
	'total',
	'touch',
	'tough',
	'tour',
	'tourist',
	'towel',
	'tower',
	'town',
	'track',
	'trade',
	'tradition',
	'traffic',
	'train',
	'trainer',
	'transition',
	'transportation',
	'trash',
	'travel',
	'treat',
	'tree',
	'trick',
	'trip',
	'trouble',
	'truck',
	'trust',
	'truth',
	'try',
	'tune',
	'turn',
	'twist',
	'two',
	'type',
	'uncle',
	'union',
	'unique',
	'unit',
	'university',
	'upper',
	'upstairs',
	'use',
	'user',
	'usual',
	'vacation',
	'valuable',
	'value',
	'variation',
	'variety',
	'vast',
	'vegetable',
	'vehicle',
	'version',
	'video',
	'view',
	'village',
	'virus',
	'visit',
	'visual',
	'voice',
	'volume',
	'wait',
	'wake',
	'walk',
	'wall',
	'war',
	'wash',
	'watch',
	'water',
	'wave',
	'way',
	'weakness',
	'wealth',
	'wear',
	'weather',
	'web',
	'wedding',
	'week',
	'weekend',
	'weight',
	'weird',
	'welcome',
	'west',
	'western',
	'wheel',
	'whereas',
	'white',
	'whole',
	'wife',
	'will',
	'win',
	'wind',
	'window',
	'wine',
	'wing',
	'winner',
	'winter',
	'wish',
	'witness',
	'woman',
	'wonder',
	'wood',
	'word',
	'worker',
	'world',
	'worry',
	'worth',
	'wrap',
	'writer',
	'yard',
	'year',
	'yellow',
	'yesterday',
	'you',
	'young',
	'youth',
	'zone',
];

const numbers = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen',
	'twenty',
	'twenty-one',
	'twenty-two',
	'twenty-three',
	'twenty-four',
	'twenty-five',
	'twenty-six',
	'twenty-seven',
	'twenty-eight',
	'twenty-nine',
	'thirty',
	'thirty-one',
	'thirty-two',
	'thirty-three',
	'thirty-four',
	'thirty-five',
	'thirty-six',
	'thirty-seven',
	'thirty-eight',
	'thirty-nine',
	'forty',
	'forty-one',
	'forty-two',
	'forty-three',
	'forty-four',
	'forty-five',
	'forty-six',
	'forty-seven',
	'forty-eight',
	'forty-nine',
	'fifty',
	'fifty-one',
	'fifty-two',
	'fifty-three',
	'fifty-four',
	'fifty-five',
	'fifty-six',
	'fifty-seven',
	'fifty-eight',
	'fifty-nine',
	'sixty',
	'sixty-one',
	'sixty-two',
	'sixty-three',
	'sixty-four',
	'sixty-five',
	'sixty-six',
	'sixty-seven',
	'sixty-eight',
	'sixty-nine',
	'seventy',
	'seventy-one',
	'seventy-two',
	'seventy-three',
	'seventy-four',
	'seventy-five',
	'seventy-six',
	'seventy-seven',
	'seventy-eight',
	'seventy-nine',
	'eighty',
	'eighty-one',
	'eighty-two',
	'eighty-three',
	'eighty-four',
	'eighty-five',
	'eighty-six',
	'eighty-seven',
	'eighty-eight',
	'eighty-nine',
	'ninety',
	'ninety-one',
	'ninety-two',
	'ninety-three',
	'ninety-four',
	'ninety-five',
	'ninety-six',
	'ninety-seven',
	'ninety-eight',
	'ninety-nine',
	'one hundred'
];

const vegetables = [
	'ahipa',
	'amaranth',
	'american groundnut',
	'aonori',
	'arame',
	'arracacha',
	'artichoke',
	'arugula',
	'asparagus',
	'aubergine',
	'avocado',
	'azuki bean',
	'badderlocks',
	'bamboo shoot',
	'beet',
	'beetroot',
	'bell pepper',
	'bitter gourd',
	'bitter melon',
	'black-eyed pea',
	'bok choy',
	'borage',
	'brinjal',
	'broadleaf arrowhead',
	'broccoli',
	'broccolini',
	'brussels sprouts',
	'burdock',
	'cabbage',
	'camas',
	'canna',
	'caper',
	'cardoon',
	'carola',
	'carrot',
	'cassava',
	'catsear',
	'cauliflower',
	'celeriac',
	'celery',
	'celtuce',
	'chaya',
	'chayote',
	'chickpea',
	'chickweed',
	'chicory',
	'chinese artichoke',
	'chinese mallow',
	'chives',
	'collard greens',
	'common bean',
	'common purslane',
	'corn salad',
	'courgette',
	'courgette flowers',
	'cress',
	'cucumber',
	'dabberlocks',
	'daikon',
	'dandelion',
	'daylily',
	'dill',
	'dillisk',
	'dolichos bean',
	'drumstick',
	'dulse',
	'earthnut pea',
	'eggplant',
	'elephant foot yam',
	'elephant garlic',
	'endive',
	'ensete',
	'fat hen',
	'fava bean',
	'fiddlehead',
	'florence fennel',
	'fluted pumpkin',
	'galangal',
	'garbanzo',
	'garden rocket',
	'garland chrysanthemum',
	'garlic',
	'garlic chives',
	'ginger',
	'golden samphire',
	'good king henry',
	'grape',
	'greater plantain',
	'green bean',
	'guar',
	'hamburg parsley',
	'horse gram',
	'horseradish',
	'indian pea',
	'ivy gourd',
	'jerusalem artichoke',
	'jícama',
	'kai-lan',
	'kale',
	'kohlrabi',
	'komatsuna',
	'kuka',
	'kurrat',
	'lagos bologi',
	'lamb lettuce',
	'lamb quarters',
	'land cress',
	'laver',
	'leek',
	'lemongrass',
	'lentil',
	'lettuce',
	'lima bean',
	'lizard tail',
	'loroco',
	'lotus root',
	'luffa',
	'malabar spinach',
	'mallow',
	'manchurian wild rice',
	'marrow',
	'mashua',
	'melokhia',
	'miner lettuce',
	'mizuna greens',
	'moth bean',
	'mung bean',
	'mustard',
	'napa cabbage',
	'new zealand spinach',
	'nopal',
	'okra',
	'olive fruit',
	'onion',
	'orache',
	'pak choy',
	'paracress',
	'parsnip',
	'pea',
	'peanut',
	'pearl onion',
	'pigeon pea',
	'pignut',
	'poke',
	'potato',
	'potato onion',
	'prairie turnip',
	'prussian asparagus',
	'pumpkin',
	'radicchio',
	'radish',
	'rapini',
	'ricebean',
	'runner bean',
	'rutabaga',
	'salsify',
	'samphire',
	'scallion',
	'scorzonera',
	'sculpit',
	'sea beet',
	'sea grape',
	'sea kale',
	'sea lettuce',
	'shallot',
	'shepherd purse',
	'sierra leone bologi',
	'skirret',
	'snap pea',
	'snow pea',
	'soko',
	'sorrel',
	'sour cabbage',
	'soybean',
	'spinach',
	'spring onion',
	'squash',
	'squash blossoms',
	'stridolo',
	'summer purslane',
	'swede',
	'sweet pepper',
	'sweet potato',
	'swiss chard',
	'taro',
	'tarwi',
	'tatsoi',
	'tepary bean',
	'ti',
	'tigernut',
	'tinda',
	'tomatillo',
	'tomato',
	'tree onion',
	'turmeric',
	'turnip',
	'ulluco',
	'urad bean',
	'vanilla',
	'velvet bean',
	'wasabi',
	'water caltrop',
	'water chestnut',
	'water melon',
	'water spinach',
	'watercress',
	'welsh onion',
	'west indian gherkin',
	'wheatgrass',
	'wild leek',
	'winged bean',
	'winter melon',
	'yacón',
	'yam',
	'yao choy',
	'yardlong bean',
	'yarrow',
	'zucchini'
];

function noSpecialChar (data) {
    return data.replace(/[$&+,:;=?@#|'<>.^*()%!-]/gi, ' ');
}

function upperCaseFirstLetter (data) {
    return data
        .split(' ')
        .map(function (part) { return part.charAt(0).toUpperCase() + part.substr(1).toLowerCase(); })
        .join('');
}

var randFromSet = function (set) {
    return set[randomInt(0, set.length - 1)].split(' ');
};
var generate = function (length, customSet) {
    if (length === void 0) { length = 4; }
    var randSet = [animals, colours, fruits, numbers, vegetables];
    var defaultSet = [nouns];
    var result = [];
    while (result.length < length) {
        // use custom set if defined
        // or use randSet set only if required set has not yet 
        // been used
        if (customSet || result.length >= defaultSet.length) {
            var set = customSet || randSet[randomInt(0, randSet.length - 1)];
            result.push.apply(result, randFromSet(set));
            // always include one of each defaultSet
        }
        else {
            var set = defaultSet[result.length];
            result.push.apply(result, randFromSet(set));
        }
    }
    // if last pushed entry have multiple word,
    // make sure we have the proper length
    var slicedResult = result.slice(0, length);
    // filter and format
    var formattedResult = slicedResult
        .map(noSpecialChar)
        .map(upperCaseFirstLetter);
    // shuffle the array
    return shuffle(formattedResult);
};

export default generate;
