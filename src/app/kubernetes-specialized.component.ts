import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kubernetes-specialized',
  imports: [RouterLink],
  template: `
    <div class="kubernetes-specialized-page">
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
          <h1>Kubernetes Conceptos Especializados</h1>
          <p class="hero-subtitle">Explora técnicas especializadas y casos de uso avanzados de Kubernetes</p>

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
              <a routerLink="/k8s-avanzados" class="nav-button">Avanzados</a>
              <a routerLink="/k8s-especializados" class="nav-button active">Especializados</a>
            </div>
          </div>
        </div>
      </header>

      <main class="main-content">
        <!-- Multi-cluster Section -->
        <section class="multicluster-section">
          <div class="container">
            <h2>🌐 Multi-cluster Management</h2>
            <p>Gestiona múltiples clusters de Kubernetes desde una única interfaz con herramientas especializadas.</p>

            <div class="multicluster-concepts">
              <div class="concept-card">
                <h3>🕸️ Cluster Federation</h3>
                <p>Coordina múltiples clusters como un solo sistema distribuido.</p>
                <div class="code-example">
                  <code><pre># FederatedDeployment
apiVersion: types.kubefed.io/v1beta1
kind: FederatedDeployment
metadata:
  name: app-deployment
  namespace: default
spec:
  placement:
    clusterSelector:
      matchLabels:
        environment: production
  template:
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: my-app
      template:
        spec:
          containers:
          - name: app
            image: my-app:v1.0</pre></code>
                </div>
              </div>

              <div class="concept-card">
                <h3>☸️ Kubeconfig Management</h3>
                <p>Gestiona múltiples contextos de clusters con kubectl y herramientas especializadas.</p>
                <div class="code-example">
                  <code><pre># Ver contextos disponibles
kubectl config get-contexts

# Cambiar contexto
kubectl config use-context prod-cluster

# Usar kubectx para gestión rápida
kubectx                    # Lista contextos
kubectx prod-cluster       # Cambia contexto
kubectx -                 # Cambia al anterior</pre></code>
                </div>
              </div>

              <div class="concept-card">
                <h3>🔄 Cluster Sync</h3>
                <p>Sincroniza recursos entre clusters usando herramientas como Kubemarine o ClusterAPI.</p>
                <div class="code-example">
                  <code><pre># ClusterClass para ClusterAPI
apiVersion: cluster.x-k8s.io/v1beta1
kind: ClusterClass
metadata:
  name: aws-cluster-class
spec:
  infrastructure:
    ref:
      apiVersion: controlplane.cluster.x-k8s.io/v1beta1
      kind: AWSManagedControlPlaneTemplate
      name: aws-control-plane</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Edge Computing Section -->
        <section class="edge-section">
          <div class="container">
            <h2>📡 Edge Computing con Kubernetes</h2>
            <p>Extiende Kubernetes a dispositivos edge y ubicaciones remotas con distribuciones especializadas.</p>

            <div class="edge-solutions">
              <div class="solution-card">
                <h3>⚡ K3s</h3>
                <p>Distribución ligera de Kubernetes diseñada para edge computing e IoT.</p>
                <div class="code-example">
                  <code><pre># Instalación de K3s
curl -sfL https://get.k3s.io | sh -

# Configuración para edge
curl -sfL https://get.k3s.io | INSTALL_K3S_EXEC="--disable=traefik" sh -

# Unir agente a cluster
curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -</pre></code>
                </div>
              </div>

              <div class="solution-card">
                <h3>🏭 OpenShift Edge</h3>
                <p>Solución enterprise para despliegues edge con gestión centralizada.</p>
                <div class="code-example">
                  <code><pre># Edge Node Config
apiVersion: v1
kind: ConfigMap
metadata:
  name: edge-config
data:
  enable-edge: "true"
  local-storage: "true"
  low-latency: "true"

# Edge-specific Scheduler
apiVersion: v1
kind: Pod
spec:
  nodeSelector:
    kubernetes.io/arch: arm64
    edge-node: "true"
  tolerations:
  - key: "edge.kubernetes.io/dedicated"
    operator: "Exists"
    effect: "NoSchedule"</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Custom Schedulers Section -->
        <section class="scheduler-section">
          <div class="container">
            <h2>⏰ Custom Schedulers</h2>
            <p>Crea schedulers personalizados para casos de uso específicos como ML workloads o batch processing.</p>

            <div class="scheduler-features">
              <div class="feature-card">
                <h3>🤖 Scheduler Framework</h3>
                <p>Framework extensible para construir schedulers personalizados.</p>
                <div class="code-example">
                  <code><pre># Custom Scheduler Plugin
package main

import (
    "k8s.io/kubernetes/pkg/scheduler/framework"
)

type CustomPlugin struct{{ '{}' }}

func (p *CustomPlugin) Name() string {{ '{' }}
    return "CustomPlugin"
{{ '}' }}

func (p *CustomPlugin) Filter(
    ctx context.Context,
    state *framework.CycleState,
    pod *v1.Pod,
    nodeInfo *framework.NodeInfo,
) *framework.Status {{ '{' }}
    // Lógica de filtrado personalizada
    return framework.NewStatus(framework.Success, "")
{{ '}' }}</pre></code>
                </div>
              </div>

              <div class="feature-card">
                <h3>🎯 Kube-batch</h3>
                <p>Scheduler optimizado para workloads de batch y machine learning.</p>
                <div class="code-example">
                  <code><pre># PodGroup para batch scheduling
apiVersion: scheduling.volcano.sh/v1beta1
kind: PodGroup
metadata:
  name: ml-training-job
spec:
  minMember: 4
  minResources:
    cpu: "8"
    memory: "16Gi"
  queue: default

# Job con Volcano Scheduler
apiVersion: batch.volcano.sh/v1alpha1
kind: Job
metadata:
  name: tensorflow-job
spec:
  schedulerName: volcano
  plugins:
    ssh: []
    env: []
    svc: []</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Workload APIs Section -->
        <section class="workload-api-section">
          <div class="container">
            <h2>📋 Workload APIs Especializadas</h2>
            <p>APIs especializadas para diferentes tipos de workloads como ML, batch processing y stateful applications.</p>

            <div class="workload-apis">
              <div class="api-card">
                <h3>🧠 Kubeflow</h3>
                <p>Plataforma de machine learning para Kubernetes con APIs especializadas.</p>
                <div class="code-example">
                  <code><pre># TrainingJob para Kubeflow
apiVersion: kubeflow.org/v1
kind: PyTorchJob
metadata:
  name: pytorch-distributed
spec:
  pytorchReplicaSpecs:
    Master:
      replicas: 1
      template:
        spec:
          containers:
          - name: pytorch
            image: pytorch/pytorch:latest
    Worker:
      replicas: 3
      template:
        spec:
          containers:
          - name: pytorch
            image: pytorch/pytorch:latest</pre></code>
                </div>
              </div>

              <div class="api-card">
                <h3>⚡ Knative</h3>
                <p>Plataforma para aplicaciones serverless y event-driven en Kubernetes.</p>
                <div class="code-example">
                  <code><pre># Knative Service
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: hello-world
spec:
  template:
    spec:
      containers:
      - image: gcr.io/knative-samples/helloworld-go
        ports:
        - containerPort: 8080
        env:
        - name: TARGET
          value: "World"

# Event Source
apiVersion: sources.knative.dev/v1beta1
kind: ApiServerSource
metadata:
  name: testevents
spec:
  serviceAccountName: events-sa
  mode: Resource</pre></code>
                </div>
              </div>

              <div class="api-card">
                <h3>🗄️ StatefulSets Avanzados</h3>
                <p>Gestión avanzada de aplicaciones stateful con patrones específicos.</p>
                <div class="code-example">
                  <code><pre># StatefulSet con Local Storage
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: database
spec:
  serviceName: "database"
  replicas: 3
  selector:
    matchLabels:
      app: database
  template:
    spec:
      containers:
      - name: db
        image: postgres:13
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      storageClassName: "local-storage"
      resources:
        requests:
          storage: 10Gi</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Performance Optimization Section -->
        <section class="performance-section">
          <div class="container">
            <h2>⚡ Optimización de Rendimiento</h2>
            <p>Técnicas avanzadas para optimizar el rendimiento de clusters y aplicaciones.</p>

            <div class="performance-tools">
              <div class="tool-card">
                <h3>📊 Vertical Pod Autoscaler</h3>
                <p>Automatiza el ajuste de requests y limits basado en el uso histórico.</p>
                <div class="code-example">
                  <code><pre># VPA Configuration
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: app-vpa
spec:
  targetRef:
    apiVersion: "apps/v1"
    kind: Deployment
    name: my-app
  updatePolicy:
    updateMode: "Auto"
  resourcePolicy:
    containerPolicies:
    - containerName: app
      minAllowed:
        cpu: 100m
        memory: 128Mi
      maxAllowed:
        cpu: 1000m
        memory: 1Gi</pre></code>
                </div>
              </div>

              <div class="tool-card">
                <h3>🎯 CPU Manager</h3>
                <p>Asigna CPUs exclusivos para workloads que requieren latencia baja.</p>
                <div class="code-example">
                  <code><pre># Configuración del kubelet
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
cpuManagerPolicy: static
cpuManagerPolicyOptions:
  full-pcpus-only: "true"
reservedSystemCPUs: "0,1"

# Pod con CPU exclusivo
spec:
  containers:
  - name: app
    resources:
      requests:
        cpu: 2
      limits:
        cpu: 2
    resources:
      requests:
        cpu: 2
        topology.kubernetes.io/cpu: "2"</pre></code>
                </div>
              </div>

              <div class="tool-card">
                <h3>💾 Memory Manager</h3>
                <p>Gestiona la asignación de memoria para aplicaciones de alta performance.</p>
                <div class="code-example">
                  <code><pre># Configuración Memory Manager
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
memoryManagerPolicy: Static
reservedMemory:
- numaNode: 0
  limits:
    memory: "1Gi"

# Pod con memoria dedicada
spec:
  containers:
  - name: app
    resources:
      requests:
        memory: 2Gi
        hugepages-2Mi: 1Gi</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Disaster Recovery Section -->
        <section class="disaster-recovery-section">
          <div class="container">
            <h2>🚨 Disaster Recovery</h2>
            <p>Estrategias avanzadas para backup, recuperación y alta disponibilidad.</p>

            <div class="recovery-strategies">
              <div class="strategy-card">
                <h3>💾 Velero Backup</h3>
                <p>Solución de backup y disaster recovery para clusters de Kubernetes.</p>
                <div class="code-example">
                  <code><pre># Backup de cluster completo
velero backup create daily-backup \\
  --include-namespaces=default,production \\
  --include-resources=pods,persistentvolumes

# Schedule de backups automáticos
apiVersion: velero.io/v1
kind: Schedule
metadata:
  name: daily-backup
spec:
  schedule: "0 2 * * *"
  template:
    includedNamespaces:
    - default
    - production
    ttl: "720h"</pre></code>
                </div>
              </div>

              <div class="strategy-card">
                <h3>🔄 Cross-Region Replication</h3>
                <p>Configuración de replicación entre múltiples regiones para alta disponibilidad.</p>
                <div class="code-example">
                  <code><pre># EndpointSlice para multi-region
apiVersion: discovery.k8s.io/v1
kind: EndpointSlice
metadata:
  name: app-endpoints
  labels:
    kubernetes.io/service-name: app-service
addressType: IPv4
ports:
- name: http
  port: 80
endpoints:
- addresses:
  - "10.0.1.1"
  - "10.0.2.1"
  conditions:
    ready: true</pre></code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <p>🎓 ¡Excelente! Has explorado los conceptos más especializados de Kubernetes. Estás preparado para casos de uso únicos y avanzados.</p>
            <div class="navigation-links">
              <a routerLink="/k8s-basicos" class="nav-link">← Volver a K8s Básicos</a>
              <a routerLink="/k8s-intermedios" class="nav-link">← K8s Intermedios</a>
              <a routerLink="/k8s-avanzados" class="nav-link">← K8s Avanzados</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  `
})
export class KubernetesSpecializedComponent {
}
