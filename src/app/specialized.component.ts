import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-specialized',
  imports: [RouterLink],
  template: `
    <div class="specialized-page">
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
          <h1>Docker Conceptos Especializados</h1>
          <p class="hero-subtitle">Explora conceptos avanzados y casos de uso específicos de Docker</p>

          <div class="navigation-menu">
            <a routerLink="/basicos" class="nav-button">Conceptos Básicos</a>
            <a routerLink="/intermedios" class="nav-button">Conceptos Intermedios</a>
            <a routerLink="/avanzados" class="nav-button">Conceptos Avanzados</a>
            <a routerLink="/especializados" class="nav-button active">Conceptos Especializados</a>
          </div>
        </div>
      </header>

      <main class="main-content">
        <!-- Registry & Distribution Section -->
        <section class="registry-section">
          <div class="container">
            <h2>🏪 Registries y Distribución</h2>
            <p>Gestiona y distribuye imágenes Docker a través de registries públicos y privados.</p>

            <div class="registry-concepts">
              <div class="registry-card">
                <h3>🏛️ Docker Hub Privado</h3>
                <p>Configura un registry privado para imágenes corporativas y control de acceso.</p>
                <div class="code-example">
                  <code><pre># Ejecutar registry privado
docker run -d -p 5000:5000 --name registry registry:2

# Configurar como registry inseguro para desarrollo
echo '{{ '{' }}"insecure-registries":["localhost:5000"]{{ '}' }}' > /etc/docker/daemon.json

# Hacer push a registry privado
docker tag mi-app:latest localhost:5000/mi-app:latest
docker push localhost:5000/mi-app:latest</pre></code>
                </div>
              </div>

              <div class="registry-card">
                <h3>🔐 Harbor Registry</h3>
                <p>Harbor es una solución enterprise con features avanzados de seguridad y gestión.</p>
                <div class="code-example">
                  <code><pre># Instalar Harbor con Docker Compose
version: '3'
services:
  harbor-registry:
    image: goharbor/harbor-core:v2.8.0
    depends_on:
      - harbor-db
      - harbor-redis
    environment:
      - CORE_SECRET: not-a-secure-key</pre></code>
                </div>
              </div>

              <div class="registry-card">
                <h3>☁️ Cloud Registries</h3>
                <p>Integra con AWS ECR, Google GCR, Azure ACR para registries en la nube.</p>
                <div class="code-example">
                  <code><pre># AWS ECR
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-west-2.amazonaws.com

docker tag mi-app:latest 123456789.dkr.ecr.us-west-2.amazonaws.com/mi-app:latest
docker push 123456789.dkr.ecr.us-west-2.amazonaws.com/mi-app:latest</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- BuildKit & Advanced Builds Section -->
        <section class="buildkit-section">
          <div class="container">
            <h2>🔨 BuildKit y Construcciones Avanzadas</h2>
            <p>Utiliza Docker BuildKit para construcciones más rápidas y funcionalidades avanzadas.</p>

            <div class="buildkit-features">
              <div class="feature-item">
                <h3>⚡ BuildKit Cache</h3>
                <p>Cache distribuido y mounts para acelerar builds en CI/CD.</p>
                <div class="code-example">
                  <code><pre># Habilitar BuildKit
export DOCKER_BUILDKIT=1

# Build con cache mount
docker build --build-arg BUILDKIT_INLINE_CACHE=1 \
  --cache-from type=registry,ref=mi-app:cache \
  --cache-to type=registry,ref=mi-app:cache \
  -t mi-app:latest .</pre></code>
                </div>
              </div>

              <div class="feature-item">
                <h3>🏗️ Multi-platform Builds</h3>
                <p>Construye imágenes para múltiples arquitecturas (AMD64, ARM64).</p>
                <div class="code-example">
                  <code><pre># Crear builder multi-plataforma
docker buildx create --name multiarch --use

# Build para múltiples plataformas
docker buildx build --platform linux/amd64,linux/arm64 \
  -t mi-app:latest --push .

# Usar Dockerfile con syntax avanzada
# syntax=docker/dockerfile:1
FROM alpine:latest AS base</pre></code>
                </div>
              </div>

              <div class="feature-item">
                <h3>🔧 Build Arguments Avanzados</h3>
                <p>Usa build args dinámicos y mounts para builds más flexibles.</p>
                <div class="code-example">
                  <code><pre># Dockerfile con mount de cache
RUN --mount=type=cache,target=/var/cache/apk \
    apk add --no-cache nodejs npm

# Build con argumentos dinámicos
docker build --build-arg NODE_VERSION=18 --build-arg BUILD_ENV=production -t mi-app .</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Storage Drivers Section -->
        <section class="storage-section">
          <div class="container">
            <h2>💾 Storage Drivers Avanzados</h2>
            <p>Configura diferentes storage drivers para optimizar el rendimiento según tu infraestructura.</p>

            <div class="storage-drivers">
              <div class="driver-card">
                <h3>🔄 Overlay2</h3>
                <p>Driver por defecto en Linux, optimizado para la mayoría de casos de uso.</p>
                <div class="code-example">
                  <code><pre># Configurar en /etc/docker/daemon.json
# storage-driver: overlay2
# storage-opts:
#   - overlay2.override_kernel_check=true

# Comando equivalente
dockerd --storage-driver=overlay2</pre></code>
                </div>
              </div>

              <div class="driver-card">
                <h3>📦 ZFS</h3>
                <p>Para sistemas con ZFS, proporciona snapshots y compresión nativa.</p>
                <div class="code-example">
                  <code><pre># Configurar ZFS
zfs create -o mountpoint=/var/lib/docker tank/docker
echo '{{ '{' }}"storage-driver":"zfs"{{ '}' }}' > /etc/docker/daemon.json</pre></code>
                </div>
              </div>

              <div class="driver-card">
                <h3>☁️ Device Mapper</h3>
                <p>Ideal para entornos cloud con thin provisioning.</p>
                <div class="code-example">
                  <code><pre># Configuración para producción
# storage-driver: devicemapper
# storage-opts:
#   - dm.thinpooldev=/dev/mapper/docker-thinpool
#   - dm.use_deferred_removal=true

# Comando equivalente
dockerd --storage-driver=devicemapper</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Docker Swarm Section -->
        <section class="swarm-section">
          <div class="container">
            <h2>🐝 Docker Swarm</h2>
            <p>Orquestación nativa de Docker para clusters simples y efectivos.</p>

            <div class="swarm-features">
              <div class="swarm-card">
                <h3>🏗️ Cluster Setup</h3>
                <p>Configura un cluster Swarm desde cero.</p>
                <div class="code-example">
                  <code><pre># Inicializar swarm en manager node
docker swarm init --advertise-addr 192.168.1.100

# Unir worker nodes
docker swarm join --token SWMTKN-1-xxx 192.168.1.100:2377

# Verificar estado del cluster
docker node ls</pre></code>
                </div>
              </div>

              <div class="swarm-card">
                <h3>🚀 Service Deployment</h3>
                <p>Despliega servicios altamente disponibles con auto-scaling.</p>
                <div class="code-example">
                  <code><pre># Desplegar servicio
docker service create --name web --replicas 3 \
  --publish 80:80 nginx:alpine

# Auto-scaling
docker service scale web=5

# Rolling updates
docker service update --image nginx:1.21 web</pre></code>
                </div>
              </div>

              <div class="swarm-card">
                <h3>🌐 Load Balancing</h3>
                <p>Swarm proporciona load balancing automático y service discovery.</p>
                <div class="code-example">
                  <code><pre># Configurar overlay network
docker network create --driver overlay frontend

# Servicio con múltiples replicas y load balancing
docker service create --name api \
  --network frontend \
  --replicas 3 \
  --publish 8080:3000 \
  mi-api:latest</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Troubleshooting Section -->
        <section class="troubleshooting-section">
          <div class="container">
            <h2>🔧 Troubleshooting Avanzado</h2>
            <p>Técnicas y herramientas para diagnosticar y resolver problemas complejos.</p>

            <div class="troubleshooting-tools">
              <div class="tool-item">
                <h3>🔍 Debugging Containers</h3>
                <p>Herramientas para inspeccionar contenedores y procesos internos.</p>
                <div class="code-example">
                  <code><pre># Entrar a contenedor en ejecución
docker exec -it mi-contenedor /bin/sh

# Inspeccionar contenedor
docker inspect mi-contenedor

# Ver eventos de Docker
docker events --since 1h

# Logs con timestamps
docker logs --timestamps --since 30m mi-contenedor</pre></code>
                </div>
              </div>

              <div class="tool-item">
                <h3>📊 Performance Profiling</h3>
                <p>Analiza el rendimiento de contenedores y identifica cuellos de botella.</p>
                <div class="code-example">
                  <code><pre># Stats en tiempo real
docker stats --format "table $CONTAINER\\t$CPUPERC\\t$MEMUSAGE"

# Inspeccionar uso de recursos
docker run --rm -it --pid=host justincormack/nsenter1

# Analizar capas de imagen
docker history mi-imagen:latest</pre></code>
                </div>
              </div>

              <div class="tool-item">
                <h3>🚨 Health Monitoring</h3>
                <p>Configura monitoreo proactivo y alertas automatizadas.</p>
                <div class="code-example">
                  <code><pre># Healthcheck avanzado
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:3000/health | grep -q 'OK' || exit 1

# Script de monitoreo personalizado
#!/bin/bash
if ! docker ps | grep -q mi-app; then
  echo "ALERT: Container mi-app is down" | mail -s "Docker Alert" admin@company.com
fi</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Custom Plugins Section -->
        <section class="plugins-section">
          <div class="container">
            <h2>🔌 Plugins y Extensiones</h2>
            <p>Extiende Docker con plugins personalizados y herramientas de terceros.</p>

            <div class="plugin-examples">
              <div class="plugin-card">
                <h3>🗂️ Volume Plugins</h3>
                <p>Integra con sistemas de almacenamiento externos usando plugins.</p>
                <div class="code-example">
                  <code><pre># Plugin para AWS EFS
docker volume create --driver rexray/efs efs-volume

# Usar en contenedor
docker run -v efs-volume:/data mi-app

# Plugin para NFS
docker volume create --driver local \
  --opt type=nfs \
  --opt o=addr=192.168.1.100,rw \
  --opt device=:/path/to/share nfs-volume</pre></code>
                </div>
              </div>

              <div class="plugin-card">
                <h3>🌐 Network Plugins</h3>
                <p>Plugins de red para integración con SDN y arquitecturas complejas.</p>
                <div class="code-example">
                  <code><pre># Plugin Weave Net
docker network create --driver weave \
  --ipam-driver weave \
  --subnet 10.32.0.0/12 \
  weave-net

# Plugin Calico para Kubernetes-style networking
docker network create --driver calico calico-net</pre></code>
                </div>
              </div>

              <div class="plugin-card">
                <h3>🔧 Authorization Plugins</h3>
                <p>Control de acceso granular y políticas de seguridad personalizadas.</p>
                <div class="code-example">
                  <code><pre># Configurar plugin de autorización
# /etc/docker/daemon.json
# authorization-plugins: ["authz-broker"]
# plugins:
#   authz-broker:
#     policy: "/etc/docker/authz.json"

# Ejemplo de configuración YAML equivalente
export DOCKER_AUTHORIZATION_PLUGIN=authz-broker</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Edge Cases Section -->
        <section class="edge-cases-section">
          <div class="container">
            <h2>🎯 Casos de Uso Especializados</h2>
            <p>Docker en situaciones específicas y casos de uso avanzados.</p>

            <div class="edge-scenarios">
              <div class="scenario-card">
                <h3>🏭 Legacy Application Migration</h3>
                <p>Containeriza aplicaciones legacy y sistemas monolíticos antiguos.</p>
                <div class="code-example">
                  <code><pre># Dockerfile para aplicación Java legacy
FROM openjdk:8-jre-alpine
ADD legacy-app.war /usr/local/tomcat/webapps/
EXPOSE 8080

# Wrapper script para manejar shutdown graceful
COPY graceful-shutdown.sh /
RUN chmod +x /graceful-shutdown.sh
CMD ["/graceful-shutdown.sh"]</pre></code>
                </div>
              </div>

              <div class="scenario-card">
                <h3>🎮 Game Servers</h3>
                <p>Containeriza servidores de juegos con gestión de estado persistente.</p>
                <div class="code-example">
                  <code><pre># Dockerfile para servidor de Minecraft
FROM openjdk:17-alpine
RUN mkdir -p /minecraft/data
VOLUME ["/minecraft/data"]
COPY minecraft-server.jar /minecraft/
WORKDIR /minecraft
EXPOSE 25565
CMD ["java", "-Xmx2G", "-jar", "minecraft-server.jar", "nogui"]</pre></code>
                </div>
              </div>

              <div class="scenario-card">
                <h3>🔬 Scientific Computing</h3>
                <p>Entornos reproducible para investigación y análisis de datos.</p>
                <div class="code-example">
                  <code><pre># Dockerfile para Jupyter con R y Python
FROM jupyter/datascience-notebook:latest
USER root
RUN apt-get update && apt-get install -y \
    r-base-dev \
    libcurl4-openssl-dev
USER jovyan
RUN pip install --no-cache-dir \
    plotly \
    dash</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>🎓 ¡Excelente! Has explorado conceptos especializados de Docker que abren nuevas posibilidades para casos de uso únicos y avanzados.</p>
            <div class="navigation-links">
              <a routerLink="/basicos" class="nav-link">← Volver a Conceptos Básicos</a>
              <a routerLink="/intermedios" class="nav-link">← Conceptos Intermedios</a>
              <a routerLink="/avanzados" class="nav-link">← Conceptos Avanzados</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  `
})
export class SpecializedComponent {
}
