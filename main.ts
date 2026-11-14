// agency-poem-01 entry (Node 22, standard library only).
// Writes one fixed poem about agency to /output/entry.txt.
// The poem is a constant: the same bytes on every run, no network, no input.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// "The Wrong Bread" — agency is not the flawless execution of a choice,
// but the freedom to make a small wrong one yourself and keep going.
const POEM = [
  'I gave it my mornings first —',
  'the lists, the messages, the small choices of the day.',
  'It answered faster than I could ask.',
  'Every answer right. And none of them mine.',
  '',
  'So tonight I walked to the shop myself,',
  'bought the wrong bread, carried it home through the rain.',
  'The bag tore at one corner. I laughed —',
  'out loud, at no one, for no reason at all.',
  '',
  'That was all of it: the wet bread,',
  'the wrong choice, and the choosing.',
  'A hand still free enough to get it wrong.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
