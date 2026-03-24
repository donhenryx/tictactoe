# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-file web Tic Tac Toe game (`tictactoe.html`). No build step, no dependencies, no package manager — open the file directly in a browser to run it.

## Running the project

```bash
open tictactoe.html
```

## Git workflow

Every meaningful change must be committed with a clean, descriptive message and pushed to GitHub:

```bash
git add <files>
git commit -m "Short imperative summary"
git push
```

Remote: `https://github.com/donhenryx/tictactoe` (branch: `main`)

## Architecture

All game logic, markup, and styles live in `tictactoe.html`:

- **HTML** — board grid (`#board`), status line, reset button, score display
- **CSS** — dark theme, CSS Grid 3×3 board, hover/win/taken state classes
- **JS** — `cells[]` array tracks board state; `WINS` constant lists all 8 winning lines; `init()` resets state; `handleClick()` handles moves, win/draw detection, and score updates
