export default async (to, from, next) => {
  document.title = `${to.name} - Series Wished`

  const token = localStorage.getItem('token')

  if (!token) {
    if (to.name !== 'login') {
      try {
        await store.dispatch('login/ActionCheckToken')
        next({ path: to.path })
      } catch (err) {
        next({ name: 'login' })
      }
    } else {
      next()
    }
  } else {
    if (to.name === 'login') {
      next({ name: 'home' })
    } else {
      next()
    }
  }
}