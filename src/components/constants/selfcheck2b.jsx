export const activity2b = [
  {
    index: 1,
    instruction: "Calculate the RPM for the following materials in inch sizes:",
    formula: <>\[RPM = \]\[cs * 4 \over diameter \]</>,
    measurementUnit: "English",
    problem: [
      {
        material: 'Material: Mild steel round bar 3/8" diameter',
        ans: <>\[RPM = \]\[80 * 4 \over 3/8\] \[= 853.33 rpm\]</>,
      },
      {
        material: 'Material: Copper round bar 5/8" diameter',
        ans: <>\[RPM = \]\[200 * 4 \over 5/8\] \[= 1'280 rpm\]</>,
      },
      {
        material: 'Material: Aluminum round bar 1/4" diameter',
        ans: <>\[RPM = \]\[300 * 4 \over 1/4\] \[= 4'800 rpm\]</>,
      },
      {
        material: 'Material: Cast iron round bar 3/4" diameter',
        ans: <>\[RPM = \]\[80 * 4 \over 3/4\] \[= 426.67 rpm\]</>,
      },
      {
        material: 'Material: Tool steel, drill bit 5/16" diameter',
        ans: <>\[RPM = \]\[60 * 4 \over 5/16 \] \[= 768 rpm\]</>,
      },
    ],
    tableData: [
      { material: "Mild Steel", cs: "80 ft/min" },
      { material: "Tool Steel", cs: "60 ft/min" },
      { material: "Stainless Steel", cs: "50 ft/min" },
      { material: "Cast Iron", cs: "80 ft/min" },
      { material: "Copper and Alloys of Copper", cs: "200 ft/min" },
      {
        material: "Aluminum and Alloys of Aluminum",
        cs: "300 ft/min",
      },
    ],
  },
  {
    index: 2,
    instruction: "Calculate the RPM for the following materials in mm size:",
    formula: <>\[RPM = \]\[cs * 1000 \over \pi * diameter \]</>,
    measurementUnit: "Metric",
    problem: [
      {
        material: "Material: Mild steel round bar 10mm diameter",
        ans: <></>,
      },
      { material: "Material: Copper round bar 25mm diameter", ans: <></> },
      { material: "Material: Aluminum round bar 16mm diameter", ans: <></> },
      { material: "Material: Cast iron round bar 8mm diameter", ans: <></> },
      {
        material: "Material: Tool steel round bar 14mm diameter",
        ans: <></>,
      },
    ],
    tableData: [
      { material: "Mild Steel", cs: "27 m/min" },
      { material: "Tool Steel", cs: "20 m/min" },
      { material: "Stainless Steel", cs: "17 m/min" },
      { material: "Cast Iron", cs: "27 m/min" },
      { material: "Copper and Alloys of Copper", cs: "67 m/min" },
      {
        material: "Aluminum and Alloys of Aluminum",
        cs: "100 m/min",
      },
    ],
  },
];
