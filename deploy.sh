#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain 

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:harryji168/vue-upvote-app.git main:gh-pages


git checkout -b gh-pages
git add dist
git commit -m "gh-pages commit"
git subtree push --prefix dist origin gh-pages
# git remote add origin https://github.com/harryji168/vue-upvote-app.git
# git push -u origin gh-pages --force
cd -