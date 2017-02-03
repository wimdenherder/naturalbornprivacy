# Natural Born Privacy
2 february 2016

Do you want to use your laptop in public places with full privacy?
This Chrome Extension makes it possible for you. It lets your screen only be readable with RED GLASSES on. 
This is an open source project. At the bottom you will find suggestions for improvement. I welcome new updates. Thank you and have fun with this one! 

Greetings,
Wim den Herder

# Buy the Red Glasses

The glasses are called "Glasses John Lennon Red" (Dutch: "Funbril Johnn Lennon Rood")
https://www.hippiekleding.nl/funbril-john-lennon-rood.html

# Load the extension
Source: https://developer.chrome.com/extensions/getstarted#unpacked

Extensions that you download from the Chrome Web Store are packaged up as .crx files, which is great for distribution, but not so great for development. Recognizing this, Chrome gives you a quick way of loading up your working directory for testing. Let's do that now.

1. Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).

2. Ensure that the Developer mode checkbox in the top right-hand corner is checked.

3. Click Load unpacked extension… to pop up a file-selection dialog.

4. Navigate to the directory in which your extension files live, and select it.

Alternatively, you can drag and drop the directory where your extension files live onto chrome://extensions in your browser to load it.

If the extension is valid, it'll be loaded up and active right away! If it's invalid, an error message will be displayed at the top of the page. Correct the error, and try again.

# Suggestions for improvement (open source)

- Make an ON/OFF button, that stays on for all pages you visit. For this we will need to work with the Storage API (https://developer.chrome.com/extensions/storage)
- Detect dynamic page changes and restyle them immediately. For example: when you scroll down in Facebook.
- Make it able to choose another color of your glasses:
Red glasses: background red-white dots, text-color green
Green glasses: background green-white dots, text-color red
Color X glasses: background X-white dots, text-color opposite-of-X
