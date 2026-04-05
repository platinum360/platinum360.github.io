const fs = require('fs');
const crypto = require('crypto').webcrypto;

async function run() {
  const enc = fs.readFileSync('public/models/character.enc');
  const buffer = enc.buffer.slice(enc.byteOffset, enc.byteOffset + enc.byteLength);
  
  const passwordBuffer = new TextEncoder().encode("MyCharacter12");
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  const key = await crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["decrypt"]
  );

  const iv = new Uint8Array(buffer.slice(0, 16));
  const data = buffer.slice(16);
  
  try {
    const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
    // GLB format: 12 byte header, then JSON chunk.
    // chunk 0 length is at offset 12.
    const view = new DataView(decrypted);
    const jsonLen = view.getUint32(12, true);
    
    // Read the JSON
    const jsonBytes = new Uint8Array(decrypted, 20, jsonLen);
    const text = new TextDecoder("utf-8").decode(jsonBytes);
    const gltf = JSON.parse(text);
    
    console.log("Meshes:");
    gltf.meshes.forEach(m => console.log("- " + m.name));
    
    console.log("Materials:");
    gltf.materials.forEach(m => console.log("- " + m.name));
    
  } catch (e) {
    console.error("Error decrypting:", e);
  }
}
run();
