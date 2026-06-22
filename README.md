# Rock Paper Scissors Game

A simple Rock Paper Scissors game built using HTML, CSS, and JavaScript. The player competes against the computer, and the first to win two rounds wins the match.

## Features

* Interactive user interface
* Random computer move generation
* Live score tracking
* Match winner announcement
* Automatic score reset after each match
* Clean and responsive design

## Project Structure

```text
├── index.html
├── style.css
├── app.js
├── rock.png
├── paper.png
└── scissors.png
```

## Technologies Used

* HTML5
* CSS3
* JavaScript

## How to Run

1. Download or clone the repository.
2. Ensure all image files (`rock.png`, `paper.png`, `scissors.png`) are present in the project folder.
3. Open `index.html` in a web browser.

## How to Play

1. Select Rock, Paper, or Scissors by clicking on the corresponding image.
2. The computer will randomly generate its choice.
3. The result of the round is displayed immediately.
4. The first player to reach 2 points wins the match.
5. After the winner is announced, the scores are automatically reset.

## Game Rules

* Rock beats Scissors
* Scissors beats Paper
* Paper beats Rock
* If both players choose the same option, the round is a draw.

## Implementation Details

### Computer Choice Generation

The computer selects a move randomly from:

```javascript
const options = ["rock", "paper", "scissors"];
```

### Match Logic

* User and computer scores are tracked separately.
* A player wins the match upon reaching 2 points.
* After the match ends, scores are reset for a new game.

## Future Improvements

* Add sound effects
* Add animations
* Display match history
* Improve mobile responsiveness
* Replace browser alerts with custom modals

## Author

Yashasvi Attri

B.Tech (ECE), JIIT-62

## License

This project is open-source and available for educational and personal use.
