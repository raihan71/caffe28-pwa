# Caffe28 - Vanilla JavaScript PWA

## Introduction

Caffe28 is a Progressive Web Application (PWA) built with vanilla JavaScript, designed for coffee enthusiasts. This lightweight application provides a seamless experience across devices without any framework dependencies.

## Features

- 📱 Works offline through service workers
- 🚀 Fast loading and responsive design
- ⚙️ Installable on desktop and mobile devices
- 🔄 Automatic updates when new content is available
- 📃 Vanilla JavaScript implementation (no frameworks)

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/raihan71/caffe28.git
cd caffe28
```

2. Start a local server:

```bash
# Using Python
python -m http.server 8000
# OR using Node.js
npx serve
```

3. Open your browser and navigate to `http://localhost:8000`

## Structure

```
caffe28/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest file
├── css/                # Stylesheets
├── js/                 # JavaScript files
│   ├── script.js          # Main application logic
│   └── service-worker.js # Service worker for offline capability
├── img/             # Image assets
    └── icons/              # App icons for various platforms
```

## Deployment

Deploy to any static web hosting service like GitHub Pages, Netlify, or Vercel.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Service Workers API
- Web App Manifest

## License

MIT

## Contribution

Contributions are welcome! Please feel free to submit a Pull Request.
