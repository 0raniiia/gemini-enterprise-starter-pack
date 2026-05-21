/**
 * ============================================================
 *  GE Starter Pack — Google Drive Structure Creator
 *  Par Rania Mehria — Google Cloud Outcome Customer Engineer
 * ============================================================
 *
 *  INSTRUCTIONS (lire avant de lancer) :
 *  1. Va sur https://script.google.com
 *  2. Crée un nouveau projet ("+ Nouveau projet")
 *  3. Remplace tout le contenu par ce script
 *  4. Modifie CLIENT_NAME ci-dessous (ligne ~20)
 *  5. Clique sur "Exécuter" → sélectionne createGEStarterPackStructure
 *  6. Autorise les permissions Google Drive demandées
 *  7. Attends ~60 secondes → le dossier apparaît dans ton Drive
 *
 *  RÉSULTAT : Un dossier complet avec tous les sous-dossiers
 *  et fichiers Google (Docs, Sheets, Slides) créés et nommés.
 * ============================================================
 */

// ─── CONFIG : Modifie ici avant de lancer ───────────────────
const CONFIG = {
  CLIENT_NAME: "NOM_CLIENT",        // ← Remplace par le nom du client (ex: "Société Générale")
  SHARE_WITH_CLIENT: false,         // ← Mettre true pour partager le dossier automatiquement
  CLIENT_EMAIL: "",                 // ← Email client si SHARE_WITH_CLIENT = true
  CREATE_INDEX_DOC: true,           // ← Crée un doc index avec tous les liens
};
// ────────────────────────────────────────────────────────────


// ─── STRUCTURE COMPLÈTE DU STARTER PACK ─────────────────────
const STRUCTURE = [
  {
    folder: "00 - Get Started",
    files: [
      { name: "🚀 Get Started with Gemini Enterprise",        type: "slides" },
      { name: "📋 Guide d'activation — Dupliquer ce pack",    type: "doc"    },
    ]
  },
  {
    folder: "01 - Marketing",
    files: [
      { name: "📖 Guide de démarrage — Marketing",            type: "slides" },
      { name: "📝 Bibliothèque de prompts — Marketing",       type: "sheet"  },
      { name: "📊 Self-Tracker — Marketing",                  type: "sheet"  },
    ],
    subfolders: [
      {
        name: "Use Cases",
        files: [
          { name: "UC-MKT-01 — Déclinaison multicanale d'un brief",   type: "doc" },
          { name: "UC-MKT-02 — Synthèse rapports de marché",          type: "doc" },
          { name: "UC-MKT-03 — Génération de variantes A/B",          type: "doc" },
          { name: "UC-MKT-04 — Rédaction de briefs créatifs",         type: "doc" },
          { name: "UC-MKT-05 — Création de personas et audience",     type: "doc" },
        ]
      }
    ]
  },
  {
    folder: "02 - RH",
    files: [
      { name: "📖 Guide de démarrage — RH",                   type: "slides" },
      { name: "📝 Bibliothèque de prompts — RH",              type: "sheet"  },
      { name: "📊 Self-Tracker — RH",                         type: "sheet"  },
    ],
    subfolders: [
      {
        name: "Use Cases",
        files: [
          { name: "UC-RH-01 — Génération de fiches de poste",         type: "doc" },
          { name: "UC-RH-02 — Scoring et synthèse de CVs en masse",   type: "doc" },
          { name: "UC-RH-03 — Parcours d'onboarding personnalisé",    type: "doc" },
          { name: "UC-RH-04 — Rédaction de communications internes",  type: "doc" },
          { name: "UC-RH-05 — Synthèse entretiens annuels",           type: "doc" },
        ]
      }
    ]
  },
  {
    folder: "03 - Sales",
    files: [
      { name: "📖 Guide de démarrage — Sales",                type: "slides" },
      { name: "📝 Bibliothèque de prompts — Sales",           type: "sheet"  },
      { name: "📊 Self-Tracker — Sales",                      type: "sheet"  },
    ],
    subfolders: [
      {
        name: "Use Cases",
        files: [
          { name: "UC-SALES-01 — Personnalisation de pitchs et propositions", type: "doc" },
          { name: "UC-SALES-02 — Préparation de réunions client",             type: "doc" },
          { name: "UC-SALES-03 — Emails de follow-up et prospection",         type: "doc" },
          { name: "UC-SALES-04 — Résumé et insights d'appels commerciaux",    type: "doc" },
          { name: "UC-SALES-05 — Génération de battlecards concurrentielles", type: "doc" },
        ]
      }
    ]
  },
  {
    folder: "04 - Finance",
    files: [
      { name: "📖 Guide de démarrage — Finance",              type: "slides" },
      { name: "📝 Bibliothèque de prompts — Finance",         type: "sheet"  },
      { name: "📊 Self-Tracker — Finance",                    type: "sheet"  },
    ],
    subfolders: [
      {
        name: "Use Cases",
        files: [
          { name: "UC-FIN-01 — Synthèse de rapports financiers PDF",  type: "doc" },
          { name: "UC-FIN-02 — Commentaires de gestion pour reporting",type: "doc"},
          { name: "UC-FIN-03 — Analyse de factures et extraction data",type: "doc"},
          { name: "UC-FIN-04 — Notes de cadrage budgétaire",          type: "doc" },
          { name: "UC-FIN-05 — Dashboards chiffrés en narratifs",     type: "doc" },
        ]
      }
    ]
  },
  {
    folder: "05 - Juridique",
    files: [
      { name: "📖 Guide de démarrage — Juridique",            type: "slides" },
      { name: "📝 Bibliothèque de prompts — Juridique",       type: "sheet"  },
      { name: "📊 Self-Tracker — Juridique",                  type: "sheet"  },
    ],
    subfolders: [
      {
        name: "Use Cases",
        files: [
          { name: "UC-JUR-01 — Analyse de contrats clauses et risques",      type: "doc" },
          { name: "UC-JUR-02 — Génération de contrats standards NDA CGV",    type: "doc" },
          { name: "UC-JUR-03 — Veille réglementaire automatisée RGPD",       type: "doc" },
          { name: "UC-JUR-04 — Réponses types aux demandes légales",         type: "doc" },
          { name: "UC-JUR-05 — Comparaison de versions de contrats",         type: "doc" },
        ]
      }
    ]
  },
  {
    folder: "06 - IT",
    files: [
      { name: "📖 Guide de démarrage — IT",                   type: "slides" },
      { name: "📝 Bibliothèque de prompts — IT",              type: "sheet"  },
      { name: "📊 Self-Tracker — IT",                         type: "sheet"  },
    ],
    subfolders: [
      {
        name: "Use Cases",
        files: [
          { name: "UC-IT-01 — Génération et documentation de code",    type: "doc" },
          { name: "UC-IT-02 — Analyse de logs et debugging assisté",   type: "doc" },
          { name: "UC-IT-03 — Documentation technique et runbooks",    type: "doc" },
          { name: "UC-IT-04 — Plans de recette et cas de test",        type: "doc" },
          { name: "UC-IT-05 — Rédaction de RFPs et appels d'offres",  type: "doc" },
        ]
      }
    ]
  },
  {
    folder: "07 - Kit Ambassadeurs",
    files: [
      { name: "📧 Templates emails de lancement IA",          type: "doc"    },
      { name: "🏆 Guide des défis internes Gemini",           type: "slides" },
      { name: "📊 Tracker adoption globale",                  type: "sheet"  },
    ]
  },
  {
    folder: "08 - Ressources",
    files: [
      { name: "📚 Bibliothèque de prompts — Tous métiers",    type: "sheet"  },
      { name: "❓ FAQ et Troubleshooting Gemini Enterprise",   type: "doc"    },
    ]
  }
];
// ────────────────────────────────────────────────────────────


/**
 * FONCTION PRINCIPALE — Lance cette fonction
 */
function createGEStarterPackStructure() {
  const rootName = `GE Starter Pack — ${CONFIG.CLIENT_NAME}`;
  Logger.log("═".repeat(55));
  Logger.log(`  Création du GE Starter Pack pour : ${CONFIG.CLIENT_NAME}`);
  Logger.log("═".repeat(55));

  // Création du dossier racine
  const root = DriveApp.createFolder(rootName);
  Logger.log(`\n✅ Dossier racine créé : ${root.getUrl()}\n`);

  const indexLines = [
    `GE Starter Pack — ${CONFIG.CLIENT_NAME}`,
    `Généré le : ${new Date().toLocaleDateString("fr-FR")}`,
    `Lien racine : ${root.getUrl()}`,
    "",
    "─".repeat(50),
    ""
  ];

  // Création de la structure complète
  STRUCTURE.forEach(section => {
    Logger.log(`📁 ${section.folder}`);
    const sectionFolder = root.createFolder(section.folder);
    indexLines.push(`📁 ${section.folder}`);
    indexLines.push(`   ${sectionFolder.getUrl()}`);

    // Fichiers du dossier principal
    (section.files || []).forEach(file => {
      const created = createGoogleFile(file.name, file.type, sectionFolder);
      Logger.log(`   ✓ [${file.type.toUpperCase()}] ${file.name}`);
      indexLines.push(`   • ${file.name} → ${created.getUrl()}`);
    });

    // Sous-dossiers et leurs fichiers
    (section.subfolders || []).forEach(sub => {
      Logger.log(`   📁 ${sub.name}`);
      const subFolder = sectionFolder.createFolder(sub.name);
      indexLines.push(`   📁 ${sub.name}`);
      indexLines.push(`      ${subFolder.getUrl()}`);

      (sub.files || []).forEach(file => {
        const created = createGoogleFile(file.name, file.type, subFolder);
        Logger.log(`      ✓ [${file.type.toUpperCase()}] ${file.name}`);
        indexLines.push(`      • ${file.name} → ${created.getUrl()}`);
      });
    });

    indexLines.push("");
  });

  // Partage avec le client si activé
  if (CONFIG.SHARE_WITH_CLIENT && CONFIG.CLIENT_EMAIL) {
    root.addViewer(CONFIG.CLIENT_EMAIL);
    Logger.log(`\n📤 Dossier partagé avec : ${CONFIG.CLIENT_EMAIL}`);
    indexLines.push(`Partagé avec : ${CONFIG.CLIENT_EMAIL}`);
  }

  // Création du doc index
  if (CONFIG.CREATE_INDEX_DOC) {
    const indexDoc = DocumentApp.create(`📌 INDEX — ${rootName}`);
    const body = indexDoc.getBody();

    body.appendParagraph(`GE Starter Pack — ${CONFIG.CLIENT_NAME}`)
        .setHeading(DocumentApp.ParagraphHeading.HEADING1);
    body.appendParagraph(`Généré automatiquement le ${new Date().toLocaleDateString("fr-FR")} par le script GE Starter Pack.`);
    body.appendParagraph("").appendHorizontalRule();

    indexLines.forEach(line => body.appendParagraph(line));

    indexDoc.saveAndClose();
    DriveApp.getFileById(indexDoc.getId()).moveTo(root);
    Logger.log(`\n📌 Index créé avec tous les liens`);
  }

  Logger.log("\n" + "═".repeat(55));
  Logger.log("  ✅ STRUCTURE CRÉÉE AVEC SUCCÈS !");
  Logger.log(`  🔗 ${root.getUrl()}`);
  Logger.log("═".repeat(55));

  // Affiche l'URL dans une popup
  SpreadsheetApp.getUi
    ? null
    : Browser.msgBox(`✅ Structure créée !\n\nAccès : ${root.getUrl()}`);
}


/**
 * Crée un fichier Google (Doc / Sheet / Slides) dans un dossier
 */
function createGoogleFile(name, type, folder) {
  let fileId;

  switch (type) {
    case "doc":
      fileId = DocumentApp.create(name).getId();
      break;
    case "sheet":
      fileId = SpreadsheetApp.create(name).getId();
      break;
    case "slides":
      fileId = SlidesApp.create(name).getId();
      break;
    default:
      fileId = DriveApp.createFile(name, "", MimeType.PLAIN_TEXT).getId();
  }

  const file = DriveApp.getFileById(fileId);
  file.moveTo(folder);
  return file;
}
