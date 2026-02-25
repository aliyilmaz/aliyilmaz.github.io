# 🎬 Subtitle Studio

**Subtitle Studio** est une application web qui vous permet d'ajouter instantanément des notes aux vidéos que vous lisez depuis une webcam, des fichiers vidéo locaux ou YouTube. Vous pouvez ensuite convertir ces notes en un fichier de sous-titres horodaté (.vtt) et le télécharger au format ZIP avec la vidéo. L'interface est disponible en **turc, anglais, russe, arabe et français**, et vous pouvez saisir des notes par dictée vocale.

---

## ✨ Fonctionnalités

- 📹 **Trois sources vidéo** :

- **Diffusion en direct** : Enregistrez depuis votre webcam, mettez l'enregistrement en pause et regardez la vidéo enregistrée.

- **Importer un fichier** : Sélectionnez et lisez un fichier vidéo depuis votre ordinateur.

- **YouTube** : Lisez des vidéos YouTube en saisissant leur identifiant ou leur lien.

- 🎥 **Sélection de la caméra** : Dans l'onglet Diffusion en direct, vous pouvez sélectionner la caméra à utiliser avant le début de l'enregistrement. La caméra ne peut pas être modifiée pendant l'enregistrement. - 📝 **Ajout de notes** :

- Ajoutez des notes à n'importe quelle image pendant la lecture.

- Les notes sont automatiquement enregistrées avec un horodatage.

- **Saisie vocale** : saisissez des notes en parlant à l'aide du bouton microphone.

- 🗂️ **Création de sous-titres** :

- Les notes ajoutées sont converties en un fichier de sous-titres au format `.vtt` (WebVTT).

- Vous pouvez ajuster la durée d'affichage de chaque note (0,5 à 10 secondes).

- 🎁 **Téléchargement ZIP** :

- La vidéo (enregistrement en direct ou fichier importé) et le fichier de sous-titres sont téléchargés dans une seule archive ZIP.

- Pour les vidéos YouTube, seuls les sous-titres sont téléchargés (la vidéo n'est pas incluse).

- 🌐 **Prise en charge multilingue** : - Turc, anglais, russe, arabe, français.

- À l'ouverture de la page, la langue de votre navigateur est automatiquement détectée et la langue appropriée est sélectionnée (anglais si elle n'est pas prise en charge). - Lorsque la langue change, tous les textes de l'interface et la langue de la reconnaissance vocale sont mis à jour.

- 📱 **Conception adaptative** :

- Utilisation confortable sur ordinateur, tablette et mobile.

- La zone vidéo a une largeur fixe, la zone de notes est flexible.

---

## 🛠️ Technologies utilisées

- HTML5, CSS3, JavaScript (ES6)

- [JSZip](https://stuk.github.io/jszip/) – Pour créer des archives ZIP

- API YouTube IFrame – Pour lire les vidéos YouTube

- API Web Speech – Saisie vocale (nécessite la compatibilité du navigateur)

- API MediaDevices – Pour récupérer et sélectionner la liste des caméras

- Flexbox et CSS Grid – Interface adaptative

---

## 🚀 Installation et fonctionnement

Ce projet est entièrement côté client et ne nécessite aucune installation serveur.

1. **Cloner le dépôt** :

```bash
git clone https://github.com/aliyilmaz/subtitle-studio.git
```
2. **Exécuter les fichiers sur un serveur web (facultatif) :**

Vous pouvez utiliser un serveur HTTP simple (par exemple, `http.server` avec Python).

Vous pouvez également l'exécuter en ouvrant directement le fichier `index.html` dans votre navigateur (cependant, certains navigateurs peuvent nécessiter HTTPS ou l'accès à localhost pour les autorisations d'accès à la caméra et au microphone).

## 🎯 Guide de l'utilisateur
### Onglet Diffusion en direct

1. Sélectionnez la caméra que vous souhaitez utiliser en cliquant sur le bouton de sélection de caméra (📷).

2. Démarrez l'enregistrement en appuyant sur le bouton « Enregistrer ».

3. Arrêtez l'enregistrement, regardez la vidéo enregistrée.

4. Ajoutez des notes instantanées tout en regardant la vidéo avec le bouton "Ajouter des notes".

5. Archivez la vidéo et les sous-titres avec « Terminer et télécharger le fichier ZIP ».

### Onglet Téléchargement de fichier

1. Sélectionnez un fichier vidéo sur votre ordinateur.

2. Ajoutez des notes pendant la lecture de la vidéo.

3. Terminez le processus et téléchargez le fichier ZIP.

### Onglet YouTube

1. Saisissez le lien ou l'identifiant de la vidéo.

2. Ajoutez des notes pendant la lecture de la vidéo.

3. Téléchargez uniquement le fichier de sous-titres.

### 📝 Remarques

+ La fonction de saisie vocale est compatible uniquement avec les navigateurs prenant en charge l'API Web Speech, tels que **Google Chrome, Microsoft Edge et Safari**.

+ L'autorisation du navigateur est requise pour la sélection de la caméra.

+ Les vidéos enregistrées sont sauvegardées au format .webm et les sous-titres au format **.vtt**.