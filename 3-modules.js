// MODULES

// CommonJs: every file is a module (by default)
// Modules: Encapsulated Code (only share minimum <what we want>)

// to access what's in each file
    // we use keyword require and path name
    // remember we always use '.' to start with
    const names = require('./4-names')
    const sayHi = require('./5-utils')
    const data = require('./6-alternative-method-to-export')
    require('./7-mind-grenade')
    
    sayHi('Susan')
    sayHi(names.john)
    sayHi(names.peter)