const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    ``,
];

const domains = [
    '@gmail.com',
    '@yahoo.com',
    '@outlook.com',
    '@aol.com',
]

const thoughtBodies = [
    'How to disagree with someone',
    'iPhone review',
    'how-to video',
    'video essay on the history of video games',
    'How to make money on the App Store',
    'Learn NextJS in five minutes (Not clickbate)',
    'Movie trailer',
    'Hello world',
    'Another possible solution to the algorithm',
    'Apology video',
    'Submission for startup pitch',
];

const possibleReactions = [
    'I disagree!',
    'I tried your algorithm, here were the results',
    'This was awesome',
    'Thank you for the great content',
    'Please check out my video response',
    'Like and subscribe to my channel please',
    'Reply: The side effects of in app purchases on digital marketplaces',
];

const users = [];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
  `${getRandomArrItem(names)}${getRandomArrItem(names)}`;

// const getRandomUsers = (int) => {
//     let results = [];
//     for (let i = 0; i < int; i++) {
//         results.push({
//             username: getRandomName(),
//             email: username + getRandomArrItem(domains),
//         });
//     }
//     return results;
// }
const getRandomUsers = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      const username = getRandomName();
      const email = username + getRandomArrItem(domains);
      const thoughtText = getRandomArrItem(thoughtBodies);
      const thoughts = [thoughtText];
      const reactions = getRandomArrItem(possibleReactions);
      if (!results.includes(username)) {
        results.push({
          username,
          email,
          thoughts,
          thoughtText,
          reactions,
        });
      };
    }
    return results;
  };
  
  
//   const getRandomThought = (int) => {
//     let results = [];
//     for (let i = 0; i < int; i++) {
//       results.push({
//         thoughtText: getRandomArrItem(thoughtBodies),
//         username: getRandomArrItem(userIds),
//         reactions: [...getThoughtReaction(2)],
//       });
//     }
//     return results;
//   };

//   const getThoughtReaction = (int) => {
//     if (int === 1) {
//       return getRandomArrItem(possibleReactions);
//     }
//     let results = [];
//     for (let i = 0; i < int; i++) {
//       results.push({
//         reactionBody: getRandomArrItem(possibleReactions),
//         username: getRandomName(),
//       });
//     }
//     return results;
//   };

  module.exports = { getRandomName, getRandomUsers };