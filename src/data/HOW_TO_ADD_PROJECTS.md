# How to Add & Edit Projects in Your Portfolio

You can add or update your projects in two very simple ways:

---

## Method 1: Directly inside `src/data/portfolioData.js` (Recommended)

1. Open `src/data/portfolioData.js`.
2. Scroll to the `initialProjectsData` list.
3. Copy the template block below and paste it at the top or bottom of the list:

```javascript
  {
    id: "my-awesome-project",
    title: "Awesome Project Name",
    category: "AI & Full-Stack", // Choose from: "AI & Full-Stack", "Full-Stack", "Frontend", "Java & DSA"
    tagline: "One short, punchy sentence explaining what it is",
    period: "Oct 2026",
    featured: true, // Set to true to highlight it with a special badge and glow
    image: "/project-screenshot.png", // Place your screenshot in the "public/" folder!
    demoUrl: "https://your-live-demo.netlify.app",
    githubUrl: "https://github.com/your-username/repo",
    metrics: "E.g., 200+ Active Users or Sub-100ms Latency",
    description: "2-3 sentences explaining the core problem you solved, the architecture, and the outcome.",
    highlights: [
      "Key architectural achievement 1",
      "Key technology or optimization 2",
      "Impact or evaluation criteria 3"
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
  },
```

4. Save the file! Vite will automatically hot-reload and show your new project instantly.

---

## Method 2: Using the On-Page "+ Add Project Tool"

1. On your live portfolio, go to the **Projects** section.
2. Click the **"+ Add / Preview Project"** button.
3. Fill in the fields (Title, Category, Tech stack, URLs, Image path).
4. You will see a live card preview generated in real-time as you type!
5. Click **"Save to Live View"** to immediately add it to your browser, OR click **"Copy Code Block"** to copy the formatted code directly into `src/data/portfolioData.js`.

---

## Adding Images:
Just drop any project screenshots or demo images into the `public/` directory (e.g. `public/my-project.png`), then set `image: "/my-project.png"`.
