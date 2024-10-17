FROM node:20-slim

WORKDIR /app

# Install pnpm
RUN corepack enable
RUN corepack prepare pnpm@9 --activate

COPY package.json pnpm-lock.yaml* ./

# Utilize Docker cache for faster builds
RUN pnpm install --frozen-lockfile

COPY . .

# Expose your application's port
EXPOSE 3000

CMD ["pnpm", "run", "start"]
