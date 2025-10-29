import type { Prisma, Org } from '@prisma/client'
import type { OrgsRepository } from '../orgs-repository.js'
import { randomUUID } from 'node:crypto'

export class InMemoryOrgsRepository implements OrgsRepository {
  itens: Org[] = []
  async create(data: Prisma.OrgCreateInput): Promise<Org> {
    const org: Org = {
      id: data.id ?? randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      address: data.address,
      city: data.city,
      whatsapp: data.whatsapp,
      created_at: new Date(),
    }

    return org
  }
}
