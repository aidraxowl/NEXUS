---
title: "Fragmentation partisane"
aliases:
  - Fragmentierungsgrad
  - Party system fragmentation
  - Nombre effectif de partis
  - ENP
tags:
  - type/concept
  - cours/pw
---

> [!abstract] L'essentiel
> **Définition :** Degré d'éclatement d'un système de partis, mesuré par le nombre **et la taille** des partis, le plus souvent par le nombre effectif de partis : ENP = 1 / Σ sᵢ² (Laakso/Taagepera 1979).
> **Pourquoi c'est important :** Une forte fragmentation va de pair avec des gouvernements moins stables, plus d'extrémisme, plus de dépenses et de dette et moins de biens publics.
> **Exemple :** 33-33-33 (ENP ≈ 3,06) est plus fragmenté que 45-45-10 (ENP ≈ 2,41), bien qu'il y ait trois partis dans les deux cas.

^essentiel

## Explication
- **Pourquoi pas le simple nombre de partis ?** Un minuscule parti ne pèse pas comme un grand ; trois partis égaux ont plus de force centrifuge que deux grands et un petit.
- **Trois manières de mesurer** :

| Mesure | Échelle | Principe |
|---|---|---|
| Sartori | Comptage | Seuls les partis **pertinents** : potentiel de coalition ou de chantage |
| Blondel (1968) | Ordinale | Bipartisme · deux et demi · multipartisme avec / sans parti dominant |
| ENP (Laakso/Taagepera 1979) | Intervalle | ENP = 1 / Σ sᵢ², sᵢ = part des sièges (en proportion) |

- **Calcul pas à pas** : convertir les sièges en proportions -> élever chaque part au carré -> additionner -> inverser.
- **Exemples (Abb. 7.3)** : 50-50 -> 2,00 · 33-33-33 -> 3,06 · 45-45-10 -> 2,41 · 45-20-15-10-10 -> 3,50 · 25-25-25-15-10 -> 4,50.
- **Valeurs réelles** : slide (QoG) USA 1,98 · FRA 2,84 · GER 3,51 · SUI 4,90 · NLD 5,72 · BEL 7,84 ; livre (Bértoa 2025) DE 1976 2,36 -> 2025 5,78, Weimar 6,1–7,1, AT 4,1, CH 2023 5,1.
- **Effets de la fragmentation** :

| Domaine | Effet | Mécanisme / auteur |
|---|---|---|
| Stabilité | Gouvernements moins durables | Atomisation (Sartori ; Mainwaring/Scully) |
| Extrémisme | Partis extrémistes favorisés | Lijphart 1977 ; dynamique centrifuge |
| Formation du gouvernement | Négociations longues, coalitions moins probables | Strøm et al. 2008 ; ex. Belgique |
| Jeunes démocraties présidentielles | Gouvernement divisé -> blocage -> effondrement possible | Mainwaring 1993 |
| Ministères et dépenses | Petits partis « faiseurs de rois » -> trop de postes -> dépenses ↑ | Zünglein an der Waage |
| Dette | Plus de partis dans la coalition, plus de ministres, mandat court -> déficits ↑ | Roubini/Sachs 1989 |
| Biens publics | Coalition gagnante minimale plus petite -> cibler un groupe -> moins de biens publics | [[Théorie du sélectorat]] |
| Violence | ENP ↑ -> attentats ↑ (États indiens) ; extrémistes > 15 % -> troubles | Piazza 2010 ; Powell 1982 |

- **Nuance** : Lijphart montre que les démocraties consensuelles (beaucoup de partis + PR) font mieux sur environnement, inflation, chômage -> la fragmentation n'est pas mauvaise en soi.

## Exemples
- **Militaire :** dans un parlement très fragmenté, un petit parti pivot peut monnayer son vote sur un programme d'armement contre un ministère ou une concession locale.
- **Civil :** Conseil national 2023 (200 sièges : SVP 62, PS 41, Centre 29, PLR 28, Verts 23, PVL 10, autres 7) -> Σ sᵢ² ≈ 0,195 -> ENP ≈ 5,1.

## Forces / Limites
**Forces**
- Simple, calculable pour tout pays, échelle d'intervalle -> idéale pour la statistique.

**Limites**
- Unidimensionnelle : ne voit pas la **distance idéologique** ni les partis antisystème.
- Résultats différents selon base (sièges ou voix), source et année.
- Causalité incertaine : des clivages profonds peuvent causer à la fois fragmentation et violence (variable confondante).

## Comparaison / Pièges
| Concept | Différence clé | ⚠️ Piège |
|---|---|---|
| Nombre de partis | Ignore la taille | Ne jamais mesurer la fragmentation par le simple nombre de partis |
| [[Système de partis]] (Sartori) | Ajoute la distance idéologique | Même ENP ≠ même type |
| Disproportionnalité (Gallagher) | Écart voix–sièges | Mesure le système électoral, pas le système de partis |
| 33-33-33 = 3,06 | Arrondi à 0,33 | Avec ⅓ exact : 3,00 |

## Liens
- **Thème :** [[Partis et systèmes de partis]]
- **Proche de :** [[Système de partis]], [[Théorie du sélectorat]], [[Bien public]], [[Démocratie consensuelle]], [[Biais de variable omise]]
- **Penseur :** [[Giovanni Sartori]], [[Arend Lijphart]]
- **U-Fragen :** [[UF PW V06]]

## Questions de compréhension
> [!question]- Calcule l'ENP pour 45-45-10.
> 0,45² + 0,45² + 0,10² = 0,2025 + 0,2025 + 0,01 = 0,415 -> ENP = 1 / 0,415 ≈ 2,41.

> [!question]- Pourquoi des systèmes plus fragmentés produisent-ils moins de biens publics ?
> Avec beaucoup de partis, un parti peut rester au gouvernement avec une petite part des voix : il cible un groupe social (biens privés) plutôt que d'offrir des biens publics à une majorité, comme doit le faire un parti en bipartisme (> 50 %).

> [!question]- Formule une hypothèse reliant fragmentation et dette publique et un test.
> Plus l'ENP du gouvernement est élevé, plus la dette augmente (chaque partenaire exige des dépenses pour sa clientèle, personne n'assume le coût total). Test : panel de cantons ou Länder (contrôle de l'hétérogénéité nationale), dette comme variable dépendante, ENP comme indépendante, contrôles (conjoncture, démographie), effets fixes.

## Sources
- Bernauer et al. 2025 (Kap. 7.2.1, 7.3)
- [[NB PW V06 - 20261026]]
