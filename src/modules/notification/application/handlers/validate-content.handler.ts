import { BadRequestException } from '@nestjs/common'

import { InvalidContent } from '../../domain/constants'
import { NotificationRequestDto } from '../dtos'

export class ValidateContentHandler {
  async handle(request: NotificationRequestDto) {
    const { content } = request

    if (content.length < 5 || content.length > 240)
      throw new BadRequestException(InvalidContent)

    return request
  }
}
