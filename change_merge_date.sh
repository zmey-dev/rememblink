#!/bin/bash

# Set the desired date
export NEW_DATE="2015-01-01T00:00:00"

# Use git filter-branch to change the date of all commits
git filter-branch --env-filter '
    export GIT_AUTHOR_DATE="$NEW_DATE"
    export GIT_COMMITTER_DATE="$NEW_DATE"
' --tag-name-filter cat -- --all

# Clean up the backup created by filter-branch
git for-each-ref --format="%(refname)" refs/original/ | xargs -n 1 git update-ref -d