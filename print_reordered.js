import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/components/Work.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const startMarker = 'const projects = [';
const endMarker = '];\n\ntype Project';
let endIndex = content.indexOf(endMarker);
if (endIndex === -1) endIndex = content.indexOf('];\r\n\r\ntype Project');
if (endIndex === -1) endIndex = content.lastIndexOf('];');

const startIndex = content.indexOf(startMarker) + startMarker.length;
const projectsStr = content.substring(startIndex, endIndex);

const blocks = projectsStr.split(/(?=  \{)/).filter(b => b.trim().length > 0);

const order = [
  'Colossus Brand Promotion',
  'Plexilent: Branding',
  'Plexilent Catalog (2025)',
  'light+ Middle East Expo, Dubai',
  'Colossus Product Catalog (2025)',
  'Client:HDFC (2021)',
  'Client: Aptech (2021)',
  'Client: Fitup Life (2019)',
  'Everstar: Promotion',
  'Edelweiss: All Branding Collaterals',
  'Edelweiss: Blue Bindi Project (2021)',
  'Client: Union Living (2022)'
];

const reordered = [];
const used = new Set();

order.forEach(title => {
  const index = blocks.findIndex(b => b.includes(`title: "${title}"`));
  if (index !== -1) {
    reordered.push(blocks[index]);
    used.add(index);
  }
});

blocks.forEach((block, index) => {
  if (!used.has(index)) {
    reordered.push(block);
  }
});

console.log('---START_REORDERED---');
console.log(reordered.join('').trim());
console.log('---END_REORDERED---');
