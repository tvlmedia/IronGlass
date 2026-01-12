/* ===== LENS COMPARISON TOOL – COMPACT, COMPLETE ===== */
if (window.innerWidth < 768) document.body.classList.add("mobile-mode");

/* === SENSOR DATA (mm) – Fuji GFX Eterna 4K OG is baseline === */
const cameras = {
  "ARRI Alexa Mini LF": {
    "Open Gate": { w: 36.696, h: 25.542, label: "Open Gate" },
    "2.39:1": { w: 36.696, h: 15.312, label: "2.39:1 LF" },
    "4.3K LF 16:9": { w: 35.640, h: 20.047, label: "4.3K LF 16:9" },
    "16:9": { w: 31.680, h: 17.820, label: "16:9" },
    "3.4K S35": { w: 28.248, h: 18.166, label: "3.4K S35" },
    "3.2K S35 16:9": { w: 26.400, h: 14.850, label: "3.2K S35 16:9" },
    "2.8K LF 1:1": { w: 23.760, h: 23.760, label: "2.8K LF 1:1" },
    "2.8K S35 4:3": { w: 23.760, h: 17.820, label: "2.8K S35 4:3" },
    "2.8K S35 16:9": { w: 23.760, h: 13.365, label: "2.8K S35 16:9" }
  },
  "Arri Alexa Mini": {
    "Open Gate": { w: 28.248, h: 18.166, label: "Open Gate" },
    "3.2K": { w: 26.400, h: 14.850, label: "3.2K (16:9)" },
    "4K UHD": { w: 26.400, h: 14.850, label: "4K UHD (16:9)" },
    "4:3 2.8K": { w: 23.760, h: 17.820, label: "4:3 2.8K" },
    "HD": { w: 23.760, h: 13.365, label: "HD (16:9)" },
    "2K": { w: 23.661, h: 13.299, label: "2K (16:9)" },
    "HD Ana": { w: 31.680, h: 17.820, label: "HD Ana (16:9)" },
    "S16 HD": { w: 13.200, h: 7.425, label: "S16 HD (16:9)" }
  },
  "ARRI Alexa 35": {
    "4.6K 3:2 Open Gate": { w: 27.994, h: 19.221, label: "4.6K 3:2 Open Gate" },
    "4.6K 16:9": { w: 27.994, h: 15.746, label: "4.6K 16:9" },
    "4K 16:9": { w: 24.883, h: 13.997, label: "4K 16:9" },
    "4K 2:1": { w: 24.883, h: 12.442, label: "4K 2:1" },
    "3.3K 6:5": { w: 20.218, h: 16.949, label: "3.3K 6:5" },
    "3K 1:1": { w: 18.662, h: 18.662, label: "3K 1:1" },
    "2.7K 8:9": { w: 16.664, h: 18.747, label: "2.7K 8:9" },
    "2K 16:9 S16": { w: 12.442, h: 6.998, label: "2K 16:9 S16" }
  },
  "Sony Venice": {
    "6K 3:2": { w: 36.167, h: 24.111, label: "6K 3:2" },
    "6K 1.85:1": { w: 36.203, h: 19.567, label: "6K 1.85:1" },
    "6K 17:9": { w: 36.203, h: 19.088, label: "6K 17:9" },
    "6K 2.39:1": { w: 36.167, h: 15.153, label: "6K 2.39:1" },
    "5.7K 16:9": { w: 33.907, h: 19.076, label: "5.7K 16:9" },
    "4K 6:5": { w: 24.494, h: 20.523, label: "4K 6:5" },
    "4K 4:3": { w: 24.494, h: 18.084, label: "4K 4:3" },
    "4K 17:9": { w: 24.494, h: 12.917, label: "4K 17:9" },
    "4K 2.39:1": { w: 24.494, h: 10.262, label: "4K 2.39:1" },
    "3.8K 16:9": { w: 22.963, h: 12.917, label: "3.8K 16:9" }
  },
  "Sony FX6": { "4K DCI": { w: 35.616, h: 18.858, label: "4K DCI" } },
  "Sony FX9": {
    "4K 17:9 (6K FF Imager Mode)": { w: 35.688, h: 18.818, label: "4K 17:9 (6K FF Imager Mode)" },
    "4K 16:9 (5.6K FF Imager Mode)": { w: 33.454, h: 18.818, label: "4K 16:9 (5.6K FF Imager Mode)" },
    "Full-HD (6K FF Imager Mode)": { w: 33.454, h: 18.818, label: "Full-HD (6K FF Imager Mode)" },
    "4K 17:9 (5K Crop Mode)": { w: 29.748, h: 15.682, label: "4K 17:9 (5K Crop Mode)" },
    "4K 17:9 (S35 Imager Mode)": { w: 24.330, h: 12.830, label: "4K 17:9 (S35 Imager Mode)" },
    "3.8K 16:9 (S35 Imager mode)": { w: 22.810, h: 12.830, label: "3.8K 16:9 (S35 Imager Mode)" },
    "Full-HD (4K S35 Imager Mode)": { w: 22.810, h: 12.830, label: "Full-HD (4K S35 Imager Mode)" },
    "S16 2K": { w: 12.165, h: 6.415, label: "S16 2K" }
  },
  "DJI Ronin 4D 6K": {
    "6K FF 17:9": { w: 35.688, h: 18.818, label: "6K FF 17:9" },
    "6K FF 2.39:1": { w: 35.688, h: 14.921, label: "6K FF 2.39:1" },
    "4K S35 17:9": { w: 24.330, h: 12.830, label: "4K S35 17:9" },
    "4K S35 2.39:1": { w: 24.330, h: 10.169, label: "4K S35 2.39:1" }
  },
  "DJI Ronin 4D 8K": {
    "8K FF 17:9": { w: 36.045, h: 19.008, label: "8K FF 17:9" },
    "8K FF 2.39:1": { w: 36.045, h: 15.066, label: "8K FF 2.39:1" },
    "5.5K S35 17:9": { w: 24.499, h: 12.989, label: "5.5K S35 17:9" }
  },
  "RED Komodo-X": {
    "6K 17:9": { w: 27.034, h: 14.256, label: "6K 17:9" },
    "6K 2.4:1": { w: 27.034, h: 11.405, label: "6K 2.4:1" },
    "6K 16:9": { w: 25.344, h: 14.256, label: "6K 16:9" },
    "5K 17:9": { w: 22.528, h: 11.880, label: "5K 17:9" },
    "6K 3:2": { w: 21.384, h: 14.256, label: "6K 3:2" },
    "6K 4:3": { w: 19.008, h: 14.256, label: "6K 4:3" },
    "4K 17:9": { w: 18.022, h: 9.504, label: "4K 17:9" },
    "6K 6:5": { w: 17.107, h: 14.256, label: "6K 6:5" },
    "4K 16:9": { w: 16.896, h: 9.504, label: "4K 16:9" },
    "2K 17:9": { w: 9.011, h: 4.752, label: "2K 17:9" }
  },
  "RED Komodo 6K": {
    "6K 17:9": { w: 27.034, h: 14.256, label: "6K 17:9" },
    "6K 2.4:1": { w: 27.034, h: 11.405, label: "6K 2.4:1" },
    "6K 16:9": { w: 25.344, h: 14.256, label: "6K 16:9" },
    "5K 17:9": { w: 22.528, h: 11.880, label: "5K 17:9" },
    "6K 3:2": { w: 21.384, h: 14.256, label: "6K 3:2" },
    "6K 4:3": { w: 19.008, h: 14.256, label: "6K 4:3" },
    "4K 17:9": { w: 18.022, h: 9.504, label: "4K 17:9" },
    "6K 6:5": { w: 17.107, h: 14.256, label: "6K 6:5" },
    "4K 16:9": { w: 16.896, h: 9.504, label: "4K 16:9" },
    "2K 17:9": { w: 9.011, h: 4.752, label: "2K 17:9" }
  },
  "RED V-Raptor XL 8K VV": {
    "8K 17:9": { w: 40.960, h: 21.600, label: "8K 17:9" },
    "8K 2:1": { w: 40.960, h: 20.480, label: "8K 2:1" },
    "8K 2.4:1": { w: 40.960, h: 17.280, label: "8K 2.4:1" },
    "8K 16:9": { w: 38.400, h: 21.600, label: "8K 16:9" },
    "7K 17:9": { w: 35.840, h: 18.900, label: "7K 17:9" },
    "7K 2:1": { w: 35.840, h: 17.920, label: "7K 2:1" },
    "7K 2.4:1": { w: 35.840, h: 15.010, label: "7K 2.4:1" },
    "7K 16:9": { w: 33.600, h: 18.900, label: "7K 16:9" },
    "8K 3:2": { w: 32.400, h: 21.600, label: "8K 3:2" },
    "6K 17:9": { w: 30.720, h: 16.200, label: "6K 17:9" },
    "6K 2:1": { w: 30.720, h: 15.360, label: "6K 2:1" },
    "6K 2.4:1": { w: 30.720, h: 12.960, label: "6K 2.4:1" },
    "8K 4:3": { w: 28.800, h: 21.600, label: "8K 4:3" },
    "6K 16:9": { w: 28.800, h: 16.200, label: "6K 16:9" },
    "7K 3:2": { w: 28.350, h: 18.900, label: "7K 3:2" },
    "8K 6:5": { w: 25.920, h: 21.600, label: "8K 6:5" },
    "5K 17:9": { w: 25.600, h: 13.500, label: "5K 17:9" },
    "5K 2:1": { w: 25.600, h: 12.800, label: "5K 2:1" },
    "5K 2.4:1": { w: 25.600, h: 10.800, label: "5K 2.4:1" },
    "7K 4:3": { w: 25.200, h: 18.900, label: "7K 4:3" },
    "5K 16:9": { w: 24.000, h: 13.500, label: "5K 16:9" },
    "7K 6:5": { w: 22.680, h: 18.900, label: "7K 6:5" },
    "8K 1:1": { w: 21.600, h: 21.600, label: "8K 1:1" },
    "4K 17:9": { w: 20.480, h: 10.800, label: "4K 17:9" },
    "4K 2:1": { w: 20.480, h: 10.240, label: "4K 2:1" },
    "4K 2.4:1": { w: 20.480, h: 8.640, label: "4K 2.4:1" },
    "4K 16:9": { w: 19.200, h: 10.800, label: "4K 16:9" },
    "7K 1:1": { w: 18.900, h: 18.900, label: "7K 1:1" },
    "6K 1:1": { w: 16.200, h: 16.200, label: "6K 1:1" },
    "3K 17:9": { w: 15.360, h: 8.100, label: "3K 17:9" },
    "3K 2:1": { w: 15.360, h: 7.680, label: "3K 2:1" },
    "3K 2.4:1": { w: 15.360, h: 6.480, label: "3K 2.4:1" },
    "5K 1:1": { w: 13.500, h: 13.500, label: "5K 1:1" },
    "4K 1:1": { w: 10.800, h: 10.800, label: "4K 1:1" },
    "2K 17:9": { w: 10.240, h: 5.400, label: "2K 17:9" },
    "2K 2:1": { w: 10.240, h: 5.120, label: "2K 2:1" },
    "2K 2.4:1": { w: 10.240, h: 4.320, label: "2K 2.4:1" },
    "2K 16:9": { w: 9.600, h: 5.400, label: "2K 16:9" },
    "3K 16:9": { w: 9.400, h: 8.100, label: "3K 16:9" },
    "3K 1:1": { w: 8.100, h: 8.100, label: "3K 1:1" },
    "2K 1:1": { w: 5.400, h: 5.400, label: "2K 1:1" }
  },
  "RED V-Raptor 8K VV": {
    "8K 17:9": { w: 40.960, h: 21.600, label: "8K 17:9" },
    "8K 2:1": { w: 40.960, h: 20.480, label: "8K 2:1" },
    "8K 2.4:1": { w: 40.960, h: 17.280, label: "8K 2.4:1" },
    "8K 16:9": { w: 38.400, h: 21.600, label: "8K 16:9" },
    "7K 17:9": { w: 35.840, h: 18.900, label: "7K 17:9" },
    "7K 2:1": { w: 35.840, h: 17.920, label: "7K 2:1" },
    "7K 2.4:1": { w: 35.840, h: 15.010, label: "7K 2.4:1" },
    "7K 16:9": { w: 33.600, h: 18.900, label: "7K 16:9" },
    "8K 3:2": { w: 32.400, h: 21.600, label: "8K 3:2" },
    "6K 17:9": { w: 30.720, h: 16.200, label: "6K 17:9" },
    "6K 2:1": { w: 30.720, h: 15.360, label: "6K 2:1" },
    "6K 2.4:1": { w: 30.720, h: 12.960, label: "6K 2.4:1" },
    "8K 4:3": { w: 28.800, h: 21.600, label: "8K 4:3" },
    "6K 16:9": { w: 28.800, h: 16.200, label: "6K 16:9" },
    "7K 3:2": { w: 28.350, h: 18.900, label: "7K 3:2" },
    "8K 6:5": { w: 25.920, h: 21.600, label: "8K 6:5" },
    "5K 17:9": { w: 25.600, h: 13.500, label: "5K 17:9" },
    "5K 2:1": { w: 25.600, h: 12.800, label: "5K 2:1" },
    "5K 2.4:1": { w: 25.600, h: 10.800, label: "5K 2.4:1" },
    "7K 4:3": { w: 25.200, h: 18.900, label: "7K 4:3" },
    "5K 16:9": { w: 24.000, h: 13.500, label: "5K 16:9" },
    "7K 6:5": { w: 22.680, h: 18.900, label: "7K 6:5" },
    "8K 1:1": { w: 21.600, h: 21.600, label: "8K 1:1" },
    "4K 17:9": { w: 20.480, h: 10.800, label: "4K 17:9" },
    "4K 2:1": { w: 20.480, h: 10.240, label: "4K 2:1" },
    "4K 2.4:1": { w: 20.480, h: 8.640, label: "4K 2.4:1" },
    "4K 16:9": { w: 19.200, h: 10.800, label: "4K 16:9" },
    "7K 1:1": { w: 18.900, h: 18.900, label: "7K 1:1" },
    "6K 1:1": { w: 16.200, h: 16.200, label: "6K 1:1" },
    "3K 17:9": { w: 15.360, h: 8.100, label: "3K 17:9" },
    "3K 2:1": { w: 15.360, h: 7.680, label: "3K 2:1" },
    "3K 2.4:1": { w: 15.360, h: 6.480, label: "3K 2.4:1" },
    "5K 1:1": { w: 13.500, h: 13.500, label: "5K 1:1" },
    "4K 1:1": { w: 10.800, h: 10.800, label: "4K 1:1" },
    "2K 17:9": { w: 10.240, h: 5.400, label: "2K 17:9" },
    "2K 2:1": { w: 10.240, h: 5.120, label: "2K 2:1" },
    "2K 2.4:1": { w: 10.240, h: 4.320, label: "2K 2.4:1" },
    "2K 16:9": { w: 9.600, h: 5.400, label: "2K 16:9" },
    "3K 16:9": { w: 9.400, h: 8.100, label: "3K 16:9" },
    "3K 1:1": { w: 8.100, h: 8.100, label: "3K 1:1" },
    "2K 1:1": { w: 5.400, h: 5.400, label: "2K 1:1" }
  },
  "Fujifilm GFX Eterna": {
  "Open Gate 4:3 4K (3840x2880)": { w: 43.631, h: 32.712, label: "Open Gate 4:3 4K" },
  "4K 16:9 (3840x2160)": { w: 43.631, h: 24.542, label: "4K 16:9" },
  "GF Cine 5.8K (5824x2436)": { w: 43.800, h: 18.319, label: "GF Cine 5.8K" },
  "Premista 5.4K (5440x2868)": { w: 40.909, h: 21.571, label: "Premista 5.4K" },
  "35mm 4.8K (4776x3184)": { w: 35.919, h: 23.940, label: "35mm 4.8K" },

  "GF DCI 8K": { w: 30.802, h: 16.243, label: "GF DCI 8K" },
  "Super 35 6.3K": { w: 23.996, h: 13.498, label: "Super 35 6.3K" }
},
  "Blackmagic URSA Cine 12K LF": {
    "12K Open Gate": { w: 35.635, h: 23.316, label: "12K Open Gate" },
    "12K 16:9": { w: 35.635, h: 18.792, label: "12K 16:9" },
    "12K 17:9": { w: 35.635, h: 18.792, label: "12K 17:9" },
    "12K 2.4:1": { w: 35.635, h: 14.825, label: "12K 2.4:1" },
    "12K 6:5": { w: 27.979, h: 23.316, label: "12K 6:5" },
    "9K 3:2": { w: 27.283, h: 18.166, label: "9K 3:2" },
    "9K 17:9": { w: 27.005, h: 14.198, label: "9K 17:9" },
    "9K 2.4:1": { w: 27.005, h: 11.206, label: "9K 2.4:1" },
    "9K 16:9": { w: 25.195, h: 14.198, label: "9K 16:9" },
    "9K 6:5": { w: 22.272, h: 18.583, label: "9K 6:5" }
  }
};

/* === Lens lijsten, alias-focals, files en teksten === */
const lenses = ["IronGlass Red P","IronGlass Sovjet MKII","IronGlass Zeiss Jena","IronGlass Titan Zoom","IronGlass Sovjet Medium Format"];

/* === UI focal -> file focal overrides (alleen échte uitzonderingen) === */
const notes = {
  // MKII: jij hebt 135mm files, UI toont 120mm
  "ironglass_sovjet_mkii_120mm": "135mm",
  "ironglass_sovjet_mkii_50mm": "58mm",
  "ironglass_sovjet_mkii_35mm": "37mm",
  "ironglass_red_p_50mm": "58mm",
  "ironglass_red_p_35mm": "37mm",

  // Als je UI nog 85mm aanbiedt voor Jena/MF maar je wil hem altijd naar 80mm sturen:
  // (mag blijven, maar als je nearest-focal gebruikt kan dit er uiteindelijk uit)
  "ironglass_zeiss_jena_85mm": "80mm",
  "ironglass_titan_zoom_35mm": "37mm",
  "ironglass_titan_zoom_28mm": "29mm",
  "ironglass_sovjet_medium_format_28mm": "30mm"
};

/* === Measured / available real T-stops per lensSlug + FILE focal === */
const MEASURED_TSTOPS = {
  "ironglass_titan_zoom": {
    // jij hebt o.a. 50mm t2_9 / t4, en eerder had je ook 120/85 etc.
    "120mm": ["4", "2.9"],
    "85mm":  ["4", "2.9"],
    "50mm":  ["4", "2.9"],
    "37mm":  ["4", "2.9"],
    "29mm":  ["4", "2.8"]
  },

  "ironglass_sovjet_medium_format": {
    // jouw nieuwe files: 45mm t3_9/t4 en 65mm t3_8/t4 (en eventueel andere later)
    "120mm": ["4", "2.9"],
    "90mm":  ["4"],
    "80mm":  ["4", "2.9"],
    "65mm":  ["4", "3.8"],
   "45mm_m35": ["4", "3.9"],
"45mm_m50": ["4", "3.9"],
    "35mm":  ["4", "2.9"],
    "30mm":  ["4", "3.8"]
  },

  "ironglass_zeiss_jena": {
    // jouw nieuwe files: 50mm t1_9 / t2_8 / t4
    "120mm": ["4", "2.9"],
    "80mm":  ["4", "2.8", "1.9"],
    "50mm":  ["4", "2.8", "1.9"],
    "35mm":  ["4", "2.8", "2.5"],
    "28mm":  ["4", "2.9"],
    "20mm":  ["4", "2.9"]
  },

  "ironglass_sovjet_mkii": {
    // jouw nieuwe files: 58mm t2_1 / t2_9 / t4  (dus 2.9 toevoegen!)
    "135mm": ["4", "2.9"],
    "85mm":  ["4", "2.8", "2", "1.6"],
    "58mm":  ["4", "2.9", "2.1"],
    "37mm":  ["4", "2.9"],
    "28mm":  ["4", "3.6"],
    "20mm":  ["4", "3.6"]
  },

  "ironglass_red_p": {
    // jouw nieuwe files: 58mm t2_1 / t2_8 / t4
    "85mm":  ["4", "2.8", "2.1"],
    "58mm":  ["4", "2.8", "2.1"],
    "37mm":  ["4", "2.9"]
  }
};

/* === UI T-stop -> FILE T-stop alias (alleen als UI waarde geen eigen files heeft) ===
   Let op: jouw fileTStopFor() maakt 2.9 => "2_9" etc.
*/
const TSTOP_FILE_ALIAS = {
  "ironglass_red_p": {
    // files: t2_1, t2_8, t4
    
    "2":  "2.1",
    "2.8":"2.8",
    "4":  "4"
  },

  "ironglass_sovjet_mkii": {
    // files: t2_1, t2_9, t4  (geen echte 2.8 files -> map naar 2.9)
    
    "2":  "2.1",
    "2.8":"2.9",
    "4":  "4"
  },

  "ironglass_zeiss_jena": {
    // files: t1_9, t2_8, t4
   
    "2":  "1.9",
    "2.8":"2.8",
    "4":  "4"
  },

  "ironglass_titan_zoom": {
    // files: t2_9, t4
    
    "2":  "2.9",
    "2.8":"2.9",
    "4":  "4"
  }

  // ❗ Sovjet Medium Format bewust NIET hard aliasen naar 2.9,
  // want 45/65 hebben t3_9/t3_8. Laat measured (focal-aware) dit bepalen.
};
const lensImageMap = {
};

const lensDescriptions = {
  "IronGlass Red P": { text:"Extremely vintage Soviet optics with single coating, heavy character, flare and distortion. Pure, raw, unpolished glass for maximum personality.", url:"https://ironglassadapters.com/rehousing/red-p-limited-edition-soviet-lens-rehousing/" },
  "IronGlass Zeiss Jena": { text:"Soft vintage signature without heavy distortion or wild flares. Adds character while keeping faces natural and flattering.", url:"https://ironglassadapters.com/rehousing/carl-zeiss-jena-rehousing/" },
  "IronGlass Sovjet MKII": { text:"The IronGlass MKII Soviet set is, after the RED P, the most intense variant: heavily-tweaked vintage Soviet lenses with extreme character, flare and distortion. Ideal for a raw, experimental look.", url:"https://ironglassadapters.com/rehoused-soviet-lenses/mkii/" },
  "IronGlass Titan Zoom": { text:"The IronGlass Titan Zoom is a cleaner zoom lens, which covers big sensors", url:"https://ironglassadapters.com/id/23/" },
  "IronGlass Sovjet Medium Format": { text:"The IronGlass Sovjet Medium Format is a 8 lens set, which covers medium format sensors like GFX Eterna, Blackmagic Ursa 17K & Arri Alexa 265", url:"https://ironglassadapters.com/id/23/" },
 };


function getMeasuredStops(lensSlug, nominalFocal){
  const fileFocal = aliasFor(lensSlug, nominalFocal); // <-- gebruikt jouw notes mapping
  return (
    MEASURED_TSTOPS?.[lensSlug]?.[fileFocal] ||
    MEASURED_TSTOPS?.[lensSlug]?.[nominalFocal] ||
    null
  );
}

function pickMeasuredTStop(lensSlug, nominalFocal, uiVal){
  const stops = getMeasuredStops(lensSlug, nominalFocal);
  if(!stops || !stops.length) return null;

  const nums = stops
    .map(s => parseFloat(String(s)))
    .filter(n => Number.isFinite(n))
    .sort((a,b) => a-b);

  if(!nums.length) return null;

 
  const target = parseFloat(String(uiVal));
  if(!Number.isFinite(target)) return String(nums[0]);

  // closest match
  let best = nums[0];
  let bestDiff = Math.abs(best - target);

  for(const n of nums){
    const d = Math.abs(n - target);
    if(d < bestDiff){
      best = n;
      bestDiff = d;
    }
  }
  return String(best);
}

function actualTStopForLabel(lensSlug, uiVal, nominalFocal){
  // 1) focal-aware measured pick (MEASURED_TSTOPS)
  const measured = pickMeasuredTStop(lensSlug, nominalFocal, uiVal);
  if(measured) return measured;

  // 2) fallback naar je oude set-alias (mag blijven bestaan)
  return TSTOP_FILE_ALIAS?.[lensSlug]?.[uiVal] || uiVal;
}

function fileTStopFor(lensSlug, uiVal, nominalFocal){
  const actual = actualTStopForLabel(lensSlug, uiVal, nominalFocal);
  return String(actual).replace(/\./g, "_"); // "2.9" -> "2_9"
}

/* === DOM refs === */
const q = id => document.getElementById(id);
const cameraSelect=q("cameraSelect"), sensorFormatSelect=q("sensorFormatSelect"), comparisonWrapper=q("comparisonWrapper");
const leftSelect=q("leftLens"), rightSelect=q("rightLens"), tStopLeftSelect=q("tStopLeftSelect"), tStopRightSelect=q("tStopRightSelect");
const focalLengthSelect=q("focalLength"), beforeImgTag=q("beforeImgTag"), afterImgTag=q("afterImgTag"), afterWrapper=q("afterWrapper"), slider=q("slider");
const leftLabel=q("leftLabel"), rightLabel=q("rightLabel"), downloadLeftRawButton=q("downloadLeftRawButton"), downloadRightRawButton=q("downloadRightRawButton");
const flareToggle=q("flareToggle"), scaleSlider=q("scaleSlider"), scaleVal=q("scaleVal"), lensInfoDiv=q("lensInfo");
const bokehToggle = q("bokehToggle");
const reframeBtn = q("reframeToggle");
const calibrateBtn = q("calibrateToggle");
let calibrateActive = false;
let calibrateUserTouchedScale = false;
const exposureBtn = q("exposureToggle");
let exposureCorrectionActive = true; // ✅ default ON

const fullscreenBtn=q("fullscreenButton"), sbsBtn=q("sbsToggle"), toggleBtn=q("toggleButton"), infoContainer=q("infoContainer");
const downloadPdfButton = q("downloadPdfButton"); // ✅ HIER
const detailOverlay=q("detailOverlay"), leftDetail=q("leftDetail"), rightDetail=q("rightDetail"), detailToggleButton=q("detailViewToggle");

const advancedToggle = q("advancedToggle");
const advancedPanel  = q("advancedPanel");

if (advancedToggle && advancedPanel) {
  advancedToggle.addEventListener("click", () => {
    const open = advancedPanel.classList.toggle("open");
    advancedPanel.setAttribute("aria-hidden", open ? "false" : "true");
    advancedToggle.textContent = open ? "Advanced ▴" : "Advanced ▾";
    advancedToggle.blur();
  });
}
// ✅ HARD FIX: forceer dat ALLE viewer-images altijd de calibratie-vars gebruiken
(function forceCalibratedTransform(){
  const id = "tvl-cal-transform-fix";
  if (document.getElementById(id)) return;

  const st = document.createElement("style");
  st.id = id;
  st.textContent = `
  #beforeImgTag, #afterImgTag, #sbsLeftImg, #sbsRightImg {
    transform:
      scale(var(--sensor-scale, 1))
      scale(var(--viewer-scale, 1))
      translate3d(var(--cal-tx, 0px), var(--cal-ty, 0px), 0)
      scale(var(--cal-scale, 1)) !important;

    transform-origin: center center !important;
    will-change: transform;
  }
`;
  document.head.appendChild(st);
})();
// ✅ Guard: als pulseFsBars niet bestaat → no-op
const pulseFsBarsSafe = (opts) => {
  if (typeof window.pulseFsBars === "function") window.pulseFsBars(opts);
};

function requestBrowserFullscreen(){
  const el = document.documentElement;

  const req =
    el.requestFullscreen ||
    el.webkitRequestFullscreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullscreen;

  if(req) req.call(el);
}

(function fullscreenGateInit(){
  const gate = document.getElementById("fsGate");
  const btn  = document.getElementById("fsGateBtn");
  if(!gate || !btn) return;

  const isBrowserFullscreen = () =>
    !!(document.fullscreenElement || document.webkitFullscreenElement);

  const openGate = () => {
    gate.dataset.mode = ""; // reset
    gate.setAttribute("aria-hidden", "false");
  };

  const closeGate = () => {
    gate.setAttribute("aria-hidden", "true");
    gate.dataset.mode = "";
  };

  // ✅ Default: alleen tonen als je NIET fullscreen bent
  if(!isBrowserFullscreen()){
    // als je hem niet meer standaard wil bij load: comment deze regel uit
    openGate();
  } else {
    closeGate();
  }

  btn.onclick = () => {
  // return-gate mode: jouw code gebruikt die elders
  if(gate.dataset.mode === "return") return; // showFsReturnGate zet dan z’n eigen onclick

  try{
    requestBrowserFullscreen();
    closeGate();
  } catch(e){
    console.warn("Fullscreen request blocked:", e);
  }
};

  document.addEventListener("fullscreenchange", () => {
    if(isBrowserFullscreen()) closeGate();
  });
  document.addEventListener("webkitfullscreenchange", () => {
    if(isBrowserFullscreen()) closeGate();
  });
})();


const mfAltLeftWrap  = q("mfAltLeftWrap");
const mfAltRightWrap = q("mfAltRightWrap");
const mfAltLeftSel   = q("mfAltLeft");
const mfAltRightSel  = q("mfAltRight");

// Per lensSlug + UI focal: welke "gefilmde" focals bestaan er als alternatief?
// (dit is alleen UI; resolver gebruiken we in stap 3)
const ALT_FOCAL_OPTIONS = {
  "ironglass_sovjet_medium_format": {
    // UI 85mm → kies tussen 80 en 90
    "85mm": ["80mm","90mm"],

    // UI 50mm → kies tussen 65 en 45
    "50mm": ["65mm","45mm"],

    // UI 35mm → kies tussen 35 en 45
    "35mm": ["35mm","45mm"]
  }
};

// State: wat user kiest per kant
const mfAltState = { left: null, right: null };

function getEffectiveFocal(lensSlug, uiFocal, side /* "left"|"right" */){
  const opts = ALT_FOCAL_OPTIONS?.[lensSlug]?.[uiFocal];
  let picked = uiFocal;

  if(opts && opts.length > 1){
    const chosen = mfAltState?.[side];
    picked = (chosen && opts.includes(chosen)) ? chosen : opts[0];
  }

  // ✅ Special-case: Sovjet MF 45mm heeft 2 takes (m35/m50)
  if(lensSlug === "ironglass_sovjet_medium_format" && picked === "45mm"){
    if(uiFocal === "50mm") return "45mm_m50";
    if(uiFocal === "35mm") return "45mm_m35";
  }

  return picked;
}
function fillAltSelect(sel, options, preferred){
  sel.innerHTML = "";
  options.forEach(v => sel.add(new Option(v, v)));

  // preferred proberen te zetten
  if(preferred && options.includes(preferred)){
    sel.value = preferred;
  } else {
    sel.value = options[0];
  }
}

if(exposureBtn){
  exposureBtn.textContent = "Exposure Correction";
  setToggleActive(exposureBtn, exposureCorrectionActive);
}

function updateMfAltUI(){
  const uiFocal = focalLengthSelect?.value || "50mm";

  const leftSlug  = lensSlugFromLabel(leftSelect?.value || "");
  const rightSlug = lensSlugFromLabel(rightSelect?.value || "");

  const leftOpts  = ALT_FOCAL_OPTIONS?.[leftSlug]?.[uiFocal]  || null;
  const rightOpts = ALT_FOCAL_OPTIONS?.[rightSlug]?.[uiFocal] || null;

  // LEFT
  if(mfAltLeftWrap && mfAltLeftSel){
    if(leftOpts && leftOpts.length > 1){
      mfAltLeftWrap.style.display = "flex";
      mfAltLeftSel.disabled = false;

      fillAltSelect(mfAltLeftSel, leftOpts, mfAltState.left);
      mfAltState.left = mfAltLeftSel.value;
    } else {
      mfAltLeftWrap.style.display = "none";
      mfAltLeftSel.disabled = true;
      mfAltState.left = null;
    }
  }

  // RIGHT
  if(mfAltRightWrap && mfAltRightSel){
    if(rightOpts && rightOpts.length > 1){
      mfAltRightWrap.style.display = "flex";
      mfAltRightSel.disabled = false;

      fillAltSelect(mfAltRightSel, rightOpts, mfAltState.right);
      mfAltState.right = mfAltRightSel.value;
    } else {
      mfAltRightWrap.style.display = "none";
      mfAltRightSel.disabled = true;
      mfAltState.right = null;
    }
  }
}

// ===== UI FOALS (wat jij aanbiedt) =====
const UI_FOCALS = ["20mm","28mm","35mm","50mm","85mm","120mm"];

function closestUIFocal(options, preferred){
  if(!options || !options.length) return preferred || "50mm";
  if(options.includes(preferred)) return preferred;

  const p = baseFocalMm(preferred);
  if(!Number.isFinite(p)) return options[0];

  let best = options[0];
  let bestDiff = Infinity;

  for(const f of options){
    const mm = baseFocalMm(f);
    const d  = Math.abs(mm - p);
    if(d < bestDiff){
      best = f;
      bestDiff = d;
    }
  }
  return best;
}

function displayFocalForUI(lensSlug, uiFocal){
  // aliasFor geeft bijv. "58mm" voor ("ironglass_sovjet_mkii", "50mm")
  let f = aliasFor(lensSlug, uiFocal);

  // als er ooit _m35/_m50 in zit: toon als "45mm"
  f = String(f).replace(/_m(35|50)$/i, "");

  return String(f).toUpperCase();
}

// Bouw focal dropdown op basis van de *huidige* lens links+rechts.
// Alleen focals die beide lenzen echt hebben blijven zichtbaar.
function updateFocalOptionsForCurrentLenses(){
  if(!focalLengthSelect) return { changed:false, valids:UI_FOCALS.slice() };

  const prev = focalLengthSelect.value || UI_FOCALS[0];

  const leftSlug  = lensSlugFromLabel(leftSelect?.value || "");
  const rightSlug = lensSlugFromLabel(rightSelect?.value || "");

  let valids = UI_FOCALS.filter(f =>
    lensSupportsUIFocal(leftSlug,  f, "left") &&
    lensSupportsUIFocal(rightSlug, f, "right")
  );

  // safety fallback (zou in praktijk niet moeten gebeuren)
  if(!valids.length) valids = UI_FOCALS.slice();

  // rebuild dropdown
 // 👇 kies “referentie lens” voor de labels (links voelt logisch)
const refSlug = lensSlugFromLabel(leftSelect?.value || "");

focalLengthSelect.innerHTML = "";
valids.forEach(f => {
  const label = displayFocalForUI(refSlug, f); // bijv. UI "50mm" -> label "58MM"
  focalLengthSelect.add(new Option(label, f));
});

  // behoud huidige als het kan, anders kies dichtstbijzijnde
  const next = valids.includes(prev) ? prev : closestUIFocal(valids, prev);
  focalLengthSelect.value = next;

  return { changed: next !== prev, valids, prev, next };
}

// listeners (nog zonder invloed op images!)
mfAltLeftSel?.addEventListener("change", () => {
  mfAltState.left = mfAltLeftSel.value;
  updateImages();
});
mfAltRightSel?.addEventListener("change", () => {
  mfAltState.right = mfAltRightSel.value;
  updateImages();
});

const IMG_BASE="https://tvlmedia.github.io/IronGlass/images/", RAW_BASE=IMG_BASE+"raw/";
const CAPTURE_CAMERA = "Fujifilm GFX Eterna";
const CAPTURE_FORMAT = "Open Gate 4:3 4K (3840x2880)";

const BASE_SENSOR = cameras[CAPTURE_CAMERA][CAPTURE_FORMAT];
let sbsActive=false, isExportingPdf=false, userScale=1;

/* === Helpers === */
const isWrapperFullscreen=()=> (document.fullscreenElement||document.webkitFullscreenElement)===comparisonWrapper;
const enterWrapperFullscreen=()=> comparisonWrapper.requestFullscreen?.()||comparisonWrapper.webkitRequestFullscreen?.();
const exitAnyFullscreen=()=> document.exitFullscreen?.()||document.webkitExitFullscreen?.();
function setWrapperSizeByAR(w,h){ if(isWrapperFullscreen())return; const width=comparisonWrapper.getBoundingClientRect().width, arWidth=sbsActive?(w*2):w, height=Math.round(width*(h/arWidth)); ["height","min-height","max-height"].forEach(p=>comparisonWrapper.style.setProperty(p,`${height}px`,"important")); comparisonWrapper.style.removeProperty("aspect-ratio"); }
function clearInlineHeights(){ ["height","min-height","max-height"].forEach(p=>comparisonWrapper.style.removeProperty(p)); }
function getCurrentWH(){
  const cam = cameraSelect.value;
  const fmt = sensorFormatSelect.value;
  const hit = cam && fmt && cameras?.[cam]?.[fmt];
  return hit || BASE_SENSOR;
}
function getTargetAR(){ const {w,h}=getCurrentWH(); return sbsActive?(2*w)/h:w/h; }
const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));

function beginFsEnterMask(){
  comparisonWrapper.classList.add("fs-entering");
}

function endFsEnterMask(){
  comparisonWrapper.classList.remove("fs-entering");
}

function scheduleLayoutStabilize(){
  // 2x RAF: wacht tot fullscreen layout echt staat
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      updateFullscreenBars();
      resetSplitToMiddle();

      if(calibrateActive){
        if(!calibrateUserTouchedScale) autoScaleForCalibration();
        else applyCalibrationTransforms();
      } else {
        applyCalibrationTransforms();
      }

      // ✅ NU pas tonen (geen flash)
      endFsEnterMask();
    });
  });

  // Safari: soms nog een late reflow
  setTimeout(() => {
    updateFullscreenBars();
    resetSplitToMiddle();

    if(calibrateActive){
      if(!calibrateUserTouchedScale) autoScaleForCalibration();
      else applyCalibrationTransforms();
    } else {
      applyCalibrationTransforms();
    }
  }, 120);
}
/* === AUTO REFAME (viewer + PDF) – per focal, afhankelijk van sensor hoogte ===
   - startH: vanaf welke sensorhoogte hij begint te shiften
   - endH:   bij welke hoogte hij max shift bereikt
   - maxY:   max shift als fractie van beeldhoogte (0.25 = 25% van de zichtbare hoogte)
   - maxX:   idem maar horizontaal (meestal klein houden, bv 0.03)
*/
const AUTO_REFRAME_ENABLED = true;

const AUTO_REFRAME_BY_FOCAL = {
  "default": { startH: 18.0, endH: 7.0, maxY: 0.22, maxX: 0.00 },

  "120mm": { maxY: 0.10, maxX: -0.013 },
  "85mm":  { maxY: 0.12, maxX: -0.035 },
  "50mm":  { maxY: 0.06, maxX: 0.00 },
  "35mm":  { maxY: 0.07, maxX: -0.005 },
  "28mm":  { maxY: 0.15, maxX: 0.02 },
  "20mm":  { maxY: 0.0, maxX: 0.00 }
};

// Alleen deze focals wil je handmatig tunen:
const AUTO_REFRAME_ANCHORS = ["20mm","28mm","35mm","50mm","85mm","120mm"];

function baseFocalMm(f){
  // "45mm_m50" -> 45, "85mm" -> 85
  const s = String(f || "").replace(/_m(35|50)$/, "");
  const m = s.match(/(\d+(?:\.\d+)?)\s*mm/i);
  return m ? parseFloat(m[1]) : NaN;
}

function nearestAnchorKey(effectiveFocal){
  const mm = baseFocalMm(effectiveFocal);
  if(!Number.isFinite(mm)) return "default";

  let best = AUTO_REFRAME_ANCHORS[0];
  let bestDiff = Infinity;

  for(const a of AUTO_REFRAME_ANCHORS){
    const amm = baseFocalMm(a);
    const d = Math.abs(amm - mm);

    // tie-breaker: bij exact gelijk verschil → pak de dichtstbijzijnde "boven" (optioneel)
    if(d < bestDiff || (d === bestDiff && amm > baseFocalMm(best))){
      best = a;
      bestDiff = d;
    }
  }

  return best; // bijv. "80mm" -> "85mm", "29mm" -> "28mm", "58mm" -> "50mm"
}



function getAutoReframeFracForFocal(effectiveFocal){
  if(!AUTO_REFRAME_ENABLED) return { x:0, y:0, sev:0 };

  const { h } = getCurrentWH();
  const key = nearestAnchorKey(effectiveFocal);
const cfg = { ...AUTO_REFRAME_BY_FOCAL.default, ...(AUTO_REFRAME_BY_FOCAL[key] || {}) };

  const startH = cfg.startH;
  const endH   = cfg.endH;

  if(!h || h >= startH) return { x:0, y:0, sev:0 };

  // severity 0..1 (lineair)
  const sev = clamp((startH - h) / Math.max(0.0001, (startH - endH)), 0, 1);

  return {
    x: sev * (cfg.maxX || 0),
    y: sev * (cfg.maxY || 0),
    sev
  };
}

// Viewer px-shift op basis van “usable window” (dus inclusief letterbox/pillarbox correct)
function getAutoReframePx(imgEl, effectiveFocal){
  if(!AUTO_REFRAME_ENABLED) return { ax:0, ay:0, sev:0 };

  const { w: boxW, h: boxH } = getCalBoxFor(imgEl);
  const frac = getAutoReframeFracForFocal(effectiveFocal);

  // positief = naar rechts/beneden in CSS pixels
  return {
    ax: Math.round(frac.x * boxW),
    ay: Math.round(frac.y * boxH),
    sev: frac.sev
  };
}

// PDF gebruikt fractie van export-H (renderToSensorAR doet oy += yFrac * H)
function getAutoReframeYFracForPdf(effectiveFocal){
  return getAutoReframeFracForFocal(effectiveFocal).y || 0;
}

/* === Camera/format selects === */
cameraSelect.innerHTML=""; Object.keys(cameras).forEach(cam=>cameraSelect.add(new Option(cam,cam)));
cameraSelect.addEventListener("change",()=>{ sensorFormatSelect.innerHTML=""; const cam=cameraSelect.value; if(!cam){ sensorFormatSelect.disabled=true; document.body.classList.remove("sensor-mode"); clearInlineHeights(); comparisonWrapper.style.setProperty("aspect-ratio","auto"); return; } Object.entries(cameras[cam]).forEach(([k,v])=>sensorFormatSelect.add(new Option(v.label||k,k))); sensorFormatSelect.disabled=false; sensorFormatSelect.dispatchEvent(new Event("change")); });

sensorFormatSelect.addEventListener("change", applyCurrentFormat);

function applyCurrentFormat(){
  const { w, h } = getCurrentWH();

  comparisonWrapper.style.removeProperty("--sensor-scale");
  setWrapperSizeByAR(w, h);
  document.body.classList.add("sensor-mode");

  const scale = Math.abs(BASE_SENSOR.w - w) < 0.1 ? 1 : (BASE_SENSOR.w / w);
  comparisonWrapper.style.setProperty("--sensor-scale", scale.toFixed(4));

  // ✅ WACHT 1 FRAME zodat de nieuwe hoogte/usable rect echt klopt
  requestAnimationFrame(() => {
    updateFullscreenBars();
    resetSplitToMiddle();

    if (calibrateActive) {
      if (!calibrateUserTouchedScale) autoScaleForCalibration();
      else applyCalibrationTransforms();
    } else {
      applyCalibrationTransforms();
    }
  });
}
/* === Lenses dropdowns + T-stops === */
lenses.forEach(l=>{ leftSelect.add(new Option(l,l)); rightSelect.add(new Option(l,l)); });
const DEFAULT_T_STOPS = ["1.4", "2", "2.8", "4"]; // fallback als er géén measured data is

function fillTStops(sel, opts = DEFAULT_T_STOPS){
  sel.innerHTML = "";
  opts.forEach(v => sel.add(new Option(`T${v}`, v)));
}

fillTStops(tStopLeftSelect);
fillTStops(tStopRightSelect);

// ===== Dynamic T-stop dropdowns (per lens + (effective) focal) =====

function getAvailableTStopsFor(lensSlug, effectiveFocal){
  const stops = getMeasuredStops(lensSlug, effectiveFocal);
  if(stops && stops.length){
    const unique = Array.from(new Set(stops.map(s => String(s).trim()).filter(Boolean)));
    unique.sort((a,b) => parseFloat(a) - parseFloat(b));
    return unique; // ✅ geen WO, alleen echte T-stops
  }
  return DEFAULT_T_STOPS.slice();
}

function pickClosestTStopOption(options, preferred){
  if(!options || !options.length) return preferred || "";
  if(options.includes(preferred)) return preferred;

  const p = parseFloat(String(preferred));
  const nums = options
    .map(v => ({ v, n: parseFloat(String(v)) }))
    .filter(o => Number.isFinite(o.n));

  if(!Number.isFinite(p) || !nums.length) return options[0];

  let best = nums[0];
  let bestDiff = Math.abs(best.n - p);

  for(const o of nums){
    const d = Math.abs(o.n - p);
    if(d < bestDiff){
      best = o;
      bestDiff = d;
    }
  }
  return best.v;
}

function updateTStopSelectForSide(side /* "left"|"right" */){
  const sel     = (side === "left") ? tStopLeftSelect : tStopRightSelect;
  const lensLbl = (side === "left") ? leftSelect.value : rightSelect.value;

  const lensSlug = lensSlugFromLabel(lensLbl);
  const uiFocal  = focalLengthSelect?.value || "50mm";
  const effectiveFocal = getEffectiveFocal(lensSlug, uiFocal, side);

  const prev = sel.value || DEFAULT_T_STOPS[0];
  const opts = getAvailableTStopsFor(lensSlug, effectiveFocal);

  fillTStops(sel, opts);
  sel.value = pickClosestTStopOption(opts, prev);

  return { opts };
}

function updateTStopDropdowns(){
  const prevL = tStopLeftSelect.value  || DEFAULT_T_STOPS[0];
  const prevR = tStopRightSelect.value || DEFAULT_T_STOPS[0];

  const leftInfo  = updateTStopSelectForSide("left");
  const rightInfo = updateTStopSelectForSide("right");

  tStopLeftSelect.value  = pickClosestTStopOption(leftInfo.opts,  prevL);
  tStopRightSelect.value = pickClosestTStopOption(rightInfo.opts, prevR);
}

// Oude naam laten bestaan (je listeners gebruiken 'm al)
function syncTStopsOnContextChange(){
  updateMfAltUI();
  updateTStopDropdowns();
}

// Alleen focal length die erin staat

function lensSupportsUIFocal(lensSlug, uiFocal, side /* "left"|"right" */){
  // MF kan meerdere "echte" focals mappen → pak de effective focal (incl. 45mm_m35/m50)
  const effective = getEffectiveFocal(lensSlug, uiFocal, side);

  // We gebruiken measured data als “source of truth” voor: bestaat die focal echt?
  const stops = getMeasuredStops(lensSlug, effective);
  return !!(stops && stops.length);
}

function refillLensSelectForFocal(sel, side, uiFocal){
  if(!sel) return;

  const prev = sel.value;
  sel.innerHTML = "";

  const validLabels = [];
  for(const label of lenses){
    const slug = lensSlugFromLabel(label);
    if(lensSupportsUIFocal(slug, uiFocal, side)){
      validLabels.push(label);
      sel.add(new Option(label, label));
    }
  }

  // behoud selection als het nog kan, anders fallback naar 1e
  if(validLabels.includes(prev)) sel.value = prev;
  else sel.value = validLabels[0] || "";
}

function updateLensOptionsForCurrentFocal(){
  const uiFocal = focalLengthSelect?.value || "50mm";

  refillLensSelectForFocal(leftSelect,  "left",  uiFocal);
  refillLensSelectForFocal(rightSelect, "right", uiFocal);

  // MF alt UI moet nu ook kloppen voor nieuwe lensset
  updateMfAltUI();

  // en dan T-stops weer syncen met de (mogelijk) nieuwe lenskeuze
  updateTStopDropdowns();

  updateLensInfo();
  updateImages();
}

// === Bokeh toggle (zonder ON/OFF tekst) ===
bokehToggle.dataset.mode = bokehToggle.dataset.mode || "portrait";
bokehToggle.textContent = "BOKEH";
bokehToggle.classList.toggle("active", bokehToggle.dataset.mode === "bokeh");
bokehToggle.setAttribute("aria-pressed", bokehToggle.dataset.mode === "bokeh");

bokehToggle.addEventListener("click", () => {
  const next = (bokehToggle.dataset.mode === "bokeh") ? "portrait" : "bokeh";
  bokehToggle.dataset.mode = next;

  updateImages();
  updateToggleHighlights();
});

exposureBtn?.addEventListener("click", () => {
  exposureCorrectionActive = !exposureCorrectionActive;
  exposureBtn.blur();
  updateImages();
  updateToggleHighlights();
});

/* Flare: 3 standen */
flareToggle.dataset.mode = flareToggle.dataset.mode || "noflare";
const flareLabel = (m)=> m==="noflare" ? "Flare: OFF" : (m==="flare" ? "Flare: ON" : "Double Flare: ON");
flareToggle.textContent = flareLabel(flareToggle.dataset.mode);

flareToggle.addEventListener("click", ()=>{
  const cur = flareToggle.dataset.mode;
  const next = (cur==="noflare") ? "flare" : (cur==="flare" ? "doubleflare" : "noflare");
  flareToggle.dataset.mode = next;
  flareToggle.textContent = flareLabel(next);
  updateImages();
  updateToggleHighlights();
});
/* === Side-by-side wrapper (use existing DOM) === */
const sbsWrapper = q("sbsWrapper");
const sbsLeftImg = q("sbsLeftImg");
const sbsRightImg = q("sbsRightImg");

if (sbsWrapper) sbsWrapper.style.display = "none";


function getCalBoxFor(img){
  // In SBS is elke pane een eigen “viewport”
  if(sbsActive && img){
    const r = img.getBoundingClientRect();
    return { w: Math.max(1, r.width), h: Math.max(1, r.height) };
  }

  // Slider-mode: gebruik “usable window” (excl. letter/pillarbox)
  const rect = comparisonWrapper.getBoundingClientRect();
  const lbL = comparisonWrapper._lbLeft || 0;
  const lbR = comparisonWrapper._lbRight || 0;
  const lbT = comparisonWrapper._lbTop || 0;
  const lbB = comparisonWrapper._lbBottom || 0;

  return {
    w: Math.max(1, (comparisonWrapper._usableW ?? (rect.width  - lbL - lbR))),
    h: Math.max(1, (comparisonWrapper._usableH ?? (rect.height - lbT - lbB)))
  };
}

function calScaleFor(img){
  const fit = (img ? getComputedStyle(img).objectFit : "cover") || "cover";
  const { w, h } = getCalBoxFor(img);

  const sx = w / CAL_W;
  const sy = h / CAL_H;

  // object-fit gedrag
  const s = (fit === "contain") ? Math.min(sx, sy) : Math.max(sx, sy);

  return { s, w, h };
}

function toCssPxFor(img, x=0, y=0){
  const { s } = calScaleFor(img);

  let dx = x * s;
  let dy = y * s;

  if(CAL_Y_INVERT) dy = -dy;

  return { dx, dy };
}

// === CALIBRATION (per lens/focal) ===
// Resolve timeline / clip space (jouw max ranges)
const CAL_W = 3840;
const CAL_H = 2880;

// In Resolve is Y meestal "omhoog = +", in CSS is "omlaag = +"
const CAL_Y_INVERT = true; // zet op false als Y de verkeerde kant op gaat

// per lensSlug + focal: { scale, x, y }  (x/y = Resolve Position waarden)
// per lensSlug + focal: { scale, x, y }  (x/y = Resolve Position waarden)
const CALIBRATION = {
  "ironglass_titan_zoom": {
    "120mm": { scale: 0.96, x: 25.823, y: -70.244 },
    "85mm":  { scale: 0.89, x: 3.000,  y: 35.000 },
    "50mm":  { scale: 0.96, x: -3.965,  y: -27.412 },
    "35mm":  { scale: 0.900, x: -13.930,  y: -77.447 },
    "28mm":  { scale: 0.925, x: 2.000,  y: -37.000 }
  },

  "ironglass_sovjet_medium_format": {
    "120mm": { scale: 0.95, x: 40.668, y: -18.485 },
    "90mm":  { scale: 0.88, x: 14.000, y: 29.000 },
    "80mm":  { scale: 0.97, x: 28.780, y: 0.000 },
    "65mm":  { scale: 0.78,  x: 27.377, y: -10.412 },
    "45mm_m50": { scale: 1.120, x: 0.000,  y: -27.000 },
    "45mm_m35": { scale: 0.780, x: -5.000, y: -65.000 },
    "35mm":  { scale: 1.050, x: 0.000, y: -19.447 },
    "30mm":  { scale: 0.920, x: -8.000, y: -35.000 }
  },

  "ironglass_sovjet_mkii": {
    "120mm": { scale: 0.85, x: 7.394, y: 18.485 },
    "85mm":  { scale: 0.95, x: 1.000, y: 65.349 },
    "50mm": { scale: 0.870, x: 0, y: 0 },
    "35mm": { scale: 0.980, x: -13.930, y: 0 },
    "28mm": { scale: 1.040, x: -6.000, y: -21.000 },
    "20mm": { scale: 1.060, x: 0, y: 0 }
  },

  "ironglass_red_p": {
    "85mm": { scale: 0.93, x: -57.000, y: 73.349 },
    "50mm": { scale: 0.87, x: 24.000, y: 12.000 },
    "35mm": { scale: 0.990, x: -10.860, y: 18.447 }         
  }
};

// === Calibrate autoscale whitelist ===
const CAL_AUTOSCALE_WHITELIST = {
  "Fujifilm GFX Eterna": new Set([
    "Open Gate 4:3 4K (3840x2880)",
    "4K 16:9 (3840x2160)",          // ✅ erbij
    "GF Cine 5.8K (5824x2436)",
    "Premista 5.4K (5440x2868)"
  ])
};

function shouldAutoScaleForCalibration(){
  const cam = cameraSelect?.value || "";
  const fmt = sensorFormatSelect?.value || "";
  return !!CAL_AUTOSCALE_WHITELIST?.[cam]?.has(fmt);
}

// Onthoud of we ooit autoscale hebben toegepast (zodat we later kunnen “terugzetten”)
let calibrateAutoScaled = false;

// Calibration Toggle
  
let preCalibrateScalePct = 100; // onthoud user scale van vóór calibrate

calibrateBtn?.addEventListener("click", () => {
  calibrateActive = !calibrateActive;

  // focus-glow kill
  calibrateBtn.blur();

  if (calibrateActive) {
    preCalibrateScalePct = Math.round((userScale || 1) * 100);
    calibrateAutoScaled = false;
  } else {
    calibrateUserTouchedScale = false; // ✅ optional: reset
    calibrateAutoScaled = false;
    if (scaleSlider) scaleSlider.value = String(preCalibrateScalePct);
    setUserScaleFromPct(preCalibrateScalePct);
  }

  // ✅ WACHT op nieuwe layout voordat je bars/calculations doet
  requestAnimationFrame(() => {
    updateFullscreenBars();
    resetSplitToMiddle();

    if (calibrateActive) {
      if (!calibrateUserTouchedScale) autoScaleForCalibration();
      else applyCalibrationTransforms();
    } else {
      applyCalibrationTransforms();
    }

    updateToggleHighlights();
  });
});

// --- Auto-enable Calibrate (idempotent) ---
function enableCalibrate(){
  if(!calibrateBtn) return;
  if(calibrateActive) return;  // al aan → niks doen
  calibrateBtn.click();        // gebruikt jouw bestaande toggle-logica
}

// --- Fullscreen: voorkom crop (force object-fit: contain) ---
function setFullscreenImageFit(isFs){
  // ✅ Laat calibration consistent: cover blijft altijd dezelfde mapping geven
  const fit = "cover";
  const pos = "center center";

  [beforeImgTag, afterImgTag, sbsLeftImg, sbsRightImg].forEach(img => {
    if(!img) return;
    img.style.objectFit = fit;
    img.style.objectPosition = pos;
  });
}
// --- Toggle Highlight ---
function setToggleActive(el, on){
  if(!el) return;
  el.classList.toggle("active", !!on);
  el.setAttribute("aria-pressed", on ? "true" : "false");
}

function updateToggleHighlights(){
  const isDetailOn = !!detailOverlay?.classList.contains("active");

  setToggleActive(bokehToggle, (bokehToggle?.dataset.mode === "bokeh"));
  setToggleActive(flareToggle, (flareToggle?.dataset.mode && flareToggle.dataset.mode !== "noflare"));
  setToggleActive(sbsBtn, !!sbsActive);
  setToggleActive(detailToggleButton, isDetailOn);
  setToggleActive(calibrateBtn, !!calibrateActive);
  setToggleActive(exposureBtn, !!exposureCorrectionActive);
}


/* === RAW map + download === */
const rawFileMap={
  "ironglass_red_p_35mm_t2_8":"images/raw/RedP_37mm_T2.8_RAW.tif",
  "ironglass_zeiss_jena_35mm_t2_8":"images/raw/ZeissJena_35mm_T2.8_RAW.tif",
  "ironglass_red_p_50mm_t2_8":"images/raw/RedP_58mm_T2.8_RAW.tif",
  "ironglass_zeiss_jena_50mm_t2_8":"images/raw/ZeissJena_50mm_T2.8_RAW.tif",
  "cooke_panchro_ff_50mm_t2_8":"images/raw/CookeFF_50mm_T2.8_RAW.tif"
};
function setDownloadButton(btn,key){
  if(!btn) return; // ✅ guard
  const file = rawFileMap[key] ? (RAW_BASE + rawFileMap[key].split("/").pop()) : null;

  if(file){
    btn.disabled = false;
    btn.title = "Download RAW";
    btn.onclick = () => {
      const url = new URL(file, location.href);
      window.open(url.href, "_blank", "noopener,noreferrer");
    };
  } else {
    btn.disabled = true;
    btn.title = "RAW download (coming soon)";
    btn.onclick = null;
  }
}

/* === Labels + lens info === */
function updateLensInfo(){ const L=leftSelect.value,R=rightSelect.value; lensInfoDiv.innerHTML=`<p><strong>${L}:</strong> ${lensDescriptions[L]?.text||""}</p><p><strong>${R}:</strong> ${lensDescriptions[R]?.text||""}</p>`; }

/* === Calibrate Function === */

function lensSlugFromLabel(lbl=""){
  return String(lbl).toLowerCase().replace(/\s+/g,"_");
}



function getCal(lensSlug, focal){
  return (
    CALIBRATION?.[lensSlug]?.[focal] ||
    CALIBRATION?.[lensSlug]?.[aliasFor(lensSlug, focal)] ||
    null
  );
}
// Auto scaling voor calibrate
    
  function autoScaleForCalibration(){

  // ✅ Alleen autoscale op de whitelist (GFX + specifieke modes)
  if(!shouldAutoScaleForCalibration()){
    // Als we eerder wél autoscaled hadden (bijv. je kwam van GFX), zet dan netjes terug
    if(calibrateAutoScaled){
      calibrateAutoScaled = false;

      const pct = clamp(preCalibrateScalePct || 100, 100, 150);
      if(scaleSlider) scaleSlider.value = String(pct);
      setUserScaleFromPct(pct);
    }

    // ✅ BELANGRIJK: ook zonder autoscale moet calibrate wél apply’en
    applyCalibrationTransforms();
    return;
  }

  // --- je bestaande code hieronder blijft hetzelfde ---
 const uiFocal = focalLengthSelect?.value || "35mm";
const leftSlug  = lensSlugFromLabel(leftSelect?.value || "");
const rightSlug = lensSlugFromLabel(rightSelect?.value || "");

const leftFocal  = getEffectiveFocal(leftSlug,  uiFocal, "left");
const rightFocal = getEffectiveFocal(rightSlug, uiFocal, "right");

const leftCal  = getCal(leftSlug,  leftFocal);
const rightCal = getCal(rightSlug, rightFocal);

    
  updateFullscreenBars();

    const requiredScaleFor = (img, cal) => {
    if(!cal) return 1;

    const base = (cal.scale ?? 1);
    const { dx, dy } = toCssPxFor(img, cal.x ?? 0, cal.y ?? 0);
    const { w: boxW, h: boxH } = getCalBoxFor(img);

    const needX = 1 + (2 * Math.abs(dx)) / boxW;
    const needY = 1 + (2 * Math.abs(dy)) / boxH;
    const needCover = Math.max(needX, needY, 1);

    return needCover / Math.max(0.0001, base);
  };

    const leftImg  = sbsActive ? sbsLeftImg  : afterImgTag;   // after = links
  const rightImg = sbsActive ? sbsRightImg : beforeImgTag;  // before = rechts

  let required = Math.max(
    1,
    requiredScaleFor(leftImg,  leftCal),
    requiredScaleFor(rightImg, rightCal)
  );

  required *= 1.005;

  const pct = clamp(Math.ceil(required * 100), 100, 150);

  if(scaleSlider) scaleSlider.value = String(pct);
  setUserScaleFromPct(pct);

  calibrateAutoScaled = (pct > 100);

  // ✅ extra zekerheid: transforms meteen toepassen
  applyCalibrationTransforms();
}

function setCalVars(img, dx=0, dy=0, sc=1){
  img.style.setProperty("--cal-tx", `${dx}px`);
  img.style.setProperty("--cal-ty", `${dy}px`);
  img.style.setProperty("--cal-scale", String(sc));
}

function applyCalibrationTransforms(){
  const uiFocal = focalLengthSelect?.value || "35mm";

  const leftSlug  = lensSlugFromLabel(leftSelect?.value || "");
  const rightSlug = lensSlugFromLabel(rightSelect?.value || "");

  const leftFocal  = getEffectiveFocal(leftSlug,  uiFocal, "left");
  const rightFocal = getEffectiveFocal(rightSlug, uiFocal, "right");

  const leftCal  = getCal(leftSlug,  leftFocal);
  const rightCal = getCal(rightSlug, rightFocal);

  // ✅ helper die je miste
 const apply = (img, cal, effectiveFocal) => {
  if(!img) return;

  // 1) basis: geen calibratie
  let dx = 0, dy = 0, sc = 1;

  // 2) alleen als calibrate aan + er is cal-data -> neem gecalibreerde offsets
  if(calibrateActive && cal){
    const p = toCssPxFor(img, cal.x ?? 0, cal.y ?? 0);
    dx = p.dx;
    dy = p.dy;
    sc = (cal.scale ?? 1);
  }

  // 3) ✅ ALTIJD auto-reframe erbovenop (dus werkt ook als calibrate uit staat)
  const auto = getAutoReframePx(img, effectiveFocal);
  dx += auto.ax;
  dy += auto.ay;

  setCalVars(img, dx, dy, sc);
};

  // after = links, before = rechts
  apply(afterImgTag,  leftCal,  leftFocal);
apply(beforeImgTag, rightCal, rightFocal);
  // SBS ook
  apply(sbsLeftImg,  leftCal,  leftFocal);
apply(sbsRightImg, rightCal, rightFocal);
}
/* === Image resolver === */
function aliasFor(lens, nominal){ return notes[`${lens}_${nominal}`] || nominal; }
function setImageWithFallback(imgEl, urls){
  let i = 0;

  // reset eventuele vorige error handler (we overschrijven bewust)
  imgEl.onerror = () => {
    i++;
    if(i < urls.length){
      imgEl.src = urls[i];
    }
  };

  imgEl.src = urls[i];
}

function preferCorrectedUrls(urls){
  const out = [];
  const seen = new Set();

  const push = (u) => {
    if(!u || seen.has(u)) return;
    seen.add(u);
    out.push(u);
  };

  urls.forEach(u => {
    // voeg _c toe vóór extensie: .jpg/.jpeg/.png etc
    const corrected = u.replace(/(\.[a-z0-9]+)(\?.*)?$/i, (m, ext, qs="") => `_c${ext}${qs}`);

    // alleen “corrected first” als het nog niet al _c is
    if(corrected !== u && !/_c\.[a-z0-9]+(\?.*)?$/i.test(u)){
      push(corrected);
    }
    push(u);
  });

  return out;
}

function resolveImageCandidates(lens, nominalFocal, tStr, flareMode, sceneMode, tStrFallback = null){
  const alias = aliasFor(lens, nominalFocal);

  // ✅ probeer eerst primary tStr, daarna fallback tStr (als die anders is)
  const tList = [tStr];
  if(tStrFallback && tStrFallback !== tStr) tList.push(tStrFallback);

  const list = [];
  const seen = new Set();
  const push = (p)=>{
    if(!p) return;
    if(seen.has(p)) return;
    seen.add(p);
    list.push(p);
  };

  const pushBokehPath = (file)=>{ push(`bokeh/${file}`); push(file); };

  // ✅ bases genereren voor beide tStr varianten
  const bases = [];
  tList.forEach(ts => {
    const bAlias = `${lens}_${alias}_t${ts}`;
    const bNom   = `${lens}_${nominalFocal}_t${ts}`;

    if(alias !== nominalFocal){
      bases.push(bAlias, bNom);
    } else {
      bases.push(bNom);
    }
  });

  bases.forEach(b=>{
    // 1) lensImageMap (als je later entries toevoegt)
    push(lensImageMap[`${b}_${sceneMode}_${flareMode}`]);
    push(lensImageMap[`${b}_${sceneMode}`]);
    push(lensImageMap[`${b}_${flareMode}`]);
    push(lensImageMap[b]);

    // 2) bokeh scene
    if(sceneMode === "bokeh"){
      pushBokehPath(`${b}_bokeh.jpg`);
      pushBokehPath(`${b}_bokeh_${flareMode}.jpg`);
      pushBokehPath(`${b}_${flareMode}_bokeh.jpg`);
    }

    // 3) portrait/normal
    push(`${b}_${flareMode}.jpg`);
    if(flareMode === "doubleflare") push(`${b}_flare.jpg`);
    push(`${b}_noflare.jpg`);
    push(`${b}.jpg`);
  });

  return list.map(f => IMG_BASE + f);
}

function updateImages(){
  const LL = leftSelect.value.toLowerCase().replace(/\s+/g,"_");
  const RR = rightSelect.value.toLowerCase().replace(/\s+/g,"_");

   const uiFocal = focalLengthSelect.value;

  // ✅ 1) EERST MF-alt state updaten
  updateMfAltUI();

  // ✅ 2) DAN: T-stop dropdowns vullen op basis van lens + (effective) focal
  updateTStopDropdowns();

  // ✅ 3) NU pas uiTL/uiTR lezen (want dropdown kan veranderd zijn)
  const uiTL = tStopLeftSelect.value;
  const uiTR = tStopRightSelect.value;

  // ✅ 4) effective focal bepalen
  const leftFocal  = getEffectiveFocal(LL, uiFocal, "left");
  const rightFocal = getEffectiveFocal(RR, uiFocal, "right");

  // ✅ T-stops berekenen per kant (focal-aware)
  const tL = fileTStopFor(LL, uiTL, leftFocal);
  const tR = fileTStopFor(RR, uiTR, rightFocal);

  const tLActual = actualTStopForLabel(LL, uiTL, leftFocal);
  const tRActual = actualTStopForLabel(RR, uiTR, rightFocal);

  const flareMode = flareToggle.dataset.mode || "noflare";
  const sceneMode = bokehToggle?.dataset.mode || "portrait";

  // fallback alleen als je “oude alias table” iets anders zou kiezen
 const tLFallback = String((TSTOP_FILE_ALIAS?.[LL]?.[uiTL] ?? uiTL)).replace(/\./g, "_");
const tRFallback = String((TSTOP_FILE_ALIAS?.[RR]?.[uiTR] ?? uiTR)).replace(/\./g, "_");

 let leftCandidates  = resolveImageCandidates(LL, leftFocal,  tL, flareMode, sceneMode, tLFallback);
let rightCandidates = resolveImageCandidates(RR, rightFocal, tR, flareMode, sceneMode, tRFallback);

if(exposureCorrectionActive){
  leftCandidates  = preferCorrectedUrls(leftCandidates);
  rightCandidates = preferCorrectedUrls(rightCandidates);
}

  // jouw tool: before = rechts, after = links
  setImageWithFallback(beforeImgTag, rightCandidates);
  setImageWithFallback(afterImgTag,  leftCandidates);

  // ✅ labels + links
 const lf = aliasFor(LL, leftFocal);
const rf = aliasFor(RR, rightFocal);

  const lu = lensDescriptions[leftSelect.value]?.url  || "#";
  const ru = lensDescriptions[rightSelect.value]?.url || "#";

const tLNote = (String(tLActual) !== String(uiTL)) ? ` (eig. T${tLActual})` : "";
const tRNote = (String(tRActual) !== String(uiTR)) ? ` (eig. T${tRActual})` : "";

const uiTLLabel = `T${uiTL}`;
const uiTRLabel = `T${uiTR}`;

  const lfDisplay = String(lf).replace(/_m(35|50)$/, "");
  const rfDisplay = String(rf).replace(/_m(35|50)$/, "");

  leftLabel.innerHTML  = `Lens: <a href="${lu}" target="_blank" rel="noopener noreferrer">${leftSelect.value} ${lfDisplay} ${uiTLLabel}${tLNote}</a>`;
rightLabel.innerHTML = `Lens: <a href="${ru}" target="_blank" rel="noopener noreferrer">${rightSelect.value} ${rfDisplay} ${uiTRLabel}${tRNote}</a>`;

  // ✅ RAW download keys moeten matchen met je “file focal” (aliasFor) + file t-stop
  setDownloadButton(downloadLeftRawButton,  `${LL}_${lf}_t${tL}`);
  setDownloadButton(downloadRightRawButton, `${RR}_${rf}_t${tR}`);

  // SBS ook updaten
  if(sbsActive){
    setImageWithFallback(sbsLeftImg,  leftCandidates);
    setImageWithFallback(sbsRightImg, rightCandidates);
  }

  // updateMfAltUI();   // ❌ niet meer hier
resetSplitToMiddle();

  if(calibrateActive){
    if(!calibrateUserTouchedScale) autoScaleForCalibration();
    else applyCalibrationTransforms();
  } else {
    applyCalibrationTransforms();
  }
}

/* === Init defaults === */
/* === Init defaults === */
leftSelect.value  = "IronGlass Sovjet MKII";
rightSelect.value = "IronGlass Zeiss Jena";
focalLengthSelect.value = "35mm";
tStopLeftSelect.value   = "2.8";
tStopRightSelect.value  = "2.8";

updateLensInfo();
updateFocalOptionsForCurrentLenses();
updateLensOptionsForCurrentFocal(); // ✅ bouwt lens dropdowns op basis van focal + updateMfAltUI + T-stops + images

/* === AUTO: na ESC fullscreen exit -> 1 klik om terug te gaan === */
const AUTO_RETURN_FULLSCREEN_ON_ESC = true;

let fsExitWasEsc = false;
let prevWrapperFullscreen = false;
let exitRequestedByButton = false;

function showFsReturnGate(){
  const gate  = document.getElementById("fsGate");
  const btn   = document.getElementById("fsGateBtn");
  if(!gate || !btn) return;

  gate.dataset.mode = "return"; // ✅ belangrijk
  // (optioneel) copy aanpassen als je die elementen hebt
  const title = gate.querySelector(".fsGateTitle");
  const text  = gate.querySelector(".fsGateText");
  if(title) title.textContent = "Fullscreen verlaten";
  if(text)  text.textContent  = "Klik om direct weer fullscreen te gaan.";

  const closeGate = () => gate.setAttribute("aria-hidden", "true");
  const openGate  = () => gate.setAttribute("aria-hidden", "false");

 const goBackFullscreen = async () => {
  closeGate();

  // ✅ BELANGRIJK:
  // Niet terug naar jouw viewer (comparisonWrapper),
  // maar "browser/document fullscreen" proberen.
  // (macOS echte window-fullscreen kun je niet via JS forceren)
  try{
    requestBrowserFullscreen();  // document.documentElement.requestFullscreen
  } catch(e){
    console.warn("Browser fullscreen request blocked:", e);
  }
};

  // knop + klik op backdrop
  btn.onclick = goBackFullscreen;
  gate.onclick = (e) => { if(e.target === gate) goBackFullscreen(); };

  openGate();
}

function armReturnToFullscreenIfNeeded(){
  if(!AUTO_RETURN_FULLSCREEN_ON_ESC) return;
  if(!fsExitWasEsc) return;

  fsExitWasEsc = false;
  showFsReturnGate();
}

/* === Resizes + fullscreen === */
/* === Resizes + fullscreen === */
let _lastFs = null;
let _lastFsTs = 0;

function onFsChange(){
  const fs = isWrapperFullscreen();
  const now = performance.now();

  // ✅ voorkomt dubbel afgaan (fullscreenchange + webkitfullscreenchange)
  if(_lastFs === fs && (now - _lastFsTs) < 80) return;
  _lastFs = fs;
  _lastFsTs = now;

  const exitedFullscreen = (prevWrapperFullscreen && !fs);
  prevWrapperFullscreen = fs;

  setFullscreenImageFit(fs);

  if(fs){
    clearInlineHeights();
    pulseFsBarsSafe({duration:1400});
  } else {
    comparisonWrapper.style.padding = "0px";
    const {w,h}=getCurrentWH();
    comparisonWrapper.style.setProperty("aspect-ratio","auto");
    setWrapperSizeByAR(w,h);
    requestAnimationFrame(()=>setWrapperSizeByAR(w,h));
    ["--lb-top","--lb-bottom","--lb-left","--lb-right"].forEach(v=>comparisonWrapper.style.setProperty(v,"0px"));
    slider.style.top="0px";
    slider.style.height="100%";
    slider.style.bottom="0";
  }

  if(exitedFullscreen){
    if(!exitRequestedByButton){
      showFsReturnGate();
    }
  }

  scheduleLayoutStabilize();
}

document.addEventListener("fullscreenchange",onFsChange);
document.addEventListener("webkitfullscreenchange",onFsChange);
window.addEventListener("resize",()=>{
  if(isWrapperFullscreen()){
    updateFullscreenBars();
    resetSplitToMiddle();

    if(calibrateActive){
      autoScaleForCalibration();
    } else {
      applyCalibrationTransforms();
    }
  } else {
    const {w,h}=getCurrentWH();
    setWrapperSizeByAR(w,h);
  }
});
async function toggleFullscreen(){
 if(isWrapperFullscreen()){
  exitRequestedByButton = true;

  await exitAnyFullscreen();

  setTimeout(() => { exitRequestedByButton = false; }, 0);

  endFsEnterMask();

  comparisonWrapper.style.padding = "0px";        // ✅ HIER
    

    const {w,h}=getCurrentWH();
    comparisonWrapper.style.setProperty("aspect-ratio","auto");
    setWrapperSizeByAR(w,h);
    requestAnimationFrame(()=>setWrapperSizeByAR(w,h));
    ["--lb-top","--lb-bottom","--lb-left","--lb-right"].forEach(v=>comparisonWrapper.style.setProperty(v,"0px"));
    return;
  }

  beginFsEnterMask();

  try{
    clearInlineHeights();
    await enterWrapperFullscreen();
  } catch(e){
    endFsEnterMask();
    return;
  }
}
fullscreenBtn?.addEventListener("click", toggleFullscreen);

/* === SxS toggle === */
function setSideBySide(on,{force=false}={}) {
  if(isExportingPdf && !force) return; const next=!!on; if(!force && sbsActive===next) return; sbsActive=next;
  document.body.classList.toggle("sbs-mode",sbsActive); comparisonWrapper.classList.toggle("sbs-mode",sbsActive);
  const beforeWrapper=beforeImgTag.parentElement;
  if(sbsActive){ sbsWrapper.style.display="flex"; beforeWrapper.style.display="none"; afterWrapper.style.display="none"; sbsLeftImg.src=afterImgTag.src; sbsRightImg.src=beforeImgTag.src; slider.style.display="none"; ["--lb-top","--lb-bottom","--lb-left","--lb-right"].forEach(v=>comparisonWrapper.style.setProperty(v,"0px")); if(isWrapperFullscreen()) clearInlineHeights();
  } else { sbsWrapper.style.display="none"; beforeWrapper.style.display=""; afterWrapper.style.display=""; slider.style.display=""; }
    const {w,h}=getCurrentWH();
  setWrapperSizeByAR(w,h);
  requestAnimationFrame(()=>setWrapperSizeByAR(w,h));

    if(!sbsActive){
    updateFullscreenBars();
    resetSplitToMiddle();
  }

  applyCalibrationTransforms();
  updateToggleHighlights();
}

sbsBtn?.addEventListener("click",()=>setSideBySide(!sbsActive));
toggleBtn?.addEventListener("click",()=>{ 
  resetUserScale();

  const l=leftSelect.value; leftSelect.value=rightSelect.value; rightSelect.value=l; 
  const t=tStopLeftSelect.value; tStopLeftSelect.value=tStopRightSelect.value; tStopRightSelect.value=t; 

  updateMfAltUI();

  // ✅ HIER TOEVOEGEN:
  const { changed } = updateFocalOptionsForCurrentLenses();
  if(changed){
    updateLensOptionsForCurrentFocal();
    return;
  }

  updateLensInfo(); 
  updateImages(); 
});


function recalcLayout(){
  updateFullscreenBars();
  resetSplitToMiddle();
  if(calibrateActive) autoScaleForCalibration();
  else applyCalibrationTransforms();
}

// 1x listeners, klaar
beforeImgTag.addEventListener("load", recalcLayout);
afterImgTag.addEventListener("load", recalcLayout);
beforeImgTag.addEventListener("error", recalcLayout);
afterImgTag.addEventListener("error", recalcLayout);

// eerste keer na init/updateImages
recalcLayout();

/* === Scaling (UI) === */
let pendingScaleRAF = null;

function setUserScaleFromPct(pct){
  userScale = clamp(pct/100, 1.0, 1.5);
  document.documentElement.style.setProperty("--viewer-scale", String(userScale));
  if(scaleVal) scaleVal.textContent = Math.round(userScale*100) + "%";

  // ✅ wacht tot layout geüpdatet is voordat je usableW/H gebruikt
  if(pendingScaleRAF) cancelAnimationFrame(pendingScaleRAF);
  pendingScaleRAF = requestAnimationFrame(() => {
    pendingScaleRAF = null;
    updateFullscreenBars();
    resetSplitToMiddle();
    applyCalibrationTransforms();
  });
}

function resetUserScale(){
  if(scaleSlider) scaleSlider.value = "100";
  setUserScaleFromPct(100);
}



// <-- EN DEZE REGEL VERVANGT je bestaande input-listener
scaleSlider?.addEventListener("input", (e) => {
  setUserScaleFromPct(e.target.value);
  if (calibrateActive) calibrateUserTouchedScale = true;
});

if(scaleSlider) scaleSlider.value = "100";
setUserScaleFromPct(100);

/* === Keyboard shortcuts === */
function onGlobalKeydown(e){
  if(e.ctrlKey||e.metaKey||e.altKey) return;
  const tag=(document.activeElement?.tagName||"").toUpperCase(); if(["INPUT","TEXTAREA"].includes(tag)) return;
  if(isExportingPdf) return;
  const k=(e.key||"").toLowerCase();
  if(k==="p"){ e.preventDefault(); toggleFullscreen(); }
  if(k==="d"){ e.preventDefault(); detailToggleButton?.click(); }
  if(k==="b"){ e.preventDefault(); bokehToggle?.click(); }
  if(k==="s"){ e.preventDefault(); setSideBySide(!sbsActive); }
  if(k==="f"){ e.preventDefault(); flareToggle.click(); }
}
window.addEventListener("keydown",onGlobalKeydown,{capture:true});

[leftSelect, rightSelect].forEach(el =>
  el.addEventListener("change", () => {

    // ✅ 1) eerst focal dropdown corrigeren op basis van de gekozen lens-pair
    const { changed } = updateFocalOptionsForCurrentLenses();

    calibrateUserTouchedScale = false;
    resetUserScale();

    // ✅ 2) als focal hierdoor veranderd is → laat je bestaande focal-flow alles rebuilden
    if(changed){
      updateLensOptionsForCurrentFocal();
      return;
    }

    // ✅ 3) anders normale flow
    syncTStopsOnContextChange();
    updateLensInfo();
    updateImages();
  })
);

[focalLengthSelect, tStopLeftSelect, tStopRightSelect].forEach(el => {
  el.addEventListener("change", () => {
    if (el === focalLengthSelect) {
      calibrateUserTouchedScale = false;
      updateLensOptionsForCurrentFocal(); // ✅ dit doet alles al
      return;
    }
    updateImages();
  });
});
// ===== DETAIL (zoom) viewer =====
let detailActive = false;

const leftDetailImg  = leftDetail?.querySelector("img");
const rightDetailImg = rightDetail?.querySelector("img");

detailToggleButton?.addEventListener("click", () => {
  if(!detailOverlay || !leftDetail || !rightDetail) return; // ✅ guard
  detailActive = !detailActive;
  detailOverlay.classList.toggle("active", detailActive);

  if(!detailActive){
    leftDetail.style.display = "none";
    rightDetail.style.display = "none";
  }
  updateToggleHighlights();
});

function getDetailConfig(){
  const fs = isWrapperFullscreen();

  // tweak deze twee waardes naar smaak
  return fs
    ? { zoom: 2.2, size: 320 }   // fullscreen: minder ingezoomd + iets grotere box
    : { zoom: 3.2, size: 260 };  // normaal: zoals je nu hebt
}

document.addEventListener("keydown", (e) => {
  if(e.key !== "Escape") return;

  // 1) Als detail aan staat: sluit detail (zoals je al deed)
  if(detailActive){
    detailActive = false;
    detailOverlay?.classList.remove("active");
    detailToggleButton?.classList.remove("active");
    leftDetail && (leftDetail.style.display = "none");
    rightDetail && (rightDetail.style.display = "none");
    updateToggleHighlights();
    return;
  }

  // 2) Als we in wrapper fullscreen zitten: markeer "exit was esc"
  //    (ESC zal fullscreen verlaten; dat kunnen we niet blokkeren)
  if(isWrapperFullscreen()){
    fsExitWasEsc = true;
  }
});
// Helper: force box square + force img sizing (ignore theme constraints)
function showDetailBoxAt(
  e, box, img, srcEl, rect, rx, ry, side,
  zoom = 3.2, size = 260, gap = 24,
  pos = null // <-- NIEUW
){
  if(!box || !img || !srcEl || !rect) return false;

  if(rx < 0 || rx > 1 || ry < 0 || ry > 1){
    box.style.display = "none";
    return false;
  }

  if(img.src !== srcEl.src) img.src = srcEl.src;

  const zw = rect.width  * zoom;
  const zh = rect.height * zoom;

  const offX = -(rx * zw) + (size / 2);
  const offY = -(ry * zh) + (size / 2);

  // ✅ kill eventuele CSS die je positie “verplaatst”
  box.style.setProperty("transform", "none", "important");
  box.style.setProperty("box-sizing", "border-box", "important");

  let x, y;

  // ✅ als we pos meegeven: gebruik exact die coördinaten (GEEN extra clamp)
  if(pos && typeof pos.x === "number" && typeof pos.y === "number"){
    x = pos.x;
    y = pos.y;
  } else {
    // oude gedrag
    x = (side === "left")
      ? (e.clientX - size - gap)
      : (e.clientX + gap);

    y = e.clientY - (size/2);

    const pad = 8;
    x = Math.max(pad, Math.min(window.innerWidth  - size - pad, x));
    y = Math.max(pad, Math.min(window.innerHeight - size - pad, y));
  }

  box.style.setProperty("width",  `${size}px`, "important");
  box.style.setProperty("height", `${size}px`, "important");
  box.style.setProperty("aspect-ratio", "1 / 1", "important");
  box.style.left = `${x}px`;
  box.style.top  = `${y}px`;
  box.style.display = "block";

  img.style.setProperty("max-width", "none", "important");
  img.style.setProperty("max-height","none", "important");
  img.style.setProperty("width",  `${zw}px`, "important");
  img.style.setProperty("height", `${zh}px`, "important");
  img.style.setProperty("transform", `translate(${offX}px, ${offY}px)`, "important");

  return true;
}
function getFittedImageRect(imgEl){
  const r = imgEl.getBoundingClientRect();

  // als image nog niet loaded is: val terug op element-rect
  const iw = imgEl.naturalWidth;
  const ih = imgEl.naturalHeight;
  if(!iw || !ih){
    return { left:r.left, top:r.top, width:r.width, height:r.height, right:r.right, bottom:r.bottom };
  }

  const cs = getComputedStyle(imgEl);
  const fit = cs.objectFit || "fill";

  // Geen contain/cover => er is geen “inner letterbox”
  if(fit !== "contain" && fit !== "cover"){
    return { left:r.left, top:r.top, width:r.width, height:r.height, right:r.right, bottom:r.bottom };
  }

  // object-position parser → returns {x,y} in 0..1 (default 0.5)
  const parsePos = (posStr) => {
    const norm = (v) => {
      if(!v) return 0.5;
      v = v.toLowerCase();

      if(v === "left" || v === "top") return 0;
      if(v === "right" || v === "bottom") return 1;
      if(v === "center") return 0.5;

      if(v.endsWith("%")){
        const p = parseFloat(v);
        return isFinite(p) ? (p/100) : 0.5;
      }

      if(v.endsWith("px")){
        const px = parseFloat(v);
        return { px: isFinite(px) ? px : 0 };
      }

      const n = parseFloat(v);
      if(isFinite(n)) return n;
      return 0.5;
    };

    const parts = (posStr || "50% 50%").trim().split(/\s+/);
    const xRaw = parts[0] || "50%";
    const yRaw = parts[1] || "50%";
    return { xRaw, yRaw, norm };
  };

  const scale = (fit === "contain")
    ? Math.min(r.width / iw, r.height / ih)
    : Math.max(r.width / iw, r.height / ih);

  const drawW = iw * scale;
  const drawH = ih * scale;

  const leftoverX = r.width  - drawW;
  const leftoverY = r.height - drawH;

  const { xRaw, yRaw, norm } = parsePos(cs.objectPosition);

  const pxX = norm(xRaw);
  const pxY = norm(yRaw);

  const toOffset = (val, leftover) => {
    if(typeof val === "number"){
      return leftover * val;
    }
    if(val && typeof val === "object" && typeof val.px === "number"){
      // clamp grofweg binnen leftover-range
      return Math.max(Math.min(val.px, Math.max(leftover, 0)), Math.min(leftover, 0));
    }
    return leftover * 0.5;
  };

  const offX = toOffset(pxX, leftoverX);
  const offY = toOffset(pxY, leftoverY);

  const left   = r.left + offX;
  const top    = r.top  + offY;

  return {
    left,
    top,
    width:  drawW,
    height: drawH,
    right:  left + drawW,
    bottom: top + drawH
  };
}

function getOuterViewerScale(){
  const sensor = parseFloat(getComputedStyle(comparisonWrapper).getPropertyValue("--sensor-scale")) || 1;
  const viewer = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--viewer-scale")) || 1;
  return sensor * viewer;
}

// Zet rx/ry (0..1 in de VIEWER) om naar rx/ry (0..1 in de ONGETRANSFORMEERDE image)
// zodat de detail-zoom exact de gecalibreerde view volgt.
function uncalibrateRxRy(imgEl, rect, rx, ry){
  if(!imgEl || !rect) return { rx, ry };

  const cs = getComputedStyle(imgEl);

  const tx = parseFloat(cs.getPropertyValue("--cal-tx")) || 0;
  const ty = parseFloat(cs.getPropertyValue("--cal-ty")) || 0;
  const sc = parseFloat(cs.getPropertyValue("--cal-scale")) || 1;

  const outer = getOuterViewerScale();

  // translate wordt in jouw transform nog vermenigvuldigd door outer-scale (maar niet door cal-scale)
  const dxN = (tx * outer) / Math.max(1, rect.width);
  const dyN = (ty * outer) / Math.max(1, rect.height);

  // 1) undo translate
  let u = rx - dxN;
  let v = ry - dyN;

  // 2) undo cal-scale (scale rond center)
  const inv = 1 / Math.max(0.0001, sc);
  u = (u - 0.5) * inv + 0.5;
  v = (v - 0.5) * inv + 0.5;

  return { rx: u, ry: v };
}

document.addEventListener("mousemove", (e) => {
  if(!detailActive) return;

 // ===== SBS MODE =====
if(sbsActive){
  const L = getFittedImageRect(sbsLeftImg);
const R = getFittedImageRect(sbsRightImg);

  const inL = (e.clientX >= L.left && e.clientX <= L.right && e.clientY >= L.top && e.clientY <= L.bottom);
  const inR = (e.clientX >= R.left && e.clientX <= R.right && e.clientY >= R.top && e.clientY <= R.bottom);

  if(!inL && !inR){
    leftDetail.style.display = "none";
    rightDetail.style.display = "none";
    return;
  }

  const rx = inL ? (e.clientX - L.left) / L.width  : (e.clientX - R.left) / R.width;
  const ry = inL ? (e.clientY - L.top)  / L.height : (e.clientY - R.top)  / R.height;

  const cfg  = getDetailConfig();
const size = cfg.size;
const zoom = cfg.zoom;
const pad  = 8;

  // ✅ clamp 1x voor het hele duo
  const groupW = size * 2;
  let groupX = e.clientX - (groupW / 2);
let groupY = e.clientY - (size / 2);

groupX = clamp(groupX, pad, window.innerWidth  - groupW - pad);
groupY = clamp(groupY, pad, window.innerHeight - size  - pad);

// ✅ subpixel seams fix
groupX = Math.round(groupX);
groupY = Math.round(groupY);

const Lp = uncalibrateRxRy(sbsLeftImg,  L, rx, ry);
const Rp = uncalibrateRxRy(sbsRightImg, R, rx, ry);

showDetailBoxAt(
  e, leftDetail, leftDetailImg, sbsLeftImg, L, Lp.rx, Lp.ry,
  "left", zoom, size, 0,
  { x: groupX, y: groupY }
);

showDetailBoxAt(
  e, rightDetail, rightDetailImg, sbsRightImg, R, Rp.rx, Rp.ry,
  "right", zoom, size, 0,
  { x: groupX + size, y: groupY }
);
  return;
}

  // ===== SLIDER MODE (before/after) =====
  // 1) eerst checken of cursor in usable window zit (geen letterbox)
  const host = comparisonWrapper.getBoundingClientRect();
  const lbL = comparisonWrapper._lbLeft || 0;
  const lbT = comparisonWrapper._lbTop  || 0;
  const uW  = comparisonWrapper._usableW || host.width;
  const uH  = comparisonWrapper._usableH || host.height;

  const usableRect = {
    left: host.left + lbL,
    top:  host.top  + lbT,
    right: host.left + lbL + uW,
    bottom: host.top + lbT + uH
  };

  const inUsable =
    e.clientX >= usableRect.left && e.clientX <= usableRect.right &&
    e.clientY >= usableRect.top  && e.clientY <= usableRect.bottom;

  if(!inUsable){
    leftDetail.style.display = "none";
    rightDetail.style.display = "none";
    return;
  }

 // 2) rx/ry PER IMAGE ...
const rectL = getFittedImageRect(afterImgTag);
const rectR = getFittedImageRect(beforeImgTag);

const rxL = (e.clientX - rectL.left) / rectL.width;
const ryL = (e.clientY - rectL.top)  / rectL.height;

const rxR = (e.clientX - rectR.left) / rectR.width;
const ryR = (e.clientY - rectR.top)  / rectR.height;

const cfg = getDetailConfig();
const size = cfg.size;
const zoom = cfg.zoom;

const pad = 8;
const gap = 0; // ✅ geen ruimte tussen de twee boxes

// ✅ 1x clamp voor het hele duo
const groupW = (size * 2) + gap;

// Als gap=0 wil je meestal dat je cursor ongeveer op de “naad” zit:
let groupX = e.clientX - size;
let groupY = e.clientY - (size / 2);

groupX = clamp(groupX, pad, window.innerWidth  - groupW - pad);
groupY = clamp(groupY, pad, window.innerHeight - size  - pad);

groupX = Math.round(groupX);
groupY = Math.round(groupY);

const pL = uncalibrateRxRy(afterImgTag,  rectL, rxL, ryL);
const pR = uncalibrateRxRy(beforeImgTag, rectR, rxR, ryR);

const showL = showDetailBoxAt(
  e, leftDetail, leftDetailImg, afterImgTag,
  rectL, pL.rx, pL.ry, "left", zoom, size, 0,
  { x: groupX, y: groupY }
);

const showR = showDetailBoxAt(
  e, rightDetail, rightDetailImg, beforeImgTag,
  rectR, pR.rx, pR.ry, "right", zoom, size, 0,
  { x: groupX + size, y: groupY } // ✅ direct naast elkaar
);

if(!showL) leftDetail.style.display  = "none";
if(!showR) rightDetail.style.display = "none";

 if(!showL) leftDetail.style.display  = "none";
if(!showR) rightDetail.style.display = "none";
}); // <-- SLUIT de mousemove listener HIER af



function updateFullscreenBars(){
  // ✅ nooit padding gebruiken voor bars (anders raakt clip/slider space out of sync)
  comparisonWrapper.style.padding = "0px";
  comparisonWrapper.style.boxSizing = "border-box";

  if(sbsActive){
    ["--lb-top","--lb-bottom","--lb-left","--lb-right"].forEach(v=>comparisonWrapper.style.setProperty(v,"0px"));
    comparisonWrapper._lbLeft=comparisonWrapper._lbRight=comparisonWrapper._lbTop=comparisonWrapper._lbBottom=0;

    const r = comparisonWrapper.getBoundingClientRect();
    comparisonWrapper._usableW = r.width;
    comparisonWrapper._usableH = r.height;
    return;
  }

  const rect = comparisonWrapper.getBoundingClientRect();
  const hostW = Math.max(1, Math.round(rect.width));
  const hostH = Math.max(1, Math.round(rect.height));
  const targetAR = getTargetAR();
  const hostAR = hostW / hostH;

  let usedW, usedH;
  let lbL = 0, lbR = 0, lbT = 0, lbB = 0;

  if(hostAR > targetAR){
    usedH = hostH;
    usedW = Math.round(usedH * targetAR);
    const leftover = hostW - usedW;
    lbL = Math.floor(leftover / 2);
    lbR = leftover - lbL;
  } else {
    usedW = hostW;
    usedH = Math.round(usedW / targetAR);
    const leftover = hostH - usedH;
    lbT = Math.floor(leftover / 2);
    lbB = leftover - lbT;
  }

  [["--lb-top",lbT],["--lb-bottom",lbB],["--lb-left",lbL],["--lb-right",lbR]]
    .forEach(([k,v]) => comparisonWrapper.style.setProperty(k, `${v}px`));

  Object.assign(comparisonWrapper, {
    _lbLeft: lbL, _lbRight: lbR, _lbTop: lbT, _lbBottom: lbB,
    _usableW: usedW, _usableH: usedH
  });
}
function resetSplitToMiddle(){
  if(sbsActive) return;
  if(document.body.classList.contains("dragging")) return;

  updateFullscreenBars(); // ✅ zeker weten dat lb/usable klopt

  const usableW = Math.max(1, Math.round(comparisonWrapper._usableW || 1));
  const usableH = Math.max(1, Math.round(comparisonWrapper._usableH || 1));

  const lbL  = comparisonWrapper._lbLeft   || 0;
  const lbT  = comparisonWrapper._lbTop    || 0;

  const mid = Math.round(usableW / 2);

  // afterWrapper is nu al "inset naar usable window" via CSS, dus clip is puur usableW-space
  const inset = `inset(0px ${usableW - mid}px 0px 0px)`;
  afterWrapper.style.clipPath = inset;
  afterWrapper.style.webkitClipPath = inset;

  // slider in wrapper-space: usable start = lbL
  slider.style.left   = (lbL + mid) + "px";
  slider.style.top    = lbT + "px";
  slider.style.height = usableH + "px";
  slider.style.bottom = "auto";
}

function updateSliderPosition(clientX){
  updateFullscreenBars(); // ✅ bars/usable up-to-date

  const rect = comparisonWrapper.getBoundingClientRect();
  const lbL  = comparisonWrapper._lbLeft   || 0;
  const lbT  = comparisonWrapper._lbTop    || 0;

  const usableW = Math.max(1, Math.round(comparisonWrapper._usableW || 1));
  const usableH = Math.max(1, Math.round(comparisonWrapper._usableH || 1));

  // clientX -> usable-space (0..usableW)
  const clamped = clamp(Math.round(clientX - rect.left - lbL), 0, usableW);

  const rightInset = (usableW - clamped);

  // afterWrapper is usable-sized (door CSS inset), dus clip = usable-space
  const inset = `inset(0px ${Math.max(0, rightInset)}px 0px 0px)`;
  afterWrapper.style.clipPath = inset;
  afterWrapper.style.webkitClipPath = inset;

  // slider in wrapper-space: voeg lb offsets toe
  slider.style.left   = (lbL + clamped) + "px";
  slider.style.top    = lbT + "px";
  slider.style.height = usableH + "px";
  slider.style.bottom = "auto";
}

/* === SLIDER DRAG (Pointer Events, rock solid) === */
let isDraggingSlider = false;

function startSliderDrag(e){
  if(sbsActive || isExportingPdf) return;

  isDraggingSlider = true;
  document.body.classList.add("dragging");

  // Pointer capture = blijft volgen, ook als je buiten de slider komt
  try { slider.setPointerCapture(e.pointerId); } catch(_) {}

  updateFullscreenBars();          // ensures usableW/H correct
  updateSliderPosition(e.clientX); // jump meteen naar startpunt

  e.preventDefault();
}

function moveSliderDrag(e){
  if(!isDraggingSlider) return;
  updateSliderPosition(e.clientX);
  e.preventDefault();
}

function endSliderDrag(e){
  if(!isDraggingSlider) return;

  isDraggingSlider = false;
  document.body.classList.remove("dragging");

  try { slider.releasePointerCapture(e.pointerId); } catch(_) {}

  e.preventDefault();
}

// Belangrijk: passive:false zodat preventDefault werkt op touch
slider.addEventListener("pointerdown", startSliderDrag, { passive:false });
window.addEventListener("pointermove", moveSliderDrag, { passive:false });
window.addEventListener("pointerup", endSliderDrag, { passive:false });
window.addEventListener("pointercancel", endSliderDrag, { passive:false });

// Optioneel: klik in het beeld = slider jump (nice UX)
comparisonWrapper.addEventListener("pointerdown", (e) => {
  if(sbsActive || isExportingPdf) return;
  if(e.target === slider) return; // slider zelf handelt drag af
  updateFullscreenBars();
  updateSliderPosition(e.clientX);
}, { passive:false });

/* === Autoscale per lens/focal (100–130%) === */
const LENS_SCALE_TABLE={
  "35mm":{ panchro:100,"red p":116,mkii:117,jena:112,vespid:109,arles:110,"lomo standard speed":110 },
  "75mm":{ panchro:100,"red p":118,mkii:117,jena:110,vespid:100,arles:100,"lomo standard speed":100 },
  "120mm": { } // voorlopig leeg = fallback 100%
};
function normalizeLensKey(lbl=""){ const s=lbl.toLowerCase(); if(s.includes("panchro"))return"panchro"; if(s.includes("red p"))return"red p"; if(s.includes("mk ii")||s.includes("mkii")||s.includes("mk2"))return"mkii"; if(s.includes("jena"))return"jena"; if(s.includes("vespid"))return"vespid"; if(s.includes("arles"))return"arles"; if(s.includes("lomo")&&s.includes("standard"))return"lomo standard speed"; return""; }
function isScaleAllowedBySensor(){ const {w,h}=getCurrentWH(), EPS=0.001; return (w>30.720+EPS)&&(h>16.200+EPS); }
function scaleForLens(lbl, focal){ const k=normalizeLensKey(lbl), fk=String(focal).includes("75")?"75mm":"35mm"; return (LENS_SCALE_TABLE[fk]||{})[k]||100; }
function applyScalePercent(p){ const v=clamp(Math.round(p),100,150); if(scaleSlider) scaleSlider.value=String(v); setUserScaleFromPct(v); }
function autoScaleNow(){ if(!isScaleAllowedBySensor()) return applyScalePercent(100); const l=leftSelect?.value||"", r=rightSelect?.value||"", f=focalLengthSelect?.value||"35mm"; applyScalePercent(Math.max(scaleForLens(l,f),scaleForLens(r,f))); }


/* === Link targets noopener/noreferrer safeguard === */
(function enforceBlankTargets(){
  const setBlank=a=>{ if(!a.target) a.target="_blank"; const rel=(a.getAttribute("rel")||"").split(/\s+/); if(!rel.includes("noopener")) rel.push("noopener"); if(!rel.includes("noreferrer")) rel.push("noreferrer"); a.setAttribute("rel",rel.join(" ").trim()); };
  document.querySelectorAll("a[href]").forEach(setBlank);
  new MutationObserver(muts=>muts.forEach(m=>m.addedNodes.forEach(n=>{ if(n.nodeType!==1) return; if(n.matches?.("a[href]")) setBlank(n); n.querySelectorAll?.("a[href]").forEach(setBlank); }))).observe(document.documentElement,{childList:true,subtree:true});
})();
function getJsPDFCtor(){
  // cdnjs UMD: window.jspdf.jsPDF
  if (window.jspdf && window.jspdf.jsPDF) return window.jspdf.jsPDF;

  // sommige builds exposen window.jsPDF
  if (window.jsPDF) return window.jsPDF;

  return null;
}

function getHtml2CanvasFn(){
  return window.html2canvas || null;
}
/* === PDF export (4 pagina’s) === */
function loadHTMLImage(src){ return new Promise((res,rej)=>{ const im=new Image(); im.crossOrigin="anonymous"; im.onload=()=>res(im); im.onerror=rej; im.src=src; }); }
async function renderToSensorAR(imgOrURL, targetAR, outH, scale=1, yFrac=0){
  const img=typeof imgOrURL==="string"?await loadHTMLImage(imgOrURL):imgOrURL, H=outH, W=Math.round(H*targetAR);
  const cvs=document.createElement("canvas"); cvs.width=W; cvs.height=H; const ctx=cvs.getContext("2d",{alpha:false}); ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality="high";
  const srcAR=(img.naturalWidth||img.width)/(img.naturalHeight||img.height); let dW,dH,ox,oy;
  if(srcAR<targetAR){ dW=W; dH=W/srcAR; ox=0; oy=(H-dH)/2; } else { dH=H; dW=H*srcAR; oy=0; ox=(W-dW)/2; }
   if(scale!==1){ const oW=dW,oH=dH; dW=oW*scale; dH=oH*scale; ox-=(dW-oW)/2; oy-=(dH-oH)/2; }

  if(yFrac){
    oy += (yFrac * H);
  }

  ctx.drawImage(img,Math.round(ox),Math.round(oy),Math.round(dW),Math.round(dH));
  return { dataURL:cvs.toDataURL("image/jpeg",1.0), W, H };
}
function fitContain(sw,sh,bw,bh){ const sAR=sw/sh, bAR=bw/bh; let w,h; if(sAR>bAR){ w=bw; h=Math.round(w/sAR); } else { h=bh; w=Math.round(h*sAR); } return { w,h,x:Math.round((bw-w)/2), y:Math.round((bh-h)/2) }; }
async function placeContain(pdf, dataURL, box){ const im=await loadHTMLImage(dataURL); const f=fitContain(im.naturalWidth||im.width,im.naturalHeight||im.height,box.w,box.h); pdf.addImage(dataURL,"JPEG",box.x+f.x,box.y+f.y,f.w,f.h); }

// ===== PDF BRANDING (IronGlass) =====
const PDF_BRAND = {
  accent: { r: 255, g: 102, b: 0 }, // IronGlass orange
  // Zet dit naar jouw “all lenses”/overzichtspagina:
  allLensesUrl: "https://ironglassadapters.com/"
};

function pdfSetWhite(pdf){ pdf.setTextColor(255,255,255); }
function pdfSetAccent(pdf){ pdf.setTextColor(PDF_BRAND.accent.r, PDF_BRAND.accent.g, PDF_BRAND.accent.b); }

const ensureAbsoluteUrl = (url) => {
  if(!url) return "";
  // Als het al absolute URL is → laat staan
  if(/^https?:\/\//i.test(url)) return url;

  // Anders maak je er een absolute van op basis van de huidige pagina
  // (werkt zowel op GitHub Pages als in je WordPress embed)
  return new URL(url, location.href).href;
};

const pdfLinkRect=(pdf,x,y,w,h,url)=>{ const abs=ensureAbsoluteUrl(url); if(abs) pdf.link(x,y,w,h,{url:abs}); };
function getSensorText(){ const cam=cameraSelect.value, fmt=sensorFormatSelect.value, label=cameras[cam]?.[fmt]?.label||""; return `${cam} – ${label}`; }

function getCurrentSplitFraction(){
  if(sbsActive) return 0.5;

  const rect = comparisonWrapper.getBoundingClientRect();
  const lbL  = comparisonWrapper._lbLeft  || 0;
  const lbR  = comparisonWrapper._lbRight || 0;

  const usableW = Math.max(1, rect.width - lbL - lbR);

  // slider.style.left is: (lbL + clamped) + "px"
  const sliderLeftPx = parseFloat(slider.style.left || "0");
  const xInUsable = clamp(sliderLeftPx - lbL, 0, usableW);

  return clamp(xInUsable / usableW, 0, 1);
}

async function buildSplitFromSensor(leftURL,rightURL,W,H){
  const L=await loadHTMLImage(leftURL), R=await loadHTMLImage(rightURL);
  const cvs=document.createElement("canvas"); cvs.width=W; cvs.height=H; const ctx=cvs.getContext("2d",{alpha:false}); ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality="high";
  const frac=getCurrentSplitFraction(), splitX=Math.round(W*frac);
  if(splitX>0) ctx.drawImage(L,0,0,splitX,H,0,0,splitX,H);
  if(splitX<W) ctx.drawImage(R,splitX,0,W-splitX,H,splitX,0,W-splitX,H);
  ctx.fillStyle="#FFF"; ctx.fillRect(Math.max(0,splitX-1),0,2,H);
  return cvs.toDataURL("image/jpeg",1.0);
}
function drawBars(pdf,TOP_BAR,BOTTOM_BAR,PAGE_MARGIN){
  return {
    top:(text)=>{ const pw=pdf.internal.pageSize.getWidth(); pdf.setFillColor(0,0,0); pdf.rect(0,0,pw,TOP_BAR,"F"); pdf.setTextColor(255,255,255); pdf.setFontSize(16); pdf.text(text,pw/2,Math.round(TOP_BAR/2)+2,{align:"center",baseline:"middle"}); },
    bottom:({ text="", link="", logo=null, ctaLabel="", ctaUrl="" })=>{
      const pw=pdf.internal.pageSize.getWidth(), ph=pdf.internal.pageSize.getHeight(), bh=BOTTOM_BAR;
      pdf.setFillColor(0,0,0); pdf.rect(0,ph-bh,pw,bh,"F");
      if(text){ pdf.setFontSize(12); pdf.setTextColor(255,255,255); pdf.text(text,20,ph-bh+25,{maxWidth:pw-120}); }
      if(link){
  const disp = "Full lens details: Click here";
  pdf.setFontSize(10);
  pdfSetAccent(pdf); // ✅ IronGlass orange
  pdf.textWithLink(disp, 20, ph - bh + 55, { url: ensureAbsoluteUrl(link) });
  pdfSetWhite(pdf);
}
      if(logo){ const th=50, ratio=logo.width/logo.height, tw=th*ratio, x=pw-tw-12, y=ph-th-12; pdf.addImage(logo,"PNG",x,y,tw,th); }
      if(ctaLabel&&ctaUrl){ const btnW=Math.min(320,pw-2*PAGE_MARGIN), btnH=32, x=Math.round((pw-btnW)/2), y=Math.round(ph-(bh/2)-(btnH/2)); pdf.setFillColor(0,0,0); pdf.roundedRect(x,y,btnW,btnH,4,4,"F"); pdf.setTextColor(255,255,255); pdf.setFontSize(18); pdf.setFont("helvetica","normal"); pdf.text(ctaLabel,x+btnW/2,y+btnH/2+6,{align:"center",baseline:"middle"}); pdfLinkRect(pdf,x,y,btnW,btnH,ctaUrl); }
    },
    bottomP1:(logo,sensorText)=>{
      const pw=pdf.internal.pageSize.getWidth(), ph=pdf.internal.pageSize.getHeight(), bh=BOTTOM_BAR;
      pdf.setFillColor(0,0,0); pdf.rect(0,ph-bh,pw,bh,"F");
      pdf.setTextColor(255,255,255); pdf.setFontSize(14); const yS=ph-bh+48; pdf.text(`Camera/Sensor mode: ${sensorText}`,pw/2,yS,{align:"center",baseline:"middle"});
     const cta = "Explore all lenses: Click here";
pdf.setFontSize(16);

// kleur van CTA ook in accent (mooi en duidelijk)
pdfSetAccent(pdf);

const yC = ph - 18;
pdf.text(cta, pw/2, yC, { align:"center", baseline:"middle" });

const w = pdf.getTextWidth(cta), x = (pw - w) / 2;

// ✅ link naar jouw IronGlass overzichtspagina
pdfLinkRect(pdf, x, yC - 10, w, 20, PDF_BRAND.allLensesUrl);

pdfSetWhite(pdf);
      if(logo){ const th=50, ratio=logo.width/logo.height, tw=th*ratio, xL=pw-tw-12, y=ph-th-12; pdf.addImage(logo,"PNG",xL,y,tw,th); }
    }
  };
}

/* === Self-check (stil, alleen console) === */
(function(){
  const missing=lenses.filter(l=>!lensDescriptions[l]); if(missing.length) console.warn("Lens zonder beschrijving:",missing);
  for(const [cam,formats] of Object.entries(cameras)){ if(!formats||!Object.keys(formats).length) console.warn("Camera zonder formats:",cam);
    for(const [k,v] of Object.entries(formats)){ if(!v?.w||!v?.h) console.warn(`Format zonder w/h bij ${cam} → ${k}`,v); if(!v?.label) console.warn(`Format zonder label bij ${cam} → ${k}`); }
  }
})();

/* === Kick first layout === */
onFsChange();
setTimeout(updateImages,50);

/* === Force capture camera/format (after everything is wired) === */
function forceCaptureCamera(){
  if(!cameraSelect || !sensorFormatSelect) return;

  // camera kiezen → vult formats (sync in jouw change-handler)
  cameraSelect.value = CAPTURE_CAMERA;
  cameraSelect.dispatchEvent(new Event("change", { bubbles:true }));

  // format kiezen (kan direct na camera-change, want options zijn dan gevuld)
  sensorFormatSelect.value = CAPTURE_FORMAT;
  sensorFormatSelect.dispatchEvent(new Event("change", { bubbles:true }));

  // 1 frame later: calibrate aan (na layout/bars)
  requestAnimationFrame(() => enableCalibrate());
}

forceCaptureCamera();
setTimeout(forceCaptureCamera, 50);
window.addEventListener("load", () => setTimeout(forceCaptureCamera, 250));
window.addEventListener("pageshow", () => setTimeout(forceCaptureCamera, 0));

document.addEventListener("DOMContentLoaded", () => {
  const controls = document.querySelector(".controlsStack.desktop-only");
  const spacer   = document.getElementById("controlsSpacer");
  if (!controls || !spacer) return;

  const setControlsHeight = () => {
    const r = controls.getBoundingClientRect();
    const cs = getComputedStyle(controls);
    const mt = parseFloat(cs.marginTop) || 0;
    const mb = parseFloat(cs.marginBottom) || 0;
    const h = Math.ceil(r.height + mt + mb);

    document.documentElement.style.setProperty("--controls-stack-h", `${h}px`);
  };

  setControlsHeight();
  new ResizeObserver(setControlsHeight).observe(controls);
  window.addEventListener("resize", setControlsHeight);
});
/* ============================
   PDF EXPORT – CLICK HANDLER
   (page 1: split, page 2: left, page 3: right)
   ============================ */

function safeFileName(s){
  return String(s || "")
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_\-]/gi, "");
}

async function exportLensPdf(){
  if(isExportingPdf) return;

  const JsPDF = getJsPDFCtor();
  if(!JsPDF){
    alert("jsPDF is not loaded (CDN).");
    return;
  }

  isExportingPdf = true;

  try{
    // PDF setup
    const pdf = new JsPDF({
      orientation: "landscape",
      unit: "pt",
      format: "a4",
      compress: true
    });

    const pw = pdf.internal.pageSize.getWidth();
    const ph = pdf.internal.pageSize.getHeight();

    // Layout constants
    const PAGE_MARGIN = 24;
    const TOP_BAR = 58;
    const BOTTOM_BAR = 94;

    // “usable” box voor de image
    const imgBox = {
      x: PAGE_MARGIN,
      y: TOP_BAR + PAGE_MARGIN,
      w: pw - (PAGE_MARGIN * 2),
      h: ph - TOP_BAR - BOTTOM_BAR - (PAGE_MARGIN * 2)
    };

    // Load logo (encode spaces safely)
    let logoImg = null;
    try{
      const logoUrl = new URL("images/IRONGLASS LOGO.png", location.href).href; // URL encodes spaces
      logoImg = await loadHTMLImage(logoUrl);
    } catch(e){
      // logo is nice-to-have, export must still work
      logoImg = null;
    }

    // Current selection
    const uiFocal = focalLengthSelect?.value || "50mm";
    const L_label = leftSelect?.value || "";
    const R_label = rightSelect?.value || "";

    const L_slug = lensSlugFromLabel(L_label);
    const R_slug = lensSlugFromLabel(R_label);

    const L_effFocal = getEffectiveFocal(L_slug, uiFocal, "left");
    const R_effFocal = getEffectiveFocal(R_slug, uiFocal, "right");

    const uiTL = tStopLeftSelect?.value || "2.8";
    const uiTR = tStopRightSelect?.value || "2.8";

    // Visible focal label (uses your alias mapping, shows e.g. 58MM for “50mm” on MKII/RedP)
    const focalShownLeft  = displayFocalForUI(L_slug, uiFocal);
    const focalShownRight = displayFocalForUI(R_slug, uiFocal);

    // Sources: take what viewer currently shows (includes flare/bokeh/exposure corrected variant)
    const leftURL  = afterImgTag?.src;   // left = after
    const rightURL = beforeImgTag?.src;  // right = before

    if(!leftURL || !rightURL){
      alert("Images are not loaded yet — try again once the viewer is showing the image.");
      return;
    }

    // Sensor AR (single frame)
    const { w, h } = getCurrentWH();
    const sensorAR = w / h;

    // Bars helper (uses your drawBars)
    const bars = drawBars(pdf, TOP_BAR, BOTTOM_BAR, PAGE_MARGIN);

    // ---------- PAGE 1: SPLIT ----------
    pdf.setFillColor(0,0,0);
    pdf.rect(0,0,pw,ph,"F");

    const titleP1 = `${L_label} vs ${R_label} — ${focalShownLeft} / ${focalShownRight}`;
    bars.top(titleP1);

    // Build split at current slider position (or 50/50 if SBS)
    const splitOutH = 2200; // quality vs file size
    const renderedL = await renderToSensorAR(leftURL,  sensorAR, splitOutH, 1, 0);
    const renderedR = await renderToSensorAR(rightURL, sensorAR, splitOutH, 1, 0);

    const splitData = await buildSplitFromSensor(renderedL.dataURL, renderedR.dataURL, renderedL.W, renderedL.H);

    // Place split image (contain into imgBox)
    await placeContain(pdf, splitData, imgBox);

    // Bottom bar page 1 (no logo if you want: pass null)
    bars.bottomP1(null, getSensorText());

    // ---------- PAGE 2: LEFT ----------
    pdf.addPage();
    pdf.setFillColor(0,0,0);
    pdf.rect(0,0,pw,ph,"F");

    const titleL = `${L_label} — ${focalShownLeft} — T${uiTL}`;
    bars.top(titleL);

    const leftOutH = 2200;
    const leftRender = await renderToSensorAR(leftURL, sensorAR, leftOutH, 1, 0);
    await placeContain(pdf, leftRender.dataURL, imgBox);

    bars.bottom({
      text: (lensDescriptions?.[L_label]?.text || ""),
      link: (lensDescriptions?.[L_label]?.url  || ""),
      logo: logoImg
    });

    // ---------- PAGE 3: RIGHT ----------
    pdf.addPage();
    pdf.setFillColor(0,0,0);
    pdf.rect(0,0,pw,ph,"F");

    const titleR = `${R_label} — ${focalShownRight} — T${uiTR}`;
    bars.top(titleR);

    const rightOutH = 2200;
    const rightRender = await renderToSensorAR(rightURL, sensorAR, rightOutH, 1, 0);
    await placeContain(pdf, rightRender.dataURL, imgBox);

    bars.bottom({
      text: (lensDescriptions?.[R_label]?.text || ""),
      link: (lensDescriptions?.[R_label]?.url  || ""),
      logo: logoImg
    });

    // Save
    const fname =
      `IronGlass_Compare_${safeFileName(L_label)}_vs_${safeFileName(R_label)}_${safeFileName(uiFocal)}_TL${safeFileName(uiTL)}_TR${safeFileName(uiTR)}.pdf`;

    pdf.save(fname);
  } catch(err){
    console.error("PDF export failed:", err);
    alert("PDF export failed. Check the console for details.");
  } finally {
    isExportingPdf = false;
  }
}

// ✅ hook up the button
downloadPdfButton?.addEventListener("click", exportLensPdf);
