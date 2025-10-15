import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kubernetes-intermediate',
  imports: [RouterLink],
  template: `
    <div class="kubernetes-intermediate-page">
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
          <h1>Kubernetes Conceptos Intermedios</h1>
          <p class="hero-subtitle">Domina técnicas intermedias de Kubernetes para aplicaciones complejas</p>

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
              <a routerLink="/k8s-basicos" class="nav-button">Básicos</a>
              <a routerLink="/k8s-intermedios" class="nav-button active">Intermedios</a>
              <a routerLink="/k8s-avanzados" class="nav-button">Avanzados</a>
              <a routerLink="/k8s-especializados" class="nav-button">Especializados</a>
            </div>
          </div>
        </div>
      </header>

      <main class="main-content">
        <!-- ConfigMaps y Secrets Section -->
        <section class="config-section">
          <div class="container">
            <h2>🔐 ConfigMaps y Secrets</h2>
            <p>Gestiona configuración y datos sensibles de forma separada al código de la aplicación.</p>

            <div class="concept-grid">
              <div class="concept-card">
                <h3>📋 ConfigMaps</h3>
                <p>Almacenan configuración no sensible como archivos de configuración, variables de entorno, etc.</p>
                <div class="code-example">
                  <code><pre># Crear ConfigMap desde archivo
kubectl create configmap app-config --from-file=config.properties

# Desde literal
kubectl create configmap app-config --from-literal=database_url=mysql://db

# Usar en Pod
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: app
    envFrom:
    - configMapRef:
        name: app-config</pre></code>
                </div>
              </div>

              <div class="concept-card">
                <h3>🔑 Secrets</h3>
                <p>Almacenan datos sensibles como contraseñas, tokens, claves, etc.</p>
                <div class="code-example">
                  <code><pre># Crear Secret
kubectl create secret generic db-secret \\
  --from-literal=username=admin \\
  --from-literal=password=secret123

# Usar en Pod
spec:
  containers:
  - name: app
    env:
    - name: DB_USER
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: username</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Persistent Volumes Section -->
        <section class="storage-section">
          <div class="container">
            <h2>💾 Persistent Volumes</h2>
            <p>Gestiona almacenamiento persistente para aplicaciones que requieren datos permanentes.</p>

            <div class="volume-types">
              <div class="volume-type">
                <h3>📦 PersistentVolume (PV)</h3>
                <p>Recurso de almacenamiento en el cluster, como un disco físico en el nodo.</p>
                <div class="code-example">
                  <code><pre>apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-demo
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  hostPath:
    path: /mnt/data</pre></code>
                </div>
              </div>

              <div class="volume-type">
                <h3>📋 PersistentVolumeClaim (PVC)</h3>
                <p>Solicitud de almacenamiento por parte de un usuario, como un volumen lógico.</p>
                <div class="code-example">
                  <code><pre>apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-demo
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi</pre></code>
                </div>
              </div>

              <div class="volume-type">
                <h3>🔗 Storage Classes</h3>
                <p>Describe las "clases" de almacenamiento disponibles en el cluster.</p>
                <div class="code-example">
                  <code><pre>apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: kubernetes.io/aws-ebs
parameters:
  type: io1
  iopsPerGB: "10"</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Networking Section -->
        <section class="networking-section">
          <div class="container">
            <h2>🌐 Networking Avanzado</h2>
            <p>Configuración de red y políticas de comunicación entre pods y servicios.</p>

            <div class="networking-concepts">
              <div class="concept-card">
                <h3>🌍 Ingress</h3>
                <p>Expone servicios HTTP/HTTPS externamente al cluster usando reglas.</p>
                <div class="code-example">
                  <code><pre>apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 80</pre></code>
                </div>
              </div>

              <div class="concept-card">
                <h3>🛡️ Network Policies</h3>
                <p>Controla el tráfico de red entre pods y namespaces.</p>
                <div class="code-example">
                  <code><pre>apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {{ '{}' }}
  policyTypes:
  - Ingress
  - Egress</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Health Checks Section -->
        <section class="health-section">
          <div class="container">
            <h2>🏥 Health Checks</h2>
            <p>Monitorea la salud de los pods y reinicia automáticamente cuando sea necesario.</p>

            <div class="health-methods">
              <div class="method">
                <h3>🔍 Liveness Probe</h3>
                <p>Verifica si el contenedor está funcionando correctamente.</p>
                <div class="code-example">
                  <code><pre>spec:
  containers:
  - name: app
    livenessProbe:
      httpGet:
        path: /health
        port: 8080
      initialDelaySeconds: 30
      periodSeconds: 10</pre></code>
                </div>
              </div>

              <div class="method">
                <h3>🚀 Readiness Probe</h3>
                <p>Verifica si el contenedor está listo para recibir tráfico.</p>
                <div class="code-example">
                  <code><pre>spec:
  containers:
  - name: app
    readinessProbe:
      exec:
        command:
        - cat
        - /tmp/ready
      initialDelaySeconds: 5
      periodSeconds: 5</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Resource Management Section -->
        <section class="resources-section">
          <div class="container">
            <h2>⚡ Gestión de Recursos</h2>
            <p>Configura límites y solicitudes de CPU y memoria para optimizar el uso de recursos.</p>

            <div class="resource-concepts">
              <div class="concept-card">
                <h3>📊 Resource Requests</h3>
                <p>Especifica la cantidad mínima de recursos que necesita un contenedor.</p>
                <div class="code-example">
                  <code><pre>spec:
  containers:
  - name: app
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"</pre></code>
                </div>
              </div>

              <div class="concept-card">
                <h3>📈 Resource Quotas</h3>
                <p>Limita el uso total de recursos en un namespace.</p>
                <div class="code-example">
                  <code><pre>apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>🚀 ¡Has dominado los conceptos intermedios de Kubernetes! Ahora puedes gestionar aplicaciones más complejas.</p>
            <div class="navigation-links">
              <a routerLink="/k8s-basicos" class="nav-link">← Volver a K8s Básicos</a>
              <a routerLink="/k8s-avanzados" class="nav-link">→ Explorar K8s Avanzados</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  `
})
export class KubernetesIntermediateComponent {
}
