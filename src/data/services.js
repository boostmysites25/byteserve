// all services
import {
  Code,
  Cloud,
  MessageSquare,
  Smartphone,
  BrainCircuit,
  Globe,
  Cpu,
  Gamepad2,
  Palette,
  Cog,
  BarChart,
} from "lucide-react";

export const services = [
  {
    title: "Full Stack Web Development",
    icon: Globe,
    bgColors:
      "bg-primary/70 hover:bg-secondary/70 md:bg-secondary/70 md:hover:bg-primary/70",
    shortDesc:
      "From the Front End to the Back End — We've Got It Covered. We design and develop web applications that look great and perform even better.",
    technologies: ["React", "Vue", "Angular", "Node.js", "Django"],
    detailsPageImages: {
      first: require("../assets/images/services/webdev1.webp"),
      second: require("../assets/images/services/webdev2.webp"),
      third: require("../assets/images/services/webdev3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
              From the Front End to the Back End — We've Got It Covered
            </h2>
            <p class="mb-10">
              We design and develop web applications that look great and perform even better. 
              Whether it's a custom portal, a user dashboard, or a full web app, we handle 
              the full stack from design to deployment.
            </p>
  
            <h2 class="text-xl font-semibold mb-4">
              Our Web Development Offerings:
            </h2>
            <ul class="list-disc pl-6">
              <li class="mb-3">
                <span class="font-semibold">React, Vue, Angular:</span> We
                use modern JavaScript frameworks to create responsive, interactive
                user interfaces that provide a seamless experience.
              </li>
              <li class="mb-3">
                <span class="font-semibold">Node.js, Laravel, Django:</span> Our
                backend solutions are built with robust frameworks that ensure
                security, performance, and scalability.
              </li>
              <li class="mb-3">
                <span class="font-semibold">
                  CMS and e-commerce systems:
                </span>
                We build content management systems and e-commerce platforms
                that are easy to use and maintain, giving you full control over
                your digital presence.
              </li>
              <li class="mb-3">
                <span class="font-semibold">APIs, databases, integrations:</span>
                We create custom APIs, design efficient database structures, and
                integrate with third-party services to create a cohesive ecosystem.
              </li>
            </ul>`,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
                  Our Development Process:
                </h2>
                <ul class="list-decimal pl-6 mb-6">
                  <li class="mb-3">
                    <span class="font-semibold">Discovery & Strategy:</span> We
                    begin by understanding your goals, target audience, and unique
                    requirements. Through in-depth research, we craft a
                    comprehensive strategy to guide the development process.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Design & Prototyping:</span> Our
                    designers create visually appealing prototypes and wireframes
                    that bring your vision to life. Every element is designed with
                    your brand identity and user experience in mind.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Development:</span> Using the
                    latest technologies and best practices, our developers turn
                    the designs into a fully functional website, ensuring seamless
                    performance and security.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">
                      Testing & Quality Assurance:
                    </span>
                    We rigorously test your website across devices, browsers, and
                    operating systems to guarantee a flawless user experience.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Launch & Optimization:</span> Once
                    approved, your website goes live! We also provide post-launch
                    support and continuous optimization to ensure ongoing success.
                  </li>
                </ul>`,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">Why Choose Us?</h2>
                <ul class="list-disc pl-6 mb-6">
                  <li class="mb-3">
                    <span class="font-semibold">
                      Expertise Across Industries:
                    </span>
                    With experience spanning various domains, we understand what
                    it takes to create impactful websites tailored to diverse
                    audiences.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">SEO-Friendly Development:</span>
                    Our websites are built with SEO best practices in mind,
                    ensuring better search engine rankings and increased organic
                    traffic.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Scalable Solutions:</span> Whether
                    you're a startup or an enterprise, our websites are designed
                    to grow with your business.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">Cutting-Edge Technology:</span> We
                    use modern frameworks and technologies, such as React,
                    Angular, Node.js, and Laravel, to deliver robust solutions.
                  </li>
                  <li class="mb-3">
                    <span class="font-semibold">User-Centric Approach:</span> Your
                    users are at the center of everything we do. We design and
                    develop with their needs in mind, ensuring an intuitive and
                    engaging experience.
                  </li>
                </ul>`,
    },
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    bgColors:
      "bg-secondary/70 hover:bg-primary/70 md:bg-primary/70 md:hover:bg-secondary/70",
    shortDesc:
      "Apps That People Actually Use. We create mobile apps that are fast, intuitive, and reliable across iOS and Android platforms.",
    technologies: ["iOS", "Android", "Flutter", "React Native"],
    detailsPageImages: {
      first: require("../assets/images/services/appdev1.webp"),
      second: require("../assets/images/services/appdev2.webp"),
      third: require("../assets/images/services/appdev3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Apps That People Actually Use
      </h2>
      <p class="mb-10">
        We create mobile apps that are fast, intuitive, and reliable. Whether you need 
        something native, cross-platform, or progressive, we design and develop with 
        the end user in mind.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our Mobile App Development Services:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">iOS and Android apps:</span> We build
          native applications that take full advantage of platform-specific features
          and provide the best possible performance.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Flutter & React Native builds:</span> Our
          cross-platform solutions allow you to reach users on multiple platforms
          with a single codebase, reducing development time and costs.
        </li>
        <li class="mb-3">
          <span class="font-semibold">UX-focused design:</span> We create
          intuitive interfaces that make your app easy to use and navigate,
          ensuring users keep coming back.
        </li>
        <li class="mb-3">
          <span class="font-semibold">App store deployment & support:</span> We
          handle the entire process from development to deployment, including
          app store optimization and ongoing maintenance.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
    Our Development Process
  </h2>
  <ul class="list-decimal pl-6 mb-6">
    <li class="mb-3">
      <span class="font-semibold">Discovery & Strategy:</span> We begin by understanding your goals, target audience, and unique requirements. Through in-depth research, we craft a comprehensive strategy to guide the development process.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Design & Prototyping:</span> Our designers create visually appealing prototypes and wireframes that bring your vision to life. Every element is designed with your brand identity and user experience in mind.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Development:</span> Using the latest technologies and best practices, our developers turn the designs into a fully functional app, ensuring seamless performance and security.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Testing & Quality Assurance:</span> We rigorously test your app across devices and operating systems to guarantee a flawless user experience.
    </li>
    <li class="mb-3">
      <span class="font-semibold">Launch & Optimization:</span> Once approved, your app goes live! We also provide post-launch support and continuous optimization to ensure ongoing success.
    </li>
  </ul>
  `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
    Ready to Take Your Mobile Strategy to the Next Level?
  </h2>
  <p class="mb-6">
    Contact us today for a free consultation. Let's discuss your mobile app needs and explore how we can help you achieve your business goals. 
  </p>
  <p class="mb-6">
    Whether you're looking to create a new app from scratch or improve an existing one, our team has the expertise and experience to deliver results that exceed your expectations.
  </p>
  `,
    },
  },
  {
    title: "Custom Software Development",
    icon: Code,
    bgColors:
      "bg-primary/70 hover:bg-secondary/70 md:bg-primary/70 md:hover:bg-secondary/70",
    shortDesc:
      "Solutions Built Around Your Business. We create software that's designed from the ground up to match your exact needs.",
    technologies: [
      "Business Automation",
      "Enterprise Platforms",
      "Custom APIs",
      "Workflow Optimization",
    ],
    detailsPageImages: {
      first: require("../assets/images/services/customsoftware1.webp"),
      second: require("../assets/images/services/customsoftware2.webp"),
      third: require("../assets/images/services/customsoftware3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Solutions Built Around Your Business
      </h2>
      <p class="mb-10">
        We create software that's designed from the ground up to match your exact needs. 
        No clunky systems, no unnecessary features — just clean, efficient tools that make 
        your team's life easier. Whether it's a CRM, internal dashboard, or a full-scale 
        platform, we build with purpose and precision.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our Custom Software Solutions:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">Business automation tools:</span> We
          create software that automates repetitive tasks, streamlines workflows,
          and increases productivity across your organization.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Tailored enterprise platforms:</span> Our
          enterprise solutions are built to handle complex business processes,
          integrate with existing systems, and scale with your organization.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Workflow optimization software:</span> We
          design software that identifies bottlenecks, improves efficiency, and
          helps your team work smarter, not harder.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Custom APIs & integrations:</span> We
          develop APIs that connect your systems and applications, ensuring
          seamless data flow and communication across your digital ecosystem.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
        Our Development Approach
      </h2>
      <p class="mb-6">
        We believe that successful software development starts with a deep understanding 
        of your business processes and challenges. Our approach combines technical expertise 
        with business acumen to deliver solutions that not only work well but also drive 
        real business value.
      </p>
      <p class="mb-6">
        We follow an agile methodology that allows for flexibility, transparency, and 
        continuous improvement throughout the development process. This means you'll 
        see progress early and often, with opportunities to provide feedback and make 
        adjustments as needed.
      </p>
      <p class="mb-6">
        Our team works closely with yours to ensure a smooth implementation and adoption 
        process. We provide comprehensive documentation, training, and support to help 
        your team get the most out of your new software.
      </p>
      `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
        Why Choose Custom Software?
      </h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Perfect fit for your business:</span> 
          Unlike off-the-shelf solutions, custom software is designed specifically 
          for your unique processes and requirements.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Competitive advantage:</span>
          Custom software can help you differentiate from competitors by enabling 
          unique capabilities and efficiencies.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Scalability and flexibility:</span> 
          As your business grows and evolves, your custom software can adapt and 
          scale accordingly.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Integration with existing systems:</span> 
          Custom software can seamlessly integrate with your current tools and 
          platforms, preserving your existing investments.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Long-term cost efficiency:</span> 
          While the initial investment may be higher, custom software often 
          provides better ROI over time by eliminating licensing fees and 
          improving operational efficiency.
        </li>
      </ul>
      `,
    },
  },
  {
    title: "Cloud Computing",
    icon: Cloud,
    bgColors:
      "bg-secondary/70 hover:bg-primary/70 md:bg-secondary/70 md:hover:bg-primary/70",
    shortDesc:
      "Flexible. Scalable. Always On. We help businesses move to the cloud and make the most of it with secure, fast, and easy-to-manage environments.",
    technologies: ["AWS", "Azure", "Google Cloud", "DevOps", "CI/CD"],
    detailsPageImages: {
      first: require("../assets/images/services/cloudcomputing1.webp"),
      second: require("../assets/images/services/cloudcomputing2.webp"),
      third: require("../assets/images/services/cloudcomputing3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Flexible. Scalable. Always On.
      </h2>
      <p class="mb-10">
        We help businesses move to the cloud and make the most of it. Whether you're 
        starting fresh or migrating legacy systems, we set up cloud environments that 
        are secure, fast, and easy to manage.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our Cloud Computing Services:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">Cloud setup and migration:</span> We
          help you move to AWS, Azure, or Google Cloud with minimal disruption,
          ensuring your data and applications are transferred securely and efficiently.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Infrastructure design:</span> Our
          cloud architects design scalable, resilient infrastructure that optimizes
          performance while controlling costs.
        </li>
        <li class="mb-3">
          <span class="font-semibold">DevOps and CI/CD pipelines:</span> We
          implement automated deployment pipelines that streamline development,
          testing, and release processes.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Ongoing cloud optimization:</span> We
          continuously monitor and optimize your cloud environment to ensure
          maximum performance, security, and cost-efficiency.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
        Cloud Benefits for Your Business
      </h2>
      <p class="mb-6">
        Moving to the cloud offers numerous advantages that can transform how your 
        business operates. Here are some key benefits:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Scalability:</span> Easily scale resources up or down based on demand, 
          ensuring optimal performance during peak times without overpaying during slower periods.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Cost efficiency:</span> Convert capital expenses to operational 
          expenses, paying only for what you use and avoiding large upfront investments in hardware.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Reliability and uptime:</span> Benefit from redundant systems 
          and high availability architectures that minimize downtime and ensure business continuity.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Security:</span> Leverage enterprise-grade security measures 
          and compliance certifications that might be difficult or expensive to implement on-premises.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Global reach:</span> Deploy applications closer to your users 
          worldwide, improving performance and user experience regardless of location.
        </li>
      </ul>
      `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
        Our Cloud Expertise
      </h2>
      <p class="mb-6">
        Our team includes certified cloud professionals with extensive experience across 
        all major cloud platforms. We stay current with the latest cloud technologies and 
        best practices to ensure your cloud environment is modern, efficient, and secure.
      </p>
      <p class="mb-6">
        We take a consultative approach, working closely with your team to understand your 
        business requirements and design cloud solutions that align with your goals. Whether 
        you're looking to improve performance, reduce costs, enhance security, or all of the 
        above, we have the expertise to help you succeed in the cloud.
      </p>
      <p class="mb-6">
        From initial assessment and planning to migration, implementation, and ongoing 
        management, we provide end-to-end cloud services tailored to your specific needs.
      </p>
      `,
    },
  },
  {
    title: "Chatbot Development",
    icon: MessageSquare,
    bgColors:
      "bg-primary/70 hover:bg-secondary/70 md:bg-secondary/70 md:hover:bg-primary/70",
    shortDesc:
      "Smart Conversations That Work For You. We build AI-driven chatbots that help you connect with customers 24/7.",
    technologies: ["NLP", "API Integration", "CRM Integration"],
    detailsPageImages: {
      first: require("../assets/images/services/chatbot1.webp"),
      second: require("../assets/images/services/chatbot2.webp"),
      third: require("../assets/images/services/chatbot3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Smart Conversations That Work For You
      </h2>
      <p class="mb-10">
        We build AI-driven chatbots that help you connect with customers 24/7 — no missed 
        leads, no long wait times. From support to sales, our bots are designed to be helpful, 
        human-like, and fully integrated with your systems.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our Chatbot Development Services:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">Website and social media bots:</span> We
          create chatbots that engage visitors on your website and social media
          platforms, providing instant responses and assistance.
        </li>
        <li class="mb-3">
          <span class="font-semibold">NLP-powered chatbots:</span> Our
          chatbots use natural language processing to understand user intent
          and provide relevant, helpful responses.
        </li>
        <li class="mb-3">
          <span class="font-semibold">CRM and API integrations:</span> We
          integrate chatbots with your CRM and other business systems to ensure
          seamless data flow and consistent customer experiences.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Automated lead capture:</span> Our
          chatbots can qualify leads, collect contact information, and route
          prospects to the right team members.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
        Benefits of AI-Powered Chatbots
      </h2>
      <p class="mb-6">
        Implementing a well-designed chatbot can transform your customer service and 
        sales operations. Here are some key benefits:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">24/7 availability:</span> Provide instant support and 
          information to customers around the clock, even when your team is offline.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Reduced operational costs:</span> Handle routine inquiries 
          automatically, allowing your team to focus on more complex issues and high-value activities.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Improved response times:</span> Eliminate wait times and 
          provide immediate assistance, enhancing customer satisfaction.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Consistent customer experience:</span> Ensure every customer 
          receives the same high-quality information and assistance.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Scalable customer service:</span> Handle fluctuating volumes 
          of inquiries without the need to hire additional staff.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Valuable insights:</span> Gather data on customer questions 
          and pain points to improve your products, services, and marketing.
        </li>
      </ul>
      `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
        Our Chatbot Development Approach
      </h2>
      <p class="mb-6">
        We take a strategic approach to chatbot development, focusing on creating solutions 
        that deliver real business value. Our process includes:
      </p>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Understanding your goals:</span> We start by identifying 
          what you want to achieve with your chatbot, whether it's improving customer service, 
          generating leads, or streamlining internal processes.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Mapping conversation flows:</span> We design conversation 
          paths that anticipate user needs and guide them to the right information or action.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Developing and training the AI:</span> We build and train 
          the chatbot using advanced NLP techniques to ensure it understands and responds 
          appropriately to user queries.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Integration and testing:</span> We integrate the chatbot 
          with your existing systems and thoroughly test it to ensure it works seamlessly.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Continuous improvement:</span> We monitor the chatbot's 
          performance and make ongoing improvements based on user interactions and feedback.
        </li>
      </ul>
      `,
    },
  },
  {
    title: "AI Development",
    icon: BrainCircuit,
    bgColors:
      "bg-secondary/70 hover:bg-primary/70 md:bg-primary/70 md:hover:bg-secondary/70",
    shortDesc:
      "Smarter Systems. Better Decisions. We use artificial intelligence and machine learning to turn data into action.",
    technologies: [
      "Predictive Models",
      "NLP",
      "Computer Vision",
      "AI Automation",
    ],
    detailsPageImages: {
      first: require("../assets/images/services/ai1.webp"),
      second: require("../assets/images/services/ai2.webp"),
      third: require("../assets/images/services/ai3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Smarter Systems. Better Decisions.
      </h2>
      <p class="mb-10">
        We use artificial intelligence and machine learning to turn data into action. 
        Whether it's predicting customer behavior or automating processes, we build 
        intelligent systems that help you work smarter.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our AI Development Services:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">Predictive models:</span> We
          develop machine learning models that analyze historical data to
          forecast trends, behaviors, and outcomes.
        </li>
        <li class="mb-3">
          <span class="font-semibold">NLP and chatbot AI:</span> Our
          natural language processing solutions enable computers to understand,
          interpret, and generate human language.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Image and video recognition:</span> We
          create computer vision systems that can identify objects, people,
          and activities in images and videos.
        </li>
        <li class="mb-3">
          <span class="font-semibold">AI-powered automation:</span> We
          build intelligent automation solutions that learn from data and
          improve over time, increasing efficiency and reducing errors.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
        Transforming Business with AI
      </h2>
      <p class="mb-6">
        Artificial intelligence is revolutionizing how businesses operate across industries. 
        Here's how AI can transform your business:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Enhanced decision-making:</span> Use data-driven insights 
          to make more informed business decisions and reduce uncertainty.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Personalized customer experiences:</span> Deliver tailored 
          recommendations and interactions based on individual preferences and behaviors.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Operational efficiency:</span> Automate routine tasks and 
          optimize processes to reduce costs and improve productivity.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Predictive maintenance:</span> Anticipate equipment failures 
          and maintenance needs before they cause downtime.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Fraud detection and security:</span> Identify suspicious 
          patterns and potential security threats in real-time.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Product and service innovation:</span> Develop new offerings 
          based on data-driven insights into customer needs and market trends.
        </li>
      </ul>
      `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
        Our AI Development Approach
      </h2>
      <p class="mb-6">
        We take a pragmatic approach to AI development, focusing on solutions that deliver 
        tangible business value. Our process includes:
      </p>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Business problem definition:</span> We start by clearly 
          defining the business challenge you're trying to solve and how AI can address it.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Data assessment and preparation:</span> We evaluate your 
          available data, identify gaps, and prepare it for use in AI models.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Model development and training:</span> We build and train 
          AI models using appropriate algorithms and techniques for your specific use case.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Integration and deployment:</span> We integrate the AI 
          solution with your existing systems and deploy it in a way that fits your operations.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Monitoring and improvement:</span> We continuously monitor 
          the performance of your AI systems and refine them over time to ensure ongoing value.
        </li>
      </ul>
      <p class="mb-6">
        Our team includes data scientists, machine learning engineers, and AI specialists who 
        stay at the forefront of AI advancements to deliver cutting-edge solutions for your business.
      </p>
      `,
    },
  },
  {
    title: "IoT Development",
    icon: Cpu,
    bgColors:
      "bg-primary/70 hover:bg-secondary/70 md:bg-primary/70 md:hover:bg-secondary/70",
    shortDesc:
      "Connect the Physical and Digital Worlds. We build IoT systems that make devices smarter and your data more actionable.",
    technologies: [
      "Device Connectivity",
      "Sensor Management",
      "IoT Dashboards",
      "Embedded Software",
    ],
    detailsPageImages: {
      first: require("../assets/images/services/iot1.webp"),
      second: require("../assets/images/services/iot2.webp"),
      third: require("../assets/images/services/iot3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Connect the Physical and Digital Worlds
      </h2>
      <p class="mb-10">
        We build IoT systems that make devices smarter and your data more actionable. 
        Whether it's home automation, wearable tech, or industrial IoT, we help you build 
        connected ecosystems that deliver real-time insights and control.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our IoT Development Services:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">Device connectivity:</span> We
          design and implement secure, reliable communication between
          devices and central systems.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Sensor and data management:</span> Our
          solutions collect, process, and store data from various sensors
          and devices efficiently.
        </li>
        <li class="mb-3">
          <span class="font-semibold">IoT dashboards & alerts:</span> We
          create intuitive interfaces that visualize IoT data and provide
          alerts for critical events.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Embedded software development:</span> We
          develop firmware and software for IoT devices that optimize
          performance and power consumption.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
        IoT Applications Across Industries
      </h2>
      <p class="mb-6">
        The Internet of Things is transforming operations across virtually every industry. 
        Here are some key applications:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Manufacturing:</span> Monitor equipment performance, 
          predict maintenance needs, and optimize production processes.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Healthcare:</span> Track patient vital signs, manage 
          medical equipment, and enable remote patient monitoring.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Agriculture:</span> Monitor soil conditions, automate 
          irrigation, and track livestock health and location.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Smart buildings:</span> Control lighting, HVAC, and 
          security systems while monitoring energy usage and occupancy.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Retail:</span> Manage inventory, personalize customer 
          experiences, and optimize store layouts based on traffic patterns.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Transportation and logistics:</span> Track vehicle 
          location, monitor cargo conditions, and optimize routes and fuel consumption.
        </li>
      </ul>
      `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
        Our IoT Development Approach
      </h2>
      <p class="mb-6">
        We take a comprehensive approach to IoT development, addressing all aspects of 
        the IoT ecosystem:
      </p>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Strategy and planning:</span> We help you identify 
          the right IoT use cases for your business and develop a roadmap for implementation.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Hardware selection and integration:</span> We advise 
          on the appropriate sensors, devices, and connectivity options for your specific needs.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Software development:</span> We create the embedded 
          software, cloud platforms, and user interfaces that bring your IoT solution to life.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Security implementation:</span> We build in robust 
          security measures to protect your devices, data, and users.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Analytics and intelligence:</span> We implement data 
          analytics and AI capabilities to extract meaningful insights from your IoT data.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Deployment and management:</span> We help you deploy 
          your IoT solution at scale and provide tools for ongoing management and monitoring.
        </li>
      </ul>
      <p class="mb-6">
        Our team includes IoT specialists with expertise in hardware, firmware, cloud platforms, 
        and data analytics, ensuring a well-integrated solution that delivers real business value.
      </p>
      `,
    },
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    bgColors:
      "bg-secondary/70 hover:bg-primary/70 md:bg-secondary/70 md:hover:bg-primary/70",
    shortDesc:
      "Engaging. Interactive. Built to Entertain. From casual games to immersive experiences, we bring your ideas to life.",
    technologies: ["Unity", "Unreal Engine", "AR/VR", "2D/3D Games"],
    detailsPageImages: {
      first: require("../assets/images/services/gamedev1.webp"),
      second: require("../assets/images/services/gamedev2.webp"),
      third: require("../assets/images/services/gamedev3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Engaging. Interactive. Built to Entertain.
      </h2>
      <p class="mb-10">
        From casual games to immersive experiences, we bring your ideas to life. 
        Our game development team handles design, development, and optimization — 
        so you can focus on storytelling and user experience.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our Game Development Services:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">Unity and Unreal Engine development:</span> We
          use industry-leading game engines to create high-quality games
          with stunning visuals and smooth performance.
        </li>
        <li class="mb-3">
          <span class="font-semibold">AR/VR integration:</span> Our
          team creates immersive augmented and virtual reality experiences
          that blur the line between digital and physical worlds.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Cross-platform game design:</span> We
          develop games that work seamlessly across multiple platforms,
          including mobile, desktop, console, and web.
        </li>
        <li class="mb-3">
          <span class="font-semibold">2D, 3D, and multiplayer games:</span> We
          create games in various formats, from simple 2D casual games to
          complex 3D environments and multiplayer experiences.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
        Our Game Development Expertise:
      </h2>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Mobile & Console Game Development:</span> We develop captivating games for popular platforms like iOS, Android, PlayStation, Xbox, and Nintendo, ensuring your game reaches a wide audience.
        </li>
        <li class="mb-3">
          <span class="font-semibold">AR & VR Experiences:</span> We create immersive augmented and virtual reality experiences that transport users to new worlds and provide unique interactive opportunities.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Game Design & Mechanics:</span> Our game designers craft engaging gameplay mechanics, balanced progression systems, and rewarding player experiences.
        </li>
        <li class="mb-3">
          <span class="font-semibold">3D Modeling & Animation:</span> Our artists create stunning 3D models, characters, environments, and animations that bring your game world to life.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Multiplayer & Social Features:</span> We implement robust multiplayer functionality, leaderboards, achievements, and social sharing to enhance player engagement.
        </li>
      </ul>
      `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
        Beyond Entertainment: Serious Games
      </h2>
      <p class="mb-6">
        While entertainment is a primary focus of game development, we also specialize in 
        creating "serious games" for education, training, healthcare, and business applications:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Educational games:</span> Make learning engaging and 
          effective through interactive gameplay and gamification.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Training simulations:</span> Provide safe, repeatable 
          training scenarios for various industries, from healthcare to manufacturing.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Health and wellness applications:</span> Encourage 
          physical activity, mental health practices, or rehabilitation through game mechanics.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Marketing and brand engagement:</span> Create interactive 
          experiences that promote products, services, or brand awareness.
        </li>
      </ul>
      <p class="mb-6">
        Whether you're looking to entertain, educate, or engage, our game development team 
        has the creativity and technical expertise to bring your vision to life.
      </p>
      `,
    },
  },
  {
    title: "UX/UI Design",
    icon: Palette,
    bgColors:
      "bg-primary/70 hover:bg-secondary/70 md:bg-secondary/70 md:hover:bg-primary/70",
    shortDesc:
      "Design That Feels as Good as It Looks. We focus on creating intuitive interfaces that guide users effortlessly.",
    technologies: ["Web UI", "Mobile UI", "UX Research", "Prototyping"],
    detailsPageImages: {
      first: require("../assets/images/services/uiux1.webp"),
      second: require("../assets/images/services/uiux2.webp"),
      third: require("../assets/images/services/uiux3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Design That Feels as Good as It Looks
      </h2>
      <p class="mb-10">
        Great design isn't just about visuals — it's about how things work. We focus on 
        creating intuitive interfaces that guide users effortlessly, reduce friction, and 
        leave a lasting impression.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our UX/UI Design Services:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">Web and mobile UI design:</span> We
          create visually appealing, consistent, and responsive interfaces
          for websites and mobile applications.
        </li>
        <li class="mb-3">
          <span class="font-semibold">UX research and prototyping:</span> Our
          team conducts user research, creates user personas, and develops
          interactive prototypes to test and refine the user experience.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Interaction design:</span> We
          design intuitive interactions and animations that enhance
          usability and create delightful user experiences.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Accessibility best practices:</span> We
          ensure your digital products are accessible to all users,
          including those with disabilities.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
        The Business Value of Good Design
      </h2>
      <p class="mb-6">
        Investing in quality UX/UI design delivers significant business benefits:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Increased conversion rates:</span> Well-designed 
          interfaces guide users toward desired actions, improving conversion rates.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Enhanced customer satisfaction:</span> Intuitive, 
          enjoyable experiences lead to higher customer satisfaction and loyalty.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Reduced support costs:</span> When users can easily 
          navigate your product, they require less support assistance.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Competitive advantage:</span> In crowded markets, 
          superior design helps your product stand out and creates a positive brand impression.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Lower development costs:</span> Addressing design issues 
          early in the process prevents expensive changes later in development.
        </li>
      </ul>
      `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
        Our Design Process
      </h2>
      <p class="mb-6">
        We follow a user-centered design process that puts your users' needs at the heart 
        of every decision:
      </p>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Discovery and research:</span> We begin by understanding 
          your business goals, user needs, and market context through interviews, surveys, 
          and competitive analysis.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Information architecture:</span> We organize content 
          and functionality in a way that makes sense to users and supports their goals.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Wireframing and prototyping:</span> We create low-fidelity 
          wireframes and interactive prototypes to test and refine the user experience before 
          visual design begins.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Visual design:</span> We develop a visual language that 
          aligns with your brand and enhances usability, including color schemes, typography, 
          and UI components.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Usability testing:</span> We validate design decisions 
          through user testing, gathering feedback to make improvements.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Design systems:</span> We create comprehensive design 
          systems that ensure consistency across your digital products and streamline future 
          development.
        </li>
      </ul>
      <p class="mb-6">
        Our designers work closely with developers throughout the process to ensure designs 
        are technically feasible and implemented as intended.
      </p>
      `,
    },
  },
  {
    title: "Robotic Process Automation",
    icon: Cog,
    bgColors:
      "bg-secondary/70 hover:bg-primary/70 md:bg-primary/70 md:hover:bg-secondary/70",
    shortDesc:
      "Automate the Boring Stuff. RPA allows you to take manual, repetitive tasks and hand them off to software bots.",
    technologies: [
      "Task Analysis",
      "Bot Development",
      "ERP Integration",
      "Process Optimization",
    ],
    detailsPageImages: {
      first: require("../assets/images/services/rpa1.webp"),
      second: require("../assets/images/services/rpa2.webp"),
      third: require("../assets/images/services/rpa3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Automate the Boring Stuff
      </h2>
      <p class="mb-10">
        RPA allows you to take manual, repetitive tasks and hand them off to software bots. 
        We help you design, build, and deploy automation that streamlines workflows and 
        reduces human error.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our RPA Services:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">Task and process analysis:</span> We
          identify and evaluate processes that are good candidates for
          automation, estimating potential ROI and implementation complexity.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Custom bot development:</span> Our
          team designs and develops software robots tailored to your
          specific processes and systems.
        </li>
        <li class="mb-3">
          <span class="font-semibold">ERP and system integration:</span> We
          integrate RPA solutions with your existing enterprise systems,
          ensuring seamless data flow and process execution.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Ongoing optimization & monitoring:</span> We
          provide tools and services to monitor bot performance and
          continuously improve your automation processes.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
        Benefits of Robotic Process Automation
      </h2>
      <p class="mb-6">
        Implementing RPA can transform your operations in multiple ways:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Increased productivity:</span> Bots work 24/7 without 
          breaks, significantly increasing throughput for automated processes.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Improved accuracy:</span> Eliminate human errors in 
          repetitive tasks, ensuring consistent, high-quality results.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Cost reduction:</span> Reduce operational costs by 
          automating routine tasks that previously required manual effort.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Enhanced compliance:</span> Ensure processes follow 
          predefined rules and maintain detailed audit trails for regulatory compliance.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Improved employee satisfaction:</span> Free your team 
          from mundane tasks so they can focus on more creative, strategic work.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Scalability:</span> Easily scale operations up or down 
          by deploying additional bots as needed, without proportional increases in cost.
        </li>
      </ul>
      `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
        Common RPA Applications
      </h2>
      <p class="mb-6">
        RPA can be applied across various business functions:
      </p>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Finance and accounting:</span> Automate invoice processing, 
          accounts payable/receivable, financial reporting, and reconciliations.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Human resources:</span> Streamline employee onboarding, 
          payroll processing, benefits administration, and time tracking.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Customer service:</span> Automate ticket routing, data 
          entry, customer information updates, and standard response generation.
        </li>
        <li class="mb-3">
          <span class="font-semibold">IT operations:</span> Automate system monitoring, user 
          provisioning, password resets, and routine maintenance tasks.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Supply chain:</span> Optimize inventory management, 
          order processing, shipment tracking, and supplier communications.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Sales and marketing:</span> Automate lead generation, 
          data entry, report generation, and campaign management.
        </li>
      </ul>
      <p class="mb-6">
        Our RPA experts can help you identify the most valuable automation opportunities 
        in your organization and develop a roadmap for implementation.
      </p>
      `,
    },
  },
  {
    title: "Digital Marketing",
    icon: BarChart,
    bgColors:
      "bg-primary/70 hover:bg-secondary/70 md:bg-secondary/70 md:hover:bg-primary/70",
    shortDesc:
      "Visibility Where It Counts. We create and manage marketing strategies that help your brand stand out and reach the people who matter.",
    technologies: ["SEO", "Paid Ads", "Content Marketing", "Email Automation"],
    detailsPageImages: {
      first: require("../assets/images/services/digitalmarketing1.webp"),
      second: require("../assets/images/services/digitalmarketing2.webp"),
      third: require("../assets/images/services/digitalmarketing3.webp"),
    },
    html: {
      firstSection: `<h2 class="text-xl font-semibold mb-4">
        Visibility Where It Counts
      </h2>
      <p class="mb-10">
        Getting noticed is half the battle. We create and manage marketing strategies that 
        help your brand stand out and reach the people who matter — with content and 
        campaigns that convert.
      </p>
      
      <h2 class="text-xl font-semibold mb-4">Our Digital Marketing Services:</h2>
      <ul class="list-disc pl-6">
        <li class="mb-3">
          <span class="font-semibold">SEO and organic content:</span> We
          optimize your website and content to rank higher in search results,
          driving qualified organic traffic to your business.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Paid search and social ads:</span> Our
          team creates and manages targeted advertising campaigns on search
          engines and social media platforms to reach your ideal audience.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Campaign strategy and analytics:</span> We
          develop comprehensive marketing strategies and use data analytics
          to measure performance and optimize results.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Email marketing and automation:</span> We
          design and implement email campaigns and marketing automation
          workflows that nurture leads and drive conversions.
        </li>
      </ul>
      `,
      secondSection: `<h2 class="text-xl font-semibold mb-4">
        Our Digital Marketing Approach
      </h2>
      <p class="mb-6">
        We believe effective digital marketing starts with understanding your business 
        goals, target audience, and competitive landscape. Our approach includes:
      </p>
      <ul class="list-decimal pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Strategic planning:</span> We develop a customized 
          marketing strategy aligned with your business objectives and budget.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Audience targeting:</span> We identify and segment 
          your ideal customers to create personalized marketing messages that resonate.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Multi-channel execution:</span> We implement campaigns 
          across the most effective channels for your audience, ensuring consistent messaging.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Data-driven optimization:</span> We continuously analyze 
          campaign performance and make data-backed adjustments to improve results.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Transparent reporting:</span> We provide clear, 
          comprehensive reports that show the real impact of your marketing investments.
        </li>
      </ul>
      `,
      thirdSection: `<h2 class="text-xl font-semibold mb-4">
        Digital Marketing Channels We Specialize In
      </h2>
      <ul class="list-disc pl-6 mb-6">
        <li class="mb-3">
          <span class="font-semibold">Search Engine Optimization (SEO):</span> Improve your 
          organic visibility with technical SEO, content optimization, and link building strategies.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Pay-Per-Click Advertising (PPC):</span> Drive immediate 
          traffic and conversions with targeted ads on Google, Bing, and other search engines.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Social Media Marketing:</span> Build brand awareness and 
          engagement through organic social media strategies and paid social advertising.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Content Marketing:</span> Attract and retain customers 
          with valuable, relevant content that positions you as an industry authority.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Email Marketing:</span> Nurture leads and maintain customer 
          relationships with personalized email campaigns and automated workflows.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Conversion Rate Optimization (CRO):</span> Improve the 
          percentage of website visitors who take desired actions through strategic testing 
          and optimization.
        </li>
        <li class="mb-3">
          <span class="font-semibold">Analytics and Reporting:</span> Gain insights into marketing 
          performance with comprehensive tracking, analysis, and reporting.
        </li>
      </ul>
      <p class="mb-6">
        Whether you're looking to increase brand awareness, generate leads, or drive sales, 
        our digital marketing team has the expertise to help you achieve your goals.
      </p>
      `,
    },
  },
];
