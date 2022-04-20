import { App } from "./app"

const PORT = process.env.PORT || 3000;

new App().server.listen(PORT, () => console.log("rodando", PORT));