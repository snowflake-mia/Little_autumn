const STORAGE_KEY = "little-autumn-bucket-list-v1";

const starterActivities = [
  {
    id: "autumn-1",
    title: "Make a cinnamon latte at home",
    description: "Put on your favorite playlist and enjoy a slow morning.",
    emoji: "☕",
    tag: "Cozy moments",
    done: false,
  },
  {
    id: "autumn-2",
    title: "Take a golden-hour walk",
    description: "Notice the changing leaves and take a few pretty photos.",
    emoji: "🍂",
    tag: "Little adventures",
    done: false,
  },
  {
    id: "autumn-3",
    title: "Have a movie night",
    description: "Pick a comfort movie, grab a blanket, and make popcorn.",
    emoji: "🎬",
    tag: "Stay in",
    done: false,
  },
  {
    id: "autumn-4",
    title: "Visit a cute little bookstore",
    description: "Find a book that feels like it belongs to this season.",
    emoji: "📚",
    tag: "Little adventures",
    done: false,
  },
  {
    id: "autumn-5",
    title: "Bake something with cinnamon",
    description: "Try cookies, apple cake, or your own cozy recipe.",
    emoji: "🍪",
    tag: "Cozy moments",
    done: false,
  },
  {
    id: "autumn-6",
    title: "Create an autumn playlist",
    description: "Collect songs that sound like a rainy afternoon.",
    emoji: "🎧",
    tag: "Creative days",
    done: false,
  },
  {
    id: "autumn-7",
    title: "Decorate your little corner",
    description: "Add a candle, a book, or something in a warm autumn color.",
    emoji: "🕯️",
    tag: "Stay in",
    done: false,
  },
  {
    id: "autumn-8",
    title: "Write a letter to your future self",
    description: "Save your favorite memories and dreams from this season.",
    emoji: "💌",
    tag: "Creative days",
    done: false,
  },
];

const activityGrid = document.querySelector("#activity-grid");
const activityForm = document.querySelector("#activity-form");
const activityInput = document.querySelector("#activity-input");
const progressNumber = document.querySelector("#progress-number");
const progressFill = document.querySelector("#progress-fill");
const itemCount = document.querySelector("#item-count");
const emptyState = document.querySelector("#empty-state");
const toast = document.querySelector("#toast");
const filterButtons = document.querySelectorAll(".filter-button");

let activities = loadActivities();
let currentFilter = "all";
let toastTimer;

function loadActivities() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved !== null) {
      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        return parsed.filter(
          (item) =>
            item &&
            typeof item.id === "string" &&
            typeof item.title === "string" &&
            typeof item.done === "boolean"
        );
      }
    }
  } catch (error) {
    console.warn("Could not load saved activities.", error);
  }

  return starterActivities.map((activity) => ({ ...activity }));
}

function saveActivities() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
  } catch (error) {
    showToast("Your browser couldn't save changes. Check storage settings.");
    console.warn("Could not save activities.", error);
  }
}

function getVisibleActivities() {
  if (currentFilter === "active") {
    return activities.filter((activity) => !activity.done);
  }

  if (currentFilter === "done") {
    return activities.filter((activity) => activity.done);
  }

  return activities;
}

function updateProgress() {
  const total = activities.length;
  const completed = activities.filter((activity) => activity.done).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  progressNumber.textContent = `${percentage}%`;
  progressFill.style.width = `${percentage}%`;

  itemCount.textContent = `${total} ${
    total === 1 ? "little plan" : "little plans"
  }`;

  if (total > 0 && completed === total) {
    showToast("You did it! Every little adventure is complete. 🍂");
  }
}

function createActivityCard(activity) {
  const card = document.createElement("article");
  card.className = `activity-card${activity.done ? " is-done" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "activity-check";
  checkbox.checked = activity.done;
  checkbox.setAttribute("aria-label", `Complete: ${activity.title}`);

  checkbox.addEventListener("change", () => {
    activity.done = checkbox.checked;
    saveActivities();
    renderActivities();

    if (activity.done) {
      showToast("One little adventure completed! ✨");
    }
  });

  const emoji = document.createElement("div");
  emoji.className = "activity-emoji";
  emoji.setAttribute("aria-hidden", "true");
  emoji.textContent = activity.emoji || "🍂";

  const content = document.createElement("div");
  content.className = "activity-content";

  const title = document.createElement("h3");
  title.className = "activity-title";
  title.textContent = activity.title;

  const description = document.createElement("p");
  description.className = "activity-description";
  description.textContent =
    activity.description || "A little idea for your season.";

  const tag = document.createElement("span");
  tag.className = "activity-tag";
  tag.textContent = activity.tag || "My idea";

  content.append(title, description, tag);

  const actions = document.createElement("div");
  actions.className = "activity-actions";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.textContent = "×";
  deleteButton.setAttribute("aria-label", `Delete: ${activity.title}`);

  deleteButton.addEventListener("click", () => {
    activities = activities.filter((item) => item.id !== activity.id);
    saveActivities();
    renderActivities();
    showToast("Idea removed from your list.");
  });

  actions.append(deleteButton);
  card.append(checkbox, emoji, content, actions);

  return card;
}

function renderActivities() {
  activityGrid.replaceChildren();

  const visibleActivities = getVisibleActivities();

  visibleActivities.forEach((activity) => {
    activityGrid.appendChild(createActivityCard(activity));
  });

  emptyState.classList.toggle("hidden", visibleActivities.length !== 0);
  updateProgress();
}

function chooseEmoji(title) {
  const text = title.toLowerCase();

  if (/coffee|latte|tea|drink|cocoa|hot chocolate/.test(text)) return "☕";
  if (/walk|nature|leaf|leaves|park|outside/.test(text)) return "🍂";
  if (/book|read|library|bookstore/.test(text)) return "📚";
  if (/movie|film|cinema|show/.test(text)) return "🎬";
  if (/bake|cake|cookie|cook|food|recipe/.test(text)) return "🍪";
  if (/music|song|playlist|dance/.test(text)) return "🎧";
  if (/draw|paint|art|craft|create/.test(text)) return "🎨";
  if (/write|letter|journal|diary/.test(text)) return "💌";
  if (/friend|family|together|picnic/.test(text)) return "🧡";
  if (/decorate|room|candle|home/.test(text)) return "🕯️";

  return "🍁";
}

activityForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = activityInput.value.trim();

  if (!title) {
    activityInput.focus();
    return;
  }

  const newActivity = {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title,
    description: "Your own little autumn adventure. Make it special!",
    emoji: chooseEmoji(title),
    tag: "My idea",
    done: false,
  };

  activities.unshift(newActivity);
  currentFilter = "all";

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === "all");
  });

  saveActivities();
  renderActivities();

  activityInput.value = "";
  activityInput.focus();

  showToast("A new little adventure has been added! 🍁");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    renderActivities();
  });

  button.setAttribute(
    "aria-pressed",
    String(button.dataset.filter === currentFilter)
  );
});

function showToast(message) {
  clearTimeout(toastTimer);

  toast.textContent = message;
  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

renderActivities();
