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
