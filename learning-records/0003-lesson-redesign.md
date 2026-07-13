# 0003 — Lessons "too hard to follow": diagnosis and format redesign

Date: 2026-07-13
Status: active

## Context

The student reported lessons 0001–0003 too hard to follow. Lessons 0001 (git branch/PR) and 0002 (semantic HTML/flexbox) were the ones actually attempted, and both hit walls in practice. **Correction to record 0002:** "loop mechanics: solid on first attempt" described completion with live mentor assistance (commit-message fix, branch-deletion reminder, unblocking); it did not mean the lesson artifact was followable alone. Completion ≠ followability. Lesson 0003 (terminal) was not attempted; its problems below are predicted, not observed.

A 4-reviewer audit (3 medium-effort lenses: beginner simulation, sequencing, cognitive load; 1 xhigh holistic) converged on four root causes, each verified against the repo:

1. **Sequencing inversion** — lessons taught git → HTML → terminal while requiring terminal skills from lesson 1 step 1. The GSG curriculum's own week-1 schedule (coursebook/week-1/README.md, Day 1–2) orders HTML/flexbox → terminal → git.
2. **Concept density without structure** — 21 / 23 / 42 new items per lesson vs a 5–9 item retention benchmark, violating NOTES.md's own ≤45-min working-memory rule.
3. **Step bundling + untaught requirements** — single steps packing 4–11 actions with no success criteria; exercises/quizzes requiring things never taught (remote branch deletion, `min-height: 100vh` sticky footer, `flex: 1` vs `flex-grow: 1` explained only inside quiz answer feedback).
4. **Broken/hardcoded references** — `week-0/` referenced after being deleted (commit 0d4098b), hardcoded `/home/amjad` and `~/learning-code` paths conflicting with the student's actual `~/code/` convention.

Ruled out: quiz/playground JS breakage (pure DOM, works over file://) and student capability (record 0002 shows he progresses fast with assistance).

## Decision

- All lessons are regenerated under a written standard, `lessons/STYLE.md`, whose rules each negate one diagnosed failure. Mentor-reviewed via annotations: flat file layout (`lessons/<week>-<lesson>-<title>.html` + `lessons/<week>-index.html`), density allowed only with structure (numeric cap demoted to review trigger), active checks preferred over quizzes, jargon via tooltips, agent-pair adaptations hidden in HTML comments.
- Lesson ordering strictly follows `curriculum/coursebook/week-<n>/README.md`; deviations only for solo-learner breakage, each logged in the week index's sequencing notes.
- Week-1 is generated first as the feedback pilot; the student redoes it. Remaining weeks are mass-generated per-week by an agent workflow only after week-1's format is approved.
- Old lessons 0001–0003 and their naming scheme are retired when the new week-1 lands.
- Student feedback protocol: to be defined by mentor in STYLE.md (open TODO).

## Consequences

- The student redoes week-1 with corrected lessons; treat his lesson-1 git knowledge as fragile-but-present (retrieval practice still applies, per record 0002).
- Every generated week must pass the STYLE.md definition of done, including a zero-blocker beginner-simulation review, before reaching the student.
- Future "student completed X" records must distinguish solo completion from assisted completion.
