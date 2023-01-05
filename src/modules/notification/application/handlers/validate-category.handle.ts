import { BadRequestException } from '@nestjs/common'

import { InvalidCategory } from '../../domain/constants'
import { NotificationRequestDto } from '../dtos'

export class ValidateCategoryHandler {
  async handle(request: NotificationRequestDto) {
    const { category } = request

    if (!category.length) throw new BadRequestException(InvalidCategory)

    return request
  }
}
