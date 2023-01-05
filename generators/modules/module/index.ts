import {
  CreateFileProps,
  generatorHandler,
  textTransformHandler,
  UpdateFileProps,
} from 'generators/core/helpers'
import { PlopGeneratorConfig } from 'plop'

interface ResponseProps {
  moduleName: string
}

export default <PlopGeneratorConfig>{
  description: 'Generate Module',

  prompts: [
    {
      type: 'input',
      name: 'moduleName',
      message: 'Module Name',
      default: 'Hoje Não',
      validate: (value: string) => (!value ? 'Value is required' : true),
    },
  ],

  actions: (response: ResponseProps) => {
    const slug = textTransformHandler.sanitize(response.moduleName)

    const createFiles: CreateFileProps[] = [
      {
        path: `../${slug}.ts`,
        templateFile: './modules/module/templates/index.hbs',
      },
    ]

    const updateFiles: UpdateFileProps[] = [
      {
        path: '../teste.ts',
        template: "export * from 'quql' ",
      },
    ]

    return generatorHandler({ createFiles, updateFiles })
  },
}
