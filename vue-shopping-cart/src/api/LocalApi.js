import { BaseApi } from '@/api/BaseApi'

export class LocalApi extends BaseApi {

  constructor() {
    super()
  }

async getProducts() {
      const response = await fetch(this.baseUrl)
      const {items} = await response.json()
      return items     
  }
}