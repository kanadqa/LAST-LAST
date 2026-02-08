@echo off
setlocal

REM Always run from repository root (folder where this .bat is located)
cd /d "%~dp0"

set "PORT=4173"
set "URL=http://localhost:%PORT%/index.html?view=capital"

echo [LAST-LAST] Starting local server on port %PORT%...

where py >nul 2>nul
if %ERRORLEVEL%==0 (
  start "LAST-LAST server" cmd /k "py -3 -m http.server %PORT%"
) else (
  where python >nul 2>nul
  if %ERRORLEVEL%==0 (
    start "LAST-LAST server" cmd /k "python -m http.server %PORT%"
  ) else (
    echo Python not found. Please install Python 3 and add it to PATH.
    echo Download: https://www.python.org/downloads/
    pause
    exit /b 1
  )
)

timeout /t 1 >nul
start "" "%URL%"

echo Opened: %URL%
echo To stop the server, close the "LAST-LAST server" window.

endlocal
