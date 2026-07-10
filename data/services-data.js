

export const servicesData = {
  title: "Our Services",
  subtitle: "Comprehensive solutions for your business needs",
  description:
    "We offer a wide range of software development services to help businesses transform their digital presence and operations. Our expert team delivers custom solutions tailored to your specific requirements.",
  heroImage: "/placeholder.svg?height=600&width=1200",
  contactCta: {
    title: "Ready to start your project?",
    description: "Contact us today to discuss how we can help you achieve your goals.",
    buttonText: "Contact Now",
    buttonLink: "/contact",
  },
  services: [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom web applications built with the latest technologies.",
      icon: "Code",
      image: "assets/service/webdev.png",
      content: (
        <>
          <p className="mb-4">
            Our web development team creates custom, responsive websites and web applications that are tailored to your
            specific business needs. We use the latest technologies and frameworks to ensure your web presence is
            modern, fast, and effective.
          </p>
          <h3 className="text-xl font-bold mb-2">Our Web Development Process</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Requirements gathering and analysis</li>
            <li>UI/UX design and prototyping</li>
            <li>Frontend and backend development</li>
            <li>Testing and quality assurance</li>
            <li>Deployment and maintenance</li>
          </ul>
          <p className="mb-4">
            We specialize in building web applications using modern frameworks like React, Angular, and Vue.js, combined
            with robust backend technologies like Node.js, Python, and PHP.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">Technologies We Use</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Angular", "Vue.js", "Node.js", "Express", "Django", "Laravel"].map((tech) => (
                <span key={tech} className="bg-white px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications.",
      icon: "Smartphone",
      image: "/placeholder.svg?height=400&width=600",
      content: (
        <>
          <p className="mb-4">
            We develop high-performance mobile applications for iOS and Android platforms. Whether you need a native app
            or a cross-platform solution, our team delivers mobile experiences that engage users and drive results.
          </p>
          <h3 className="text-xl font-bold mb-2">Mobile Development Expertise</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Native iOS development (Swift, Objective-C)</li>
            <li>Native Android development (Kotlin, Java)</li>
            <li>Cross-platform development (React Native, Flutter)</li>
            <li>Mobile UI/UX design</li>
            <li>App Store optimization and submission</li>
          </ul>
          <p className="mb-4">
            Our mobile apps are built with performance, usability, and scalability in mind, ensuring they meet the needs
            of your users and your business.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">Featured Mobile Projects</h4>
            <p>Our portfolio includes e-commerce apps, social networking platforms, enterprise solutions, and more.</p>
          </div>
        </>
      ),
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services.",
      icon: "Cloud",
      image: "/placeholder.svg?height=400&width=600",
      content: (
        <>
          <p className="mb-4">
            Our cloud solutions help businesses leverage the power of cloud computing to improve scalability, reduce
            costs, and enhance security. We provide end-to-end cloud services from migration to management.
          </p>
          <h3 className="text-xl font-bold mb-2">Cloud Services We Offer</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Cloud migration and strategy</li>
            <li>Infrastructure as Code (IaC)</li>
            <li>Serverless architecture</li>
            <li>Containerization (Docker, Kubernetes)</li>
            <li>Cloud security and compliance</li>
          </ul>
          <p className="mb-4">
            We work with all major cloud providers including AWS, Azure, and Google Cloud to deliver the best solution
            for your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">AWS</h4>
              <p className="text-sm">Amazon Web Services offers the broadest and deepest set of services.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Azure</h4>
              <p className="text-sm">Microsoft Azure integrates seamlessly with Microsoft products.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Google Cloud</h4>
              <p className="text-sm">Google Cloud Platform excels in data analytics and machine learning.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "devops",
      title: "DevOps",
      description: "Streamline your development and operations processes.",
      icon: "GitBranch",
      image: "/placeholder.svg?height=400&width=600",
      content: (
        <>
          <p className="mb-4">
            Our DevOps services help organizations streamline their development and operations processes, enabling
            faster delivery of high-quality software. We implement CI/CD pipelines and automation to improve efficiency.
          </p>
          <h3 className="text-xl font-bold mb-2">DevOps Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Faster Delivery</h4>
              <p className="text-sm">Automate the software delivery process to release features faster.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Improved Quality</h4>
              <p className="text-sm">Catch bugs earlier in the development process with automated testing.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Reduced Risk</h4>
              <p className="text-sm">Smaller, more frequent releases reduce the risk of deployment failures.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Better Collaboration</h4>
              <p className="text-sm">Break down silos between development and operations teams.</p>
            </div>
          </div>
          <p className="mb-4">
            Our DevOps engineers have extensive experience with tools like Jenkins, GitHub Actions, GitLab CI, Docker,
            Kubernetes, Ansible, and Terraform.
          </p>
        </>
      ),
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "User-centered design that enhances user experience and engagement.",
      icon: "Palette",
      image: "/placeholder.svg?height=400&width=600",
      content: (
        <>
          <p className="mb-4">
            Our design team creates intuitive, engaging user interfaces and experiences that keep users coming back. We
            focus on user-centered design principles to ensure your digital products are both beautiful and functional.
          </p>
          <h3 className="text-xl font-bold mb-2">Our Design Process</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">
              <span className="font-bold">Research:</span> We conduct user research to understand your target audience.
            </li>
            <li className="mb-2">
              <span className="font-bold">Wireframing:</span> We create wireframes to establish the basic structure of
              your interface.
            </li>
            <li className="mb-2">
              <span className="font-bold">Prototyping:</span> We build interactive prototypes to test user flows and
              interactions.
            </li>
            <li className="mb-2">
              <span className="font-bold">Visual Design:</span> We create visually appealing designs that align with
              your brand.
            </li>
            <li className="mb-2">
              <span className="font-bold">Testing:</span> We conduct usability testing to validate our design decisions.
            </li>
          </ol>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">Design Tools We Use</h4>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Principle"].map((tool) => (
                <span key={tool} className="bg-white px-3 py-1 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </>
      ),
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description: "Custom online stores and marketplace solutions.",
      icon: "ShoppingCart",
      image: "/placeholder.svg?height=400&width=600",
      content: (
        <>
          <p className="mb-4">
            We build custom e-commerce solutions that help businesses sell products and services online. From small
            boutique shops to large marketplaces, we create scalable e-commerce platforms that drive sales.
          </p>
          <h3 className="text-xl font-bold mb-2">E-commerce Platforms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Custom Solutions</h4>
              <p className="text-sm">Tailored e-commerce platforms built from scratch for unique requirements.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Shopify</h4>
              <p className="text-sm">Fully-hosted solution ideal for small to medium-sized businesses.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold mb-2">WooCommerce</h4>
              <p className="text-sm">WordPress-based solution with extensive customization options.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Magento</h4>
              <p className="text-sm">Enterprise-level platform for large-scale e-commerce operations.</p>
            </div>
          </div>
          <p className="mb-4">
            Our e-commerce solutions include features like secure payment processing, inventory management, order
            fulfillment, customer accounts, and analytics.
          </p>
        </>
      ),
    },
  ],
}
