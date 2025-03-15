# Liquid Galaxy Controller

![img](/public/lg-logo.png)

lg-clinet that control the lg rig system using lg-server

## Installing

**nodejs** v22.14.0 is required.

```bash
npm install
```

## Build
### using npm
```bash
npm run build
npm start
```

### using Docker
- Install Docker
- run
  ```
  docker build -t lg-client:1.0 .
  docker run -d -p 8080:8080 --name lg lg-client
  ```

Go to http://localhost:8080
