$urls = @(
    "https://raw.githubusercontent.com/Leaflet/Leaflet/main/dist/images/marker-icon.png",
    "https://raw.githubusercontent.com/Leaflet/Leaflet/main/dist/images/marker-icon-2x.png",
    "https://raw.githubusercontent.com/Leaflet/Leaflet/main/dist/images/marker-shadow.png"
)

foreach ($url in $urls) {
    $fileName = Split-Path $url -Leaf
    $outputPath = Join-Path "public/images" $fileName
    Invoke-WebRequest -Uri $url -OutFile $outputPath
    Write-Host "Downloaded $fileName"
} 