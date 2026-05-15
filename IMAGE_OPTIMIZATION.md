# Image Optimization Guide

## Current Setup ✅

Your portfolio now includes:
- **Multiple quality levels**: 50, 75, 90 (lower quality for thumbnails, higher for detail views)
- **Modern formats**: AVIF and WebP (with PNG/JPG fallback)
- **Responsive device sizes**: 640px to 3840px
- **Long-term caching**: 1 year TTL for optimized images
- **Asset compression**: Enabled for all resources

## Optimization Strategies

### 1. Image Format Conversion
Convert your PNG/JPG files to modern formats for better compression:

```bash
# Using ImageMagick (install: brew install imagemagick)
mogrify -format webp -quality 80 public/portfolio/*.png
mogrify -format webp -quality 85 public/portfolio/*.jpg

# Using cwebp (install: brew install webp)
find public/portfolio -name "*.png" -exec cwebp -q 80 {} -o {}.webp \;
find public/portfolio -name "*.jpg" -exec cwebp -q 85 {} -o {}.webp \;
```

### 2. Image Compression (Recommended First Step)
```bash
# Compress PNG files
brew install optipng
optipng -o2 public/portfolio/*.png

# Compress JPG files
brew install jpegoptim
jpegoptim --max=85 public/portfolio/*.jpg

# Or use TinyPNG/TinyJPG online service for best quality
# Visit: https://tinypng.com/
```

### 3. Using Next.js Image Component (Already Implemented)

All images should use Next.js `Image` component:
```tsx
<Image
  src="/portfolio/image.png"
  alt="description"
  fill
  quality={75}  // Adjust based on use case
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>
```

**Quality Guidelines:**
- `quality={50}` - Thumbnails, grid view
- `quality={75}` - Modal images (current setting)
- `quality={90}` - Detail pages, hero images

### 4. Responsive Image Sizes
Update your portfolio images with proper `sizes` attribute:

```tsx
// For grid items (1/3 width on desktop)
sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"

// For full-width images
sizes="100vw"

// For sidebar images (1/4 width)
sizes="(max-width: 768px) 100vw, 25vw"
```

### 5. Lazy Loading (Automatic)
Next.js Image component automatically lazy-loads images below the fold:
```tsx
<Image
  src="/portfolio/image.png"
  alt="description"
  loading="lazy"  // Default for off-screen images
  // or
  priority       // For above-the-fold images
/>
```

### 6. Performance Monitoring

Check your site performance:
```bash
# Using Lighthouse CLI
npm install -g lighthouse
lighthouse https://your-site.com --view

# Check Core Web Vitals
# Visit: https://web.dev/measure/
```

## File Size Comparison (Typical)

| Format | Size | Quality |
|--------|------|---------|
| Original PNG | 2-5 MB | Lossless |
| Optimized PNG | 800KB-1.5MB | Lossless |
| JPG (q=85) | 200-400KB | Good |
| WebP (q=85) | 100-200KB | Good |
| AVIF (q=85) | 50-100KB | Excellent |

## Quick Win: Bulk Compress Images

Run this script to compress all portfolio images:

```bash
#!/bin/bash
cd public/portfolio

# Install tools if needed
# brew install optipng jpegoptim

# Compress PNG files
optipng -o2 *.png

# Compress JPG files  
jpegoptim --max=85 *.jpg

# Check file sizes before/after
ls -lh *.png *.jpg | awk '{print $9, $5}'
```

## Recommended Priority

1. ✅ **Next.js Config** - DONE (enables auto-optimization)
2. **Compress existing images** - Use optipng/jpegoptim
3. **Convert to WebP** - For ~30% size reduction
4. **Monitor performance** - Use Lighthouse
5. **Consider AVIF** - For newest browsers (~50% reduction vs PNG)

## Storage Savings Example

If you have 40 portfolio images averaging 1.5MB:
- **Original**: 60 MB
- **After compression**: 24 MB (60% reduction)
- **After WebP conversion**: 12 MB (80% reduction)
- **With AVIF**: 6-8 MB (87% reduction)

## Next Steps

1. Backup your portfolio images
2. Run compression on all images
3. Test the site thoroughly
4. Monitor build time (may increase slightly due to optimization)
5. Check mobile performance with slower connections

All your Image components already support these optimizations!
