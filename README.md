# 📘 Git Basics – Cheat Sheet

## 📁 Setup & Config
```bash
git init                   # Initialize a repository in current folder
git clone <url>            # Clone a repo (creates a folder)
git clone <url> .          # Clone directly into current directory (must be empty)


🧠 Note: If a parent folder is a Git repo, all subfolders are automatically tracked.🔍 Tracking & ChangesBashgit status                 # Show tracked/modified/staged files
git diff                   # Show exact line-by-line changes (unstaged)
git diff --staged          # Show changes currently in staging area


🧩 The 3 AreasWorking Directory: Where you type code (temporary).Staging Index: git add moves files here (ready to ship).Repository: git commit moves files here (saved history).➕ Add, Commit & RestoreBashgit add .                  # Stage all changes (new + modified)
git commit -m "msg"        # Commit staged files
git commit -am "msg"       # Shortcut: Stage tracked files & commit (No new files)


git restore <file>         # Discard local changes (Revert to last commit)
git restore --staged <file> # Un-stage a file (Keep changes in local)


🕒 History & LogsBashgit log                    # View full history
git log -5                 # View last 5 commits
git log --oneline          # Compact view (ID + Message)
git log --stat             # View stats (lines added/removed)
git show <commit_id>       # View specific commit details


🌿 Branches & MergingBashgit branch                 # List branches
git branch <name>          # Create new branch
git checkout <name>        # Switch to branch
git checkout -b <name>     # Create & Switch to new branch

git merge <branch>         # Merge <branch> INTO current branch
git branch -d <name>       # Delete branch


⚠️ Conflicts: If auto-merge fails, open files, fix conflicts manually, then: git add . → git commit.📦 Stashing (The "Pause Button")Use when you can't pull because you have local uncommitted work.Bashgit stash                  # Save changes temporarily & clean directory
git pull                   # Pull new code safely
git stash pop              # Apply saved changes & remove from stash list
git stash list             # See all saved stashes


🔁 Pulling Workflow (Rule of Thumb)ScenarioStrategyCommand SequenceUnsure about changesStashgit stash → git pull → git stash popSure about changesCommitgit commit → git pull (Fix merge conflicts if any)🚀 Remote & TagsBashgit push -u origin main    # Push to remote (first time setup)
git tag -a v1.0 -m "msg"   # Create an annotated tag
git tag -d v1.0            # Delete a tag


⭐ Emergency / ExtrasBashgit merge --abort          # Cancel a merge conflict in progress
git reset --hard HEAD      # ⚠️ DANGER: Delete ALL local changes/commits
