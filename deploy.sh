# 进入生成的文件夹
cd unpackage/dist/build/h5

git init
git add -A
git commit -m 'deploy'

# 发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:liub1934/uni-lb-picker.git master:gh-pages