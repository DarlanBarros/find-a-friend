import type { Prisma, Pet } from '@prisma/client'
import type { PetsRepository } from '../pets-repository.js'
import { randomUUID } from 'node:crypto'

export class InMemoryPetsRepository implements PetsRepository {
  itens: Pet[] = []

  async listPetsByCity(city: string): Promise<Pet[]> {
    const pets = this.itens.filter((item) => item.city === city)

    return pets
  }

  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    const pet: Pet = {
      id: data.id ?? randomUUID(),
      name: data.name,
      description: data.description,
      specie: data.specie ?? null,
      breed: data.breed ?? null,
      size: data.size ?? null,
      age: data.age ?? null,
      city: data.city,
      org_id: data.org_id,
      created_at: new Date(),
    }

    this.itens.push(pet)

    return pet
  }
}
