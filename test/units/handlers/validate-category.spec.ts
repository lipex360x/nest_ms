import { ValidateCategoryHandler } from '@/modules/notification/application/handlers/validate-category.handle'
import { InvalidCategory } from '@/modules/notification/domain/constants'
import { BadRequestException } from '@nestjs/common'
import { makeNotification } from '@test/mocks/notification'

describe('ValidateCategoryHandler', () => {
  it('shoud create category', async () => {
    // arrange
    const validation = new ValidateCategoryHandler()
    const notification = makeNotification()
    const spySutHandle = jest.spyOn(validation, 'handle')

    // act
    const validate = await validation.handle(notification)

    // assert
    expect(validate).toBeTruthy()
    expect(spySutHandle).toHaveBeenCalledTimes(1)
    expect(spySutHandle).toHaveBeenCalledWith(makeNotification())
  })

  it('shoud return error for invalid category', async () => {
    // arrange
    const validation = new ValidateCategoryHandler()
    const notification = makeNotification({ category: '' })
    const spySutHandle = jest.spyOn(validation, 'handle')

    // assert
    expect(() => validation.handle(notification)).rejects.toThrow(
      new BadRequestException(InvalidCategory)
    )
    expect(spySutHandle).toHaveBeenCalledTimes(1)
    expect(spySutHandle).toHaveBeenCalledWith(notification)
  })
})
