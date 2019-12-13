# abort on errors 
set -e 

# build 
echo Linting.. 
yarn lint 
echo Building. this may take a minute... 
yarn build-deploy 

# if you are deploying to a custom domain add a CNAME (uncomment the next 3 lines) 
#cd docs 
#echo 'yourcustomdomain.com' > CNAME 
#cd - 

# deploy 
echo Deploying.. 
git add -A 
git commit -m 'deploy' 
git push -f https://github.com/gpanagiotinos/quote-requests.git master