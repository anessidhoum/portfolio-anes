// Contenu des études de cas (généré depuis la refonte, en français).
// Pour modifier un texte, éditez-le directement ici.

import aventyCalendrierBriefSansErp from "@/assets/aventy-calendrier-brief-sans-erp.webp";
import aventyCalendrierCarrousel from "@/assets/aventy-calendrier-carrousel.webp";
import aventyCalendrierCouverture from "@/assets/aventy-calendrier-couverture.webp";
import aventyCalendrierOrientations from "@/assets/aventy-calendrier-orientations.webp";
import aventyPartagez from "@/assets/aventy-partagez.webp";
import aventyProchaineFonction from "@/assets/aventy-prochaine-fonction.webp";
import aventySansErp from "@/assets/aventy-sans-erp.webp";
import aventyTroisAvantages from "@/assets/aventy-trois-avantages.webp";
import emailAudiences from "@/assets/email-audiences.webp";
import emailCouverture from "@/assets/email-couverture.webp";
import emailObjectif from "@/assets/email-objectif.webp";
import emailPlanAction from "@/assets/email-plan-action.webp";
import emailSequence from "@/assets/email-sequence.webp";
import emailStrategie from "@/assets/email-strategie.webp";
import posterCapEmergencyMarque from "@/assets/poster-cap-emergency-marque.webp";
import posterCapEmergencyVisite from "@/assets/poster-cap-emergency-visite.webp";
import posterPlateau from "@/assets/poster-plateau.webp";
import posterSetramStand from "@/assets/poster-setram-stand.webp";
import posterSetramTramway from "@/assets/poster-setram-tramway.webp";
import posterTedxPromo from "@/assets/poster-tedx-promo.webp";
import posterWhiteIndustryProduction from "@/assets/poster-white-industry-production.webp";
import work1 from "@/assets/work-1.jpg";
import work10 from "@/assets/work-10.jpg";
import work11 from "@/assets/work-11.mp4";
import work12 from "@/assets/work-12.mp4";
import work13 from "@/assets/work-13.jpg";
import work14 from "@/assets/work-14.jpg";
import work15 from "@/assets/work-15.mp4";
import work16 from "@/assets/work-16.mp4";
import work17 from "@/assets/work-17.mp4";
import work18 from "@/assets/work-18.mp4";
import work19 from "@/assets/work-19.jpg";
import work2 from "@/assets/work-2.jpg";
import work20 from "@/assets/work-20.jpg";
import work21 from "@/assets/work-21.jpg";
import work22 from "@/assets/work-22.pdf";
import work3 from "@/assets/work-3.mp4";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work7 from "@/assets/work-7.jpg";
import work8 from "@/assets/work-8.jpg";
import work9 from "@/assets/work-9.jpg";
import yalidineApplication from "@/assets/yalidine-application.webp";

export type Img = { src: string; alt: string; w: number; h: number; caption?: string };
export type Video = {
  src: string;
  poster: string;
  title: string;
  duration: string;
  orientation: "landscape" | "portrait";
};
export type Category = "strategy" | "social" | "crm" | "events" | "pitch";

export type Project = {
  slug: string;
  client: string;
  year: string;
  title: string;
  summary: string;
  categories: Category[];
  cover: Img;
  coverTone: "light" | "dark";
  role: string;
  tools: string[];
  facts: { value: string; label: string }[];
  context: string[];
  objectives: string[];
  responsibilities: string[];
  steps?: { title: string; items: { label: string; title: string; body: string }[] };
  execution: {
    title: string;
    body: string;
    quote?: { text: string; lang: "ar" | "fr" | "en"; gloss?: string };
    images?: Img[];
    videos?: Video[];
  }[];
  results: string;
  document?: { href: string; label: string };
};

export const categories: Record<Category, string> = {
  strategy: "Stratégie",
  social: "Social media & design",
  crm: "CRM & email",
  events: "Événementiel",
  pitch: "Proposition freelance",
};

export const projects: Project[] = [
  {
    slug: "aventy-lancement",
    client: "AVENTY ERP — Zimou Group",
    year: "2026",
    title: "Faire adopter un ERP aux e-commerçants algériens",
    summary: "Stratégie de contenu, calendrier éditorial et visuels pour faire connaître AVENTY ERP, un outil de gestion lancé deux mois plus tôt, auprès de vendeurs qui n'ont jamais utilisé d'ERP.",
    categories: ["strategy", "social"],
    cover: {
      src: aventySansErp,
      alt: "Visuel AVENTY : une voiture violette montée sur des roues de vélo, titre en arabe algérien « Quand tu gères ton commerce sans ERP »",
      w: 1600,
      h: 2000,
    },
    coverTone: "dark",
    role: "Community Manager — stratégie, calendrier éditorial, copywriting et design",
    tools: ["Canva", "Meta Business Suite"],
    facts: [
      {
        value: "4",
        label: "objectifs, un KPI chacun",
      },
      {
        value: "13",
        label: "angles créatifs à tester",
      },
      {
        value: "17",
        label: "pistes éditoriales briefées",
      },
      {
        value: "4",
        label: "semaines de plan d'action",
      },
    ],
    context: [
      "AVENTY ERP est la plateforme de gestion e-commerce de Zimou Group : commandes, stock, retours, livraisons et finances au même endroit. En octobre 2026, la marque a environ deux mois d'existence, et l'outil est gratuit pour les clients de Zimou Express et de Yalidine.",
      "Le défi : la cible ne connaît pas la marque, et beaucoup de vendeurs ne voient pas encore pourquoi ils auraient besoin d'un ERP. Leurs commandes vivent entre Excel, WhatsApp et un carnet.",
    ],
    objectives: [
      "Notoriété — faire connaître AVENTY ERP comme l'ERP pensé pour les e-commerçants algériens.",
      "Éducation — expliquer à quoi sert un ERP en partant des problèmes réels des vendeurs, puis montrer la solution.",
      "Activation — faire découvrir l'offre gratuite aux clients Yalidine et Zimou Express et les amener à tester.",
      "Image de marque — s'associer à Octobre Rose avec sobriété, sans changer l'identité AVENTY.",
    ],
    responsibilities: [
      "Rédaction de la proposition de stratégie mensuelle : objectifs, personas, messages, canaux, plan sur quatre semaines et indicateurs de suivi.",
      "Conception du calendrier éditorial d'octobre : orientations, pistes d'inspiration et briefs créatifs.",
      "Copywriting en arabe algérien et en français, adapté aux codes de chaque plateforme.",
      "Conception des visuels de la marque.",
    ],
    steps: {
      title: "Le parcours visé",
      items: [
        {
          label: "01",
          title: "Notoriété",
          body: "Le vendeur s'arrête sur une situation qu'il reconnaît et retient le nom.",
        },
        {
          label: "02",
          title: "Éducation",
          body: "Il comprend ce qu'un ERP change : commandes, stock, retours, finances.",
        },
        {
          label: "03",
          title: "Découverte",
          body: "Il découvre l'offre gratuite via Yalidine ou Zimou Express.",
        },
        {
          label: "04",
          title: "Test",
          body: "Il arrive sur la page dédiée et demande à tester.",
        },
        {
          label: "05",
          title: "Usage",
          body: "Il connecte sa boutique et utilise l'outil au quotidien.",
        },
      ],
    },
    execution: [
      {
        title: "Partir du problème, pas du produit",
        body: "Chaque contenu part d'une situation que le vendeur reconnaît — la commande perdue, le stock faux, le retour oublié — avant de montrer AVENTY. Le mois équilibre contenus problème, éducation, produit, preuve et activation, avec Instagram et TikTok pour la portée, Facebook pour les groupes de vendeurs, et des carrousels à sauvegarder.",
        images: [
          {
            src: aventyCalendrierOrientations,
            alt: "Slide « Orientations éditoriales » : awareness et notoriété, engagement, conversion et acquisition",
            w: 1920,
            h: 1358,
          },
        ],
      },
      {
        title: "Un calendrier qui transforme les idées en briefs",
        body: "Le calendrier éditorial d'octobre réunit 17 pistes. Chacune associe une accroche, une référence visuelle, un format — post, carrousel ou vidéo — et un brief créatif, pour une production rapide et cohérente.",
        images: [
          {
            src: aventyCalendrierCouverture,
            alt: "Couverture du calendrier éditorial AVENTY, octobre 2026",
            w: 1920,
            h: 1358,
          },
          {
            src: aventyCalendrierCarrousel,
            alt: "Piste « Pourquoi les grandes entreprises utilisent un ERP ? » avec son brief de carrousel en quatre slides",
            w: 1920,
            h: 1358,
          },
        ],
      },
      {
        title: "D'une référence à un visuel AVENTY",
        body: "La piste « À quoi ressemble un e-commerçant sans ERP » s'appuie sur une référence publicitaire existante : une voiture qui roule sur des roues de vélo. Je l'ai adaptée à l'univers AVENTY — violet de marque, logo, accroche en arabe algérien — pour qu'elle parle directement aux vendeurs locaux.",
        quote: {
          text: "كي تكون تسيير التجارة تاعك بلا ERP",
          lang: "ar",
          gloss: "« Quand tu gères ton commerce sans ERP »",
        },
        images: [
          {
            src: aventyCalendrierBriefSansErp,
            alt: "Piste d'inspiration : référence publicitaire d'une voiture rouge sur roues de vélo et brief créatif",
            w: 1920,
            h: 1358,
            caption: "Le brief",
          },
          {
            src: aventySansErp,
            alt: "Visuel final AVENTY : voiture violette sur roues de vélo, titre en arabe algérien",
            w: 1600,
            h: 2000,
            caption: "Le visuel",
          },
        ],
      },
      {
        title: "Des formats qui invitent à répondre",
        body: "Au-delà de la démonstration, les visuels donnent la parole à la communauté : partager des photos de son activité avec AVENTY ERP, proposer la prochaine fonctionnalité, découvrir trois avantages clés. Pour Octobre Rose, un simple ruban rose rejoint le logo : un geste de solidarité, sans message commercial.",
        quote: {
          text: "الميزة الجاية نقترحوها مع بعض",
          lang: "ar",
          gloss: "« La prochaine fonctionnalité, on la propose ensemble »",
        },
        images: [
          {
            src: aventyTroisAvantages,
            alt: "Visuel « 03 avantages d'AVENTY à connaître » : un homme souriant montre trois doigts sur fond violet",
            w: 1600,
            h: 2000,
          },
          {
            src: aventyPartagez,
            alt: "Visuel invitant les vendeurs à partager leur usage d'AVENTY ERP : ordinateur ouvert sur le tableau de bord",
            w: 1088,
            h: 1920,
          },
          {
            src: aventyProchaineFonction,
            alt: "Visuel « La prochaine fonctionnalité, on la propose ensemble » : quatre personnes autour d'un post Instagram AVENTY",
            w: 1600,
            h: 2000,
          },
        ],
      },
    ],
    results: "Dispositif lancé en octobre 2026. La stratégie est un document interne à Zimou Group : seuls la méthode, les concepts et les visuels sont présentés ici, sans les objectifs chiffrés ni les résultats.",
  },
  {
    slug: "aventy-email",
    client: "AVENTY ERP — Zimou Group",
    year: "2026",
    title: "Transformer des clients existants en utilisateurs de l'ERP",
    summary: "Une campagne email de conversion en arabe algérien pour les clients Yalidine et Zimou Express : un seul message, une seule action, un suivi jusqu'à l'ERP créé.",
    categories: ["crm", "strategy"],
    cover: {
      src: emailCouverture,
      alt: "Couverture « AVENTY ERP — Campagne email de conversion » avec maquette de l'email et de l'interface",
      w: 1920,
      h: 1080,
    },
    coverTone: "dark",
    role: "Conception de la campagne — stratégie, rédaction, maquette de l'email et plan de suivi",
    tools: ["CRM", "UTM", "Email responsive"],
    facts: [
      {
        value: "2",
        label: "versions personnalisées",
      },
      {
        value: "1",
        label: "seul appel à l'action",
      },
      {
        value: "7",
        label: "templates au total",
      },
      {
        value: "3",
        label: "emails max par client",
      },
    ],
    context: [
      "Les clients de Yalidine et de Zimou Express peuvent utiliser AVENTY ERP gratuitement. Ils sont déjà dans le CRM du groupe : l'email permet de leur parler directement, sans passer par la publicité.",
      "Le principe posé dès le départ : le succès se mesure en ERP créés, pas en clics.",
    ],
    objectives: [
      "Conversion — amener les clients éligibles à créer leur ERP AVENTY.",
      "Notoriété — faire découvrir et comprendre AVENTY ERP à une base déjà acquise.",
    ],
    responsibilities: [
      "Définition de l'objectif, des segments et du parcours de conversion.",
      "Rédaction de l'email en arabe algérien — objet, pré-en-tête, corps, CTA — et de ses deux variantes.",
      "Maquette desktop et mobile, direction artistique du visuel principal.",
      "Plan de mesure, de l'email envoyé à l'ERP créé, et séquence d'envoi.",
    ],
    steps: {
      title: "La séquence",
      items: [
        {
          label: "J0",
          title: "Email principal",
          body: "Tous les clients sélectionnés. Test A/B sur l'objet ; le gagnant est celui qui génère le plus de clics.",
        },
        {
          label: "J+3",
          title: "Relance",
          body: "Pour les non-cliqueurs : nouvel objet et vignette de la vidéo démo.",
        },
        {
          label: "J+7",
          title: "Rappel",
          body: "Pour ceux qui ont cliqué sans créer leur ERP, si le suivi technique le permet.",
        },
        {
          label: "Après",
          title: "Bienvenue",
          body: "Pour les clients qui ont créé leur ERP : premiers pas et contact du support.",
        },
      ],
    },
    execution: [
      {
        title: "Une campagne, deux versions",
        body: "Un socle commun — concept, message, visuel, CTA, template — créé une seule fois, puis décliné pour les clients Yalidine et Zimou Express. Seuls changent le nom du partenaire, les instructions d'accès, la destination du lien et le suivi.",
        images: [
          {
            src: emailAudiences,
            alt: "Slide « Une campagne, deux versions personnalisées » : segments Yalidine et Zimou Express autour d'un socle partagé",
            w: 1920,
            h: 1080,
          },
        ],
      },
      {
        title: "La règle des « 1 »",
        body: "Un email court, visuel et centré produit : un e-commerçant lit vite, souvent sur mobile. Un email principal par segment, un créatif partagé, un CTA, une destination adaptée, un suivi complet.",
        quote: {
          text: "أنشئ ERP تاعك مجانًا",
          lang: "ar",
          gloss: "« Crée ton ERP gratuitement » — le seul CTA",
        },
        images: [
          {
            src: emailStrategie,
            alt: "Slide stratégie : court, visuel, centré produit, orienté conversion, et la règle des « 1 »",
            w: 1920,
            h: 1080,
          },
        ],
      },
      {
        title: "Mesurer jusqu'au bout",
        body: "Ouvertures et clics restent des indicateurs intermédiaires. Le KPI de succès est l'ERP créé, attribué à la campagne grâce à des paramètres UTM propres à chaque segment. La séquence est courte et respectueuse : trois emails maximum par client.",
        images: [
          {
            src: emailObjectif,
            alt: "Slide « Le succès se mesure en ERP créés, pas en clics » et parcours de conversion",
            w: 1920,
            h: 1080,
          },
          {
            src: emailSequence,
            alt: "Slide séquence : email principal, relance, rappel, bienvenue",
            w: 1920,
            h: 1080,
          },
          {
            src: emailPlanAction,
            alt: "Slide plan d'action : construire, valider, lancer, optimiser",
            w: 1920,
            h: 1080,
          },
        ],
      },
    ],
    results: "Campagne préparée à partir du 19 octobre 2026. Les règles de ciblage et les résultats restent internes à Zimou Group.",
  },
  {
    slug: "setram",
    client: "SETRAM",
    year: "2025 — 2026",
    title: "Communiquer pour un opérateur de tramway, sur le terrain et en ligne",
    summary: "Quatre mois comme chargé de communication chez SETRAM, l'opérateur des tramways en Algérie : communication interne et externe, événements et création de contenus digitaux.",
    categories: ["events", "social"],
    cover: {
      src: work19,
      alt: "Une rame de tramway SETRAM en station, sous un ciel bleu, des pigeons sur le quai",
      w: 1512,
      h: 2016,
    },
    coverTone: "light",
    role: "Chargé de communication — interne, externe, événementiel et création digitale",
    tools: ["Canva", "CapCut"],
    facts: [
      {
        value: "4",
        label: "mois de mission",
      },
      {
        value: "3",
        label: "fronts : interne, externe, événementiel",
      },
    ],
    context: [
      "SETRAM exploite des lignes de tramway en Algérie : une entreprise de service public au contact quotidien des voyageurs, avec de nombreuses équipes sur le terrain.",
      "De décembre 2025 à mars 2026, j'ai accompagné sa communication sur trois fronts : les équipes en interne, le public en externe, et les événements.",
    ],
    objectives: [
      "Interne — informer les équipes et valoriser les temps forts de l'entreprise.",
      "Externe — donner de la visibilité aux actions de SETRAM auprès du public.",
      "Événementiel — préparer et couvrir les événements de l'entreprise.",
    ],
    responsibilities: [
      "Communication interne et externe.",
      "Communication événementielle : préparation et couverture.",
      "Création digitale : photos et vidéos courtes pour les réseaux sociaux.",
    ],
    execution: [
      {
        title: "Sur le terrain",
        body: "Un stand SETRAM qui accueille en quatre langues — arabe, tamazight, anglais et français — couvert en photo et en vidéo verticale, au plus près des échanges avec le public.",
        images: [
          {
            src: work21,
            alt: "Kakémono SETRAM souhaitant la bienvenue en arabe, tamazight, anglais et français, devant un stand sous tente",
            w: 480,
            h: 640,
          },
        ],
        videos: [
          {
            src: work17,
            poster: posterSetramStand,
            title: "Le stand en vidéo",
            duration: "0:25",
            orientation: "portrait",
          },
        ],
      },
      {
        title: "Le tramway comme décor",
        body: "Des formats courts qui mettent en scène le réseau et la ville : la rame, la station, le quotidien autour des voies.",
        videos: [
          {
            src: work18,
            poster: posterSetramTramway,
            title: "Le réseau au quotidien",
            duration: "0:19",
            orientation: "portrait",
          },
        ],
      },
      {
        title: "Les équipes au premier plan",
        body: "La communication interne passe aussi par l'image : la photo de groupe d'un événement de l'entreprise, pour valoriser celles et ceux qui le font vivre.",
        images: [
          {
            src: work20,
            alt: "Photo de groupe d'une vingtaine de personnes lors d'un événement en salle",
            w: 1080,
            h: 810,
          },
        ],
      },
    ],
    results: "Mission de décembre 2025 à mars 2026. Les contenus présentés sont des exemples de production ; aucune statistique n'est publiée ici.",
  },
  {
    slug: "cap-emergency",
    client: "CAP Emergency",
    year: "2024 — 2026",
    title: "Informer et rassurer : la communication d'une structure de santé",
    summary: "Plus de deux ans de marketing digital pour CAP Emergency, à Bordj El Bahri : réseaux sociaux, visuels, vidéos, rédaction et publicités, pour faire connaître les services et garder le lien avec les patients.",
    categories: ["social"],
    cover: {
      src: work8,
      alt: "Visuel CAP Emergency : « Nos services d'urgence sont disponibles 24h », stéthoscope sur blouse bleue",
      w: 940,
      h: 788,
    },
    coverTone: "light",
    role: "Chargé marketing digital — réseaux sociaux, design, copywriting et publicités",
    tools: ["Canva", "CapCut", "Meta Business Suite", "Meta Ads Manager"],
    facts: [
      {
        value: "28",
        label: "mois de collaboration",
      },
      {
        value: "4",
        label: "missions : social, visuels & vidéos, rédaction, ads",
      },
    ],
    context: [
      "CAP Emergency est un établissement de santé privé situé à Bordj El Bahri, à l'est d'Alger. Il propose des services d'urgence et des consultations spécialisées.",
      "En santé, la communication doit d'abord être claire — services, horaires, contacts — et inspirer confiance, sans jamais promettre au-delà de ce qui est vrai.",
    ],
    objectives: [
      "Informer — faire connaître les services, les spécialités et les jours de consultation.",
      "Rassurer — installer une image à la fois professionnelle et humaine.",
      "Faciliter le contact — chaque visuel donne un moyen de joindre l'établissement.",
      "Fidéliser — entretenir le lien avec les patients au fil des temps forts.",
    ],
    responsibilities: [
      "Gestion des réseaux sociaux de l'établissement.",
      "Concept, rédaction et design des visuels ; infographies et vidéos.",
      "Campagnes publicitaires sur les réseaux sociaux.",
    ],
    execution: [
      {
        title: "Une identité reconnaissable",
        body: "Bleu médical, blouses, typographies capitales et bandeaux de couleur : chaque publication se reconnaît au premier coup d'œil dans le fil d'actualité, tout en restant sobre.",
        images: [
          {
            src: work8,
            alt: "Visuel « Nos services d'urgence sont disponibles 24h » avec numéros de contact",
            w: 940,
            h: 788,
          },
        ],
      },
      {
        title: "Des messages utiles d'abord",
        body: "Les consultations spécialisées sont présentées comme une information de service : spécialité, prestations, jour de rendez-vous, coordonnées complètes.",
        images: [
          {
            src: work9,
            alt: "Affiche « Consultation de pneumologie et d'allergologie », rendez-vous le samedi, liste des prestations",
            w: 763,
            h: 1080,
          },
          {
            src: work10,
            alt: "Affiche « Agissez maintenant — Consultez sans attendre » : un médecin souriant, bras croisés",
            w: 1080,
            h: 1350,
          },
        ],
      },
      {
        title: "Remercier, pas seulement annoncer",
        body: "Pour les trois ans de l'établissement, un message de remerciement aux patients plutôt qu'une annonce : un contenu de marque qui renforce la relation.",
        quote: {
          text: "3 ans à vos côtés… et ce n'est que le début",
          lang: "fr",
          gloss: "Message des trois ans",
        },
        images: [
          {
            src: work7,
            alt: "Visuel anniversaire : un médecin dans un couloir d'hôpital, « 3 ans à vos côtés… Merci pour votre fidélité »",
            w: 940,
            h: 788,
          },
        ],
      },
      {
        title: "Faire entrer le public",
        body: "La vidéo montre ce qu'une affiche ne peut pas montrer : les lieux, l'accueil, les équipes. Une visite de l'établissement présente ses espaces et ses services, dont les soins et consultations à domicile ; une vidéo de marque raconte CAP Emergency.",
        videos: [
          {
            src: work11,
            poster: posterCapEmergencyVisite,
            title: "Visite de l'établissement",
            duration: "2:03",
            orientation: "landscape",
          },
          {
            src: work12,
            poster: posterCapEmergencyMarque,
            title: "Vidéo de marque",
            duration: "1:08",
            orientation: "landscape",
          },
        ],
      },
    ],
    results: "Collaboration de juin 2024 à octobre 2026. Les statistiques de la page ne sont pas présentées ici.",
  },
  {
    slug: "tedx",
    client: "TEDx Algérie",
    year: "2025",
    title: "TEDx : donner envie de venir, puis faire vivre l'événement",
    summary: "Manager au sein du projet international TEDx Algérie : communication digitale, affiches, vidéo de promotion et couverture d'événements, dont l'édition « Quand l'Art rencontre le Business » avec l'Institut français.",
    categories: ["events"],
    cover: {
      src: work14,
      alt: "Affiche TEDx × Institut français « Quand l'Art rencontre le Business », jeudi 17 juillet 2025",
      w: 574,
      h: 692,
    },
    coverTone: "light",
    role: "Manager — communication et production",
    tools: ["Canva", "CapCut"],
    facts: [
      {
        value: "3",
        label: "formats : affiches, vidéo, couverture photo",
      },
      {
        value: "17.07",
        label: "2025 : « Quand l'Art rencontre le Business »",
      },
    ],
    context: [
      "Les événements TEDx sont des conférences locales et indépendantes, organisées autour d'« idées qui méritent d'être partagées ». Au sein du projet TEDx Algérie, j'ai contribué à l'organisation d'événements à portée internationale.",
      "La communication a deux temps : donner envie de venir avant l'événement, puis le prolonger en ligne.",
    ],
    objectives: [
      "Annoncer — faire connaître chaque édition et son thème.",
      "Mobiliser — donner envie au public d'y assister.",
      "Prolonger — faire vivre l'événement en ligne, en photo et en vidéo.",
    ],
    responsibilities: [
      "Communication digitale des événements.",
      "Production de contenus : affiches et vidéo de promotion.",
      "Captation et couverture photo et vidéo.",
    ],
    execution: [
      {
        title: "Une affiche, une idée",
        body: "Pour l'édition organisée avec l'Institut français le 17 juillet 2025, l'affiche pose le thème en une phrase. Les publications suivent aussi l'actualité, comme le message de la fête de l'Indépendance.",
        quote: {
          text: "The only hero, the people",
          lang: "en",
          gloss: "Publication de la fête de l'Indépendance (TEDx University of Algiers)",
        },
        images: [
          {
            src: work14,
            alt: "Affiche « Quand l'Art rencontre le Business », illustration d'une artiste et d'un entrepreneur",
            w: 574,
            h: 692,
          },
          {
            src: work13,
            alt: "Publication TEDx University of Algiers : « The only hero, the people », souhaits de fête de l'Indépendance en arabe et en tamazight",
            w: 583,
            h: 721,
          },
        ],
      },
      {
        title: "Une vidéo pour donner envie",
        body: "Une vidéo verticale tournée en bibliothèque présente l'édition et promet « une journée remplie » : le format pensé pour les Reels et les Stories.",
        videos: [
          {
            src: work15,
            poster: posterTedxPromo,
            title: "Vidéo de promotion",
            duration: "0:41",
            orientation: "portrait",
          },
        ],
      },
      {
        title: "Le jour J",
        body: "Photos de scène et de conférence pendant l'événement, pour la couverture en direct et les publications d'après.",
        images: [
          {
            src: work4,
            alt: "Un intervenant sur scène devant un écran, face à une salle pleine",
            w: 2048,
            h: 1536,
          },
          {
            src: work5,
            alt: "Scène TEDx éclairée, lettres rouges « TED » et « X »",
            w: 1200,
            h: 900,
          },
        ],
      },
    ],
    results: "Les chiffres de fréquentation et d'audience ne sont pas publiés ici.",
  },
  {
    slug: "white-industry",
    client: "White Industry",
    year: "2025",
    title: "Positionner un fabricant algérien auprès d'une nouvelle génération d'entrepreneurs",
    summary: "Proposition freelance : stratégie de contenu, identité verbale et plan éditorial d'une semaine en trois langues, et visuels, pour White Industry, fabricant de cosmétiques et de compléments alimentaires qui accompagne aussi la création de marques.",
    categories: ["pitch", "strategy"],
    cover: {
      src: work2,
      alt: "Visuel White Industry : flacon « Your Brand » sur fond végétal, « Créez votre marque en toute confiance, avec les laboratoires White Industry »",
      w: 1080,
      h: 1350,
    },
    coverTone: "light",
    role: "Proposition freelance — stratégie, slogans, plan éditorial et rédaction trilingue",
    tools: ["Google Docs"],
    facts: [
      {
        value: "7",
        label: "jours de contenus planifiés",
      },
      {
        value: "3",
        label: "langues : arabe, français, anglais",
      },
      {
        value: "4",
        label: "slogans proposés",
      },
      {
        value: "4",
        label: "plateformes",
      },
    ],
    context: [
      "White Industry fabrique en Algérie et accompagne des porteurs de projet qui veulent lancer leur propre marque. J'ai préparé cette proposition en freelance, fin 2025.",
      "L'enjeu : montrer qu'une fabrication locale peut tenir des standards de qualité élevés, et parler à la jeunesse entrepreneuriale qui porte les projets de demain.",
    ],
    objectives: [
      "Positionner White Industry comme un partenaire de fabrication fiable, moderne et résolument local.",
      "S'adresser à la nouvelle génération d'entrepreneurs algériens.",
      "Valoriser le « Made in Algeria » avec fierté et transparence.",
      "Attirer distributeurs et futurs propriétaires de marque.",
    ],
    responsibilities: [
      "Recommandations stratégiques : cible, ton, plateformes et stratégie multilingue.",
      "Identité verbale : quatre slogans en français et en arabe.",
      "Plan éditorial d'une semaine et rédaction des légendes en arabe, en français et en anglais.",
      "Recommandations saisonnières : fin d'année et salon de la cosmétique de janvier 2026.",
    ],
    steps: {
      title: "Le plan d'une semaine",
      items: [
        {
          label: "Jour 1",
          title: "Fabrication cosmétique en Algérie",
          body: "Vidéo · Instagram, Facebook — les valeurs et les objectifs de la marque.",
        },
        {
          label: "Jour 2",
          title: "Compléments alimentaires",
          body: "Carrousel + quiz · Facebook, LinkedIn — éducation et interactivité.",
        },
        {
          label: "Jour 3",
          title: "Marque blanche",
          body: "Vidéo storytelling · Instagram, TikTok — créer sa marque en sept étapes.",
        },
        {
          label: "Jour 4",
          title: "Qualité & R&D",
          body: "Reel · Instagram, TikTok — matières premières et contrôle qualité, en toute transparence.",
        },
        {
          label: "Jour 5",
          title: "Production & packaging",
          body: "Carrousel + vidéo · Instagram, Facebook, TikTok — du laboratoire au produit fini.",
        },
        {
          label: "Jour 6",
          title: "Les avantages White Industry",
          body: "Carrousel · LinkedIn, Facebook — délais courts, qualité, flexibilité, accompagnement.",
        },
        {
          label: "Jour 7",
          title: "Success story DZ",
          body: "Photos réelles + stories clients · Instagram, Facebook — la preuve sociale.",
        },
      ],
    },
    execution: [
      {
        title: "Une plateforme, un rôle",
        body: "TikTok et Instagram pour l'image, la confiance et l'inspiration : coulisses de l'usine, histoires clients, vidéos courtes. LinkedIn pour une communication plus institutionnelle : offres, partenariats, certifications, à destination des décideurs B2B.",
      },
      {
        title: "Une signature répétée partout",
        body: "Pour une cohérence totale, chaque publication et chaque vidéo se termine par la même signature, déclinée en français et en arabe.",
        quote: {
          text: "White Industry… صناعة محلية بمواصفات عالمية",
          lang: "ar",
          gloss: "« La fabrication locale aux standards mondiaux »",
        },
      },
      {
        title: "Trois langues, un même ton",
        body: "Arabe, français et anglais, pour refléter la réalité linguistique du marché algérien et toucher une audience large, connectée et diversifiée.",
        quote: {
          text: "Transparency in manufacturing is the foundation of our brand!",
          lang: "en",
          gloss: "Accroche de la vidéo coulisses (jour 4)",
        },
      },
      {
        title: "Des visuels à l'image de la marque",
        body: "Les visuels traduisent le plan en images : présentation des services, promesse de la marque blanche en arabe, et une vidéo des coulisses de production — la transparence que la stratégie met en avant.",
        quote: {
          text: "أنشئ علامتك التجارية بكل ثقة، مع مخابر WHITE INDUSTRY",
          lang: "ar",
          gloss: "« Créez votre marque en toute confiance, avec les laboratoires White Industry »",
        },
        images: [
          {
            src: work1,
            alt: "Visuel « Nos services » : tube de crème « Your Brand » et liste des services de fabrication",
            w: 1080,
            h: 1350,
          },
          {
            src: work2,
            alt: "Visuel marque blanche : flacon « Your Brand » et accroche en arabe",
            w: 1080,
            h: 1350,
          },
        ],
        videos: [
          {
            src: work3,
            poster: posterWhiteIndustryProduction,
            title: "Coulisses de production",
            duration: "1:12",
            orientation: "portrait",
          },
        ],
      },
    ],
    results: "Proposition remise en freelance, présentée ici comme exemple de démarche. Elle ne reflète pas nécessairement la communication actuelle de la marque.",
    document: {
      href: work22,
      label: "Lire la proposition complète (PDF)",
    },
  },
];

/** Sélection vidéo de la page d'accueil. */
export const showreel: { label: string; video: Video }[] = [
  {
    label: "White Industry",
    video: {
      src: work3,
      poster: posterWhiteIndustryProduction,
      title: "Coulisses de production",
      duration: "1:12",
      orientation: "portrait",
    },
  },
  {
    label: "CAP Emergency",
    video: {
      src: work12,
      poster: posterCapEmergencyMarque,
      title: "Vidéo de marque",
      duration: "1:08",
      orientation: "landscape",
    },
  },
  {
    label: "Tournage",
    video: {
      src: work16,
      poster: posterPlateau,
      title: "Prise de vue face caméra",
      duration: "0:26",
      orientation: "landscape",
    },
  },
];

/** Visuel hors étude de cas (Zimou Group). */
export const sideWork: Img & { client: string; year: string; caption: string } = {
  src: yalidineApplication,
  alt: "Teaser Yalidine : un iPhone avec l'icône de l'application, « Yalidine se rapproche de vous à pas sûrs — bientôt sur votre téléphone »",
  w: 446,
  h: 575,
  caption: "Annonce de l'application mobile Yalidine, bientôt sur Google Play et l'App Store.",
  client: "Yalidine — Zimou Group",
  year: "2026",
};

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
