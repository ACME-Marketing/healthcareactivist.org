# Project Plan: Healthcare Activist Platform

This document outlines the strategic vision, architecture, and implementation plan for the Healthcare Activist Platform. It will serve as a living document to track progress and ensure alignment with the project's core mission.

---

## 1. Core Mission & Vision

*   **Vision:** To expose the flaws in the profit-driven American healthcare system and advocate for a more equitable model that prioritizes people over profits.
*   **Mission:** To empower and amplify the voices of nurses and patients, support the growth of **nurses' unions**, and drive legislative and corporate reform in the pharmaceutical and insurance industries.

---

## 2. Content Ecosystem

The website will serve as the central hub in a "hub-and-spoke" content model, aggregating content from various platforms to create a powerful, multi-channel presence.

*   **Hub:** The Healthcare Activist website.
*   **Spokes:**
    *   **Headless CMS (WordPress):** The primary source for all articles and blog posts, with content creation automated via n8n workflows.
    *   **Podcast:** Audio content to be featured on the website.
    *   **YouTube:** Video content to be embedded and featured on the website.

---

## 3. Site Structure

The platform will be organized around the following key sections:

*   **Home:** A dynamic landing page featuring the mission, latest news, and calls-to-action.
*   **The Fight:** Explaining the core issues of the healthcare system.
*   **Nurses Union Hub:** A dedicated resource for nurses.
*   **Patient Power:** A resource center for patients.
*   **Media:** A section to house the podcast and YouTube content.
*   **News & Stories:** The blog, fed from the headless WordPress CMS.
*   **Take Action:** A central hub for mobilization.
*   **About:** Describing the organization and its mission.

---

## 4. Implementation Plan

### Phase 1: Core Site Structure (Complete)

*   [x] Create Home page (`src/pages/index.astro`)
*   [x] Create The Fight page (`src/pages/the-fight.astro`)
*   [x] Create Nurses Union Hub page (`src/pages/nurses-union-hub.astro`)
*   [x] Create Patient Power page (`src/pages/patient-power.astro`)
*   [x] Create Media page (`src/pages/media.astro`)
*   [x] Create Take Action page (`src/pages/take-action.astro`)
*   [x] Create News & Stories index (`src/pages/posts/index.astro`)
*   [x] Create About page (`src/pages/about.astro`)
*   [x] Update navigation in the main layout to include all sections.

### Phase 2: Content & Media Integration

*   [ ] **Content Creation:** Draft content for "The Fight," "Nurses Union Hub," and "Patient Power."
*   [ ] **Content Integration:** Integrate new content into the corresponding pages.
*   [ ] **Podcast Integration:** Develop a system to feature the latest podcast episodes on the "Media" page.
*   [ ] **YouTube Integration:** Develop a system to feature the latest YouTube videos on the "Media" page and embed them in relevant articles.

### Phase 3: Design & Mobilization

*   [ ] **Apply Visual Design:** Implement the color palette and typography from `design-proposal.md`.
*   [ ] **Develop "Take Action" Hub:** Build out the `take-action.astro` page.
*   [ ] **Homepage Integration:** Update the homepage to dynamically feature the latest content from all channels (blog, podcast, YouTube).