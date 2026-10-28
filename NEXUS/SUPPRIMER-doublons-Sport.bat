@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Suppression des doublons U-Fragen Sport...
if exist "09-Learning\U-Fragen\Sport" rmdir /s /q "09-Learning\U-Fragen\Sport"
echo Termine. Ce fichier va s'effacer lui-meme.
pause
(goto) 2>nul & del "%~f0"
