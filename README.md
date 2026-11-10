# Circle Studio · Think in Shapes

A bilingual English/Indonesian circle problem-solving studio for Grade 6.

24 original missions cover boundaries, hidden radii, shaded areas, comparisons, working backwards, and mixed problems. Interactive SVGs use a common viewBox and uniform aspect ratio. Slider geometry is computed from dimensions, not independently positioned circles.

## Learning behavior

- Optional three-step hints and worked solutions.
- Correct before revealing a solution: solved. Solution opened first: explored.
- Notes, language, current mission, and progress persist in browser localStorage.
- All missions remain open. No countdown or points penalty.
- Source references inform skill selection; exercises are original, not official competition questions.

## Development

Use the configured install helper for this Sites checkout. Run `npm run dev` through the managed preview service. Build with the Sites build helper, which retains the starter hosting integration.

## Checks

`node --experimental-strip-types scripts/check-geometry.mjs`

`node node_modules/typescript/bin/tsc --noEmit`

The geometry check verifies all 24 bilingual entries, all 18 numeric answers, all 13 diameter-slider positions, boundary invariance, radii, and numeric input formats.
