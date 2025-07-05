const resentmentAndUnforgiveness: SinElement = {
  machineName: "resentment-and-unforgiveness",
  type: 'against-neighboor',
  severity: "medium",
  headerTitle: {
    en: "Resentment and Unforgiveness",
    fr: "Rancune et Manque de Pardon"
  },
  description: {
    en: "Resentment, refusal to forgive, and a vengeful spirit. Through this sin, we ourselves cannot be forgiven by the Heavenly Father. Christ commanded us to forgive 'seventy times seven' (Matt. 18:22) — meaning without limit. In the Lord’s Prayer, we ask to be forgiven as we forgive our debtors.",
    fr: "La rancune, le refus de pardonner et l’esprit de vengeance. Par ce péché, nous ne pouvons pas nous-mêmes être pardonnés par le Père Céleste. Le Christ nous a commandé de pardonner « jusqu’à soixante-dix fois sept fois » (Matthieu 18:22), c’est-à-dire sans limite. Dans la prière du Notre Père, nous demandons à être pardonnés comme nous pardonnons à nos débiteurs."
  },
  cardImage: "Resentment",
  detailBackgroundVideo: "videos/resentment_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "resentment-bible",
        text: {
          en: "Read Matthew 18:21–35, Mark 11:25, and Ephesians 4:31–32. Reflect on the importance of forgiveness.",
          fr: "Lisez Matthieu 18:21–35, Marc 11:25 et Éphésiens 4:31–32. Réfléchissez à l’importance du pardon."
        },
        instructionText: {
          en: "Find a quiet place. Read each passage prayerfully, then answer the questions.",
          fr: "Trouvez un endroit calme. Lisez chaque passage avec recueillement, puis répondez aux questions."
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read all selected Bible passages and complete the quiz.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "According to Matthew 18:22, how many times should we forgive someone?",
              fr: "Selon Matthieu 18:22, combien de fois devons-nous pardonner ?"
            },
            answers: [
              {
                text: {
                  en: "Seven times",
                  fr: "Sept fois"
                },
                isSolution: false
              },
              {
                text: {
                  en: "Seventy-seven times",
                  fr: "Soixante-dix-sept fois"
                },
                isSolution: false
              },
              {
                text: {
                  en: "Seventy times seven",
                  fr: "Soixante-dix fois sept"
                },
                isSolution: true
              },
              {
                text: {
                  en: "As often as we are wronged",
                  fr: "Autant de fois que nous sommes offensés"
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
        key: "resentment-prayer",
        overallTask: "Recite a prayer asking God to help you forgive from the heart.",
        text: {
          en: "Lord, heal my heart from bitterness and resentment. Teach me to forgive as You have forgiven me.",
          fr: "Seigneur, guéris mon cœur de l’amertume et de la rancune. Apprends-moi à pardonner comme Tu m’as pardonné."
        },
        instructionText: {
          en: "Recite this prayer with sincerity and openness to change.",
          fr: "Récitez cette prière avec sincérité et ouverture au changement."
        },
        reflectionAfterPrayerText: {
          en: "Whom do you need to forgive today?",
          fr: "Qui devez-vous pardonner aujourd’hui ?"
        }
      }
    },
    {
      taskType: "practice-of-silence",
      payload: {
        key: "resentment-silence",
        overallTask: "Spend 10 minutes in silence, offering your pain and anger to God.",
        testDurationInSeconds: 600,
        instructionText: {
          en: "Be still before God. Let go of grudges and listen for His peace.",
          fr: "Soyez calme devant Dieu. Laissez aller les rancunes et écoutez Sa paix."
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "resentment-letter",
        overallTask: "Write a letter expressing your desire to forgive someone who hurt you.",
        instructionText: {
          en: "Use the space to write to someone who has hurt you. You don’t need to send it—just write.",
          fr: "Utilisez cet espace pour écrire à quelqu’un qui vous a blessé. Vous n’avez pas besoin de l’envoyer — écrivez simplement."
        }
      }
    },
    {
      taskType: "social-action",
      payload: {
        key: "resentment-social",
        overallTask: "Do a small act of kindness for someone you have had tension with.",
        instructionText: {
          en: "Think of a practical way to show grace or generosity to someone who has wronged you.",
          fr: "Trouvez un moyen pratique de faire preuve de grâce ou de générosité envers quelqu’un qui vous a offensé."
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/1/MAT.18.21-35.KJV",
    "https://www.bible.com/bible/1/MRK.11.25.KJV",
    "https://www.bible.com/bible/1/EPH.4.31-32.KJV"
  ]
};

const vainglory = {
  machineName: "vainglory",
  type: "against-neighboor",
  severity: "medium",
  headerTitle: {
    en: "Vainglory",
    fr: "Vaine Gloire"
  },
  description: {
    en: "Vainglory includes ambition, showy virtues, intolerance of others' weaknesses, and arrogance. This sin turns good deeds into performances and poisons relationships with pride.",
    fr: "La vaine gloire inclut l’ambition, les vertus ostentatoires, l’intolérance envers les faiblesses des autres et l’arrogance. Ce péché transforme les bonnes actions en spectacles et empoisonne les relations par l’orgueil."
  },
  cardImage: "Vainglory",
  detailBackgroundVideo: "videos/vainglory_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "vainglory-bible-readings",
        text: {
          en: "Read Matthew 6:1-4, Proverbs 27:2, and Galatians 6:3-4. Reflect on the dangers of seeking human praise instead of God’s approval.",
          fr: "Lisez Matthieu 6:1-4, Proverbes 27:2 et Galates 6:3-4. Réfléchissez aux dangers de rechercher la louange des hommes plutôt que l’approbation de Dieu."
        },
        instructionText: {
          en: "Take time to read carefully. Ask the Holy Spirit to reveal your inner motivations. Answer the questions below.",
          fr: "Prenez le temps de lire attentivement. Demandez au Saint-Esprit de révéler vos motivations intérieures. Répondez aux questions ci-dessous."
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read all passages and complete the reflection.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "According to Matthew 6:1-4, how should we practice righteousness?",
              fr: "Selon Matthieu 6:1-4, comment devons-nous pratiquer la justice ?"
            },
            answers: [
              {
                text: {
                  en: "In secret, seeking God's reward and not human praise",
                  fr: "En secret, cherchant la récompense de Dieu et non la louange des hommes"
                },
                isSolution: true
              },
              {
                text: {
                  en: "Openly to inspire others",
                  fr: "Ouvertement pour inspirer les autres"
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
        key: "vainglory-prayer",
        overallTask: "Pray for humility and pure intentions.",
        text: {
          en: "Lord, teach me to act not for applause, but out of love for You. Cleanse my heart of pride and vanity.",
          fr: "Seigneur, apprends-moi à agir non pour les applaudissements, mais par amour pour Toi. Purifie mon cœur de l’orgueil et de la vanité."
        },
        instructionText: {
          en: "Pray this slowly, inviting God to transform your intentions.",
          fr: "Priez lentement, en demandant à Dieu de transformer vos intentions."
        },
        reflectionAfterPrayerText: {
          en: "Where in your life are you tempted to seek attention or praise?",
          fr: "Dans quels domaines de votre vie êtes-vous tenté de rechercher l’attention ou les louanges ?"
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "vainglory-letter",
        overallTask: "Write a letter to God repenting of seeking personal glory.",
        instructionText: {
          en: "Be honest and open with God. Write about times when you craved attention instead of serving humbly.",
          fr: "Soyez honnête et ouvert avec Dieu. Écrivez sur les moments où vous avez recherché l’attention au lieu de servir humblement."
        }
      }
    },
    {
      taskType: "social-action",
      payload: {
        key: "vainglory-social",
        overallTask: "Serve someone in need this week without telling anyone.",
        instructionText: {
          en: "Choose one act of service and do it quietly, without seeking recognition.",
          fr: "Choisissez un acte de service et accomplissez-le discrètement, sans chercher la reconnaissance."
        },
        suggestions: {
          en: [
            "Bring food to a neighbor in need",
            "Clean a public space anonymously"
          ],
          fr: [
            "Apportez de la nourriture à un voisin dans le besoin",
            "Nettoyez un espace public anonymement"
          ]
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/MAT.6.1-4.NIV",
    "https://www.bible.com/bible/111/PRO.27.2.NIV",
    "https://www.bible.com/bible/111/GAL.6.3-4.NIV"
  ]
};

const envy = {
  machineName: "envy",
  type: "against-neighboor",
  severity: "medium",
  cardImage: "Envy",
  detailBackgroundVideo: "videos/envy_background.mp4",
  headerTitle: {
    en: "Envy",
    fr: "Envie"
  },
  description: {
    en: "Envy, ill will, and rejoicing at the misfortunes of others. This sin poisons relationships and blinds the heart to gratitude and compassion.",
    fr: "L’envie, la malveillance et la joie face au malheur des autres. Ce péché empoisonne les relations et aveugle le cœur à la gratitude et à la compassion."
  },
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "envy-bible-readings",
        text: {
          en: "Read Proverbs 14:30, James 3:14–16, and Galatians 5:25–26. Reflect on the consequences of envy and how Scripture calls us to live differently.",
          fr: "Lisez Proverbes 14:30, Jacques 3:14–16 et Galates 5:25–26. Réfléchissez aux conséquences de l’envie et à la manière dont les Écritures nous appellent à vivre différemment."
        },
        instructionText: {
          en: "Find a quiet place. Read each passage slowly and reflectively. Then answer the question below.",
          fr: "Trouvez un endroit calme. Lisez chaque passage lentement et avec recueillement. Puis répondez à la question ci-dessous."
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read all selected Bible passages and answer the questions.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "According to Proverbs, what does envy do to the bones?",
              fr: "Selon les Proverbes, que fait l’envie aux os ?"
            },
            answers: [
              {
                text: {
                  en: "It rots the bones",
                  fr: "Elle fait pourrir les os"
                },
                isSolution: true
              },
              {
                text: {
                  en: "It strengthens the body",
                  fr: "Elle renforce le corps"
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
        key: "envy-prayer",
        overallTask: "Pray for a pure heart free from envy and full of love.",
        text: {
          en: "Lord, cleanse my heart of envy and teach me to rejoice in the blessings of others.",
          fr: "Seigneur, purifie mon cœur de l’envie et apprends-moi à me réjouir des bénédictions des autres."
        },
        instructionText: {
          en: "Recite this prayer slowly and thoughtfully.",
          fr: "Récitez cette prière lentement et avec réflexion."
        },
        reflectionAfterPrayerText: {
          en: "How can you transform envy into gratitude?",
          fr: "Comment pouvez-vous transformer l’envie en gratitude ?"
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "envy-letter",
        overallTask: "Write a letter to God repenting for envy and asking for a generous spirit.",
        instructionText: {
          en: "Write sincerely to God, admitting your envy and seeking help to love others freely.",
          fr: "Écrivez sincèrement à Dieu, en admettant votre envie et en demandant de l’aide pour aimer librement les autres."
        }
      }
    },
    {
      taskType: "social-action",
      payload: {
        key: "envy-action",
        overallTask: "Perform an act of kindness toward someone you’ve felt envy toward.",
        instructionText: {
          en: "Choose a kind gesture or gift for someone you’ve envied. Practice humility and generosity.",
          fr: "Choisissez un geste gentil ou un cadeau pour quelqu’un que vous avez envié. Pratiquez l’humilité et la générosité."
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/PRO.14.30.NIV",
    "https://www.bible.com/bible/111/JAS.3.14-16.NIV",
    "https://www.bible.com/bible/111/GAL.5.25-26.NIV"
  ]
};


const lackOfPeaceInFamily = {
  machineName: "lack-of-peace-in-family",
  type: "against-neighboor",
  severity: "medium",
  cardImage: "LackOfPeace",
  detailBackgroundVideo: "videos/lack_of_peace_background.mp4",
  headerTitle: {
    en: "Lack of Peace in the Family",
    fr: "Absence de paix dans la famille"
  },
  description: {
    en: "Disrupting peace in the family, with neighbors or at work. Excessive curiosity about other people's lives. This sin especially harms close relationships and violates the harmony God desires among His children.",
    fr: "Perturbation de la paix dans la famille, avec les voisins ou au travail. Curiosité excessive envers la vie des autres. Ce péché nuit particulièrement aux relations proches et viole l'harmonie que Dieu désire entre Ses enfants."
  },
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "lack-of-peace-bible",
        text: {
          en: "Read Romans 12:18, Matthew 5:9, and Hebrews 12:14. Reflect on how these verses guide you to seek peace in your relationships.",
          fr: "Lisez Romains 12:18, Matthieu 5:9 et Hébreux 12:14. Réfléchissez à la manière dont ces versets vous guident à rechercher la paix dans vos relations."
        },
        instructionText: {
          en: "Find a quiet place. Read each passage slowly and prayerfully. Then answer the following questions.",
          fr: "Trouvez un endroit calme. Lisez chaque passage lentement et avec prière. Ensuite, répondez aux questions suivantes."
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read and reflect on all verses. Then answer the quiz questions.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "What does Romans 12:18 advise about living in peace?",
              fr: "Que conseille Romains 12:18 à propos de vivre en paix ?"
            },
            answers: [
              {
                text: {
                  en: "Live peaceably with all, if possible",
                  fr: "Vivez en paix avec tous, si possible"
                },
                isSolution: true
              },
              {
                text: {
                  en: "Avoid difficult people",
                  fr: "Évitez les personnes difficiles"
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
        key: "lack-of-peace-prayer",
        overallTask: "Pray for the restoration of peace in your relationships.",
        text: {
          en: "Lord, help me to bring peace where there is conflict. Teach me to love others with patience and kindness.",
          fr: "Seigneur, aide-moi à apporter la paix là où il y a conflit. Apprends-moi à aimer les autres avec patience et bonté."
        },
        instructionText: {
          en: "Recite this prayer slowly and sincerely.",
          fr: "Récitez cette prière lentement et sincèrement."
        },
        reflectionAfterPrayerText: {
          en: "Who needs peace in your life today?",
          fr: "Qui a besoin de paix dans votre vie aujourd'hui ?"
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "lack-of-peace-letter",
        overallTask: "Write a letter asking God to forgive you for sowing discord and promising to pursue peace.",
        instructionText: {
          en: "Write honestly. Ask God for forgiveness and the strength to seek peace with others.",
          fr: "Écrivez honnêtement. Demandez pardon à Dieu et la force de rechercher la paix avec les autres."
        }
      }
    },
    {
      taskType: "social-good-task",
      payload: {
        key: "lack-of-peace-social",
        overallTask: "Do a concrete act of reconciliation or kindness towards a family member or colleague.",
        instructionText: {
          en: "Choose a simple, sincere action—like a call, a letter, or an apology—to rebuild peace.",
          fr: "Choisissez une action simple et sincère — comme un appel, une lettre ou des excuses — pour rétablir la paix."
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/ROM.12.18.NIV",
    "https://www.bible.com/bible/111/MAT.5.9.NIV",
    "https://www.bible.com/bible/111/HEB.12.14.NIV"
  ]
};

const reluctanceToHelp = {
  machineName: "reluctance-to-help",
  type: "against-neighboor",
  severity: "medium",
  headerTitle: {
    en: "Reluctance to Help One's Neighbor",
    fr: "Réticence à Aider son Prochain"
  },
  description: {
    en: "Reluctance to support the oppressed and afflicted. Turning away from someone in danger or distress. (As it is written: 'Bear one another’s burdens, and so fulfill the law of Christ' (Galatians 6:2))",
    fr: "Réticence à soutenir les opprimés et les affligés. Se détourner de quelqu’un en danger ou en détresse. (Comme il est écrit : « Portez les fardeaux les uns des autres, et accomplissez ainsi la loi du Christ » (Galates 6:2))"
  },
  cardImage: "ReluctanceHelp",
  detailBackgroundVideo: "videos/reluctance_help_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "reluctance-help-bible",
        text: {
          en: "Read Galatians 6:2, James 2:14–17, and Luke 10:30–37. Reflect on the call to actively help those in need.",
          fr: "Lisez Galates 6:2, Jacques 2:14–17 et Luc 10:30–37. Réfléchissez à l'appel à aider activement ceux qui sont dans le besoin."
        },
        instructionText: {
          en: "Read attentively and prayerfully. Prepare your heart to recognize opportunities to help.",
          fr: "Lisez avec attention et prière. Préparez votre cœur à reconnaître les occasions d'aider."
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read all selected Bible passages and complete the quiz.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "According to Galatians 6:2, what should we do for one another?",
              fr: "Selon Galates 6:2, que devons-nous faire les uns pour les autres ?"
            },
            answers: [
              {
                text: {
                  en: "Bear one another’s burdens",
                  fr: "Portez les fardeaux les uns des autres"
                },
                isSolution: true
              },
              {
                text: {
                  en: "Ignore each other's needs",
                  fr: "Ignorer les besoins des autres"
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
        key: "reluctance-help-prayer",
        overallTask: "Pray for a compassionate and generous heart.",
        text: {
          en: "Lord, teach me to see others through Your eyes and give me the strength to serve them in love.",
          fr: "Seigneur, apprends-moi à voir les autres avec Tes yeux et donne-moi la force de les servir dans l’amour."
        },
        instructionText: {
          en: "Pray this sincerely. Let your heart be moved with compassion.",
          fr: "Priez sincèrement. Laissez votre cœur être touché par la compassion."
        },
        reflectionAfterPrayerText: {
          en: "What holds you back from helping others, and how can you overcome it?",
          fr: "Qu’est-ce qui vous empêche d’aider les autres, et comment pouvez-vous y remédier ?"
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "reluctance-help-letter",
        overallTask: "Write a letter of repentance for times you failed to help someone in need.",
        instructionText: {
          en: "Use this space to confess your indifference and ask for renewal of spirit.",
          fr: "Utilisez cet espace pour confesser votre indifférence et demander un renouvellement de l'esprit."
        }
      }
    },
    {
      taskType: "social-action",
      payload: {
        key: "reluctance-help-action",
        overallTask: "Find and help someone in need this week. Document your act of compassion.",
        instructionText: {
          en: "Seek out someone in your community who needs help. Offer it freely and lovingly.",
          fr: "Cherchez quelqu’un dans votre communauté qui a besoin d’aide. Offrez-la librement et avec amour."
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/GAL.6.2.NIV",
    "https://www.bible.com/bible/111/JAS.2.14-17.NIV",
    "https://www.bible.com/bible/111/LUK.10.30-37.NIV"
  ]
};

const slander = {
  machineName: "slander",
  type: "against-neighboor",
  severity: "medium",
  headerTitle: {
    en: "Slander and Betrayal",
    fr: "Calomnie et Trahison"
  },
  description: {
    en: "Slander, gossip, intrigues, and betrayal deeply wound others and disrupt peace. They stem from pride, insecurity, or desire for control. This sin breaks trust and burdens the soul.",
    fr: "La calomnie, les commérages, les intrigues et la trahison blessent profondément les autres et troublent la paix. Ils proviennent de l’orgueil, de l’insécurité ou du désir de contrôle. Ce péché brise la confiance et alourdit l’âme."
  },
  cardImage: "Slander",
  detailBackgroundVideo: "videos/slander_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "slander-bible-readings",
        text: {
          en: "Read James 3:5–10, Proverbs 6:16–19, and Psalm 101:5. Reflect on how the tongue can both bless and destroy.",
          fr: "Lisez Jacques 3:5–10, Proverbes 6:16–19 et Psaume 101:5. Réfléchissez à la manière dont la langue peut bénir et détruire."
        },
        instructionText: {
          en: "Read slowly and carefully. Ask the Holy Spirit to reveal how these verses relate to your own speech and actions.",
          fr: "Lisez lentement et attentivement. Demandez au Saint-Esprit de vous montrer comment ces versets s’appliquent à votre propre langage et vos actions."
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Complete the reading and answer the reflection question.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "According to James 3, what is the danger of the tongue?",
              fr: "Selon Jacques 3, quel est le danger de la langue ?"
            },
            answers: [
              {
                text: {
                  en: "It can corrupt the whole body and set the course of life on fire.",
                  fr: "Elle peut corrompre tout le corps et enflammer le cours de la vie."
                },
                isSolution: true
              },
              {
                text: {
                  en: "It helps people stay motivated and cheerful.",
                  fr: "Elle aide les gens à rester motivés et joyeux."
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
        key: "slander-prayer",
        overallTask: "Pray sincerely for a clean heart and guarded tongue.",
        text: {
          en: "Lord, purify my heart and tame my tongue. Let no word that wounds leave my mouth, but only words that bring peace and truth.",
          fr: "Seigneur, purifie mon cœur et dompte ma langue. Que ma bouche ne prononce pas de paroles blessantes, mais seulement des mots de paix et de vérité."
        },
        instructionText: {
          en: "Pray these words out loud in silence and humility.",
          fr: "Prononcez cette prière à voix haute dans le silence et l’humilité."
        },
        reflectionAfterPrayerText: {
          en: "What situations provoke you to speak negatively about others?",
          fr: "Quelles situations vous poussent à parler négativement des autres ?"
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "slander-letter",
        overallTask: "Write a sincere letter to God confessing times you've slandered others and asking for a healing tongue.",
        instructionText: {
          en: "Take your time. Be honest. Invite God's grace to transform your speech.",
          fr: "Prenez votre temps. Soyez honnête. Demandez à la grâce de Dieu de transformer votre parole."
        }
      }
    },
    {
      taskType: "social-action",
      payload: {
        key: "slander-apology-task",
        overallTask: "Apologize or reconcile with someone you may have hurt through gossip or betrayal.",
        instructionText: {
          en: "Reach out with humility and truth. Let peace begin with you.",
          fr: "Prenez contact avec humilité et sincérité. Que la paix commence avec vous."
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/JAS.3.5-10.NIV",
    "https://www.bible.com/bible/111/PRO.6.16-19.NIV",
    "https://www.bible.com/bible/111/PSA.101.5.NIV"
  ]
};

const flattery = {
  machineName: "flattery",
  type: "against-neighboor",
  severity: "medium",
  headerTitle: {
    en: "Flattery",
    fr: "Flatterie"
  },
  description: {
    en: "Flattery, hypocrisy, and duplicity undermine genuine relationships and reflect a heart seeking approval over truth. God desires sincerity and integrity in our interactions.",
    fr: "La flatterie, l'hypocrisie et la duplicité sapent les relations sincères et reflètent un cœur en quête d'approbation plutôt que de vérité. Dieu désire la sincérité et l'intégrité dans nos relations."
  },
  cardImage: "Flattery",
  detailBackgroundVideo: "Flattery",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "flattery-bible-readings",
        text: {
          en: "Read Proverbs 29:5, Psalm 12:2-3, and Romans 16:18. Reflect on how the Bible warns against flattery and hypocrisy.",
          fr: "Lisez Proverbes 29:5, Psaume 12:2-3 et Romains 16:18. Réfléchissez à la manière dont la Bible met en garde contre la flatterie et l'hypocrisie."
        },
        instructionText: {
          en: "Take time to meditate on each verse. Ask God to reveal where you may be insincere in your speech.",
          fr: "Prenez le temps de méditer sur chaque verset. Demandez à Dieu de vous révéler où vous pourriez manquer de sincérité dans vos paroles."
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read the passages and answer the questions to check your understanding.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "According to Proverbs, what does a person who flatters their neighbor do?",
              fr: "Selon les Proverbes, que fait une personne qui flatte son prochain ?"
            },
            answers: [
              {
                text: {
                  en: "Spreads a net for their feet",
                  fr: "Tend un filet sous ses pas"
                },
                isSolution: true
              },
              {
                text: {
                  en: "Brings peace and joy",
                  fr: "Apporte la paix et la joie"
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
        key: "flattery-prayer",
        overallTask: "Pray for the courage to speak truth with love and avoid hypocrisy.",
        text: {
          en: "Lord, help me to be honest and sincere in all my words. Keep me from flattering others to gain favor, and teach me to value truth above approval.",
          fr: "Seigneur, aide-moi à être honnête et sincère dans toutes mes paroles. Garde-moi de flatter les autres pour obtenir leur faveur et apprends-moi à valoriser la vérité plus que l'approbation."
        },
        instructionText: {
          en: "Find a quiet place to pray this prayer with humility.",
          fr: "Trouvez un endroit calme pour réciter cette prière avec humilité."
        },
        reflectionAfterPrayerText: {
          en: "Have you been tempted to say things just to be liked?",
          fr: "Avez-vous été tenté de dire des choses simplement pour plaire ?"
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "flattery-letter",
        overallTask: "Write a letter to God confessing moments of insincerity and asking for integrity.",
        instructionText: {
          en: "Use this space to reflect and write honestly to God. Confess where you’ve used flattery instead of truth.",
          fr: "Utilisez cet espace pour réfléchir et écrire honnêtement à Dieu. Confessez où vous avez utilisé la flatterie au lieu de la vérité."
        }
      }
    },
    {
      taskType: "social-action",
      payload: {
        key: "flattery-action",
        overallTask: "Give someone genuine encouragement without exaggeration or manipulation.",
        instructionText: {
          en: "Find someone you usually flatter and instead speak truthfully and kindly to them.",
          fr: "Trouvez quelqu’un que vous flattez habituellement et parlez-lui plutôt avec vérité et gentillesse."
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/PRO.29.5.NIV",
    "https://www.bible.com/bible/111/PSA.12.2-3.NIV",
    "https://www.bible.com/bible/111/ROM.16.18.NIV"
  ]
};

const stumblingByIndecency = {
  machineName: "stumbling-by-indecency",
  type: "against-neighboor",
  severity: "medium",
  headerTitle: {
    en: "Causing Temptation Through Indecent Behavior",
    fr: "Provoquer la Tentation par un Comportement Indécent"
  },
  description: {
    en: "Leading others into temptation through inappropriate jokes, cynical remarks, or indecent suggestions is a serious sin. Jesus warns: 'Woe to the world because of the things that cause people to stumble!' (Matthew 18:7)",
    fr: "Conduire les autres à la tentation par des plaisanteries inappropriées, des remarques cyniques ou des suggestions indécentes est un péché grave. Jésus avertit : « Malheur au monde à cause des scandales ! » (Matthieu 18:7)"
  },
  cardImage: "Indecency",
  detailBackgroundVideo: "videos/indecency_background.mp4",
  confessionTasks: [
    {
      taskType: "reading-the-bible",
      payload: {
        key: "indecency-bible-readings",
        text: {
          en: "Read Matthew 18:6–7 and Romans 14:13. Reflect on how our actions and words can become a stumbling block for others.",
          fr: "Lisez Matthieu 18:6–7 et Romains 14:13. Réfléchissez à la façon dont nos actions et nos paroles peuvent devenir un piège pour les autres."
        },
        instructionText: {
          en: "Read the selected Bible verses carefully and answer the following question.",
          fr: "Lisez attentivement les versets bibliques sélectionnés et répondez à la question suivante."
        },
        readingDurationRange: "5–10 min per passage",
        testDurationInSeconds: 600,
        overallTask: "Read all selected passages and complete the reflection question.",
        surveyQuestions: [
          {
            key: "q1",
            description: {
              en: "What does Jesus say about those who cause others to stumble?",
              fr: "Que dit Jésus au sujet de ceux qui provoquent la chute des autres ?"
            },
            answers: [
              {
                text: {
                  en: "It would be better for them to have a millstone hung around their neck and be drowned.",
                  fr: "Il vaudrait mieux pour eux qu’on suspende à leur cou une meule de moulin et qu’on les jette dans la mer."
                },
                isSolution: true
              },
              {
                text: {
                  en: "They will be forgiven quickly.",
                  fr: "Ils seront rapidement pardonnés."
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
        key: "indecency-prayer",
        overallTask: "Pray for purity in thoughts, words, and actions.",
        text: {
          en: "Lord, cleanse my lips and my heart. Help me to speak words that uplift and not lead others astray.",
          fr: "Seigneur, purifie mes lèvres et mon cœur. Aide-moi à prononcer des paroles qui élèvent et non qui égarent."
        },
        instructionText: {
          en: "Find a quiet space and say this prayer sincerely.",
          fr: "Trouvez un endroit calme et récitez cette prière avec sincérité."
        },
        reflectionAfterPrayerText: {
          en: "Have you led others into sin by your words or actions? Reflect and ask for forgiveness.",
          fr: "Avez-vous conduit d'autres à pécher par vos paroles ou vos actions ? Réfléchissez et demandez pardon."
        }
      }
    },
    {
      taskType: "letters-of-forgiveness",
      payload: {
        key: "indecency-letter",
        overallTask: "Write a private letter to God asking forgiveness for causing temptation.",
        instructionText: {
          en: "In your letter, express sorrow and ask God to guide your words going forward.",
          fr: "Dans votre lettre, exprimez votre regret et demandez à Dieu de guider vos paroles à l’avenir."
        }
      }
    },
    {
      taskType: "social-action",
      payload: {
        key: "indecency-action",
        overallTask: "Do an act of encouragement or support for someone you may have offended.",
        instructionText: {
          en: "Reach out with a kind word or action to uplift someone today.",
          fr: "Prenez contact avec une parole ou une action bienveillante pour encourager quelqu’un aujourd’hui."
        }
      }
    }
  ],
  additionalLinks: [
    "https://www.bible.com/bible/111/MAT.18.6-7.NIV",
    "https://www.bible.com/bible/111/ROM.14.13.NIV"
  ]
};



export const mediumAgainstNeighboorSins = [
  resentmentAndUnforgiveness,
  vainglory,
  envy,
  lackOfPeaceInFamily,
  reluctanceToHelp,
  slander,
  flattery,
  stumblingByIndecency
];