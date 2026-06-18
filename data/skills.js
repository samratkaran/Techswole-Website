export const skills = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Creating responsive, interactive, and user-friendly interfaces",
    icon: "Code",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Vue", "Angular", "JavaScript", "TypeScript"],
    content: {
      overview:
        "Our frontend developers create responsive, interactive, and user-friendly interfaces that provide exceptional user experiences. We use modern frameworks and libraries to build fast, scalable, and maintainable frontend applications.",
      sections: [
        {
          type: "technologies",
          title: "Technologies We Use",
          items: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "SASS", "Redux"],
        },
        {
          type: "features",
          title: "Key Capabilities",
          items: [
            "Responsive web design",
            "Single-page applications (SPAs)",
            "Progressive web apps (PWAs)",
            "Cross-browser compatibility",
            "Accessibility compliance",
            "Performance optimization",
          ],
        },
        {
          type: "custom",
          title: "Our Frontend Approach",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gray-100 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Component-Based Architecture</h4>
                <p class="text-sm">We build reusable components that make applications easier to develop and maintain.</p>
              </div>
              <div class="bg-gray-100 p-4 rounded-lg">
                <h4 class="font-bold mb-2">State Management</h4>
                <p class="text-sm">We implement efficient state management solutions to handle complex application states.</p>
              </div>
              <div class="bg-gray-100 p-4 rounded-lg">
                <h4 class="font-bold mb-2">API Integration</h4>
                <p class="text-sm">We connect frontend applications to backend services through RESTful APIs or GraphQL.</p>
              </div>
              <div class="bg-gray-100 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Testing & Quality Assurance</h4>
                <p class="text-sm">We write comprehensive tests to ensure our code works as expected across all browsers.</p>
              </div>
            </div>
          `,
        },
        {
          type: "process",
          title: "Frontend Development Process",
          description: "Our structured approach ensures high-quality frontend development.",
          steps: [
            { title: "Requirements Analysis", description: "Understanding the project needs and user requirements." },
            { title: "UI/UX Design", description: "Creating wireframes and visual designs for the application." },
            { title: "Component Development", description: "Building reusable components based on the design." },
            { title: "Integration", description: "Connecting the frontend with backend services." },
            { title: "Testing", description: "Ensuring the application works across all devices and browsers." },
            { title: "Deployment", description: "Deploying the application to production." },
          ],
        },
      ],
    },
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Building robust, scalable, and secure server-side applications",
    icon: "Database",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["Node.js", "Python", "Java", "Databases", "APIs"],
    content: {
      overview:
        "Our backend developers build robust, scalable, and secure server-side applications that power your digital products. We design efficient APIs, databases, and server architectures to handle your business logic and data processing needs.",
      sections: [
        {
          type: "technologies",
          title: "Technologies We Use",
          items: [
            "Node.js",
            "Python",
            "Java",
            "PHP",
            "Go",
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "Redis",
            "GraphQL",
            "REST",
          ],
        },
        {
          type: "features",
          title: "Key Capabilities",
          items: [
            "API development (REST & GraphQL)",
            "Database design and optimization",
            "Authentication and authorization",
            "Microservices architecture",
            "Serverless functions",
            "Real-time applications",
          ],
        },
        {
          type: "custom",
          title: "Backend Architecture",
          content: `
            <div class="border-l-4 border-black pl-4 mb-4">
              <h4 class="font-bold mb-2">Scalable Architecture</h4>
              <p class="mb-4">We design backend systems that can scale horizontally to handle increasing loads and traffic.</p>
              <h4 class="font-bold mb-2">Security First</h4>
              <p>We implement industry best practices for security, including data encryption, secure authentication, and protection against common vulnerabilities.</p>
            </div>
          `,
        },
        {
          type: "comparison",
          title: "Monolithic vs Microservices",
          description: "We help you choose the right architecture based on your specific needs.",
          columns: [
            {
              title: "Monolithic Architecture",
              points: [
                "Simpler development process",
                "Easier deployment",
                "Better performance for small applications",
                "Tightly coupled components",
                "Less complex infrastructure",
              ],
            },
            {
              title: "Microservices Architecture",
              points: [
                "Better scalability",
                "Independent deployment of services",
                "Technology diversity",
                "Improved fault isolation",
                "More complex infrastructure",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Streamlining development and operations processes",
    icon: "GitBranch",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["CI/CD", "Docker", "Kubernetes", "Automation", "Monitoring"],
    content: {
      overview:
        "Our DevOps engineers help organizations streamline their development and operations processes, enabling faster delivery of high-quality software. We implement CI/CD pipelines, infrastructure automation, and monitoring solutions.",
      sections: [
        {
          type: "technologies",
          title: "Technologies We Use",
          items: [
            "Jenkins",
            "GitHub Actions",
            "GitLab CI",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Prometheus",
            "Grafana",
          ],
        },
        {
          type: "features",
          title: "Key Capabilities",
          items: [
            "Continuous Integration/Continuous Deployment (CI/CD)",
            "Infrastructure as Code (IaC)",
            "Containerization and orchestration",
            "Configuration management",
            "Monitoring and logging",
            "Automated testing",
          ],
        },
        {
          type: "custom",
          title: "DevOps Benefits",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="border border-gray-200 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Faster Delivery</h4>
                <p class="text-sm">Automate the software delivery process to release features faster.</p>
              </div>
              <div class="border border-gray-200 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Improved Quality</h4>
                <p class="text-sm">Catch bugs earlier in the development process with automated testing.</p>
              </div>
              <div class="border border-gray-200 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Reduced Risk</h4>
                <p class="text-sm">Smaller, more frequent releases reduce the risk of deployment failures.</p>
              </div>
              <div class="border border-gray-200 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Better Collaboration</h4>
                <p class="text-sm">Break down silos between development and operations teams.</p>
              </div>
            </div>
          `,
        },
        {
          type: "process",
          title: "DevOps Implementation Process",
          description: "Our approach to implementing DevOps practices in your organization.",
          steps: [
            {
              title: "Assessment",
              description: "Evaluating your current processes and identifying improvement areas.",
            },
            {
              title: "Strategy",
              description: "Developing a DevOps roadmap tailored to your organization's needs.",
            },
            {
              title: "Implementation",
              description: "Setting up CI/CD pipelines, infrastructure automation, and monitoring tools.",
            },
            { title: "Training", description: "Providing training and knowledge transfer to your team." },
            {
              title: "Continuous Improvement",
              description: "Regularly reviewing and optimizing your DevOps practices.",
            },
          ],
        },
      ],
    },
  },
]
