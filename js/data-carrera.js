const DATA = {
  langs: {
    es: "Español",
    en: "English"
  },
  defaultLang: "es",

  es: {
    menu: [
      { id: "inicio",        label: "Inicio",        href: "index.html" },
      { id: "acerca",        label: "Acerca de",     href: "acerca.html" },
      { id: "plan-estudios", label: "Plan de Estudios", href: "plan-estudios.html" },
      { id: "perfil",        label: "Perfil del Egresado", href: "perfil-egresado.html" },
      { id: "campo-laboral", label: "Campo Laboral", href: "campo-laboral.html" },
      { id: "docentes",      label: "Docentes",      href: "docentes.html" },
      { id: "testimonios",   label: "Testimonios",   href: "testimonios.html" },
      { id: "contacto",      label: "Contacto",      href: "contacto.html" }
    ],

    inicio: {
      hero: {
        title: "Ingenier\u00eda Inform\u00e1tica",
        subtitle: "Innovaci\u00f3n, tecnolog\u00eda y transformaci\u00f3n digital",
        cta: "Explorar la carrera",
        desc: "Formamos profesionales capaces de liderar la revoluci\u00f3n tecnol\u00f3gica, desarrollando soluciones de software, inteligencia artificial y sistemas inform\u00e1ticos que transforman el mundo."
      },
      destacados: [
        { icono: "trophy", titulo: "Acreditaci\u00f3n", desc: "Programa acreditado por CONEAU con categor\u00eda A" },
        { icono: "people", titulo: "+500 Estudiantes", desc: "Comunidad activa de estudiantes y graduados" },
        { icono: "briefcase", titulo: "Alta inserci\u00f3n", desc: "90% de inserci\u00f3n laboral antes del egreso" },
        { icono: "globe2", titulo: "Internacional", desc: "Convenios con universidades de 15 pa\u00edses" }
      ]
    },

    acerca: {
      title: "Acerca de la Carrera",
      desc: "La Ingenier\u00eda Inform\u00e1tica es una disciplina que combina los fundamentos de la ciencia de la computaci\u00f3n, la ingenier\u00eda de software y la arquitectura de hardware para dise\u00f1ar, desarrollar e implementar soluciones tecnol\u00f3gicas innovadoras. Nuestro programa acad\u00e9mico est\u00e1 dise\u00f1ado para formar profesionales con una s\u00f3lida base te\u00f3rica y pr\u00e1ctica, capaces de enfrentar los desaf\u00edos del mundo digital.",
      mision: "Formar ingenieros inform\u00e1ticos con excelencia acad\u00e9mica, compromiso \u00e9tico y capacidad de innovaci\u00f3n, contribuyendo al desarrollo tecnol\u00f3gico y social de la regi\u00f3n.",
      vision: "Ser un programa de referencia en Am\u00e9rica Latina en la formaci\u00f3n de ingenieros inform\u00e1ticos, reconocido por la calidad acad\u00e9mica, la investigaci\u00f3n aplicada y el impacto en la industria.",
      duracion: "5 a\u00f1os / 10 semestres",
      titulo: "Ingeniero/a en Inform\u00e1tica",
      regimen: "Presencial / Semestral",
      modalidad: "Ingreso directo sin examen de admisi\u00f3n",
      areas: [
        { icono: "cpu", nombre: "Ciencias de la Computaci\u00f3n", items: "Algoritmos, estructuras de datos, lenguajes formales" },
        { icono: "code-square", nombre: "Ingenier\u00eda de Software", items: "Desarrollo web, m\u00f3vil, calidad, gesti\u00f3n de proyectos" },
        { icono: "server", nombre: "Sistemas e Infraestructura", items: "Redes, sistemas operativos, cloud computing" },
        { icono: "robot", nombre: "Inteligencia Artificial", items: "Machine learning, deep learning, visi\u00f3n artificial" }
      ]
    },

    planEstudios: {
      title: "Plan de Estudios",
      desc: "El plan de estudios est\u00e1 organizado en 10 semestres con un enfoque progresivo que combina fundamentos te\u00f3ricos, habilidades pr\u00e1cticas y proyectos integradores.",
      semestres: [
        { numero: 1, nombre: "Fundamentos", materias: ["Introducci\u00f3n a la Programaci\u00f3n", "Matem\u00e1tica I", "F\u00edsica I", "Qu\u00edmica General", "Comunicaci\u00f3n Oral y Escrita", "Ingl\u00e9s T\u00e9cnico I"] },
        { numero: 2, nombre: "Base Cient\u00edfica", materias: ["Programaci\u00f3n I", "Matem\u00e1tica II", "F\u00edsica II", "\u00c1lgebra Lineal", "Probabilidad y Estad\u00edstica", "Ingl\u00e9s T\u00e9cnico II"] },
        { numero: 3, nombre: "N\u00facleo Computacional", materias: ["Programaci\u00f3n II", "Estructuras de Datos", "Matem\u00e1tica Discreta", "Arquitectura de Computadoras", "Metodolog\u00eda de la Investigaci\u00f3n", "Ingl\u00e9s T\u00e9cnico III"] },
        { numero: 4, nombre: "Especializaci\u00f3n I", materias: ["Programaci\u00f3n III", "Bases de Datos I", "Sistemas Operativos", "Redes de Computadoras I", "An\u00e1lisis y Dise\u00f1o de Sistemas", "Ingenier\u00eda de Requisitos"] },
        { numero: 5, nombre: "Desarrollo", materias: ["Programaci\u00f3n IV", "Bases de Datos II", "Redes de Computadoras II", "Ingenier\u00eda de Software I", "Lenguajes Formales y Aut\u00f3matas", "Electiva I"] },
        { numero: 6, nombre: "Profundizaci\u00f3n", materias: ["Desarrollo Web", "Ingenier\u00eda de Software II", "Inteligencia Artificial I", "Compiladores", "Seguridad Inform\u00e1tica", "Electiva II"] },
        { numero: 7, nombre: "Tecnolog\u00edas Avanzadas", materias: ["Desarrollo M\u00f3vil", "Inteligencia Artificial II", "Cloud Computing", "Ciencia de Datos", "Calidad de Software", "Electiva III"] },
        { numero: 8, nombre: "Integraci\u00f3n", materias: ["Proyecto de Software I", "Machine Learning", "DevOps", "Arquitecturas de Software", "Interacci\u00f3n Humano-Computadora", "Electiva IV"] },
        { numero: 9, nombre: "Pr\u00e1ctica Profesional", materias: ["Proyecto de Software II", "Blockchain y Tecnolog\u00edas Emergentes", "\u00c9tica y Legislaci\u00f3n Inform\u00e1tica", "Gesti\u00f3n de Proyectos TI", "Electiva V", "Pr\u00e1ctica Profesional I"] },
        { numero: 10, nombre: "Culminaci\u00f3n", materias: ["Trabajo Final de Grado", "Innovaci\u00f3n y Emprendimiento", "Seminario de Actualizaci\u00f3n", "Pr\u00e1ctica Profesional II", "Electiva VI"] }
      ]
    },

    perfilEgresado: {
      title: "Perfil del Egresado",
      desc: "El egresado de Ingenier\u00eda Inform\u00e1tica posee una formaci\u00f3n integral que le permite desempe\u00f1arse con excelencia en diversos \u00e1mbitos del sector tecnol\u00f3gico.",
      competencias: [
        { icono: "code-slash", titulo: "Desarrollo de Software", desc: "Capacidad para dise\u00f1ar, desarrollar y mantener sistemas de software complejos utilizando metodolog\u00edas \u00e1giles y tradicionales." },
        { icono: "diagram-3", titulo: "Arquitectura de Sistemas", desc: "Habilidad para dise\u00f1ar arquitecturas escalables, robustas y seguras para aplicaciones empresariales y web." },
        { icono: "database", titulo: "Gesti\u00f3n de Datos", desc: "Competencia en modelado, almacenamiento y an\u00e1lisis de grandes vol\u00famenes de datos para la toma de decisiones." },
        { icono: "shield-check", titulo: "Seguridad Inform\u00e1tica", desc: "Conocimiento en ciberseguridad, cifrado y protecci\u00f3n de activos digitales." },
        { icono: "robot", titulo: "Inteligencia Artificial", desc: "Capacidad para implementar soluciones de IA, machine learning y automatizaci\u00f3n inteligente." },
        { icono: "people", titulo: "Gesti\u00f3n de Equipos", desc: "Habilidades de liderazgo, comunicaci\u00f3n y gesti\u00f3n de proyectos tecnol\u00f3gicos multidisciplinarios." },
        { icono: "cloud", titulo: "Cloud & DevOps", desc: "Competencia en infraestructura cloud, integraci\u00f3n continua y despliegue automatizado." },
        { icono: "globe2", titulo: "Innovaci\u00f3n Tecnol\u00f3gica", desc: "Visi\u00f3n estrat\u00e9gica para identificar oportunidades de innovaci\u00f3n y transformaci\u00f3n digital." }
      ]
    },

    campoLaboral: {
      title: "Campo Laboral",
      desc: "El ingeniero inform\u00e1tico tiene un amplio campo de acci\u00f3n en diversos sectores de la industria, la academia y el emprendimiento.",
      areas: [
        { icono: "laptop", titulo: "Desarrollo de Software", desc: "Empresas de tecnolog\u00eda, f\u00e1bricas de software, startups y departamentos de TI en todo tipo de organizaciones." },
        { icono: "graph-up", titulo: "Ciencia de Datos", desc: "An\u00e1lisis de datos, business intelligence, big data y roles de data scientist / data engineer." },
        { icono: "shield-lock", titulo: "Ciberseguridad", desc: "Consultor\u00eda en seguridad, ethical hacking, auditor\u00eda de sistemas y gesti\u00f3n de riesgos." },
        { icono: "clouds", titulo: "Cloud Computing", desc: "Arquitecto cloud, DevOps engineer, administraci\u00f3n de infraestructura en AWS, Azure o GCP." },
        { icono: "robot", titulo: "Inteligencia Artificial", desc: "IA aplicada a visi\u00f3n artificial, procesamiento de lenguaje natural y automatizaci\u00f3n rob\u00f3tica." },
        { icono: "building", titulo: "Sector P\u00fablico", desc: "Organismos gubernamentales, entes reguladores y empresas estatales que requieren transformaci\u00f3n digital." },
        { icono: "mortarboard", titulo: "Academia e Investigaci\u00f3n", desc: "Docencia universitaria, centros de investigaci\u00f3n y programas de posgrado." },
        { icono: "lightbulb", titulo: "Emprendimiento", desc: "Creaci\u00f3n de startups tecnol\u00f3gicas, desarrollo de productos digitales innovadores." }
      ]
    },

    docentes: {
      title: "Nuestros Docentes",
      desc: "Contamos con un plantel docente de alto nivel, con formaci\u00f3n acad\u00e9mica s\u00f3lida y amplia experiencia en la industria.",
      lista: [
        { nombre: "Dr. Juan P\u00e9rez", especialidad: "Inteligencia Artificial", foto: "assets/img/docentes/placeholder.webp", grados: "PhD en Computer Science - MIT" },
        { nombre: "MSc. Mar\u00eda Garc\u00eda", especialidad: "Ingenier\u00eda de Software", foto: "assets/img/docentes/placeholder.webp", grados: "MSc. en Software Engineering - Carnegie Mellon" },
        { nombre: "Dr. Carlos L\u00f3pez", especialidad: "Redes y Seguridad", foto: "assets/img/docentes/placeholder.webp", grados: "PhD en Cybersecurity - UPM" },
        { nombre: "MSc. Ana Mart\u00ednez", especialidad: "Ciencia de Datos", foto: "assets/img/docentes/placeholder.webp", grados: "MSc. en Data Science - Stanford" },
        { nombre: "Dr. Roberto S\u00e1nchez", especialidad: "Arquitectura de Computadoras", foto: "assets/img/docentes/placeholder.webp", grados: "PhD en Computer Engineering - UT Austin" },
        { nombre: "MSc. Laura Torres", especialidad: "Desarrollo Web y M\u00f3vil", foto: "assets/img/docentes/placeholder.webp", grados: "MSc. en Web Technologies - Oxford" },
        { nombre: "Dr. Miguel \u00c1ngel Ruiz", especialidad: "Sistemas Operativos", foto: "assets/img/docentes/placeholder.webp", grados: "PhD en Operating Systems - UC Berkeley" },
        { nombre: "MSc. Patricia D\u00edaz", especialidad: "Bases de Datos", foto: "assets/img/docentes/placeholder.webp", grados: "MSc. en Database Systems - Toronto" }
      ]
    },

    testimonios: {
      title: "Testimonios",
      desc: "Conoce las experiencias de nuestros estudiantes y egresados.",
      lista: [
        { nombre: "Sof\u00eda Ram\u00edrez", texto: "Estudiar Ingenier\u00eda Inform\u00e1tica fue la mejor decisi\u00f3n de mi vida. Los profesores son excelentes y las oportunidades laborales son incre\u00edbles. Hoy trabajo en una empresa l\u00edder de Silicon Valley.", foto: "assets/img/testimonios/placeholder.webp", rol: "Egresada 2023 - Software Engineer en Google" },
        { nombre: "Mateo Fern\u00e1ndez", texto: "La formaci\u00f3n pr\u00e1ctica y los proyectos integradores me prepararon para enfrentar los desaf\u00edos del mundo real. El plan de estudios est\u00e1 muy bien estructurado.", foto: "assets/img/testimonios/placeholder.webp", rol: "Estudiante de 9no semestre" },
        { nombre: "Valentina Ortiz", texto: "Los laboratorios equipados y la metodolog\u00eda de ense\u00f1anza hacen que el aprendizaje sea din\u00e1mico y efectivo. Recomiendo esta carrera a todos los apasionados por la tecnolog\u00eda.", foto: "assets/img/testimonios/placeholder.webp", rol: "Egresada 2022 - Full Stack Developer en Mercado Libre" },
        { nombre: "Sebasti\u00e1n Morales", texto: "La carrera me dio las herramientas para lanzar mi propia startup. Los seminarios de emprendimiento y las electivas en innovaci\u00f3n fueron clave.", foto: "assets/img/testimonios/placeholder.webp", rol: "Egresado 2021 - CTO & Co-founder de TechFlow" }
      ]
    },

    contacto: {
      title: "Contacto",
      desc: "Estamos aqu\u00ed para resolver tus dudas. No dudes en contactarnos.",
      email: "info@inginformatica.edu",
      telefono: "+54 11 1234-5678",
      direccion: "Av. Tecnol\u00f3gica 1234, Piso 5, CABA, Argentina",
      horario: "Lunes a Viernes de 9:00 a 18:00 hs",
      redes: {
        facebook: "https://facebook.com/inginformatica",
        twitter: "https://twitter.com/inginformatica",
        instagram: "https://instagram.com/inginformatica",
        linkedin: "https://linkedin.com/school/inginformatica"
      }
    },

    footer: {
      copyright: "\u00a9 Facultad de Ingenier\u00eda Inform\u00e1tica. Todos los derechos reservados.",
      hecho: "Hecho con Bootstrap 5.3"
    }
  },

  en: {
    menu: [
      { id: "inicio",        label: "Home",           href: "index.html" },
      { id: "acerca",        label: "About",          href: "acerca.html" },
      { id: "plan-estudios", label: "Curriculum",     href: "plan-estudios.html" },
      { id: "perfil",        label: "Graduate Profile", href: "perfil-egresado.html" },
      { id: "campo-laboral", label: "Job Market",     href: "campo-laboral.html" },
      { id: "docentes",      label: "Faculty",        href: "docentes.html" },
      { id: "testimonios",   label: "Testimonials",   href: "testimonios.html" },
      { id: "contacto",      label: "Contact",        href: "contacto.html" }
    ],

    inicio: {
      hero: {
        title: "Computer Engineering",
        subtitle: "Innovation, technology, and digital transformation",
        cta: "Explore the program",
        desc: "We train professionals capable of leading the technological revolution, developing software solutions, artificial intelligence, and computer systems that transform the world."
      },
      destacados: [
        { icono: "trophy", titulo: "Accreditation", desc: "Program accredited by CONEAU with category A" },
        { icono: "people", titulo: "+500 Students", desc: "Active community of students and graduates" },
        { icono: "briefcase", titulo: "High placement", desc: "90% job placement before graduation" },
        { icono: "globe2", titulo: "International", desc: "Agreements with universities in 15 countries" }
      ]
    },

    acerca: {
      title: "About the Program",
      desc: "Computer Engineering is a discipline that combines the fundamentals of computer science, software engineering, and hardware architecture to design, develop, and implement innovative technological solutions. Our academic program is designed to train professionals with a solid theoretical and practical foundation, capable of facing the challenges of the digital world.",
      mision: "To train computer engineers with academic excellence, ethical commitment, and innovative capacity, contributing to the technological and social development of the region.",
      vision: "To be a reference program in Latin America for the training of computer engineers, recognized for academic quality, applied research, and industry impact.",
      duracion: "5 years / 10 semesters",
      titulo: "Computer Engineer",
      regimen: "On-site / Semester-based",
      modalidad: "Direct admission without entrance exam",
      areas: [
        { icono: "cpu", nombre: "Computer Science", items: "Algorithms, data structures, formal languages" },
        { icono: "code-square", nombre: "Software Engineering", items: "Web and mobile development, quality, project management" },
        { icono: "server", nombre: "Systems & Infrastructure", items: "Networks, operating systems, cloud computing" },
        { icono: "robot", nombre: "Artificial Intelligence", items: "Machine learning, deep learning, computer vision" }
      ]
    },

    planEstudios: {
      title: "Curriculum",
      desc: "The curriculum is organized into 10 semesters with a progressive approach that combines theoretical foundations, practical skills, and integrative projects.",
      semestres: [
        { numero: 1, nombre: "Foundations", materias: ["Introduction to Programming", "Mathematics I", "Physics I", "General Chemistry", "Oral and Written Communication", "Technical English I"] },
        { numero: 2, nombre: "Scientific Base", materias: ["Programming I", "Mathematics II", "Physics II", "Linear Algebra", "Probability and Statistics", "Technical English II"] },
        { numero: 3, nombre: "Computing Core", materias: ["Programming II", "Data Structures", "Discrete Mathematics", "Computer Architecture", "Research Methodology", "Technical English III"] },
        { numero: 4, nombre: "Specialization I", materias: ["Programming III", "Databases I", "Operating Systems", "Computer Networks I", "Systems Analysis and Design", "Requirements Engineering"] },
        { numero: 5, nombre: "Development", materias: ["Programming IV", "Databases II", "Computer Networks II", "Software Engineering I", "Formal Languages and Automata", "Elective I"] },
        { numero: 6, nombre: "Deepening", materias: ["Web Development", "Software Engineering II", "Artificial Intelligence I", "Compilers", "Information Security", "Elective II"] },
        { numero: 7, nombre: "Advanced Technologies", materias: ["Mobile Development", "Artificial Intelligence II", "Cloud Computing", "Data Science", "Software Quality", "Elective III"] },
        { numero: 8, nombre: "Integration", materias: ["Software Project I", "Machine Learning", "DevOps", "Software Architectures", "Human-Computer Interaction", "Elective IV"] },
        { numero: 9, nombre: "Professional Practice", materias: ["Software Project II", "Blockchain and Emerging Technologies", "Ethics and IT Legislation", "IT Project Management", "Elective V", "Professional Practice I"] },
        { numero: 10, nombre: "Culmination", materias: ["Final Degree Project", "Innovation and Entrepreneurship", "Update Seminar", "Professional Practice II", "Elective VI"] }
      ]
    },

    perfilEgresado: {
      title: "Graduate Profile",
      desc: "The Computer Engineering graduate possesses comprehensive training that enables them to perform with excellence in various areas of the technology sector.",
      competencias: [
        { icono: "code-slash", titulo: "Software Development", desc: "Ability to design, develop, and maintain complex software systems using agile and traditional methodologies." },
        { icono: "diagram-3", titulo: "Systems Architecture", desc: "Skill to design scalable, robust, and secure architectures for enterprise and web applications." },
        { icono: "database", titulo: "Data Management", desc: "Competence in modeling, storing, and analyzing large volumes of data for decision making." },
        { icono: "shield-check", titulo: "Information Security", desc: "Knowledge in cybersecurity, encryption, and protection of digital assets." },
        { icono: "robot", titulo: "Artificial Intelligence", desc: "Ability to implement AI solutions, machine learning, and intelligent automation." },
        { icono: "people", titulo: "Team Management", desc: "Leadership, communication, and management skills for multidisciplinary technology projects." },
        { icono: "cloud", titulo: "Cloud & DevOps", desc: "Competence in cloud infrastructure, continuous integration, and automated deployment." },
        { icono: "globe2", titulo: "Technological Innovation", desc: "Strategic vision to identify innovation opportunities and digital transformation." }
      ]
    },

    campoLaboral: {
      title: "Job Market",
      desc: "The computer engineer has a wide field of action in various sectors of industry, academia, and entrepreneurship.",
      areas: [
        { icono: "laptop", titulo: "Software Development", desc: "Technology companies, software factories, startups, and IT departments in all kinds of organizations." },
        { icono: "graph-up", titulo: "Data Science", desc: "Data analysis, business intelligence, big data, and data scientist / data engineer roles." },
        { icono: "shield-lock", titulo: "Cybersecurity", desc: "Security consulting, ethical hacking, systems auditing, and risk management." },
        { icono: "clouds", titulo: "Cloud Computing", desc: "Cloud architect, DevOps engineer, infrastructure administration on AWS, Azure, or GCP." },
        { icono: "robot", titulo: "Artificial Intelligence", desc: "AI applied to computer vision, natural language processing, and robotic automation." },
        { icono: "building", titulo: "Public Sector", desc: "Government agencies, regulatory bodies, and state companies requiring digital transformation." },
        { icono: "mortarboard", titulo: "Academia & Research", desc: "University teaching, research centers, and graduate programs." },
        { icono: "lightbulb", titulo: "Entrepreneurship", desc: "Creation of tech startups, development of innovative digital products." }
      ]
    },

    docentes: {
      title: "Our Faculty",
      desc: "We have a high-level teaching staff with solid academic training and extensive industry experience.",
      lista: [
        { nombre: "Dr. Juan P\u00e9rez", especialidad: "Artificial Intelligence", foto: "assets/img/docentes/placeholder.webp", grados: "PhD in Computer Science - MIT" },
        { nombre: "MSc. Mar\u00eda Garc\u00eda", especialidad: "Software Engineering", foto: "assets/img/docentes/placeholder.webp", grados: "MSc. in Software Engineering - Carnegie Mellon" },
        { nombre: "Dr. Carlos L\u00f3pez", especialidad: "Networks & Security", foto: "assets/img/docentes/placeholder.webp", grados: "PhD in Cybersecurity - UPM" },
        { nombre: "MSc. Ana Mart\u00ednez", especialidad: "Data Science", foto: "assets/img/docentes/placeholder.webp", grados: "MSc. in Data Science - Stanford" },
        { nombre: "Dr. Roberto S\u00e1nchez", especialidad: "Computer Architecture", foto: "assets/img/docentes/placeholder.webp", grados: "PhD in Computer Engineering - UT Austin" },
        { nombre: "MSc. Laura Torres", especialidad: "Web & Mobile Development", foto: "assets/img/docentes/placeholder.webp", grados: "MSc. in Web Technologies - Oxford" },
        { nombre: "Dr. Miguel \u00c1ngel Ruiz", especialidad: "Operating Systems", foto: "assets/img/docentes/placeholder.webp", grados: "PhD in Operating Systems - UC Berkeley" },
        { nombre: "MSc. Patricia D\u00edaz", especialidad: "Databases", foto: "assets/img/docentes/placeholder.webp", grados: "MSc. in Database Systems - Toronto" }
      ]
    },

    testimonios: {
      title: "Testimonials",
      desc: "Learn about the experiences of our students and graduates.",
      lista: [
        { nombre: "Sof\u00eda Ram\u00edrez", texto: "Studying Computer Engineering was the best decision of my life. The professors are excellent and the job opportunities are incredible. Today I work at a leading Silicon Valley company.", foto: "assets/img/testimonios/placeholder.webp", rol: "Graduate 2023 - Software Engineer at Google" },
        { nombre: "Mateo Fern\u00e1ndez", texto: "The practical training and integrative projects prepared me to face real-world challenges. The curriculum is very well structured.", foto: "assets/img/testimonios/placeholder.webp", rol: "9th semester student" },
        { nombre: "Valentina Ortiz", texto: "The equipped labs and teaching methodology make learning dynamic and effective. I recommend this career to all technology enthusiasts.", foto: "assets/img/testimonios/placeholder.webp", rol: "Graduate 2022 - Full Stack Developer at Mercado Libre" },
        { nombre: "Sebasti\u00e1n Morales", texto: "The program gave me the tools to launch my own startup. The entrepreneurship seminars and innovation electives were key.", foto: "assets/img/testimonios/placeholder.webp", rol: "Graduate 2021 - CTO & Co-founder of TechFlow" }
      ]
    },

    contacto: {
      title: "Contact",
      desc: "We are here to answer your questions. Feel free to contact us.",
      email: "info@inginformatica.edu",
      telefono: "+54 11 1234-5678",
      direccion: "Av. Tecnol\u00f3gica 1234, 5th Floor, CABA, Argentina",
      horario: "Monday to Friday 9:00 AM - 6:00 PM",
      redes: {
        facebook: "https://facebook.com/inginformatica",
        twitter: "https://twitter.com/inginformatica",
        instagram: "https://instagram.com/inginformatica",
        linkedin: "https://linkedin.com/school/inginformatica"
      }
    },

    footer: {
      copyright: "\u00a9 Faculty of Computer Engineering. All rights reserved.",
      hecho: "Made with Bootstrap 5.3"
    }
  }
};
