/* ===== LENS COMPARISON TOOL – COMPACT, COMPLETE ===== */
if (window.innerWidth < 768) document.body.classList.add("mobile-mode");

/* === SENSOR DATA (mm) – Venice 6K 3:2 is baseline === */
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
    "2.39:1 2K Ana": { w: 42.240, h: 17.696, label: "2.39:1 2K Ana" },
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

const notes = {
  "ironglass_sovjet_mkii_120mm": "135mm",

  // UI 85mm -> file 80/90mm (kies 1)
  "ironglass_zeiss_jena_85mm": "80mm",

  // kies één van deze twee:
  "ironglass_sovjet_medium_format_85mm": "80mm",
  // "ironglass_sovjet_medium_format_85mm": "80mm",
};

const MEASURED_TSTOPS = {
  "ironglass_titan_zoom": {
    "120mm": ["4", "2.9"],
    "85mm":  ["4", "2.9"],
    "50mm":  ["4", "2.9"],
    "37mm":  ["4", "2.9"],
    "29mm":  ["4", "2.8"]
  },

  "ironglass_sovjet_medium_format": {
    "120mm": ["4", "2.9"],
    "90mm":  ["4"],
    "80mm":  ["4", "2.9"],
    "65mm":  ["4", "3.8"],
    "45mm":  ["4", "3.9"],
    "35mm":  ["4", "2.9"],
    "30mm":  ["4", "3.8"]
  },

  "ironglass_zeiss_jena": {
    "120mm": ["4", "2.9"],
    "80mm":  ["4", "2.8", "1.9"],
    "50mm":  ["4", "2.8", "1.9"],
    "35mm":  ["4", "2.8", "2.5"],
    "28mm":  ["4", "2.9"],
    "20mm":  ["4", "2.9"]
  },

  "ironglass_sovjet_mkii": {
    "135mm": ["4", "2.9"],
    "85mm":  ["4", "2.8", "2", "1.6"],
    "58mm":  ["4", "2.8", "2.1"],
    "37mm":  ["4", "2.9"],
    "28mm":  ["4", "3.6"],
    "20mm":  ["4", "3.6"]
  },

  "ironglass_red_p": {
    "85mm":  ["4", "2.8", "2.1"],
    "58mm":  ["4", "2.8", "2.1"],
    "37mm":  ["4", "2.9"]
  }
};

const TSTOP_FILE_ALIAS = {
  "ironglass_red_p": {
    "wo": "2.1",
    "2":  "2.1",
    "2.8":"2.1",
    "4":  "2.1"
  },

  "ironglass_sovjet_mkii": {
    "wo": "1.6",
    "2.8":"2.9"
  },

  "ironglass_zeiss_jena": {
  "wo": "1.9",
  "2":  "1.9",   // ✅ T2 gebruikt dezelfde files als T1.9
  "2.8":"2.8",   // ✅ zet dit recht (je hebt echte t2_8 files)
  "4":  "4"
},

  "ironglass_titan_zoom": {
    "wo": "2.9",
    "2":  "2.9",
    "2.8":"2.9",
    "4":  "4"     // ✅ als jij ook echte t4 files hebt
  },

  "ironglass_sovjet_medium_format": {
    "wo": "2.9",
    "2":  "2.9",
    "2.8":"2.9",
    "4":  "4"     // ✅ DIT is de belangrijkste fix
  }
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

  // WO = wijdst open (kleinste T)
  if(uiVal === "wo") return String(nums[0]);

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
const calibrateBtn = q("calibrateToggle");
let calibrateActive = false;
const fullscreenBtn=q("fullscreenButton"), sbsBtn=q("sbsToggle"), toggleBtn=q("toggleButton"), infoContainer=q("infoContainer");
const detailOverlay=q("detailOverlay"), leftDetail=q("leftDetail"), rightDetail=q("rightDetail"), detailToggleButton=q("detailViewToggle");
const IMG_BASE="https://tvlmedia.github.io/IronGlass/images/", RAW_BASE=IMG_BASE+"raw/";
const { jsPDF } = window.jspdf || {};
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

/* === AUTO VERTICAL REFRAME (small sensor heights) === */
const AUTO_REFRAME = {
  thresholdH: 16.5,   // mm: hieronder gaan we compenseren
  maxShiftPct: 0.08   // max 8% van beeldhoogte verschuiven (tweak naar smaak)
};

// fractie van beeldhoogte (negatief = beeld omhoog in CSS-translateY)
function getAutoReframeYFrac(){
  const { h } = getCurrentWH();
  const t = AUTO_REFRAME.thresholdH;

  if(!h || h >= t) return 0;

  // hoe kleiner de sensorhoogte, hoe meer shift (0..1)
  const severity = clamp((t - h) / t, 0, 1);

  // jouw wens: "iets naar boven positionen"
  return -severity * AUTO_REFRAME.maxShiftPct;
}

function getAutoReframeYPx(usableH){
  return Math.round(getAutoReframeYFrac() * usableH);
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

  updateFullscreenBars();
  resetSplitToMiddle();

  if(calibrateActive){
    autoScaleForCalibration();
  } else {
    applyCalibrationTransforms();
  }
}
/* === Lenses dropdowns + T-stops === */
lenses.forEach(l=>{ leftSelect.add(new Option(l,l)); rightSelect.add(new Option(l,l)); });
const DEFAULT_T_STOPS = ["wo", "2", "2.8", "4"];

function fillTStops(sel, opts = DEFAULT_T_STOPS){
  sel.innerHTML = "";
  opts.forEach(v => {
    const label = (v === "wo") ? "WO" : `T${v}`;
    sel.add(new Option(label, v));
  });
}

fillTStops(tStopLeftSelect);
fillTStops(tStopRightSelect);
tStopLeftSelect.value  = "wo";
tStopRightSelect.value = "wo";
function syncTStopsOnContextChange(){ const t=tStopLeftSelect.value||"2.8"; tStopLeftSelect.value=t; tStopRightSelect.value=t; }

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
/* === Side-by-side wrapper === */
const sbsWrapper=document.createElement("div"); sbsWrapper.id="sbsWrapper"; sbsWrapper.innerHTML=`<div class="pane"><img id="sbsLeftImg" alt=""></div><div class="pane"><img id="sbsRightImg" alt=""></div>`; comparisonWrapper.appendChild(sbsWrapper); sbsWrapper.style.display="none";
const sbsLeftImg=sbsWrapper.querySelector("#sbsLeftImg"), sbsRightImg=sbsWrapper.querySelector("#sbsRightImg");

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
    "85mm":  { scale: 0.89, x: 3.000,  y: 35.000 }
  },

  "ironglass_sovjet_medium_format": {
    "120mm": { scale: 0.95, x: 40.668, y: -18.485 },
    "90mm":  { scale: 0.88, x: 14.000, y: 29.000 },
    "80mm":  { scale: 0.97, x: 28.780, y: 0.000 }
  },

  "ironglass_sovjet_mkii": {
    "120mm": { scale: 0.85, x: 7.394, y: 18.485 },
    "85mm":  { scale: 0.95, x: 1.000, y: 65.349 }
  },

  "ironglass_red_p": {
    "85mm": { scale: 0.93, x: 0.930, y: 73.349 }
  }
};

// === Calibrate autoscale whitelist ===
const CAL_AUTOSCALE_WHITELIST = {
  "Fujifilm GFX Eterna": new Set([
    "Open Gate 4:3 4K (3840x2880)",
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

calibrateBtn?.addEventListener("click", ()=>{
  calibrateActive = !calibrateActive;

  if(calibrateActive){
    preCalibrateScalePct = Math.round((userScale || 1) * 100);

    calibrateAutoScaled = false;   // ✅ reset
    autoScaleForCalibration();
  } else {
    if(scaleSlider) scaleSlider.value = String(preCalibrateScalePct);
    setUserScaleFromPct(preCalibrateScalePct);

    calibrateAutoScaled = false;   // ✅ reset
  }

  applyCalibrationTransforms();
  updateToggleHighlights();
});

// --- Auto-enable Calibrate (idempotent) ---
function enableCalibrate(){
  if(!calibrateBtn) return;
  if(calibrateActive) return;  // al aan → niks doen
  calibrateBtn.click();        // gebruikt jouw bestaande toggle-logica
}

// --- Fullscreen: voorkom crop (force object-fit: contain) ---
function setFullscreenImageFit(isFs){
  const fit = isFs ? "contain" : ""; // leeg = terug naar CSS
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
  return CALIBRATION?.[lensSlug]?.[focal] || null;
}

// Auto scaling voor calibrate
    
   function autoScaleForCalibration(){

  // ✅ Alleen autoscale op de whitelist (GFX + specifieke modes)
  if(!shouldAutoScaleForCalibration()){
    // Als we eerder wél autoscaled hadden (bijv. je kwam van GFX), zet dan netjes terug
    if(calibrateAutoScaled){
      calibrateAutoScaled = false;

      const pct = clamp(preCalibrateScalePct || 100, 100, 130);
      if(scaleSlider) scaleSlider.value = String(pct);
      setUserScaleFromPct(pct);
    }
    return; // geen auto-zoom op andere camera/sensor modes
  }

  // --- je bestaande code hieronder blijft hetzelfde ---
  const focal = focalLengthSelect?.value || "35mm";
  const leftSlug  = lensSlugFromLabel(leftSelect?.value || "");
  const rightSlug = lensSlugFromLabel(rightSelect?.value || "");

  const leftCal  = getCal(leftSlug, focal);
  const rightCal = getCal(rightSlug, focal);

  updateFullscreenBars();

  const rect = comparisonWrapper.getBoundingClientRect();
  const usableW = Math.max(1, (comparisonWrapper._usableW ?? rect.width));
  const usableH = Math.max(1, (comparisonWrapper._usableH ?? rect.height));

  const toCssPx = (x=0, y=0) => {
    const dx = (x / CAL_W) * usableW;
    let dy = (y / CAL_H) * usableH;
    if(CAL_Y_INVERT) dy = -dy;
    return { dx, dy };
  };

  const requiredScaleFor = (cal) => {
    if(!cal) return 1;

    const base = (cal.scale ?? 1);
    const { dx, dy } = toCssPx(cal.x ?? 0, cal.y ?? 0);

    const needX = 1 + (2 * Math.abs(dx)) / usableW;
    const needY = 1 + (2 * Math.abs(dy)) / usableH;
    const needCover = Math.max(needX, needY, 1);

    return needCover / Math.max(0.0001, base);
  };

  let required = Math.max(
    1,
    requiredScaleFor(leftCal),
    requiredScaleFor(rightCal)
  );

  required *= 1.005;

  const pct = clamp(Math.ceil(required * 100), 100, 130);

  if(scaleSlider) scaleSlider.value = String(pct);
  setUserScaleFromPct(pct);

  calibrateAutoScaled = (pct > 100); // ✅ onthoud dat autoscale actief was
}

function setCalVars(img, dx=0, dy=0, sc=1){
  img.style.setProperty("--cal-tx", `${dx}px`);
  img.style.setProperty("--cal-ty", `${dy}px`);
  img.style.setProperty("--cal-scale", String(sc));
}

function applyCalibrationTransforms(){
  const focal = focalLengthSelect?.value || "35mm";

  const leftSlug  = lensSlugFromLabel(leftSelect?.value || "");
  const rightSlug = lensSlugFromLabel(rightSelect?.value || "");

  const lbL = comparisonWrapper._lbLeft || 0;
  const lbR = comparisonWrapper._lbRight || 0;
  const lbT = comparisonWrapper._lbTop || 0;
  const lbB = comparisonWrapper._lbBottom || 0;

  const rect = comparisonWrapper.getBoundingClientRect();
  const usableW = Math.max(1, (comparisonWrapper._usableW ?? (rect.width  - lbL - lbR)));
  const usableH = Math.max(1, (comparisonWrapper._usableH ?? (rect.height - lbT - lbB)));

  const toCssPx = (x=0, y=0) => {
    const dx = (x / CAL_W) * usableW;
    let dy = (y / CAL_H) * usableH;
    if(CAL_Y_INVERT) dy = -dy;
    return { dx, dy };
  };

  const apply = (img, cal) => {
  if(!img) return;

  // Calibrate UIT → reset naar defaults
  if(!calibrateActive){
    setCalVars(img, 0, 0, 1);
    return;
  }

  // Calibrate AAN maar geen cal-entry → alleen defaults (sensor/viewer blijven via CSS)
  if(!cal){
    setCalVars(img, 0, 0, 1);
    return;
  }

  // Calibrate AAN + cal-entry → alleen "extra" translate + cal.scale
  const { dx, dy } = toCssPx(cal.x ?? 0, cal.y ?? 0);
  setCalVars(img, dx, dy, (cal.scale ?? 1));
};
  const leftCal  = getCal(leftSlug, focal);
  const rightCal = getCal(rightSlug, focal);

  // jouw tool: after = links, before = rechts
  apply(afterImgTag,  leftCal);
  apply(beforeImgTag, rightCal);

  // SBS images ook
   apply(sbsLeftImg,  leftCal);
  apply(sbsRightImg, rightCal);
} // <-- BELANGRIJK

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
  const LL=leftSelect.value.toLowerCase().replace(/\s+/g,"_"), RR=rightSelect.value.toLowerCase().replace(/\s+/g,"_");
  const uiTL = tStopLeftSelect.value;
const uiTR = tStopRightSelect.value;

const focal = focalLengthSelect.value;

const tL = fileTStopFor(LL, uiTL, focal);
const tR = fileTStopFor(RR, uiTR, focal);

const tLActual = actualTStopForLabel(LL, uiTL, focal);
const tRActual = actualTStopForLabel(RR, uiTR, focal);
const flareMode = flareToggle.dataset.mode || "noflare";
const sceneMode = bokehToggle?.dataset.mode || "portrait";

const uiTLStr = (uiTL === "wo") ? null : String(uiTL).replace(".", "_");
const uiTRStr = (uiTR === "wo") ? null : String(uiTR).replace(".", "_");

// fallback alleen als alias iets verandert (bijv. 2.8 -> 2.9)
const tLFallback = null;
const tRFallback = null;

const leftCandidates  = resolveImageCandidates(LL, focal, tL, flareMode, sceneMode, tLFallback);
const rightCandidates = resolveImageCandidates(RR, focal, tR, flareMode, sceneMode, tRFallback);

// jouw tool: before = rechts, after = links
setImageWithFallback(beforeImgTag, rightCandidates);
setImageWithFallback(afterImgTag,  leftCandidates);
  const lf=aliasFor(LL,focal), rf=aliasFor(RR,focal);
  const lu=lensDescriptions[leftSelect.value]?.url||"#", ru=lensDescriptions[rightSelect.value]?.url||"#";
  const tLNote = (String(tLActual) !== String(uiTL)) ? ` (eig. T${tLActual})` : "";
const tRNote = (String(tRActual) !== String(uiTR)) ? ` (eig. T${tRActual})` : "";

const uiTLLabel = (uiTL === "wo") ? "WO" : `T${uiTL}`;
const uiTRLabel = (uiTR === "wo") ? "WO" : `T${uiTR}`;

leftLabel.innerHTML = `Lens: <a href="${lu}" target="_blank" rel="noopener noreferrer">${leftSelect.value} ${lf} ${uiTLLabel}${tLNote}</a>`;
rightLabel.innerHTML= `Lens: <a href="${ru}" target="_blank" rel="noopener noreferrer">${rightSelect.value} ${rf} ${uiTRLabel}${tRNote}</a>`;
  setDownloadButton(downloadLeftRawButton,  `${LL}_${lf}_t${tL}`);
  setDownloadButton(downloadRightRawButton, `${RR}_${rf}_t${tR}`);

 if(sbsActive){
  setImageWithFallback(sbsLeftImg,  leftCandidates);
  setImageWithFallback(sbsRightImg, rightCandidates);
}
 resetSplitToMiddle();

if(calibrateActive){
  autoScaleForCalibration();
} else {
  applyCalibrationTransforms();
}
} // <-- sluit updateImages() hier af

/* === Init defaults === */
leftSelect.value  = "IronGlass Titan Zoom";
rightSelect.value = "IronGlass Sovjet Medium Format";
focalLengthSelect.value = "120mm";
tStopLeftSelect.value   = "2.8";
tStopRightSelect.value  = "2.8";

updateLensInfo();
updateImages();

/* === Resizes + fullscreen === */
function onFsChange(){
  const fs = isWrapperFullscreen();
  setFullscreenImageFit(fs);

  if(fs){ clearInlineHeights(); pulseFsBars({duration:1400}); }
  else { const {w,h}=getCurrentWH(); comparisonWrapper.style.setProperty("aspect-ratio","auto"); setWrapperSizeByAR(w,h); requestAnimationFrame(()=>setWrapperSizeByAR(w,h));
    ["--lb-top","--lb-bottom","--lb-left","--lb-right"].forEach(v=>comparisonWrapper.style.setProperty(v,"0px"));
    slider.style.top="0px"; slider.style.height="100%"; slider.style.bottom="0";
  }
  updateFullscreenBars();
requestAnimationFrame(()=>{
  updateFullscreenBars();
  resetSplitToMiddle();

  if(calibrateActive){
    autoScaleForCalibration();
  } else {
    applyCalibrationTransforms();
  }
});
  requestAnimationFrame(()=>{ if(!isWrapperFullscreen()){ const {w,h}=getCurrentWH(); setWrapperSizeByAR(w,h); } });
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
function toggleFullscreen(){ (async()=>{ if(isWrapperFullscreen()){ await exitAnyFullscreen(); const {w,h}=getCurrentWH(); comparisonWrapper.style.setProperty("aspect-ratio","auto"); setWrapperSizeByAR(w,h); requestAnimationFrame(()=>setWrapperSizeByAR(w,h)); ["--lb-top","--lb-bottom","--lb-left","--lb-right"].forEach(v=>comparisonWrapper.style.setProperty(v,"0px")); } else { clearInlineHeights(); await enterWrapperFullscreen(); pulseFsBars({duration:1400}); } updateFullscreenBars(); requestAnimationFrame(()=>{ updateFullscreenBars(); resetSplitToMiddle(); }); })(); }
fullscreenBtn?.addEventListener("click",toggleFullscreen);

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
  resetUserScale(); // <-- ook hier

  const l=leftSelect.value; leftSelect.value=rightSelect.value; rightSelect.value=l; 
  const t=tStopLeftSelect.value; tStopLeftSelect.value=tStopRightSelect.value; tStopRightSelect.value=t; 
  updateLensInfo(); 
  updateImages(); 
});
/* === Slider drag (mouse/touch) === */
let isDragging=false;
slider.addEventListener("mousedown",()=>{ isDragging=true; document.body.classList.add("dragging"); });
window.addEventListener("mouseup",()=>{ isDragging=false; document.body.classList.remove("dragging"); });
window.addEventListener("mousemove",e=>{ if(isDragging) updateSliderPosition(e.clientX); });
slider.addEventListener("touchstart",e=>{ e.preventDefault(); isDragging=true; document.body.classList.add("dragging"); },{passive:false});
window.addEventListener("touchend",()=>{ isDragging=false; document.body.classList.remove("dragging"); });
window.addEventListener("touchmove",e=>{ if(isDragging && e.touches.length===1){ e.preventDefault(); updateSliderPosition(e.touches[0].clientX); } },{passive:false});

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
function setUserScaleFromPct(pct){
  userScale = clamp(pct/100, 1.0, 1.3);
  document.documentElement.style.setProperty("--viewer-scale", String(userScale));
  if(scaleVal) scaleVal.textContent = Math.round(userScale*100) + "%";
  updateFullscreenBars();
  resetSplitToMiddle();
  applyCalibrationTransforms();
}

function resetUserScale(){
  if(scaleSlider) scaleSlider.value = "100";
  setUserScaleFromPct(100);
}

// <-- HIER PLAKKEN (direct boven de input-listener)
let calibrateUserTouchedScale = false;

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

[leftSelect,rightSelect].forEach(el =>
  el.addEventListener("change",()=>{ 
    resetUserScale();                 // <-- reset scaling naar 100%
    syncTStopsOnContextChange(); 
    updateLensInfo(); 
    updateImages(); 
  })
);

[focalLengthSelect,tStopLeftSelect,tStopRightSelect].forEach(el =>
  el.addEventListener("change",()=>{ if(el===focalLengthSelect) syncTStopsOnContextChange(); updateImages(); })
);

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
  if(e.key === "Escape" && detailActive){
    detailActive = false;
    detailOverlay?.classList.remove("active");
    detailToggleButton?.classList.remove("active");
    leftDetail && (leftDetail.style.display = "none");
    rightDetail && (rightDetail.style.display = "none");
    updateToggleHighlights();
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

  showDetailBoxAt(
  e, leftDetail, leftDetailImg, sbsLeftImg, L, rx, ry,
  "left", zoom, size, 0,
  { x: groupX, y: groupY }
);

showDetailBoxAt(
  e, rightDetail, rightDetailImg, sbsRightImg, R, rx, ry,
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

  // 2) rx/ry PER IMAGE op basis van de getransformeerde img rects
  const rectL = getFittedImageRect(afterImgTag);
const rectR = getFittedImageRect(beforeImgTag);

  const rxL = (e.clientX - rectL.left) / rectL.width;
  const ryL = (e.clientY - rectL.top)  / rectL.height;

  const rxR = (e.clientX - rectR.left) / rectR.width;
  const ryR = (e.clientY - rectR.top)  / rectR.height;

 const cfg = getDetailConfig();

const showL = showDetailBoxAt(
  e, leftDetail, leftDetailImg, afterImgTag,
  rectL, rxL, ryL, "left", cfg.zoom, cfg.size, 0
);

const showR = showDetailBoxAt(
  e, rightDetail, rightDetailImg, beforeImgTag,
  rectR, rxR, ryR, "right", cfg.zoom, cfg.size, 0
);

 if(!showL) leftDetail.style.display  = "none";
if(!showR) rightDetail.style.display = "none";
}); // <-- SLUIT de mousemove listener HIER af



/* === Letter/pillarbox berekening + slider === */
function updateFullscreenBars(){
  if(sbsActive){ ["--lb-top","--lb-bottom","--lb-left","--lb-right"].forEach(v=>comparisonWrapper.style.setProperty(v,"0px")); comparisonWrapper._lbLeft=comparisonWrapper._lbRight=comparisonWrapper._lbTop=comparisonWrapper._lbBottom=0; 
                const r = comparisonWrapper.getBoundingClientRect();
comparisonWrapper._usableW = r.width;
comparisonWrapper._usableH = r.height;    return; }
  
  const rect=comparisonWrapper.getBoundingClientRect(), hostW=Math.max(1,Math.round(rect.width)), hostH=Math.max(1,Math.round(rect.height)), targetAR=getTargetAR(), hostAR=hostW/hostH;
  let usedW,usedH, lbL=0,lbR=0,lbT=0,lbB=0;
  if(hostAR>targetAR){ usedH=hostH; usedW=Math.round(usedH*targetAR); const side=Math.floor((hostW-usedW)/2); lbL=lbR=side; }
  else { usedW=hostW; usedH=Math.round(usedW/targetAR); const bar=Math.floor((hostH-usedH)/2); lbT=lbB=bar; }
  [["--lb-top",lbT],["--lb-bottom",lbB],["--lb-left",lbL],["--lb-right",lbR]].forEach(([k,v])=>comparisonWrapper.style.setProperty(k,`${v}px`));
  Object.assign(comparisonWrapper,{ _lbLeft:lbL,_lbRight:lbR,_lbTop:lbT,_lbBottom:lbB,_usableW:usedW, _usableH:usedH });
}
function resetSplitToMiddle(){
  if(sbsActive) return;
  const rect=comparisonWrapper.getBoundingClientRect(), lbL=comparisonWrapper._lbLeft||0, lbR=comparisonWrapper._lbRight||0, usable=Math.max(1,Math.round(rect.width-lbL-lbR));
  const mid=Math.round(usable/2), inset=`inset(0 ${lbR+(usable-mid)}px 0 ${lbL}px)`;
  afterWrapper.style.clipPath=inset; afterWrapper.style.webkitClipPath=inset;
  slider.style.left=(lbL+mid)+"px";
  const lbT=comparisonWrapper._lbTop||0, lbB=comparisonWrapper._lbBottom||0, usableH=Math.max(1,Math.round(rect.height-lbT-lbB));
  slider.style.top=lbT+"px"; slider.style.height=usableH+"px"; slider.style.bottom="auto";
}
function updateSliderPosition(clientX){
  const rect=comparisonWrapper.getBoundingClientRect(), lbL=comparisonWrapper._lbLeft||0, lbR=comparisonWrapper._lbRight||0, usable=Math.max(1,Math.round(rect.width-lbL-lbR));
  const clamped=clamp(Math.round(clientX-rect.left-lbL),0,usable), leftInset=lbL, rightInset=lbR+(usable-clamped);
  const inset=`inset(0 ${Math.max(0,rightInset-1)}px 0 ${leftInset}px)`; afterWrapper.style.clipPath=inset; afterWrapper.style.webkitClipPath=inset;
  slider.style.left=(lbL+clamped)+"px";
  const lbT=comparisonWrapper._lbTop||0, lbB=comparisonWrapper._lbBottom||0, usableH=Math.max(1,Math.round(rect.height-lbT-lbB));
  slider.style.top=lbT+"px"; slider.style.height=usableH+"px"; slider.style.bottom="auto";
}
function pulseFsBars({duration=1400}={}){ const start=performance.now(); (function tick(now){ if(!isWrapperFullscreen()) return; updateFullscreenBars(); resetSplitToMiddle(); if(now-start<duration) requestAnimationFrame(tick); })(start); }
function getCurrentSplitFraction(){ const rect=comparisonWrapper.getBoundingClientRect(), lbL=comparisonWrapper._lbLeft||0, lbR=comparisonWrapper._lbRight||0, usable=Math.max(1,Math.round(rect.width-lbL-lbR)); const s=slider.getBoundingClientRect(); const x=(s.left+s.width/2)-rect.left-lbL; return clamp(x/usable,0,1); }

/* === Autoscale per lens/focal (100–130%) === */
const LENS_SCALE_TABLE={
  "35mm":{ panchro:100,"red p":116,mkii:117,jena:112,vespid:109,arles:110,"lomo standard speed":110 },
  "75mm":{ panchro:100,"red p":118,mkii:117,jena:110,vespid:100,arles:100,"lomo standard speed":100 },
  "120mm": { } // voorlopig leeg = fallback 100%
};
function normalizeLensKey(lbl=""){ const s=lbl.toLowerCase(); if(s.includes("panchro"))return"panchro"; if(s.includes("red p"))return"red p"; if(s.includes("mk ii")||s.includes("mkii")||s.includes("mk2"))return"mkii"; if(s.includes("jena"))return"jena"; if(s.includes("vespid"))return"vespid"; if(s.includes("arles"))return"arles"; if(s.includes("lomo")&&s.includes("standard"))return"lomo standard speed"; return""; }
function isScaleAllowedBySensor(){ const {w,h}=getCurrentWH(), EPS=0.001; return (w>30.720+EPS)&&(h>16.200+EPS); }
function scaleForLens(lbl, focal){ const k=normalizeLensKey(lbl), fk=String(focal).includes("75")?"75mm":"35mm"; return (LENS_SCALE_TABLE[fk]||{})[k]||100; }
function applyScalePercent(p){ const v=clamp(Math.round(p),100,130); if(scaleSlider) scaleSlider.value=String(v); setUserScaleFromPct(v); }
function autoScaleNow(){ if(!isScaleAllowedBySensor()) return applyScalePercent(100); const l=leftSelect?.value||"", r=rightSelect?.value||"", f=focalLengthSelect?.value||"35mm"; applyScalePercent(Math.max(scaleForLens(l,f),scaleForLens(r,f))); }


/* === Link targets noopener/noreferrer safeguard === */
(function enforceBlankTargets(){
  const setBlank=a=>{ if(!a.target) a.target="_blank"; const rel=(a.getAttribute("rel")||"").split(/\s+/); if(!rel.includes("noopener")) rel.push("noopener"); if(!rel.includes("noreferrer")) rel.push("noreferrer"); a.setAttribute("rel",rel.join(" ").trim()); };
  document.querySelectorAll("a[href]").forEach(setBlank);
  new MutationObserver(muts=>muts.forEach(m=>m.addedNodes.forEach(n=>{ if(n.nodeType!==1) return; if(n.matches?.("a[href]")) setBlank(n); n.querySelectorAll?.("a[href]").forEach(setBlank); }))).observe(document.documentElement,{childList:true,subtree:true});
})();

/* === PDF export (4 pagina’s) === */
function loadHTMLImage(src){ return new Promise((res,rej)=>{ const im=new Image(); im.crossOrigin="anonymous"; im.onload=()=>res(im); im.onerror=rej; im.src=src; }); }
async function renderToSensorAR(imgOrURL, targetAR, outH, scale=1, yFrac=0){
  const img=typeof imgOrURL==="string"?await loadHTMLImage(imgOrURL):imgOrURL, H=outH, W=Math.round(H*targetAR);
  const cvs=document.createElement("canvas"); cvs.width=W; cvs.height=H; const ctx=cvs.getContext("2d",{alpha:false}); ctx.imageSmoothingEnabled=true; ctx.imageSmoothingQuality="high";
  const srcAR=(img.naturalWidth||img.width)/(img.naturalHeight||img.height); let dW,dH,ox,oy;
  if(srcAR<targetAR){ dW=W; dH=W/srcAR; ox=0; oy=(H-dH)/2; } else { dH=H; dW=H*srcAR; oy=0; ox=(W-dW)/2; }
  if(scale!==1){ const oW=dW,oH=dH; dW=oW*scale; dH=oH*scale; ox-=(dW-oW)/2; oy-=(dH-oH)/2; }
  ctx.drawImage(img,Math.round(ox),Math.round(oy),Math.round(dW),Math.round(dH));
  return { dataURL:cvs.toDataURL("image/jpeg",1.0), W, H };
}
function fitContain(sw,sh,bw,bh){ const sAR=sw/sh, bAR=bw/bh; let w,h; if(sAR>bAR){ w=bw; h=Math.round(w/sAR); } else { h=bh; w=Math.round(h*sAR); } return { w,h,x:Math.round((bw-w)/2), y:Math.round((bh-h)/2) }; }
async function placeContain(pdf, dataURL, box){ const im=await loadHTMLImage(dataURL); const f=fitContain(im.naturalWidth||im.width,im.naturalHeight||im.height,box.w,box.h); pdf.addImage(dataURL,"JPEG",box.x+f.x,box.y+f.y,f.w,f.h); }
const ensureAbsoluteUrl=url=>!url?"":(/^https?:\/\//i.test(url)?url:new URL(url,"https://tvlrental.nl/").href);
const pdfLinkRect=(pdf,x,y,w,h,url)=>{ const abs=ensureAbsoluteUrl(url); if(abs) pdf.link(x,y,w,h,{url:abs}); };
function getSensorText(){ const cam=cameraSelect.value, fmt=sensorFormatSelect.value, label=cameras[cam]?.[fmt]?.label||""; return `${cam} – ${label}`; }

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
      if(link){ const disp="Klik hier voor alle info over deze lens"; pdf.setFontSize(10); pdf.setTextColor(0,102,255); const w=pdf.getTextWidth(disp); pdf.textWithLink(disp,20,ph-bh+55,{url:ensureAbsoluteUrl(link)}); }
      if(logo){ const th=50, ratio=logo.width/logo.height, tw=th*ratio, x=pw-tw-12, y=ph-th-12; pdf.addImage(logo,"PNG",x,y,tw,th); }
      if(ctaLabel&&ctaUrl){ const btnW=Math.min(320,pw-2*PAGE_MARGIN), btnH=32, x=Math.round((pw-btnW)/2), y=Math.round(ph-(bh/2)-(btnH/2)); pdf.setFillColor(0,0,0); pdf.roundedRect(x,y,btnW,btnH,4,4,"F"); pdf.setTextColor(255,255,255); pdf.setFontSize(18); pdf.setFont("helvetica","normal"); pdf.text(ctaLabel,x+btnW/2,y+btnH/2+6,{align:"center",baseline:"middle"}); pdfLinkRect(pdf,x,y,btnW,btnH,ctaUrl); }
    },
    bottomP1:(logo,sensorText)=>{
      const pw=pdf.internal.pageSize.getWidth(), ph=pdf.internal.pageSize.getHeight(), bh=BOTTOM_BAR;
      pdf.setFillColor(0,0,0); pdf.rect(0,ph-bh,pw,bh,"F");
      pdf.setTextColor(255,255,255); pdf.setFontSize(14); const yS=ph-bh+48; pdf.text(`Camera/Sensor mode: ${sensorText}`,pw/2,yS,{align:"center",baseline:"middle"});
      const cta="Benieuwd naar alle lenzen? Klik hier"; pdf.setFontSize(16); const yC=ph-18; pdf.text(cta,pw/2,yC,{align:"center",baseline:"middle"}); const w=pdf.getTextWidth(cta), x=(pw-w)/2; pdfLinkRect(pdf,x,yC-10,w,20,"https://tvlrental.nl/lenses/");
      if(logo){ const th=50, ratio=logo.width/logo.height, tw=th*ratio, xL=pw-tw-12, y=ph-th-12; pdf.addImage(logo,"PNG",xL,y,tw,th); }
    }
  };
}
q("downloadPdfButton")?.addEventListener("click",async()=>{
  const wasSBS=sbsActive; isExportingPdf=true; if(sbsBtn) sbsBtn.disabled=true;
  try{
    if(wasSBS){ setSideBySide(false,{force:true}); await new Promise(r=>requestAnimationFrame(r)); await new Promise(r=>requestAnimationFrame(r)); updateFullscreenBars(); resetSplitToMiddle(); }
    updateFullscreenBars();
    const pdf=new jsPDF({orientation:"landscape",unit:"px",format:"a4"}), TOP_BAR=40, BOTTOM_BAR=80, PAGE_MARGIN=24;
    const bars=drawBars(pdf,TOP_BAR,BOTTOM_BAR,PAGE_MARGIN), pageW=pdf.internal.pageSize.getWidth(), pageH=pdf.internal.pageSize.getHeight();
    const contentBox={x:0,y:TOP_BAR,w:pageW,h:pageH-TOP_BAR-BOTTOM_BAR};
    const targetAR=getTargetAR(), exportH=Math.round((pageH-TOP_BAR-BOTTOM_BAR)*8);
    const {w:sW}=getCurrentWH(), zoom=Math.max(1,BASE_SENSOR.w/sW);
    const leftText=leftLabel.textContent, rightText=rightLabel.textContent, leftName=leftSelect.value, rightName=rightSelect.value, focal=focalLengthSelect.value;
    const tLeft=String(tStopLeftSelect.value).replace(/\./g,"_"), tRight=String(tStopRightSelect.value).replace(/\./g,"_");
    const logo=await loadHTMLImage("https://tvlmedia.github.io/IronGlass/LOGOVOORPDF.png"), sensorText=getSensorText();
    const li=await loadHTMLImage(afterImgTag.src), ri=await loadHTMLImage(beforeImgTag.src);
    const leftSensor=await renderToSensorAR(li,targetAR,exportH,zoom*userScale), rightSensor=await renderToSensorAR(ri,targetAR,exportH,zoom*userScale);
    const splitData=await buildSplitFromSensor(leftSensor.dataURL,rightSensor.dataURL,leftSensor.W,leftSensor.H);

    // p1 split
    pdf.setFillColor(0,0,0); pdf.rect(0,0,pageW,pageH,"F"); bars.top(`${leftText} vs ${rightText}`); await placeContain(pdf,splitData,contentBox); bars.bottomP1(logo,sensorText);
    // p2 left
    pdf.addPage(); pdf.setFillColor(0,0,0); pdf.rect(0,0,pageW,pageH,"F"); bars.top(`${leftText} – ${sensorText}`); await placeContain(pdf,leftSensor.dataURL,contentBox);
    bars.bottom({ text:lensDescriptions[leftName]?.text||"", link:lensDescriptions[leftName]?.url||"", logo });
    // p3 right
    pdf.addPage(); pdf.setFillColor(0,0,0); pdf.rect(0,0,pageW,pageH,"F"); bars.top(`${rightText} – ${sensorText}`); await placeContain(pdf,rightSensor.dataURL,contentBox);
    bars.bottom({ text:lensDescriptions[rightName]?.text||"", link:lensDescriptions[rightName]?.url||"", logo });
    // p4 UI + split
    pdf.addPage(); pdf.setFillColor(0,0,0); pdf.rect(0,0,pageW,pageH,"F"); bars.top(`${leftText} vs ${rightText}`);
    const x=PAGE_MARGIN, maxW=pageW-PAGE_MARGIN*2, controlsEl=document.querySelector('#toolRoot .controls')||document.querySelector('.controls');
    const screenshotEl=async el=>{ if(!el) return null; const cvs=await html2canvas(el,{useCORS:true,backgroundColor:null,scale:window.devicePixelRatio||1}); return cvs.toDataURL("image/png"); };
    document.body.classList.add("pdf-compact"); const controlsShot=await screenshotEl(controlsEl), infoShot=await screenshotEl(infoContainer); document.body.classList.remove("pdf-compact");
    let curY=TOP_BAR+PAGE_MARGIN;
    const placeToWidth=async(dataURL, X, Y, maxW)=>{ const im=await loadHTMLImage(dataURL); const nW=im.naturalWidth||im.width, nH=im.naturalHeight||im.height, ratio=nH/nW, w=Math.min(maxW,nW), h=Math.round(w*ratio); pdf.addImage(dataURL,"PNG",X,Y,w,h); return {w,h}; };
    if(controlsShot){ const w=Math.round(maxW*0.7), cx=x+Math.round((maxW-w)/2); const placed=await placeToWidth(controlsShot,cx,curY,w); curY+=placed.h+8; }
    const fullBoxP4={x, y:curY, w:maxW, h:(pageH-BOTTOM_BAR-PAGE_MARGIN)-curY-(infoShot?12:0) }; await placeContain(pdf,splitData,fullBoxP4);
    if(infoShot){ const infoY=fullBoxP4.y+fullBoxP4.h+12; await placeToWidth(infoShot,x,infoY,maxW); }
    bars.bottom({ text:"", link:"", logo, ctaLabel:"Open de interactieve Lens Comparison Tool", ctaUrl:"https://tvlrental.nl/lens-comparison/" });

    const makeSafe=s=>String(s||"").replace(/[^\w]+/g,"");
    const cam=cameraSelect.value||"UnknownCamera", sensorLabel=(cameras[cam]?.[sensorFormatSelect.value]?.label)||sensorFormatSelect.value||"UnknownSensorMode";
    const filename=`TVLRENTAL_${makeSafe(leftName)}_${makeSafe(rightName)}_${makeSafe(focal)}_T${tLeft}vsT${tRight}_${makeSafe(cam)}_${makeSafe(sensorLabel)}.pdf`;
    pdf.save(filename);
  } finally {
    if(wasSBS) setSideBySide(true,{force:true});
    updateFullscreenBars(); resetSplitToMiddle(); if(sbsBtn) sbsBtn.disabled=false; isExportingPdf=false;
  }
});

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
  if(![...cameraSelect.options].some(o => o.value === CAPTURE_CAMERA)){
    console.warn("CAPTURE_CAMERA not found:", CAPTURE_CAMERA);
    return;
  }

  cameraSelect.value = CAPTURE_CAMERA;
  cameraSelect.dispatchEvent(new Event("change", { bubbles:true }));

  requestAnimationFrame(() => {
  sensorFormatSelect.value = CAPTURE_FORMAT;
  sensorFormatSelect.dispatchEvent(new Event("change", { bubbles:true }));

  enableCalibrate(); // ✅ zet Calibrate automatisch aan na capture-format
});
}

forceCaptureCamera();
setTimeout(forceCaptureCamera, 50);
window.addEventListener("load", () => setTimeout(forceCaptureCamera, 250));
window.addEventListener("pageshow", () => setTimeout(forceCaptureCamera, 0));
