# 🚀 CryptoWatch - Dashboard Cryptomonnaies

## 📸 Capture d'écran

![CryptoWatch Dashboard](src\assets\ScreenShot_CryptoWatch.png)

## 🌐 Demo Live

[Lien vers le site en production](https://votre-url-deploy.com)

## 📋 Description

**CryptoWatch** est une application web moderne de suivi des cryptomonnaies en temps réel, développée avec React et Redux. Ce projet a été réalisé dans le cadre d'un apprentissage autonome, en combinant tutoriel guidé et développement personnel.

### 🎯 Processus d'apprentissage

Ce projet a été développé en suivant un tutoriel que j'ai régulièrement interrompu pour :

- **Tester mes propres solutions** avant de voir la correction
- **Expérimenter des approches alternatives**
- **Comprendre en profondeur** chaque concept avant de continuer
- **Utiliser l'IA (Cursor AI, ChatGPT)** pour poser des questions spécifiques et obtenir des explications détaillées

Cette approche m'a permis de **maîtriser véritablement** les concepts plutôt que de simplement copier-coller du code.

## ✨ Fonctionnalités

- 📊 **Graphique Treemap interactif** - Visualisation des top 45 cryptomonnaies
- 📈 **Tableau de données complet** - Prix, Market Cap, Volume, variations (1h, 24h, 7j, 30j, 6m, 1an)
- 🔄 **Tri dynamique** - Par colonne avec ordre croissant/décroissant
- ⚡ **Filtres intelligents** - Affichage/masquage des stablecoins
- ⭐ **Système de favoris** - Sauvegarde locale des cryptomonnaies préférées
- 📱 **Interface responsive** - Optimisée pour tous les écrans
- 🎨 **Design moderne** - UI/UX soignée avec animations fluides

## 🛠️ Technologies

- **Frontend**: React 19.1.0, Redux (classique)
- **Styling**: SCSS avec architecture BEM
- **Graphiques**: Recharts (Treemap)
- **API**: CoinGecko API
- **État global**: Redux avec DevTools
- **Build**: Create React App

## 🚀 Installation & Lancement

```bash
# Cloner le repository
git clone https://github.com/votre-username/cryptowatch.git

# Installer les dépendances
npm install

# Lancer en mode développement
npm start

# Build pour production
npm run build
```

## 📁 Architecture

```
src/
├── components/          # Composants React
│   ├── Table.js        # Tableau principal avec tri/filtres
│   ├── GlobalChart.js  # Graphique Treemap
│   ├── HeaderInfos.js  # En-tête avec stats globales
│   └── TableFilters.js # Filtres et contrôles
├── reducer/            # Reducers Redux
├── action/             # Actions Redux
└── styles/             # Styles SCSS
```

## 🎯 Points forts techniques

- **Redux classique** avec actions/reducers bien structurés
- **Performance optimisée** avec React.memo et useMemo
- **Gestion d'état centralisée** pour les filtres et préférences
- **API REST** avec gestion d'erreurs robuste
- **Code modulaire** et maintenable

## 🔧 Fonctionnalités Redux

- **Gestion des stablecoins** : `SET_STABLE_STATE`
- **Système de favoris** : `SET_LIST_DISPLAY`
- **DevTools intégrés** pour le debugging

## 📊 API Utilisée

- **CoinGecko API** : Données en temps réel des cryptomonnaies
- Endpoints : `/coins/markets`, `/global`

## 🎨 Design System

- **Couleurs** : Palette verte/rouge pour les variations
- **Typographie** : Saira Condensed, Baloo Bhaina 2
- **Animations** : Transitions fluides et micro-interactions

## 📈 Métriques

- **Performance** : Chargement optimisé avec lazy loading
- **Accessibilité** : Labels ARIA et navigation clavier
- **SEO** : Meta tags et structure sémantique

## 🧠 Compétences démontrées

- **Apprentissage autonome** : Capacité à apprendre de manière indépendante
- **Résolution de problèmes** : Utilisation intelligente des outils d'IA pour comprendre
- **Curiosité technique** : Test de solutions alternatives et expérimentation
- **Compréhension profonde** : Maîtrise des concepts plutôt que copier-coller

---

_Projet développé dans le cadre d'un apprentissage autonome React/Redux - 2024_
