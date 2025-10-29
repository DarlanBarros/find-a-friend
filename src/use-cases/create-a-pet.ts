import type { PetsRepository } from '@/repositories/pets-repository.js'
import type { Pet, Size, Specie } from '@prisma/client'

interface CreatePetUseCaseRequest {
  name: string
  description: string
  specie: Specie
  breed: string
  age: number
  size: Size
  city: string
  org_id: string
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(
    data: CreatePetUseCaseRequest,
  ): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petsRepository.create({
      name: data.name,
      description: data.description,
      specie: data.specie,
      breed: data.breed,
      age: data.age,
      city: data.city,
      size: data.size,
      org_id: data.org_id,
    })

    return {
      pet,
    }
  }
}
