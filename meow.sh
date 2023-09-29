echo "Package your web..."

node node-script.js

hugo && firebase deploy

git add .
git commit -m "update"
git push
