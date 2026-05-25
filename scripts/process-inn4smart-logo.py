"""
Process inn4smart.jpg for dark portfolio cards:
- Keeps original logo shape (no redraw)
- Removes white background
- Lightens dark navy text/shapes so they read on dark UI
- Saves transparent inn4smart.png
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SRC = PUBLIC / "inn4smart.jpg"
OUT_PNG = PUBLIC / "inn4smart.png"


def alpha_from_white(r: int, g: int, b: int) -> int:
    m = min(r, g, b)
    if m >= 252:
        return 0
    if m >= 220:
        return int(255 * (252 - m) / 32)
    return 255


def theme_adjust(r: int, g: int, b: int) -> tuple[int, int, int]:
    """Original logo colors → readable on dark cards, same geometry."""
    # Gold / yellow brand mark
    if r > 160 and g > 120 and b < 140 and r >= g:
        return (
            min(255, int(r * 1.05)),
            min(255, int(g * 1.02)),
            min(255, int(b * 0.95)),
        )

    # Dark navy text & slate shapes → cool light slate (portfolio text tone)
    if r < 120 and g < 130 and b < 150:
        lum = (r + g + b) / 3
        t = max(0.0, min(1.0, (90 - lum) / 90))
        target_r, target_g, target_b = 168, 182, 198
        return (
            int(r + (target_r - r) * t * 0.82),
            int(g + (target_g - g) * t * 0.82),
            int(b + (target_b - b) * t * 0.82),
        )

    return r, g, b


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Missing {SRC}")

    img = Image.open(SRC).convert("RGBA")
    px = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            na = alpha_from_white(r, g, b)
            if na == 0:
                px[x, y] = (0, 0, 0, 0)
                continue
            nr, ng, nb = theme_adjust(r, g, b)
            px[x, y] = (nr, ng, nb, min(a, na))

    img.save(OUT_PNG, "PNG", optimize=True)
    print(f"Saved {OUT_PNG} ({w}x{h}) — original logo, theme-matched for dark UI")


if __name__ == "__main__":
    main()
