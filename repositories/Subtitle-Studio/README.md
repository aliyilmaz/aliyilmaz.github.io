# 🎬 Subtitle Studio

**Subtitle Studio** is a web application that lets you add instant notes to videos from your live camera, local files, or YouTube. These notes are converted into timestamped subtitle files (.vtt) and can be downloaded together with the video as a ZIP archive. The interface supports multiple languages and features voice typing for easy note entry.

🌐 **Read the documentation in your language:**

- [🇹🇷 Türkçe](README.tr.md)
- [🇬🇧 English](README.en.md) *(you are here)*
- [🇷🇺 Русский](README.ru.md)
- [🇦🇪 العربية](README.ar.md)
- [🇫🇷 Français](README.fr.md)

*(If the links above don't work, please check the file names: README.tr.md, README.en.md, README.ru.md, README.ar.md, README.fr.md)*

---

## ✨ Features

- 📹 **Three video sources**:
- **Live Stream**: Record from your webcam, pause the recording, and watch the recorded video.
- **Upload File**: Select and play a video file from your computer.
- **YouTube**: Play YouTube videos by entering the video ID or link.
- 🎥 **Camera Selector**: In the live stream tab, you can select the camera you want to use before recording starts. The camera cannot be changed during recording.
- 📝 **Adding Notes**:
- Add notes to any frame during playback.
- Notes are automatically saved with a timestamp.
- **Voice writing** support (enter notes by speaking using the microphone button).
- 🗂️ **Creating Subtitles**:
- Added notes are converted into a subtitle file in `.vtt` (WebVTT) format.
- You can adjust the display time of each note (0.5 – 10 seconds).
- 🎁 **ZIP Downloading**:
- Video (live recording or uploaded file) + subtitle file are downloaded as a single ZIP archive.
- For YouTube videos, only the subtitle is downloaded (the video file is not included).
- 🌐 **Multiple language support**: - Turkish, English, Russian, Arabic, French.
- When the page opens, your browser language is automatically detected and the appropriate language is selected (English if not supported).
- When the language changes, all interface texts and the voice recognition language are also updated.
- 📱 **Responsive design**:
- Comfortable use on desktop, tablet and mobile devices.
- Video area is fixed width, notes area is flexible.

------------------------------------------------------------------------

## 🛠️ Technologies Used

-   HTML5, CSS3, JavaScript (ES6)
-   JSZip -- For creating ZIP archives
-   YouTube IFrame API -- For playing YouTube videos
-   Web Speech API -- Voice typing (requires browser support)
-   MediaDevices API -- For retrieving and selecting camera devices
-   Flexbox and CSS Grid -- Responsive interface

------------------------------------------------------------------------

## 🚀 Installation and Running

The project is fully client-side and does not require any server setup.

1.  **Clone the repository**:

    ``` bash
    git clone https://github.com/aliyilmaz/subtitle-studio.git
    ```

2.  **Run the files on a web server (optional):**

You can use a simple HTTP server (e.g., Python's `http.server`).

You can also open the `index.html` file directly in your browser
(however, some browsers may require HTTPS or localhost access for camera
and microphone permissions).

------------------------------------------------------------------------

## 🎯 User Guide

### Live Stream Tab

1.  Click the camera selector button (📷) to choose the camera you want
    to use.
2.  Press the "Record" button to start recording.
3.  Stop recording, watch the recorded video.
4.  Add instant notes while watching the video with the "Add Notes" button.
5.  Use "Finish & Download ZIP" to archive the video and subtitles.

### Upload File Tab

1.  Select a video file from your computer.
2.  Add notes while the video is playing.
3.  Complete the process and download the ZIP file.

### YouTube Tab

1.  Enter the video link or ID.
2.  Add notes while the video is playing.
3.  Download only the subtitle file.

------------------------------------------------------------------------

### 📝 Notes

-   The voice typing feature works only in browsers that support the
    **Web Speech API**, such as Google Chrome, Microsoft Edge, and
    Safari.
-   Browser permission is required for camera selection.
-   Recorded videos are saved in `.webm` format, and subtitles are saved
    in `.vtt` format.
