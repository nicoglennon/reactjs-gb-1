const api = {
  getState: async () => {
    try {
      const res = await fetch('https://jsonbox.io/box_cbaa2702fa90d69b78f5', {
        method: 'GET',
      })
      if (res.status !== 200) {
        return null
      }
      const body = await res.json()
      return body[0]
    } catch (e) {
      console.log(e)
      return null
    }
  },
  setTheme: async newTheme => {
    try {
      const res = await fetch(
        'https://jsonbox.io/box_cbaa2702fa90d69b78f5/5d7da08852649a0017c0e827',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ theme: newTheme }),
        }
      )
      if (res.status !== 200) {
        return null
      }
      const body = await res.json()
      return body.message
    } catch (e) {
      console.log(e)
      return null
    }
  },
}

export default api
