# 🎬 Subtitle Studio

**Subtitle Studio** is a web application that allows you to add instant notes to videos you play from live cameras, local video files, or YouTube, convert these notes into a timestamped subtitle file (.vtt), and download them as a ZIP file along with the video. The interface supports **Turkish, English, Russian, Arabic, and French** languages, and you can enter notes using voice typing.

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

---

## 🛠️ Technologies Used

- HTML5, CSS3, JavaScript (ES6)
- [JSZip](https://stuk.github.io/jszip/) – To create ZIP archives
- YouTube IFrame API – To play YouTube videos
- Web Speech API – Voice typing (requires browser support)
- MediaDevices API – To retrieve and select the camera list
- Flexbox and CSS Grid – Responsive interface

---

## 🚀 Installation and Operation

The project is entirely client-side and does not require any server installation.

1. **Clone the repository**:
```bash
git clone https://github.com/aliyilmaz/subtitle-studio.git
```
2. **Run the files on a web server (optional):**

You can use a simple HTTP server (e.g., `http.server` with Python).

You can also run it by directly opening the `index.html` file in the browser (however, some browsers may require HTTPS or localhost for camera and microphone permissions).

## 🎯 User Guide
### Live Streaming Tab
1. Select the camera you want to use by clicking the camera selector button (📷).
2. Start recording by pressing the "Record" button.
3. Stop recording, watch the recorded video.
4. Add instant notes while watching the video with the "Add Notes" button.
5. Archive the video and subtitles with "Finish & Download ZIP".

### File Upload Tab
1. Select a video file from your computer.
2. Add notes while playing the video.
3. Complete the process and download the ZIP file.

### YouTube Tab
1. Enter the video link or ID.
2. Add notes while playing the video.
3. Download only the subtitle file.

### 📝 Notes
+ The voice typing feature only works in browsers that support the Web Speech API, such as **Google Chrome, Microsoft Edge, and Safari**.
+ Browser permission is required for camera selection.
+ Recorded videos are saved in .webm format, subtitles in **.vtt** format.