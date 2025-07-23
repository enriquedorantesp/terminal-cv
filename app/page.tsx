"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TerminalCV() {
  const [currentSection, setCurrentSection] = useState("welcome")
  const [command, setCommand] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)

  const sections = {
    welcome: {
      title: "Software Engineer.",
      content: `
╔══════════════════════════════════════════════════════════════╗
║                       ENRIQUE DORANTES                       ║
║                   Desarrollador Full Stack                   ║
╚══════════════════════════════════════════════════════════════╝

Comandos disponibles:
  about     - Información personal
  skills    - Habilidades técnicas
  work      - Experiencia laboral
  education - Formación académica
  projects  - Proyectos destacados
  contact   - Información de contacto
  clear     - Limpiar terminal
  help      - Mostrar ayuda

Escribe un comando para comenzar...`,
    },
    about: {
      title: "cat ~/about.txt",
      content: `
Nombre: Enrique Antonio Dorantes Parra 
Edad: 36 años
Ubicación: Ciudad de Mexico, Mexico
Profesión: Desarrollador Full Stack

Descripción:
Consultor en desarrollo de software con más de 5 años de experiencia 
creando soluciones robustas, escalables y centradas en el usuario. 

Especializado en tecnologías como Java, Spring Boot, JavaScript, React y bases de datos SQL/NoSQL, 
con experiencia en despliegue en la nube (AWS) y contenedorización con Docker. 
Me gusta unir la lógica del backend con la experiencia del frontend, siempre bajo principios de código limpio y buenas prácticas. 
He trabajado en entornos ágiles, liderando y colaborando con equipos diversos, y me motiva convertir desafíos técnicos en oportunidades de innovación.

Intereses:
- Desarrollo de software
- Inteligencia artificial
- Código abierto
- Fotografía
- Senderismo`,
    },
    skills: {
      title: "ls -la ~/skills/",
      content: `
Frontend:
├── JavaScript/TypeScript    ████████████ 95%
├── React/Next.js            ████████████ 90%
├── HTML5/CSS3               ████████████ 95%
├── Tailwind CSS             ██████████   85%
└── Vue.js                   ████████     75%

Backend:
├── Node.js                  ████████████ 90%
├── Java                     ██████████   80%
├── JavaFX                   ████████     75%
├── PostgreSQL               ██████████   85%
└── MongoDB                  ████████     75%

DevOps & Tools:
├── Git/GitHub               ████████████ 95%
├── Docker                   ██████████   80%
├── AWS                      ████████     70%
├── Linux                    ██████████   85%
└── TortoiseSVN              ████████     75%`,
    },
    work: {
      title: "cat ~/experience.log",
      content: `
[2025-presente] Interim - Integration Related
<epam>
• 

[2019-presente] Developer Java
NEORIS
Numero de Empleado NEORIS: 50257313

• Desarrollador Java FulkStack Jr, PROY2023-MAURICIOMIRANDA-DEVELO Developer en TELCEL
  • Numero de Empleado TELCEL: EX432078
  • Nombre del Proyecto: Telcel Renovación DDC 2024 (MMrnd 6)
  • Periodo: Enero 2023 - Present
    • Desarrollo de nuevos modulos
    • Nuevos Desarrollos en Java

• Desarrollador Java FulkStack Senior. Proyecto Infraestructura en BANCOPPEL
  • Numero de Empleado COPPEL: 99804998
  • Nombre del Proyecto: COPPEL - Staff Retail Banco 22 Retail 2022
  • Periodo: Septiembre 2021 - Diciembre 2022
    • Creacion y Modificacion de Stored Procedure
    • Revision e implementacion de codigo en JavaFX
    • Requerimiento pagos cruzandos en sucursal web
    • RQM 06 770 Reingeniería biometría facial y homologación mtto de huella y biometría
    • RQM 10 1339 - Tarjetas de crédito oro nominadas_innominadas

• Desarrollador Java FulkStack Jr., Proyecto Operación Transforma en TELCEL
  • Numero de Empleado TELCEL: EX432078
  • Nombre del Proyecto: TELCEL OPER_TRANFOR_EXT
  • Periodo: Agosto 2019 - Mayo 2021
    • Migracion de servidor de correo Microsoft a LOTUS.
    • Migracion de un servidor GlassFish y entorno de aplicasiones.
    • seguridad de aplicaciones con CHECKMARK

[2017-2019] Sales Person
Gestino ERP para PYMES
• Buena capacidad de comunicación
• Excelente para conseguir compromisos
• Experto en el uso de MS Word y Excel.
• Estrategias efectivas de llamadas a prospectos`,
    },
    education: {
      title: "cat ~/education.txt",
      content: `
🎓 FORMACIÓN ACADÉMICA

[2010-2016] Ingeniería en Sistemas Computacionales
Instituto Tecnologico Superior de Xalapa
• Especialización en Desarrollo de Software
• Proyecto final: Sistema de gestión hospitalaria
• Promedio: 8.2/10

📚 CERTIFICACIONES

[2020] Scrum Fundamentals Certified
[2021] Java FX
[2021] Common Threats
[2022] Introduction to DDD, CQRS and Event Sourcing
[2022] Open English Level 1
[2023] Open English Level 2
[2023] Open English Level 3
[2025] Open English Level 4
[2025] Open English Level 5`,
    },
    projects: {
      title: "ls ~/projects/ --details",
      content: `
📁 E-Commerce Platform
   ├── Tech: React, Node.js, PostgreSQL, Stripe
   ├── Descripción: Plataforma completa de comercio electrónico
   ├── Features: Carrito, pagos, admin panel, analytics
   └── GitHub: github.com/enriquedorantes/ecommerce-platform

📁 Task Management App
   ├── Tech: Next.js, TypeScript, Prisma, tRPC
   ├── Descripción: Aplicación de gestión de tareas colaborativa
   ├── Features: Real-time updates, teams, notifications
   └── GitHub: github.com/enriquedorantes/task-manager

📁 Weather Dashboard
   ├── Tech: Vue.js, Express.js, OpenWeather API
   ├── Descripción: Dashboard meteorológico con predicciones
   ├── Features: Geolocalización, gráficos, alertas
   └── GitHub: github.com/enriquedorantes/weather-dashboard

📁 Chat Application
   ├── Tech: React, Socket.io, MongoDB
   ├── Descripción: Aplicación de chat en tiempo real
   ├── Features: Rooms, file sharing, emoji reactions
   └── GitHub: github.com/enriquedorantes/realtime-chat`,
    },
    contact: {
      title: "cat ~/contact.json",
      content: `
{
  "email": "enrique.dorantesp@gmail.com",
  "phone": "+52 228 131 6624",
  "linkedin": "https://www.linkedin.com/in/enriquedorantesp/",
  "github": "https://github.com/enriquedorantesp?tab=repositories",
  "website": "https://enriquedorantesp.github.io/MyResumeWeb/",
  "location": "Ciudad de Mexico, Mexico",
  "availability": "Disponible para nuevas oportunidades",
  "preferred_contact": "email",
  "languages": ["Español (nativo)", "Inglés (avanzado)", "Francés (básico)"]
}`,
    },
  }

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    setHistory((prev) => [...prev, `$ ${cmd}`])

    if (trimmedCmd === "clear") {
      setHistory([])
      setCurrentSection("welcome")
    } else if (trimmedCmd === "help") {
      setCurrentSection("welcome")
    } else if (sections[trimmedCmd as keyof typeof sections]) {
      setCurrentSection(trimmedCmd)
    } else if (trimmedCmd === "") {
      // Do nothing for empty command
    } else {
      setHistory((prev) => [...prev, `bash: ${cmd}: command not found`])
    }

    setCommand("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(command)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const currentContent = sections[currentSection as keyof typeof sections]

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-green-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-green-300 text-sm ml-4">enrique@terminal-cv:~$</span>
        </div>

        {/* Command History */}
        <div className="mb-4">
          {history.map((line, index) => (
            <div key={index} className="text-green-300 mb-1">
              {line}
            </div>
          ))}
        </div>

        {/* Current Section Content */}
        <div className="mb-6">
          <div className="text-green-300 mb-2">$ {currentContent.title}</div>
          <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">{currentContent.content}</pre>
        </div>

        {/* Command Input */}
        <div className="flex items-center gap-2 sticky bottom-4">
          <span className="text-green-300">$</span>
          <Input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent border-none text-green-400 font-mono focus:ring-0 focus:outline-none p-0 h-auto"
            placeholder="Escribe un comando..."
            autoFocus
          />
          <span className={`w-2 h-5 bg-green-400 ${isTyping ? "opacity-100" : "opacity-0"} transition-opacity`}></span>
        </div>

        {/* Quick Command Buttons */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-green-800">
          {Object.keys(sections)
            .filter((key) => key !== "welcome")
            .map((cmd) => (
              <Button
                key={cmd}
                variant="outline"
                size="sm"
                onClick={() => executeCommand(cmd)}
                className="bg-transparent border-green-600 text-green-400 hover:bg-green-900/20 hover:text-green-300 font-mono text-xs"
              >
                {cmd}
              </Button>
            ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => executeCommand("clear")}
            className="bg-transparent border-green-600 text-green-400 hover:bg-green-900/20 hover:text-green-300 font-mono text-xs"
          >
            clear
          </Button>
        </div>
      </div>
    </div>
  )
}
