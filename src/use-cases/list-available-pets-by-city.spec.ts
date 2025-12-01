import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository.js'
import { beforeEach, describe, expect, it } from 'vitest'
import { ListAvailablePetsByCityUseCase } from './list-available-pets-by-city.js'

let petsRepository: InMemoryPetsRepository
let sut: ListAvailablePetsByCityUseCase

describe('List Available Pets By City', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository()
    sut = new ListAvailablePetsByCityUseCase(petsRepository)
  })

  it('Should be able to list all available pets by city', async () => {
    petsRepository.create({
      name: 'Bella',
      description: 'Cadela de cor branca',
      org_id: 'org-01',
      city: 'Cantagalo',
    })

    petsRepository.create({
      name: 'Luna',
      description: 'Cadela de cor preta',
      org_id: 'org-01',
      city: 'Cantagalo',
    })

    petsRepository.create({
      name: 'Jake',
      description: 'Gato de cor parda',
      org_id: 'org-03',
      city: 'Nova Friburgo',
    })

    const { pets } = await sut.execute({ city: 'Cantagalo' })

    expect(pets).toHaveLength(2)
  })
})
