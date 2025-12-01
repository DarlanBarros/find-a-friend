import type { PetsRepository } from '@/repositories/pets-repository.js'
import type { Pet } from '@prisma/client'

interface ListAvailablePetsByCityRequest {
  city: string
}

interface ListAvailablePetsByCityResponse {
  pets: Pet[]
}

export class ListAvailablePetsByCityUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    city,
  }: ListAvailablePetsByCityRequest): Promise<ListAvailablePetsByCityResponse> {
    const pets = await this.petsRepository.listPetsByCity(city)

    return { pets }
  }
}
