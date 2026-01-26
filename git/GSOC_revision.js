
GSOC-ESSENTIAL GIT COMMANDS (ONLY IMPORTANT ONES)

Setup
git config --global user.name "Your Name"        → set username
git config --global user.email "you@email.com"   → set email

Get project
git clone <repo-url>                             → copy repo locally
cd <repo>                                        → enter project

Daily work
git status                                      → see changed files
git diff                                        → see exact changes

Branching (VERY IMPORTANT)
git checkout -b my-branch                        → create + switch branch
git branch                                      → list branches
git checkout main                                → switch branch

Saving work
git add <file>                                  → stage file
git add .                                       → stage all
git commit -m "meaningful message"               → save changes

Push & PR
git push origin my-branch                        → push branch to GitHub

Upstream sync (GSOC CRITICAL)
git remote add upstream <org-repo-url>           → add original repo
git fetch upstream                               → get latest changes
git rebase upstream/main                         → sync cleanly (preferred)

Fix mistakes
git restore <file>                               → discard file changes
git restore --staged <file>                      → unstage file
git commit --amend                               → edit last commit

Emergency
git stash                                       → save work temporarily
git stash pop                                   → restore stashed work

90% GSOC FLOW:
clone → checkout -b → code → add → commit → push → PR → fetch → rebase





SIMPLE EXPLANATION (GSOC CONTEXT)

Push & PR
git push origin my-branch
→ uploads your branch to YOUR GitHub fork
→ after this, you go to GitHub website
→ click "Compare & Pull Request"
→ THIS is where Pull Request is created (PR is NOT a git command)

Upstream sync (GSOC CRITICAL)
git remote add upstream <org-repo-url>
→ link the ORIGINAL organization repo (not your fork)

git fetch upstream
→ download latest changes from original repo (no code changed yet)

git rebase upstream/main
→ replay your commits on top of latest org code
→ keeps PR clean and conflict-free

Fix mistakes
git restore <file>
→ throw away changes in a file (go back to last commit)

git restore --staged <file>
→ remove file from staging area (undo git add)

git commit --amend
→ modify last commit (message or add forgotten changes)

WHERE IS PULL REQUEST?
→ PR is done on GitHub UI, NOT in terminal
→ push branch → open GitHub → click "New Pull Request"

KEY IDEA:
git = local work
GitHub = PR + review

