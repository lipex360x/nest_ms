export interface NotificationRequestDto {
  category?: string
  content?: string
  recipientId?: string
}

export const makeNotification = (props?: NotificationRequestDto) => ({
  category: 'category',
  content: 'content',
  recipientId: 'recipientId',

  ...props,
})
