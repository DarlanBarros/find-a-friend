import type { Prisma, Pet } from '@prisma/client'
import type { PetsRepository } from '../pets-repository.js'
import { randomUUID } from 'node:crypto'

export class InMemoryPetsRepository implements PetsRepository {
  itens: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    const pet: Pet = {
      id: data.id ?? randomUUID(),
      name: data.name,
      description: data.description,
      specie: data.specie,
      breed: data.breed,
      size: data.size,
      age: data.age,
      city: data.city,
      org_id: data.org_id,
      created_at: new Date(),
    }

    this.itens.push(pet)

    return pet
  }
}
