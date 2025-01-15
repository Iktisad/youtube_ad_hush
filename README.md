# Youtube Ad Hush (YouTube Ad Blocker Extension)

A lightweight Chromium-based browser extension that blocks ads on YouTube. This extension removes video ads, overlay ads, and banner ads, providing a seamless video-watching experience. It is compatible with Google Chrome and Microsoft Edge.

---

## Features

- Blocks YouTube video ads (pre-roll, mid-roll, and post-roll ads).
- Removes banner and overlay ads.
- Skips skippable ads automatically.
- Compatible with Google Chrome and Microsoft Edge.

---

## How It Works

The extension uses:

1. **Network Request Blocking**: Prevents requests to known ad-serving domains.
2. **DOM Manipulation**: Removes ad containers and elements directly from the page.
3. **Mutation Observers**: Monitors the page for dynamically loaded ads and removes them in real-time.

---

## Installation

### For Developers (Manual Installation)

#### Chrome:
1. Clone this repository or download it as a ZIP file and extract it.
   ```bash
   git clone https://github.com/yourusername/youtube-ad-blocker.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the project folder.
5. The extension will appear in your browser's toolbar.

#### Edge:
1. Open Edge and navigate to `edge://extensions/`.
2. Enable **Developer mode** (toggle in the bottom-left corner).
3. Click **Load unpacked** and select the project folder.
4. The extension will appear in your browser's toolbar.

---

## Usage

1. Install the extension as described above.
2. Open YouTube in your browser.
3. Enjoy an ad-free video-watching experience!

---

## File Structure

```
youtube-ad-blocker/
├── manifest.json       # Metadata for the browser extension
├── background.js       # Handles network request blocking
├── content.js          # Handles DOM manipulation to remove ads
├── icons/              # Optional folder for extension icons
│   └── icon128.png
```

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests if you:

- Encounter bugs.
- Have ideas for new features.
- Want to improve the code or documentation.

---

## Future Improvements

- Add a settings page to enable/disable specific features.
- Expand the blocklist dynamically by fetching remote filter lists (e.g., EasyList).
- Add support for other Chromium-based browsers like Brave and Opera.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Disclaimer

This extension is developed for educational purposes. YouTube’s Terms of Service may prohibit certain ad-blocking activities. Use this extension responsibly.

---

## Contact

For questions or feedback, feel free to reach out:
- **Email**: your.email@example.com
- **GitHub Issues**: Open an issue in this repository.

