import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kubernetes-basic',
  imports: [RouterLink],
  template: `
    <div class="kubernetes-page">
      <header class="hero-section">
        <div class="hero-content">
          <div class="kubernetes-logo">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#326CE5" stroke-width="2" fill="none"/>
              <path d="M12 2L7 4.5V19.5L12 22L17 19.5V4.5L12 2Z" stroke="#326CE5" stroke-width="1.5" fill="none"/>
              <path d="M7 4.5L2 7L7 9.5" stroke="#326CE5" stroke-width="1.5"/>
              <path d="M17 4.5L22 7L17 9.5" stroke="#326CE5" stroke-width="1.5"/>
            </svg>
          </div>
          <h1>Guía Completa de Kubernetes</h1>
          <p class="hero-subtitle">Aprende las bases de Kubernetes y orquestación de contenedores</p>

          <div class="navigation-menu">
            <div class="nav-section">
              <h4>Docker</h4>
              <a routerLink="/basicos" class="nav-button">Básicos</a>
              <a routerLink="/intermedios" class="nav-button">Intermedios</a>
              <a routerLink="/avanzados" class="nav-button">Avanzados</a>
              <a routerLink="/especializados" class="nav-button">Especializados</a>
            </div>
            <div class="nav-section">
              <h4>Kubernetes</h4>
              <a routerLink="/k8s-basicos" class="nav-button active">Básicos</a>
              <a routerLink="/k8s-intermedios" class="nav-button">Intermedios</a>
              <a routerLink="/k8s-avanzados" class="nav-button">Avanzados</a>
              <a routerLink="/k8s-especializados" class="nav-button">Especializados</a>
            </div>
          </div>
        </div>
      </header>

      <main class="main-content">
        <section class="intro-section">
          <div class="container">
            <h2>¿Qué es Kubernetes?</h2>
            <p>Kubernetes (K8s) es una plataforma de código abierto para automatizar el despliegue, escalado y gestión de aplicaciones en contenedores. Fue diseñado por Google y ahora es mantenido por la Cloud Native Computing Foundation.</p>

            <div class="benefits-grid">
              <div class="benefit-card">
                <div class="benefit-icon">🚀</div>
                <h3>Automatización</h3>
                <p>Gestiona automáticamente el despliegue y escalado de aplicaciones</p>
              </div>
              <div class="benefit-card">
                <div class="benefit-icon">⚖️</div>
                <h3>Balanceador</h3>
                <p>Distribuye automáticamente el tráfico entre instancias</p>
              </div>
              <div class="benefit-card">
                <div class="benefit-icon">🔧</div>
                <h3>Auto-reparación</h3>
                <p>Reinicia contenedores que fallan y reemplaza los nodos</p>
              </div>
              <div class="benefit-card">
                <div class="benefit-icon">📦</div>
                <h3>Portabilidad</h3>
                <p>Ejecuta en cloud, híbrido o on-premises sin cambios</p>
              </div>
            </div>
          </div>
        </section>

        <section class="concepts-section">
          <div class="container">
            <h2>Conceptos Fundamentales</h2>
            <div class="concept-item">
              <h3>☸️ Cluster</h3>
              <p>Un cluster de Kubernetes es un conjunto de nodos que ejecutan aplicaciones containerizadas. Consiste en nodos master (control plane) y nodos worker.</p>
            </div>
            <div class="concept-item">
              <h3>🖥️ Nodos</h3>
              <p>Los nodos son máquinas (físicas o virtuales) que ejecutan aplicaciones. Los nodos master gestionan el cluster, mientras que los worker ejecutan las cargas de trabajo.</p>
            </div>
            <div class="concept-item">
              <h3>🏗️ Pods</h3>
              <p>Un Pod es la unidad más pequeña de despliegue en Kubernetes. Puede contener uno o más contenedores que comparten red y almacenamiento.</p>
            </div>
            <div class="concept-item">
              <h3>📋 ReplicaSet</h3>
              <p>Un ReplicaSet mantiene un número estable de réplicas de Pod. Se usa para garantizar la disponibilidad de la aplicación.</p>
            </div>
            <div class="concept-item">
              <h3>🚀 Deployment</h3>
              <p>Un Deployment gestiona ReplicaSets y proporciona actualizaciones declarativas para Pods y ReplicaSets.</p>
            </div>
            <div class="concept-item">
              <h3>🌐 Service</h3>
              <p>Un Service expone una aplicación que se ejecuta en un conjunto de Pods como un servicio de red.</p>
            </div>
          </div>
        </section>

        <section class="architecture-section">
          <div class="container">
            <h2>Arquitectura de Kubernetes</h2>
            <div class="architecture-explanation">
              <div class="architecture-layer">
                <div class="layer-icon">🎛️</div>
                <div class="layer-content">
                  <h4>Control Plane (Master)</h4>
                  <p>API Server, etcd, Scheduler, Controller Manager - gestiona el estado del cluster</p>
                </div>
              </div>
              <div class="architecture-layer">
                <div class="layer-icon">🖥️</div>
                <div class="layer-content">
                  <h4>Worker Nodes</h4>
                  <p>kubelet, kube-proxy, container runtime - ejecutan las aplicaciones</p>
                </div>
              </div>
              <div class="architecture-layer">
                <div class="layer-icon">🐳</div>
                <div class="layer-content">
                  <h4>Pods</h4>
                  <p>Unidades de despliegue que contienen contenedores y recursos compartidos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="commands-section">
          <div class="container">
            <h2>Comandos Básicos de kubectl</h2>
            <p>kubectl es la herramienta de línea de comandos para interactuar con clusters de Kubernetes.</p>

            <div class="commands-grid">
              <div class="command-card">
                <code class="command">kubectl get nodes</code>
                <p>Lista todos los nodos del cluster</p>
              </div>
              <div class="command-card">
                <code class="command">kubectl get pods</code>
                <p>Lista todos los pods en el namespace actual</p>
              </div>
              <div class="command-card">
                <code class="command">kubectl get services</code>
                <p>Lista todos los servicios</p>
              </div>
              <div class="command-card">
                <code class="command">kubectl apply -f archivo.yaml</code>
                <p>Aplica la configuración desde un archivo YAML</p>
              </div>
              <div class="command-card">
                <code class="command">kubectl describe pod nombre-pod</code>
                <p>Muestra información detallada de un pod</p>
              </div>
              <div class="command-card">
                <code class="command">kubectl logs nombre-pod</code>
                <p>Muestra los logs de un pod</p>
              </div>
            </div>
          </div>
        </section>

        <section class="example-section">
          <div class="container">
            <h2>Ejemplo: Despliegue Básico</h2>
            <p>Aquí tienes un ejemplo de cómo desplegar una aplicación simple en Kubernetes:</p>

            <div class="code-block">
              <pre><code># deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mi-app
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
      - name: mi-app
        image: nginx:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: mi-app-service
spec:
  selector:
    app: mi-app
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer</code></pre>
            </div>

            <div class="example-explanation">
              <h3>Explicación del ejemplo:</h3>
              <ul>
                <li><strong>Deployment</strong>: Define 3 réplicas de la aplicación</li>
                <li><strong>Selector</strong>: Especifica qué pods gestiona el deployment</li>
                <li><strong>Template</strong>: Define la configuración de cada pod</li>
                <li><strong>Service</strong>: Expone la aplicación mediante un LoadBalancer</li>
              </ul>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>🎉 ¡Felicidades! Has aprendido los conceptos básicos de Kubernetes. ¡Es hora de explorar más!</p>
            <div class="navigation-links">
              <a routerLink="/k8s-intermedios" class="nav-link">→ Explorar Conceptos Intermedios de K8s</a>
              <a routerLink="/intermedios" class="nav-link">→ Volver a Docker Intermedios</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  `
})
export class KubernetesBasicComponent {
}
