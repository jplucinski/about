---
title: "Label Squeeze: Efficient Shipping Label Merging"
description: "A browser-based tool built with Astro and PDF-lib to merge A6 shipping labels into A4 pages, processing everything client-side for privacy."
pubDate: 2025-11-29
tags: ["Astro", "Tailwind CSS", "PDF-lib", "Open Source", "Tool"]
category: "Projects"
draft: false
seo:
  title: "Label Squeeze - Merge A6 Labels to A4 PDF"
  description: "Label Squeeze is a free, secure, client-side tool to combine A6 shipping labels into A4 pages for efficient printing."
---

I recently launched [Label Squeeze](https://www.labelsqueeze.org/), a browser-based tool designed to help e-commerce businesses and individuals save paper by efficiently merging multiple A6 shipping labels into A4 pages.

## The Problem

The idea for this project came from my work with [June Heart Studio](https://juneheart.studio/). We needed a better way to handle shipping logistics without investing in specialized hardware immediately.

If you've ever had to print shipping labels on a standard home or office printer, you know the struggle. Most shipping carriers generate labels in A6 format (4x6 inches), which is perfect for thermal label printers but awkward for standard A4 paper. Printing one label per sheet is wasteful, and trying to align them manually is tedious.

## The Solution

Label Squeeze solves this by automatically arranging multiple A6 labels onto a single A4 sheet. It's a simple, drag-and-drop interface that streamlines the printing process.

### Key Features

- **Upload**: Drag and drop your A6 shipping labels (PDF format).
- **Combine**: The tool automatically arranges them to fit up to 4 labels per A4 page.
- **Download**: Get a single, optimized PDF ready for printing.

## Privacy First

One of the core design decisions for Label Squeeze was privacy. Shipping labels contain sensitive personal information—names, addresses, and tracking numbers.

Label Squeeze is built to perform **100% client-side processing**. This means your files never leave your browser. No data is uploaded to any server, ensuring your customer data remains completely private and secure.

## Tech Stack

The project is open source and built with a modern web stack:

- **[Astro](https://astro.build/)**: For a fast, content-focused foundation.
- **[Tailwind CSS](https://tailwindcss.com/)**: For a clean, responsive, and minimal UI.
- **[PDF-lib](https://pdf-lib.js.org/)**: The library that powers the PDF manipulation directly in the browser.

## Check It Out

You can use the tool for free at [labelsqueeze.org](https://labelsqueeze.jplucinski.dev/).

The code is available on GitHub if you're interested in how it works or want to contribute:
[github.com/jplucinski/Label-Squeeze](https://github.com/jplucinski/label-squeeze)
