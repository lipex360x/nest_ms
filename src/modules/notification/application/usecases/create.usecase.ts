import { Injectable } from '@nestjs/common'

import { NotificationRequestDto } from '../dtos'
import { CreateNotificationBuilder, ValidateContentHandler } from '../handlers'
import { ValidateCategoryHandler } from '../handlers/validate-category.handle'
import { INotificationRepository } from '../repositories'

@Injectable()
export class CreateNotificationUseCase {
  constructor(
    private readonly repository: INotificationRepository,
    private readonly pipeline: CreateNotificationBuilder,
    private readonly validateContent: ValidateContentHandler,
    private readonly validateCategory: ValidateCategoryHandler
  ) {}

  async execute(request: NotificationRequestDto): Promise<null> {
    const response: NotificationRequestDto = await this.pipeline
      .input(request)
      .step(this.validateContent)
      .step(this.validateCategory)
      .run()

    console.log(response)

    const notification = this.repository.create(response)

    await this.repository.save(notification)

    return null
  }
}
