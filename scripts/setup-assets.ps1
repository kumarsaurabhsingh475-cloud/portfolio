# Copy resume and profile image into the portfolio public folder
$ProjectRoot = Split-Path $PSScriptRoot -Parent
$Public = Join-Path $ProjectRoot "public"

New-Item -ItemType Directory -Force -Path $Public | Out-Null

$ResumeSource = "d:\Personal\Saurabh_Kumar_Java_2.5YOE.pdf"
if (Test-Path $ResumeSource) {
  Copy-Item $ResumeSource (Join-Path $Public "resume.pdf") -Force
  Write-Host "Copied resume.pdf"
} else {
  Write-Warning "Resume not found at $ResumeSource"
}

$ProfileCandidates = @(
  "d:\Personal\profile.png",
  "d:\Personal\profile.jpg",
  "d:\Personal\photo.png",
  "d:\Personal\saurabh.png"
)
$copied = $false
foreach ($p in $ProfileCandidates) {
  if (Test-Path $p) {
    Copy-Item $p (Join-Path $Public "profile.png") -Force
    Write-Host "Copied profile from $p"
    $copied = $true
    break
  }
}
if (-not $copied) {
  Write-Warning "Add your headshot as public/profile.png (use the photo you uploaded for this project)"
}

$ProjectBanners = @(
  @{ Source = "d:\Personal\WorkED.svg"; Dest = "WorkED.svg" },
  @{ Source = "d:\Personal\zep360.svg"; Dest = "zep360.svg" },
  @{ Source = "d:\Personal\operations-hub.png"; Dest = "operations-hub.png" },
  @{ Source = "d:\Personal\WorkED-ops.png"; Dest = "operations-hub.png" },
  @{ Source = "d:\Personal\inn4smart.png"; Dest = "inn4smart.png" },
  @{ Source = "d:\Personal\Inn4Smart.png"; Dest = "inn4smart.png" }
)
foreach ($banner in $ProjectBanners) {
  if (Test-Path $banner.Source) {
    Copy-Item $banner.Source (Join-Path $Public $banner.Dest) -Force
    Write-Host "Copied project banner $($banner.Dest)"
  }
}

if (Test-Path (Join-Path $ProjectRoot "package.json")) {
  Push-Location $ProjectRoot
  npm run banners:prepare 2>$null
  Pop-Location
}
