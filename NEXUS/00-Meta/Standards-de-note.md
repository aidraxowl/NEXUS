---
title: Standards de note
---

Chaque type de note a son template dans `00-Meta/Templates`. Créer une note : **Ctrl+N** → taper le nom → **Ctrl+T** → choisir le template.

## Les types de notes

| Type | Dossier | Nom du fichier | Rôle |
|---|---|---|---|
| Note brute | `01-Notes-brutes/HS26/<cours>` | `NB PW V03 - 20261016` | Prise de notes en cours |
| U-Fragen | `09-Learning/U-Fragen/<cours>` | `UF PW V03` | Questions d'exercice, réponses repliées |
| Concept | `02-Concepts` | `Dilemme de sécurité` | Une idée, définie au niveau examen |
| Thème | `03-Themes` | `Théories de la démocratie` | Un chapitre rédigé comme un article Wikipédia, avec liens |
| Penseur | `04-Penseurs-et-Oeuvres` | `Max Weber` | Un auteur, ses idées, ses œuvres |
| Cas | `05-Cas` | `Crise des missiles de Cuba` | Un événement analysé (Fallbeispiele) |
| Méthode | `06-Methodes` | `Cycle des politiques publiques` | Un outil d'analyse à appliquer étape par étape |
| Source | `07-Library` | `Huntington 1957` | Fiche d'un texte examinable |
| Course Map | `09-Learning/Course-Maps` | `HS26 - Politikwissenschaft` | Table des matières vivante d'un cours |
| Booklet | `09-Learning/Course-Maps` | `Booklet PW` | Les thèmes du cours mis bout à bout, à exporter en PDF |

## Codes de cours

Utilisés dans les noms de fichiers (`NB PW …`) et les tags (`cours/pw`).

| Code   | Cours                             |
| ------ | --------------------------------- |
| PW     | Politikwissenschaft Grundlagen    |
| Prosem | Proseminar                        |
| MilSoz | Militärsoziologie                 |
| MilPsy | Militärpsychologie und -pädagogik |
| Lead   | Leadership                        |
| VWL    | Mikro- et Makroökonomie           |
| Gesch  | Geschichte                        |
| DC     | Droit civil                       |
| Engl   | Englisch                          |

## Règles de nommage

- **Préfixe** uniquement pour les notes liées à une séance : `NB` (note brute), `UF` (U-Fragen).
- **Pas de préfixe** pour les concepts, thèmes, penseurs, cas, méthodes et sources : leur nom *est* leur contenu.
- Concepts et thèmes : **en français**, au singulier, sans article. Le thème porte un nom de sujet, jamais de cours.

## Les notes de thème : le format « Wikipédia »

Un thème se **lit** comme un article, il ne recopie pas les concepts.

1. **L'essentiel** : la synthèse de tout le thème en un paragraphe (4 à 6 phrases).
2. **Une section par sous-thème** (`## Titre parlant`), rédigée en **texte suivi**, 1 à 3 paragraphes. Chaque concept, cas, penseur ou méthode cité est un **[[lien]]** vers sa note.
3. Un trait `---`, puis **Pour réviser** : Comparaison (tableau) · ⚠️ Pièges d'examen · Questions de synthèse (3 à 5).
4. **Sources**.

Règles :
- **Le thème raconte, le concept détaille.** Tableaux complets, études et chiffres restent dans la note du concept.
- **Pas d'encadrés L'essentiel intégrés** (`![[…#^essentiel]]`) dans un thème : ils s'empilent sans titre et ne se lisent pas.
- Ne lier que des notes qui existent ; sinon, écrire le nom en texte simple.
- Schémas : uniquement quand ils apportent quelque chose (Mermaid ou image redessinée, jamais une capture de slide).

## « L'essentiel »

Chaque note (concept, thème, penseur, cas, source, méthode) commence par un encadré **L'essentiel**, suivi d'une ligne vide puis de `^essentiel` seul sur sa ligne. Il sert d'aperçu au survol d'un lien et peut être intégré ailleurs si besoin (`![[Note#^essentiel]]`).

## Alias

Dans les concepts : **1er alias = terme allemand**, 2e = terme anglais (facultatif). C'est ce qui permet de lier et chercher en allemand (`[[Sicherheitsdilemma`) une note écrite en français.

## Marqueurs (notes brutes)

| Marqueur | Sens |
|---|---|
| `!!` | Prüfungsrelevant : le prof insiste |
| `??` | Question ou pas compris |
| `==Begriff==` | Terme allemand, pour le glossaire |
| `[[Concept]]` | Concept, à créer après le cours |
| `->` | Conséquence |
| `<-` | Cause |
| `≠` | Opposition, à ne pas confondre |

## Questions

- **Questions de compréhension** : dans les concepts, cas, penseurs, sources et méthodes.
- **Questions de synthèse** : dans les thèmes (relient plusieurs concepts).
- **U-Fragen** : dans leur propre note `UF`. Pastilles dans le titre après test : 🟢 su · 🟠 hésitant · 🔴 pas su. 🎓 = réponse du prof.

Format d'une question (encadré replié) :

```
> [!question]- Question
> Réponse
```

## Règles d'édition

- **Templates : toujours en mode source.** Ne jamais modifier leurs propriétés via l'affichage « Propriétés » (risque de corrompre `{{date}}`).
- **Sections vides** : les effacer quand elles ne s'appliquent pas.
- **Rien sur le service** : le site est public. Exemples militaires généraux et anonymes uniquement (ni unité, ni lieu, ni date).
- **Pas de PDF dans le vault** : les sources restent dans Zotero / kDrive.
