const murderAndAbortion = {
    machineName: "murder-and-abortion",
    type: "against-neighboor",
    severity: "grave",
    headerTitle: {
        en: "Murder and Abortion",
        fr: "Meurtre et Avortement"
    },
    description: {
        en: "Murder, including abortion, is a grave sin that destroys the sacredness of life given by God. Life begins at conception and is not ours to take. Repentance and reverence for all life are required to heal from such acts.",
        fr: "Le meurtre, y compris l'avortement, est un péché grave qui détruit le caractère sacré de la vie donnée par Dieu. La vie commence à la conception et ne nous appartient pas. Le repentir et le respect de toute vie sont nécessaires pour guérir de tels actes."
    },
    cardImage: "Murder",
    detailBackgroundVideo: "videos/murder_abortion_background.mp4",
    additionalLinks: [
        "https://www.bible.com/bible/111/EXO.16.1-8.NIV",
        "https://www.bible.com/bible/111/PHP.2.14-15.NIV"
    ],
    confessionTasks: [
        {
            taskType: "reading-the-bible",
            payload: {
                key: "read-scriptures-on-murder",
                text: {
                    en: "Read Genesis 4:8–12 and Matthew 5:21–22. Reflect on how the commandment 'You shall not murder' extends even to anger and contempt.",
                    fr: "Lisez Genèse 4:8–12 et Matthieu 5:21–22. Réfléchissez à la manière dont le commandement « Tu ne tueras point » s’étend même à la colère et au mépris."
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
                            en: "What was God's reaction to Cain's act of murder?",
                            fr: "Quelle a été la réaction de Dieu face à l’acte de meurtre de Caïn ?"
                        },
                        answers: [
                            {
                                text: {
                                    en: "God cursed Cain and made him a restless wanderer.",
                                    fr: "Dieu a maudit Caïn et l’a rendu errant sur la terre."
                                },
                                isSolution: true
                            },
                            {
                                text: {
                                    en: "God rewarded him for honesty.",
                                    fr: "Dieu l’a récompensé pour son honnêteté."
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
                key: "prayer-against-murder",
                overallTask: "Pray for forgiveness for complaining and ask for a heart of trust and surrender.",
                text: {
                    en: "Lord, I repent for any part I have played in disrespecting life. Forgive me and help me uphold the sacredness of every soul.",
                    fr: "Seigneur, je me repens pour toute implication dans le manque de respect envers la vie. Pardonne-moi et aide-moi à honorer le caractère sacré de chaque âme."
                },
                instructionText: {
                    en: "Recite this prayer with humility and intention.",
                    fr: "Récitez cette prière avec humilité et intention."
                },
                reflectionAfterPrayerText: {
                    en: "Think about ways you can protect and honor life in your daily choices.",
                    fr: "Réfléchissez à des moyens de protéger et d’honorer la vie dans vos choix quotidiens."
                }
            }
        },
        {
            taskType: "letters-of-forgiveness",
            payload: {
                key: "letter-murder",
                overallTask: "Write a letter confessing how you’ve grumbled against God’s will.",
                text: {
                    en: "Dear God, I mourn the loss of life caused by human hands. May Your mercy cover all who seek healing. Show me how to be a witness of peace and life.",
                    fr: "Cher Dieu, je pleure la perte de vies causée par des mains humaines. Que Ta miséricorde couvre tous ceux qui cherchent la guérison. Montre-moi comment être un témoin de paix et de vie."
                },
                instructionText: {
                    en: "Write honestly about how this topic touches your life or world.",
                    fr: "Écrivez honnêtement sur la façon dont ce sujet touche votre vie ou le monde."
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
    ]
};

const pride = {
    machineName: "pride",
    slug: "pride",
    type: "against-neighboor",
    severity: "grave",
    headerTitle: {
        en: "Pride",
        fr: "Orgueil"
    },
    description: {
        en: "Pride, arrogance, self-exaltation, haughtiness, self-deification — the 'demonic stronghold'. This sin is the root of all other sins. It separates the soul from God by replacing humility with self-worship.",
        fr: "Orgueil, arrogance, auto-exaltation, hauteur, auto-divinisation — la « forteresse démoniaque ». Ce péché est la racine de tous les autres péchés. Il sépare l'âme de Dieu en remplaçant l'humilité par l'adoration de soi."
    },
    cardImage: "Pride",
    detailBackgroundVideo: "videos/pride_background.mp4",
    additionalLinks: [
        "https://www.bible.com/bible/111/PRO.16.18.NIV",
        "https://www.bible.com/bible/111/LUK.18.9-14.NIV"
    ],
    confessionTasks: [
        {
            taskType: "reading-the-bible",
            payload: {
                key: "read-scriptures-on-pride",
                text: {
                    en: "Read Proverbs 16:18 and Luke 18:9–14. Reflect on how pride leads to downfall and why humility is honored by God.",
                    fr: "Lisez Proverbes 16:18 et Luc 18:9–14. Réfléchissez à la manière dont l'orgueil mène à la chute et pourquoi l'humilité est honorée par Dieu."
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
                            en: "How does the parable of the Pharisee and the tax collector contrast pride and humility?",
                            fr: "Comment la parabole du Pharisien et du collecteur d’impôts contraste-t-elle l’orgueil et l’humilité ?"
                        },
                        answers: [
                            {
                                text: {
                                    en: "The humble tax collector was justified, not the proud Pharisee.",
                                    fr: "Le collecteur d’impôts humble a été justifié, pas le Pharisien orgueilleux."
                                },
                                isSolution: true
                            },
                            {
                                text: {
                                    en: "God rewarded the Pharisee for his discipline.",
                                    fr: "Dieu a récompensé le Pharisien pour sa discipline."
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
                key: "prayer-against-pride",
                overallTask: "Pray for forgiveness and ask God to cultivate humility in your heart.",
                text: {
                    en: "Lord, I confess my pride and self-centeredness. Replace my arrogance with humility and my self-will with surrender to You.",
                    fr: "Seigneur, je confesse mon orgueil et mon égocentrisme. Remplace mon arrogance par l’humilité et ma volonté propre par l’abandon à Toi."
                },
                instructionText: {
                    en: "Pray these words slowly and with sincerity.",
                    fr: "Priez ces paroles lentement et avec sincérité."
                },
                reflectionAfterPrayerText: {
                    en: "Ask God to show you ways to walk humbly with Him today.",
                    fr: "Demandez à Dieu de vous montrer comment marcher humblement avec Lui aujourd’hui."
                }
            }
        },
        {
            taskType: "letters-of-forgiveness",
            payload: {
                key: "letter-pride",
                overallTask: "Write a letter confessing moments of self-exaltation or judgment of others.",
                text: {
                    en: "Dear God, I have looked down on others and raised myself up. I ask Your forgiveness. Teach me to see with Your eyes of mercy.",
                    fr: "Cher Dieu, j’ai méprisé les autres et me suis élevé moi-même. Je Te demande pardon. Apprends-moi à voir avec Tes yeux de miséricorde."
                },
                instructionText: {
                    en: "Write honestly about where pride has shown up in your thoughts or actions.",
                    fr: "Écrivez honnêtement à propos des endroits où l’orgueil s’est manifesté dans vos pensées ou vos actions."
                }
            }
        },
        {
            taskType: "practice-of-silence",
            payload: {
                key: "silence-humbling",
                overallTask: "Spend five minutes in silence to humble your heart before God.",
                text: {
                    en: "In silence, we lay aside self-importance and open ourselves to God's voice.",
                    fr: "Dans le silence, nous mettons de côté l’importance de soi et nous ouvrons à la voix de Dieu."
                },
                instructionText: {
                    en: "Sit quietly and repeat: 'I decrease, You increase.'",
                    fr: "Asseyez-vous calmement et répétez : « Je diminue, Tu augmentes. »"
                }
            }
        },
        {
            taskType: "religious-rituals",
            payload: {
                key: "ritual-humility",
                overallTask: "Attend confession or a humble form of worship to acknowledge your dependence on God.",
                text: {
                    en: "Rituals help break pride and restore right relationship with God.",
                    fr: "Les rites aident à briser l’orgueil et à restaurer une juste relation avec Dieu."
                },
                instructionText: {
                    en: "Approach the ritual as a sinner seeking mercy, not as a person proving worth.",
                    fr: "Approchez-vous du rite comme un pécheur cherchant la miséricorde, non comme quelqu’un qui prouve sa valeur."
                }
            }
        },
        {
            taskType: "social-tasks",
            payload: {
                key: "talk-about-humility",
                overallTask: "Share with someone how pride has affected your relationships and how you seek humility.",
                listOfSocialTasks: [
                    {
                        en: "Tell someone a time when you judged others and how God changed your heart.",
                        fr: "Racontez à quelqu’un un moment où vous avez jugé les autres et comment Dieu a changé votre cœur."
                    }
                ],
                instructionText: {
                    en: "Let your vulnerability encourage someone else's transformation.",
                    fr: "Laissez votre vulnérabilité encourager la transformation de quelqu’un d’autre."
                }
            }
        },
        {
            taskType: "ecological-initiatives",
            payload: {
                key: "humility-in-creation",
                overallTask: "Do an act of service for the environment, recognizing that you are a steward, not the owner.",
                listOfRites: [
                    {
                        en: "Serve creation by tending to plants, picking up trash, or conserving water.",
                        fr: "Servez la création en prenant soin des plantes, en ramassant les déchets ou en économisant l’eau."
                    }
                ],
                instructionText: {
                    en: "Offer this action as a reminder that all creation belongs to God.",
                    fr: "Offrez cet acte comme rappel que toute la création appartient à Dieu."
                }
            }
        },
        {
            taskType: "fasting-and-abstinence",
            payload: {
                key: "fasting-from-praise",
                overallTask: "Fast from seeking attention or praise. Let humility lead your actions today.",
                text: {
                    en: "Humility grows when we do good without needing recognition.",
                    fr: "L’humilité grandit lorsque nous faisons le bien sans chercher à être reconnus."
                },
                instructionText: {
                    en: "Let every good deed today be unseen by others, but seen by God.",
                    fr: "Que chaque bonne action aujourd’hui soit cachée aux yeux des hommes, mais vue par Dieu."
                }
            }
        }
    ]
};


export const graveAgainstNeighboorSins = [
    murderAndAbortion,
    pride
];

