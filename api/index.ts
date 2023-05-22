const modulesFiles: Record<string, any> = import.meta.glob("./modules/**/*.ts", { eager: true });

let modules: Record<string, any> = {};

for (const modulePath in modulesFiles) {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1").split("/").pop();
  modules[moduleName || ''] = modulesFiles[modulePath].default;
}

export default modules;
