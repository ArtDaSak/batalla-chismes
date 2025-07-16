# 👑 Batalla de Chismes

**¡Adéntrate en la contienda más jugosa donde las reinas del chisme destellan su ingenio y rivalizan por la fama viral!**

> 🛠️ *Proyecto en desarrollo.*

***Batalla de Chismes*** es una simulación de POO en Node.js donde figuras icónicas del cotilleo —cada una con su propio estilo para recolectar y difundir información— compiten en rondas para ver quién desata el chisme más viral en el reino.

---

## 🎮 Características Principales:

En esta simulación podrás:

* ☕ **Espiar reuniones de vecindario** como la *Tía Vecina*, escuchando discretamente mientras sirve café.
* 💼 **Interrogar con encanto profesional** como la *Compañera Curiosa*, convirtiendo anécdotas laborales en chismes.
* 🕵️‍♀️ **Hackear conversaciones escolares** como la *Estudiante Espía*, filtrando sus descubrimientos por estados de mensajería.
* 🎲 **Gestionar reputación y nivel de chisme** aleatoriamente con `Math.random()`, ajustando hasta 2 rondas de acción.
* 🌈 **Ver resultados coloreados** en consola con **chalk**: morado para chismes virales y naranja para reputación alta.

---

## 🧭 Instrucciones de uso:

1️⃣ Clona el repositorio:
```bash
git clone https://github.com/ArtDaSak/batalla-chismes.git
````

2️⃣ Instala dependencias:

```bash
npm install
```

3️⃣ Ejecuta la simulación:

```bash
npm start
```

4️⃣ Observa en consola las rondas de cotilleos y descubre quién ostenta el chisme más explosivo.

---

## 🚀 Tecnologías Utilizadas:

<ul>
  <li>
    <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="15"/>
    </a>
    Node.js.
  </li>

  <li>
    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="15"/>
    </a>
    JavaScript.
  </li>

  <li>
    <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VS Code" width="15"/>
    </a>
    Visual Studio Code.
  </li>

  <li>
    <a href="https://www.npmjs.com/package/chalk" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/chalk/chalk/main/media/logo.svg" alt="chalk logo" width="15"/>
    </a>
    chalk para colorear la salida en consola.
  </li>

  <li>
    🎲<code>Math.random()</code> para simular variaciones de reputación y nivel de chisme.
  </li>
</ul>


---

## 📂 Estructura del Proyecto:

```bash
batalla-chismes/
├── classes/                 # Definición de la lógica de POO
│   ├── Chismosa.js          # Clase abstracta base
│   ├── TiaVecina.js         # Subclase: Tía Vecina
│   ├── CompaneraCuriosa.js  # Subclase: Compañera Curiosa
│   └── EstudianteEspia.js   # Subclase: Estudiante Espía
├── index.js                 # Punto de entrada y simulación
├── package.json             # Metadatos y dependencias
├── .gitignore               # Archivos ignorados por Git
└── README.md                # Documentación del proyecto
```

---

## 📄 Licencia:

Este proyecto se distribuye bajo la **Licencia MIT**. Consulta [LICENSE.md](./LICENSE.md) para más detalles.

---

## ✨ Créditos:

Desarrollado con 💖 por *ArtDaSak* (Darien Carvajal) y *Charlie* (ChatGPT de OpenAI).

---

## 👀 Disclaimer:

Este proyecto fue desarrollado con apoyo de herramientas de inteligencia artificial (IA), mayormente Charlie (ChatGPT de Open AI), utilizadas con fines exclusivamente educativos y de aprendizaje personal.