# FODX Facture (PWA)

Application de devis et factures en MAD. Aucune dépendance serveur, aucun compte, aucune API payante.
Les données restent **uniquement dans le navigateur de l’appareil** (localStorage). Il n’y a **pas** de synchronisation cloud.

## Structure
```
index.html              application (interface + logique)
manifest.webmanifest    identité de l’app (nom, couleurs, icônes)
service-worker.js       cache hors ligne de l’application (pas des données clients)
vendor/                 jsPDF 2.5.1 et jspdf-autotable 3.8.2 (copies locales)
icons/                  icônes 192, 512, maskable, apple-touch
```

## Lancer en local
Le service worker exige HTTP(S) (ou `localhost`), pas `file://`.
```
cd fodx-pwa
python3 -m http.server 8080      # ou : npx serve .
```
Ouvrez http://localhost:8080

## Hébergement statique gratuit
Déposez le dossier tel quel (HTTPS fourni) sur l’un de ces services. Vérifiez leurs limites actuelles avant de choisir :
- **Netlify Drop** : glissez le dossier sur app.netlify.com/drop
- **Cloudflare Pages** : « Direct upload » du dossier
- **GitHub Pages** : poussez le dossier dans un dépôt, activez Pages (sous-dossier accepté : les chemins sont relatifs)

## Installer l’app
- **Android (Chrome)** : ouvrez le site → bouton « Installer l’app » dans l’en-tête, ou menu ⋮ › « Installer l’application ».
- **Windows (Chrome / Edge)** : ouvrez le site → icône d’installation dans la barre d’adresse, ou « Installer l’app » dans l’en-tête.
- **iPhone (Safari)** : Partager › « Sur l’écran d’accueil » (pas de bouton d’installation automatique).

## Mises à jour
Avant chaque publication, changez `CACHE='fodx-facture-v1'` dans `service-worker.js` (v2, v3…). À la visite suivante, un bandeau « Nouvelle version disponible » propose « Mettre à jour ». Enregistrez vos documents avant de cliquer : la page se recharge.

## Données et sauvegarde
- Exportez régulièrement une copie JSON (Réglages › Sauvegarde) et gardez-la hors de l’appareil.
- Effacer les données du navigateur efface vos documents.
- Si les données enregistrées sont illisibles, une copie brute est conservée sous la clé `fodx_facture_v1_corrompu_…`. Avant un import, l’état précédent est copié sous `fodx_facture_v1_avant_import`.
- La structure de stockage est inchangée : vos données existantes restent compatibles.

## Limites connues
- Non testé dans un vrai navigateur par l’auteur (voir TESTS.md).
- Pas de synchronisation entre appareils ; chaque appareil a ses propres données.
- Aucune vérification des obligations légales marocaines : consultez un comptable avant d’émettre de vraies factures.
- Polices : police système (Manrope n’est plus chargée depuis Google).
- Le bouton d’installation n’apparaît que sur les navigateurs qui le permettent.
