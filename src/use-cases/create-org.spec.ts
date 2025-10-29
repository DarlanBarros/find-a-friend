import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateOrgUseCase } from './create-org.js'

let orgsRepository: InMemoryOrgsRepository
let sut: CreateOrgUseCase

describe('Create Orgs', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository()
    sut = new CreateOrgUseCase(orgsRepository)
  })

  it('should be able to creat an org', async () => {
    const { org } = await sut.execute({
      name: 'Best Friend',
      email: 'admin@best-friend.com',
      password: '123456',
      address: 'Rua das Flores',
      city: 'Rio de Janeiro',
      whatsapp: '00101100111',
    })

    expect(org.id).toEqual(expect.any(String))
  })
})
