# React + Vite + tailwindcss + react router + basic configs

1- Create a new ract project using vite
    $npm create vite@latest my-project -- --template react
////////////////////////////////////////////////////////////////////////////////////////
2- cd to project folder
////////////////////////////////////////////////////////////////////////////////////////
3- Install Tailwind CSS
    $npm install -D tailwindcss postcss autoprefixer
    $npx tailwindcss init -p
////////////////////////////////////////////////////////////////////////////////////////
4- Configure your template paths (In tailwind.config.js) add following line to the content:[]
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ]
////////////////////////////////////////////////////////////////////////////////////////
5- Add the Tailwind directives to your CSS (Add this lines to index.css)
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
////////////////////////////////////////////////////////////////////////////////////////
6- Install using npm
    $npm install
////////////////////////////////////////////////////////////////////////////////////////
7- Automatic class sorting with Prettier
    $npm install -D prettier prettier-plugin-tailwindcss
    then create prettier config file (.prettier.json or prettier.config.cjs) and add following lines:
        for .prettier.json add this:
            {
                 "plugins": ["prettier-plugin-tailwindcss"]
            }
        for prettier.config.cjs add this:
                module.exports = {
                    plugins: ['prettier-plugin-tailwindcss'],
                }
////////////////////////////////////////////////////////////////////////////////////////
8- Tailwind CSS IntelliSense for VSCode
    install "Tailwind CSS IntelliSense" extension
////////////////////////////////////////////////////////////////////////////////////////
9- Configure project for absolute path (configure vite.config.js):
    import path from "path";
    export default defineConfig({
    resolve: {
        alias: {
        "@assets": path.resolve(__dirname, "src/assets/"),
        "@layouts": path.resolve(__dirname, "src/layouts/"),
        "@pages": path.resolve(__dirname, "src/pages/"),
        },
    },
    plugins: [react()],
    });
////////////////////////////////////////////////////////////////////////////////////////
10- Adding fonts to the project:
    -first copy fonts to a folder like assets/fonts
    -then create a css file (iransans.css) to address this fonts like this:
        @font-face {
            /* tailwind css font weight is font-black */
            font-family: IRANSans;
            font-style: normal;
            font-weight: 900;
            src: url("./IRANSansWeb_Black.woff2") format("woff2");
        } ...
    -then import this css file in index.css before tailwindcss directives:
        @import url("@assets/fonts/iransans/iransans.css");
    -then add this font family to tailwind.config.js:
         theme: {
            extend: {
                fontFamily: {
                    iranSans: ["IRANSans", "sans-serif"],
                },
            }
        }
////////////////////////////////////////////////////////////////////////////////////////
11- Define your color pallete in tailwind.config.js:
 theme: {
    extend: {
      colors: {
        "myColor-red-100":"#rgb or #rgba"
      },
    }
 }
    *Note if we do not define our colors in extend section of theme object this will cause of replace of default
    tailwind colors with our colors.
////////////////////////////////////////////////////////////////////////////////////////
12- Installing react-router-dom package:
    $npm install react-router-dom
////////////////////////////////////////////////////////////////////////////////////////
13- Create router object and using it in App.jsx as we did in this project.
////////////////////////////////////////////////////////////////////////////////////////
14- Initial Git and create first commit:
    $git init //Initial git repository
    $git add . //tracking all files
    $git config user.email "example@example.com" //add author email for this repo (locally)
    $git config user.name "John Doe" //add author name for this repo (locally)
    $git commit -m "Some comments like initializing the project"
////////////////////////////////////////////////////////////////////////////////////////    
15- Ready projrct for pushing it to the GitHub:
    -Create an empty repo in your GitHub account without .gitignore and readme.md file and license file.
    -Copy the created repo url using SSH or HTTPS (we choose ssh here) and add as origin to your repo:
        $git remote add origin git@github.com...
    -use ls git bash command to see for existing ssh key pairs:
        $ls -al ~/.ssh
    EITHER
    (USE EXISTING PRIVATE/PUBLIC SSH KEY PAIR)
    -add public ssh key to your GitHub account for establishing connection to GitHub 
        *We can use 'cat' or 'clip' command (from git bash or WSL) to copy the content of our
        public key (or any other text file).
    - Test the connection to GitHub using this command:
        $ssh -i c:\users\USERNAME\.ssh\id_ed25519 -T git@github.com
    it should say: "You're successfully authenticated".
    OR
    (CREATE A NEW PRIVATE/PUBLIC SSH KEY PAIR:)
    -use ssh-keygen to create a new key pair:
        $ssh-keygen -t ed25519 -C "example@example.com"
        *It will ask you for keys directory and name and a passpharase
    -the test the connection to GitHub with the above command
    - Now you can add your private key and passpharase to the ssh-agent on your machine to avoid entering it every time. for
    this:
        Run the agent using admin powershell in windows:
            $Get-Service ssh-agent |Set-Service -StartupType Automatic -PassThru | Start-Service
        To avoid restart system:
            $start-ssh-agent.cmd 
        Then add your key to the agent:
            $ssh-add c:\users\USERNAME/.ssh/id_ed25519...
////////////////////////////////////////////////////////////////////////////////////////
16- Push the projrct to the GitHub:
    $git push -u origin main