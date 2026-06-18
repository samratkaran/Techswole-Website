export const companyData = {
  title: "Our Company",
  subtitle: "Building innovative solutions since 2010",
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
      id: "team",
      title: "Our Team",
      description: "Meet our talented team of professionals.",
      image: "/placeholder.svg?height=400&width=600",
      content: (
        <>
          <p className="mb-4">
            Our success is driven by our exceptional team of experts who bring passion, creativity, and technical
            excellence to every project. We foster a collaborative environment where innovation thrives.
          </p>
          <h3 className="text-xl font-bold mb-2">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-2"></div>
              <h4 className="font-bold">Alex Johnson</h4>
              <p className="text-sm">Founder & CEO</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-2"></div>
              <h4 className="font-bold">Samantha Chen</h4>
              <p className="text-sm">CTO</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-2"></div>
              <h4 className="font-bold">Michael Rodriguez</h4>
              <p className="text-sm">Design Director</p>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Our Culture</h3>
          <p className="mb-4">
            We believe in creating a positive work environment where team members can grow professionally and
            personally. Our culture is built on collaboration, innovation, and continuous learning.
          </p>
          <div className="border-l-4 border-black pl-4 mb-4">
            <h4 className="font-bold mb-2">Core Values</h4>
            <ul className="list-disc pl-6">
              <li>Excellence in everything we do</li>
              <li>Innovation and creative thinking</li>
              <li>Integrity and transparency</li>
              <li>Client-focused approach</li>
              <li>Continuous learning and improvement</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "partners",
      title: "Our Partners",
      description: "Discover our strategic partnerships and collaborations.",
      image: "/placeholder.svg?height=400&width=600",
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
    {
      id: "testimonials",
      title: "Testimonials",
      description: "See what our clients say about our services.",
      image: "/placeholder.svg?height=400&width=600",
      content: (
        <>
          <p className="mb-4">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
          <div className="space-y-4 mb-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="italic mb-2">
                "Working with this team was a game-changer for our business. Their software solutions helped us
                streamline operations and increase revenue by 30%."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-sm">CEO, Tech Innovations Inc.</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="italic mb-2">
                "The mobile app they developed for us exceeded our expectations. User engagement has increased
                significantly, and we've received fantastic feedback from our customers."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
                <div>
                  <p className="font-bold">Michael Chen</p>
                  <p className="text-sm">CTO, Global Systems</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="italic mb-2">
                "Their attention to detail and commitment to quality is unmatched. They delivered our project on time
                and within budget, and the results have been outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
                <div>
                  <p className="font-bold">Emily Rodriguez</p>
                  <p className="text-sm">Product Manager, Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black text-white p-4 rounded-lg">
            <h4 className="font-bold mb-2">Client Satisfaction</h4>
            <div className="flex justify-between items-center">
              <div className="text-center">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm">Repeat Business</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">90+</p>
                <p className="text-sm">NPS Score</p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "careers",
      title: "Careers",
      description: "Join our team and grow your career with us.",
      image: "/placeholder.svg?height=400&width=600",
      content: (
        <>
          <p className="mb-4">
            We're always looking for talented individuals to join our team and help us create exceptional software
            solutions. If you're passionate about technology and innovation, we'd love to hear from you.
          </p>
          <h3 className="text-xl font-bold mb-2">Why Work With Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Professional Growth</h4>
              <p>Opportunities to work on challenging projects and learn new technologies.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Collaborative Environment</h4>
              <p>Work with talented professionals in a supportive and collaborative culture.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Work-Life Balance</h4>
              <p>Flexible work arrangements and policies that support your well-being.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Competitive Benefits</h4>
              <p>Comprehensive benefits package including health insurance and retirement plans.</p>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Open Positions</h3>
          <div className="space-y-2 mb-4">
            <div className="border border-gray-200 p-3 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-bold">Senior Frontend Developer</p>
                <p className="text-sm">Remote / Full-time</p>
              </div>
              <button className="bg-black text-white px-3 py-1 rounded text-sm">Apply</button>
            </div>
            <div className="border border-gray-200 p-3 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-bold">Backend Engineer</p>
                <p className="text-sm">New York / Full-time</p>
              </div>
              <button className="bg-black text-white px-3 py-1 rounded text-sm">Apply</button>
            </div>
            <div className="border border-gray-200 p-3 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-bold">UX/UI Designer</p>
                <p className="text-sm">San Francisco / Full-time</p>
              </div>
              <button className="bg-black text-white px-3 py-1 rounded text-sm">Apply</button>
            </div>
          </div>
        </>
      ),
    },
  ],
}
