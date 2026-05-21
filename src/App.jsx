import { useState } from "react"
import { motion } from "framer-motion"
import {
  Download,
  Code2,
  Database,
  Users,
  Sparkles,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react"

import {
  FaGithub,
  FaJava,
  FaPhp,
  FaReact,
  FaVuejs,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa"

import {
  SiJavascript,
  SiSpringboot,
  SiLaravel,
  SiMysql,
  SiPostman,
  SiHtml5,
  SiBootstrap,
  SiMongodb,
  SiDotnet,
} from "react-icons/si"
import { image } from "framer-motion/client"

const content = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      stack: "Stack",
      skills: "Habilidades",
      projects: "Proyectos",    },
    hero: {
      greeting: "Hola! Soy Sebastian Gomez ",
      title: "Software Developer",
      subtitle: "Student",
      description:
        "Estudiante avanzado de Informática Empresarial en la Universidad de Costa Rica. Desarrollo aplicaciones web, APIs REST y sistemas completos con Java, Spring Boot, Laravel, MySQL y SQL Server. También he participado en proyectos Web3, hackathons y open source.",
      contact: "Contáctame",
      cv: "Descargar CV",
    },
    about: {
      tag: "Sobre mí",
      title: "Construyo soluciones web con enfoque práctico.",
      p1: "Soy estudiante de último año de Informática Empresarial en la Universidad de Costa Rica, preparándome para iniciar mi práctica empresarial.",
      p2: "Me enfoco en desarrollo backend y full stack, creando aplicaciones web, APIs REST, sistemas con bases de datos y soluciones orientadas a problemas reales.",
      p3: "He trabajado en proyectos académicos, sistemas reales, proyectos Web3, MVPs en hackathons y contribuciones open source.",
    },
    stack: {
      tag: "Stack tecnológico",
      title: "Tecnologías que he utilizado",
    },
    skills: {
      tag: "Habilidades",
      title: "Habilidades técnicas y personales",
      groups: [
        {
          title: "Backend / Full Stack",
          description:
            "Construcción de APIs, lógica de negocio, autenticación y conexión con bases de datos.",
          skills: ["Java", "Spring Boot", "Laravel", "PHP", "ASP.NET Core", "APIs REST"],
        },
        {
          title: "Bases de datos",
          description:
            "Diseño y consumo de datos en sistemas relacionales y no relacionales.",
          skills: ["MySQL", "SQL Server", "SQLite", "MongoDB", "Procedimientos almacenados"],
        },
        {
          title: "Web3 / Innovación",
          description:
            "Participación en proyectos Web3, MVPs, hackathons y exploración de nuevas tecnologías.",
          skills: ["Cairo básico", "Worldcoin ecosystem", "Blockchain gaming", "Open Source"],
        },
        {
          title: "Soft Skills",
          description:
            "Habilidades desarrolladas en proyectos universitarios, hackathons y trabajo en equipo.",
          skills: ["Trabajo en equipo", "Liderazgo", "Comunicación", "Adaptabilidad", "Resolución de problemas"],
        },
      ],
    },
    projects: {
      tag: "Projects",
      title: "Proyectos destacados",
      description:
        "Estos proyectos representan mi experiencia desarrollando sistemas web, APIs, bases de datos, MVPs en hackathons, proyectos Web3 y soluciones aplicadas a casos reales.",
      github: "GitHub",
      details: "Ver proyecto",
      items: [
        {
          title: "Citizen of Arcanis",
          type: "Proyecto Web3 / MMORPG",
          description:
            "Proyecto Web3 de videojuego MMORPG on-chain con economía digital, marketplace de ítems únicos y enfoque en activos comerciables.",
          tech: ["Web3", "Cairo", "Blockchain Gaming", "Open Source"],
          github: "https://github.com/SunsetLabs-Game/COA-FrontEnd",
          demo: "#",
          image: "/images/projects/citizen-of-arcanis.png",
          featured: true,
        },
        {
          title: "Krovva",
          type: "MVP Fitness Web3",
          description:
            "MVP desarrollado en hackathon, integrado conceptualmente con el ecosistema Worldcoin para explorar identidad digital en una aplicación fitness.",
          tech: ["Worldcoin", "Web3", "MVP", "Hackathon"],
          github: "https://github.com/Krovva/krovva-mvp",
          demo: "#",
          image: "/images/projects/Krovva.png",
          featured: true,
        },
        {
          title: "Kukula POS",
          type: "Sistema de facturación",
          description:
            "Sistema web real para facturación, inventario y control de ventas, desarrollado con Laravel, MySQL, APIs REST, Blade y Bootstrap.",
          tech: ["Laravel", "MySQL", "Blade", "Bootstrap", "Postman"],
          github: "https://github.com/JafethAriasH/Sistema-Kukula",
          demo: "#",
          image: "/images/projects/kukula-pos.png",
          featured: false,
        },
        {
          title: "CineFlix",
          type: "Sistema de reservas de cine",
          description:
            "Sistema de boletería con flujo de reservas en tres pasos, selección de asientos, control de concurrencia y generación de PDF.",
          tech: ["Spring Boot", "SQL Server", "Thymeleaf", "iText"],
          github: "https://github.com/sebas11042/CineFlix",
          demo: "#",
          image: "/images/projects/Cineflix.png",
          featured: false,
        },
        {
          title: "GameVerse",
          type: "Plataforma tipo Steam",
          description:
            "Aplicación web para compra y alquiler de videojuegos con carrito, wishlist, roles de usuario y autenticación JWT.",
          tech: ["Spring Boot", "MySQL", "JWT", "Thymeleaf"],
          github: "https://github.com/sebas11042/GameVerse",
          demo: "#",
          image: "/images/projects/GameVerse.png",
          featured: false,
        },
        {
          title: "ZyBus",
          type: "Proyecto académico",
          description:
            "Sistema académico de transporte inteligente con desarrollo frontend en Vue, documentación técnica y trabajo colaborativo con Git.",
          tech: ["Vue", "TypeScript", "Git", "Análisis"],
          github: "https://github.com/FallasDev/Zybus-Frontend",
          demo: "#",
          image: "/images/projects/Zybus.png",
          featured: false,
        },
      ],
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      stack: "Stack",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact me",
    },
    hero: {
      greeting: "Hi! I'm Sebastián Gómez",
      title: "Software Developer",
      subtitle: "Student",
      description:
        "Advanced Business Informatics student at the University of Costa Rica. I build web applications, REST APIs and complete systems using Java, Spring Boot, Laravel, MySQL and SQL Server. I have also participated in Web3 projects, hackathons and open source.",
      contact: "Contact me",
      cv: "Download CV",
    },
    about: {
      tag: "About me",
      title: "I build practical web solutions.",
      p1: "I am a final-year Business Informatics student at the University of Costa Rica, preparing to start my professional internship.",
      p2: "I focus on backend and full stack development, building web applications, REST APIs, database-driven systems and real-world solutions.",
      p3: "I have worked on academic projects, real systems, Web3 projects, hackathon MVPs and open source contributions.",
    },
    stack: {
      tag: "Tech stack",
      title: "Technologies I have used",
    },
    skills: {
      tag: "Skills",
      title: "Technical and personal skills",
      groups: [
        {
          title: "Backend / Full Stack",
          description:
            "Building APIs, business logic, authentication flows and database-driven systems.",
          skills: ["Java", "Spring Boot", "Laravel", "PHP", "ASP.NET Core", "REST APIs"],
        },
        {
          title: "Databases",
          description:
            "Designing and working with relational and non-relational database systems.",
          skills: ["MySQL", "SQL Server", "SQLite", "MongoDB", "Stored procedures"],
        },
        {
          title: "Web3 / Innovation",
          description:
            "Participation in Web3 projects, MVPs, hackathons and exploration of emerging technologies.",
          skills: ["Basic Cairo", "Worldcoin ecosystem", "Blockchain gaming", "Open Source"],
        },
        {
          title: "Soft Skills",
          description:
            "Skills developed through academic projects, hackathons and collaborative teamwork.",
          skills: ["Teamwork", "Leadership", "Communication", "Adaptability", "Problem solving"],
        },
      ],
    },
    projects: {
      tag: "Projects",
      title: "Featured projects",
      description:
        "These projects represent my experience building web systems, APIs, databases, hackathon MVPs, Web3 projects and real-world solutions.",
      github: "GitHub",
      details: "View project",
      items: [
        {
          title: "Citizen of Arcanis",
          type: "Web3 / MMORPG Project",
          description:
            "Web3 MMORPG project with an on-chain digital economy, unique item marketplace and a focus on tradable digital assets.",
          tech: ["Web3", "Cairo", "Blockchain Gaming", "Open Source"],
          github: "https://github.com/SunsetLabs-Game/COA-FrontEnd",
          demo: "#",
          image: "/images/projects/citizen-of-arcanis.png",
          featured: true,
        },
        {
          title: "Krovva",
          type: "Web3 Fitness MVP",
          description:
            "Hackathon MVP conceptually integrated with the Worldcoin ecosystem to explore digital identity in a fitness application.",
          tech: ["Worldcoin", "Web3", "MVP", "Hackathon"],
          github: "https://github.com/Krovva/krovva-mvp",
          demo: "#",
          image: "/images/projects/Krovva.png",
          featured: true,
        },
        {
          title: "Kukula POS",
          type: "Billing and POS system",
          description:
            "Real-world web system for billing, inventory and sales management, built with Laravel, MySQL, REST APIs, Blade and Bootstrap.",
          tech: ["Laravel", "MySQL", "Blade", "Bootstrap", "Postman"],
          github: "https://github.com/JafethAriasH/Sistema-Kukula",
          demo: "#",
          image: "/images/projects/kukula-pos.png",
          featured: false,
        },
        {
          title: "CineFlix",
          type: "Cinema reservation system",
          description:
            "Ticket reservation system with a three-step booking flow, seat selection, concurrency control and PDF generation.",
          tech: ["Spring Boot", "SQL Server", "Thymeleaf", "iText"],
          github: "https://github.com/sebas11042/CineFlix",
          demo: "#",
          image: "/images/projects/Cineflix.png",
          featured: false,
        },
        {
          title: "GameVerse",
          type: "Steam-like platform",
          description:
            "Web application for buying and renting video games, with shopping cart, wishlist, user roles and JWT authentication.",
          tech: ["Spring Boot", "MySQL", "JWT", "Thymeleaf"],
          github: "https://github.com/sebas11042/GameVerse",
          demo: "#",
          image: "/images/projects/GameVerse.png",
          featured: false,
        },
        {
          title: "ZyBus",
          type: "Academic project",
          description:
            "Smart transportation academic system with Vue frontend development, technical documentation and collaborative Git workflow.",
          tech: ["Vue", "TypeScript", "Git", "Analysis"],
          github: "https://github.com/FallasDev/Zybus-Frontend",
          demo: "#",
          image: "/images/projects/Zybus.png",
          featured: false,
        },
      ],
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

function App() {
  const [theme, setTheme] = useState("dark")
  const [lang, setLang] = useState("es")

  const isDark = theme === "dark"
  const t = content[lang]

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#0f1117] text-zinc-100" : "bg-[#f5f7fb] text-zinc-900"
      }`}
    >
      <Navbar
        isDark={isDark}
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
        t={t}
      />
      <Hero isDark={isDark} t={t} />
      <About isDark={isDark} t={t} />
      <TechStack isDark={isDark} t={t} />
      <Skills isDark={isDark} t={t} />
      <Projects isDark={isDark} t={t} />
    </main>
  )
}

function Navbar({ isDark, theme, setTheme, lang, setLang, t }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 z-50 w-full px-6 py-5 backdrop-blur-xl transition-colors duration-500 ${
        isDark ? "bg-[#0f1117]/70" : "bg-white/70"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#inicio" className="text-2xl font-black tracking-tight">
          Sebastián <span className="text-cyan-400">Gómez</span>
        </a>

        <div
          className={`hidden rounded-full border px-8 py-4 shadow-2xl md:flex md:items-center md:gap-8 ${
            isDark
              ? "border-white/10 bg-white/[0.06]"
              : "border-zinc-200 bg-white/80"
          }`}
        >
          <a href="#inicio" className="text-sm font-medium hover:text-cyan-400">
            {t.nav.home}
          </a>
          <a href="#sobre-mi" className="text-sm font-medium hover:text-cyan-400">
            {t.nav.about}
          </a>
          <a href="#stack" className="text-sm font-medium hover:text-cyan-400">
            {t.nav.stack}
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-cyan-400">
            {t.nav.skills}
          </a>
          <a href="#proyectos" className="text-sm font-medium hover:text-cyan-400">
            {t.nav.projects}
          </a>
          <a href="https://github.com/sebas11042" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-cyan-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-cyan-400">
            LinkedIn
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition hover:border-cyan-400 hover:text-cyan-400 ${
              isDark ? "border-white/15" : "border-zinc-300"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="font-bold transition hover:text-cyan-400"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

        </div>
      </nav>
    </motion.header>
  )
}

function Hero({ isDark, t }) {
  return (
    <section
      id="inicio"
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 text-center transition-colors duration-500 ${
        isDark ? "glow-bg grid-bg" : "bg-[#f5f7fb]"
      }`}
    >
      <motion.div
        className="absolute right-20 top-40 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-20 left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} className="relative mb-6">
          <motion.div
            className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.img
            src="/images/profile-sebastian.png"
            alt="Sebastián Gómez"
            className="relative h-36 w-36 rounded-full border-4 border-cyan-400/30 object-cover object-top shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            whileHover={{ scale: 1.06, rotate: 2 }}
            transition={{ type: "spring", stiffness: 180 }}
          />
        </motion.div>

        <motion.p variants={fadeUp} className="mb-4 text-xl font-semibold">
          {t.hero.greeting}
        </motion.p>

        <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          {t.hero.title} <br />
          <span className="text-cyan-400">{t.hero.subtitle}</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className={`mx-auto mb-10 max-w-3xl text-lg leading-9 ${
            isDark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          {t.hero.description}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:sebastianga48@gmail.com"
            className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#0f1117] transition hover:bg-cyan-300"
          >
            {t.hero.contact} →
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/CV_Sebastian_Gomez_FINAL.pdf"
            className={`flex items-center gap-2 rounded-full border px-8 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400 ${
              isDark ? "border-white/20 text-white" : "border-zinc-300 text-zinc-900"
            }`}
          >
            {t.hero.cv} <Download size={18} />
          </motion.a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 flex gap-6 text-zinc-400">
          <motion.a whileHover={{ y: -5, scale: 1.15 }} href="https://github.com/sebas11042" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
            <FaGithub size={25} />
          </motion.a>

        </motion.div>
      </motion.div>
    </section>
  )
}

function About({ isDark, t }) {
  return (
    <section id="sobre-mi" className={`relative overflow-hidden border-t py-24 ${isDark ? "border-white/10" : "border-zinc-200"}`}>
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            {t.about.tag}
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            {t.about.title}
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className={`space-y-5 text-lg leading-8 ${isDark ? "text-zinc-300" : "text-zinc-600"}`}
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </motion.div>
      </div>
    </section>
  )
}

function TechStack({ isDark, t }) {
  const technologies = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vue", icon: <FaVuejs /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "SQL Server", icon: <Database /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Linux", icon: <FaLinux /> },
  ]

  return (
    <section id="stack" className={`border-t py-24 ${isDark ? "glow-bg border-white/10" : "bg-white border-zinc-200"}`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          {t.stack.tag}
        </motion.p>

        <motion.h2 className="mb-12 text-4xl font-bold md:text-5xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          {t.stack.title}
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
              whileHover={{ scale: 1.08, rotate: 1, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex flex-col items-center justify-center rounded-3xl border p-5 text-center transition hover:border-cyan-400/70 hover:bg-cyan-400/[0.06] ${
                isDark ? "border-white/10 bg-white/[0.03]" : "border-zinc-200 bg-white shadow-sm"
              }`}
            >
              <div className="mb-3 text-4xl text-zinc-400 transition group-hover:scale-110 group-hover:text-cyan-400">
                {tech.icon}
              </div>
              <p className="text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills({ isDark, t }) {
  const skillIcons = [<Code2 />, <Database />, <Sparkles />, <Users />]

  return (
    <section id="skills" className={`relative overflow-hidden border-t py-24 ${isDark ? "border-white/10" : "border-zinc-200"}`}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          {t.skills.tag}
        </motion.p>

        <motion.h2 className="mb-12 text-4xl font-bold md:text-5xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          {t.skills.title}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {t.skills.groups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`rounded-3xl border p-7 transition hover:border-cyan-400/70 hover:bg-cyan-400/[0.04] ${
                isDark ? "border-white/10 bg-white/[0.03]" : "border-zinc-200 bg-white shadow-sm"
              }`}
            >
              <motion.div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400" whileHover={{ rotate: 8, scale: 1.1 }}>
                {skillIcons[index]}
              </motion.div>

              <h3 className="mb-3 text-2xl font-bold">{group.title}</h3>

              <p className={`mb-5 leading-7 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span key={skill} whileHover={{ scale: 1.08 }} className={`rounded-full border px-3 py-1 text-sm ${isDark ? "border-white/10 bg-white/[0.03] text-zinc-300" : "border-zinc-200 bg-zinc-50 text-zinc-700"}`}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects({ isDark, t }) {
  return (
    <section id="proyectos" className={`relative overflow-hidden border-t py-24 ${isDark ? "glow-bg border-white/10" : "bg-white border-zinc-200"}`}>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          {t.projects.tag}
        </motion.p>

        <motion.h2 className="mb-5 text-4xl font-bold md:text-5xl" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          {t.projects.title}
        </motion.h2>

        <motion.p className={`mb-12 max-w-3xl text-lg leading-8 ${isDark ? "text-zinc-400" : "text-zinc-600"}`} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
          {t.projects.description}
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          {t.projects.items.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -12, scale: 1.015 }}
              className={`group relative overflow-hidden rounded-[2rem] border p-7 transition hover:border-cyan-400/70 ${
                isDark
                  ? project.featured
                    ? "border-cyan-400/40 bg-cyan-400/[0.06]"
                    : "border-white/10 bg-white/[0.03]"
                  : "border-zinc-200 bg-white shadow-sm"
              }`}
            >
              <div className="relative z-10">
                {project.image && (
                  <div className={`mb-6 overflow-hidden rounded-2xl border ${isDark ? "border-white/10 bg-black/20" : "border-zinc-200 bg-zinc-50"}`}>
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {project.type}
                    </p>

                    <h3 className="text-3xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <motion.div whileHover={{ rotate: 20, scale: 1.1 }} className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-cyan-400 ${isDark ? "border-white/10 bg-white/[0.04]" : "border-zinc-200 bg-zinc-50"}`}>
                    <ArrowUpRight size={22} />
                  </motion.div>
                </div>

                <p className={`mb-6 leading-8 ${isDark ? "text-zinc-300" : "text-zinc-600"}`}>
                  {project.description}
                </p>

                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <motion.span key={item} whileHover={{ scale: 1.08 }} className={`rounded-full border px-3 py-1 text-sm ${isDark ? "border-white/10 bg-black/20 text-zinc-300" : "border-zinc-200 bg-zinc-50 text-zinc-700"}`}>
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.github} target="_blank" rel="noreferrer" className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition hover:border-cyan-400 hover:text-cyan-400 ${isDark ? "border-white/15 text-white" : "border-zinc-300 text-zinc-900"}`}>
                    <FaGithub size={18} />
                    {t.projects.github}
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
