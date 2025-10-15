import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basic',
  imports: [RouterLink],
  template: `
    <div class="docker-page">
      <header class="hero-section">
        <div class="hero-content">
          <div class="docker-logo">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 9.5h-1V8.5H13.5V9.5zM13.5 7h-1V6H13.5V7zM15 9.5h-1V8.5H15V9.5zM15 7h-1V6H15V7zM16.5 9.5h-1V8.5H16.5V9.5zM16.5 7h-1V6H16.5V7z" fill="#2496ED"/>
              <path d="M20.5 7h-3v1.5h3V7zM20.5 9.5h-3V11h3V9.5z" fill="#2496ED"/>
              <path d="M1 11v1h1.5V11H1zM3.5 11v1H5V11H3.5zM6 11v1h1.5V11H6zM8.5 11v1H10V11H8.5zM11 11v1h1.5V11H11zM13.5 11v1H15V11H13.5zM16 11v1h1.5V11H16zM18.5 11v1H20V11H18.5zM20.5 11v1H22V11H20.5zM1 13.5v1h1.5v-1H1zM3.5 13.5v1H5v-1H3.5zM6 13.5v1h1.5v-1H6zM8.5 13.5v1H10v-1H8.5zM11 13.5v1h1.5v-1H11zM13.5 13.5v1H15v-1H13.5zM16 13.5v1h1.5v-1H16zM18.5 13.5v1H20v-1H18.5zM20.5 13.5v1H22v-1H20.5z" fill="#2496ED"/>
              <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="#2496ED" stroke-width="2" fill="none"/>
            </svg>
          </div>
          <h1>Guía Completa de Docker</h1>
          <p class="hero-subtitle">Aprende las bases de Docker y containerización de forma sencilla</p>

          <div class="navigation-menu">
            <div class="nav-section">
              <h4>Docker</h4>
              <a routerLink="/basicos" class="nav-button active">Básicos</a>
              <a routerLink="/intermedios" class="nav-button">Intermedios</a>
              <a routerLink="/avanzados" class="nav-button">Avanzados</a>
              <a routerLink="/especializados" class="nav-button">Especializados</a>
            </div>
            <div class="nav-section">
              <h4>Kubernetes</h4>
              <a routerLink="/k8s-basicos" class="nav-button">Básicos</a>
              <a routerLink="/k8s-intermedios" class="nav-button">Intermedios</a>
              <a routerLink="/k8s-avanzados" class="nav-button">Avanzados</a>
              <a routerLink="/k8s-especializados" class="nav-button">Especializados</a>
            </div>
          </div>
        </div>
      </header>

      <main class="main-content">
        <!-- Todo el contenido básico existente -->
        <section class="intro-section">
          <div class="container">
            <h2>¿Qué es Docker?</h2>
            <p>Docker es una plataforma de contenedores que permite empaquetar aplicaciones y sus dependencias en contenedores ligeros y portátiles. Esto resuelve el problema de "funciona en mi máquina" al asegurar que la aplicación se ejecute de la misma manera en cualquier entorno.</p>

            <div class="benefits-grid">
              <div class="benefit-card">
                <div class="benefit-icon">🚀</div>
                <h3>Portabilidad</h3>
                <p>Ejecuta la misma aplicación en desarrollo, testing y producción</p>
              </div>
              <div class="benefit-card">
                <div class="benefit-icon">⚡</div>
                <h3>Eficiencia</h3>
                <p>Contenedores ligeros que inician en segundos</p>
              </div>
              <div class="benefit-card">
                <div class="benefit-icon">🔧</div>
                <h3>Consistencia</h3>
                <p>Entorno predecible para todo el equipo</p>
              </div>
              <div class="benefit-card">
                <div class="benefit-icon">📦</div>
                <h3>Escalabilidad</h3>
                <p>Fácil escalado horizontal de aplicaciones</p>
              </div>
            </div>
          </div>
        </section>

        <section class="concepts-section">
          <div class="container">
            <h2>Conceptos Fundamentales</h2>
            <div class="concept-item">
              <h3>🐳 Contenedores</h3>
              <p>Los contenedores son unidades ligeras y ejecutables que incluyen todo lo necesario para ejecutar una aplicación: código, runtime, herramientas del sistema, bibliotecas y configuraciones.</p>
            </div>
            <div class="concept-item">
              <h3>📋 Imágenes</h3>
              <p>Las imágenes Docker son plantillas de solo lectura que definen la estructura del contenedor. Son como las "clases" de los contenedores, mientras que los contenedores son las "instancias".</p>
            </div>
            <div class="concept-item">
              <h3>📄 Dockerfile</h3>
              <p>Un Dockerfile es un archivo de texto que contiene instrucciones para construir una imagen Docker. Define el entorno, dependencias y comandos necesarios para tu aplicación.</p>
            </div>
            <div class="concept-item">
              <h3>🏭 Docker Hub</h3>
              <p>Docker Hub es el registro público de imágenes Docker donde puedes encontrar miles de imágenes listas para usar y compartir las tuyas propias.</p>
            </div>
          </div>
        </section>

        <section class="containers-explanation-section">
          <div class="container">
            <h2>¿Qué son los Contenedores?</h2>
            <div class="containers-intro">
              <p>Los contenedores son una tecnología de virtualización a nivel de sistema operativo que permite empaquetar una aplicación junto con todas sus dependencias en una unidad liviana, ejecutable e independiente.</p>
            </div>
          </div>
        </section>

        <section class="use-cases-section">
          <div class="container">
            <h2>Casos de Uso de Docker</h2>
            <div class="use-cases-grid">
              <div class="use-case-card">
                <div class="use-case-icon">💻</div>
                <h3>Desarrollo Local</h3>
                <p>Crear entornos consistentes para desarrolladores.</p>
              </div>
              <div class="use-case-card">
                <div class="use-case-icon">🧪</div>
                <h3>Testing y CI/CD</h3>
                <p>Automatizar pruebas en pipelines de integración continua.</p>
              </div>
              <div class="use-case-card">
                <div class="use-case-icon">🌐</div>
                <h3>Microservicios</h3>
                <p>Descomponer aplicaciones monolíticas en servicios independientes.</p>
              </div>
              <div class="use-case-card">
                <div class="use-case-icon">☁️</div>
                <h3>Cloud y DevOps</h3>
                <p>Despliegue en cloud providers usando Kubernetes o servicios manejados.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="commands-section">
          <div class="container">
            <h2>Comandos Básicos de Docker</h2>
            <div class="commands-grid">
              <div class="command-card">
                <code class="command">docker --version</code>
                <p>Verifica la instalación de Docker</p>
              </div>
              <div class="command-card">
                <code class="command">docker run hello-world</code>
                <p>Ejecuta el contenedor de prueba "hello-world"</p>
              </div>
              <div class="command-card">
                <code class="command">docker build -t mi-app .</code>
                <p>Construye una imagen desde un Dockerfile</p>
              </div>
              <div class="command-card">
                <code class="command">docker images</code>
                <p>Lista todas las imágenes disponibles</p>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>🎉 ¡Felicidades! Ahora conoces las bases de Docker. ¡Es hora de containerizar tu aplicación!</p>
            <div class="navigation-links">
              <a routerLink="/intermedios" class="nav-link">→ Explorar Conceptos Intermedios</a>
              <a routerLink="/especializados" class="nav-link">→ Ver Conceptos Especializados</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  `
})
export class BasicComponent {
}
