import React from "react";

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
        icon: "",
    },
    {
        title: "Phase 2",
        text: "Discovery Phase",
        description:
            "During this phase, we conduct in-depth research into your industry, target audience, and competitors to gather insights that will inform our strategy.",
        icon: "",
    },
    {
        title: "Phase 3",
        text: "Design Process",
        description:
            "Our team of designers will create initial design concepts for your website, incorporating your brand identity, preferences, and feedback gathered during the consultation phase.",
        icon: "",
    },
    {
        title: "Phase 4",
        text: "Development",
        description:
            "Once the design is approved, our development team will bring it to life using the latest technologies and coding standards. We'll build a fully functional website that is optimized for performance, security, and user experience.",
        icon: "",
    },
    {
        title: "Phase 5",
        text: "Testing and Quality Assurance",
        description:
            "Before launching your website, we conduct rigorous testing to ensure it functions flawlessly across various devices, browsers, and screen sizes. We also perform thorough quality assurance checks to identify and fix any bugs or issues.",
        icon: "",
    },
    {
        title: "Phase 6",
        text: "Client Review and Approval",
        description:
            "We'll provide you with access to the test environment where you can review the completed website and provide any final feedback or adjustments.",
        icon: "",
    },
    {
        title: "Phase 7",
        text: "Launch",
        description:
            "Once everything is finalized and approved, we'll launch your website, making it live for the world to see.",
        icon: "",
    },
    {
        title: "Phase 8",
        text: "Post-Launch Support",
        description:
            "Our commitment doesn't end with the launch. We offer ongoing support and maintenance services to ensure your website remains secure, up-to-date, and performing at its best. We're always available to address any questions or concerns you may have.",
        icon: "",
    },
    {
        title: "Phase 9",
        text: "Monitoring and Optimization",
        description:
            "We continuously monitor your website's performance and user behavior, making data-driven optimizations to enhance its effectiveness and achieve your desired goals.",
        icon: "",
    },
    {
        title: "Phase 10",
        text: "Continued Collaboration",
        description:
            "We believe in building long-term partnerships with our clients. As your business evolves, we'll be there to provide guidance and support, helping you leverage your website as a powerful tool for growth and success.",
        icon: "",
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
                        <div className="w-8 h-8 bg-lightblue border-4 border-gray-300 rounded-full mx-auto mt-2"></div>
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
    return (
        <div>
            <h4>PROjET DISCOVERY</h4>
            1. **Initial Consultation:** We begin by scheduling an initial consultation to understand your business, goals, and specific requirements
            for your website.
            <br />
            <br />
            2. **Discovery Phase:** During this phase, we conduct in-depth research into your industry, target audience, and competitors to gather
            insights that will inform our strategy.
            <br />
            <br />
            3. **Strategy Development:** Based on the information gathered, we develop a comprehensive strategy tailored to your unique needs. This
            strategy outlines the website{"'"}s structure, features, design elements, and functionality.
            <br />
            <br />
            <h4>Design process</h4>
            4. **Design Concept Creation:** Our team of designers will create initial design concepts for your website, incorporating your brand
            identity, preferences, and feedback gathered during the consultation phase.
            <br />
            <br />
            5. **Design Revisions:** We{"'"}ll work closely with you to refine the design concepts, making any necessary revisions to ensure the final
            design aligns perfectly with your vision and goals.
            <br />
            <br />
            <h4>Developemtn</h4>
            6. **Development:** Once the design is approved, our development team will bring it to life using the latest technologies and coding
            standards. We{"'"}ll build a fully functional website that is optimized for performance, security, and user experience.
            <br />
            <br />
            7. **Testing and Quality Assurance:** Before launching your website, we conduct rigorous testing to ensure it functions flawlessly across
            various devices, browsers, and screen sizes. We also perform thorough quality assurance checks to identify and fix any bugs or issues.
            <br />
            <br />
            <h4>Go live</h4>
            8. **Client Review and Approval:** We{"'"}ll provide you with access to the test environment where you can review the completed website
            and provide any final feedback or adjustments.
            <br />
            <br />
            9. **Launch:** Once everything is finalized and approved, we{"'"}ll launch your website, making it live for the world to see.
            <br />
            <br />
            10. **Post-Launch Support:** Our commitment doesn{"'"}t end with the launch. We offer ongoing support and maintenance services to ensure
            your website remains secure, up-to-date, and performing at its best. We{"'"}re always available to address any questions or concerns you
            may have.
            <br />
            <br />
            <h4>Ongoing support</h4>
            11. **Monitoring and Optimization:** We continuously monitor your website{"'"}s performance and user behavior, making data-driven
            optimizations to enhance its effectiveness and achieve your desired goals.
            <br />
            <br />
            12. **Continued Collaboration:** We believe in building long-term partnerships with our clients. As your business evolves, we{"'"}ll be
            there to provide guidance and support, helping you leverage your website as a powerful tool for growth and success.
            <br />
            <br />
        </div>
    );
};

export default Roadmap;
