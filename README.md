# JPMC Code for Good 2024 - Heart in the Game Website Revamp

This project was created during the 24-hour JPMC Code for Good 2024 hackathon in Delaware. Our team of 4 members took on the challenge of revamping the website for Heart in the Game, a nonprofit organization dedicated to preventing sudden cardiac arrest in young people.

## Video Demo

https://github.com/user-attachments/assets/5655a88e-cf0f-4258-aaa4-0751703f6f71

This video showcases the key features and improvements we implemented during the hackathon.

## Team Members

- [Steaphnie Nguyen](https://www.linkedin.com/in/steph-tien-ng): Frontend Lead and Chatbot
- [Anoushka Arora](https://www.linkedin.com/in/anoushka-arora-b77929153/): Blog and Contact Form
- [Fillip Cutiuba](https://www.linkedin.com/in/fillipcutiuba/): Web Sraping & Internal Metrics Dashboard
- [Aaftab Jafri](https://www.linkedin.com/in/aaftab-jafri/): OAuth and Backend

## Project Overview

Despite having a smaller team (4 members) compared to others (7 members), we successfully redesigned the frontend of the Heart in the Game website (original at https://www.heartinthegame.org/). Given the time constraints (24 hours), we focused on improving the user interface and experience while also implementing some backend features.

### Main Features

1. **Redesigned Landing Page**: We created a more engaging and informative landing page that clearly communicates Heart in the Game's mission and goals. The new design emphasizes key statistics and includes a section for testimonials to highlight the organization's impact.

2. **Improved Navigation**: We restructured the site to make information more accessible and easier to find.

3. **Chatbot Integration**: We implemented a chatbot to assist users in finding information quickly by searching through the website content.

4. **OAuth Implementation**: We added OAuth functionality to allow users to log in securely.

5. **Internal Metrics Dashboard**: We created a dashboard for Heart in the Game administrators to track web traffic and user engagement.

6. **Educational Blog**: We added a blog section with articles about heart health and preventative measures, including an engaging feature of songs that match the rhythm of CPR.

### Challenges and Future Plans

Due to time constraints, we weren't able to fully implement a RAG (Retrieval-Augmented Generation) app to train the chatbot. This remains a potential area for future development.

## Technologies Used

- Frontend: Next.js, React
- Backend: Python, Flask
- Authentication: OAuth
- Chatbot: OpenAI API

## Project Impact

Our redesign aims to increase user engagement and retention by providing a more intuitive and informative website. The internal tools we developed will help Heart in the Game track the success of their initiatives, supporting their mission to achieve a heart-healthy Delaware.

### Key Improvements

1. Clear mission statement and goals on the landing page
2. Emphasis on important statistics (e.g., "One in 300 youth has an undetected heart condition that puts them at risk for SCA")
3. Easy access to core functionalities: "Register for a Heart Screening" and "Donate to HITG"
4. Improved navigation structure for better information accessibility
5. Integration of a chatbot for instant user assistance

## Getting Started for the landing page

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (including OpenAI API key)
4. Run the development server: `npm run dev`
