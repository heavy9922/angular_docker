import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-intermediate',
  imports: [RouterLink],
  template: `
    <div class="intermediate-page">
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
          <h1>Docker Conceptos Intermedios</h1>
          <p class="hero-subtitle">Domina técnicas avanzadas de Docker para aplicaciones en producción</p>

          <div class="navigation-menu">
            <div class="nav-section">
              <h4>Docker</h4>
              <a routerLink="/basicos" class="nav-button">Básicos</a>
              <a routerLink="/intermedios" class="nav-button active">Intermedios</a>
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
        <!-- Networking Section -->
        <section class="networking-section">
          <div class="container">
            <h2>🐳 Docker Networking</h2>
            <p>Docker proporciona diferentes tipos de redes para aislar y conectar contenedores.</p>

            <div class="concept-grid">
              <div class="concept-card">
                <h3>Bridge Network</h3>
                <p>Red por defecto que permite comunicación entre contenedores en el mismo host.</p>
                <div class="code-example">
                  <code>docker network create mi-red</code>
                  <code>docker run --network mi-red nginx</code>
                </div>
              </div>

              <div class="concept-card">
                <h3>Host Network</h3>
                <p>El contenedor comparte directamente la pila de red del host.</p>
                <div class="code-example">
                  <code>docker run --network host nginx</code>
                </div>
              </div>

              <div class="concept-card">
                <h3>Overlay Network</h3>
                <p>Permite comunicación entre contenedores en diferentes hosts (Docker Swarm).</p>
                <div class="code-example">
                  <code>docker network create --driver overlay mi-overlay</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Volumes Section -->
        <section class="volumes-section">
          <div class="container">
            <h2>💾 Volúmenes y Persistencia</h2>
            <p>Los volúmenes permiten persistir datos más allá del ciclo de vida del contenedor.</p>

            <div class="volume-types">
              <div class="volume-type">
                <h3>Volúmenes Nombrados</h3>
                <p>Gestionados por Docker, recomendados para producción.</p>
                <div class="code-example">
                  <code>docker volume create mi-volumen</code>
                  <code>docker run -v mi-volumen:/data postgres</code>
                </div>
              </div>

              <div class="volume-type">
                <h3>Bind Mounts</h3>
                <p>Montan directorios del host en el contenedor.</p>
                <div class="code-example">
                  <code>docker run -v /ruta/host:/ruta/contenedor nginx</code>
                </div>
              </div>

              <div class="volume-type">
                <h3>tmpfs Mounts</h3>
                <p>Almacenamiento temporal en memoria RAM.</p>
                <div class="code-example">
                  <code>docker run --tmpfs /tmp nginx</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Multi-stage Builds Section -->
        <section class="multistage-section">
          <div class="container">
            <h2>🏗️ Multi-stage Builds</h2>
            <p>Construye imágenes más pequeñas y seguras separando el proceso de build del runtime.</p>

            <div class="example-dockerfile">
              <h3>Ejemplo Avanzado de Dockerfile</h3>
              <div class="code-block">
                <pre><code># Etapa 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Etapa 2: Testing
FROM builder AS tester
RUN npm run test

# Etapa 3: Production
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]</code></pre>
              </div>
            </div>
          </div>
        </section>

        <!-- Docker Compose Section -->
        <section class="compose-section">
          <div class="container">
            <h2>🐙 Docker Compose</h2>
            <p>Orquesta múltiples contenedores y servicios con un simple archivo YAML.</p>

            <div class="compose-features">
              <div class="compose-feature">
                <h3>📋 Definición de Servicios</h3>
                <div class="code-example">
                  <code><pre>services:
  web:
    build: .
    ports:
      - "3000:3000"
  database:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp</pre></code>
                </div>
              </div>

              <div class="compose-feature">
                <h3>🌐 Redes Personalizadas</h3>
                <div class="code-example">
                  <code><pre>networks:
  app-network:
    driver: bridge</pre></code>
                </div>
              </div>

              <div class="compose-feature">
                <h3>💾 Volúmenes Persistentes</h3>
                <div class="code-example">
                  <code><pre>volumes:
  db-data:
  app-logs:</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Environment & Secrets Section -->
        <section class="env-secrets-section">
          <div class="container">
            <h2>🔐 Variables de Entorno y Secrets</h2>
            <p>Gestiona configuración y datos sensibles de forma segura.</p>

            <div class="env-strategies">
              <div class="strategy">
                <h3>Variables de Entorno</h3>
                <p>Para configuración no sensible que puede variar entre entornos.</p>
                <div class="code-example">
                  <code>docker run -e NODE_ENV=production -e PORT=3000 mi-app</code>
                </div>
              </div>

              <div class="strategy">
                <h3>Docker Secrets</h3>
                <p>Para datos sensibles como passwords, API keys, certificados.</p>
                <div class="code-example">
                  <code>echo "mi-password" | docker secret create db_password -</code>
                </div>
              </div>

              <div class="strategy">
                <h3>Archivos .env</h3>
                <p>Docker Compose puede usar archivos .env para cargar variables.</p>
                <div class="code-example">
                  <code><pre># .env
DB_PASSWORD=secret123
API_KEY=abc123</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Health Checks Section -->
        <section class="health-section">
          <div class="container">
            <h2>🏥 Health Checks</h2>
            <p>Monitorea el estado de tus contenedores y automatiza respuestas a fallos.</p>

            <div class="health-methods">
              <div class="method">
                <h3>Dockerfile HEALTHCHECK</h3>
                <div class="code-example">
                  <code><pre>HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1</pre></code>
                </div>
              </div>

              <div class="method">
                <h3>Docker Compose Healthcheck</h3>
                <div class="code-example">
                  <code><pre>healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
  interval: 30s
  timeout: 10s
  retries: 3</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Image Optimization Section -->
        <section class="optimization-section">
          <div class="container">
            <h2>⚡ Optimización de Imágenes</h2>
            <p>Técnicas para crear imágenes más pequeñas, seguras y eficientes.</p>

            <div class="optimization-tips">
              <div class="tip">
                <h3>🔍 Usa .dockerignore</h3>
                <p>Excluye archivos innecesarios del contexto de build.</p>
                <div class="code-example">
                  <code><pre>node_modules
.git
*.md
.env.local</pre></code>
                </div>
              </div>

              <div class="tip">
                <h3>📦 Imágenes Alpine</h3>
                <p>Usa variantes Alpine para reducir significativamente el tamaño.</p>
                <div class="code-example">
                  <code>FROM node:22-alpine  # En lugar de node:22</code>
                </div>
              </div>

              <div class="tip">
                <h3>🔄 Cache de Layers</h3>
                <p>Ordena las instrucciones de mayor a menor frecuencia de cambio.</p>
                <div class="code-example">
                  <code><pre># Primero copiar dependencias
COPY package*.json ./
RUN npm install

# Después copiar código fuente
COPY . .</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Monitoring & Logging Section -->
        <section class="monitoring-section">
          <div class="container">
            <h2>📊 Monitoreo y Logs</h2>
            <p>Supervisa el rendimiento y gestiona logs de tus contenedores.</p>

            <div class="monitoring-tools">
              <div class="tool">
                <h3>📈 Docker Stats</h3>
                <p>Monitoreo en tiempo real del uso de recursos.</p>
                <div class="code-example">
                  <code>docker stats</code>
                </div>
              </div>

              <div class="tool">
                <h3>📋 Log Management</h3>
                <p>Gestiona y rota logs para evitar llenar el disco.</p>
                <div class="code-example">
                  <code>docker run --log-driver json-file --log-opt max-size=10m --log-opt max-file=3 mi-app</code>
                </div>
              </div>

              <div class="tool">
                <h3>🔍 Log Inspection</h3>
                <p>Inspecciona logs de contenedores específicos.</p>
                <div class="code-example">
                  <code>docker logs -f --tail 100 nombre-contenedor</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>🚀 ¡Has dominado los conceptos intermedios de Docker! Ahora puedes crear aplicaciones más robustas y escalables.</p>
            <div class="navigation-links">
              <a routerLink="/basicos" class="nav-link">← Volver a Conceptos Básicos</a>
              <a routerLink="/avanzados" class="nav-link">→ Explorar Conceptos Avanzados</a>
              <a routerLink="/especializados" class="nav-link">→ Conceptos Especializados</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  `
})
export class IntermediateComponent {
}
