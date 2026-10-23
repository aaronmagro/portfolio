import type { ImageMetadata } from 'astro';

// Drop a photo into src/assets/profile/ and it is picked up by the site and the CV.
const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/profile/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

export const profilePhoto: ImageMetadata | undefined = Object.values(photos)[0]?.default;
