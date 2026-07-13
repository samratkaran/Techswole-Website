import logotech from "/public/logotech.png"

export const companyDataEnhanced = {
  title: "Our Company",
  subtitle: "Building innovative solutions since 2017",
  description:
    "We are a leading software development company specializing in custom solutions for businesses of all sizes. Our team of experts combines technical excellence with creative thinking to deliver exceptional results.",
  heroImage: '/public/logotech.png',
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
      icon: "Building",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["History", "Mission", "Values", "Vision"],
      style: {
        theme: "modern",
        layout: "split",
        backgroundColor: "white",
        textColor: "black",
        accentColor: "blue",
        headerStyle: "gradient",
        cardStyle: "elevated",
      },
      content: {
        overview:
          "Founded in 2017, our company has been at the forefront of software innovation for over a decade. We've helped hundreds of businesses transform their operations through custom software solutions.",
        sections: [
          {
            type: "hero",
            title: "Our Story",
            content: `
              <div class="prose max-w-none">
  <p class="mb-6 text-lg">
    TechSwole was founded with a vision to help businesses transform their ideas into powerful digital solutions. Starting as an independent technology venture, the company has steadily grown by delivering high-quality web development, cloud, and software services to clients across different industries.
  </p>

  <p class="mb-6">
    Over the years, TechSwole has partnered with startups, growing businesses, and established organizations, providing scalable applications, modern web experiences, and innovative technology solutions tailored to their needs. Our focus has always been on combining technical expertise with a deep understanding of business goals.
  </p>

  <p class="text-lg font-medium">
    Today, TechSwole continues to embrace emerging technologies and industry best practices, helping clients build, optimize, and scale their digital presence with confidence.
  </p>
</div>
            `,
          },
          {
            type: "mission-vision",
            title: "Mission & Vision",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                  <h4 class="text-2xl font-bold mb-4 text-blue-900">Our Mission</h4>
                  <p class="text-blue-800">To empower businesses with innovative technology solutions that drive growth, improve efficiency, and create exceptional user experiences.</p>
                </div>
                <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
                  <h4 class="text-2xl font-bold mb-4 text-purple-900">Our Vision</h4>
                  <p class="text-purple-800">To be the leading technology partner for businesses worldwide, known for our expertise, innovation, and commitment to excellence.</p>
                </div>
              </div>
            `,
          },
          {
            type: "stats",
            title: "Company Facts",
            content: `
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <p class="text-4xl font-bold mb-2 text-blue-600">12+</p>
                  <p class="text-sm text-gray-600 font-medium">Years in Business</p>
                </div>
                <div class="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <p class="text-4xl font-bold mb-2 text-green-600">150+</p>
                  <p class="text-sm text-gray-600 font-medium">Team Members</p>
                </div>
                <div class="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <p class="text-4xl font-bold mb-2 text-purple-600">500+</p>
                  <p class="text-sm text-gray-600 font-medium">Projects Completed</p>
                </div>
                <div class="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <p class="text-4xl font-bold mb-2 text-orange-600">30+</p>
                  <p class="text-sm text-gray-600 font-medium">Countries Served</p>
                </div>
              </div>
            `,
          },
        ],
      },
    },
    {
      id: "team",
      title: "Our Team",
      description: "Meet our talented team of professionals.",
      icon: "Users",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["Leadership", "Developers", "Designers", "Culture"],
      style: {
        theme: "dark",
        layout: "grid",
        backgroundColor: "black",
        textColor: "white",
        accentColor: "gold",
        headerStyle: "bold",
        cardStyle: "glass",
      },
      content: {
        overview:
          "Our success is driven by our exceptional team of experts who bring passion, creativity, and technical excellence to every project. We foster a collaborative environment where innovation thrives.",
        sections: [
          {
            type: "leadership",
            title: "Leadership Team",
            content: `
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="text-center bg-gray-900 p-8 rounded-2xl">
                  <div class="w-32 h-32 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mx-auto mb-6"></div>
                  <h4 class="text-2xl font-bold text-white">Alex Johnson</h4>
                  <p class="text-gold-400 mb-4">Founder & CEO</p>
                  <p class="text-gray-300 text-sm">With over 15 years of experience in software development and business leadership.</p>
                </div>
                <div class="text-center bg-gray-900 p-8 rounded-2xl">
                  <div class="w-32 h-32 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mx-auto mb-6"></div>
                  <h4 class="text-2xl font-bold text-white">Samantha Chen</h4>
                  <p class="text-gold-400 mb-4">CTO</p>
                  <p class="text-gray-300 text-sm">Expert in cloud architecture and AI with a background in computer science.</p>
                </div>
                <div class="text-center bg-gray-900 p-8 rounded-2xl">
                  <div class="w-32 h-32 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 mx-auto mb-6"></div>
                  <h4 class="text-2xl font-bold text-white">Michael Rodriguez</h4>
                  <p class="text-gold-400 mb-4">Design Director</p>
                  <p class="text-gray-300 text-sm">Award-winning designer with a passion for creating exceptional user experiences.</p>
                </div>
              </div>
            `,
          },
          {
            type: "culture",
            title: "Our Culture",
            content: `
              <div class="prose max-w-none mb-8 text-gray-300">
                <p class="mb-6 text-lg">We believe in creating a positive work environment where team members can grow professionally and personally. Our culture is built on collaboration, innovation, and continuous learning.</p>
                <p class="mb-6">We invest in our team's development through training programs, conference attendance, and regular knowledge-sharing sessions. We also promote work-life balance and offer flexible working arrangements.</p>
              </div>
              <div class="bg-gradient-to-r from-gold-500 to-gold-600 text-black p-8 rounded-2xl">
                <h4 class="text-2xl font-bold mb-4">Join Our Team</h4>
                <p class="mb-6">We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.</p>
                <button class="bg-black text-gold-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">View Open Positions</button>
              </div>
            `,
          },
        ],
      },
    },
    {
      id: "partners",
      title: "Our Partners",
      description: "Discover our strategic partnerships and collaborations.",
      icon: "Handshake",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["Technology Partners", "Industry Partners", "Collaborations"],
      style: {
        theme: "minimal",
        layout: "masonry",
        backgroundColor: "gray-50",
        textColor: "gray-900",
        accentColor: "green",
        headerStyle: "clean",
        cardStyle: "flat",
      },
      content: {
        overview:
          "We collaborate with leading companies across industries to deliver exceptional solutions. Our strategic partnerships enable us to provide comprehensive services and stay at the forefront of technology trends.",
        sections: [
          {
            type: "tech-partners",
            title: "Technology Partners",
            content: `
              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div class="border border-gray-300 p-8 rounded-lg flex items-center justify-center h-32 bg-white hover:shadow-md transition-shadow">
                  <p class="font-bold text-2xl text-gray-800">Microsoft</p>
                </div>
                <div class="border border-gray-300 p-8 rounded-lg flex items-center justify-center h-32 bg-white hover:shadow-md transition-shadow">
                  <p class="font-bold text-2xl text-gray-800">Google</p>
                </div>
                <div class="border border-gray-300 p-8 rounded-lg flex items-center justify-center h-32 bg-white hover:shadow-md transition-shadow">
                  <p class="font-bold text-2xl text-gray-800">Amazon</p>
                </div>
                <div class="border border-gray-300 p-8 rounded-lg flex items-center justify-center h-32 bg-white hover:shadow-md transition-shadow">
                  <p class="font-bold text-2xl text-gray-800">Salesforce</p>
                </div>
              </div>
            `,
          },
          {
            type: "industry-partnerships",
            title: "Industry Partnerships",
            content: `
              <div class="prose max-w-none mb-8">
                <p class="text-lg text-gray-700">We partner with industry leaders to combine our technical expertise with domain knowledge, creating solutions that address specific industry challenges.</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-xl border border-gray-200">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span class="text-green-600 text-xl">🏥</span>
                  </div>
                  <h4 class="font-bold mb-3 text-gray-900">Healthcare</h4>
                  <p class="text-sm text-gray-600">Partnering with healthcare providers to develop innovative patient care solutions.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-gray-200">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span class="text-green-600 text-xl">💰</span>
                  </div>
                  <h4 class="font-bold mb-3 text-gray-900">Finance</h4>
                  <p class="text-sm text-gray-600">Collaborating with financial institutions to create secure and efficient systems.</p>
                </div>
                <div class="bg-white p-6 rounded-xl border border-gray-200">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span class="text-green-600 text-xl">🛍️</span>
                  </div>
                  <h4 class="font-bold mb-3 text-gray-900">Retail</h4>
                  <p class="text-sm text-gray-600">Working with retailers to enhance customer experiences and streamline operations.</p>
                </div>
              </div>
            `,
          },
        ],
      },
    },
  ],
}
