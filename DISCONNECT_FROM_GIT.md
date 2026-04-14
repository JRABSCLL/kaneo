## Desconectar del Repositorio Git Original

Para desconectar este proyecto del repositorio original de Kaneo (JRABSCLL/kaneo) y que sea independiente, sigue estos pasos:

### En v0 (aquí):

1. **Haz cambios y guarda**: Los cambios que hagas aquí se guardarán en este proyecto de v0
2. **Cuando estés listo para desconectarte**, sigue el paso 3

### En tu máquina local (terminal):

```bash
# 1. Clona este proyecto desde v0 (o descárgalo como ZIP)
# Si lo descargaste como ZIP, descomprímelo primero

# 2. Entra a la carpeta del proyecto
cd kaneo

# 3. Elimina la conexión con el repositorio original
git remote remove origin

# 4. (Opcional) Crea un nuevo repositorio
git init

# 5. Conecta a un nuevo repositorio de GitHub (si tienes uno)
git remote add origin https://github.com/TU_USUARIO/TU_NUEVO_REPO.git
git branch -M main
git add .
git commit -m "feat: migrate to Next.js + Supabase + Vercel"
git push -u origin main
```

### Alternativa: Forzar desconexión desde v0

Si quieres mantener todo en v0 sin usar Git:

1. Haz push de los cambios actuales a GitHub desde Settings → Git
2. Crea un nuevo repositorio limpio en tu GitHub
3. En v0, desconecta este proyecto del Git actual
4. Haz push a tu nuevo repositorio limpio

### Lo que se eliminó del monorepo:

✓ `pnpm-workspace.yaml` - Configuración de workspaces eliminada
✓ `turbo.json` - Configuración de Turborepo eliminada  
✓ `apps/api/package.json` - Backend Hono eliminado
✓ `apps/web/package.json` - Frontend Vite eliminado
✓ `apps/site/package.json` - Sitio web eliminado
✓ Todos los `packages/` eliminados

### Lo que se mantiene:

✓ Next.js 15 App Router (raiz del proyecto)
✓ Supabase Auth + Drizzle ORM
✓ Base de datos PostgreSQL en Supabase (ya configurada)
✓ Estructura limpia y lista para v0 + Vercel

### Próximos pasos:

1. **En v0**: Edita componentes visualmente, haz cambios
2. **Para Vercel**: Click en "Publish" (arriba a la derecha)
3. **Variables de ambiente**: Ya están configuradas en `.env.development.local`

**El proyecto ahora es 100% independiente del monorepo original de Kaneo.**
