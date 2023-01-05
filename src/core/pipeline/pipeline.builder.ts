import { IPipelineBuilder, IPipelineHandler, IPipelineStep } from './interfaces'

export abstract class AbstractPipelineBuilder
  implements IPipelineStep, IPipelineBuilder
{
  protected steps = []
  protected data: unknown

  public input(data: unknown): IPipelineStep {
    this.data = data
    return this
  }

  public step<T extends IPipelineHandler>(handler: T): IPipelineStep {
    this.steps.push(handler)
    return this
  }

  public async run<T>(): Promise<T> {
    let response = undefined
    const input = this.data

    for (const step of this.steps) {
      response = await step.handle(input)
      Object.assign(input as object, response)
    }

    return response as T
  }
}
