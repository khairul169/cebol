# Cebol

URL Shortener

## Setup

To install dependencies:

```bash
bun install
```

### Development:

```bash
bun dev
```

### Production:

Build:

```bash
bun run build
```

Start:

```bash
bun run start
```

or with pm2

```
bun install -g pm2
pm2 start bun --name cebol -- run start
```

---

This project was created using `bun init` in bun v1.0.33. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
