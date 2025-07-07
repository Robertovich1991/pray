const idolatrySin: SinElement = {
  machineName: 'idolatry',
  type: 'against-god',
  severity: 'grave',
  headerTitle: {
    en: 'Idolatry',
    fr: 'Idolâtrie',
  },
  description: {
    en: 'Worshiping false gods or images.',
    fr: 'Adorer de faux dieux ou des images.',
  },
  cardImage: 'Superstition',
  detailBackgroundVideo: 'Bubbles',
  confessionTasks: [
    {
      taskType: 'reading-the-bible',
      payload: {
        key: 'read-commandments',
        text: {
          en: 'Read the Ten Commandments.',
          fr: 'Lisez les Dix Commandements.',
        },
        surveyQuestions: [
          {
            key: 'commandments-question',
            description: {
              en: 'What does the first commandment teach?',
              fr: 'Que nous enseigne le premier commandement ?',
            },
            answers: [
              {
                text: { en: 'Love only God', fr: 'Aimer uniquement Dieu' },
                isSolution: true,
              },
              {
                text: { en: 'Honor your parents', fr: 'Honore tes parents' },
                isSolution: false,
              },
            ],
          },
        ],
        testDurationInSeconds: 180,
        overallTask: 'Understand the importance of the commandments.',
        readingDurationRange: '5-10 min',
        instructionText: {
          en: 'Reflect on the commandments as you read.',
          fr: 'Réfléchissez aux commandements en les lisant.',
        },
      },
    },
    {
      taskType: 'prayer-recitation',
      payload: {
        key: 'prayer-against-idolatry',
        overallTask: 'Recite prayers to seek forgiveness for idolatry.',
        text: {
          en: 'Oh Lord, guide us away from false idols.',
          fr: 'Oh Seigneur, éloigne-nous des faux idoles.',
        },
        instructionText: {
          en: 'Say this prayer with sincerity.',
          fr: 'Dites cette prière avec sincérité.',
        },
        reflectionAfterPrayerText: {
          en: 'Reflect on seeking strength to avoid idolatry.',
          fr: "Réfléchissez à la recherche de la force pour éviter l'idolâtrie.",
        },
      },
    },
    {
      taskType: 'religious-rituals',
      payload: {
        key: 'attend-service',
        overallTask: 'Participate in religious services.',
        listOfRites: [
          {
            en: 'Attend a Sunday Service.',
            fr: 'Assister à un service du dimanche.',
          },
          {
            en: 'Join evening prayers.',
            fr: 'Participer aux prières du soir.',
          },
        ],
        instructionText: {
          en: 'Be present and mindful during the service.',
          fr: 'Soyez présent et attentif pendant le service.',
        },
      },
    },
    {
      taskType: 'fasting-and-abstinence',
      payload: {
        key: 'fast-for-purification',
        overallTask: 'Fast to seek spiritual purification.',
        instructionText: {
          en: 'Begin a 24-hour fast with only water.',
          fr: "Commencez un jeûne de 24 heures avec seulement de l'eau.",
        },
      },
    },
  ],
  additionalLinks: [
    'https://example.com/idolatry-prayers',
    'https://example.com/bible-study',
  ],
  additionalVideo: {
    url: 'https://dnznrvs05pmza.cloudfront.net/b277f921-307c-4bee-b9e5-d7cb7e2dd99a.mp4?_jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXlIYXNoIjoiYTY5MmY1YjE2Yjk4NDBhZCIsImJ1Y2tldCI6InJ1bndheS10YXNrLWFydGlmYWN0cyIsInN0YWdlIjoicHJvZCIsImV4cCI6MTc0OTYwMDAwMH0.areefLzvXDCVf3k8bsP3n0knqLE4GK9bps0fASmvVKw',
    preview:
      'https://i.pinimg.com/736x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg',
  },
};

const disobedienceToGodsWill = {
  machineName: "disobedience-to-gods-will",
  type: "against-god",
  severity: "grave",
  headerTitle: {
    en: "Disobedience to God's Will",
    fr: "Désobéissance à la volonté de Dieu",
  },
  description: {
    en: "Open defiance of God's commandments leads us away from His love and truth. To live according to His will is our calling as His children. Let us return in repentance.",
    fr: "Le refus délibéré d’obéir aux commandements de Dieu nous éloigne de Son amour et de Sa vérité. Vivre selon Sa volonté est notre vocation en tant qu’enfants de Dieu. Revenons à Lui dans la repentance.",
  },
  cardImage: "Disobedience",
  detailBackgroundVideo: "videos/disobedience_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "read-scriptures-on-obedience",
        text: {
          en: "Read John 14:15 and Deuteronomy 11:26–28. Reflect on the blessings of obedience and the cost of disobedience.",
          fr: "Lisez Jean 14:15 et Deutéronome 11:26–28. Réfléchissez aux bénédictions de l'obéissance et au prix de la désobéissance.",
        },
        surveyQuestions: [
          {
            key: "question-1",
            description: {
              en: "What does Jesus say about love and obedience?",
              fr: "Que dit Jésus à propos de l'amour et de l'obéissance ?",
            },
            answers: [
              {
                text: {
                  en: "If you love Him, you will keep His commandments.",
                  fr: "Si vous L’aimez, vous garderez Ses commandements.",
                },
                isSolution: true,
              },
              {
                text: {
                  en: "Love is more important than rules.",
                  fr: "L’amour est plus important que les règles.",
                },
                isSolution: false,
              },
            ],
          },
        ],
        testDurationInSeconds: 180,
        overallTask: "Read the selected Scriptures and answer the questions honestly.",
        readingDurationRange: "3-5 minutes",
        instructionText: {
          en: "Find a quiet place. Read carefully, then answer the questions below.",
          fr: "Trouvez un endroit calme. Lisez attentivement, puis répondez aux questions ci-dessous.",
        },
      },
    },
    {
      taskType: "prayer-recitation",
      payload: {
        key: "prayer-against-disobedience",
        overallTask: "Pray for forgiveness and strength to live according to God's will.",
        text: {
          en: "Father, I have knowingly resisted Your will. Forgive me and give me a humble heart that delights in obedience.",
          fr: "Père, j’ai sciemment résisté à Ta volonté. Pardonne-moi et donne-moi un cœur humble qui se réjouit de l’obéissance.",
        },
        instructionText: {
          en: "Pray slowly with a sincere heart.",
          fr: "Priez lentement avec un cœur sincère.",
        },
        reflectionAfterPrayerText: {
          en: "Ask God for courage to obey even when it's difficult.",
          fr: "Demandez à Dieu le courage d’obéir même quand c’est difficile.",
        },
      },
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "letter-disobedience",
        overallTask: "Write a letter to God confessing your resistance to His will.",
        text: {
          en: "Lord, I chose my own path instead of Yours. I repent. Teach me to follow You with trust and love.",
          fr: "Seigneur, j’ai choisi ma propre voie au lieu de la Tienne. Je me repens. Apprends-moi à Te suivre avec confiance et amour.",
        },
        instructionText: {
          en: "Be honest and specific about where you’ve disobeyed.",
          fr: "Soyez honnête et précis sur les domaines où vous avez désobéi.",
        },
      },
    },
    {
      taskType: "practice-of-silence",
      payload: {
        key: "silence-to-surrender",
        overallTask: "Spend five minutes in silence as an act of surrender to God's authority.",
        text: {
          en: "Silence opens us to God's voice. Use this time to submit your will to His.",
          fr: "Le silence nous ouvre à la voix de Dieu. Utilisez ce moment pour soumettre votre volonté à la Sienne.",
        },
        instructionText: {
          en: "Sit quietly. Let go of control and invite God's direction.",
          fr: "Asseyez-vous calmement. Lâchez prise et invitez la direction de Dieu.",
        },
      },
    },
    {
      taskType: "religious-rituals",
      payload: {
        key: "ritual-obedience",
        overallTask: "Participate in confession or communion to renew your commitment to obedience.",
        text: {
          en: "Rituals help us realign with God's will. Use them as steps back into obedience.",
          fr: "Les rites nous aident à nous réaligner sur la volonté de Dieu. Utilisez-les comme étapes vers l'obéissance.",
        },
        instructionText: {
          en: "Approach the ritual with humility and intention.",
          fr: "Approchez le rituel avec humilité et intention.",
        },
      },
    },
    {
      taskType: "social-tasks",
      payload: {
        key: "talk-about-obedience",
        overallTask: "Talk to someone about a time you struggled to obey God—and how you grew from it.",
        listOfSocialTasks: [
          {
            en: "Share how you’ve resisted God's will and what helped you change.",
            fr: "Partagez comment vous avez résisté à la volonté de Dieu et ce qui vous a aidé à changer.",
          },
        ],
        instructionText: {
          en: "Encourage each other in faithful living.",
          fr: "Encouragez-vous mutuellement à vivre fidèlement.",
        },
      },
    },
    {
      taskType: "ecological-initiatives",
      payload: {
        key: "eco-action-gods-stewardship",
        overallTask: "Engage in a small act of creation care as a way of obeying God's command to steward the earth.",
        listOfRites: [
          {
            en: "Pick up trash in your neighborhood or plant something useful.",
            fr: "Ramassez les déchets dans votre quartier ou plantez quelque chose d’utile.",
          },
        ],
        instructionText: {
          en: "Let this act remind you that God's will includes care for creation.",
          fr: "Que cet acte vous rappelle que la volonté de Dieu inclut le soin de la création.",
        },
      },
    },
    {
      taskType: "fasting-and-abstinence",
      payload: {
        key: "fasting-obedience",
        overallTask: "Choose to fast from food or habits as an offering of obedience to God.",
        text: {
          en: "Fasting humbles our desires and helps us listen to God's voice.",
          fr: "Le jeûne humilie nos désirs et nous aide à écouter la voix de Dieu.",
        },
        instructionText: {
          en: "Plan a time to fast and spend it in reflection and prayer.",
          fr: "Planifiez un moment pour jeûner et passez-le en réflexion et en prière.",
        },
      },
    },
    {
      taskType: "ecological-initiatives",
      payload: {
        key: "eco-action-for-awe-of-god",
        overallTask: "Engage in an act of care for creation as a recognition of God's majesty in nature.",
        listOfRites: [
          {
            en: "Take time to clean a natural area or tend a garden with reverence.",
            fr: "Prenez le temps de nettoyer un espace naturel ou de soigner un jardin avec révérence.",
          },
        ],
        instructionText: {
          en: "Do this act slowly and with awareness that creation reflects God's glory.",
          fr: "Faites cela lentement, en étant conscient que la création reflète la gloire de Dieu.",
        },
      },
    },
    {
      taskType: "fasting-and-abstinence",
      payload: {
        key: "fasting-humbling-before-god",
        overallTask: "Fast for a meal or abstain from a comfort as an act of humility before God.",
        text: {
          en: "Fasting humbles the soul and reminds us of our dependence on God's greatness.",
          fr: "Le jeûne humilie l’âme et nous rappelle notre dépendance à la grandeur de Dieu.",
        },
        instructionText: {
          en: "Plan a small fast and use that time for prayer and reflection on God's holiness.",
          fr: "Planifiez un petit jeûne et utilisez ce temps pour prier et réfléchir à la sainteté de Dieu.",
        },
      },
    },
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/JOH.14.15.NIV",
    "https://www.bible.com/bible/111/DEU.11.26-28.NIV",
  ],
};

const distrustInGod = {
  machineName: "distrust-in-god",
  type: "against-god",
  severity: "grave",
  headerTitle: {
    en: "Distrust in God",
    fr: "Manque de confiance en Dieu"
  },
  description: {
    en: "Doubting that God is behind the events of our lives and wants our true good weakens our faith. Distrust grows where the Gospel has not taken root. Let us return to the Cross and trust in His love.",
    fr: "Douter que Dieu soit à l’origine des événements de notre vie et qu’Il veuille notre bien véritable affaiblit notre foi. Le manque de confiance naît là où l’Évangile n’a pas encore pris racine. Revenons à la Croix et à Sa fidélité."
  },
  cardImage: "Distrust",
  detailBackgroundVideo: "videos/distrust_in_god_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "read-scriptures-on-trust",
        text: {
          en: "Read Proverbs 3:5–6 and Romans 8:28. Reflect on how trusting God brings peace and direction.",
          fr: "Lisez Proverbes 3:5–6 et Romains 8:28. Réfléchissez à la manière dont la confiance en Dieu apporte la paix et la direction."
        },
        surveyQuestions: [
          {
            key: "question-1",
            description: {
              en: "What does it mean to trust in God with all your heart?",
              fr: "Que signifie faire confiance à Dieu de tout son cœur ?"
            },
            answers: [
              {
                text: {
                  en: "It means to rely on Him, even when we do not understand.",
                  fr: "Cela signifie se fier à Lui, même lorsque nous ne comprenons pas."
                },
                isSolution: true
              },
              {
                text: {
                  en: "It means to figure everything out on our own.",
                  fr: "Cela signifie tout comprendre par soi-même."
                },
                isSolution: false
              }
            ]
          }
        ],
        testDurationInSeconds: 180,
        overallTask: "Read the selected Scriptures and answer the questions honestly.",
        readingDurationRange: "3-5 minutes",
        instructionText: {
          en: "Find a quiet place. Read carefully, then answer the questions below.",
          fr: "Trouvez un endroit calme. Lisez attentivement, puis répondez aux questions ci-dessous."
        }
      }
    },
    {
      taskType: "prayer-recitation",
      payload: {
        key: "prayer-for-trust",
        overallTask: "Pray for trust in God's plan even when it's unclear.",
        text: {
          en: "Lord, I confess my doubts and fears. Help me trust You with all my heart, believing that You are always working for my good.",
          fr: "Seigneur, je confesse mes doutes et mes peurs. Aide-moi à Te faire confiance de tout mon cœur, en croyant que Tu agis toujours pour mon bien."
        },
        instructionText: {
          en: "Recite this prayer daily and let your heart open to God's peace.",
          fr: "Récitez cette prière chaque jour et laissez votre cœur s’ouvrir à la paix de Dieu."
        },
        reflectionAfterPrayerText: {
          en: "Think of one area in your life where you can trust God more deeply.",
          fr: "Pensez à un domaine de votre vie où vous pouvez faire davantage confiance à Dieu."
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "letter-distrust",
        overallTask: "Write a letter to God acknowledging your fear and lack of trust.",
        text: {
          en: "Dear God, I have doubted Your goodness and control. Forgive me. I want to trust You more deeply, even in pain.",
          fr: "Cher Dieu, j’ai douté de Ta bonté et de Ton contrôle. Pardonne-moi. Je veux Te faire davantage confiance, même dans la douleur."
        },
        instructionText: {
          en: "Write this letter from your heart—be real and honest.",
          fr: "Écrivez cette lettre de tout cœur — soyez sincère et honnête."
        }
      }
    },
    {
      taskType: "practice-of-silence",
      payload: {
        key: "silence-trust-god",
        overallTask: "Spend five minutes in silence, surrendering your fears and uncertainties to God.",
        text: {
          en: "Silence helps us stop striving and start trusting. Rest in God’s presence.",
          fr: "Le silence nous aide à cesser de lutter et à commencer à faire confiance. Reposez-vous dans la présence de Dieu."
        },
        instructionText: {
          en: "Sit quietly, breathe deeply, and say: 'I trust You, Lord.'",
          fr: "Asseyez-vous en silence, respirez profondément et dites : 'Je Te fais confiance, Seigneur.'"
        }
      }
    },
    {
      taskType: "religious-rituals",
      payload: {
        key: "ritual-reaffirm-trust",
        overallTask: "Attend a church service or participate in communion to renew your trust in Christ's sacrifice.",
        text: {
          en: "Let liturgy or the Eucharist remind you of Christ’s suffering, death, and resurrection.",
          fr: "Laissez la liturgie ou l’Eucharistie vous rappeler la souffrance, la mort et la résurrection du Christ."
        },
        instructionText: {
          en: "Go with reverence and openness to what God wants to show you.",
          fr: "Allez-y avec révérence et ouverture à ce que Dieu veut vous montrer."
        }
      }
    },
    {
      taskType: "social-tasks",
      payload: {
        key: "talk-about-trust-in-god",
        overallTask: "Talk to someone about how you’ve wrestled with trusting God and what helps you grow.",
        listOfSocialTasks: [
          {
            en: "Be vulnerable with a friend. Discuss a moment of doubt and how you’re learning to trust.",
            fr: "Soyez vulnérable avec un ami. Parlez d’un moment de doute et de comment vous apprenez à faire confiance."
          }
        ],
        instructionText: {
          en: "This conversation can bring healing and insight.",
          fr: "Cette conversation peut apporter guérison et éclairage."
        }
      }
    },
    {
      taskType: "ecological-initiatives",
      payload: {
        key: "trust-god-through-nature-care",
        overallTask: "Engage in an act of stewardship as trust in God’s design and care.",
        listOfRites: [
          {
            en: "Tend a garden or feed birds—see how God sustains creation.",
            fr: "Prenez soin d’un jardin ou nourrissez les oiseaux — voyez comment Dieu soutient la création."
          }
        ],
        instructionText: {
          en: "Do this prayerfully, trusting God’s plan for every living thing.",
          fr: "Faites cela dans la prière, en faisant confiance au plan de Dieu pour chaque être vivant."
        }
      }
    },
    {
      taskType: "fasting-and-abstinence",
      payload: {
        key: "fasting-to-deepen-trust",
        overallTask: "Fast for a meal or day and reflect on trusting God for your needs.",
        text: {
          en: "Fasting teaches us to rely on God rather than ourselves.",
          fr: "Le jeûne nous apprend à dépendre de Dieu plutôt que de nous-mêmes."
        },
        instructionText: {
          en: "Use hunger as a reminder: 'God provides.'",
          fr: "Utilisez la faim comme rappel : 'Dieu pourvoit.'"
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/PRO.3.5-6.NIV",
    "https://www.bible.com/bible/111/ROM.8.28.NIV"
  ]
};

const ingratitudeToGod = {
  machineName: "ingratitude-to-god",
  type: "against-god",
  severity: "grave",
  headerTitle: {
    en: "Ingratitude to God",
    fr: "Ingratitude envers Dieu"
  },
  description: {
    en: "When we cry to God in times of need but forget Him in times of peace, we deny His constant grace. Gratitude is the foundation of a faithful heart. Let us remember His goodness and give thanks.",
    fr: "Lorsque nous crions à Dieu dans les difficultés mais L’oublions dans les temps de paix, nous renions Sa grâce constante. La gratitude est la base d’un cœur fidèle. Souvenons-nous de Sa bonté et rendons grâce."
  },
  cardImage: "Ingratitude",
  detailBackgroundVideo: "videos/ingratitude_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "read-scriptures-on-gratitude",
        text: {
          en: "Read 1 Thessalonians 5:18 and Luke 17:11–19. Reflect on how God desires our thankful heart in all circumstances.",
          fr: "Lisez 1 Thessaloniciens 5:18 et Luc 17:11–19. Réfléchissez à la manière dont Dieu désire notre cœur reconnaissant en toutes circonstances."
        },
        surveyQuestions: [
          {
            key: "question-1",
            description: {
              en: "What does Jesus teach us through the story of the ten lepers?",
              fr: "Que nous enseigne Jésus à travers l’histoire des dix lépreux ?"
            },
            answers: [
              {
                text: {
                  en: "That gratitude honors God and brings us closer to Him.",
                  fr: "Que la gratitude honore Dieu et nous rapproche de Lui."
                },
                isSolution: true
              },
              {
                text: {
                  en: "That healing is more important than gratitude.",
                  fr: "Que la guérison est plus importante que la gratitude."
                },
                isSolution: false
              }
            ]
          }
        ],
        testDurationInSeconds: 180,
        overallTask: "Read the selected Scriptures and answer the questions honestly.",
        readingDurationRange: "3-5 minutes",
        instructionText: {
          en: "Find a quiet place. Read carefully, then answer the questions below.",
          fr: "Trouvez un endroit calme. Lisez attentivement, puis répondez aux questions ci-dessous."
        }
      }
    },
    {
      taskType: "prayer-recitation",
      payload: {
        key: "prayer-of-gratitude",
        overallTask: "Pray a prayer of gratitude for God’s constant goodness.",
        text: {
          en: "Lord, I thank You for every gift I have taken for granted. Help me live each day in awareness of Your grace.",
          fr: "Seigneur, je Te remercie pour chaque don que j’ai tenu pour acquis. Aide-moi à vivre chaque jour conscient de Ta grâce."
        },
        instructionText: {
          en: "Speak this prayer slowly, remembering specific blessings.",
          fr: "Prononcez cette prière lentement, en vous souvenant de bénédictions précises."
        },
        reflectionAfterPrayerText: {
          en: "Write down three things you are grateful for today.",
          fr: "Notez trois choses pour lesquelles vous êtes reconnaissant aujourd’hui."
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "letter-ingratitude",
        overallTask: "Write a letter to God confessing moments when you failed to give thanks.",
        text: {
          en: "Father, I have received so much from You and forgotten to thank You. Forgive my forgetfulness and create in me a grateful heart.",
          fr: "Père, j’ai reçu tant de choses de Toi et j’ai oublié de Te remercier. Pardonne mon oubli et crée en moi un cœur reconnaissant."
        },
        instructionText: {
          en: "Write sincerely about blessings you’ve overlooked.",
          fr: "Écrivez sincèrement à propos des bénédictions que vous avez négligées."
        }
      }
    },
    {
      taskType: "practice-of-silence",
      payload: {
        key: "silent-gratitude",
        overallTask: "Spend five minutes in silence, focusing on God’s goodness.",
        text: {
          en: "In silence, reflect on God’s gifts you rarely notice.",
          fr: "Dans le silence, réfléchissez aux dons de Dieu que vous remarquez rarement."
        },
        instructionText: {
          en: "Close your eyes and thank God in your heart for small and great things.",
          fr: "Fermez les yeux et remerciez Dieu dans votre cœur pour les petites et grandes choses."
        }
      }
    },
    {
      taskType: "religious-rituals",
      payload: {
        key: "thanksgiving-ritual",
        overallTask: "Attend a worship service or say a prayer of thanksgiving during communion or prayer gathering.",
        text: {
          en: "Let your worship become a true offering of gratitude.",
          fr: "Que votre culte devienne une véritable offrande de gratitude."
        },
        instructionText: {
          en: "Go with the intention to give thanks, not only to ask.",
          fr: "Allez-y avec l’intention de remercier, non seulement de demander."
        }
      }
    },
    {
      taskType: "social-tasks",
      payload: {
        key: "share-gratitude-with-others",
        overallTask: "Tell someone what God has done for you and thank Him together.",
        listOfSocialTasks: [
          {
            en: "Share with a friend one moment this week where you felt God's goodness.",
            fr: "Partagez avec un ami un moment de la semaine où vous avez ressenti la bonté de Dieu."
          }
        ],
        instructionText: {
          en: "Use this moment to glorify God and encourage others.",
          fr: "Utilisez ce moment pour glorifier Dieu et encourager les autres."
        }
      }
    },
    {
      taskType: "ecological-initiatives",
      payload: {
        key: "gratitude-through-creation-care",
        overallTask: "Care for nature as an act of gratitude for God’s creation.",
        listOfRites: [
          {
            en: "Plant something or clean a space outside. Do it with joy.",
            fr: "Plantez quelque chose ou nettoyez un espace extérieur. Faites-le avec joie."
          }
        ],
        instructionText: {
          en: "Let this act be a visible thank you to God for the earth.",
          fr: "Que cet acte soit un remerciement visible à Dieu pour la terre."
        }
      }
    },
    {
      taskType: "fasting-and-abstinence",
      payload: {
        key: "fasting-in-gratitude",
        overallTask: "Fast for a day or from something you enjoy to express thanks for God's gifts.",
        text: {
          en: "Fasting not only purifies—it also honors God by valuing His gifts rightly.",
          fr: "Le jeûne ne purifie pas seulement — il honore Dieu en valorisant correctement Ses dons."
        },
        instructionText: {
          en: "Use your fast to reflect and thank God deeply.",
          fr: "Utilisez votre jeûne pour réfléchir et remercier Dieu profondément."
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/1TH.5.18.NIV",
    "https://www.bible.com/bible/111/LUK.17.11-19.NIV"
  ]
};

const grumblingAgainstGod = {
  machineName: "grumbling-against-god",
  type: "against-god",
  severity: "grave",
  headerTitle: {
    en: "Grumbling Against God",
    fr: "Murmures contre Dieu"
  },
  description: {
    en: "Complaining against God reveals a lack of trust in His Providence. When we reject His guidance and wisdom, we become blind to His mercy. Let us repent and embrace His plan with humility.",
    fr: "Se plaindre contre Dieu révèle un manque de confiance en Sa Providence. Lorsque nous rejetons Sa sagesse, nous devenons aveugles à Sa miséricorde. Repentons-nous et accueillons Son plan avec humilité."
  },
  cardImage: "Grumbling",
  detailBackgroundVideo: "videos/grumbling_against_god_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "read-scriptures-on-grumbling",
        text: {
          en: "Read Exodus 16:1–8 and Philippians 2:14–15. Reflect on how complaining distances us from God's grace.",
          fr: "Lisez Exode 16:1–8 et Philippiens 2:14–15. Réfléchissez à la manière dont les murmures nous éloignent de la grâce de Dieu."
        },
        surveyQuestions: [
          {
            key: "question-1",
            description: {
              en: "What happened when the Israelites grumbled in the wilderness?",
              fr: "Que s’est-il passé lorsque les Israélites ont murmuré dans le désert ?"
            },
            answers: [
              {
                text: {
                  en: "They challenged God's plan and provoked His correction.",
                  fr: "Ils ont remis en question le plan de Dieu et provoqué Sa correction."
                },
                isSolution: true
              },
              {
                text: {
                  en: "God rewarded them immediately.",
                  fr: "Dieu les a immédiatement récompensés."
                },
                isSolution: false
              }
            ]
          }
        ],
        testDurationInSeconds: 180,
        overallTask: "Read the selected Scriptures and answer the questions honestly.",
        readingDurationRange: "3-5 minutes",
        instructionText: {
          en: "Find a quiet place. Read carefully, then answer the questions below.",
          fr: "Trouvez un endroit calme. Lisez attentivement, puis répondez aux questions ci-dessous."
        }
      }
    },
    {
      taskType: "prayer-recitation",
      payload: {
        key: "prayer-against-grumbling",
        overallTask: "Pray for forgiveness for complaining and ask for a heart of trust and surrender.",
        text: {
          en: "Lord, forgive me for doubting Your plan. Help me trust in Your wisdom and walk with gratitude.",
          fr: "Seigneur, pardonne-moi d’avoir douté de Ton plan. Aide-moi à faire confiance à Ta sagesse et à marcher dans la gratitude."
        },
        instructionText: {
          en: "Recite this prayer when you feel discontent rising.",
          fr: "Récitez cette prière lorsque vous sentez le mécontentement monter."
        },
        reflectionAfterPrayerText: {
          en: "Take time to thank God for one situation you didn’t understand at first.",
          fr: "Prenez le temps de remercier Dieu pour une situation que vous ne compreniez pas au départ."
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "letter-grumbling",
        overallTask: "Write a letter confessing how you’ve grumbled against God’s will.",
        text: {
          en: "Dear God, I have questioned Your ways and complained in hardship. Forgive me. Help me to rest in Your plan.",
          fr: "Cher Dieu, j’ai remis en question Tes voies et murmuré dans l’épreuve. Pardonne-moi. Aide-moi à me reposer dans Ton plan."
        },
        instructionText: {
          en: "Write with honesty about situations you didn’t accept.",
          fr: "Écrivez avec honnêteté sur les situations que vous n’avez pas acceptées."
        }
      }
    },
    {
      taskType: "practice-of-silence",
      payload: {
        key: "silence-acceptance",
        overallTask: "Sit in silence for five minutes and surrender your resistance to God’s will.",
        text: {
          en: "Silence brings us face to face with our own control and opens us to God’s peace.",
          fr: "Le silence nous confronte à notre besoin de contrôle et nous ouvre à la paix de Dieu."
        },
        instructionText: {
          en: "Sit calmly and repeat: 'Lord, I trust You.'",
          fr: "Asseyez-vous calmement et répétez : 'Seigneur, je Te fais confiance.'"
        }
      }
    },
    {
      taskType: "religious-rituals",
      payload: {
        key: "ritual-trust-in-providence",
        overallTask: "Participate in a church service as an act of trusting God's Providence.",
        text: {
          en: "Let the rhythm of worship soften your heart and renew your trust.",
          fr: "Laissez le rythme du culte adoucir votre cœur et renouveler votre confiance."
        },
        instructionText: {
          en: "Approach worship as surrender, not obligation.",
          fr: "Abordez le culte comme un abandon, non une obligation."
        }
      }
    },
    {
      taskType: "social-tasks",
      payload: {
        key: "talk-about-providence",
        overallTask: "Talk with a friend about how to trust God’s plans even when they are unclear.",
        listOfSocialTasks: [
          {
            en: "Share a moment when you were frustrated with God, and how you processed it.",
            fr: "Partagez un moment où vous avez été frustré envers Dieu et comment vous l’avez vécu."
          }
        ],
        instructionText: {
          en: "Let the conversation build faith, not complaints.",
          fr: "Que la conversation nourrisse la foi, pas les plaintes."
        }
      }
    },
    {
      taskType: "ecological-initiatives",
      payload: {
        key: "gratitude-for-order-in-creation",
        overallTask: "Do something practical to care for God’s creation as a way to honor His order.",
        listOfRites: [
          {
            en: "Clean a space outdoors or recycle intentionally.",
            fr: "Nettoyez un espace extérieur ou recyclez de manière intentionnelle."
          }
        ],
        instructionText: {
          en: "Do it in a spirit of praise for God’s wise design.",
          fr: "Faites-le dans un esprit de louange pour la sagesse du plan de Dieu."
        }
      }
    },
    {
      taskType: "fasting-and-abstinence",
      payload: {
        key: "fasting-against-complaining",
        overallTask: "Fast from complaining or from a comfort, and use that time to praise God instead.",
        text: {
          en: "Fasting helps replace grumbling with gratitude.",
          fr: "Le jeûne aide à remplacer les plaintes par la gratitude."
        },
        instructionText: {
          en: "Every time you want to complain, say instead: 'Lord, I praise You.'",
          fr: "Chaque fois que vous avez envie de vous plaindre, dites plutôt : 'Seigneur, je Te loue.'"
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/EXO.16.1-8.NIV",
    "https://www.bible.com/bible/111/PHP.2.14-15.NIV"
  ]
};

const disobedienceToGodsWillSin = {
  machineName: "disobedience-to-gods-will-sin",
  type: "against-god",
  severity: "grave",
  title: {
    en: "Despair from the Inability to Struggle with Sin",
    fr: "Désespoir face à l'incapacité de lutter contre le péché"
  },
  headerTitle: {
    en: "Disobedience to God's Will",
    fr: "Désobéissance à la volonté de Dieu"
  },
  description: {
    en: "Despair from the inability to struggle with sin. This arises when one relies solely on oneself rather than trusting in God's judgment. Contrary to the Scripture: 'Vengeance is Mine, I will repay, says the Lord' (Romans 12:19).",
    fr: "Le désespoir face à l'incapacité de lutter contre le péché. Il survient lorsque l'on se repose uniquement sur soi-même au lieu de faire confiance au jugement de Dieu. Contrairement à l'Écriture : « À moi la vengeance, à moi la rétribution, dit le Seigneur » (Romains 12:19)."
  },
  cardImage: "Disobedience",
  detailBackgroundVideo: "videos/disobedience_background.mp4",
  additionalLinks: [
    "https://www.bible.com/bible/111/JOH.14.15.NIV",
    "https://www.bible.com/bible/111/DEU.11.26-28.NIV"
  ],
  questions: {
    en: [
      "What causes despair when fighting against sin?",
      "Why is relying only on oneself spiritually dangerous?",
      "How does the Bible guide us in moments of weakness?",
      "What does Romans 12:19 teach us about vengeance and justice?",
      "What are the signs that a person is falling into despair?",
      "How can prayer help combat despair?",
      "Why is trust in God's mercy essential for repentance?"
    ],
    fr: [
      "Qu'est-ce qui cause le désespoir dans la lutte contre le péché ?",
      "Pourquoi s'appuyer uniquement sur soi-même est-il spirituellement dangereux ?",
      "Que dit la Bible pour nous guider dans les moments de faiblesse ?",
      "Que nous enseigne Romains 12:19 sur la vengeance et la justice ?",
      "Quels sont les signes qu'une personne tombe dans le désespoir ?",
      "Comment la prière peut-elle aider à combattre le désespoir ?",
      "Pourquoi la confiance en la miséricorde de Dieu est-elle essentielle au repentir ?"
    ]
  },
  answers: {
    en: [
      "Feeling isolated and overwhelmed by one's own sins.",
      "It leads to hopelessness and blocks God's grace.",
      "To cast our burdens on the Lord and seek His help.",
      "That only God has the authority to judge and restore justice.",
      "Loss of will to pray or participate in spiritual life.",
      "It reconnects us with hope and divine assistance.",
      "Because without it, we remain trapped in guilt and fear."
    ],
    fr: [
      "Se sentir isolé et accablé par ses propres péchés.",
      "Cela mène au désespoir et empêche la grâce divine.",
      "Remettre nos fardeaux au Seigneur et chercher Son aide.",
      "Seul Dieu a le pouvoir de juger et de rendre justice.",
      "Perte de volonté de prier ou de participer à la vie spirituelle.",
      "Elle nous reconnecte à l'espérance et à l'aide divine.",
      "Car sans elle, nous restons prisonniers de la culpabilité et de la peur."
    ]
  },
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "read-scriptures-on-obedience",
        text: {
          en: "Read John 14:15 and Deuteronomy 11:26–28. Reflect on the blessings of obedience and the cost of disobedience.",
          fr: "Lisez Jean 14:15 et Deutéronome 11:26–28. Réfléchissez aux bénédictions de l'obéissance et au prix de la désobéissance."
        },
        instructionText: {
          en: "Find a quiet place. Read carefully, then answer the questions below.",
          fr: "Trouvez un endroit calme. Lisez attentivement, puis répondez aux questions ci-dessous."
        },
        readingDurationRange: "3-5 minutes",
        overallTask: "Read the selected Scriptures and answer the questions honestly.",
        testDurationInSeconds: 180,
        surveyQuestions: [
          {
            key: "question-1",
            description: {
              en: "What does Jesus say about love and obedience?",
              fr: "Que dit Jésus à propos de l'amour et de l'obéissance ?"
            },
            answers: [
              {
                text: {
                  en: "If you love Him, you will keep His commandments.",
                  fr: "Si vous L’aimez, vous garderez Ses commandements."
                },
                isSolution: true
              },
              {
                text: {
                  en: "Love is more important than rules.",
                  fr: "L’amour est plus important que les règles."
                },
                isSolution: false
              }
            ]
          }
        ]
      }
    },
    {
      taskType: "prayer-recitation",
      payload: {
        key: "prayer-against-disobedience",
        overallTask: "Pray for forgiveness and strength to live according to God's will.",
        text: {
          en: "Father, I have knowingly resisted Your will. Forgive me and give me a humble heart that delights in obedience.",
          fr: "Père, j’ai sciemment résisté à Ta volonté. Pardonne-moi et donne-moi un cœur humble qui se réjouit de l’obéissance."
        },
        instructionText: {
          en: "Pray slowly with a sincere heart.",
          fr: "Priez lentement avec un cœur sincère."
        },
        reflectionAfterPrayerText: {
          en: "Ask God for courage to obey even when it's difficult.",
          fr: "Demandez à Dieu le courage d’obéir même quand c’est difficile."
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "letter-disobedience",
        overallTask: "Write a letter to God confessing your resistance to His will.",
        text: {
          en: "Lord, I chose my own path instead of Yours. I repent. Teach me to follow You with trust and love.",
          fr: "Seigneur, j’ai choisi ma propre voie au lieu de la Tienne. Je me repens. Apprends-moi à Te suivre avec confiance et amour."
        },
        instructionText: {
          en: "Be honest and specific about where you’ve disobeyed.",
          fr: "Soyez honnête et précis sur les domaines où vous avez désobéi."
        }
      }
    },
    {
      taskType: "practice-of-silence",
      payload: {
        key: "silence-to-surrender",
        overallTask: "Spend five minutes in silence as an act of surrender to God's authority.",
        text: {
          en: "Silence opens us to God's voice. Use this time to submit your will to His.",
          fr: "Le silence nous ouvre à la voix de Dieu. Utilisez ce moment pour soumettre votre volonté à la Sienne."
        },
        instructionText: {
          en: "Sit quietly. Let go of control and invite God's direction.",
          fr: "Asseyez-vous calmement. Lâchez prise et invitez la direction de Dieu."
        }
      }
    },
    {
      taskType: "religious-rituals",
      payload: {
        key: "ritual-obedience",
        overallTask: "Participate in confession or communion to renew your commitment to obedience.",
        text: {
          en: "Rituals help us realign with God's will. Use them as steps back into obedience.",
          fr: "Les rites nous aident à nous réaligner sur la volonté de Dieu. Utilisez-les comme étapes vers l'obéissance."
        },
        instructionText: {
          en: "Approach the ritual with humility and intention.",
          fr: "Approchez le rituel avec humilité et intention."
        }
      }
    },
    {
      taskType: "social-tasks",
      payload: {
        key: "talk-about-obedience",
        overallTask: "Talk to someone about a time you struggled to obey God—and how you grew from it.",
        listOfSocialTasks: [
          {
            en: "Share how you’ve resisted God's will and what helped you change.",
            fr: "Partagez comment vous avez résisté à la volonté de Dieu et ce qui vous a aidé à changer."
          }
        ],
        instructionText: {
          en: "Encourage each other in faithful living.",
          fr: "Encouragez-vous mutuellement à vivre fidèlement."
        }
      }
    },
    {
      taskType: "ecological-initiatives",
      payload: {
        key: "eco-action-gods-stewardship",
        overallTask: "Engage in a small act of creation care as a way of obeying God's command to steward the earth.",
        listOfRites: [
          {
            en: "Pick up trash in your neighborhood or plant something useful.",
            fr: "Ramassez les déchets dans votre quartier ou plantez quelque chose d’utile."
          }
        ],
        instructionText: {
          en: "Let this act remind you that God's will includes care for creation.",
          fr: "Que cet acte vous rappelle que la volonté de Dieu inclut le soin de la création."
        }
      }
    },
    {
      taskType: "fasting-and-abstinence",
      payload: {
        key: "fasting-obedience",
        overallTask: "Choose to fast from food or habits as an offering of obedience to God.",
        text: {
          en: "Fasting humbles our desires and helps us listen to God's voice.",
          fr: "Le jeûne humilie nos désirs et nous aide à écouter la voix de Dieu."
        },
        instructionText: {
          en: "Plan a time to fast and spend it in reflection and prayer.",
          fr: "Planifiez un moment pour jeûner et passez-le en réflexion et en prière."
        }
      }
    },
    {
      taskType: "ecological-initiatives",
      payload: {
        key: "eco-action-for-awe-of-god",
        overallTask: "Engage in an act of care for creation as a recognition of God's majesty in nature.",
        listOfRites: [
          {
            en: "Take time to clean a natural area or tend a garden with reverence.",
            fr: "Prenez le temps de nettoyer un espace naturel ou de soigner un jardin avec révérence."
          }
        ],
        instructionText: {
          en: "Do this act slowly and with awareness that creation reflects God's glory.",
          fr: "Faites cela lentement, en étant conscient que la création reflète la gloire de Dieu."
        }
      }
    },
    {
      taskType: "fasting-and-abstinence",
      payload: {
        key: "fasting-humbling-before-god",
        overallTask: "Fast for a meal or abstain from a comfort as an act of humility before God.",
        text: {
          en: "Fasting humbles the soul and reminds us of our dependence on God's greatness.",
          fr: "Le jeûne humilie l’âme et nous rappelle notre dépendance à la grandeur de Dieu."
        },
        instructionText: {
          en: "Plan a small fast and use that time for prayer and reflection on God's holiness.",
          fr: "Planifiez un petit jeûne et utilisez ce temps pour prier et réfléchir à la sainteté de Dieu."
        }
      }
    }
  ]
};



export const graveAgaintGod = [
  idolatrySin,
  disobedienceToGodsWill,
  distrustInGod,
  ingratitudeToGod,
  grumblingAgainstGod,
  disobedienceToGodsWillSin
]
