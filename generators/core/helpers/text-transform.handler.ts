import crypto from 'node:crypto'

export const textTransformHandler = {
  capitalize: (word: string) =>
    word.charAt(0).toUpperCase() + word.toLowerCase().slice(1),

  pascalCase: (word: string) =>
    word.replace(/([-_ ]\w)/g, (text) => text[1].toUpperCase()),

  camelCase: (word: string) =>
    word.replace(/^([A-Z])|\s(\w)/g, function (_, p1, p2, __) {
      if (p2) return p2.toUpperCase()
      return p1.toLowerCase()
    }),

  snakeCase: (word: string) =>
    word
      .replace(/\d+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join('_'),

  generateId: (size = 20) => crypto.randomBytes(size).toString('hex'),

  sanitize: (text: string) => {
    text = text
      .replace(/\uFEFF/g, '')
      .replace(/[&\\/\\#,+()$~%!.„'":*‚^_¤?<>|@ª{«»§}©®™ ]/g, '')
      .toLowerCase()

    const accentsMap: Record<string, string> = {
      a: 'á|à|ã|â|À|Á|Ã|Â',
      e: 'é|è|ê|É|È|Ê|ë|Ë',
      i: 'í|ì|î|Í|Ì|Î|ï|Ï',
      o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      c: 'ç|Ç',
      n: 'ñ|Ñ',
    }

    return Object.keys(accentsMap).reduce(
      (acc, cur) => acc.replace(new RegExp(accentsMap[cur], 'g'), cur),
      text,
    )
  },
}
