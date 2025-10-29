import type { OrgsRepository } from '@/repositories/orgs-repository.js'
import type { Org } from '@prisma/client'
import { hash } from 'bcryptjs'

interface CreateOrgUseCaseRequest {
  name: string
  email: string
  password: string
  address: string
  city: string
  whatsapp: string
}

interface CreateOrgUseCaseResponse {
  org: Org
}

export class CreateOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute(
    data: CreateOrgUseCaseRequest,
  ): Promise<CreateOrgUseCaseResponse> {
    const password_hash = await hash(data.password, 6)

    const org = await this.orgsRepository.create({
      name: data.name,
      email: data.email,
      password_hash,
      address: data.address,
      city: data.city,
      whatsapp: data.whatsapp,
    })

    return {
      org,
    }
  }
}
