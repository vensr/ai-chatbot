## Set up Instructions

### Install pnpm

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### Create an local environment variable file

```bash
cp .env.example .env.local
```

### Check postgresql settings

Make sure you create a postgresql db called aichatbot. Also check the POSTGRES_URL environment variable before you start the service.

The DB migrations will automatically happen.

### Install all dependencies using

```bash
pnpm install
```

### Start the dev server

```bash
pnpm dev
```
