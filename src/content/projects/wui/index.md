---
title: "🌎 IMF World Uncertainty Index Map"
description: "Visualising economic uncertainty across the globe"
date: "May 15 2025"
demoURL: "https://htmlpreview.github.io/?https://github.com/PointlessWidgetsCo/wui_worldmap/blob/main/wui_animation.html"
repoURL: "https://github.com/PointlessWidgetsCo/wui_worldmap"
---

## 🎯 Aim & Motivation

Economic uncertainty drives investment choices, shapes policy debates, and ripples through global markets. In this project, we bring the IMF’s World Uncertainty Index (WUI) to life as an interactive, animated map. Readers of this blog will:

* **See** how uncertainty peaks and troughs in different regions.
* **Compare** countries at a glance for any given month.
* **Explore** trends by playing back history from 1990 to today.

By embedding this visualization, your audience can engage directly with the data—stopping, pausing, or jumping to any month—and gain intuitive insight into the volatility of our time.

---

## 🌐 Data Source & Methodology

The WUI is maintained by IMF researchers (Ahir, Bloom & Furceri, 2018). It counts the occurrence of “uncertainty” (and related synonyms) in country reports and major newspapers to produce a monthly index for over 180 economies. Key details:

* **Period Covered:** January 1990 to present, updated monthly.
* **Data Format:** Excel/CSV downloads available at [https://worlduncertaintyindex.com/](https://worlduncertaintyindex.com/).
* **Sheet Used:** `T1`—columns for country ISO‑3166 codes, rows for each month (date = first of month), with numeric index values.

With this open data, we reshape and feed it into Plotly Express to craft our animated choropleth.

---

## 🚀 Usage

Run the script from your terminal:

```bash
python wui_heatmap.py
```

This will generate:

* `wui_animation.html` — an interactive, self‐contained HTML file.

Open it in any modern browser to view:

* ▶️ **Play** button to animate month‐by‐month.
* ▶️ **Slider** to jump to any month.
* ❌ **No autoplay** on load (preventing the initial burst).

---

<div class="w-screen mx-[calc(-50vw+50%)]">
    <div class="max-w-screen-xl mx-auto px-5">
        <iframe
            src="/html/wui_animation.html"
            style="width:100%; height:800px"
            title="World Uncertainty Index Animation"
        />
    </div>
</div>
