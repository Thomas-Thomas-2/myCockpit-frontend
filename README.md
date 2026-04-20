# MyCockpit - Frontend

## Summary
- **Project type**: Web application - Internal tool
- **Status**: V1 ongoing - Target : MVP
- **Built with**: React, Next.js
- **Purpose**: To help methods engineers to manage their projects.

## Overview
This repository contains the frontend of the project **MyCockpit**. <br>
The aim of this project is to develop an MVP to fix an issue met in my last job regarding project management. <br>
Thus, this is meant to be an internal company tool that helps methods engineers especially, even if the scope could be extended to additionnal jobs. <br>
The version deployed currently is the version 1 which is still under construction. Some features are still missing to get the final V1.

## Main features
- User authentication
- Project management : get projects, add and delete.

## Tech Stack
- React
- Next.js
- CSS Modules
- Others : moment.js.

## Prerequisites
Before running the project locally, make sure the backend is installed and running. <br>
See backend repository for more information : https://github.com/Thomas-Thomas-2/myCockpit-backend.git

## Installation and local launch
Clone the repository and install dependencies: <br>
git clone https://github.com/Thomas-Thomas-2/myCockpit-frontend.git <br>
cd myCockpit-frontend <br>
npm install <br>
npm run dev <br>

## Environment variables
Create a .env.local at the root of the project. <br>
For local launch, set : <br>
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000

## Deployement
This frontend is deployed on Vercel : https://my-cockpit-frontend.vercel.app

## Demo
Watch the demonstration : <br>
COMING SOON

## Future improvements
- To implement project modification and profile modification --> end of V1 ;
- To add role management : leader role and teammate role --> a leader can access to the projects of his team ;
- To-do list and priority adding ;
- Reinitialise / forget password feature ;
- One page per project feature --> to access to detailed information regarding projects and to modify it.
