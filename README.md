<p align="center">
  <img src="https://github.com/martinraszx/kora-nueva/blob/4c40648d0692b6f9f94d57f67bf2f32eb82ea30a/assets/logo-horizontal.png" width="400" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"/>
</p>

# Kora 

### **Proyecto Integrador | Ingeniería Civil en Informática**
**Universidad de Los Lagos — Sede Chiloé, Castro**

---

## 📱 ¿Qué es Kora?
**Kora** es una aplicación móvil de asistencia y validación emocional orientada a estudiantes universitarios. Su objetivo es ayudar a **identificar conductas de control y manipulación** en parejas mediante cuestionarios breves visados por la Dirección de Genero de la Universidad de Los Lagos, ofreciendo un diagnóstico inmediato para prevenir situaciones de riesgo o ideación suicida.

---

## 🚀 Características Principales

* **Privacidad:** Procesamiento **100% local**. No recolecta datos personales ni almacena historiales en la nube; no deja rastro digital.
* **Violentómetro:** Clasificación objetiva de conductas abusivas para romper ciclos de *gaslighting*.
* **Test Relacional:** El Test Relacional es el corazón del software. Nuestro trabajo en diseño y gestión consistió en tomar un instrumento psicológico complejo y transformarlo en un cuestionario móvil interactivo, rápido y discreto. 

---

## 🛠️ Metodología

El desarrollo se estructura en el marco de ingeniería **CDIO**:
1. **Concebir:** Levantamiento de datos validado por la **Dirección de Género** para estructurar rutas de apoyo seguras.
2. **Diseñar:** Organización de roles, diagramas de flujo y prototipado UI/UX.
3. **Implementar:** Codificación de la app y lógica local con **React Native** y **Expo Go**.
4. **Operar:** Pruebas reales de usabilidad y rutas de escape con estudiantes de liceos y la Universidad.
5. **Mejora Continua:** Iteración y optimización de la interfaz post-testeo.

---

## 📊 Viabilidad y Equipo

* **Viabilidad:** Ejecución local ligera (Técnica), exenta de custodia de datos sensibles (Legal) y respaldada la Dirección de Género (Ética).

| Integrante | Roles y Responsabilidades |
| :--- | :--- |
| **Martín Aguirre** | Diseñador UI/UX & Creación de código |
| **Ignacio Sáez** | Diseñador UI/UX & Encargado de Documentación|
| **Felipe Levicán** | Diseñador UI/UX & Lider del Equipo |
| **Eduard Contreras** | Encargado de Documentación|

---

## 💻 Configuración del Entorno de Intalación
# <img src="https://skillicons.dev/icons?i=windows" height="30px" align="center" /> Windows

Este proyecto de Kora es una aplicación móvil desarrollada utilizando **React Native** y el ecosistema **Expo Go**. A continuación, se detalla el flujo de instalación completo junto con el catálogo de comandos necesarios para administrar, depurar y ejecutar el servidor de desarrollo en entornos Windows.

---

## 1. Prerrequisitos del Sistema

Antes de iniciar con los comandos, asegúrese de contar con las siguientes herramientas instaladas:

### En la Computadora (Windows)
1. **Node.js (Versión LTS recomendada):** Incluye automáticamente `npm` (Node Package Manager). Descárguelo en [nodejs.org](https://nodejs.org/).
2. **Git:** Necesario para el control de versiones y la clonación del repositorio. Descárguelo en [git-scm.com](https://git-scm.com/).
3. **Editor de Código:** Se sugiere [Visual Studio Code](https://code.visualstudio.com/).

### En el Dispositivo Móvil (Smartphone)
* Descargue e instale la aplicación gratuita **Expo Go** desde la Google Play Store (Android) o la App Store (iOS) [Expo GO](https://expo.dev/go).

> ⚠️ **REQUISITO CRÍTICO DE RED:** La computadora con Windows y el dispositivo móvil con Expo Go **deben estar conectados exactamente a la misma red Wi-Fi** local.

---

## 2. Instalación Paso a Paso

Abra la terminal de Windows (PowerShell, CMD o terminal de VS Code) y ejecute los siguientes comandos en orden:

```bash
# 1. Clonar el repositorio remoto
git clone https://github.com/martinraszx/kora-nueva.git

# 2. Acceder a la carpeta del proyecto
cd kora-nueva

# 3. Instalar todas las dependencias del archivo package.json
npm install

# 4. Inicio Estándar
npm start
```
# <img src="https://skillicons.dev/icons?i=linux" height="30px" align="center" /> Linux

## 1. Prerrequisitos del Sistema

A diferencia de otros sistemas operativos, los entornos Linux requieren herramientas específicas de gestión de versiones para evitar conflictos de permisos de administrador (`sudo`) al instalar paquetes globales. Asegúrese de contar con lo siguiente:

### En la Computadora (Linux)
* **Node.js (Versión LTS recomendada):** Se sugiere instalarlo a través de `nvm` (Node Version Manager) para gestionar las versiones de JavaScript de manera segura a nivel de usuario.
* **Git:** Herramienta esencial de control de versiones para clonar e interactuar con el repositorio.
* **Manejador de paquetes npm:** Incluido automáticamente al instalar Node.js.

---

## 2. Configuración Esencial en Linux (Paso Previo Obligatorio)

Por defecto, los sistemas operativos Linux limitan la cantidad de archivos que un programa puede vigilar en tiempo real a través del sistema `inotify`. Debido al gran volumen de dependencias y módulos que maneja React Native, si no expande este límite, el comando de inicio fallará con el error `ENOSPC: System limit for number of file watchers reached`.

Para solucionarlo de forma permanente en su máquina, abra la terminal y ejecute los siguientes comandos:

```bash
# 1. Registrar el nuevo límite máximo de vigilantes en el archivo de configuración del sistema
echo "fs.inotify.max_user_watches=524288" | sudo tee -a /etc/sysctl.conf

# 2. Cargar y aplicar los cambios en el kernel de forma inmediata
sudo sysctl -p

# Paso 1: Clonar el repositorio remoto desde GitHub
git clone https://github.com/martinraszx/kora-nueva.git

# Paso 2: Trasladar la ruta de la terminal a la carpeta raíz del proyecto
cd kora-nueva

# Paso 3: Descargar e instalar los paquetes definidos en el archivo package.json
npm install

# Inicio Estandar
npm start

```
---
## Vistazo de la Aplicación

<p align="center">
  <img src="https://github.com/martinraszx/kora-nueva/blob/ce6a2b988b15f0e5e69f49ebbc2385fcb565c8cd/assets/Koragif.gif?raw=true" alt="Kora Animación" width="300">
</p>
