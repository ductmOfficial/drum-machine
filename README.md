# Drum Machine

A drum machine app built with React. This project fulfills the requirements of the FreeCodeCamp Front End Development Libraries certification.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

The Drum Machine is a web application that allows users to play different drum sounds by clicking on buttons or pressing specific keys on the keyboard. Each button corresponds to a unique drum sound, and the app displays the name of the sound being played.

## Features

- 9 clickable drum pads, each corresponding to a unique drum sound.
- Keyboard support: Pressing specific keys (Q, W, E, A, S, D, Z, X, C) triggers the corresponding drum pad.
- Display showing the name of the sound being played.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Yarn: Ensure you have Yarn installed. If not, you can install it from [here](https://yarnpkg.com/getting-started/install).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ductmOfficial/drum-machine.git
   ```

2. Navigate to the project directory:
   ```bash
   cd drum-machine
   ```

3. Install the dependencies:
   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   yarn start
   ```

## Usage

Once the development server is running, you can open your browser and navigate to `http://localhost:3000` to see the app in action. Click on the drum pads or press the corresponding keys on your keyboard to play the drum sounds and see the display update.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **HTML5 Audio**: For playing the drum sounds.
- **CSS**: For styling the application.

## Project Structure

```
drum-machine
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── DrumPad.js
│   │   ├── PadBank.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── package.json
└── yarn.lock
```

- **public/index.html**: The main HTML file for the app.
- **src/index.js**: The entry point for the React application.
- **src/components/DrumPad.js**: The component representing each drum pad.
- **src/components/PadBank.js**: The main component that contains the drum pads.

## License

Distributed under the MIT License. See `LICENSE` for more information.