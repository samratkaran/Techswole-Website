export const company = [
  {
    id: "about",
    title: "About Us",
    description: "Learn about our company history and mission.",
    icon: "Building",
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["History", "Mission", "Values", "Vision"],
    content: {
      overview:
        "Founded in 2010, our company has been at the forefront of software innovation for over a decade. We've helped hundreds of businesses transform their operations through custom software solutions.",
      sections: [
        {
          type: "custom",
          title: "Our Story",
          content: `
            <div class="prose max-w-none">
              <p class="mb-4">Our journey began in 2010 when a group of passionate developers and designers came together with a shared vision: to create software that makes a difference. What started as a small team working out of a garage has grown into a global company with offices in multiple countries.</p>
              <p class="mb-4">Over the years, we've worked with clients ranging from startups to Fortune 500 companies, helping them solve complex problems and achieve their business goals through innovative technology solutions.</p>
              <p>Today, we continue to push the boundaries of what's possible, staying at the forefront of technology trends and delivering exceptional results for our clients.</p>
            </div>
          `,
        },
        {
          type: "custom",
          title: "Mission & Vision",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="bg-gray-100 p-6 rounded-lg">
                <h4 class="text-xl font-bold mb-4">Our Mission</h4>
                <p>To empower businesses with innovative technology solutions that drive growth, improve efficiency, and create exceptional user experiences.</p>
              </div>
              <div class="bg-gray-100 p-6 rounded-lg">
                <h4 class="text-xl font-bold mb-4">Our Vision</h4>
                <p>To be the leading technology partner for businesses worldwide, known for our expertise, innovation, and commitment to excellence.</p>
              </div>
            </div>
          `,
        },
        {
          type: "features",
          title: "Our Values",
          items: [
            "Excellence in everything we do",
            "Innovation and creative thinking",
            "Integrity and transparency",
            "Client-focused approach",
            "Continuous learning and improvement",
          ],
        },
        {
          type: "custom",
          title: "Company Facts",
          content: `
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="text-center p-4 border border-gray-200 rounded-lg">
                <p class="text-3xl font-bold mb-2">12+</p>
                <p class="text-sm text-gray-600">Years in Business</p>
              </div>
              <div class="text-center p-4 border border-gray-200 rounded-lg">
                <p class="text-3xl font-bold mb-2">150+</p>
                <p class="text-sm text-gray-600">Team Members</p>
              </div>
              <div class="text-center p-4 border border-gray-200 rounded-lg">
                <p class="text-3xl font-bold mb-2">500+</p>
                <p class="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div class="text-center p-4 border border-gray-200 rounded-lg">
                <p class="text-3xl font-bold mb-2">30+</p>
                <p class="text-sm text-gray-600">Countries Served</p>
              </div>
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
    content: {
      overview:
        "We collaborate with leading companies across industries to deliver exceptional solutions. Our strategic partnerships enable us to provide comprehensive services and stay at the forefront of technology trends.",
      sections: [
        {
          type: "custom",
          title: "Technology Partners",
          content: `
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div class="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-24">
                <p class="font-bold text-xl">Microsoft</p>
              </div>
              <div class="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-24">
                <p class="font-bold text-xl">Google</p>
              </div>
              <div class="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-24">
                <p class="font-bold text-xl">Amazon</p>
              </div>
              <div class="border border-gray-200 p-6 rounded-lg flex items-center justify-center h-24">
                <p class="font-bold text-xl">Salesforce</p>
              </div>
            </div>
          `,
        },
        {
          type: "custom",
          title: "Industry Partnerships",
          content: `
            <div class="prose max-w-none mb-6">
              <p>We partner with industry leaders to combine our technical expertise with domain knowledge, creating solutions that address specific industry challenges.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-gray-100 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Healthcare</h4>
                <p class="text-sm">Partnering with healthcare providers to develop innovative patient care solutions.</p>
              </div>
              <div class="bg-gray-100 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Finance</h4>
                <p class="text-sm">Collaborating with financial institutions to create secure and efficient systems.</p>
              </div>
              <div class="bg-gray-100 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Retail</h4>
                <p class="text-sm">Working with retailers to enhance customer experiences and streamline operations.</p>
              </div>
            </div>
          `,
        },
        {
          type: "features",
          title: "Partnership Benefits",
          items: [
            "Access to cutting-edge technologies",
            "Industry-specific expertise",
            "Comprehensive solution offerings",
            "Enhanced service capabilities",
            "Collaborative innovation",
          ],
        },
        {
          type: "custom",
          title: "Become a Partner",
          content: `
            <div class="border-l-4 border-black pl-4">
              <p class="mb-4">We're always open to new partnership opportunities that align with our values and vision.</p>
              <p class="mb-4">If you're interested in exploring a partnership with us, please contact our partnership team to discuss potential collaboration opportunities.</p>
              <button class="bg-black text-white px-6 py-2 rounded">Contact Partnership Team</button>
            </div>
          `,
        },
      ],
    },
  },
]
