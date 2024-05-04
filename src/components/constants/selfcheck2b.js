export const chart = [
  {
    index: 1,
    formula: "",
    imperial: [
      { index: 1, material: "Mild Steel", cs: "80 ft/min" },
      { index: 2, material: "Tool Steel", cs: "60 ft/min" },
      { index: 3, material: "Stainless Steel", cs: "50 ft/min" },
      { index: 4, material: "Cast Iron", cs: "80 ft/min" },
      { index: 5, material: "Copper and Alloys of Copper", cs: "200 ft/min" },
      {
        index: 6,
        material: "Aluminum and Alloys of Aluminum",
        cs: "300 ft/min",
      },
    ],
  },
  {
    index: 1,
    formula: "",
    metric: [
      { index: 1, material: "Mild Steel", cs: "27 m/min" },
      { index: 2, material: "Tool Steel", cs: "20 m/min" },
      { index: 3, material: "Stainless Steel", cs: "17 m/min" },
      { index: 4, material: "Cast Iron", cs: "27 m/min" },
      { index: 5, material: "Copper and Alloys of Copper", cs: "67 m/min" },
      {
        index: 6,
        material: "Aluminum and Alloys of Aluminum",
        cs: "100 m/min",
      },
    ],
  },
];

export const activity = [
  {
    index: 1,
    instruction: "Calculate the RPM for the following materials in inch sizes:",
    problem: {
      1: {
        material: 'Material: Mild steel round bar 3/8" diameter',
        ans: "N/A",
      },
      2: { material: 'Material: Copper round bar 5/8" diameter', ans: "N/A" },
      3: { material: 'Material: Aluminum round bar 1/4" diameter', ans: "N/A" },
      4: {
        material: 'Material: Cast iron round bar 3/4" diameter',
        ans: "N/A",
      },
      5: {
        material: 'Material: Tool steel, drill bit 5/16" diameter',
        ans: "N/A",
      },
    },
  },
  {
    index: 2,
    instruction: "Calculate the RPM for the following materials in mm size:",
    materials: {
      1: {
        material: "Material: Mild steel round bar 10mm diameter",
        ans: "N/A",
      },
      2: { material: "Material: Copper round bar 25mm diameter", ans: "N/A" },
      3: { material: "Material: Aluminum round bar 16mm diameter", ans: "N/A" },
      4: { material: "Material: Cast iron round bar 8mm diameter", ans: "N/A" },
      5: {
        material: "Material: Tool steel round bar 14mm diameter",
        ans: "N/A",
      },
    },
  },
];
