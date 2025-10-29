import type { OrgsRepository } from '@/repositories/orgs-repository.js'
import type { Org } from '@prisma/client'

interface CreateOrgUseCaseRequest {
  name: string
  email: string
  password_hash: string
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
    const org = await this.orgsRepository.create({
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      address: data.address,
      city: data.city,
      whatsapp: data.whatsapp,
    })

    return {
      org,
    }
  }
}
