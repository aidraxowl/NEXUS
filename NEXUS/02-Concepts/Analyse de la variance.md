---
title: "Analyse de la variance"
aliases:
  - Varianzanalyse
  - ANOVA
  - Test F
tags:
  - type/concept
  - cours/lead
---

> [!abstract] L'essentiel
> **Définition :** Test statistique qui compare les moyennes de plus de deux groupes en un seul test F : il met en rapport la variance entre les groupes et la variance à l'intérieur des groupes. Hypothèse nulle : toutes les moyennes sont égales.
> **Pourquoi c'est important :** Répéter des tests t entre toutes les paires de groupes gonfle le risque de rejeter l'hypothèse nulle à tort (inflation de l'erreur α) ; l'ANOVA l'évite. C'est le test qui fonde les résultats de Kelman.
> **Exemple :** Kelman compare l'adhésion d'un même groupe aux questionnaires I, II et III : sous contrôle des ressources, F = 5.8, p < 0.05 entre I et (II + III).

^essentiel

## Explication
- **Deux groupes** : test t. **k > 2 groupes** : des tests t répétés font monter la probabilité d'une erreur α (rejeter H0 alors qu'elle est vraie).
- **Test F** avec (k − 1) et (N − k) degrés de liberté : variance **entre** les groupes / variance **dans** les groupes. Plus F est grand, moins il est plausible que les groupes viennent de la même moyenne.
- **H0** : μ1 = μ2 = … = μk. **H1** : il existe au moins deux groupes i, j avec μi ≠ μj.
- Le test dit **qu'il y a** une différence, pas **où** ; Kelman ajoute donc des contrastes ciblés (I vs II + III, I + II vs III).
- Lien avec la **falsification** : on cherche à rejeter H0 ([[Hypothèse]]).
- **Lire p.** La slide traduit p < 0.05 par « moins de 5 % de probabilité que les moyennes soient identiques ». Ajout : c'est un raccourci. p est la probabilité d'obtenir des données au moins aussi extrêmes **si** H0 est vraie ; ce n'est pas la probabilité que H0 soit vraie.

## Exemples
- **Militaire :** comparer les résultats au tir de quatre sections instruites avec quatre méthodes différentes.
- **Civil :** comparer l'efficacité de trois médicaments et d'un placebo.

## Comparaison / Pièges
| Concept | Différence clé | ⚠️ Piège |
|---|---|---|
| Test t | Deux groupes | Pas de tests t en série pour k > 2 |
| Significativité | p < seuil (0.05, 0.01) | Significatif ≠ grand effet ; n.s. ≠ preuve d'égalité |
| [[Causalité]] | Une différence de moyennes | Elle n'est causale que si le design est expérimental |

## Liens
- **Thème :** [[Changement d'attitude]]
- **Proche de :** [[Hypothèse]] · [[Validité et fiabilité]] · [[Processus d'influence de Kelman]]
- **U-Fragen :** [[UF Lead V10]]

## Questions de compréhension
> [!question]- Pourquoi ne pas faire six tests t pour comparer quatre groupes ?
> Chaque test a son risque α ; en les multipliant, la probabilité de trouver au moins une différence « significative » par hasard augmente. Le test F teste tous les groupes à la fois.

> [!question]- Que signifie « F = 2.3, n.s. » pour le groupe « crédibilité » chez Kelman ?
> On ne peut pas rejeter l'hypothèse que l'adhésion est la même aux trois questionnaires : l'effet de l'internalisation tient dans le temps, comme prévu.

## Sources
- [[NB Lead V10 - 20261208]]
- Kelman (1958) ; introduction recommandée par le prof : statisticsbyjim.com, « F-tests in ANOVA »
