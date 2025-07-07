const thoughtsOfSuicide = {
    machineName: "thoughts-of-suicide",
    type: "against-yourself",
    severity: "grave",
    headerTitle: {
        en: "Thoughts of Suicide",
        fr: "Pensées suicidaires"
    },
    description: {
        en: "Despair and thoughts of suicide. A loss of hope that stems from self-condemnation and an inability to believe in God's mercy and redemptive power.",
        fr: "Désespoir et pensées suicidaires. Une perte d'espérance découlant de l'auto-condamnation et de l'incapacité à croire en la miséricorde de Dieu et en son pouvoir rédempteur."
    },
    cardImage: "ThoughtsOfSuicide",
    detailBackgroundVideo: "videos/thoughts_of_suicide_background.mp4",
    confessionTasks: [
        {
            taskType: "reading-the-bible",
            payload: {
                key: "read-scriptures-on-hope",
                text: {
                    en: "Read Romans 8:38–39 and Isaiah 41:10. Reflect on God's unbreakable love and His promise of presence.",
                    fr: "Lisez Romains 8:38–39 et Ésaïe 41:10. Réfléchissez à l’amour indéfectible de Dieu et à Sa promesse de présence."
                },
                surveyQuestions: [
                    {
                        key: "question-1",
                        description: {
                            en: "What assurance does God give us in Isaiah 41:10?",
                            fr: "Quelle assurance Dieu nous donne-t-Il dans Ésaïe 41:10 ?"
                        },
                        answers: [
                            {
                                text: {
                                    en: "That He is with us, will strengthen and help us.",
                                    fr: "Qu’Il est avec nous, nous fortifiera et nous aidera."
                                },
                                isSolution: true
                            },
                            {
                                text: {
                                    en: "That we must face everything alone.",
                                    fr: "Que nous devons tout affronter seuls."
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
                key: "prayer-for-hope",
                overallTask: "Pray to receive God’s mercy and strength when you feel hopeless.",
                text: {
                    en: "God of life, restore my hope. When I see only darkness, help me see Your light. I place my life in Your hands.",
                    fr: "Dieu de vie, restaure mon espérance. Quand je ne vois que ténèbres, aide-moi à voir Ta lumière. Je remets ma vie entre Tes mains."
                },
                instructionText: {
                    en: "Pray this slowly and trust God hears you.",
                    fr: "Priez cela lentement et ayez confiance que Dieu vous écoute."
                },
                reflectionAfterPrayerText: {
                    en: "Write or speak a short sentence of hope you want to hold onto.",
                    fr: "Écrivez ou prononcez une courte phrase d’espérance que vous voulez garder."
                }
            }
        },
        {
            taskType: "letters-of-forgiveness",
            payload: {
                key: "letter-of-hope",
                overallTask: "Write a letter to God expressing your pain, asking for His help to hold on.",
                text: {
                    en: "Father, I feel broken. I struggle to hope. Please carry me through this darkness and remind me that I matter to You.",
                    fr: "Père, je me sens brisé. J’ai du mal à espérer. Porte-moi dans ces ténèbres et rappelle-moi que j’ai de la valeur à Tes yeux."
                },
                instructionText: {
                    en: "Be honest and pour out your heart to God.",
                    fr: "Soyez honnête et ouvrez votre cœur à Dieu."
                }
            }
        },
        {
            taskType: "practice-of-silence",
            payload: {
                key: "silence-of-surrender",
                overallTask: "Sit in silence and let go of all despair, opening your heart to God's peace.",
                text: {
                    en: "In the quiet, God speaks hope. Let go of fear and open yourself to His presence.",
                    fr: "Dans le silence, Dieu parle d’espérance. Laissez aller la peur et ouvrez-vous à Sa présence."
                },
                instructionText: {
                    en: "Sit still and repeat quietly: 'I am not alone. God is with me.'",
                    fr: "Restez tranquille et répétez doucement : 'Je ne suis pas seul. Dieu est avec moi.'"
                }
            }
        }
    ],
    additionalLinks: [
        "https://www.bible.com/bible/111/ROM.8.38-39.NIV",
        "https://www.bible.com/bible/111/ISA.41.10.NIV"
    ]
};

const formation = {
    machineName: "fornication",
   type: "against-yourself",
    severity: "grave",

    headerTitle_en: "Fornication",
    headerTitle_fr: "Fornication",

    description_en: "Fornication, adultery, self-indulgent lust, the dissolute life of the prodigal son who squandered his father's inheritance on such living.",
    description_fr: "La fornication, l'adultère, la luxure excessive, la vie dissolue du fils prodigue qui a gaspillé l'héritage de son père dans une telle existence.",

    questions: [
        {
            question_en: "Do you struggle with maintaining sexual purity?",
            question_fr: "Avez-vous du mal à maintenir la pureté sexuelle ?",
            answers_en: ["Yes", "No"],
            answers_fr: ["Oui", "Non"],
        },
        {
            question_en: "Have you sought forgiveness and healing through repentance and prayer?",
            question_fr: "Avez-vous cherché le pardon et la guérison par la repentance et la prière ?",
            answers_en: ["Yes", "No"],
            answers_fr: ["Oui", "Non"],
        },
    ],

    bibleQuotes_en: [
        `"Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body." (1 Corinthians 6:18)`,
        `"Blessed are the pure in heart, for they will see God." (Matthew 5:8)`,
    ],
    bibleQuotes_fr: [
        `"Fuyez l'immoralité sexuelle. Tous les autres péchés qu’un homme commet sont hors du corps, mais celui qui pèche sexuellement pèche contre son propre corps." (1 Corinthiens 6:18)`,
        `"Heureux ceux qui ont le cœur pur, car ils verront Dieu." (Matthieu 5:8)`,
    ],

    confessionTasks: [
        {
            machineName: "prayer-recitation",
            title_en: "Prayer of Repentance and Purity",
            title_fr: "Prière de repentir et de pureté",
            goal_en: "This prayer aims to help the soul turn away from carnal desires and seek forgiveness for sexual sins.",
            goal_fr: "Cette prière vise à aider l'âme à se détourner des désirs charnels et à demander pardon pour les péchés sexuels.",
            instruction_en: "Recite the prayer aloud or silently with sincerity. Reflect on each line, and take a few moments to let the words sink in.",
            instruction_fr: "Récitez la prière à voix haute ou en silence avec sincérité. Réfléchissez à chaque ligne et prenez quelques instants pour en méditer le sens.",
            text_en: "Lord, cleanse my heart from lustful thoughts. Grant me strength to resist temptation and to live in purity before You. Help me to honor my body as Your temple.",
            text_fr: "Seigneur, purifie mon cœur des pensées impures. Donne-moi la force de résister à la tentation et de vivre dans la pureté devant Toi. Aide-moi à honorer mon corps comme Ton temple.",
        },
        {
            machineName: "reading-the-bible",
            title_en: "Bible Passages on Purity",
            title_fr: "Passages bibliques sur la pureté",
            goal_en: "These readings help the believer reflect on God’s desire for moral integrity and sexual holiness.",
            goal_fr: "Ces lectures aident le croyant à réfléchir au désir de Dieu pour l'intégrité morale et la sainteté sexuelle.",
            instruction_en: "Read each passage carefully and meditate on the message. Consider journaling your reflections on how these verses relate to your struggle with this sin.",
            instruction_fr: "Lisez chaque passage attentivement et méditez sur le message. Envisagez d’écrire vos réflexions dans un journal sur la manière dont ces versets se rapportent à votre lutte contre ce péché.",
            passages: [
                {
                    reference: "1 Thessalonians 4:3-5",
                    text_en: "It is God’s will that you should be sanctified: that you should avoid sexual immorality; that each of you should learn to control your own body in a way that is holy and honorable.",
                    text_fr: "Ce que Dieu veut, c’est votre sanctification : que vous vous absteniez de l’immoralité sexuelle ; que chacun de vous sache contrôler son corps dans la sainteté et l’honneur.",
                },
                {
                    reference: "Proverbs 5:18-20",
                    text_en: "May your fountain be blessed, and may you rejoice in the wife of your youth. Why, my son, be intoxicated with another man’s wife?",
                    text_fr: "Que ta source soit bénie, et fais ta joie de la femme de ta jeunesse. Pourquoi, mon fils, serais-tu épris d'une étrangère ?",
                },
            ],
        },
        {
            machineName: "letters-of-forgiveness",
            title_en: "Letter of Inner Healing",
            title_fr: "Lettre de guérison intérieure",
            goal_en: "To initiate inner healing by honestly expressing your thoughts on sin and asking for renewal.",
            goal_fr: "Initier une guérison intérieure en exprimant honnêtement vos pensées sur le péché et en demandant un renouveau.",
            instruction_en: "Write a letter to God or to yourself reflecting on the consequences of fornication and asking for healing and renewal.",
            instruction_fr: "Écrivez une lettre à Dieu ou à vous-même en réfléchissant aux conséquences de la fornication et en demandant guérison et renouveau.",
        },
        {
            machineName: "practice-of-silence",
            title_en: "Practice of Silence",
            title_fr: "Pratique du Silence",
            goal_en: "To reflect on chastity and inner purity by embracing silence.",
            goal_fr: "Réfléchir à la chasteté et à la pureté intérieure en adoptant le silence.",
            instruction_en: "Find a quiet place, disconnect from distractions, and spend 15 minutes in silence each day for a week, contemplating your relationship with physical desires and purity.",
            instruction_fr: "Trouvez un endroit calme, déconnectez-vous des distractions et passez 15 minutes par jour en silence pendant une semaine à contempler votre relation avec les désirs physiques et la pureté.",
        },
        {
            machineName: "religious-rituals",
            title_en: "Religious Rituals",
            title_fr: "Rituels Religieux",
            goal_en: "To seek spiritual healing through participation in confession, Holy Communion, and services emphasizing fidelity and self-control.",
            goal_fr: "Chercher la guérison spirituelle par la confession, la Sainte Communion et des services mettant l'accent sur la fidélité et la maîtrise de soi.",
            instruction_en: "Attend at least three religious services in two weeks. Participate in confession or speak to a spiritual guide about the sin of fornication. Mark each activity completed.",
            instruction_fr: "Assistez à au moins trois services religieux en deux semaines. Participez à la confession ou parlez à un guide spirituel du péché de fornication. Marquez chaque activité complétée.",
        },
        {
            machineName: "social-tasks",
            title_en: "Social Tasks",
            title_fr: "Tâches Sociales",
            goal_en: "To restore the dignity of others and oneself by supporting individuals struggling with chastity and healthy relationships.",
            goal_fr: "Restaurer la dignité des autres et de soi-même en soutenant les personnes en difficulté avec la chasteté et les relations saines.",
            instruction_en: "Volunteer at a local youth group, offer mentorship, or participate in events promoting moral values and sexual responsibility. Provide photos or summaries.",
            instruction_fr: "Faites du bénévolat dans un groupe de jeunes local, offrez du mentorat ou participez à des événements promouvant les valeurs morales et la responsabilité sexuelle. Fournissez des photos ou des résumés.",
        },
        {
            machineName: "ecological-initiatives",
            title_en: "Ecological Initiatives",
            title_fr: "Initiatives Écologiques",
            goal_en: "To symbolize inner cleansing through care for God’s creation.",
            goal_fr: "Symboliser la purification intérieure par le soin de la création de Dieu.",
            instruction_en: "Clean a local park or natural site and reflect on how purity in the body relates to purity in the world. Upload before/after pictures.",
            instruction_fr: "Nettoyez un parc ou un site naturel local et réfléchissez à la manière dont la pureté du corps se rapporte à la pureté dans le monde. Téléchargez des photos avant/après.",
        },
        {
            machineName: "fasting-and-abstinence",
            title_en: "Fasting and Abstinence",
            title_fr: "Jeûne et Abstinence",
            goal_en: "To reclaim spiritual discipline through sexual abstinence and mindful living.",
            goal_fr: "Retrouver la discipline spirituelle par l'abstinence sexuelle et une vie consciente.",
            instruction_en: "Practice 10 days of abstinence and intentional lifestyle discipline. Reflect on your body as a temple and journal your experience.",
            instruction_fr: "Pratiquez 10 jours d'abstinence et de discipline de vie intentionnelle. Réfléchissez à votre corps comme un temple et consignez votre expérience dans un journal.",
        },
    ],

    additionalLinks: [
        "https://www.bible.com/bible/111/1TH.4.3.NIV",
        "https://www.bible.com/bible/111/1CO.6.18.NIV",
    ],

    createdAt: "2025-06-26T07:03:11.401745",
};


export const graveAgainstYourselfSins = [
    thoughtsOfSuicide,
    formation
];