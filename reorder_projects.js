import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/components/Work.tsx');
const content = fs.readFileSync(filePath, 'utf8');

const startMarker = 'const projects = [';
const endMarker = '];\n\ntype Project';
let startIndex = content.indexOf(startMarker) + startMarker.length;
let endIndex = content.indexOf(endMarker);

// Handle CRLF or subtle spacing variations
if (endIndex === -1) {
  const endMarkerCRLF = '];\r\n\r\ntype Project';
  endIndex = content.indexOf(endMarkerCRLF);
}
if (endIndex === -1) {
    // Fallback search
    const endMarkerSimple = '];';
    endIndex = content.indexOf(endMarkerSimple, startIndex);
}

if (startIndex === -1 || endIndex === -1) {
    console.error('Markers not found', {startIndex, endIndex});
    process.exit(1);
}

const projectsStr = content.substring(startIndex, endIndex);

// Split projects into blocks. Each block starts with '  {'
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
  } else {
      console.warn(`Warning: Could not find project with title "${title}"`);
  }
});

blocks.forEach((block, index) => {
  if (!used.has(index)) {
    reordered.push(block);
  }
});

let newProjectsContent = reordered.join('').trim();
if (newProjectsContent && !newProjectsContent.endsWith(',')) {
    // Ensure the last comma is there if splitting removed it or for consistency
    // But join('') should preserve it if it was in the blocks.
}

const newFileContent = content.substring(0, startIndex) + '\n' + newProjectsContent + '\n' + content.substring(endIndex);

fs.writeFileSync(filePath, newFileContent, 'utf8');
console.log('Successfully reordered projects in Work.tsx');
