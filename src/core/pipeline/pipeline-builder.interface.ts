export interface IPipelineHandler {
  handle(request: unknown): unknown
}

export interface IPipelineStep {
  step<T extends IPipelineHandler>(handler: T): IPipelineStep
  run<T>(): Promise<T>
}

export interface IPipelineBuilder {
  input(data: unknown): IPipelineStep
  step<T extends IPipelineHandler>(handler: T): IPipelineStep
}
