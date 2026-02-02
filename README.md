# Projekt: E-commerce App

**Autor:** Patryk Krajnik  
**Nr indeksu:** 52716  
**Kod kursu:** IAiSC

---

## Opis wykonanych działań

- **Backend**:  
  - Express.js + Node 18, obsługuje API `/api/products` i `/api/health`  
  - Połączenie z PostgreSQL (kontener `db`)  
  - Multi-stage Dockerfile dla backendu  
  - Obsługa zmiennych środowiskowych DB  

- **Frontend**:  
  - React 18 + Vite  
  - Multi-stage Dockerfile do produkcji z Nginx  
  - Routing i podstawowe strony (AdminDashboard, PasswordReset)  

- **Docker & Docker Compose**:  
  - 3 kontenery: `db`, `backend`, `frontend`  
  - `docker-compose.yml` uruchamia całość jednym poleceniem  
  - Healthcheck dla bazy danych, restart unless-stopped  

- **CI/CD (GitHub Actions)**:  
  - `main.yml` = testy, lint, budowa Docker images, push do GHCR  
  - `pr.yml` = testy i lint dla pull requestów  
  - Reusable workflow dla build/test kroków  

- **Uzasadnienie**:  
  - Projekt działa od razu po `docker-compose up -d`  
  - Oddzielne kontenery, multi-stage builds i CI/CD spełniają wymagania 4.5  
  - Frontend jest połączony z backendem, linter zgłasza nieużywane zmienne (do poprawy przy dalszym rozwoju)  

---

## Instrukcja uruchomienia projektu

### 1. Wymagania wstępne
- Docker + Docker Compose  
- Node.js (opcjonalnie do lokalnych testów)  

### 2. Uruchomienie lokalne
\`\`\`bash
git clone <repo-url>
cd nowatorski-projekt-indywidualny
docker-compose up -d --build
\`\`\`

### 3. Sprawdzenie działania
- Backend: `http://localhost:5000/api/health` → powinno zwrócić `{"status":"ok","message":"Backend is running"}`  
- Frontend: `http://localhost/` → strona główna aplikacji  

### 4. Wyłączenie kontenerów
\`\`\`bash
docker-compose down
\`\`\`

### 5. CI/CD
- Workflow automatycznie uruchamia testy i buduje obrazy Docker  
- Obrazy są pushowane do GHCR (GitHub Container Registry) z użyciem secrets `REGISTRY_USERNAME` i `REGISTRY_PASSWORD`
