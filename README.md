# 🍂 Little Autumn — Cozy Bucket List Website

A cute, cozy, and responsive autumn-themed website built with HTML, CSS, and vanilla JavaScript. Little Autumn helps you collect seasonal ideas, track little adventures, and make the most of the autumn season.

## Features

- Responsive design for desktop, tablet, and mobile screens
- Warm autumn colors and cozy seasonal details
- Interactive autumn bucket list
- Add your own activities
- Mark activities as completed
- Delete activities from your list
- Filter activities by All Ideas, To Do, and Completed
- Automatic progress percentage and progress bar
- Automatic saving with browser localStorage
- Subtle animations and interactive feedback
- Easy-to-edit HTML, CSS, and JavaScript
- No frameworks, packages, or build tools required

## 📦 What's Included

```text
Autumn/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` — website structure and content
- `style.css` — colors, layout, animations, and responsive design
- `script.js` — checklist functionality, filters, progress tracking, and saving
- `README.md` — this setup and customization guide

## 🚀 Getting Started

### Option 1: Open in Your Browser

1. Download and extract the project files.
2. Keep all four files in the same folder.
3. Open `index.html` in a modern web browser.
4. Enjoy your cozy autumn bucket list!

### Option 2: Use Visual Studio Code

1. Install Visual Studio Code if you do not already have it.
2. Open the `little-autumn` project folder.
3. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in your browser, or use the Live Server extension for a local preview.

No installation commands or build process are needed.

## 🍁 How to Use the Website

### Manage Your Bucket List

- **Add an idea:** Enter an activity in the input field and click "Add idea".
- **Complete an activity:** Select its checkbox.
- **Remove an activity:** Click the × button on its card.
- **Filter activities:** Choose All Ideas, To Do, or Completed.
- **Track your progress:** The percentage and progress bar update automatically.

### Save Your Progress

The website uses your browser's `localStorage` to remember your activities.

Your list is saved locally in the current browser profile on the current device. It does not automatically sync to other devices.

## 🎨 Customization Guide

### Change Website Text

Open `index.html` to edit the main heading, introduction, reminders, and footer text.

To change the starter bucket-list activities, open `script.js` and find the `starterActivities` array. You can edit the activity titles, descriptions, emojis, and category labels.

### Change Colors

Open `style.css` and look for the `:root` section at the beginning of the file.

Edit the CSS variables to customize the theme:

- `--cream` — main background color
- `--paper` — card background color
- `--ink` — main text color
- `--orange` — accent color
- `--peach` — warm decorative color
- `--sage` — optional muted green accent
- `--line` — border and divider color

### Change Fonts

The website uses Playfair Display for headings and DM Sans for body text through Google Fonts.

An internet connection is required to load these external fonts. If they are unavailable, the browser will use fallback fonts.

### Add Your Own Hero Photo

The current hero section uses CSS shapes and emoji, so an image is not required.

To use your own photo, place a properly licensed image in an `images` folder and update the hero section in `index.html` and its styles in `style.css`.

Only use images that you own or have permission to use.

## 📱 Responsive Design

The layout adjusts for different screen sizes, including phones, tablets, and desktop computers.

For best results, preview the website at several browser widths before publishing your customized version.

## 🔒 Privacy and Storage

- The website does not require an account.
- Activities are stored locally in the browser.
- No server or database is included.
- Activities do not automatically synchronize between devices.
- Clearing browser storage may erase the saved list.

## 🛠️ Requirements

- A modern web browser
- A text editor, such as Visual Studio Code, for customization
- Internet access for Google Fonts

No paid software or additional JavaScript libraries are required.

## 🧰 Troubleshooting

**The website has no styling.**

Check that `style.css` is in the same folder as `index.html` and that the filename matches the stylesheet link.

**The buttons do not work.**

Check that `script.js` is in the same folder and that the script reference in `index.html` is correct. You can also inspect the browser developer console for errors.

**My saved list disappeared.**

The list is stored in browser storage. Clearing browser data, using another browser, or opening the website on another device may result in a different list.

**The fonts look different.**

Google Fonts needs an internet connection. The website will use fallback fonts when the external fonts cannot load.

## 📄 Product Information

Little Autumn is a static front-end website template made with HTML, CSS, and JavaScript.

This package does not include hosting, a domain name, user accounts, cloud synchronization, a backend, or a database.

Third-party assets, if added during customization, must follow their respective licenses. Refer to the seller's product terms for the applicable usage license.

---

Made for slow days and golden leaves. ♡
