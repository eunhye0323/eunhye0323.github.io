// Colors are chosen for semantic association with each tech-stack group
// (see comments below), not purely for CVD-safety ordering. Real-world
// co-occurring pairs (the actual category combinations used on project
// cards, not all C(6,2) combinations) were checked against the dataviz
// skill's validator (scripts/validate_palette.js):
//   genai↔spatial, genai↔applied, genai↔vision3d, spatial↔vision3d  → PASS
//   hci↔simulation   (BCI Neurofeedback Game card)                  → CVD FAIL (protan ΔE 3.2)
//   spatial↔applied  (Hi! Medi, Baekja/Chaekgado cards)              → normal-vision ΔE 13.2 (floor 15)
// Both shortfalls sit in the skill's documented 6–8 "warn" band, legal
// only with secondary encoding — satisfied here because every tag always
// renders its category name as text, never color alone.
const GROUP_COLORS: Record<string, string> = {
  genai: 'bg-[#4a3aa7]/10 text-[#4a3aa7]', // violet — generative AI / foundation models
  vision3d: 'bg-[#1baf7a]/10 text-[#1baf7a]', // aqua — 3D vision / neural rendering
  spatial: 'bg-[#e87ba4]/10 text-[#e87ba4]', // magenta — XR / spatial computing
  simulation: 'bg-[#008300]/10 text-[#008300]', // green — simulation / interactive systems
  hci: 'bg-[#eb6834]/10 text-[#eb6834]', // orange — human-computer interaction
  applied: 'bg-[#e34948]/10 text-[#e34948]', // red — applied AI / healthcare
};

const CATEGORY_GROUP: Record<string, keyof typeof GROUP_COLORS> = {
  // 1. Generative AI & Foundation Models
  'Generative AI': 'genai',
  'Diffusion Model': 'genai',
  'Video Diffusion': 'genai',
  LLM: 'genai',
  RAG: 'genai',
  'Multi-Agent': 'genai',
  'Foundation Model': 'genai',

  // 2. 3D Vision & Neural Rendering
  '3D Gaussian Splatting': 'vision3d',
  'Gaussian Splatting': 'vision3d', // alias: bare spelling used pre-normalization
  'Novel View Synthesis': 'vision3d',
  'Neural Rendering': 'vision3d',
  '3D Reconstruction': 'vision3d',
  'Structure from Motion': 'vision3d',
  COLMAP: 'vision3d',
  'Depth Estimation': 'vision3d',

  // 3. Spatial Computing & XR
  AR: 'spatial',
  XR: 'spatial',
  Metaverse: 'spatial',
  'Digital Twin': 'spatial',
  'Media Wall': 'spatial',
  'Immersive Media': 'spatial',

  // 4. Human-Computer Interaction
  HCI: 'hci',
  Accessibility: 'hci',
  Haptics: 'hci',
  BCI: 'hci',
  Neurofeedback: 'hci',
  'User Study': 'hci',

  // 5. Applied AI
  'Medical Image': 'applied',
  'Healthcare AI': 'applied',
  Education: 'applied',
  'Education AI': 'applied', // alias
  'Cultural Heritage': 'applied',
  'Game AI': 'applied',

  // 6. Simulation & Interactive Systems
  Game: 'simulation',
  Simulation: 'simulation',
  'Virtual Agent': 'simulation',
  'Interactive Simulation': 'simulation',
  'Multi-Agent Simulation': 'simulation',
};

const FALLBACK_COLOR = 'bg-gray-100 text-slate-500';

export function categoryColor(category: string): string {
  const group = CATEGORY_GROUP[category];
  return group ? GROUP_COLORS[group] : FALLBACK_COLOR;
}
