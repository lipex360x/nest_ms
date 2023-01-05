import { AbstractPipelineBuilder } from '@/core/pipeline'
import { Injectable } from '@nestjs/common'

import { NotificationRequestDto } from '../dtos'

@Injectable()
export class CreateNotificationBuilder extends AbstractPipelineBuilder {
  public input(data: NotificationRequestDto) {
    this.data = data

    return this
  }
}
