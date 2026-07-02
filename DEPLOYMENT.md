# Deployment Setup

This repo includes two GitHub Actions workflows under `.github/workflows/`:

- **`ci.yml`** — runs on every push/PR to `main`: installs dependencies, lints, type-checks, and builds the project. No setup required, works immediately.
- **`deploy.yml`** — runs after CI succeeds on `main` (or manually via the Actions tab) and deploys to Vercel. Requires the secrets below.

## One-time setup for Vercel deploys

1. Create a project on [vercel.com](https://vercel.com) and link it to this GitHub repo (or run `vercel link` locally from the project folder — this is the fastest way to get the IDs below).
2. In Vercel, go to **Account Settings → Tokens** and create a token. This is your `VERCEL_TOKEN`.
3. After `vercel link`, find your org/project IDs in the generated `.vercel/project.json` file — these are `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`.
4. In your GitHub repo, go to **Settings → Secrets and variables → Actions** and add:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
5. Push to `main` — CI runs first, then the deploy workflow picks up automatically. You can also trigger a deploy manually from the **Actions** tab using "Run workflow" on `Deploy to Vercel`.

If you'd rather not use GitHub Actions for deployment, Vercel's own GitHub integration (Project → Settings → Git) will auto-deploy on push without any of the above — in that case you can simply delete `deploy.yml` and keep `ci.yml` for checks only.

## Known TODOs before going live

- `lib/constants.ts` → `HOSPITAL_INFO.whatsappNumber` / `whatsapp` is a placeholder (`919876543210`). The hospital's listed phone (`0217-2727224`) is a landline and can't receive WhatsApp messages — replace this with a real WhatsApp-enabled mobile number.
- `lib/constants.ts` → `DOCTORS[].imageUrl` is left unset, so doctor cards render an initials monogram. Once real headshots are available, add `imageUrl: "/images/doctors/<file>.jpg"` to each doctor and drop the photo into `public/images/doctors/`.
- `app/layout.tsx` → `HOSPITAL_STRUCTURED_DATA.url` is set to `https://deephospital.in` — update if the live domain differs.
