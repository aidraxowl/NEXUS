---
title: "Courbes de coûts"
aliases:
  - Kostenkurven
  - Cost curves
  - Coût marginal
  - Grenzkosten
  - Coût moyen
  - Durchschnittskosten
  - Coûts fixes et variables
  - Betriebsoptimum
tags:
  - type/concept
  - cours/vwl
  - exam/basis-2027-b2
---

> [!abstract] L'essentiel
> **Définition :** les coûts totaux (K) se composent de coûts **fixes** (FK, indépendants de la quantité) et **variables** (VK) ; on en tire les coûts **moyens** (DFK, DVK, DK = K/Q) et le coût **marginal** (GK = ΔK/ΔQ, coût d'une unité de plus).
> **Pourquoi c'est important :** ces courbes déterminent l'offre de l'entreprise (V08) ; à l'examen, il faut savoir compléter un tableau de coûts et dessiner GK, DK, DVK, DFK.
> **Exemple :** limonadier avec FK = 3 € : le coût moyen est minimal (≈ 1,30 €) vers 5–6 verres, exactement là où le coût marginal croise le coût moyen.

^essentiel

## Explication
- **Intuition** : les coûts fixes se « diluent » quand on produit plus ; les coûts variables, eux, augmentent de plus en plus vite à cause du [[Fonction de production|produit marginal décroissant]]. La somme des deux effets donne un coût moyen en U.
- **Formules** :

| Grandeur | Allemand | Formule | Forme de la courbe |
|---|---|---|---|
| Coûts fixes | ==fixe Kosten== (FK) | indépendants de Q | horizontale |
| Coûts variables | ==variable Kosten== (VK) | dépendent de Q | croissante |
| Coûts totaux | ==Gesamtkosten== (K) | K = FK + VK | croissante, de plus en plus raide |
| Coût fixe moyen | DFK | FK / Q | toujours **décroissante** (hyperbole) |
| Coût variable moyen | DVK | VK / Q | croissante (après un éventuel creux) |
| Coût moyen total | ==Durchschnittskosten== (DK) | K / Q = DFK + DVK | **en U** |
| Coût marginal | ==Grenzkosten== (GK) | ΔK / ΔQ | finit par **croître** |

- **Forme en U du DK** : pour Q faible, DK est élevé (FK répartis sur peu d'unités) ; il baisse d'abord parce que DFK chute ; au-delà d'un seuil, la hausse du DVK l'emporte et DK remonte.
- **Optimum d'exploitation** (==Betriebsoptimum==, ==effiziente Betriebsgrösse==, *efficient scale*) : quantité qui minimise DK (le creux du U).
- **Relation GK–DK** (!!) :
  - GK < DK -> DK **baisse** ; GK > DK -> DK **monte** ;
  - donc GK coupe DK **en son minimum** (et, de même, DVK en son minimum).
  - Analogie : une moyenne de notes ; une nouvelle note inférieure à la moyenne la fait baisser, une note supérieure la fait monter.
- **Exemple limonade** (FK = 3) :

| Q | K | DFK | DVK | DK | GK |
|---|---|---|---|---|---|
| 1 | 3,30 | 3,00 | 0,30 | 3,30 | 0,30 |
| 3 | 4,50 | 1,00 | 0,50 | 1,50 | 0,70 |
| 5 | 6,50 | 0,60 | 0,70 | 1,30 | 1,10 |
| 6 | 7,80 | 0,50 | 0,80 | 1,30 | 1,30 |
| 8 | 11,00 | 0,38 | 1,00 | 1,38 | 1,70 |
| 10 | 15,00 | 0,30 | 1,20 | 1,50 | 2,10 |

- **Courbes « typiques »** (exemple du boulanger de bretzels, FK = 2) : GK commence par **baisser** (1,00 -> 0,40 : les premiers inputs se complètent) puis augmente ; DK minimal ≈ 0,95 vers 7–8 unités. Trois propriétés à retenir : GK finit par croître ; DK en U ; GK coupe DK à son minimum.
- **Horizon** : à court terme, certains coûts sont fixes ; à long terme, tous sont variables ([[Rendements d'échelle]]).

## Exemples
- **Militaire :** un centre d'instruction a des coûts fixes élevés (infrastructures, simulateurs) ; former plus de participants fait baisser le coût moyen par participant, jusqu'au point où il faut ajouter des formateurs et des créneaux de plus en plus coûteux.
- **Civil :** une compagnie aérienne : coûts fixes (avion, équipage) et coût marginal d'un passager très faible tant que l'avion n'est pas plein.

## Forces / Limites
**Forces**
- Un seul tableau permet de dériver toutes les courbes et de trouver l'optimum d'exploitation.
- Prépare la règle de décision de l'entreprise en concurrence (prix = coût marginal, V08).

**Limites**
- Les courbes lisses sont une idéalisation ; dans la réalité, les coûts varient souvent par paliers.
- La distinction fixe/variable dépend de l'horizon considéré.

## Comparaison / Pièges
| Concept | Différence clé | ⚠️ Piège |
|---|---|---|
| Coût marginal vs coût moyen | coût d'**une unité de plus** vs coût **par unité** | calculer GK = K/Q |
| Notation ΔK | sur les slides, ΔK s'écrit « DK » | confondre avec DK = coût moyen |
| DFK | baisse **toujours** | dessiner un DFK en U |
| Optimum d'exploitation | minimum du **DK** | le placer au minimum du GK |
| [[Fonction de production]] | GK ↑ parce que produit marginal ↓ | inverser le lien de cause |
| Coûts fixes | ne changent pas avec Q à court terme | les intégrer dans le coût marginal |

## Liens
- **Thème :** [[Production et coûts]]
- **Proche de :** [[Fonction de production]], [[Rendements d'échelle]], [[Raisonnement marginal]], [[Offre]]
- **U-Fragen :** [[UF VWL V07]]

## Questions de compréhension
> [!question]- FK = 10 ; K(4) = 30 ; K(5) = 36. Calculez DFK, DVK, DK et GK pour Q = 5.
> DFK = 10/5 = 2 ; VK = 26 -> DVK = 5,2 ; DK = 36/5 = 7,2 ; GK = 36 − 30 = 6. Comme GK (6) < DK (7,2), le coût moyen est encore en train de baisser.

> [!question]- Pourquoi la courbe de coût marginal coupe-t-elle celle du coût moyen en son minimum ?
> Tant que le coût de l'unité supplémentaire est inférieur à la moyenne, il fait baisser la moyenne ; dès qu'il est supérieur, il la fait monter. Le point où la moyenne cesse de baisser et commence à monter est celui où GK = DK.

> [!question]- Un loyer augmente. Qu'arrive-t-il à GK, DK et à l'optimum d'exploitation ?
> Le loyer est un coût fixe : GK et DVK ne changent pas ; DFK et DK augmentent ; le minimum du DK se déplace vers une quantité plus grande (les FK plus élevés se répartissent mieux sur davantage d'unités).

## Sources
- Notes brutes : [[NB VWL V07 - 20261029]]
- Mankiw/Taylor, *Grundzüge der VWL*, 9e éd., chap. 5
