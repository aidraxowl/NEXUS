@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Suppression des 13 anciennes notes fusionnees...
if exist "02-Concepts\Élasticité-prix de la demande.md" del /q "02-Concepts\Élasticité-prix de la demande.md"
if exist "02-Concepts\Élasticité-prix de l'offre.md" del /q "02-Concepts\Élasticité-prix de l'offre.md"
if exist "02-Concepts\Élasticité-revenu de la demande.md" del /q "02-Concepts\Élasticité-revenu de la demande.md"
if exist "02-Concepts\Bien normal et bien inférieur.md" del /q "02-Concepts\Bien normal et bien inférieur.md"
if exist "02-Concepts\Substitut et complément.md" del /q "02-Concepts\Substitut et complément.md"
if exist "02-Concepts\Contrainte budgétaire.md" del /q "02-Concepts\Contrainte budgétaire.md"
if exist "02-Concepts\Courbe d'indifférence.md" del /q "02-Concepts\Courbe d'indifférence.md"
if exist "02-Concepts\Circuit économique.md" del /q "02-Concepts\Circuit économique.md"
if exist "02-Concepts\Préconditions de la révolution industrielle.md" del /q "02-Concepts\Préconditions de la révolution industrielle.md"
if exist "02-Concepts\Système de fabrique.md" del /q "02-Concepts\Système de fabrique.md"
if exist "02-Concepts\Théorie des stades.md" del /q "02-Concepts\Théorie des stades.md"
if exist "04-Penseurs-et-Oeuvres\Adam Smith 1.md" del /q "04-Penseurs-et-Oeuvres\Adam Smith 1.md"
if exist "04-Penseurs-et-Oeuvres\Timothy Mitchell.md" del /q "04-Penseurs-et-Oeuvres\Timothy Mitchell.md"
echo.
echo Termine. Ce fichier va s'effacer lui-meme.
pause
(goto) 2>nul & del "%~f0"
