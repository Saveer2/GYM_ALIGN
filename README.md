#  GYM ALIGN

---

> **Train Smart, Move Right !!** > Master every exercise with precision. Lift safely, align your moves, and make every rep count.

**GYM ALIGN** is a web-based fitness guide designed to help users navigate through various workout routines. It categorizes exercises by equipment type (Weighted vs. Non-Weighted) and targets specific muscle groups with detailed guides, intended purposes, and visual aids.

---

##  Screenshots

### Landing Page & Workout Selection
The entry point to the fitness journey, featuring a dynamic selection screen.
| Home Page | Selection Screen |
|:---:|:---:|
| ![Home Page](path/to/your_home_screenshot.jpg) | ![Selection](path/to/your_selection_screenshot.jpg) |

### Muscle Group Categories
A categorized grid layout allowing users to choose specific target areas.
![Categories](path/to/your_categories_screenshot.jpg)

### Exercise Guides (Color-Coded Themes)
Each muscle group features a unique neon glow theme to distinguish the workouts visually.

| **Shoulders (Yellow)** | **Back (Green)** | **Abs (Red)** |
|:---:|:---:|:---:|
| ![Shoulder](path/to/shoulder_screenshot.jpg) | ![Back](path/to/back_screenshot.jpg) | ![Abs](path/to/abs_screenshot.jpg) |

---

##  Features

* **Interactive Navigation:** Smooth transitions between the landing page, workout type selection, and specific muscle groups.
* **Categorized Workouts:**
    * **Weighted Exercises:** For strength training (Dumbbells, Barbells).
    * **Non-Weighted:** For cardio and bodyweight movements.
* **Detailed Exercise Cards:** Each exercise card provides:
    * **Primary Muscle Focus:** Exactly what you are training.
    * **Purpose:** Why you are doing this movement.
    * **Action Buttons:** "Extend" and "Get Started" buttons for further interaction.
* **Visual UI/UX:**
    * Neon glow effects specific to different pages (Purple, Green, Yellow, Red).
    * Responsive grid layouts for exercise cards.
    * Hover effects on workout cards.

---

## Technologies Used

* **HTML5:** Semantic structure for all pages (`abs.html`, `chest.html`, `index.html`, etc.).
* **CSS3:** extensive styling for the "Glow" aesthetic, Flexbox/Grid layouts, and responsive design.
    * Styles are modularized (e.g., `row1.css`, `styleweight.css`).
* **JavaScript:** (`index1.js`) Handles basic interactivity and DOM manipulation.

---

## Project Structure

```text
GYM-ALIGN/
├── img/                 # Icons and images used for exercises
├── model/               # 3D models or additional assets
├── video/               # Video demonstrations (if applicable)
├── index.html           # Main landing page
├── index1.js            # Main script file
├── style.css            # Global styles
├── styleweight.css      # Specific styles for weight pages
├── row1.css, row2.css   # Modular CSS for specific layout rows
├── abs.html             # Abdominal exercises page
├── back.html            # Back exercises page
├── biceps.html          # Biceps exercises page
├── chest.html           # Chest exercises page
├── legs.html            # Leg exercises page
├── shoulder.html        # Shoulder exercises page
├── triceps.html         # Triceps exercises page
└── weight.html          # Weighted exercise selection page
