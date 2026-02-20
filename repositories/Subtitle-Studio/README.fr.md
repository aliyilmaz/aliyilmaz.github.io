# 🎬 Subtitle Studio

**Subtitle Studio** est une application web qui vous permet d'ajouter des notes instantanées à des vidéos provenant de la caméra en direct, de fichiers locaux ou de YouTube, de convertir ces notes en fichiers de sous-titres horodatés (.vtt) et de les télécharger avec la vidéo sous forme d'archive ZIP. L'interface prend en charge le **turc, l'anglais, le russe, l'arabe et le français**, et vous pouvez saisir des notes par la voix.

---

## ✨ Fonctionnalités

- 📹 **Trois sources vidéo** :
  - **Caméra en direct** : Enregistrez depuis votre webcam, arrêtez l'enregistrement et regardez la vidéo enregistrée.
  - **Télécharger un fichier** : Sélectionnez un fichier vidéo sur votre ordinateur et lisez-le.
  - **YouTube** : Lisez des vidéos YouTube en entrant un ID ou un lien.
- 📝 **Ajouter des notes** :
  - Ajoutez une note à n'importe quelle image pendant la lecture.
  - Les notes sont automatiquement enregistrées avec un timestamp.
  - **Saisie vocale** (appuyez sur le bouton micro et parlez).
- 🗂️ **Génération de sous-titres** :
  - Les notes sont converties au format `.vtt` (WebVTT).
  - Ajustez la durée d'affichage de chaque note (0.5 à 10 secondes).
- 🎁 **Téléchargement ZIP** :
  - La vidéo (enregistrement direct ou fichier téléchargé) + le fichier de sous-titres sont téléchargés dans une seule archive ZIP.
  - Pour les vidéos YouTube, seul le fichier de sous-titres est inclus (pas de fichier vidéo).
- 🌐 **Support multilingue** :
  - Turc, anglais, russe, arabe, français.
  - La page détecte automatiquement la langue de votre navigateur et sélectionne la langue appropriée (anglais par défaut si non prise en charge).
  - Lorsque vous changez de langue, tous les textes de l'interface et la langue de reconnaissance vocale se mettent à jour instantanément.
- 📱 **Design responsive** :
  - Fonctionne confortablement sur ordinateur, tablette et mobile.
  - La zone vidéo a une largeur fixe, la zone de notes est flexible.

---

## 🛠️ Technologies utilisées

- HTML5, CSS3, JavaScript (ES6)
- [JSZip](https://stuk.github.io/jszip/) – pour créer des archives ZIP
- YouTube IFrame API – pour lire des vidéos YouTube
- Web Speech API – pour la saisie vocale (nécessite la prise en charge du navigateur)
- Flexbox et CSS Grid – pour la mise en page responsive

---

## 🚀 Installation et démarrage

Le projet est entièrement côté client et ne nécessite aucune configuration serveur.

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/yourusername/subtitle-studio.git
   ```