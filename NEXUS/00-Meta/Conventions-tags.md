---
title: Conventions de tags
---

Les tags servent à **filtrer** : sur le site, cliquer sur un tag affiche toutes les notes qui le portent. Ils sont hiérarchiques (`cours/pw`). Chaque note porte au moins un tag `type/` et un tag `cours/`.

## Type de note

| Tag | Type |
|---|---|
| `type/brute` | Note brute |
| `type/ufragen` | U-Fragen |
| `type/concept` | Concept |
| `type/theme` | Thème |
| `type/penseur` | Penseur |
| `type/cas` | Cas |
| `type/methode` | Méthode |
| `type/source` | Source |
| `type/course-map` | Course Map |
| `type/examen` | Page d'examen |

## Cours

`cours/pw` · `cours/prosem` · `cours/milsoz` · `cours/milpsy` · `cours/lead` · `cours/vwl` · `cours/gesch` · `cours/dc` · `cours/engl` · `cours/sport`

Les codes sont les mêmes que dans les noms de fichiers (voir [[Standards-de-note]]). Une note qui sert à plusieurs cours porte plusieurs tags `cours/`.

## Semestre

`sem/hs26`, `sem/fs27`, `sem/hs27`… (HS = semestre d'automne, FS = semestre de printemps)

## Examen

`exam/basis-2027-b1` · `exam/basis-2027-b2`

## Ce qui n'est PAS un tag

- **Le statut** d'une note brute est une **propriété** (`statut: brouillon` → `traitee`), pas un tag : il ne doit pas encombrer la page des tags du site.
- **Les dates** sont des propriétés (`date`, `periode`, `dates`, `annee`).
