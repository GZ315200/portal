declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string
      PORT?: string
      PWD: string
      NODE_ENV: 'development' | 'production'
      REACT_APP_ROUTER_MODE: 'hash' | 'history'
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
