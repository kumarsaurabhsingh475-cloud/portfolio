# Run after pulling CSS fix — reinstalls Tailwind v3 + PostCSS
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root

Write-Host "Removing old dependencies..."
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

Write-Host "Installing packages..."
npm install

Write-Host "Done. Start dev server: npm run dev"
