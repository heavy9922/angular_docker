import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-advanced',
  imports: [RouterLink],
  template: `
    <div class="advanced-page">
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
          <h1>Docker Conceptos Avanzados</h1>
          <p class="hero-subtitle">Domina las técnicas más avanzadas de Docker para entornos de producción</p>

          <div class="navigation-menu">
            <a routerLink="/basicos" class="nav-button">Conceptos Básicos</a>
            <a routerLink="/intermedios" class="nav-button">Conceptos Intermedios</a>
            <a routerLink="/avanzados" class="nav-button active">Conceptos Avanzados</a>
            <a routerLink="/especializados" class="nav-button">Especializados</a>
          </div>
        </div>
      </header>

      <main class="main-content">
        <!-- Kubernetes Integration Section -->
        <section class="kubernetes-section">
          <div class="container">
            <h2>☸️ Integración con Kubernetes</h2>
            <p>Kubernetes es el orquestador de contenedores más popular para producción. Aprende cómo Docker se integra con K8s.</p>

            <div class="concept-grid">
              <div class="concept-card">
                <h3>Pods y Contenedores</h3>
                <p>Los Pods son la unidad mínima de despliegue en Kubernetes y pueden contener uno o más contenedores.</p>
                <div class="code-example">
                  <code><pre>apiVersion: v1
kind: Pod
metadata:
  name: mi-pod
spec:
  containers:
  - name: app-container
    image: mi-app:latest
    ports:
    - containerPort: 3000</pre></code>
                </div>
              </div>

              <div class="concept-card">
                <h3>Deployments</h3>
                <p>Los Deployments gestionan réplicas de Pods, permiten rollouts y rollbacks automáticos.</p>
                <div class="code-example">
                  <code><pre>apiVersion: apps/v1
kind: Deployment
metadata:
  name: mi-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mi-app
  template:
    metadata:
      labels:
        app: mi-app
    spec:
      containers:
      - name: app
        image: mi-app:latest</pre></code>
                </div>
              </div>

              <div class="concept-card">
                <h3>Services</h3>
                <p>Los Services exponen aplicaciones mediante IPs estables y balanceadores de carga.</p>
                <div class="code-example">
                  <code><pre>apiVersion: v1
kind: Service
metadata:
  name: mi-service
spec:
  selector:
    app: mi-app
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Security Section -->
        <section class="security-section">
          <div class="container">
            <h2>🔒 Seguridad Avanzada</h2>
            <p>Implementa las mejores prácticas de seguridad para contenedores en producción.</p>

            <div class="security-features">
              <div class="feature-card">
                <h3>🛡️ Security Scanning</h3>
                <p>Escanear imágenes para vulnerabilidades antes del despliegue.</p>
                <div class="code-example">
                  <code><pre># Docker Scan
docker scan mi-imagen:latest

# Trivy Scanner
trivy image mi-imagen:latest

# Clair Scanner
clair-scanner --ip="192.168.1.100" mi-imagen</pre></code>
                </div>
              </div>

              <div class="feature-card">
                <h3>🔐 Rootless Containers</h3>
                <p>Ejecutar contenedores sin privilegios de root para mayor seguridad.</p>
                <div class="code-example">
                  <code><pre># Habilitar rootless mode
dockerd-rootless-setuptool.sh install

# Ejecutar con usuario no-root
docker run --user 1000:1000 \
  --read-only \
  --tmpfs /tmp \
  mi-app:latest</pre></code>
                </div>
              </div>

              <div class="feature-card">
                <h3>🏛️ Content Trust</h3>
                <p>Verificar la integridad y autoría de las imágenes usando Docker Content Trust.</p>
                <div class="code-example">
                  <code><pre># Habilitar DCT
export DOCKER_CONTENT_TRUST=1

# Firmar imagen
docker push mi-registry.com/mi-app:latest

# Verificar firmas
docker trust inspect mi-registry.com/mi-app:latest</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Performance Optimization Section -->
        <section class="performance-section">
          <div class="container">
            <h2>⚡ Optimización de Rendimiento</h2>
            <p>Técnicas avanzadas para optimizar el rendimiento de contenedores y aplicaciones.</p>

            <div class="performance-tips">
              <div class="tip-card">
                <h3>🎯 Resource Limits</h3>
                <p>Configurar límites de CPU y memoria para evitar el "noisy neighbor".</p>
                <div class="code-example">
                  <code><pre># Docker Compose
services:
  app:
    image: mi-app
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M</pre></code>
                </div>
              </div>

              <div class="tip-card">
                <h3>💾 Multi-stage Optimization</h3>
                <p>Construcciones multi-etapa optimizadas para imágenes minimalistas.</p>
                <div class="code-example">
                  <code><pre># Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Runtime stage
FROM node:18-alpine AS runtime
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001
COPY --from=builder --chown=nextjs:nodejs /app ./
USER nextjs
EXPOSE 3000
CMD ["npm", "start"]</pre></code>
                </div>
              </div>

              <div class="tip-card">
                <h3>🚀 Layer Caching</h3>
                <p>Optimizar el orden de las instrucciones para maximizar el cache.</p>
                <div class="code-example">
                  <code><pre># ✅ Buen orden - cacheable
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ❌ Mal orden - no cacheable
COPY . .
RUN npm ci
RUN npm run build</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Advanced Networking Section -->
        <section class="advanced-networking-section">
          <div class="container">
            <h2>🌐 Networking Avanzado</h2>
            <p>Configuraciones de red complejas para aplicaciones distribuidas.</p>

            <div class="networking-concepts">
              <div class="network-concept">
                <h3>🔗 Service Mesh</h3>
                <p>Implementar service mesh con Istio, Linkerd o Consul Connect.</p>
                <div class="code-example">
                  <code><pre># Istio Service Mesh
apiVersion: v1
kind: Service
metadata:
  name: mi-service
  annotations:
    linkerd.io/inject: enabled
spec:
  selector:
    app: mi-app
  ports:
  - port: 8080
    name: http</pre></code>
                </div>
              </div>

              <div class="network-concept">
                <h3>🛡️ Network Policies</h3>
                <p>Controlar el tráfico entre pods con Kubernetes Network Policies.</p>
                <div class="code-example">
                  <code><pre>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
    ports:
    - protocol: TCP
      port: 8080</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- CI/CD Integration Section -->
        <section class="cicd-section">
          <div class="container">
            <h2>🔄 CI/CD Avanzado</h2>
            <p>Pipeline de integración y despliegue continuo optimizado para contenedores.</p>

            <div class="cicd-workflows">
              <div class="workflow-card">
                <h3>🏗️ GitHub Actions</h3>
                <p>Pipeline completo con build, test, scan y deploy.</p>
                <div class="code-example">
                  <code><pre>name: Docker Build & Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Build image
      run: docker build -t $REGISTRY/app:$GITHUB_SHA .
    - name: Security scan
      run: docker run --rm -v /var/run/docker.sock:/var/run/docker.sock
           aquasec/trivy image $REGISTRY/app:$GITHUB_SHA
    - name: Push to registry
      run: docker push $REGISTRY/app:$GITHUB_SHA</pre></code>
                </div>
              </div>

              <div class="workflow-card">
                <h3>🚀 GitLab CI</h3>
                <p>Pipeline con stages paralelos y cache optimizado.</p>
                <div class="code-example">
                  <code><pre>stages:
  - test
  - build
  - deploy

variables:
  DOCKER_DRIVER: overlay2

services:
  - docker:dind

build:
  stage: build
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  only:
    - main</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Monitoring & Observability Section -->
        <section class="monitoring-section">
          <div class="container">
            <h2>📊 Monitoreo y Observabilidad</h2>
            <p>Herramientas avanzadas para monitorear contenedores en producción.</p>

            <div class="monitoring-tools">
              <div class="tool-card">
                <h3>📈 Prometheus + Grafana</h3>
                <p>Stack completo de métricas y visualización.</p>
                <div class="code-example">
                  <code><pre># docker-compose.yml
version: '3.8'
services:
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin</pre></code>
                </div>
              </div>

              <div class="tool-card">
                <h3>📋 ELK Stack</h3>
                <p>Agregación y análisis de logs con Elasticsearch, Logstash y Kibana.</p>
                <div class="code-example">
                  <code><pre># Logging driver configuration
services:
  app:
    image: mi-app
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
    labels:
      - "com.company.service=myapp"</pre></code>
                </div>
              </div>

              <div class="tool-card">
                <h3>🔍 Distributed Tracing</h3>
                <p>Trazabilidad distribuida con Jaeger o Zipkin.</p>
                <div class="code-example">
                  <code><pre># Docker Compose con Jaeger
version: '3.8'
services:
  jaeger:
    image: jaegertracing/all-in-one
    ports:
      - "16686:16686"
      - "14268:14268"
    environment:
      - COLLECTOR_OTLP_ENABLED=true</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Production Patterns Section -->
        <section class="patterns-section">
          <div class="container">
            <h2>🏭 Patrones de Producción</h2>
            <p>Patrones arquitectónicos y mejores prácticas para aplicaciones en producción.</p>

            <div class="pattern-examples">
              <div class="pattern-card">
                <h3>🏗️ Microservicios</h3>
                <p>Arquitectura de microservicios con API Gateway y Service Discovery.</p>
                <div class="architecture-diagram">
                  <div class="diagram">
                    <div class="service">API Gateway</div>
                    <div class="services-row">
                      <div class="service">Auth Service</div>
                      <div class="service">User Service</div>
                      <div class="service">Order Service</div>
                    </div>
                    <div class="service">Database Cluster</div>
                  </div>
                </div>
              </div>

              <div class="pattern-card">
                <h3>🔄 Event-Driven Architecture</h3>
                <p>Comunicación asíncrona con message queues y event streaming.</p>
                <div class="code-example">
                  <code><pre># Event-driven with Redis Streams
version: '3.8'
services:
  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes

  publisher:
    image: mi-app:publisher
    environment:
      - REDIS_URL=redis://redis:6379

  subscriber:
    image: mi-app:subscriber
    environment:
      - REDIS_URL=redis://redis:6379</pre></code>
                </div>
              </div>

              <div class="pattern-card">
                <h3>🚀 Blue-Green Deployment</h3>
                <p>Despliegues sin downtime usando estrategias blue-green.</p>
                <div class="code-example">
                  <code><pre># Blue-Green with Docker Swarm
docker service create --name app-blue \
  --replicas 3 \
  --network frontend \
  mi-app:blue

docker service update --image mi-app:green \
  --update-parallelism 1 \
  --update-delay 30s \
  app-blue</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>🎯 ¡Felicidades! Has dominado los conceptos más avanzados de Docker. Estás listo para manejar aplicaciones en producción.</p>
            <div class="navigation-links">
              <a routerLink="/basicos" class="nav-link">← Volver a Conceptos Básicos</a>
              <a routerLink="/intermedios" class="nav-link">← Conceptos Intermedios</a>
              <a routerLink="/especializados" class="nav-link">→ Conceptos Especializados</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  `
})
export class AdvancedComponent {
}
