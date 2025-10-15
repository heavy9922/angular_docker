import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kubernetes-advanced',
  imports: [RouterLink],
  template: `
    <div class="kubernetes-advanced-page">
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
          <h1>Kubernetes Conceptos Avanzados</h1>
          <p class="hero-subtitle">Domina técnicas avanzadas de Kubernetes para entornos de producción</p>

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
              <a routerLink="/k8s-intermedios" class="nav-button">Intermedios</a>
              <a routerLink="/k8s-avanzados" class="nav-button active">Avanzados</a>
              <a routerLink="/k8s-especializados" class="nav-button">Especializados</a>
            </div>
          </div>
        </div>
      </header>

      <main class="main-content">
        <!-- Operators Section -->
        <section class="operators-section">
          <div class="container">
            <h2>🤖 Operators y Controllers</h2>
            <p>Automatiza la gestión de aplicaciones complejas usando el patrón de controladores personalizados.</p>

            <div class="operator-concepts">
              <div class="concept-card">
                <h3>🎛️ Custom Controllers</h3>
                <p>Controladores personalizados que extienden la funcionalidad de Kubernetes.</p>
                <div class="code-example">
                  <code><pre># Custom Resource Definition
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: databases.example.com
spec:
  group: example.com
  versions:
  - name: v1
    served: true
    storage: true
    schema:
      openAPIV3Schema:
        type: object
        properties:
          spec:
            type: object
            properties:
              databaseType:
                type: string</pre></code>
                </div>
              </div>

              <div class="concept-card">
                <h3>🔄 Operator Pattern</h3>
                <p>Patrón que encapsula el conocimiento del dominio de la aplicación.</p>
                <div class="code-example">
                  <code><pre># Ejemplo de Operator para PostgreSQL
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-cluster
spec:
  instances: 3
  postgresql:
    parameters:
      max_connections: "200"
  bootstrap:
    initdb:
      database: appdb
      owner: appuser</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Service Mesh Section -->
        <section class="service-mesh-section">
          <div class="container">
            <h2>🔗 Service Mesh</h2>
            <p>Gestiona la comunicación entre servicios con observabilidad y políticas de seguridad.</p>

            <div class="mesh-features">
              <div class="feature-card">
                <h3>🚀 Istio</h3>
                <p>Service mesh más popular con gestión de tráfico, seguridad y observabilidad.</p>
                <div class="code-example">
                  <code><pre># Habilitar Istio en namespace
kubectl label namespace default istio-injection=enabled

# Virtual Service
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: reviews
spec:
  http:
  - match:
    - headers:
        end-user:
          exact: jason
    route:
    - destination:
        host: reviews
        subset: v2
  - route:
    - destination:
        host: reviews
        subset: v1</pre></code>
                </div>
              </div>

              <div class="feature-card">
                <h3>⚡ Linkerd</h3>
                <p>Service mesh ligero y rápido, fácil de instalar y usar.</p>
                <div class="code-example">
                  <code><pre># Instalación de Linkerd
linkerd install | kubectl apply -f -

# Inyección automática
linkerd inject deployment.yaml | kubectl apply -f -

# Verificar instalación
linkerd check</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Security Section -->
        <section class="security-section">
          <div class="container">
            <h2>🔒 Seguridad Avanzada</h2>
            <p>Implementa políticas de seguridad y control de acceso granular.</p>

            <div class="security-features">
              <div class="feature-card">
                <h3>🛡️ Pod Security Standards</h3>
                <p>Políticas de seguridad para pods usando Pod Security Standards.</p>
                <div class="code-example">
                  <code><pre>apiVersion: v1
kind: Namespace
metadata:
  name: secure-ns
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: restricted</pre></code>
                </div>
              </div>

              <div class="feature-card">
                <h3>🔐 RBAC Avanzado</h3>
                <p>Control de acceso basado en roles con permisos granulares.</p>
                <div class="code-example">
                  <code><pre># Role para desarrolladores
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: dev
  name: developer
rules:
- apiGroups: [""]
  resources: ["pods", "services"]
  verbs: ["get", "list", "create", "update", "patch"]

# ClusterRole para administradores
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cluster-admin
rules:
- apiGroups: ["*"]
  resources: ["*"]
  verbs: ["*"]</pre></code>
                </div>
              </div>

              <div class="feature-card">
                <h3>🔍 OPA Gatekeeper</h3>
                <p>Políticas de admisión usando Open Policy Agent para validación.</p>
                <div class="code-example">
                  <code><pre># ConstraintTemplate
apiVersion: templates.gatekeeper.sh/v1beta1
kind: ConstraintTemplate
metadata:
  name: k8srequiredlabels
spec:
  crd:
    spec:
      names:
        kind: K8sRequiredLabels
  targets:
    - target: admission.k8s.gatekeeper.sh
      rego: |
        package k8srequiredlabels
        # Lógica de validación personalizada aquí</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Monitoring & Observability Section -->
        <section class="monitoring-section">
          <div class="container">
            <h2>📊 Monitoreo y Observabilidad</h2>
            <p>Stack completo de monitoreo, logging y tracing para clusters de producción.</p>

            <div class="monitoring-tools">
              <div class="tool-card">
                <h3>📈 Prometheus & Grafana</h3>
                <p>Sistema de monitoreo y alertas con métricas y visualización.</p>
                <div class="code-example">
                  <code><pre># ServiceMonitor para Prometheus
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: app-monitor
spec:
  selector:
    matchLabels:
      app: mi-app
  endpoints:
  - port: metrics
    interval: 30s
    path: /metrics</pre></code>
                </div>
              </div>

              <div class="tool-card">
                <h3>📋 Fluentd & Elasticsearch</h3>
                <p>Agregación y análisis de logs distribuidos.</p>
                <div class="code-example">
                  <code><pre># Fluentd ConfigMap
apiVersion: v1
kind: ConfigMap
metadata:
  name: fluentd-config
data:
  fluent.conf: |
    match_all_logs:
      type: elasticsearch
      host: elasticsearch.logging.svc.cluster.local
      port: 9200
      index_name: k8s-logs</pre></code>
                </div>
              </div>

              <div class="tool-card">
                <h3>🔍 Jaeger Tracing</h3>
                <p>Trazabilidad distribuida para microservicios.</p>
                <div class="code-example">
                  <code><pre># Configuración de Jaeger
apiVersion: jaegertracing.io/v1
kind: Jaeger
metadata:
  name: my-jaeger
spec:
  strategy: production
  collector:
    maxReplicas: 5
  storage:
    type: elasticsearch
    elasticsearch:
      nodeCount: 3</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- GitOps Section -->
        <section class="gitops-section">
          <div class="container">
            <h2>🔄 GitOps</h2>
            <p>Gestiona el despliegue de aplicaciones usando Git como fuente de verdad.</p>

            <div class="gitops-workflows">
              <div class="workflow-card">
                <h3>🚀 ArgoCD</h3>
                <p>Herramienta de GitOps para despliegue continuo declarativo.</p>
                <div class="code-example">
                  <code><pre># Application de ArgoCD
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/usuario/repo
    targetRevision: HEAD
    path: k8s
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true</pre></code>
                </div>
              </div>

              <div class="workflow-card">
                <h3>⚡ Flux</h3>
                <p>Operador de GitOps que mantiene clusters sincronizados con Git.</p>
                <div class="code-example">
                  <code><pre># GitRepository
apiVersion: source.toolkit.fluxcd.io/v1beta1
kind: GitRepository
metadata:
  name: app-repo
spec:
  interval: 1m
  url: https://github.com/usuario/repo
  ref:
    branch: main

# Kustomization
apiVersion: kustomize.toolkit.fluxcd.io/v1beta1
kind: Kustomization
metadata:
  name: app-kustomization
spec:
  interval: 10m
  sourceRef:
    kind: GitRepository
    name: app-repo
  path: "./k8s"</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>🎯 ¡Felicidades! Has dominado los conceptos más avanzados de Kubernetes. Estás listo para gestionar clusters de producción.</p>
            <div class="navigation-links">
              <a routerLink="/k8s-basicos" class="nav-link">← Volver a K8s Básicos</a>
              <a routerLink="/k8s-intermedios" class="nav-link">← K8s Intermedios</a>
              <a routerLink="/k8s-especializados" class="nav-link">→ K8s Especializados</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  `
})
export class KubernetesAdvancedComponent {
}
