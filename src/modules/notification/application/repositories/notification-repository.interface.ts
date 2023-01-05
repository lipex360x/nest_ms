import { Notification } from '../../infra/database/typeorm/entities'
import { NotificationRequest } from '../dtos'

export abstract class INotificationRepository {
  abstract create(props: NotificationRequest): Notification
  abstract save(): Promise<Notification>
}
