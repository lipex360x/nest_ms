import { Injectable } from '@nestjs/common'

import { INotificationRepository } from '../repositories'

@Injectable()
export class CreateNotificationUseCase {
  constructor(private readonly repository: INotificationRepository) {}

  async execute(): Promise<null> {
    return null
  }
}
