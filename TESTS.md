# Rapport de tests

## Exécutés (environnement sans navigateur)
- Syntaxe JS de l’application et du service worker : OK
- manifest.webmanifest : JSON valide ; icônes générées aux bonnes tailles
- Serveur statique : les 10 fichiers du cache répondent 200 avec le bon type MIME ; plus aucune URL externe dans index.html
- Logique métier (calculs en centimes, remise, TVA, statuts, numérotation) : OK
- Service worker simulé (mock, pas un vrai navigateur) : 9 fichiers pré-cachés ; ancien cache supprimé ; navigation hors ligne → index.html du cache ; bibliothèque PDF hors ligne → cache ; POST et requêtes tierces ignorés ; SKIP_WAITING sur message
- Bibliothèques vendues : versions 2.5.1 / 3.8.2 (copie des paquets npm)

## NON vérifiés
- Installation réelle (Android, Windows), lancement hors ligne réel, bouton Installer
- Génération PDF avec les copies locales dans un navigateur, partage mobile (navigator.share)
- Mise à jour du service worker (bandeau), mise en page mobile, erreurs console
- Parcours complet : devis → facture → paiements ; sauvegarde/restauration ; données existantes après mise à jour
- PDF multipage avec descriptions longues déjà vu dans l’aperçu précédent, mais pas avec cette version
