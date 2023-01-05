export abstract class AbstractPipelineBuilder {
  protected steps = []
  protected data: unknown

  public input(data: unknown) {
    this.data = data
    return this
  }

  public step(handler: unknown) {
    this.steps.push(handler)
    return this
  }

  public async run<T>(): Promise<T> {
    let response = undefined
    const input = this.data

    for (const step of this.steps) {
      response = await step.handler(input)
      Object.assign(input as object, response)
    }

    return response as T
  }
}
