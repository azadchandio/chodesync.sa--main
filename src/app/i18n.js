import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // Configuration options
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            services: 'Services',
            aboutUs: 'About Us',
            contactUs: 'Contact us'
          }, 
          header: {
            getStarted: 'Get Start'
          },
          hero: {
            title: "We help businesses innovate, ",
            subtitle: "optimize, and scale efficiently",
            description: "We help businesses innovate, optimize, and scale efficiently",
            getStarted: "Get Started"
          },
          features: {
            title: "Explore Our",
            titleHighlight: "Innovative Features",
            items: {
              aiAnalytics: {
                title: "AI & Data Analytics",
                content: "Harness the power of AI-driven insights to optimize decision-making and drive business growth."
              },
              appsDev: {
                title: "Apps & Bots Development",
                content: "Build intelligent applications and automation bots to streamline operations and enhance user engagement."
              },
              itStaffing: {
                title: "IT Staffing",
                content: "Access top-tier tech talent to scale your projects with expert developers, engineers, and AI specialists."
              },
              aiConsultancy: {
                title: "AI Consultancy",
                content: "Get expert guidance on AI strategy, implementation, and integration tailored to your business needs."
              }
            }
          },   
          solution: {
            title: "Customized Onboarding &",
            titleHighlight: "AI Training",
            section1: {
              title: "AI Support, Training & Process Optimization",
              description: "Enhance your business with expert AI support, tailored training programs, and process optimization to drive efficiency and innovation.",
              learnMore: "Learn More"
            },
            section2: {
              title: "Why Choose Codecync?",
              description: "At Codecync, we don’t just build AI solutions—we craft intelligent, data-driven strategies that align with your business goals. Our team of experts ensures seamless integration, robust automation, and continuous innovation to keep you ahead of the competition. Whether you need AI-powered automation, custom machine learning models, or end-to-end consultancy, we provide tailored solutions that drive efficiency, scalability, and growth.",
              learnMore: "Learn More",
              features: {
                automation: {
                  title: "AI-Powered Automation",
                  description: "Streamline workflows and enhance efficiency with intelligent automation tailored to your business needs."
                },
                ml: {
                  title: "Custom Machine Learning Models",
                  description: "Leverage advanced AI models designed specifically to solve your industry challenges."
                },
                chatbots: {
                  title: "Conversational AI & Chatbots",
                  description: "Engage customers 24/7 with smart chatbots and voice assistants that deliver seamless interactions."
                },
                consultancy: {
                  title: "End-to-End AI Consultancy",
                  description: "From strategy to implementation, we provide full-scale AI consulting to align with your business goals."
                }
              }
            }
          },  
          faq: {
            title:'Frequently Asked',
            titleHighlight: 'Questions',
            questions: {
              q1: {
                question: "What industries can benefit from AI solutions?",
                answer: "AI can enhance businesses across various industries, including healthcare, finance, e-commerce, real estate, and more by improving automation, decision-making, and customer experience."
              },
              q2: {
                question: "How long does it take to implement an AI solution?",
                answer: "The timeline depends on the complexity of the project. Simple AI automation can take a few weeks, while advanced solutions like machine learning models may take several months."
              },
              q3: {
                question: "Do I need technical expertise to use AI in my business?",
                answer: "No, our AI solutions are designed to be user-friendly. We provide full support, training, and seamless integration to ensure smooth adoption."
              },
              q4: {
                question: "Can AI be customized for my business needs?",
                answer: "Absolutely! We develop tailor-made AI solutions to fit your unique business challenges and goals."
              },
              q5: {
                question: "How does Codecync ensure data security in AI solutions?",
                answer: "We follow strict security protocols, including data encryption, access controls, and compliance with industry standards to keep your data safe."
              }
            }
          },   
          servicesPage: {
            title: "Our AI-Powered Services",
            subtitle: "Innovative solutions tailored to your business needs",
            
            aiAnalytics: {
              overview: {
                title: "AI & Data Analytics",
                subtitle: "Data-driven insights for smarter decisions",
                description: "Leverage AI-driven insights to optimize decision-making and accelerate business growth"
              },
              features: {
                f1: "Advanced data analytics for predictive insights",
                f2: "Real-time business intelligence dashboards",
                f3: "AI-powered decision automation"
              },
              "benefits": {
                "title": "Benefits of AI Analytics",
                "items": [
                  { "title": "Enhanced Decision-Making", "description": "Gain data-driven insights to optimize business strategies and make informed decisions." },
                  { "title": "Accurate Predictions", "description": "Use machine learning algorithms to predict future trends and minimize risks." },
                  { "title": "Increased Efficiency", "description": "Automate processes and analyze data faster, saving time and resources." }
                ]
              },
              "process": {
                "title": "How We Implement AI Analytics",
                "steps": [
                  { "title": "Data Analysis", "description": "We collect and analyze your data to identify patterns and trends." },
                  { "title": "Model Development", "description": "We build customized AI models tailored to your business needs." },
                  { "title": "Integration & Deployment", "description": "Seamlessly integrate AI solutions into your existing processes for optimal performance." },
                  { "title": "Monitoring & Improvement", "description": "We continuously monitor performance and refine models over time for better accuracy." }
                ]
              }
            },
          
            development: {
              overview: {
                title: "Apps & Bots Development",
                subtitle: "Smart applications for seamless automation",
                description: "Build intelligent applications and automation bots to streamline operations and enhance user engagement"
              },
              features: {
                f1: "Custom AI-driven software solutions",
                f2: "Seamless API integration for automation",
                f3: "Cross-platform mobile and web applications"
              },
             "benefits": {
                "title": "Why Choose Our Development Services?",
                "items": [
                  { "title": "Custom Solutions", "description": "Tailored development that aligns with your business objectives." },
                  { "title": "Scalability & Security", "description": "Robust and future-proof applications that grow with your business." },
                  { "title": "Seamless Integration", "description": "Effortless connectivity with your existing software ecosystem." }
                ]
              },
              "process": {
                "title": "Our Development Process",
                "steps": [
                  { "title": "Requirement Analysis", "description": "Understanding your business needs and defining project scope." },
                  { "title": "Design & Prototyping", "description": "Creating UI/UX designs and interactive prototypes for feedback." },
                  { "title": "Development & Testing", "description": "Building the solution and ensuring quality through rigorous testing." },
                  { "title": "Deployment & Support", "description": "Launching the product and providing continuous maintenance." }
                ]
              } 
            },
          
            staffing: {
              overview: {
                title: "IT Staffing Solutions",
                subtitle: "Top-tier tech talent for your business",
                description: "Access expert AI developers, engineers, and consultants to scale your projects efficiently"
              },
              features: {
                f1: "On-demand AI and software engineers",
                f2: "Flexible staffing for short-term and long-term projects",
                f3: "Expert consultation and technical support"
              },
              "benefits": {
                "title": "Why Choose Our Staffing Services?",
                "items": [
                  { "title": "Top-Tier Talent", "description": "We connect you with highly skilled professionals suited to your needs." },
                  { "title": "Flexible Hiring", "description": "Whether temporary, permanent, or project-based, we cater to your workforce needs." },
                  { "title": "Industry Expertise", "description": "Our specialized recruitment ensures you get the best talent in your industry." }
                ]
              },
              "process": {
                "title": "Our Staffing Process",
                "steps": [
                  { "title": "Needs Assessment", "description": "Understanding your workforce requirements and job roles." },
                  { "title": "Talent Sourcing", "description": "Finding the right candidates through extensive networks and screening." },
                  { "title": "Evaluation & Interviews", "description": "Conducting rigorous assessments to ensure top-quality hiring." },
                  { "title": "Onboarding & Support", "description": "Seamless integration of new hires into your organization." }
                ]
              }
            },
          
            consultancy: {
              overview: {
                title: "AI Consultancy",
                subtitle: "Strategic AI implementation for your business",
                description: "Get expert guidance on AI strategy, implementation, and integration tailored to your business needs"
              },
              features: {
                f1: "End-to-end AI strategy and implementation",
                f2: "Machine learning model development",
                f3: "Ongoing AI support and optimization"
              },
              "benefits": {
                "title": "Why Choose Our Consultancy Services?",
                "items": [
                  { "title": "Strategic Planning", "description": "Develop customized strategies to meet your business goals effectively." },
                  { "title": "Operational Efficiency", "description": "Streamline business processes to reduce costs and maximize efficiency." },
                  { "title": "Expert Guidance", "description": "Leverage insights from industry professionals to drive business growth." }
                ]
              },
              "process": {
                "title": "Our Consultancy Approach",
                "steps": [
                  { "title": "Understanding Your Business", "description": "We assess your business structure, challenges, and goals." },
                  { "title": "Developing a Strategy", "description": "We create a tailored action plan to address key areas for improvement." },
                  { "title": "Implementation Support", "description": "We guide you through executing strategies for optimal results." },
                  { "title": "Continuous Monitoring", "description": "We provide ongoing support and adjustments to ensure long-term success." }
                ]
              }
            }
          },
          "aboutPage": {
            "hero": {
              "title": "About Us",
              "subtitle": "Who We Are and What We Do",
              "description": "We are committed to delivering innovative solutions that empower businesses and individuals to achieve their goals."
            },
            "mission": {
              "title": "Our Mission",
              "description": "We strive to create high-quality services that drive success and innovation.",
              "points": [
                { "title": "Innovation", "description": "We continuously explore new ideas and technologies to stay ahead." },
                { "title": "Excellence", "description": "Our focus is on delivering the best solutions tailored to your needs." },
                { "title": "Collaboration", "description": "We believe in teamwork and partnerships that foster growth." }
              ]
            },
            "values": {
              "title": "Our Core Values",
              "items": [
                { "title": "Integrity", "description": "We uphold honesty and transparency in all our dealings." },
                { "title": "Customer First", "description": "Our customers' success is our top priority." },
                { "title": "Continuous Growth", "description": "We encourage learning and self-improvement at every level." }
              ]
            },
            "team": {
              "title": "Meet Our Team",
              "description": "A team of dedicated professionals committed to excellence.",
              "members": [
                { "name": "John Doe", "role": "CEO", "bio": "Leading with vision and passion for innovation." },
                { "name": "Jane Smith", "role": "CTO", "bio": "Driving technology and digital transformation." },
                { "name": "Emily Johnson", "role": "CMO", "bio": "Crafting strategies that enhance our brand's reach." }
              ]
            },
            "teamPage": {
              "hero": {
                "title": "Meet Our Team",
                "subtitle": "The People Behind Our Success",
                "description": "Our team consists of passionate professionals dedicated to delivering excellence across various domains."
              },
              "departments": {
                "title": "Our Departments",
                "description": "Each department plays a vital role in our organization's success.",
                "items": [
                  {
                    "name": "Engineering",
                    "description": "Building innovative and scalable solutions.",
                    "members": [
                      { 
                        "name": "John Doe", 
                        "role": "Lead Engineer", 
                        "bio": "Expert in full-stack development with a passion for scalable architectures.", 
                        "image": "john-doe.jpg",
                        "expertise": ["React", "Node.js", "AWS"]
                      },
                      { 
                        "name": "Jane Smith", 
                        "role": "Software Engineer", 
                        "bio": "Loves solving complex problems with efficient code.", 
                        "image": "jane-smith.jpg",
                        "expertise": ["Python", "Django", "PostgreSQL"]
                      }
                    ]
                  },
                  {
                    "name": "Marketing",
                    "description": "Spreading the word and engaging our audience.",
                    "members": [
                      { 
                        "name": "Emily Johnson", 
                        "role": "Marketing Manager", 
                        "bio": "Specialist in brand growth and digital campaigns.", 
                        "image": "emily-johnson.jpg",
                        "expertise": ["SEO", "Social Media", "Google Ads"]
                      }
                    ]
                  }
                ]
              },
              "joinTeam": {
                "title": "Join Our Team",
                "description": "We are always looking for talented individuals to join us.",
                "benefits": [
                  { "title": "Career Growth", "description": "Opportunities to learn and grow in a dynamic environment." },
                  { "title": "Work-Life Balance", "description": "Flexible schedules and a supportive culture." },
                  { "title": "Competitive Salary", "description": "We offer industry-leading compensation." }
                ]
              }
            }
          },       
          "about": {
            "events": {
              "title": "Our Events",
              "subtitle": "Stay updated with our latest events and gatherings.",
              "intro": {
                "title": "Explore Our Events",
                "description": "Join us in various events, meet industry experts, and expand your network."
              },
              "list": {
                "e1": {
                  "title": "Tech Innovation Summit",
                  "date": "March 15, 2025",
                  "location": "Dubai, UAE",
                  "description": "Join the biggest tech summit to explore AI, blockchain, and emerging technologies."
                },
                "e2": {
                  "title": "Marketing Mastery Conference",
                  "date": "April 10, 2025",
                  "location": "London, UK",
                  "description": "Learn from the top marketing professionals on growth strategies and branding."
                },
                "e3": {
                  "title": "Startup Growth Workshop",
                  "date": "May 5, 2025",
                  "location": "New York, USA",
                  "description": "A hands-on workshop for startups looking to scale and attract investors."
                }
              },
              "register": "Register Now",
              "upcoming": {
                "title": "Upcoming Events",
                "description": "Don't miss out on our future events. Stay tuned!",
                "subscribe": "Subscribe for Updates"
              }
            }
          },   
          "careersPage": {
            "hero": {
              "title": "Join Our Team",
              "subtitle": "Explore opportunities to grow with us.",
              "description": "We believe in empowering our employees with the right resources, challenges, and opportunities to excel."
            },
            "overview": {
              "title": "Why Join Us?",
              "description": "We offer a dynamic and inclusive workplace where your skills and contributions are valued.",
              "benefits": [
                {
                  "title": "Competitive Salary",
                  "description": "We offer market-competitive salaries and bonuses."
                },
                {
                  "title": "Flexible Work Hours",
                  "description": "We believe in a healthy work-life balance."
                },
                {
                  "title": "Career Growth",
                  "description": "Opportunities to learn, grow, and develop your skills."
                },
                {
                  "title": "Health Benefits",
                  "description": "Comprehensive health and wellness programs."
                }
              ]
            },
            "positions": {
              "title": "Open Positions",
              "description": "Explore our available roles and find the one that suits you best.",
              "categories": [
                {
                  "name": "Engineering",
                  "roles": [
                    {
                      "title": "Software Engineer",
                      "type": "Full-Time",
                      "location": "Remote",
                      "description": "Develop and maintain high-quality applications.",
                      "requirements": [
                        "3+ years of experience in software development.",
                        "Proficiency in React.js and Node.js.",
                        "Experience with cloud technologies."
                      ]
                    },
                    {
                      "title": "DevOps Engineer",
                      "type": "Full-Time",
                      "location": "Dubai, UAE",
                      "description": "Manage and optimize cloud infrastructure.",
                      "requirements": [
                        "Experience with AWS and Kubernetes.",
                        "Knowledge of CI/CD pipelines.",
                        "Strong scripting skills."
                      ]
                    }
                  ]
                },
                {
                  "name": "Marketing",
                  "roles": [
                    {
                      "title": "Digital Marketing Specialist",
                      "type": "Full-Time",
                      "location": "London, UK",
                      "description": "Create and manage online marketing campaigns.",
                      "requirements": [
                        "Experience in SEO and SEM.",
                        "Strong analytical skills.",
                        "Knowledge of social media advertising."
                      ]
                    }
                  ]
                }
              ]
            },
            "application": {
              "title": "Application Process",
              "steps": [
                {
                  "title": "Submit Your Application",
                  "description": "Apply online with your updated resume."
                },
                {
                  "title": "Initial Screening",
                  "description": "Our team reviews your application and contacts shortlisted candidates."
                },
                {
                  "title": "Interview Process",
                  "description": "Attend interviews to discuss your skills and experience."
                },
                {
                  "title": "Final Offer",
                  "description": "If selected, you will receive a formal job offer."
                }
              ]
            }
          },     
          "contactPage": {
            "hero": {
              "title": "Contact",
              "subtitle": "Us",
              "content": "Got questions? Reach out! We're here and ready to assist."
            }
          },
          "contactForm": {
            "title": "Get",
            "titleHighlight": "in Touch",
            "description": "OpenAI presented Assistify with a range of challenging tasks...",
            "contactPerson": {
              "name": "John Lawson",
              "position": "Member of Technical Staff"
            },
            "trustedBy": "Trusted by the world's most ambitious teams",
            "formTitle": "Quick Responses Await!",
            "formSubtitle": "Connect with us! Feel free to ask any questions...",
            "fields": {
              "firstName": "First Name*",
              "lastName": "Last Name*",
              "companyName": "Company Name*",
              "jobTitle": "Job Title*",
              "emailAddress": "Email Address*",
              "phoneNumber": "Phone Number*",
              "message": "How can we help?"
            },
            "agreement": "I read and accept terms and conditions, privacy policy.",
            "submitButton": "Submit"
          },
          "services": {
            "aiDataAnalytics": "AI Data Analytics",
            "appsDevelopment": "App Development",
            "itStaffing": "IT Staffing",
            "aiConsultancy": "AI Consultancy"
          },
          footer: {
            description: "Codecync specializes in AI-driven solutions, automation, and data analytics to help businesses innovate, optimize, and scale efficiently",
            services: {
              title: "Services",
              aiDataAnalytics: "AI & Data Analytics",
              appsDevelopment: "Apps Development",
              itStaffing: "IT Staffing",
              aiConsultancy: "AI Consultancy"
            },
            about: {
              title: "About Us",
              partners: "Our Partners",
              team: "Our Team",
              careers: "Careers",
              events: "Events"
            },
            extra: {
              title: "Extra",
              contactUs: "Contact Us",
              pdpl: "PDPL",
              terms: "Terms & Conditions",
              privacy: "Privacy Policy"
            },
            copyright: "Copyright © 2025 Codecync. All rights reserved.",
            links: {
              terms: "Terms of Service",
              privacy: "Privacy Policy"
            }
          },
          
        }
      },
      ar: {
        translation: {
          nav: {
            home: 'الرئيسية',
            services: 'الخدمات',
            aboutUs: 'من نحن',
            contactUs: 'اتصل بنا'
          },
          header: {
            getStarted: "ابدأ الآن"
          },
          hero: {
            title: "نساعد الشركات على الابتكار،",
            subtitle: "تحسين الأداء والتوسع بكفاءة",
            description: "نساعد الشركات على الابتكار، وتحسين الأداء، والتوسع بكفاءة",
            getStarted: "ابدأ الآن"
          },     
          features: {
            title: "استكشف",
            titleHighlight: "ميزاتنا المبتكرة"
          },
          features: {
            title: "استكشف",
            titleHighlight: "ميزاتنا المبتكرة",
            items: {
              aiAnalytics: {
                title: "تحليل البيانات والذكاء الاصطناعي",
                content: "استفد من رؤى الذكاء الاصطناعي لتحسين اتخاذ القرار وتعزيز نمو الأعمال."
              },
              appsDev: {
                title: "تطوير التطبيقات والروبوتات",
                content: "قم ببناء تطبيقات ذكية وروبوتات أتمتة لتبسيط العمليات وتحسين تفاعل المستخدم."
              },
              itStaffing: {
                title: "توظيف تقنية المعلومات",
                content: "احصل على أفضل المواهب التقنية لتوسيع مشاريعك مع مطورين ومهندسين ومتخصصي الذكاء الاصطناعي."
              },
              aiConsultancy: {
                title: "استشارات الذكاء الاصطناعي",
                content: "احصل على إرشادات الخبراء حول استراتيجيات الذكاء الاصطناعي وتنفيذها ودمجها وفقًا لاحتياجات عملك."
              }
            }
          },
          solution: {
            title: "الإعداد المخصص و",
            titleHighlight: "تدريب الذكاء الاصطناعي",
            section1: {
              title: "دعم الذكاء الاصطناعي، التدريب وتحسين العمليات",
              description: "عزز أعمالك من خلال دعم الذكاء الاصطناعي المتخصص، وبرامج التدريب المصممة خصيصًا، وتحسين العمليات لزيادة الكفاءة والابتكار.",
              learnMore: "اعرف المزيد"
            },
            section2: {
              title: "لماذا تختار كودسينك؟",
              description: "في كودسينك، لا نقوم فقط ببناء حلول الذكاء الاصطناعي، بل نصمم استراتيجيات ذكية قائمة على البيانات تتماشى مع أهداف عملك. يضمن فريقنا من الخبراء تكاملاً سلسًا، وأتمتة قوية، وابتكارًا مستمرًا لإبقائك في مقدمة المنافسة. سواء كنت بحاجة إلى أتمتة مدعومة بالذكاء الاصطناعي، أو نماذج تعلم آلي مخصصة، أو استشارات شاملة، فإننا نوفر حلولًا مخصصة تعزز الكفاءة، وقابلية التوسع، والنمو.",
              learnMore: "اعرف المزيد",
              features: {
                automation: {
                  title: "الأتمتة المدعومة بالذكاء الاصطناعي",
                  description: "قم بتبسيط سير العمل وزيادة الكفاءة باستخدام الأتمتة الذكية المصممة خصيصًا لتلبية احتياجات عملك."
                },
                ml: {
                  title: "نماذج التعلم الآلي المخصصة",
                  description: "استفد من نماذج الذكاء الاصطناعي المتقدمة المصممة خصيصًا لحل تحديات مجالك."
                },
                chatbots: {
                  title: "الذكاء الاصطناعي الحواري والدردشة الآلية",
                  description: "تفاعل مع العملاء على مدار الساعة من خلال روبوتات الدردشة والمساعدين الصوتيين الذكيين الذين يقدمون تجارب سلسة."
                },
                consultancy: {
                  title: "الاستشارات الشاملة في الذكاء الاصطناعي",
                  description: "من الاستراتيجية إلى التنفيذ، نقدم استشارات ذكاء اصطناعي متكاملة تتماشى مع أهداف عملك."
                }
              }
            }
          },          
          faq: {
             "title": "الأسئلة",
            "titleHighlight": "الشائعة",
            questions: {
              q1: {
                question: "ما هي الصناعات التي يمكن أن تستفيد من حلول الذكاء الاصطناعي؟",
                answer: "يمكن للذكاء الاصطناعي تحسين الأعمال في مختلف الصناعات، بما في ذلك الرعاية الصحية، والتمويل، والتجارة الإلكترونية، والعقارات، من خلال تحسين الأتمتة واتخاذ القرار وتجربة العملاء."
              },
              q2: {
                question: "كم من الوقت يستغرق تنفيذ حل الذكاء الاصطناعي؟",
                answer: "يعتمد الجدول الزمني على تعقيد المشروع. يمكن أن تستغرق الأتمتة البسيطة بضعة أسابيع، بينما قد تستغرق الحلول المتقدمة مثل نماذج التعلم الآلي عدة أشهر."
              },
              q3: {
                question: "هل أحتاج إلى خبرة تقنية لاستخدام الذكاء الاصطناعي في عملي؟",
                answer: "لا، تم تصميم حلول الذكاء الاصطناعي الخاصة بنا لتكون سهلة الاستخدام. نحن نوفر الدعم الكامل والتدريب والتكامل السلس لضمان التبني السهل."
              },
              q4: {
                question: "هل يمكن تخصيص الذكاء الاصطناعي ليناسب احتياجات عملي؟",
                answer: "بالتأكيد! نقوم بتطوير حلول ذكاء اصطناعي مخصصة لتناسب تحديات وأهداف عملك الفريدة."
              },
              q5: {
                question: "كيف تضمن Codecync أمان البيانات في حلول الذكاء الاصطناعي؟",
                answer: "نتبع بروتوكولات أمان صارمة، بما في ذلك تشفير البيانات، وضوابط الوصول، والامتثال للمعايير الصناعية للحفاظ على أمان بياناتك."
              }
            }
          },    
          servicesPage: {
            title: "خدماتنا المدعومة بالذكاء الاصطناعي",
            subtitle: "حلول مبتكرة مصممة خصيصًا لاحتياجات عملك",
            
            aiAnalytics: {
              overview: {
                title: "تحليلات البيانات والذكاء الاصطناعي",
                subtitle: "رؤى قائمة على البيانات لاتخاذ قرارات أذكى",
                description: "استفد من التحليلات المدعومة بالذكاء الاصطناعي لتحسين عملية اتخاذ القرار وتسريع نمو الأعمال"
              },
              features: {
                f1: "تحليلات بيانات متقدمة لتوفير رؤى تنبؤية",
                f2: "لوحات معلومات ذكاء الأعمال في الوقت الفعلي",
                f3: "أتمتة اتخاذ القرار بالذكاء الاصطناعي"
              },
              "benefits": {
                "title": "فوائد تحليلات الذكاء الاصطناعي",
                "items": [
                  { "title": "تحسين اتخاذ القرار", "description": "احصل على رؤى تعتمد على البيانات لتحسين استراتيجيات عملك واتخاذ قرارات مستنيرة." },
                  { "title": "توقعات دقيقة", "description": "استخدم خوارزميات التعلم الآلي للتنبؤ بالاتجاهات المستقبلية وتقليل المخاطر." },
                  { "title": "تحسين الكفاءة", "description": "أتمتة العمليات وتحليل البيانات بسرعة أكبر لتوفير الوقت والموارد." }
                ]
              },
              "process": {
                "title": "كيف نطبق تحليلات الذكاء الاصطناعي؟",
                "steps": [
                  { "title": "تحليل البيانات", "description": "نقوم بجمع وتحليل البيانات الخاصة بك لتحديد الأنماط والاتجاهات." },
                  { "title": "تطوير النموذج", "description": "نبني نماذج الذكاء الاصطناعي المخصصة لتلبية احتياجات عملك." },
                  { "title": "التكامل والتنفيذ", "description": "نقوم بدمج الحلول بسلاسة مع عملياتك الحالية لتحقيق أفضل أداء." },
                  { "title": "المراقبة والتحسين", "description": "نقوم بمراقبة الأداء وتحسين النماذج بمرور الوقت لضمان نتائج دقيقة." }
                ]
              }
            },
          
            development: {
              overview: {
                title: "تطوير التطبيقات والروبوتات",
                subtitle: "تطبيقات ذكية لأتمتة سلسة",
                description: "قم ببناء تطبيقات ذكية وروبوتات أتمتة لتحسين العمليات وتعزيز تفاعل المستخدم"
              },
              features: {
                f1: "حلول برمجية مخصصة مدعومة بالذكاء الاصطناعي",
                f2: "تكامل واجهات برمجة التطبيقات لأتمتة العمليات",
                f3: "تطبيقات متوافقة مع الأجهزة المحمولة والويب"
              },
              "benefits": {
                "title": "لماذا تختار خدمات التطوير لدينا؟",
                "items": [
                  { "title": "حلول مخصصة", "description": "تطوير مخصص يتماشى مع أهداف عملك." },
                  { "title": "القابلية للتوسع والأمان", "description": "تطبيقات قوية ومستقبلية تنمو مع عملك." },
                  { "title": "تكامل سلس", "description": "ربط سهل مع بيئة البرمجيات الحالية الخاصة بك." }
                ]
              },
              "process": {
                "title": "عملية التطوير لدينا",
                "steps": [
                  { "title": "تحليل المتطلبات", "description": "فهم احتياجات عملك وتحديد نطاق المشروع." },
                  { "title": "التصميم والنمذجة", "description": "إنشاء تصاميم UI/UX ونماذج تفاعلية للتقييم." },
                  { "title": "التطوير والاختبار", "description": "بناء الحل وضمان الجودة من خلال اختبارات دقيقة." },
                  { "title": "النشر والدعم", "description": "إطلاق المنتج وتقديم الصيانة المستمرة." }
                ]
              }
            },
          
            staffing: {
              overview: {
                title: "حلول توظيف تقنية المعلومات",
                subtitle: "أفضل المواهب التقنية لعملك",
                description: "الوصول إلى مطوري الذكاء الاصطناعي والمهندسين والمستشارين الخبراء لتوسيع نطاق مشاريعك بكفاءة"
              },
              features: {
                f1: "توظيف مهندسي برمجيات وذكاء اصطناعي عند الطلب",
                f2: "توظيف مرن للمشاريع قصيرة وطويلة المدى",
                f3: "الاستشارات التقنية والدعم الفني"
              },
              "benefits": {
                "title": "لماذا تختار خدمات التوظيف لدينا؟",
                "items": [
                  { "title": "أفضل المواهب", "description": "نربطك بمحترفين ذوي مهارات عالية تتناسب مع احتياجاتك." },
                  { "title": "توظيف مرن", "description": "سواء كان مؤقتًا أو دائمًا أو قائمًا على المشاريع، فإننا نوفر احتياجاتك." },
                  { "title": "خبرة صناعية", "description": "يضمن التوظيف المتخصص لدينا حصولك على أفضل المواهب في مجالك." }
                ]
              },
              "process": {
                "title": "عملية التوظيف لدينا",
                "steps": [
                  { "title": "تقييم الاحتياجات", "description": "فهم متطلبات القوى العاملة لديك وأدوار الوظائف." },
                  { "title": "البحث عن المواهب", "description": "العثور على المرشحين المناسبين من خلال شبكات واسعة وفحص دقيق." },
                  { "title": "التقييم والمقابلات", "description": "إجراء تقييمات صارمة لضمان التوظيف بجودة عالية." },
                  { "title": "الاندماج والدعم", "description": "دمج الموظفين الجدد بسلاسة في مؤسستك." }
                ]
              }
            },
          
            consultancy: {
              overview: {
                title: "استشارات الذكاء الاصطناعي",
                subtitle: "تنفيذ استراتيجي للذكاء الاصطناعي في عملك",
                description: "احصل على إرشادات خبراء حول استراتيجية الذكاء الاصطناعي، وتنفيذه، ودمجه بما يتناسب مع احتياجات عملك"
              },
              features: {
                f1: "استراتيجية وتنفيذ شامل للذكاء الاصطناعي",
                f2: "تطوير نماذج تعلم آلي متقدمة",
                f3: "دعم وتحسين مستمر للذكاء الاصطناعي"
              },
              "benefits": {
                "title": "لماذا تختار خدماتنا الاستشارية؟",
                "items": [
                  { "title": "التخطيط الاستراتيجي", "description": "تطوير استراتيجيات مخصصة لتحقيق أهداف عملك بفعالية." },
                  { "title": "تحسين الكفاءة التشغيلية", "description": "تبسيط العمليات التجارية لتقليل التكاليف وزيادة الإنتاجية." },
                  { "title": "إرشاد الخبراء", "description": "الاستفادة من رؤى المحترفين في المجال لدفع عجلة نمو الأعمال." }
                ]
              },
              "process": {
                "title": "منهجية استشاراتنا",
                "steps": [
                  { "title": "فهم عملك", "description": "نقوم بتقييم هيكل عملك، والتحديات التي تواجهها، وأهدافك." },
                  { "title": "تطوير استراتيجية", "description": "نقوم بإنشاء خطة عمل مخصصة لمعالجة المجالات الرئيسية للتحسين." },
                  { "title": "دعم التنفيذ", "description": "نرشدك خلال تنفيذ الاستراتيجيات لتحقيق أفضل النتائج." },
                  { "title": "المتابعة المستمرة", "description": "نقدم دعمًا مستمرًا وتعديلات لضمان النجاح طويل الأمد." }
                ]
              }
            }
          },      
          "aboutPage": {
            "hero": {
              "title": "من نحن",
              "subtitle": "من نحن وماذا نفعل",
              "description": "نحن ملتزمون بتقديم حلول مبتكرة تمكّن الشركات والأفراد من تحقيق أهدافهم."
            },
            "mission": {
              "title": "رسالتنا",
              "description": "نسعى جاهدين لإنشاء خدمات عالية الجودة تدفع النجاح والابتكار.",
              "points": [
                { "title": "الابتكار", "description": "نستكشف باستمرار أفكارًا وتقنيات جديدة للبقاء في المقدمة." },
                { "title": "التميز", "description": "نركز على تقديم أفضل الحلول المصممة خصيصًا لاحتياجاتك." },
                { "title": "التعاون", "description": "نؤمن بروح الفريق والشراكات التي تعزز النمو." }
              ]
            },
            "values": {
              "title": "قيمنا الأساسية",
              "items": [
                { "title": "النزاهة", "description": "نلتزم بالصدق والشفافية في جميع تعاملاتنا." },
                { "title": "العميل أولًا", "description": "نجاح عملائنا هو أولويتنا القصوى." },
                { "title": "النمو المستمر", "description": "نشجع التعلم والتطوير الذاتي في كل مستوى." }
              ]
            },
            "team": {
              "title": "تعرف على فريقنا",
              "description": "فريق من المهنيين المتفانين الملتزمين بالتميز.",
              "members": [
                { "name": "جون دو", "role": "المدير التنفيذي", "bio": "يقود برؤية وشغف للابتكار." },
                { "name": "جين سميث", "role": "مدير التكنولوجيا", "bio": "يدفع التكنولوجيا والتحول الرقمي." },
                { "name": "إميلي جونسون", "role": "مدير التسويق", "bio": "تصيغ استراتيجيات تعزز وصول علامتنا التجارية." }
              ]
            },
            "teamPage": {
              "hero": {
                "title": "تعرف على فريقنا",
                "subtitle": "الأشخاص وراء نجاحنا",
                "description": "يتكون فريقنا من محترفين متحمسين ملتزمين بتقديم التميز في مختلف المجالات."
              },
              "departments": {
                "title": "أقسامنا",
                "description": "يلعب كل قسم دورًا أساسيًا في نجاح منظمتنا.",
                "items": [
                  {
                    "name": "الهندسة",
                    "description": "تطوير حلول مبتكرة وقابلة للتطوير.",
                    "members": [
                      { 
                        "name": "جون دو", 
                        "role": "مهندس رئيسي", 
                        "bio": "خبير في تطوير التطبيقات الكاملة مع شغف للهياكل القابلة للتطوير.", 
                        "image": "john-doe.jpg",
                        "expertise": ["React", "Node.js", "AWS"]
                      },
                      { 
                        "name": "جين سميث", 
                        "role": "مهندس برمجيات", 
                        "bio": "يحب حل المشكلات المعقدة بكود فعال.", 
                        "image": "jane-smith.jpg",
                        "expertise": ["Python", "Django", "PostgreSQL"]
                      }
                    ]
                  },
                  {
                    "name": "التسويق",
                    "description": "نشر الوعي والتفاعل مع جمهورنا.",
                    "members": [
                      { 
                        "name": "إميلي جونسون", 
                        "role": "مدير التسويق", 
                        "bio": "متخصصة في نمو العلامة التجارية والحملات الرقمية.", 
                        "image": "emily-johnson.jpg",
                        "expertise": ["SEO", "وسائل التواصل الاجتماعي", "إعلانات جوجل"]
                      }
                    ]
                  }
                ]
              },
              "joinTeam": {
                "title": "انضم إلى فريقنا",
                "description": "نحن نبحث دائمًا عن أفراد موهوبين للانضمام إلينا.",
                "benefits": [
                  { "title": "النمو الوظيفي", "description": "فرص التعلم والنمو في بيئة ديناميكية." },
                  { "title": "التوازن بين العمل والحياة", "description": "جداول مرنة وثقافة داعمة." },
                  { "title": "راتب تنافسي", "description": "نقدم تعويضات تنافسية في المجال." }
                ]
              }
            }
          },     
          "about": {
            "events": {
              "title": "فعالياتنا",
              "subtitle": "ابقَ على اطلاع على أحدث الفعاليات والتجمعات.",
              "intro": {
                "title": "استكشف فعالياتنا",
                "description": "انضم إلينا في مختلف الفعاليات، قابل خبراء الصناعة، وقم بتوسيع شبكة علاقاتك."
              },
              "list": {
                "e1": {
                  "title": "قمة الابتكار التقني",
                  "date": "15 مارس 2025",
                  "location": "دبي، الإمارات",
                  "description": "انضم إلى أكبر قمة تقنية لاستكشاف الذكاء الاصطناعي، البلوك تشين، والتقنيات الناشئة."
                },
                "e2": {
                  "title": "مؤتمر إتقان التسويق",
                  "date": "10 أبريل 2025",
                  "location": "لندن، المملكة المتحدة",
                  "description": "تعلم من كبار محترفي التسويق حول استراتيجيات النمو وبناء العلامات التجارية."
                },
                "e3": {
                  "title": "ورشة عمل نمو الشركات الناشئة",
                  "date": "5 مايو 2025",
                  "location": "نيويورك، الولايات المتحدة",
                  "description": "ورشة عملية للشركات الناشئة التي تتطلع إلى التوسع وجذب المستثمرين."
                }
              },
              "register": "سجل الآن",
              "upcoming": {
                "title": "الفعاليات القادمة",
                "description": "لا تفوّت فعالياتنا المستقبلية. تابعنا!",
                "subscribe": "اشترك لتصلك التحديثات"
              }
            }
          },
          "careersPage": {
            "hero": {
              "title": "انضم إلى فريقنا",
              "subtitle": "استكشف الفرص للنمو معنا.",
              "description": "نحن نؤمن بتمكين موظفينا من خلال توفير الموارد المناسبة والتحديات والفرص للتميز."
            },
            "overview": {
              "title": "لماذا تنضم إلينا؟",
              "description": "نحن نقدم بيئة عمل ديناميكية وشاملة حيث يتم تقدير مهاراتك ومساهماتك.",
              "benefits": [
                {
                  "title": "راتب تنافسي",
                  "description": "نحن نقدم رواتب ومكافآت تنافسية في السوق."
                },
                {
                  "title": "ساعات عمل مرنة",
                  "description": "نؤمن بأهمية التوازن بين العمل والحياة."
                },
                {
                  "title": "نمو مهني",
                  "description": "فرص للتعلم والنمو وتطوير مهاراتك."
                },
                {
                  "title": "مزايا صحية",
                  "description": "برامج صحية وعافية شاملة."
                }
              ]
            },
            "positions": {
              "title": "الوظائف المتاحة",
              "description": "استكشف الأدوار المتاحة لدينا وابحث عن الدور الذي يناسبك.",
              "categories": [
                {
                  "name": "الهندسة",
                  "roles": [
                    {
                      "title": "مهندس برمجيات",
                      "type": "دوام كامل",
                      "location": "عن بُعد",
                      "description": "تطوير وصيانة تطبيقات عالية الجودة.",
                      "requirements": [
                        "خبرة 3+ سنوات في تطوير البرمجيات.",
                        "إتقان React.js و Node.js.",
                        "خبرة في تقنيات السحابة."
                      ]
                    },
                    {
                      "title": "مهندس DevOps",
                      "type": "دوام كامل",
                      "location": "دبي، الإمارات",
                      "description": "إدارة وتحسين البنية التحتية السحابية.",
                      "requirements": [
                        "خبرة في AWS و Kubernetes.",
                        "معرفة بخطوط CI/CD.",
                        "مهارات قوية في البرمجة النصية."
                      ]
                    }
                  ]
                },
                {
                  "name": "التسويق",
                  "roles": [
                    {
                      "title": "أخصائي تسويق رقمي",
                      "type": "دوام كامل",
                      "location": "لندن، المملكة المتحدة",
                      "description": "إنشاء وإدارة حملات التسويق عبر الإنترنت.",
                      "requirements": [
                        "خبرة في تحسين محركات البحث (SEO) والتسويق عبر محركات البحث (SEM).",
                        "مهارات تحليلية قوية.",
                        "معرفة بالإعلانات على وسائل التواصل الاجتماعي."
                      ]
                    }
                  ]
                }
              ]
            },
            "application": {
              "title": "عملية التقديم",
              "steps": [
                {
                  "title": "تقديم الطلب",
                  "description": "قم بالتقديم عبر الإنترنت مع سيرتك الذاتية المحدثة."
                },
                {
                  "title": "التقييم الأولي",
                  "description": "يقوم فريقنا بمراجعة طلبك والتواصل مع المرشحين المختارين."
                },
                {
                  "title": "عملية المقابلة",
                  "description": "احضر المقابلات لمناقشة مهاراتك وخبراتك."
                },
                {
                  "title": "العرض النهائي",
                  "description": "إذا تم اختيارك، ستتلقى عرض عمل رسمي."
                }
              ]
            }
          },    
           
          "contactPage": {
            "hero": {
              "title": "اتصل",
              "subtitle": "بنا",
              "content": "هل لديك أسئلة؟ تواصل معنا! نحن هنا ومستعدون للمساعدة."
            }
          },
          "contactForm": {
            "title": "تواصل",
            "titleHighlight": "معنا",
            "description": "قدمت OpenAI لـ Assistify مجموعة من المهام الصعبة، مع متطلبات صارمة...",
            "contactPerson": {
              "name": "جون لوسون",
              "position": "عضو فريق الهندسة التقنية"
            },
            "trustedBy": "موثوق به من قبل أكثر الفرق طموحًا في العالم",
            "formTitle": "نحن بانتظار استفساراتك!",
            "formSubtitle": "تواصل معنا! لا تتردد في طرح أي أسئلة أو مشاركة أفكارك...",
            "fields": {
              "firstName": "الاسم الأول*",
              "lastName": "الاسم الأخير*",
              "companyName": "اسم الشركة*",
              "jobTitle": "المسمى الوظيفي*",
              "emailAddress": "البريد الإلكتروني*",
              "phoneNumber": "رقم الهاتف*",
              "message": "كيف يمكننا مساعدتك؟"
            },
            "agreement": "لقد قرأت وأوافق على الشروط والأحكام وسياسة الخصوصية.",
            "submitButton": "إرسال"
          },
          "services": {
            "aiDataAnalytics": "تحليل البيانات بالذكاء الاصطناعي",
            "appsDevelopment": "تطوير التطبيقات",
            "itStaffing": "توظيف تكنولوجيا المعلومات",
            "aiConsultancy": "استشارات الذكاء الاصطناعي"
          },
          footer: {
            description: "كودسينك متخصصة في حلول الذكاء الاصطناعي والأتمتة وتحليل البيانات لمساعدة الشركات على الابتكار والتحسين والنمو بكفاءة",
            services: {
              title: "الخدمات",
              aiDataAnalytics: "الذكاء الاصطناعي وتحليل البيانات",
              appsDevelopment: "تطوير التطبيقات",
              itStaffing: "توظيف تقنية المعلومات",
              aiConsultancy: "استشارات الذكاء الاصطناعي"
            },
            about: {
              title: "من نحن",
              partners: "شركاؤنا",
              team: "فريقنا",
              careers: "الوظائف",
              events: "الفعاليات"
            },
            extra: {
              title: "إضافي",
              contactUs: "اتصل بنا",
              pdpl: "سياسة حماية البيانات الشخصية",
              terms: "الشروط والأحكام",
              privacy: "سياسة الخصوصية"
            },
            copyright: "حقوق النشر © 2025 كودسينك. جميع الحقوق محفوظة.",
            links: {
              terms: "شروط الخدمة",
              privacy: "سياسة الخصوصية"
            }
          },
        }
      }
    }
  });

export default i18next;