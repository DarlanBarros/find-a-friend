import { beforeEach, describe, expect, it } from 'vitest'
import { CreatePetUseCase } from './create-a-pet.js'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository.js'

let petsRepository: InMemoryPetsRepository
let sut: CreatePetUseCase

describe('Create a Pet', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new CreatePetUseCase(petsRepository)
  })

  it('should be able to create a pet', async () => {
    const { pet } = await sut.execute({
      name: 'Bella',
      description: 'Cadela, branca com manchas marrons',
      specie: 'CACHORRO',
      breed: 'SRD',
      size: 'MEDIO',
      age: 4,
      city: 'Rio de Janeiro',
      org_id: 'org-01',
    })

    expect(pet.id).toEqual(expect.any(String))
  })
})
