import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Quality of Assessment of Text book and E-book',
        description: "Me and my team built a Book Review application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset.. The app fetches data from Open Library and generates a Review, People can review the book only when they have read the book and confirms it through quiz",
        tools: ['Express', 'MongoDB', 'OpenAI API', 'AWS SES', 'AWS S3', 'Jekyll', 'PostGreSQL','Next','HTML','CSS','JS'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Artist Locator App',
        description: 'I have designed and developed a full-stack web app for Locating Especially Mehndi Artists.Customers can even book their Appointment and confirm their slot.It also fosters IN-APP chatting option with Artists. I created the UI using NextJS, Typescript, TailwindCSS, Google Maps. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "NextJS", "TypeScript", "MySQL", "AWS S3", "Gmail Passkey"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'QUIZ APP',
        description: 'I developed a Quiz that focuses specifically on Yoga , Ayurveda and Siddha.It plays an immaculate role in medical field.The data is fed through MongoDB.I sm curnetly working to add real time data about YAS',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB',"JS", 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Image Recognition as a Service',
        description: " The application takes the images and returns the predicted output by the deep learning model by using the AWS resources for computation, transportation, and storage. So the tasks involved designing the architecture, implementing RESTful Web Services, a load balancer that scales in and scales out EC2 instances at App Tier according to the demand of the user.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },