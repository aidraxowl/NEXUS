---
title: "Maximisation du profit"
aliases:
  - Gewinnmaximierung
  - Profit maximization
  - Grenzerlös
  - Recette marginale
  - Durchschnittserlös
  - Recette moyenne
  - Preisnehmer
tags:
  - type/concept
  - cours/vwl
  - exam/basis-2027-b2
---

> [!abstract] L'essentiel
> **Définition :** une entreprise maximise son profit (E − K) en produisant la quantité où la **recette marginale** (GE) égale le **coût marginal** (GK). En concurrence parfaite, la firme est preneuse de prix : chaque unité rapporte le prix, donc **P = DE = GE** et la règle devient **P = GK**.
> **Pourquoi c'est important :** c'est la règle de décision de toute entreprise (monopole compris) ; en concurrence parfaite, elle fait de la courbe de coût marginal la courbe d'offre de la firme.
> **Exemple :** lait à 6 € le litre : le profit est maximal (7 €) à Q = 5, là où le coût marginal atteint 6 €.

^essentiel

## Explication
- **Firme preneuse de prix** (==Preisnehmer==, ==Mengenanpasser==) : trop petite pour influencer le prix ([[Structure de marché]]). Pour elle, la demande est une droite **horizontale** au prix du marché (d), alors que la demande de la branche (D) reste décroissante.
- **Recettes** :

| Grandeur | Allemand | Formule | En concurrence parfaite |
|---|---|---|---|
| Recette totale | ==Gesamterlös== (E) | P × Q | droite depuis l'origine, pente P |
| Recette moyenne | ==Durchschnittserlös== (DE) | E / Q | = P |
| Recette marginale | ==Grenzerlös== (GE) | ΔE / ΔQ | = P |

- **Règle** (application du [[Raisonnement marginal]]) :
  - GE > GK : l'unité suivante rapporte plus qu'elle ne coûte -> **augmenter** Q ;
  - GE < GK : la dernière unité coûte plus qu'elle ne rapporte -> **réduire** Q ;
  - GE = GK : profit maximal.
- **Graphe des totaux** : E(Q) est une droite, K(Q) une courbe convexe ; le profit est l'écart vertical E − K, maximal là où la tangente à K(Q) est parallèle à E(Q) (même pente : GK = GE).
- **Graphe des unitaires** : la droite P = DE = GE coupe la courbe GK ([[Courbes de coûts]]) en Q*.
- **Exemple du cours** (P = 6 €) :

| Q | E | K | π | GK |
|---|---|---|---|---|
| 3 | 18 | 12 | 6 | 4 |
| 4 | 24 | 17 | 7 | 5 |
| **5** | 30 | 23 | **7** | **6** |
| 6 | 36 | 30 | 6 | 7 |
| 7 | 42 | 38 | 4 | 8 |

  (Q = 0 : K = 3, π = −3 -> coûts fixes = 3 €.)
- **Conséquence** : à chaque prix, la firme produit là où P = GK -> la courbe GK (au-dessus du seuil de fermeture) **est** sa courbe d'[[Offre]] ([[Fermeture et sortie du marché]]).

## Exemples
- **Militaire :** un fournisseur de rations parmi des dizaines d'autres ne fixe pas le prix d'achat de l'armée ; il décide seulement combien de lots livrer, jusqu'à ce que le coût du lot suivant atteigne le prix.
- **Civil :** un producteur de blé vend au prix du marché ; il étend ses surfaces tant que le coût d'une tonne de plus reste sous ce prix.

## Forces / Limites
**Forces**
- Une seule règle (GE = GK) valable pour toutes les structures de marché.
- Relie directement les coûts (V07) à l'offre.

**Limites**
- Suppose que la firme connaît ses coûts marginaux et vise uniquement le profit.
- Dans un tableau discret, l'égalité exacte peut manquer : on produit la dernière unité pour laquelle GE ≥ GK.

## Comparaison / Pièges
| Concept | Différence clé | ⚠️ Piège |
|---|---|---|
| GE = P | vrai **seulement** en concurrence parfaite | l'appliquer au monopole (GE < P, V10) |
| Maximum du profit vs minimum du DK | Q* est là où P = GK, pas au creux du DK | produire à l'optimum d'exploitation quel que soit le prix |
| Profit total vs profit par unité | maximiser π = (P − DK) × Q, pas P − DK | choisir Q où l'écart P − DK est le plus grand |
| Deux Q au même π | GE = GK tranche (Q = 5 dans l'exemple) | répondre Q = 4 « parce que le profit est déjà de 7 » |
| d vs D | d horizontale (firme), D décroissante (branche) | dessiner une demande horizontale pour tout le marché |

## Liens
- **Thème :** [[Entreprise en concurrence parfaite]]
- **Proche de :** [[Raisonnement marginal]], [[Courbes de coûts]], [[Offre]], [[Structure de marché]], [[Fermeture et sortie du marché]]
- **U-Fragen :** [[UF VWL V08]]

## Questions de compréhension
> [!question]- Pourquoi, en concurrence parfaite, la recette marginale est-elle égale au prix ?
> Parce que la firme est preneuse de prix : vendre une unité de plus ne fait pas baisser le prix, elle rapporte donc exactement P.

> [!question]- P = 15 CHF. K = 40 (Q = 3), 52 (Q = 4), 66 (Q = 5), 82 (Q = 6). Quelle quantité choisir ?
> GK = 12 (4e unité), 14 (5e), 16 (6e). Produire tant que GK ≤ 15 : Q = 5. Contrôle : π(4) = 60 − 52 = 8 ; π(5) = 75 − 66 = 9 ; π(6) = 90 − 82 = 8.

> [!question]- Le prix du marché monte. Que fait la firme et pourquoi cela donne-t-il une offre croissante ?
> La droite de prix monte et coupe la courbe GK plus à droite : la firme produit davantage. Comme GK est croissant, une quantité plus grande n'est offerte qu'à un prix plus élevé.

## Sources
- Notes brutes : [[NB VWL V08 - 20261105]]
- Mankiw/Taylor, *Grundzüge der VWL*, 9e éd., chap. 6
