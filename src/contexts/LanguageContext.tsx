'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.awards': 'Awards',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'zac',
    'hero.name': 'Abdul Zacky',
    'hero.subtitle': 'AI Engineer & Developer building intelligent digital solutions',
    'hero.description': 'Specializing in machine learning, neural networks, and modern web technologies to create AI-powered applications that solve real-world problems',
    'hero.viewWork': 'View My Work',
    'hero.getInTouch': 'Get In Touch',

    // About Section
    'about.title': 'About Me',
    'about.journeyTitle': 'My Journey',
    'about.journeyP1': 'Hi, I\'m Zac, an AI engineer and developer passionate about building intelligent systems that solve real-world problems. I specialize in deep learning, neural networks, and creating AI-powered applications with clinical-grade precision and reliability.',
    'about.journeyP2': 'With expertise in PyTorch, Python, and modern web technologies, I bridge the gap between cutting-edge AI research and practical engineering solutions, delivering intelligent systems that truly make an impact in healthcare and beyond.',
    'about.skillsTitle': 'Skills & Technologies',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.quikyu.title': 'Quikyu - AI-Powered Smart Queue System',
    'projects.quikyu.desc': '1st Winner of Hacksphere Compsphere 2025. AI-powered smart queue system for KAI Access with AI demand prediction, virtual waiting room, dual trust scoring for bot prevention, and smart route recommendations.',
    'projects.sivana.title': 'SIVANA - AI-Powered ASN Recruitment',
    'projects.sivana.desc': 'Winner of ASN Digital AI Hackathon 2025. AI system revolutionizing Indonesia\'s civil servant recruitment with Computer Vision, NLP, and Generative AI for automated document verification, cheatproof face verification, and intelligent feedback generation.',
    'projects.ecg.title': 'Clinical ECG Classification',
    'projects.ecg.desc': 'Multi-branch deep learning system for automated ECG interpretation detecting 71 cardiac conditions with clinical-grade visualization.',
    'projects.dataclair.title': 'DataClair - Automated Machine Learning Platform',
    'projects.dataclair.desc': 'Full-stack web application generating ML predictions from CSV data without coding requirements. Implemented automated preprocessing, feature engineering, and intelligent model selection with real-time predictions.',
    'projects.petatas.title': 'Petatas - Financial Literacy AI Platform',
    'projects.petatas.desc': '1st Winner Digital Innovation Challenge Bank Indonesia. Generative AI-based solution to bridge financial literacy gap in Papua, gamifying QRIS learning to increase usage outside Sorong City.',
    'projects.sinavika.title': 'Sinavika - BPJS Kesehatan Enhancement',
    'projects.sinavika.desc': 'Enhanced BPJS Kesehatan system using AI e-klaim analysis with INA-CBG integration, IGD analysis, and personal healthcare AI with end-to-end integration connecting hospital, patient, and BPJS systems.',
    'projects.neural.title': 'Neural Style Transfer',
    'projects.neural.desc': 'Open-source AI project for artistic style transfer using neural networks.',
    'projects.viewProject': 'View Project',
    'projects.viewLive': 'View Live',

    // ECG Modal
    'modal.ecg.title': 'Clinical ECG Classification',
    'modal.ecg.subtitle': 'Choose what you\'d like to explore:',
    'modal.ecg.model': 'Model',
    'modal.ecg.modelDesc': 'View the trained model on Hugging Face',
    'modal.ecg.dataset': 'Dataset',
    'modal.ecg.datasetDesc': 'Explore the PTB-XL processed dataset',
    'modal.ecg.github': 'GitHub',
    'modal.ecg.githubDesc': 'View source code and documentation',
    'modal.ecg.close': 'Close',

    // Experience Section
    'experience.title': 'Experience',
    'experience.telkom.title': 'IT Developer & Data Analyst Intern',
    'experience.telkom.company': 'Telkom Indonesia',
    'experience.telkom.desc': 'Full-time internship developing IT solutions and performing data analysis for Indonesia\'s leading telecommunications company. Working on-site in Jakarta to deliver data-driven insights and technical implementations.',
    'experience.compfest1.title': 'Scientific Committee of Data Analytics and Dash',
    'experience.compfest1.company': 'COMPFEST',
    'experience.compfest1.desc': 'Remote position contributing to the scientific committee focused on data analytics and dashboard development for one of Indonesia\'s largest student-run IT events.',
    'experience.compfest2.title': 'Staff of Business Development',
    'experience.compfest2.company': 'COMPFEST',
    'experience.compfest2.desc': 'Part-time on-site role driving business development initiatives and partnerships for COMPFEST, Indonesia\'s premier technology festival organized by students.',
    'experience.ta1.title': 'Teaching Assistant of Databases',
    'experience.ta1.company': 'Faculty of Computer Science, Universitas Indonesia',
    'experience.ta1.desc': 'Teaching Assistant for Databases course, helping students master SQL and database concepts at the Faculty of Computer Science, Universitas Indonesia.',
    'experience.ta2.title': 'Teaching Assistant of Linear Algebra',
    'experience.ta2.company': 'Faculty of Computer Science, Universitas Indonesia',
    'experience.ta2.desc': 'Teaching Assistant for Linear Algebra course, guiding students through fundamental mathematical concepts essential for computer science.',
    'experience.ta3.title': 'Teaching Assistant of Calculus',
    'experience.ta3.company': 'Faculty of Computer Science, Universitas Indonesia',
    'experience.ta3.desc': 'Teaching Assistant for Calculus course, helping students understand calculus fundamentals and their applications in computer science.',
    'experience.prk.title': 'Staff of Festival',
    'experience.prk.company': 'Pesta Rakyat Komputer',
    'experience.prk.desc': 'Part-time on-site staff member for Pesta Rakyat Komputer festival in Indonesia, contributing to event organization and execution.',

    // Awards Section
    'awards.title': 'Honors & Awards',
    'awards.quikyu.title': '1st Winner - Hacksphere, President University Compsphere 2025',
    'awards.quikyu.issuer': 'KAI & President University',
    'awards.quikyu.issuedBy': 'Issued by',
    'awards.quikyu.association': 'Associated with',
    'awards.quikyu.associationName': 'University of Indonesia',
    'awards.quikyu.desc': 'Won 1st place in Hacksphere Compsphere 2025 with Quikyu, an AI-powered smart queue system for KAI Access ticketing. Features AI demand prediction with XGBoost & GradientBoost, virtual waiting room, dual trust scoring (pre-access + behavioral analysis), and smart recommendation engine. Projected impact: 99% server uptime, 94% bot prevention, 78% user satisfaction, potential Rp 1.8T additional revenue, and 30% server load reduction during peak seasons.',
    'awards.sivana.title': '1st Winner - ASN Digital AI Hackathon 2025',
    'awards.sivana.issuer': 'Badan Kepegawaian Negara (BKN)',
    'awards.sivana.issuedBy': 'Issued by',
    'awards.sivana.association': 'Associated with',
    'awards.sivana.associationName': 'University of Indonesia',
    'awards.sivana.desc': 'Won 1st place (Rp 13,000,000) in ASN Digital AI Hackathon 2025 with SIVANA, an AI-powered system revolutionizing Indonesia\'s civil servant recruitment process. Built with Computer Vision and Generative AI to automate document verification (OCR + NLP), implement cheatproof face verification with liveness detection, and auto-generate TMS feedback. Projected impact: 99% accuracy (from 80%), <1 minute verification (from 2-3 weeks), 90% reduction in impostor cases, and Rp 192.5B annual savings.',
    'awards.nexsolve.title': '2nd Winner - NexSolve Research Paper Competition (TECHTONIC UI 2025)',
    'awards.nexsolve.issuer': 'IEEE SB UI (IEEE Student Branch Universitas Indonesia)',
    'awards.nexsolve.issuedBy': 'Issued by',
    'awards.nexsolve.association': 'Associated with',
    'awards.nexsolve.associationName': 'University of Indonesia',
    'awards.nexsolve.desc': 'Achieved 2nd Winner in NexSolve, an international research paper competition held as part of the TECHTONIC UI 2025 event. Our paper, "AI-Powered Passenger Distribution: A Framework for Optimizing Crowd Flow on Metro Platforms," introduced an AI-based framework (AIPDS) to optimize passenger distribution on metro platforms. The system utilizes real-time sensing and dynamic guidance to mitigate overcrowding, reduce train dwell times, and improve passenger safety and comfort.',
    'awards.papua.title': '1st Winner - Digital Innovation Challenge Bank Indonesia Papua Barat',
    'awards.papua.issuer': 'Bank Indonesia Papua Barat',
    'awards.papua.issuedBy': 'Issued by',
    'awards.papua.association': 'Associated with',
    'awards.papua.associationName': 'University of Indonesia',
    'awards.papua.desc': 'Won 1st place in Digital Innovation Challenge with Petatas, an innovative Generative AI-based solution to bridge the financial literacy gap in Papua. Addressed centralization of QRIS transactions by gamifying the learning process and designing an educational ecosystem to increase QRIS usage outside of Sorong City.',
    'awards.issuedBy': 'Issued by',
    'awards.showMore': 'Show more...',
    'awards.showLess': 'Show less',

    // Contact Section
    'contact.title': 'Let\'s Connect',
    'contact.description': 'Interested in collaborating or have a project in mind? I\'d love to hear from you! Let\'s create something amazing together.',
    'contact.email': 'Email Me',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.designed': 'Designed & Built by Abdul Zacky',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.awards': 'Récompenses',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'zac',
    'hero.name': 'Abdul Zacky',
    'hero.subtitle': 'Ingénieur IA & Développeur créant des solutions numériques intelligentes',
    'hero.description': 'Spécialisé en apprentissage automatique, réseaux de neurones et technologies web modernes pour créer des applications alimentées par l\'IA qui résolvent des problèmes du monde réel',
    'hero.viewWork': 'Voir mon travail',
    'hero.getInTouch': 'Contactez-moi',

    // About Section
    'about.title': 'À propos de moi',
    'about.journeyTitle': 'Mon parcours',
    'about.journeyP1': 'Bonjour, je suis Zac, un ingénieur IA et développeur passionné par la création de systèmes intelligents qui résolvent des problèmes concrets. Je me spécialise dans l\'apprentissage profond, les réseaux de neurones et la création d\'applications IA de précision clinique et fiables.',
    'about.journeyP2': 'Avec une expertise en PyTorch, Python et technologies web modernes, je fais le pont entre la recherche IA de pointe et les solutions d\'ingénierie pratiques, en livrant des systèmes intelligents qui ont un réel impact dans le domaine de la santé et au-delà.',
    'about.skillsTitle': 'Compétences & Technologies',

    // Projects Section
    'projects.title': 'Projets en vedette',
    'projects.quikyu.title': 'Quikyu - Système de File d\'Attente Intelligente alimenté par l\'IA',
    'projects.quikyu.desc': '1er Gagnant de Hacksphere Compsphere 2025. Système de file d\'attente intelligent alimenté par l\'IA pour KAI Access avec prédiction de demande par IA, salle d\'attente virtuelle, notation de confiance double pour la prévention des bots, et recommandations d\'itinéraires intelligentes.',
    'projects.sivana.title': 'SIVANA - Recrutement ASN alimenté par l\'IA',
    'projects.sivana.desc': 'Gagnant du ASN Digital AI Hackathon 2025. Système d\'IA révolutionnant le recrutement des fonctionnaires publics en Indonésie avec Computer Vision, NLP et Generative AI pour la vérification automatisée des documents, la vérification faciale anti-triche et la génération intelligente de commentaires.',
    'projects.ecg.title': 'Classification ECG Clinique',
    'projects.ecg.desc': 'Système d\'apprentissage profond multi-branches pour l\'interprétation automatisée des ECG détectant 71 conditions cardiaques avec visualisation de qualité clinique.',
    'projects.dataclair.title': 'DataClair - Plateforme d\'Apprentissage Automatique Automatisée',
    'projects.dataclair.desc': 'Application web full-stack générant des prédictions ML à partir de données CSV sans exigences de codage. Prétraitement automatisé, ingénierie des fonctionnalités et sélection intelligente de modèles avec prédictions en temps réel.',
    'projects.petatas.title': 'Petatas - Plateforme d\'IA pour la Littératie Financière',
    'projects.petatas.desc': '1er Prix Digital Innovation Challenge Bank Indonesia. Solution basée sur l\'IA générative pour combler l\'écart de littératie financière en Papouasie, gamifiant l\'apprentissage QRIS pour augmenter l\'utilisation en dehors de Sorong City.',
    'projects.sinavika.title': 'Sinavika - Amélioration de BPJS Kesehatan',
    'projects.sinavika.desc': 'Système BPJS Kesehatan amélioré utilisant l\'analyse e-klaim par IA avec intégration INA-CBG, analyse IGD et IA de santé personnelle avec intégration de bout en bout connectant les systèmes hospitaliers, patients et BPJS.',
    'projects.neural.title': 'Transfert de Style Neural',
    'projects.neural.desc': 'Projet IA open-source pour le transfert de style artistique utilisant des réseaux de neurones.',
    'projects.viewProject': 'Voir le projet',
    'projects.viewLive': 'Voir en direct',

    // ECG Modal
    'modal.ecg.title': 'Classification ECG Clinique',
    'modal.ecg.subtitle': 'Choisissez ce que vous souhaitez explorer :',
    'modal.ecg.model': 'Modèle',
    'modal.ecg.modelDesc': 'Voir le modèle entraîné sur Hugging Face',
    'modal.ecg.dataset': 'Dataset',
    'modal.ecg.datasetDesc': 'Explorer le dataset PTB-XL traité',
    'modal.ecg.github': 'GitHub',
    'modal.ecg.githubDesc': 'Voir le code source et la documentation',
    'modal.ecg.close': 'Fermer',

    // Experience Section
    'experience.title': 'Expérience',
    'experience.telkom.title': 'Stagiaire Développeur IT & Analyste de Données',
    'experience.telkom.company': 'Telkom Indonesia',
    'experience.telkom.desc': 'Stage à temps plein développant des solutions IT et effectuant des analyses de données pour la principale entreprise de télécommunications d\'Indonésie. Travail sur site à Jakarta pour fournir des informations basées sur les données et des implémentations techniques.',
    'experience.compfest1.title': 'Comité Scientifique de l\'Analyse de Données et Tableaux de Bord',
    'experience.compfest1.company': 'COMPFEST',
    'experience.compfest1.desc': 'Poste à distance contribuant au comité scientifique axé sur l\'analyse de données et le développement de tableaux de bord pour l\'un des plus grands événements IT étudiants d\'Indonésie.',
    'experience.compfest2.title': 'Personnel de Développement Commercial',
    'experience.compfest2.company': 'COMPFEST',
    'experience.compfest2.desc': 'Rôle à temps partiel sur site dirigeant les initiatives de développement commercial et les partenariats pour COMPFEST, le principal festival technologique d\'Indonésie organisé par des étudiants.',
    'experience.ta1.title': 'Assistant d\'Enseignement en Bases de Données',
    'experience.ta1.company': 'Faculté d\'Informatique, Universitas Indonesia',
    'experience.ta1.desc': 'Assistant d\'enseignement pour le cours de bases de données, aidant les étudiants à maîtriser SQL et les concepts de bases de données à la Faculté d\'Informatique, Universitas Indonesia.',
    'experience.ta2.title': 'Assistant d\'Enseignement en Algèbre Linéaire',
    'experience.ta2.company': 'Faculté d\'Informatique, Universitas Indonesia',
    'experience.ta2.desc': 'Assistant d\'enseignement pour le cours d\'algèbre linéaire, guidant les étudiants à travers les concepts mathématiques fondamentaux essentiels pour l\'informatique.',
    'experience.ta3.title': 'Assistant d\'Enseignement en Calcul',
    'experience.ta3.company': 'Faculté d\'Informatique, Universitas Indonesia',
    'experience.ta3.desc': 'Assistant d\'enseignement pour le cours de calcul, aidant les étudiants à comprendre les fondamentaux du calcul et leurs applications en informatique.',
    'experience.prk.title': 'Personnel du Festival',
    'experience.prk.company': 'Pesta Rakyat Komputer',
    'experience.prk.desc': 'Membre du personnel à temps partiel sur site pour le festival Pesta Rakyat Komputer en Indonésie, contribuant à l\'organisation et à l\'exécution de l\'événement.',

    // Awards Section
    'awards.title': 'Honneurs & Récompenses',
    'awards.quikyu.title': '1er Prix - Hacksphere, President University Compsphere 2025',
    'awards.quikyu.issuer': 'KAI & President University',
    'awards.quikyu.issuedBy': 'Délivré par',
    'awards.quikyu.association': 'Associé à',
    'awards.quikyu.associationName': 'Universitas Indonesia',
    'awards.quikyu.desc': 'Remporté la 1ère place à Hacksphere Compsphere 2025 avec Quikyu, un système de file d\'attente intelligent alimenté par l\'IA pour la billetterie KAI Access. Comprend la prédiction de demande par IA avec XGBoost & GradientBoost, une salle d\'attente virtuelle, une notation de confiance double (pré-accès + analyse comportementale), et un moteur de recommandation intelligent. Impact projeté: 99% de disponibilité du serveur, 94% de prévention des bots, 78% de satisfaction des utilisateurs, revenu additionnel potentiel de Rp 1,8T, et réduction de 30% de la charge du serveur pendant les périodes de pointe.',
    'awards.sivana.title': '1er Prix - ASN Digital AI Hackathon 2025',
    'awards.sivana.issuer': 'Badan Kepegawaian Negara (BKN)',
    'awards.sivana.issuedBy': 'Délivré par',
    'awards.sivana.association': 'Associé à',
    'awards.sivana.associationName': 'Universitas Indonesia',
    'awards.sivana.desc': 'Remporté la 1ère place (Rp 13.000.000) au ASN Digital AI Hackathon 2025 avec SIVANA, un système alimenté par l\'IA révolutionnant le processus de recrutement des fonctionnaires publics en Indonésie. Construit avec Computer Vision et Generative AI pour automatiser la vérification des documents (OCR + NLP), implémenter une vérification faciale anti-triche avec détection de vivacité, et générer automatiquement des commentaires TMS. Impact projeté: précision de 99% (contre 80%), vérification <1 minute (contre 2-3 semaines), réduction de 90% des cas d\'imposteurs, et économies annuelles de Rp 192,5B.',
    'awards.hacksphere.issuer': 'KAI & President University',
    'awards.hacksphere.issuedBy': 'Délivré par',
    'awards.hacksphere.association': 'Associé à',
    'awards.hacksphere.associationName': 'Universitas Indonesia',
    'awards.hacksphere.desc': 'Création d\'un système de billetterie de salle d\'attente basé sur l\'IA/ML pour Access by KAI utilisant la détection de bots et l\'analyse comportementale.',
    'awards.nexsolve.title': '2e Prix - Concours de Papers de Recherche NexSolve (TECHTONIC UI 2025)',
    'awards.nexsolve.issuer': 'IEEE SB UI (IEEE Student Branch Universitas Indonesia)',
    'awards.nexsolve.issuedBy': 'Délivré par',
    'awards.nexsolve.association': 'Associé à',
    'awards.nexsolve.associationName': 'Universitas Indonesia',
    'awards.nexsolve.desc': '2e Prix remporté dans NexSolve, un concours international de papers de recherche organisé dans le cadre de l\'événement TECHTONIC UI 2025. Notre article, "AI-Powered Passenger Distribution: A Framework for Optimizing Crowd Flow on Metro Platforms," a introduit un cadre basé sur l\'IA (AIPDS) pour optimiser la distribution des passagers sur les plateformes de métro. Le système utilise la détection en temps réel et des conseils dynamiques pour atténuer la surpopulation, réduire les temps d\'arrêt des trains et améliorer la sécurité et le confort des passagers.',
    'awards.papua.title': '1er Prix - Digital Innovation Challenge Bank Indonesia Papua Barat',
    'awards.papua.issuer': 'Bank Indonesia Papua Barat',
    'awards.papua.issuedBy': 'Délivré par',
    'awards.papua.association': 'Associé à',
    'awards.papua.associationName': 'Universitas Indonesia',
    'awards.papua.desc': 'Remporté la 1ère place au Digital Innovation Challenge avec Petatas, une solution innovante basée sur l\'IA générative pour combler l\'écart de littératie financière en Papouasie. A abordé la centralisation des transactions QRIS en gamifiant le processus d\'apprentissage et en concevant un écosystème éducatif pour augmenter l\'utilisation de QRIS en dehors de Sorong City.',
    'awards.issuedBy': 'Délivré par',
    'awards.showMore': 'Voir plus...',
    'awards.showLess': 'Voir moins',

    // Contact Section
    'contact.title': 'Restons en contact',
    'contact.description': 'Intéressé par une collaboration ou avez-vous un projet en tête ? J\'aimerais avoir de vos nouvelles ! Créons quelque chose d\'incroyable ensemble.',
    'contact.email': 'M\'envoyer un e-mail',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.designed': 'Conçu & Créé par Abdul Zacky',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.awards': 'Premios',
    'nav.contact': 'Contacto',

    // Hero Section
    'hero.title': 'zac',
    'hero.name': 'Abdul Zacky',
    'hero.subtitle': 'Ingeniero de IA & Desarrollador creando soluciones digitales inteligentes',
    'hero.description': 'Especializado en aprendizaje automático, redes neuronales y tecnologías web modernas para crear aplicaciones impulsadas por IA que resuelven problemas del mundo real',
    'hero.viewWork': 'Ver Mi Trabajo',
    'hero.getInTouch': 'Contactar',

    // About Section
    'about.title': 'Acerca de Mí',
    'about.journeyTitle': 'Mi Trayectoria',
    'about.journeyP1': 'Hola, soy Zac, un ingeniero de IA y desarrollador apasionado por crear sistemas inteligentes que resuelven problemas del mundo real. Me especializo en aprendizaje profundo, redes neuronales y creación de aplicaciones de IA con precisión y fiabilidad de grado clínico.',
    'about.journeyP2': 'Con experiencia en PyTorch, Python y tecnologías web modernas, conecto la investigación de IA de vanguardia con soluciones de ingeniería prácticas, entregando sistemas inteligentes que realmente hacen un impacto en la salud y más allá.',
    'about.skillsTitle': 'Habilidades & Tecnologías',

    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.quikyu.title': 'Quikyu - Sistema de Cola Inteligente impulsado por IA',
    'projects.quikyu.desc': '1er Ganador de Hacksphere Compsphere 2025. Sistema de cola inteligente impulsado por IA para KAI Access con predicción de demanda por IA, sala de espera virtual, puntuación de confianza dual para prevención de bots, y recomendaciones inteligentes de rutas.',
    'projects.sivana.title': 'SIVANA - Reclutamiento ASN impulsado por IA',
    'projects.sivana.desc': 'Ganador del ASN Digital AI Hackathon 2025. Sistema de IA revolucionando el reclutamiento de funcionarios públicos de Indonesia con Computer Vision, NLP y Generative AI para verificación automatizada de documentos, verificación facial anti-trampas y generación inteligente de comentarios.',
    'projects.ecg.title': 'Clasificación ECG Clínica',
    'projects.ecg.desc': 'Sistema de aprendizaje profundo multi-rama para interpretación automatizada de ECG que detecta 71 condiciones cardíacas con visualización de grado clínico.',
    'projects.dataclair.title': 'DataClair - Plataforma de Aprendizaje Automático Automatizada',
    'projects.dataclair.desc': 'Aplicación web full-stack que genera predicciones ML desde datos CSV sin requisitos de codificación. Preprocesamiento automatizado, ingeniería de características y selección inteligente de modelos con predicciones en tiempo real.',
    'projects.petatas.title': 'Petatas - Plataforma de IA para Alfabetización Financiera',
    'projects.petatas.desc': '1er Ganador Digital Innovation Challenge Bank Indonesia. Solución basada en IA generativa para cerrar la brecha de alfabetización financiera en Papua, gamificando el aprendizaje de QRIS para aumentar el uso fuera de Sorong City.',
    'projects.sinavika.title': 'Sinavika - Mejora de BPJS Kesehatan',
    'projects.sinavika.desc': 'Sistema BPJS Kesehatan mejorado utilizando análisis e-klaim por IA con integración INA-CBG, análisis IGD e IA de atención médica personal con integración de extremo a extremo conectando sistemas hospitalarios, de pacientes y BPJS.',
    'projects.neural.title': 'Transferencia de Estilo Neural',
    'projects.neural.desc': 'Proyecto de IA de código abierto para transferencia de estilo artístico usando redes neuronales.',
    'projects.viewProject': 'Ver Proyecto',
    'projects.viewLive': 'Ver En Vivo',

    // ECG Modal
    'modal.ecg.title': 'Clasificación ECG Clínica',
    'modal.ecg.subtitle': 'Elige lo que te gustaría explorar:',
    'modal.ecg.model': 'Modelo',
    'modal.ecg.modelDesc': 'Ver el modelo entrenado en Hugging Face',
    'modal.ecg.dataset': 'Dataset',
    'modal.ecg.datasetDesc': 'Explorar el dataset PTB-XL procesado',
    'modal.ecg.github': 'GitHub',
    'modal.ecg.githubDesc': 'Ver código fuente y documentación',
    'modal.ecg.close': 'Cerrar',

    // Experience Section
    'experience.title': 'Experiencia',
    'experience.telkom.title': 'Desarrollador IT & Analista de Datos Interno',
    'experience.telkom.company': 'Telkom Indonesia',
    'experience.telkom.desc': 'Pasantía a tiempo completo desarrollando soluciones de IT y realizando análisis de datos para la principal empresa de telecomunicaciones de Indonesia. Trabajando en sitio en Yakarta para entregar análisis basados en datos e implementaciones técnicas.',
    'experience.compfest1.title': 'Comité Científico de Análisis de Datos y Paneles',
    'experience.compfest1.company': 'COMPFEST',
    'experience.compfest1.desc': 'Posición remota contribuyendo al comité científico enfocado en análisis de datos y desarrollo de paneles para uno de los eventos de IT estudiantiles más grandes de Indonesia.',
    'experience.compfest2.title': 'Personal de Desarrollo de Negocios',
    'experience.compfest2.company': 'COMPFEST',
    'experience.compfest2.desc': 'Rol a tiempo parcial en sitio impulsando iniciativas de desarrollo de negocios y asociaciones para COMPFEST, el festival tecnológico premier de Indonesia organizado por estudiantes.',
    'experience.ta1.title': 'Asistente de Enseñanza de Bases de Datos',
    'experience.ta1.company': 'Facultad de Ciencias de la Computación, Universitas Indonesia',
    'experience.ta1.desc': 'Asistente de enseñanza para el curso de Bases de Datos, ayudando a los estudiantes a dominar SQL y conceptos de bases de datos en la Facultad de Ciencias de la Computación, Universitas Indonesia.',
    'experience.ta2.title': 'Asistente de Enseñanza de Álgebra Lineal',
    'experience.ta2.company': 'Facultad de Ciencias de la Computación, Universitas Indonesia',
    'experience.ta2.desc': 'Asistente de enseñanza para el curso de Álgebra Lineal, guiando a los estudiantes a través de conceptos matemáticos fundamentales esenciales para la informática.',
    'experience.ta3.title': 'Asistente de Enseñanza de Cálculo',
    'experience.ta3.company': 'Facultad de Ciencias de la Computación, Universitas Indonesia',
    'experience.ta3.desc': 'Asistente de enseñanza para el curso de Cálculo, ayudando a los estudiantes a comprender los fundamentos del cálculo y sus aplicaciones en la informática.',
    'experience.prk.title': 'Personal del Festival',
    'experience.prk.company': 'Pesta Rakyat Komputer',
    'experience.prk.desc': 'Miembro del personal a tiempo parcial en sitio para el festival Pesta Rakyat Komputer en Indonesia, contribuyendo a la organización y ejecución del evento.',

    // Awards Section
    'awards.title': 'Honores & Premios',
    'awards.quikyu.title': '1er Ganador - Hacksphere, President University Compsphere 2025',
    'awards.quikyu.issuer': 'KAI & President University',
    'awards.quikyu.issuedBy': 'Emitido por',
    'awards.quikyu.association': 'Asociado con',
    'awards.quikyu.associationName': 'Universitas Indonesia',
    'awards.quikyu.desc': 'Ganó el 1er lugar en Hacksphere Compsphere 2025 con Quikyu, un sistema de cola inteligente impulsado por IA para ticketing KAI Access. Incluye predicción de demanda por IA con XGBoost & GradientBoost, sala de espera virtual, puntuación de confianza dual (pre-acceso + análisis comportamental), y motor de recomendación inteligente. Impacto proyectado: 99% de tiempo de actividad del servidor, 94% de prevención de bots, 78% de satisfacción del usuario, ingresos adicionales potenciales de Rp 1.8T, y reducción del 30% en la carga del servidor durante temporadas pico.',
    'awards.sivana.title': '1er Ganador - ASN Digital AI Hackathon 2025',
    'awards.sivana.issuer': 'Badan Kepegawaian Negara (BKN)',
    'awards.sivana.issuedBy': 'Emitido por',
    'awards.sivana.association': 'Asociado con',
    'awards.sivana.associationName': 'Universitas Indonesia',
    'awards.sivana.desc': 'Ganó el 1er lugar (Rp 13.000.000) en ASN Digital AI Hackathon 2025 con SIVANA, un sistema impulsado por IA que revoluciona el proceso de reclutamiento de funcionarios públicos de Indonesia. Construido con Computer Vision y Generative AI para automatizar la verificación de documentos (OCR + NLP), implementar verificación facial anti-trampas con detección de vida, y generar automáticamente feedback TMS. Impacto proyectado: 99% de precisión (del 80%), verificación <1 minuto (de 2-3 semanas), 90% de reducción en casos de impostores, y ahorro anual de Rp 192.5B.',
    'awards.hacksphere.issuer': 'KAI & President University',
    'awards.hacksphere.issuedBy': 'Emitido por',
    'awards.hacksphere.association': 'Asociado con',
    'awards.hacksphere.associationName': 'Universitas Indonesia',
    'awards.hacksphere.desc': 'Creación de un sistema de ticketing de sala de espera basado en IA/ML para Access by KAI utilizando detección de bots y análisis de comportamiento.',
    'awards.nexsolve.title': '2do Ganador - Competencia de Papers de Investigación NexSolve (TECHTONIC UI 2025)',
    'awards.nexsolve.issuer': 'IEEE SB UI (IEEE Student Branch Universitas Indonesia)',
    'awards.nexsolve.issuedBy': 'Emitido por',
    'awards.nexsolve.association': 'Asociado con',
    'awards.nexsolve.associationName': 'Universitas Indonesia',
    'awards.nexsolve.desc': '2do Ganador en NexSolve, una competencia internacional de papers de investigación realizada como parte del evento TECHTONIC UI 2025. Nuestro artículo, "AI-Powered Passenger Distribution: A Framework for Optimizing Crowd Flow on Metro Platforms," introdujo un marco basado en IA (AIPDS) para optimizar la distribución de pasajeros en plataformas de metro. El sistema utiliza detección en tiempo real y orientación dinámica para mitigar el hacinamiento, reducir los tiempos de espera de los trenes y mejorar la seguridad y comodidad de los pasajeros.',
    'awards.papua.title': '1er Ganador - Digital Innovation Challenge Bank Indonesia Papua Barat',
    'awards.papua.issuer': 'Bank Indonesia Papua Barat',
    'awards.papua.issuedBy': 'Emitido por',
    'awards.papua.association': 'Asociado con',
    'awards.papua.associationName': 'Universitas Indonesia',
    'awards.papua.desc': 'Ganó el 1er lugar en Digital Innovation Challenge con Petatas, una solución innovadora basada en IA generativa para cerrar la brecha de alfabetización financiera en Papua. Abordó la centralización de transacciones QRIS mediante la gamificación del proceso de aprendizaje y diseñando un ecosistema educativo para aumentar el uso de QRIS fuera de Sorong City.',
    'awards.issuedBy': 'Emitido por',
    'awards.showMore': 'Ver más...',
    'awards.showLess': 'Ver menos',

    // Contact Section
    'contact.title': 'Conectémonos',
    'contact.description': '¿Interesado en colaborar o tienes un proyecto en mente? ¡Me encantaría saber de ti! Creemos algo increíble juntos.',
    'contact.email': 'Envíame un Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.designed': 'Diseñado & Construido por Abdul Zacky',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
