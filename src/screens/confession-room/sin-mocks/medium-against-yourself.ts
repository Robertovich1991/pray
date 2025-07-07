const unsatisfiedSoul = {
  machineName: "unsatisfied-soul",
  type: "against-yourself",
  severity: "medium",
  headerTitle: {
    en: "Unsatisfied Soul",
    fr: "Âme Insatiable",
  },
  description: {
    en: "An unsatisfied soul, like Judas’ greed for money, leaves no space for spiritual reflection. When a person is consumed by material desire, the heart is deaf to God's voice.",
    fr: "Une âme insatiable, semblable à la cupidité de Judas pour l'argent, ne laisse aucune place à la réflexion spirituelle. Lorsqu'une personne est consumée par le désir matériel, son cœur devient sourd à la voix de Dieu.",
  },
  cardImage: "UnsatisfiedSoul",
  detailBackgroundVideo: "videos/unsatisfied_soul_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "unsatisfied-soul-bible-reading",
        text: {
          en: "Read Luke 12:15–21 and Matthew 6:19–21. Reflect on how Jesus teaches us to store up treasure in heaven, not on earth.",
          fr: "Lisez Luc 12:15–21 et Matthieu 6:19–21. Réfléchissez à la manière dont Jésus nous enseigne à amasser un trésor dans le ciel, et non sur la terre.",
        },
        instructionText: {
          en: "Read carefully and slowly. Take notes on what God is saying to you.",
          fr: "Lisez attentivement et lentement. Prenez des notes sur ce que Dieu vous dit.",
        },
        readingDurationRange: "10–15 min",
        testDurationInSeconds: 600,
        overallTask: "Read both passages and answer the following questions.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "In Luke 12, what does Jesus say about life and possessions?",
              fr: "Dans Luc 12, que dit Jésus à propos de la vie et des possessions ?",
            },
            answers: [
              {
                text: {
                  en: "Life does not consist in the abundance of possessions",
                  fr: "La vie ne consiste pas dans l'abondance des biens",
                },
                isSolution: true,
              },
              {
                text: {
                  en: "We must seek riches first and then God",
                  fr: "Nous devons chercher les richesses d'abord, puis Dieu",
                },
                isSolution: false,
              },
            ],
          },
        ],
      },
    },
    {
      taskType: "prayer-recitation",
      payload: {
        key: "unsatisfied-soul-prayer",
        overallTask: "Recite this prayer to ask God to free you from greed and awaken your soul.",
        text: {
          en: "Lord, deliver me from the hunger for earthly gain. Fill my heart with hunger for Your Word and righteousness.",
          fr: "Seigneur, délivre-moi de la faim des biens terrestres. Remplis mon cœur de faim pour Ta Parole et Ta justice.",
        },
        instructionText: {
          en: "Pray with sincerity. Let each word guide your heart back to God.",
          fr: "Priez avec sincérité. Que chaque mot guide votre cœur vers Dieu.",
        },
        reflectionAfterPrayerText: {
          en: "What desires consume your thoughts most? How can you surrender them to God?",
          fr: "Quels désirs occupent le plus vos pensées ? Comment pouvez-vous les remettre à Dieu ?",
        },
      },
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "unsatisfied-soul-letter",
        overallTask: "Write a letter to God repenting of your obsession with material wealth.",
        instructionText: {
          en: "Use this space to express your struggle honestly. Ask for God’s mercy and a heart satisfied in Him.",
          fr: "Utilisez cet espace pour exprimer honnêtement votre lutte. Demandez la miséricorde de Dieu et un cœur satisfait en Lui.",
        },
      },
    },
    {
      taskType: "social-action",
      payload: {
        key: "unsatisfied-soul-charity",
        overallTask: "Give to someone in need this week. Practice detachment from material things.",
        instructionText: {
          en: "Donate clothes, food, or money anonymously. Do not expect anything in return.",
          fr: "Faites un don de vêtements, de nourriture ou d'argent de manière anonyme. N’attendez rien en retour.",
        },
      },
    },
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/LUK.12.15-21.NIV",
    "https://www.bible.com/bible/111/MAT.6.19-21.NIV",
  ],
};

const gluttony = {
  machineName: "gluttony",
  type: "against-yourself",
  severity: "medium",
  headerTitle: {
    en: "Gluttony",
    fr: "Gourmandise",
  },
  description: {
    en: "Gluttony or indulgence of the flesh, ignoring fasts, and strong attachment to pleasures such as food, alcohol, or drugs. As exemplified by the rich man who 'feasted sumptuously every day' (Luke 16:19).",
    fr: "La gourmandise ou l'indulgence de la chair, ignorant les jeûnes, et un fort attachement aux plaisirs tels que la nourriture, l'alcool ou les drogues. Comme l'exemple de l'homme riche qui « faisait chaque jour brillante chère » (Luc 16:19).",
  },
  cardImage: "Gluttony",
  detailBackgroundVideo: "videos/gluttony_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "gluttony-bible-readings",
        text: {
          en: "Read Luke 16:19–31, Proverbs 23:20–21, and Philippians 3:18–19. Reflect on the spiritual dangers of overindulgence.",
          fr: "Lisez Luc 16:19–31, Proverbes 23:20–21 et Philippiens 3:18–19. Réfléchissez aux dangers spirituels de l’excès.",
        },
        instructionText: {
          en: "Read prayerfully and slowly. Consider how these passages speak to overindulgence.",
          fr: "Lisez lentement et avec prière. Réfléchissez à la manière dont ces passages parlent de l'excès.",
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read the Bible passages and answer the questions.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "What was the consequence of the rich man's gluttonous life in Luke 16?",
              fr: "Quelle a été la conséquence de la vie gourmande de l'homme riche dans Luc 16 ?",
            },
            answers: [
              {
                text: {
                  en: "He ended up in torment after death.",
                  fr: "Il s'est retrouvé dans le tourment après la mort.",
                },
                isSolution: true,
              },
              {
                text: {
                  en: "He was rewarded for his wealth.",
                  fr: "Il a été récompensé pour sa richesse.",
                },
                isSolution: false,
              },
            ],
          },
        ],
      },
    },
    {
      taskType: "prayer-recitation",
      payload: {
        key: "gluttony-prayer",
        overallTask: "Pray for moderation and detachment from material indulgence.",
        text: {
          en: "Lord, grant me the strength to resist gluttony and seek satisfaction in Your Spirit.",
          fr: "Seigneur, donne-moi la force de résister à la gourmandise et de trouver satisfaction en Ton Esprit.",
        },
        instructionText: {
          en: "Read this prayer slowly and with intention.",
          fr: "Lisez cette prière lentement et avec intention.",
        },
        reflectionAfterPrayerText: {
          en: "What physical habits can you change to grow spiritually?",
          fr: "Quelles habitudes physiques pouvez-vous changer pour progresser spirituellement ?",
        },
      },
    },
    {
      taskType: "participation-in-rituals",
      payload: {
        key: "gluttony-ritual",
        overallTask: "Attend 3 church services during the week and practice voluntary fasting.",
        instructionText: {
          en: "Participate in scheduled services and offer a small fast as repentance.",
          fr: "Participez aux services prévus et offrez un petit jeûne en guise de repentir.",
        },
        requiredProof: "photo-or-text",
        timeLimitDays: 7,
      },
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "gluttony-letter",
        overallTask: "Write a letter to God asking for strength to overcome bodily excess.",
        instructionText: {
          en: "Be honest and specific about your struggles and hopes.",
          fr: "Soyez honnête et précis sur vos luttes et vos espoirs.",
        },
        minLines: 5,
        timeLimitHours: 24,
      },
    },
    {
      taskType: "social-task",
      payload: {
        key: "gluttony-social",
        overallTask: "Donate food or volunteer at a shelter to share with those in need.",
        instructionText: {
          en: "Offer help to those less fortunate as a way to grow in moderation.",
          fr: "Offrez de l'aide à ceux qui sont moins fortunés pour progresser dans la modération.",
        },
        timeLimitDays: 7,
      },
    },
    {
      taskType: "eco-initiative",
      payload: {
        key: "gluttony-eco",
        overallTask: "Commit to reducing food waste for a week.",
        instructionText: {
          en: "Track your food waste and make sustainable choices.",
          fr: "Suivez votre gaspillage alimentaire et faites des choix durables.",
        },
        minProofItems: 1,
        timeLimitDays: 7,
      },
    },
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/LUK.16.19.NIV",
    "https://www.bible.com/bible/111/PRO.23.20.NIV",
    "https://www.bible.com/bible/111/PHP.3.18.NIV",
  ],
};

const laziness = {
  machineName: "laziness",
  type: "against-yourself",
  severity: "medium",
  headerTitle: {
    en: "Laziness",
    fr: "Paresse",
  },
  description: {
    en: "Laziness, or total spiritual indifference, neglect of repentance until the last years of life.",
    fr: "La paresse, ou l’indifférence spirituelle totale, la négligence du repentir jusqu’aux dernières années de la vie.",
  },
  cardImage: "Laziness",
  detailBackgroundVideo: "videos/laziness_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "laziness-bible-readings",
        text: {
          en: "Read Proverbs 6:6–11, Colossians 3:23–24, and 2 Thessalonians 3:10–12. Reflect on diligence and responsibility.",
          fr: "Lisez Proverbes 6:6–11, Colossiens 3:23–24 et 2 Thessaloniciens 3:10–12. Réfléchissez à la diligence et à la responsabilité.",
        },
        instructionText: {
          en: "Find a quiet place. Read slowly and prayerfully. Then answer the questions below.",
          fr: "Trouvez un endroit calme. Lisez lentement et dans un esprit de prière. Puis répondez aux questions ci-dessous.",
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read all selected Bible passages and complete the quiz.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "What does Proverbs teach us about the ant and diligence?",
              fr: "Que nous enseigne Proverbes à propos de la fourmi et de la diligence ?",
            },
            answers: [
              {
                text: {
                  en: "The ant is an example of hard work and preparation.",
                  fr: "La fourmi est un exemple de travail acharné et de préparation.",
                },
                isSolution: true,
              },
              {
                text: {
                  en: "The ant avoids all labor.",
                  fr: "La fourmi évite tout travail.",
                },
                isSolution: false,
              },
            ],
          },
        ],
      },
    },
    {
      taskType: "prayer-recitation",
      payload: {
        key: "laziness-prayer",
        overallTask: "Pray for motivation and spiritual fervor.",
        text: {
          en: "Lord, awaken my spirit from slumber. Fill my heart with zeal to seek You daily.",
          fr: "Seigneur, réveille mon esprit de sa torpeur. Remplis mon cœur de zèle pour Te chercher chaque jour.",
        },
        instructionText: {
          en: "Recite this prayer slowly and reflectively.",
          fr: "Récitez cette prière lentement et avec recueillement.",
        },
        reflectionAfterPrayerText: {
          en: "What steps can you take to break free from spiritual laziness?",
          fr: "Quelles mesures pouvez-vous prendre pour vous libérer de la paresse spirituelle ?",
        },
      },
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "laziness-letter",
        overallTask: "Write a personal letter to God acknowledging your laziness and seeking renewal.",
        instructionText: {
          en: "Write openly to God about how laziness has affected your spiritual journey. Ask for His help to be diligent.",
          fr: "Écrivez ouvertement à Dieu sur la manière dont la paresse a affecté votre chemin spirituel. Demandez Son aide pour être diligent.",
        },
      },
    },
    {
      taskType: "participation-in-rites",
      payload: {
        key: "laziness-rite",
        overallTask: "Attend three church services over the next 10 days.",
        instructionText: {
          en: "Make a plan and attend three different services. Reflect on the experience.",
          fr: "Faites un plan et assistez à trois services différents. Réfléchissez à cette expérience.",
        },
      },
    },
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/PRO.6.6-11.NIV",
    "https://www.bible.com/bible/111/COL.3.23-24.NIV",
    "https://www.bible.com/bible/111/2TH.3.10-12.NIV",
  ],
};

const refusalOfPrayer = {
  machineName: "refusal-of-prayer",
  type: "against-yourself",
  severity: "medium",
  headerTitle: {
    en: "Refusal to Pray",
    fr: "Refus de Prière",
  },
  description: {
    en: "Refusing to pray under the pretext of fatigue, busyness, or distraction leads to a mind in bondage and a hardened heart.",
    fr: "Refuser de prier sous prétexte de fatigue, d'occupation ou de distractions mène à l'asservissement de l'esprit et à l'endurcissement du cœur.",
  },
  cardImage: "RefusalPrayer",
  detailBackgroundVideo: "videos/refusal_prayer_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "refusal-prayer-bible-readings",
        text: {
          en: "Read 1 Thessalonians 5:16–18, Matthew 26:41, and Psalm 34:17. Reflect on the role of constant prayer in your spiritual life.",
          fr: "Lisez 1 Thessaloniciens 5:16–18, Matthieu 26:41 et Psaume 34:17. Réfléchissez à l’importance de la prière constante dans votre vie spirituelle.",
        },
        instructionText: {
          en: "Pray briefly before reading. Then read the verses slowly and think how they apply to your life.",
          fr: "Faites une courte prière avant de lire. Ensuite, lisez lentement les versets et réfléchissez à leur application dans votre vie.",
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read and reflect on the given Bible passages.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "Why is it important to 'pray without ceasing' as written in 1 Thessalonians?",
              fr: "Pourquoi est-il important de « prier sans cesse » comme il est écrit dans 1 Thessaloniciens ?",
            },
            answers: [
              {
                text: {
                  en: "Because it keeps us connected to God in all circumstances",
                  fr: "Parce que cela nous garde connectés à Dieu en toutes circonstances",
                },
                isSolution: true,
              },
              {
                text: {
                  en: "Because it makes us appear religious",
                  fr: "Parce que cela nous fait paraître religieux",
                },
                isSolution: false,
              },
            ],
          },
        ],
      },
    },
    {
      taskType: "prayer-recitation",
      payload: {
        key: "refusal-prayer-prayer",
        overallTask: "Say this prayer with intention and humility.",
        text: {
          en: "Lord, forgive me for the times I neglected to speak with You. Reignite my heart to seek You daily.",
          fr: "Seigneur, pardonne-moi pour les fois où j’ai négligé de Te parler. Ravive mon cœur pour Te chercher chaque jour.",
        },
        instructionText: {
          en: "Recite this prayer slowly and sincerely.",
          fr: "Récitez cette prière lentement et sincèrement.",
        },
        reflectionAfterPrayerText: {
          en: "What distractions most often keep you from prayer?",
          fr: "Quelles distractions vous empêchent le plus souvent de prier ?",
        },
      },
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "refusal-prayer-letter",
        overallTask: "Write a letter to God expressing repentance and desire to return to regular prayer.",
        instructionText: {
          en: "Write from your heart, acknowledging neglect and asking for strength.",
          fr: "Écrivez avec votre cœur, en reconnaissant votre négligence et en demandant la force.",
        },
      },
    },
    {
      taskType: "ritual-participation",
      payload: {
        key: "refusal-prayer-ritual",
        overallTask: "Participate in at least one church prayer service this week.",
        instructionText: {
          en: "Attend a prayer service in your church and be fully present throughout.",
          fr: "Assistez à un service de prière dans votre église et soyez pleinement présent(e) tout au long.",
        },
      },
    },
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/1TH.5.16-18.NIV",
    "https://www.bible.com/bible/111/MAT.26.41.NIV",
    "https://www.bible.com/bible/111/PSA.34.17.NIV",
  ],
};



export const mediumAgainstYourselfSins = [
 unsatisfiedSoul,
 gluttony,
 laziness,
 refusalOfPrayer
];
