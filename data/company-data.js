export const companyData = {
  title: "Our Company",
  subtitle: "Building innovative solutions since 2017",
  description:
    "We are a leading software development company specializing in custom solutions for businesses of all sizes. Our team of experts combines technical excellence with creative thinking to deliver exceptional results.",
  heroImage: "/placeholder.svg?height=600&width=1200",
  contactCta: {
    title: "Want to learn more about our company?",
    description: "Contact us today to schedule a meeting with our team.",
    buttonText: "Contact Now",
    buttonLink: "/contact",
  },
  sections: [
    {
      id: "about",
      title: "About Us",
      description: "Learn about our company history and mission.",
      image: "/placeholder.svg?height=400&width=600",
      content: (
        <>
          <p className="mb-4">
            Founded in 2010, our company has been at the forefront of software innovation for over a decade. We've
            helped hundreds of businesses transform their operations through custom software solutions.
          </p>
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="mb-4">
            Our mission is to empower businesses with innovative technology solutions that drive growth, improve
            efficiency, and create exceptional user experiences.
          </p>
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="mb-4">
            We envision a world where technology enhances human potential, and we strive to be at the forefront of this
            transformation by creating software that makes a positive impact.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">Company Facts</h4>
            <ul className="list-disc pl-6">
              <li>Founded in 2010</li>
              <li>Headquartered in Tech City with offices in 5 countries</li>
              <li>Team of 150+ professionals</li>
              <li>Completed 500+ projects</li>
              <li>Served clients in 30+ countries</li>
            </ul>
          </div>
        </>
      ),
    },
   
    {
      id: "partners",
      title: "Our Partners",
      description: "Discover our strategic partnerships and collaborations.",
      
      content: (
        <>
          <p className="mb-4">
            We collaborate with leading companies across industries to deliver exceptional solutions. Our strategic
            partnerships enable us to provide comprehensive services and stay at the forefront of technology trends.
          </p>
          <h3 className="text-xl font-bold mb-2">Technology Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="border border-gray-200 p-4 rounded-lg flex items-center justify-center h-20">
              <p className="font-bold">Microsoft</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg flex items-center justify-center h-20">
              <p className="font-bold">Google</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg flex items-center justify-center h-20">
              <p className="font-bold">Amazon</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg flex items-center justify-center h-20">
              <p className="font-bold">Salesforce</p>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Industry Partnerships</h3>
          <p className="mb-4">
            We partner with industry leaders to combine our technical expertise with domain knowledge, creating
            solutions that address specific industry challenges.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-bold mb-2">Partnership Benefits</h4>
            <ul className="list-disc pl-6">
              <li>Access to cutting-edge technologies</li>
              <li>Industry-specific expertise</li>
              <li>Comprehensive solution offerings</li>
              <li>Enhanced service capabilities</li>
            </ul>
          </div>
        </>
      ),
    },
   
  ],
}
