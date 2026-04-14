# Kaneo - Next.js Version

**Proyecto completamente renovado: Next.js 15 + Supabase + Drizzle ORM**

Este es tu nuevo proyecto limpio, sin monorepo, listo para:
- Usar en **v0** para edición visual
- Desplegar en **Vercel** con un click
- Conectado a **Supabase** para base de datos y auth

## Status

✅ Monorepo antiguo eliminado (turbo.json, pnpm-workspace.yaml, apps/*, packages/*)
✅ Next.js 15 configurado
✅ Supabase integrado
✅ Drizzle ORM listo
✅ Base de datos ya creada en Supabase

## Lo que está listo

- `app/page.tsx` - Landing page
- `app/layout.tsx` - Root layout con fonts
- `app/auth/login/page.tsx` - Login con Supabase
- `app/auth/sign-up/page.tsx` - Registro
- `app/auth/callback/route.ts` - OAuth callback
- `app/dashboard/page.tsx` - Dashboard protegido
- `lib/supabase/` - Clientes Supabase
- `middleware.ts` - Protección de rutas

## Cómo usar

### En v0 (ahora):
1. El preview debería estar cargando en la derecha
2. Edita componentes visualmente con Design Mode
3. Haz cambios y guarda

### Para desplegar a Vercel:
1. Haz click en "Publish" (arriba a la derecha)
2. Conecta GitHub
3. Variables de ambiente ya están configuradas
4. Deploy automático

### Para desconectarte de Git:
Lee `DISCONNECT_FROM_GIT.md` para instrucciones completas

## Estructura

```
app/
├── auth/                    # Rutas de autenticación
├── dashboard/               # Rutas protegidas
├── globals.css
└── layout.tsx

lib/
├── supabase/               # Clientes Supabase
└── db/                     # Schema Drizzle

middleware.ts              # Protección de rutas
next.config.ts
tsconfig.json
```

## Tecnologías

| Capa | Tech |
|------|------|
| Frontend | Next.js 15, React 19 |
| Database | Supabase PostgreSQL |
| ORM | Drizzle ORM |
| Auth | Supabase Auth |
| UI | Tailwind CSS, shadcn/ui |
| Deploy | Vercel |

## Próximos pasos

1. **Espera a que el preview cargue** (puede tomar 1-2 minutos)
2. Verifica que veas la landing page
3. Edita componentes en v0
4. Cuando esté listo, publica en Vercel

¡Listo para empezar! 🚀
