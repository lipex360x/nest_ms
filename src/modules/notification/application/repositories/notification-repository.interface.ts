import { Notification } from '../../infra/database/typeorm/entities'
import { NotificationRequestDto } from '../dtos'

export abstract class INotificationRepository {
  abstract create(props: NotificationRequestDto): Notification
  abstract save(props: Notification): Promise<Notification>
}
