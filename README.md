


# Install dependences 
yarn install

# start web dev 
yarn dev

# build project 
yarn build
# export project  into out root dir
yarn export 


# manual copy content after change  
copy out folder content into ios/App/App/public


# open xCode 
open xCode install





capacitor dirctives :

yarn add -d @capacitor/cli

# Initialize Capacitor in your React project
npx cap init

# Add the native platforms
npx cap add ios
npx cap add android

# tar problem
in case of tar problem - goto node_modules/tar .... degrade the version from there - delete internal node_modules of tar folder ... npm i there - new tar node_modules will be installed ... try again