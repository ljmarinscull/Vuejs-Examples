export class BaseApi {

    constructor() {
      this.baseUrl = 'http://localhost:8080/data/products.json'
    }
  
    async rawFetch(url) {
      const response = await fetch(`${this.baseUrl}${url}`)
      return await response.json()
    }

  }