# Semente Solidária — Entrega 2 (CSS3)

Plataforma web para ONG com **CSS modular**, **grid de 12 colunas**, **5+ breakpoints**, **menu responsivo (hambúrguer + submenu)** e **componentes** (cards, botões, formulários, alerts, toast e modal).

## Estrutura
```
ong-plataforma-entrega2/
├─ index.html
├─ projetos.html
├─ cadastro.html
└─ assets/
   ├─ css/
   │  ├─ styles.css
   │  ├─ variables.css
   │  ├─ base.css
   │  ├─ layout.css
   │  ├─ responsive.css
   │  ├─ utilities.css
   │  └─ components/
   │     ├─ nav.css
   │     ├─ buttons.css
   │     ├─ cards.css
   │     ├─ forms.css
   │     └─ feedback.css
   ├─ js/
   │  ├─ main.js
   │  └─ ui.js
   └─ img/
      ├─ hero.svg
      ├─ proj1.svg
      ├─ proj2.svg
      └─ proj3.svg
```

## Como rodar
Abra `index.html` no navegador ou rode um servidor estático:

```bash
python -m http.server 5173
# http://localhost:5173
```

## GitHub Pages
- Faça upload deste conteúdo para um **repositório público** (ex.: `ong-plataforma-entrega2`).
- Em **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main` (root `/`).

## Requisitos atendidos
- **Sistema de Design:** `variables.css` (paleta 10+ cores, tipografia 5 níveis, espaçamentos 8–64).
- **Leiautes Responsivos:** grid 12 colunas (`layout.css`), helpers flex; **6 breakpoints** (xs, sm, md, lg, xl, 2xl).
- **Navegação:** menu hambúrguer (mobile) + submenu dropdown (desktop).
- **Componentes:** cards, botões com estados, formulários estilizados com validação visual, alerts/toast/modal.
- **Acessibilidade/SEO:** semântica, foco visível, skip link, `aria-current`, metatags descritivas.

---

Projeto acadêmico — Entrega 2 baseada na Entrega 1 (HTML5).
