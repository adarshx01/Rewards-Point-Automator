# Rewards-Point-Automator Extension for Microsoft Rewards

Automate your Microsoft Rewards points collection with ease. This extension allows you to perform random searches on Bing at user-defined intervals, reusing the same tab, and lets you specify the number of searches. Simply set your preferences and watch as the extension boosts your rewards points automatically.

## Features

- Perform random searches on Bing.
- User-defined intervals between searches.
- Specify the number of searches.
- Reuses the same tab for all searches.

## Tools Used

- **HTML**: For the popup UI.
- **JavaScript**: For the background script and popup logic.
- **Chrome Extensions API**: To interact with browser tabs.

## Installation

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/your-repo/automated-search-extension.git
   cd automated-search-extension
   ```

2. **Open Chrome Extensions Page:**

   Open Google Chrome and go to `chrome://extensions/`.

3. **Enable Developer Mode:**

   In the top right corner, toggle the switch to enable Developer Mode.

4. **Load Unpacked Extension:**

   Click on the "Load unpacked" button and select the directory where you cloned the repository.

## Usage

1. **Open the Extension:**

   Click on the extension icon in the Chrome toolbar to open the popup.

2. **Set Preferences:**

   - **Delay**: Enter the delay time in seconds between each search.  (Recommended : Keep the delay more than a minute.)
   - **Number of Searches**: Enter the total number of searches you want to perform.   (Recommended : Keep the Searches according to your Level as in Microsoft REWARDS. Also Keep it little more than required. e.g. for 30 keep it as 40 ;))

3. **Start Searches:**

   Click the "Start Searches" button to begin the automated searches.

## Files Structure

- `manifest.json`: Configuration file for the Chrome extension.
- `popup.html`: HTML file for the extension popup UI.
- `popup.js`: JavaScript file for handling user inputs in the popup.
- `background.js`: JavaScript file for performing searches in the background.

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
