import React from "react";
import Lottie from "react-lottie";
import LottiePlayer from "./UI/LottiePlayer";

type Props = {};

const howWeDoIt1 = [
    {
        title: "Phase 1",
        text: "Project Discovery",
        description:
            "It’s important that we talk and get to know you and your business. We need to learn about the problems you are facing and what you are looking to achieve. We take the time to understand your requirements and ask questions, so we can be sure to provide the best possible solutions that are right for your business. ",
        icon: "",
    },
    {
        title: "Phase 2",
        text: "Design Process",
        description:
            "This is where the fun starts. We’ll get our creative ideas flowing and produce a mockup of your new website. Each identified page will be designed and presented as part of an online prototype, including both desktop and mobile versions. We will take the time to review the mockups with you directly and make any changes where necessary. Once approved, we’ll be ready to move onto development.",
        icon: "",
    },
    {
        title: "Phase 3",
        text: "Development",
        description:
            "This is where your website is brought to life. We’ll build a working system that matches the final designs. We take pride in the quality of our work and our coding is no different. We don’t do shortcuts. So we won’t build a website that doesn’t look great on every modern browser or device. If you are looking for older browser support, no problem just ask.",
        icon: "",
    },
    {
        title: "Phase 4",
        text: "Go Live",
        description:
            "So we’re almost done. Together we’ve come up with a website that looks great and does exactly what you need it to do. Now let’s break it! Just literally of course, this is where we throw everything we’ve got at it to make sure it works and any issues are under control. Once we’re happy with it, its now time to provide you with a link to our testing environment so you can see things for yourself. Feel free to provide any final feedback and we’ll apply the finishing touches. Then all we need to do is officially launch the website. ",
        icon: "",
    },
    {
        title: "Phase 5",
        text: "Ongoing Support",
        description:
            "You should know we’re in it for the long haul. We think we’re a friendly bunch who know what we’re talking about. And so it turns out, so do 99% of our clients, who once we’ve worked together, stay with us. Our genuine care for clients sets us apart, we’re always on hand to apply updates or assist with technical issues, even on weekends. It’s also important that your website stays ahead of the game, so we’re here when you need to make improvements or add new functionality. Building a website is just the start for us.",
        icon: "",
    },
];
const howWeDoIt = [
    {
        title: "Phase 1",
        text: "Initial Consultation",
        description:
            "We begin by scheduling an initial consultation to understand your business, goals, and specific requirements for your website.",
        icon: "/lottie/consultation.json",
    },
    {
        title: "Phase 2",
        text: "Discovery Phase",
        description:
            "During this phase, we conduct in-depth research into your industry, target audience, and competitors to gather insights that will inform our strategy.",
        icon: "/lottie/research.json",
    },
    {
        title: "Phase 3",
        text: "Design Process",
        description:
            "Our team of designers will create initial design concepts for your website, incorporating your brand identity, preferences, and feedback gathered during the consultation phase.",
        icon: "/lottie/dsign.json",
    },
    {
        title: "Phase 4",
        text: "Development",
        description:
            "Once the design is approved, our development team will bring it to life using the latest technologies and coding standards. We'll build a fully functional website that is optimized for performance, security, and user experience.",
        icon: "/lottie/development.json",
    },
    {
        title: "Phase 5",
        text: "Testing and Quality Assurance",
        description:
            "Before launching your website, we conduct rigorous testing to ensure it functions flawlessly across various devices, browsers, and screen sizes. We also perform thorough quality assurance checks to identify and fix any bugs or issues.",
        icon: "/lottie/testing.json",
    },
    {
        title: "Phase 6",
        text: "Client Review and Approval",
        description:
            "We'll provide you with access to the test environment where you can review the completed website and provide any final feedback or adjustments.",
        icon: "/lottie/review.json",
    },
    {
        title: "Phase 7",
        text: "Launch",
        description:
            "Once everything is finalized and approved, we'll launch your website, making it live for the world to see.",
        icon: "/lottie/launch.json",
    },
    {
        title: "Phase 8",
        text: "Post-Launch Support",
        description:
            "Our commitment doesn't end with the launch. We offer ongoing support and maintenance services to ensure your website remains secure, up-to-date, and performing at its best. We're always available to address any questions or concerns you may have.",
        icon: "/lottie/support.json",
    },
    {
        title: "Phase 9",
        text: "Monitoring and Optimization",
        description:
            "We continuously monitor your website's performance and user behavior, making data-driven optimizations to enhance its effectiveness and achieve your desired goals.",
        icon: "/lottie/optimization.json",
    },
    {
        title: "Phase 10",
        text: "Continued Collaboration",
        description:
            "We believe in building long-term partnerships with our clients. As your business evolves, we'll be there to provide guidance and support, helping you leverage your website as a powerful tool for growth and success.",
        icon: "/lottie/collaboration.json",
    },
];

const Roadmap = (props: Props) => {
    return (
        <div className=" relative ">
            <div className="absolute top-0 bottom-0 z-[2] left-1/2 -translate-x-1/2 mx-auto h-full w-1 bg-bluegrey"></div>
            {howWeDoIt.map((item, index) => (
                <div key={item.title + index} className="flex flex-col md:flex-row max-w-5xl mx-auto relative z-[3] py-10 tracking-wider leading-7">
                    <div className="sm:text-right flex-1 ">
                        {index % 2 === 0 ? (
                            <div className="text-gray-50">
                                <h3>{item.title}</h3>
                                <span>{item.text}</span>
                            </div>
                        ) : (
                            <>{item.description}</>
                        )}
                    </div>
                    <div className="flex-[0.3] flex ">
                        <div className="w-20 h-20 p-3 bg-primary border-gray-300 rounded-full mx-auto mt-2">
                            <LottiePlayer height="100%" width="100%" json={item.icon} />
                        </div>
                    </div>
                    <div className="flex-1">
                        {index % 2 === 0 ? (
                            <>{item.description}</>
                        ) : (
                            <div className="text-gray-50">
                                <h3>{item.title}</h3>
                                <span>{item.text}</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <div className="text-center max-w-lg bg-white rounded-lg mx-auto mt-4 relative z-[3] text-bluegrey px-6 py-4" >
                By following this structured workflow, we ensure a smooth and successful journey from concept to launch, delivering a high-quality website that meets your objectives and exceeds your expectations
            </div>
        </div>
    );
};

export default Roadmap;
