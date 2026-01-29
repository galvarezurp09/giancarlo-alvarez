import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Inicio' }
    },
    {
      path: '/sobre-mi',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'Sobre Mí' }
    },
    {
      path: '/experiencia',
      name: 'experience',
      component: () => import('../views/ExperienceView.vue'),
      meta: { title: 'Experiencia' }
    },
    {
      path: '/habilidades',
      name: 'skills',
      component: () => import('../views/SkillsView.vue'),
      meta: { title: 'Habilidades' }
    },
    {
      path: '/proyectos',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: { title: 'Proyectos' }
    },
    {
      path: '/educacion',
      name: 'education',
      component: () => import('../views/EducationView.vue'),
      meta: { title: 'Educación' }
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contacto' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.afterEach((to) => {
  const baseTitle = 'Giancarlo Alvarez | Fullstack Developer'
  document.title = to.meta.title ? `${to.meta.title} | ${baseTitle}` : baseTitle
})

export default router
