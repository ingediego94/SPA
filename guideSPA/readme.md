## guide of SPA
1. Install npm and configure everything like as a Json-server, for that:
    
        npm install npm

Input the next command:
        
        npm init -y


Input the next command on terminal but being in the specific route of Json-server, in my case is:

        project
        |--guideSPA
        |--Backend
            |--node_modules
            |--db.json
            |--package-lock.json
            |--package.json

inside of "Backend" input the command: 

    npm install -D vite


Next, we need to enter in "package.json" and input the next line in scripts:
    
    "scripts": {
        "dev":"vite"
    }

After, we will write this:

    npm run dev

