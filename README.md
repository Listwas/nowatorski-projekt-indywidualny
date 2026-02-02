
# Fronted taken from my repo
https://github.com/Listwas/dsw-ecommerce

# DSW E-Commerce - Full Stack Application

Projekt e-commerce z frontendem React, backendem Node.js/Express i bazą danych PostgreSQL.

## Struktura Projektu

```
.
├── frontend/           # Aplikacja React
│   ├── src/
│   ├── Dockerfile
│   └── nginx.conf
├── backend/            # API Node.js/Express
│   ├── server.js
│   ├── init.sql
│   ├── Dockerfile
│   └── package.json
├── .github/
│   └── workflows/      # GitHub Actions
│       ├── main.yml    # Pipeline dla main branch
│       └── pr.yml      # Pipeline dla Pull Requests
└── docker-compose.yml  # Orkiestracja kontenerów
```

## Wymagania

- Docker
- Docker Compose
- Node.js 18+ (do lokalnego developmentu)

## Uruchomienie z Docker Compose

```bash
# Zbuduj i uruchom wszystkie kontenery
docker-compose up -d

# Sprawdź status kontenerów
docker-compose ps

# Zobacz logi
docker-compose logs -f

# Zatrzymaj kontenery
docker-compose down
```

Aplikacja będzie dostępna pod:
- Frontend: http://localhost:80
- Backend API: http://localhost:5000
- PostgreSQL: localhost:5432

## Uruchomienie Lokalne (Development)

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Kontenery

Projekt składa się z 3 kontenerów:

1. **PostgreSQL Database** (`db`)
   - Port: 5432
   - Baza: ecommerce
   - Inicjalizacja: `init.sql`

2. **Backend API** (`backend`)
   - Port: 5000
   - Framework: Express.js
   - Połączenie z bazą danych

3. **Frontend** (`frontend`)
   - Port: 80
   - Framework: React
   - Serwowane przez nginx

## CI/CD Pipeline

### Main Branch (`main.yml`)
Uruchamia się przy push do main:
- Testy backendu
- Linting i testy frontendu
- Build wszystkich kontenerów
- Test uruchomienia aplikacji

### Pull Requests (`pr.yml`)
Uruchamia się przy PR do main:
- Linting i testy
- Weryfikacja buildów Docker

## API Endpoints

```
GET  /api/health         - Health check
GET  /api/products       - Lista produktów
GET  /api/products/:id   - Szczegóły produktu
POST /api/products       - Dodaj produkt (admin)
```

## Baza Danych

### Tabela: products
- id (SERIAL PRIMARY KEY)
- title (VARCHAR)
- price (DECIMAL)
- image (TEXT)
- description (TEXT)
- created_at (TIMESTAMP)

## Multi-Stage Build

Oba Dockerfile'y używają multi-stage build:

**Backend:**
1. Stage 1: Instalacja dependencies
2. Stage 2: Finalna minimalna imagea

**Frontend:**
1. Stage 1: Build aplikacji React
2. Stage 2: Serwowanie przez nginx

## Wymagania Projektowe (Ocena 4.0)

✅ Aplikacja działa (frontend + API)  
✅ Dockerfile z multi-stage build  
✅ Docker Compose  
✅ Pipeline CI z testami  
✅ Oddzielne pipeline'y dla main i PR  
✅ Baza danych (PostgreSQL)  
✅ Co najmniej 2 kontenery (3 w praktyce)

## Troubleshooting

### Kontenery nie startują
```bash
docker-compose logs db
docker-compose logs backend
```

### Reset całej aplikacji
```bash
docker-compose down -v
docker-compose up -d --build
```

### Czyszczenie Docker
```bash
docker system prune -a
```
