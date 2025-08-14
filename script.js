const chaptersData = {
    english: [
        {
            number: 1,
            title: "Arjuna's Dilemma",
            verses: 47,
            summary: "Arjuna faces moral crisis on the battlefield, overwhelmed by the prospect of fighting his own relatives and teachers.",
            keyTeachings: [
                "The nature of moral conflict",
                "Emotional attachment and its consequences",
                "The importance of seeking guidance"
            ],
            pageLink: "chapters/chapter1.html"
        },
        {
            number: 2,
            title: "The Yoga of Knowledge",
            verses: 72,
            summary: "Krishna introduces fundamental concepts of the eternal soul, duty, and the path of knowledge to overcome grief.",
            keyTeachings: [
                "The immortality of the soul",
                "Performing duty without attachment",
                "The concept of dharma",
                "Equanimity in success and failure"
            ],
            pageLink: "chapters/chapter2.html"
        },
        {
            number: 3,
            title: "The Yoga of Action",
            verses: 43,
            summary: "Krishna explains the importance of selfless action and how to perform duties without being bound by results.",
            keyTeachings: [
                "Karma Yoga - the path of action",
                "Acting without attachment to results",
                "The cycle of action and reaction",
                "Leading by example"
            ],
            pageLink: "chapters/chapter3.html"
        },
        {
            number: 4,
            title: "The Yoga of Divine Knowledge",
            verses: 42,
            summary: "Krishna reveals his divine nature and the concept of avatar, explaining how divine knowledge is transmitted.",
            keyTeachings: [
                "The concept of divine incarnation",
                "Transmission of spiritual knowledge",
                "The importance of a qualified teacher",
                "Different types of sacrifice"
            ],
            pageLink: "chapters/chapter4.html"
        },
        {
            number: 5,
            title: "The Yoga of Renunciation",
            verses: 29,
            summary: "Krishna clarifies the relationship between action and renunciation, showing they lead to the same goal.",
            keyTeachings: [
                "True renunciation vs. mere inaction",
                "Mental detachment while performing duties",
                "The unity of different spiritual paths",
                "Inner peace through right understanding"
            ],
            pageLink: "chapters/chapter5.html"
        },
        {
            number: 6,
            title: "The Yoga of Meditation",
            verses: 47,
            summary: "Krishna provides detailed instructions on meditation practice and the qualities of a true yogi.",
            keyTeachings: [
                "Practical meditation techniques",
                "Controlling the mind and senses",
                "The characteristics of a realized soul",
                "Gradual spiritual progress"
            ],
            pageLink: "chapters/chapter6.html"
        },
        {
            number: 7,
            title: "The Yoga of Divine Knowledge",
            verses: 30,
            summary: "Krishna explains his divine nature and how devotees can know him in truth through various manifestations.",
            keyTeachings: [
                "God's material and spiritual energies",
                "Different types of devotees",
                "The rarity of true knowledge",
                "Surrender to the divine"
            ],
            pageLink: "chapters/chapter7.html"
        },
        {
            number: 8,
            title: "The Yoga of the Imperishable Absolute",
            verses: 28,
            summary: "Krishna explains the nature of Brahman, karma, and the importance of remembering God at death.",
            keyTeachings: [
                "The nature of the Absolute Truth",
                "The importance of the final moment",
                "Different paths after death",
                "Constant remembrance of God"
            ],
            pageLink: "chapters/chapter8.html"
        },
        {
            number: 9,
            title: "The Yoga of Royal Knowledge",
            verses: 34,
            summary: "Krishna reveals the most confidential knowledge about devotion and his all-pervading nature.",
            keyTeachings: [
                "The supremacy of devotional service",
                "God's immanence and transcendence",
                "The power of pure devotion",
                "Equality of all beings before God"
            ],
            pageLink: "chapters/chapter9.html"
        },
        {
            number: 10,
            title: "The Yoga of Divine Glories",
            verses: 42,
            summary: "Krishna describes his various manifestations and opulences throughout creation to increase Arjuna's devotion.",
            keyTeachings: [
                "God's manifestations in creation",
                "The source of all excellence",
                "Developing appreciation for divine presence",
                "The infinite nature of God's glories"
            ],
            pageLink: "chapters/chapter10.html"
        },
        {
            number: 11,
            title: "The Yoga of the Universal Form",
            verses: 55,
            summary: "Krishna reveals his cosmic form to Arjuna, showing the universal aspect of divinity and the nature of time.",
            keyTeachings: [
                "The cosmic vision of God",
                "The all-devouring aspect of time",
                "Humility before the infinite",
                "The personal form as most merciful"
            ],
            pageLink: "chapters/chapter11.html"
        },
        {
            number: 12,
            title: "The Yoga of Devotion",
            verses: 20,
            summary: "Krishna explains the superiority of personal devotion over impersonal meditation and describes the qualities of devotees.",
            keyTeachings: [
                "Personal vs. impersonal worship",
                "Qualities of a true devotee",
                "Different levels of spiritual practice",
                "The path of loving devotion"
            ],
            pageLink: "chapters/chapter12.html"
        },
        {
            number: 13,
            title: "The Yoga of the Field and Knower",
            verses: 35,
            summary: "Krishna explains the distinction between the body (field) and the soul (knower), and the nature of knowledge.",
            keyTeachings: [
                "Body vs. soul distinction",
                "The nature of true knowledge",
                "The three modes of nature",
                "Self-realization through discrimination"
            ],
            pageLink: "chapters/chapter13.html"
        },
        {
            number: 14,
            title: "The Yoga of the Three Modes",
            verses: 27,
            summary: "Krishna describes the three modes of material nature and how to transcend them through devotion.",
            keyTeachings: [
                "Goodness, passion, and ignorance",
                "How modes influence behavior",
                "Signs of transcendence",
                "Liberation through devotion"
            ],
            pageLink: "chapters/chapter14.html"
        },
        {
            number: 15,
            title: "The Yoga of the Supreme Person",
            verses: 20,
            summary: "Krishna uses the metaphor of an inverted tree to describe material existence and explains the nature of the Supreme Person.",
            keyTeachings: [
                "The cosmic tree of existence",
                "Detachment from material entanglement",
                "The Supreme Person beyond all",
                "The goal of all Vedic knowledge"
            ],
            pageLink: "chapters/chapter15.html"
        },
        {
            number: 16,
            title: "The Yoga of Divine and Demoniac Natures",
            verses: 24,
            summary: "Krishna contrasts divine and demoniac qualities, explaining how they lead to liberation or bondage.",
            keyTeachings: [
                "Divine vs. demoniac qualities",
                "The importance of following scriptures",
                "How qualities determine destiny",
                "Cultivating divine nature"
            ],
            pageLink: "chapters/chapter16.html"
        },
        {
            number: 17,
            title: "The Yoga of Threefold Faith",
            verses: 28,
            summary: "Krishna explains how the three modes influence faith, worship, food, sacrifice, and charity.",
            keyTeachings: [
                "Faith according to one's nature",
                "Types of food and their effects",
                "Proper performance of sacrifice",
                "The threefold austerity"
            ],
            pageLink: "chapters/chapter17.html"
        },
        {
            number: 18,
            title: "The Yoga of Liberation through Renunciation",
            verses: 78,
            summary: "Krishna concludes with the ultimate teaching of surrender, summarizing all paths and giving his final instruction.",
            keyTeachings: [
                "The ultimate instruction of surrender",
                "Summary of all spiritual paths",
                "The most confidential knowledge",
                "Promise of liberation and protection"
            ],
            pageLink: "chapters/chapter18.html"
        }
    ],
    hindi: [
        {
            number: 1,
            title: "अर्जुन विषाद योग",
            verses: 47,
            summary: "अर्जुन युद्धभूमि में अपने स्वजनों और गुरुजनों से युद्ध करने की संभावना से व्याकुल हो जाता है।",
            keyTeachings: [
                "नैतिक संघर्ष की प्रकृति",
                "भावनात्मक आसक्ति और इसके परिणाम",
                "मार्गदर्शन प्राप्त करने का महत्व"
            ],
            pageLink: "chapters/chapter1.html"
        },
        {
            number: 2,
            title: "सांख्य योग",
            verses: 72,
            summary: "कृष्ण शाश्वत आत्मा, कर्तव्य और ज्ञान के मार्ग की मूलभूत अवधारणाओं का परिचय देते हैं।",
            keyTeachings: [
                "आत्मा की अमरता",
                "आसक्ति रहित कर्तव्य पालन",
                "धर्म की अवधारणा",
                "सफलता-असफलता में समभाव"
            ],
            pageLink: "chapters/chapter2.html"
        },
        {
            number: 3,
            title: "कर्म योग",
            verses: 43,
            summary: "कृष्ण निष्काम कर्म के महत्व और फल की आसक्ति के बिना कर्तव्य पालन की व्याख्या करते हैं।",
            keyTeachings: [
                "कर्म योग - कर्म का मार्ग",
                "फल की आसक्ति के बिना कर्म",
                "कर्म और प्रतिकर्म का चक्र",
                "उदाहरण द्वारा नेतृत्व"
            ],
            pageLink: "chapters/chapter3.html"
        },
        {
            number: 4,
            title: "ज्ञान कर्म संन्यास योग",
            verses: 42,
            summary: "कृष्ण अपनी दिव्य प्रकृति और अवतार की अवधारणा प्रकट करते हैं।",
            keyTeachings: [
                "दिव्य अवतार की अवधारणा",
                "आध्यात्मिक ज्ञान का स्थानांतरण",
                "योग्य गुरु का महत्व",
                "विभिन्न प्रकार के यज्ञ"
            ],
            pageLink: "chapters/chapter4.html"
        },
        {
            number: 5,
            title: "कर्म संन्यास योग",
            verses: 29,
            summary: "कृष्ण कर्म और संन्यास के बीच संबंध स्पष्ट करते हैं।",
            keyTeachings: [
                "सच्चा संन्यास बनाम निष्क्रियता",
                "कर्तव्य पालन में मानसिक वैराग्य",
                "विभिन्न आध्यात्मिक मार्गों की एकता",
                "सही समझ के द्वारा आंतरिक शांति"
            ],
            pageLink: "chapters/chapter5.html"
        },
        {
            number: 6,
            title: "आत्म संयम योग",
            verses: 47,
            summary: "कृष्ण ध्यान अभ्यास और सच्चे योगी के गुणों के बारे में विस्तृत निर्देश देते हैं।",
            keyTeachings: [
                "व्यावहारिक ध्यान तकनीकें",
                "मन और इंद्रियों का नियंत्रण",
                "आत्मसाक्षात्कारी की विशेषताएं",
                "क्रमिक आध्यात्मिक प्रगति"
            ],
            pageLink: "chapters/chapter6.html"
        },
        {
            number: 7,
            title: "ज्ञान विज्ञान योग",
            verses: 30,
            summary: "कृष्ण अपनी दिव्य प्रकृति और विभिन्न अभिव्यक्तियों के माध्यम से उन्हें जानने की व्याख्या करते हैं।",
            keyTeachings: [
                "ईश्वर की भौतिक और आध्यात्मिक शक्तियां",
                "विभिन्न प्रकार के भक्त",
                "सच्चे ज्ञान की दुर्लभता",
                "दिव्य के प्रति समर्पण"
            ],
            pageLink: "chapters/chapter7.html"
        },
        {
            number: 8,
            title: "अक्षर ब्रह्म योग",
            verses: 28,
            summary: "कृष्ण ब्रह्म, कर्म की प्रकृति और मृत्यु के समय ईश्वर को याद करने के महत्व की व्याख्या करते हैं।",
            keyTeachings: [
                "परम सत्य की प्रकृति",
                "अंतिम क्षण का महत्व",
                "मृत्यु के बाद विभिन्न मार्ग",
                "ईश्वर का निरंतर स्मरण"
            ],
            pageLink: "chapters/chapter8.html"
        },
        {
            number: 9,
            title: "राज विद्या राज गुह्य योग",
            verses: 34,
            summary: "कृष्ण भक्ति और अपनी सर्वव्यापी प्रकृति के बारे में सबसे गुप्त ज्ञान प्रकट करते हैं।",
            keyTeachings: [
                "भक्ति सेवा की सर्वोच्चता",
                "ईश्वर की व्यापकता और पारलौकिकता",
                "शुद्ध भक्ति की शक्ति",
                "ईश्वर के समक्ष सभी जीवों की समानता"
            ],
            pageLink: "chapters/chapter9.html"
        },
        {
            number: 10,
            title: "विभूति योग",
            verses: 42,
            summary: "कृष्ण अर्जुन की भक्ति बढ़ाने के लिए सृष्टि में अपनी विभिन्न अभिव्यक्तियों का वर्णन करते हैं।",
            keyTeachings: [
                "सृष्टि में ईश्वर की अभिव्यक्तियां",
                "सभी उत्कृष्टता का स्रोत",
                "दिव्य उपस्थिति के लिए प्रशंसा विकसित करना",
                "ईश्वर की महिमा की अनंत प्रकृति"
            ],
            pageLink: "chapters/chapter10.html"
        },
        {
            number: 11,
            title: "विश्वरूप दर्शन योग",
            verses: 55,
            summary: "कृष्ण अर्जुन को अपना विश्वरूप दिखाते हैं, दिव्यता के सार्वभौमिक पहलू को प्रकट करते हैं।",
            keyTeachings: [
                "ईश्वर का विश्वरूप दर्शन",
                "काल का सर्वभक्षी रूप",
                "अनंत के समक्ष विनम्रता",
                "व्यक्तिगत रूप सबसे दयालु"
            ],
            pageLink: "chapters/chapter11.html"
        },
        {
            number: 12,
            title: "भक्ति योग",
            verses: 20,
            summary: "कृष्ण निर्गुण ध्यान पर व्यक्तिगत भक्ति की श्रेष्ठता और भक्तों के गुणों का वर्णन करते हैं।",
            keyTeachings: [
                "व्यक्तिगत बनाम निर्व्यक्तिक उपासना",
                "सच्चे भक्त के गुण",
                "आध्यात्मिक अभ्यास के विभिन्न स्तर",
                "प्रेमपूर्ण भक्ति का मार्ग"
            ],
            pageLink: "chapters/chapter12.html"
        },
        {
            number: 13,
            title: "क्षेत्र क्षेत्रज्ञ विभाग योग",
            verses: 35,
            summary: "कृष्ण शरीर (क्षेत्र) और आत्मा (क्षेत्रज्ञ) के बीच अंतर और ज्ञान की प्रकृति की व्याख्या करते हैं।",
            keyTeachings: [
                "शरीर बनाम आत्मा का भेद",
                "सच्चे ज्ञान की प्रकृति",
                "प्रकृति के तीन गुण",
                "विवेक के द्वारा आत्मसाक्षात्कार"
            ],
            pageLink: "chapters/chapter13.html"
        },
        {
            number: 14,
            title: "गुणत्रय विभाग योग",
            verses: 27,
            summary: "कृष्ण प्रकृति के तीन गुणों और भक्ति के द्वारा उन्हें पार करने का वर्णन करते हैं।",
            keyTeachings: [
                "सत्व, रजस और तमस गुण",
                "गुण कैसे व्यवहार को प्रभावित करते हैं",
                "गुणातीत होने के लक्षण",
                "भक्ति के द्वारा मुक्ति"
            ],
            pageLink: "chapters/chapter14.html"
        },
        {
            number: 15,
            title: "पुरुषोत्तम योग",
            verses: 20,
            summary: "कृष्ण उल्टे वृक्ष के रूपक का उपयोग करके भौतिक अस्तित्व और परम पुरुष की प्रकृति का वर्णन करते हैं।",
            keyTeachings: [
                "अस्तित्व का विश्वव्यापी वृक्ष",
                "भौतिक बंधन से वैराग्य",
                "सर्वोपरि परम पुरुष",
                "सभी वैदिक ज्ञान का लक्ष्य"
            ],
            pageLink: "chapters/chapter15.html"
        },
        {
            number: 16,
            title: "दैवासुर संपद् विभाग योग",
            verses: 24,
            summary: "कृष्ण दैवी और आसुरी गुणों की तुलना करते हैं, बताते हैं कि वे मुक्ति या बंधन की ओर कैसे ले जाते हैं।",
            keyTeachings: [
                "दैवी बनाम आसुरी गुण",
                "शास्त्रों का पालन करने का महत्व",
                "गुण कैसे भाग्य निर्धारित करते हैं",
                "दैवी प्रकृति का विकास"
            ],
            pageLink: "chapters/chapter16.html"
        },
        {
            number: 17,
            title: "श्रद्धात्रय विभाग योग",
            verses: 28,
            summary: "कृष्ण बताते हैं कि तीन गुण श्रद्धा, पूजा, भोजन, यज्ञ और दान को कैसे प्रभावित करते हैं।",
            keyTeachings: [
                "व्यक्ति की प्रकृति के अनुसार श्रद्धा",
                "भोजन के प्रकार और उनके प्रभाव",
                "यज्ञ का उचित निष्पादन",
                "त्रिविध तप"
            ],
            pageLink: "chapters/chapter17.html"
        },
        {
            number: 18,
            title: "मोक्ष संन्यास योग",
            verses: 78,
            summary: "कृष्ण समर्पण की परम शिक्षा के साथ निष्कर्ष निकालते हैं, सभी मार्गों का सारांश देते हैं।",
            keyTeachings: [
                "समर्पण की परम शिक्षा",
                "सभी आध्यात्मिक मार्गों का सारांश",
                "सबसे गुप्त ज्ञान",
                "मुक्ति और सुरक्षा का वादा"
            ],
            pageLink: "chapters/chapter18.html"
        }
    ],
    sanskrit: [
        {
            number: 1,
            title: "अर्जुनविषादयोगः",
            verses: 47,
            summary: "अर्जुनः युद्धक्षेत्रे स्वजनैः गुरुभिश्च युद्धे संभावनया व्याकुलो भवति।",
            keyTeachings: [
                "नैतिकसंघर्षस्य प्रकृतिः",
                "भावनात्मकासक्तिः तस्य परिणामाश्च",
                "मार्गदर्शनप्राप्तेः महत्त्वम्"
            ],
            pageLink: "chapters/chapter1.html"
        },
        {
            number: 2,
            title: "सांख्ययोगः",
            verses: 72,
            summary: "कृष्णः शाश्वतात्मनः कर्तव्यस्य ज्ञानमार्गस्य च मूलभूतसिद्धान्तान् प्रस्तुतवान्।",
            keyTeachings: [
                "आत्मनो अमरत्वम्",
                "निरासक्तकर्तव्यपालनम्",
                "धर्मस्य सिद्धान्तः",
                "सफलतासफलतयोः समभावः"
            ],
            pageLink: "chapters/chapter2.html"
        },
        {
            number: 3,
            title: "कर्मयोगः",
            verses: 43,
            summary: "कृष्णः निष्कामकर्मणो महत्त्वं फलासक्तिरहितकर्तव्यपालनस्य च व्याख्यानं करोति।",
            keyTeachings: [
                "कर्मयोगः - कर्मणो मार्गः",
                "फलासक्तिरहितकर्म",
                "कर्मप्रतिकर्मचक्रम्",
                "उदाहरणेन नेतृत्वम्"
            ],
            pageLink: "chapters/chapter3.html"
        },
        {
            number: 4,
            title: "ज्ञानकर्मसंन्यासयोगः",
            verses: 42,
            summary: "कृष्णः स्वदिव्यप्रकृतिं अवतारसिद्धान्तं च प्रकटयति।",
            keyTeachings: [
                "दिव्यावतारस्य सिद्धान्तः",
                "आध्यात्मिकज्ञानस्य संक्रमणम्",
                "योग्यगुरोः महत्त्वम्",
                "विविधयज्ञप्रकाराः"
            ],
            pageLink: "chapters/chapter4.html"
        },
        {
            number: 5,
            title: "कर्मसंन्यासयोगः",
            verses: 29,
            summary: "कृष्णः कर्मसंन्यासयोः मध्ये सम्बन्धं स्पष्टीकरोति।",
            keyTeachings: [
                "सत्यसंन्यासो निष्क्रियतायाः विपरीतम्",
                "कर्तव्यपालने मानसिकवैराग्यम्",
                "विविधाध्यात्मिकमार्गाणामैक्यम्",
                "सम्यक्बोधेन आन्तरिकशान्तिः"
            ],
            pageLink: "chapters/chapter5.html"
        },
        {
            number: 6,
            title: "आत्मसंयमयोगः",
            verses: 47,
            summary: "कृष्णः ध्यानाभ्यासस्य सत्ययोगिनो गुणानां च विस्तृतनिर्देशान् ददाति।",
            keyTeachings: [
                "व्यावहारिकध्यानतकनीकाः",
                "मनइन्द्रियनियन्त्रणम्",
                "आत्मसाक्षात्कारिणो विशेषताः",
                "क्रमिकाध्यात्मिकप्रगतिः"
            ],
            pageLink: "chapters/chapter6.html"
        },
        {
            number: 7,
            title: "ज्ञानविज्ञानयोगः",
            verses: 30,
            summary: "कृष्णः स्वदिव्यप्रकृतिं विविधअभिव्यक्तिभिः तं ज्ञातुं च व्याख्याति।",
            keyTeachings: [
                "ईश्वरस्य भौतिकाध्यात्मिकशक्तयः",
                "विविधभक्तप्रकाराः",
                "सत्यज्ञानस्य दुर्लभता",
                "दिव्ये समर्पणम्"
            ],
            pageLink: "chapters/chapter7.html"
        },
        {
            number: 8,
            title: "अक्षरब्रह्मयोगः",
            verses: 28,
            summary: "कृष्णः ब्रह्मणः कर्मणश्च प्रकृतिं मृत्युकाले ईश्वरस्मरणस्य महत्त्वं च व्याख्याति।",
            keyTeachings: [
                "परमसत्यस्य प्रकृतिः",
                "अन्तिमक्षणस्य महत्त्वम्",
                "मृत्योः परं विविधमार्गाः",
                "ईश्वरस्य निरन्तरस्मरणम्"
            ],
            pageLink: "chapters/chapter8.html"
        },
        {
            number: 9,
            title: "राजविद्याराजगुह्ययोगः",
            verses: 34,
            summary: "कृष्णः भक्तेः स्वसर्वव्यापिप्रकृतेश्च विषये परमगुप्तज्ञानं प्रकटयति।",
            keyTeachings: [
                "भक्तिसेवायाः सर्वोच्चता",
                "ईश्वरस्य व्यापकत्वं पारलौकिकत्वं च",
                "शुद्धभक्तेः शक्तिः",
                "ईश्वरसमक्षं सर्वजीवानां समानता"
            ],
            pageLink: "chapters/chapter9.html"
        },
        {
            number: 10,
            title: "विभूतियोगः",
            verses: 42,
            summary: "कृष्णः अर्जुनस्य भक्तिवृद्ध्यर्थं सृष्टौ स्वविविधअभिव्यक्तीनां वर्णनं करोति।",
            keyTeachings: [
                "सृष्टौ ईश्वरस्य अभिव्यक्तयः",
                "सर्वोत्कर्षस्य स्रोतः",
                "दिव्यउपस्थितेः प्रशंसाविकासः",
                "ईश्वरमहिम्नो अनन्तप्रकृतिः"
            ],
            pageLink: "chapters/chapter10.html"
        },
        {
            number: 11,
            title: "विश्वरूपदर्शनयोगः",
            verses: 55,
            summary: "कृष्णः अर्जुनाय स्वविश्वरूपं दर्शयति, दिव्यतायाः सार्वभौमिकपक्षं प्रकटयति।",
            keyTeachings: [
                "ईश्वरस्य विश्वरूपदर्शनम्",
                "कालस्य सर्वभक्षकरूपम्",
                "अनन्तसमक्षं विनम्रता",
                "व्यक्तिगतरूपं सर्वाधिकदयालु"
            ],
            pageLink: "chapters/chapter11.html"
        },
        {
            number: 12,
            title: "भक्तियोगः",
            verses: 20,
            summary: "कृष्णः निर्गुणध्यानस्य उपरि व्यक्तिगतभक्तेः श्रेष्ठत्वं भक्तगुणानां च वर्णनं करोति।",
            keyTeachings: [
                "व्यक्तिगत-निर्व्यक्तिकउपासना",
                "सत्यभक्तस्य गुणाः",
                "आध्यात्मिकाभ्यासस्य विविधस्तराः",
                "प्रेमपूर्णभक्तेः मार्गः"
            ],
            pageLink: "chapters/chapter12.html"
        },
        {
            number: 13,
            title: "क्षेत्रक्षेत्रज्ञविभागयोगः",
            verses: 35,
            summary: "कृष्णः शरीर-आत्मनोः मध्ये भेदं ज्ञानस्य प्रकृतिं च व्याख्याति।",
            keyTeachings: [
                "शरीर-आत्मभेदः",
                "सत्यज्ञानस्य प्रकृतिः",
                "प्रकृतेः त्रयो गुणाः",
                "विवेकेन आत्मसाक्षात्कारः"
            ],
            pageLink: "chapters/chapter13.html"
        },
        {
            number: 14,
            title: "गुणत्रयविभागयोगः",
            verses: 27,
            summary: "कृष्णः प्रकृतेः त्रयाणां गुणानां भक्त्या तेषां उत्तरणस्य च वर्णनं करोति।",
            keyTeachings: [
                "सत्त्वरजस्तमोगुणाः",
                "गुणाः व्यवहारं कथं प्रभावयन्ति",
                "गुणातीतत्वस्य लक्षणानि",
                "भक्त्या मुक्तिः"
            ],
            pageLink: "chapters/chapter14.html"
        },
        {
            number: 15,
            title: "पुरुषोत्तमयोगः",
            verses: 20,
            summary: "कृष्णः उर्ध्वमूलवृक्षस्य रूपकेण भौतिकअस्तित्वं परमपुरुषस्य प्रकृतिं च वर्णयति।",
            keyTeachings: [
                "अस्तित्वस्य विश्वव्यापिवृक्षः",
                "भौतिकबन्धनात् वैराग्यम्",
                "सर्वोपरि परमपुरुषः",
                "सर्ववैदिकज्ञानस्य लक्ष्यम्"
            ],
            pageLink: "chapters/chapter15.html"
        },
        {
            number: 16,
            title: "दैवासुरसम्पद्विभागयोगः",
            verses: 24,
            summary: "कृष्णः दैवी-आसुरीगुणानां तुलनां करोति, ते मुक्तिं बन्धनं वा कथं नयन्ति इति वदति।",
            keyTeachings: [
                "दैवी-आसुरीगुणाः",
                "शास्त्रानुसरणस्य महत्त्वम्",
                "गुणाः भाग्यं कथं निर्धारयन्ति",
                "दैवीप्रकृतेः विकासः"
            ],
            pageLink: "chapters/chapter16.html"
        },
        {
            number: 17,
            title: "श्रद्धात्रयविभागयोगः",
            verses: 28,
            summary: "कृष्णः त्रयो गुणाः श्रद्धां पूजां भोजनं यज्ञं दानं च कथं प्रभावयन्ति इति वदति।",
            keyTeachings: [
                "व्यक्तेः प्रकृत्यनुसारं श्रद्धा",
                "भोजनप्रकाराः तेषां प्रभावाश्च",
                "यज्ञस्य उचितनिष्पादनम्",
                "त्रिविधतपः"
            ],
            pageLink: "chapters/chapter17.html"
        },
        {
            number: 18,
            title: "मोक्षसंन्यासयोगः",
            verses: 78,
            summary: "कृष्णः समर्पणस्य परमशिक्षया निष्कर्षं करोति, सर्वमार्गाणां सारांशं ददाति।",
            keyTeachings: [
                "समर्पणस्य परमशिक्षा",
                "सर्वाध्यात्मिकमार्गाणां सारांशः",
                "परमगुप्तज्ञानम्",
                "मुक्तेः सुरक्षायाश्च प्रतिज्ञा"
            ],
            pageLink: "chapters/chapter18.html"
        }
    ]
};

let currentLanguage = 'english';

function changeLanguage(lang) {
    currentLanguage = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Render chapters
    renderChapters();
}

function renderChapters() {
    const chaptersGrid = document.getElementById('chaptersGrid');
    const chapters = chaptersData[currentLanguage];

    chaptersGrid.innerHTML = chapters.map(chapter => `
                <div class="chapter-card" onclick="toggleChapterDetails(this)">
                    <div class="chapter-number">${chapter.number}</div>
                    <div class="chapter-title">${chapter.title}</div>
                    <div class="chapter-verses">${chapter.verses} ${currentLanguage === 'english' ? 'verses' : currentLanguage === 'hindi' ? 'श्लोक' : 'श्लोकाः'}</div>
                    <div class="chapter-summary">${chapter.summary}</div>
                    <a href="${chapter.pageLink}" class="nav-btn">${currentLanguage === 'english' ? 'Read Chapter' : currentLanguage === 'hindi' ? 'अध्याय पढ़ें' : 'अध्याय पठतु'}</a>
                    <button class="expand-btn">${currentLanguage === 'english' ? 'Learn More ▼' : currentLanguage === 'hindi' ? 'और जानें ▼' : 'अधिकं जानीहि ▼'}</button>
                    <div class="chapter-details">
                        <div class="chapter-details-content">
                            <div class="key-teachings">
                                <h4>${currentLanguage === 'english' ? 'Key Teachings:' : currentLanguage === 'hindi' ? 'मुख्य शिक्षाएं:' : 'मुख्यशिक्षाः:'}</h4>
                                <ul>
                                    ${chapter.keyTeachings.map(teaching => `<li>${teaching}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
}

function toggleChapterDetails(cardElement) {
    const details = cardElement.querySelector('.chapter-details');
    const button = cardElement.querySelector('.expand-btn');

    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        button.textContent = currentLanguage === 'english' ? 'Learn More ▼' : currentLanguage === 'hindi' ? 'और जानें ▼' : 'अधिकं जानीहि ▼';
    } else {
        // Close all other expanded details first
        document.querySelectorAll('.chapter-details.expanded').forEach(detail => {
            detail.classList.remove('expanded');
            const btn = detail.parentElement.querySelector('.expand-btn');
            btn.textContent = currentLanguage === 'english' ? 'Learn More ▼' : currentLanguage === 'hindi' ? 'और जानें ▼' : 'अधिकं जानीहि ▼';
        });

        details.classList.add('expanded');
        button.textContent = currentLanguage === 'english' ? 'Show Less ▲' : currentLanguage === 'hindi' ? 'कम दिखाएं ▲' : 'न्यूनं दर्शयतु ▲';

        // Smooth scroll to the card
        cardElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Add hover effects
document.addEventListener('DOMContentLoaded', function () {
    renderChapters();

    // Add keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.chapter-details.expanded').forEach(detail => {
                detail.classList.remove('expanded');
                const btn = detail.parentElement.querySelector('.expand-btn');
                btn.textContent = currentLanguage === 'english' ? 'Learn More ▼' : currentLanguage === 'hindi' ? 'और जानें ▼' : 'अधिकं जानीहि ▼';
            });
        }
    });
});


(function () { function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'96e0ab8e33ee3ebe',t:'MTc1NTAwOTAyMi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } } if (document.body) { var a = document.createElement('iframe'); a.height = 1; a.width = 1; a.style.position = 'absolute'; a.style.top = 0; a.style.left = 0; a.style.border = 'none'; a.style.visibility = 'hidden'; document.body.appendChild(a); if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else { var e = document.onreadystatechange || function () { }; document.onreadystatechange = function (b) { e(b); 'loading' !== document.readyState && (document.onreadystatechange = e, c()) } } } })();
