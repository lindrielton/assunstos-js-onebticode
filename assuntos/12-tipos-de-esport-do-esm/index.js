import  { inline } from "./inline.js"

import defaltInline from './inline.js'


import { group , a, b } from "./non-inline.js"

import exportDefault from "./non-inline.js"


// podemos pegar o export defalt na mesma linha que o nomeado

//ex  import  exportDefault, { group , a, b } from "./non-inline.js"

inline()
defaltInline()


group()
a()
b()



exportDefault()