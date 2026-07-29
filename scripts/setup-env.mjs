import { existsSync, copyFileSync } from 'node:fs';

// Change to '.env' if you prefer that over Next's .env.local convention
const TARGET = '.env.local';
const SOURCE = '.env.example';

if (existsSync(TARGET)) {
  console.log(`✓ ${TARGET} already exists — leaving it alone.`);
} else if (existsSync(SOURCE)) {
  copyFileSync(SOURCE, TARGET);
  console.log(`✓ Created ${TARGET} from ${SOURCE}. Add your Garchi API key.`);
} else {
  console.warn(`! ${SOURCE} not found — skipping env setup.`);
}