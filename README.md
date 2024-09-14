# Kurt Robin Antonio Vue3 + Ionic Capacitor

1. Create a new folder then open it in VSCode
2. Do _npm create vite@latest vite-vue-cap -- --template vue-ts_ to create the Vue3 template
3. Do _npm i_ to install the required npm nodes
4. Then install Tailwind using _npm install -D tailwindcss@latest postcss@latest autoprefixer@latest_
5. Initialize Tailwind using _npx tailwindcss init -p_
6. Install PrimeIcons in the CLI as well _using npm install primeicons_
7. Inside VSCode, go to the Extension tab, find Ionic and install it
8. Once Ionic is installed, in the CLI enter the command _npm run dev_
9. Now go to the Ionic tab and click the _Add Android Project/Add iOS Project_ depending on your computer
10. After that finishes, run _npm run build_ in the CLI to make the app run in the emulator
11. Then run this command (assuming you already have an Android emulator) in the CLI, _ionic cap run android -l --external_, to open the app

