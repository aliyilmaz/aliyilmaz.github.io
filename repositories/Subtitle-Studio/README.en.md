# 🎬 Subtitle Studio 

**Subtitle Studio** is a web application that allows you to add instant notes to videos from live camera, local files, or YouTube, convert these notes into timestamped subtitle files (.vtt), and download them together with the video as a ZIP archive. The interface supports **Turkish, English, Russian, Arabic, and French**, and you can enter notes using voice input.

---

## ✨ Features

- 📹 **Three video sources**:
  - **Live Camera**: Record from your webcam, stop the recording, and watch the recorded video.
  - **Upload File**: Select a video file from your computer and play it.
  - **YouTube**: Play YouTube videos by entering a video ID or link.
- 📝 **Add notes**:
  - Add a note to any frame while playing.
  - Notes are automatically saved with a timestamp.
  - **Voice typing** support (click the microphone button and speak).
- 🗂️ **Subtitle generation**:
  - Notes are converted to `.vtt` (WebVTT) subtitle format.
  - Adjust the display duration for each note (0.5 – 10 seconds).
- 🎁 **ZIP download**:
  - Video (live recording or uploaded file) + subtitle file are downloaded as a single ZIP archive.
  - For YouTube videos, only the subtitle file is included (video file is not added).
- 🌐 **Multi-language support**:
  - Turkish, English, Russian, Arabic, French.
  - The page automatically detects your browser language and selects the appropriate language (defaults to English if not supported).
  - When you change the language, all UI texts and the speech recognition language update instantly.
- 📱 **Responsive design**:
  - Works comfortably on desktop, tablet, and mobile.
  - Video area has a fixed width, notes area is flexible.

---

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript (ES6)
- [JSZip](https://stuk.github.io/jszip/) – for creating ZIP archives
- YouTube IFrame API – for playing YouTube videos
- Web Speech API – for voice typing (requires browser support)
- Flexbox and CSS Grid – for responsive layout

---

## 🚀 Installation and Setup

The project is completely client-side and requires no server setup.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/subtitle-studio.git
   ```