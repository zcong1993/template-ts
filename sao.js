module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      role: 'folder:name'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my cool project`
    },
    username: {
      message: 'What is your GitHub username?',
      role: 'git:name',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      role: 'git:email',
      store: true
    },
    website: {
      message: 'The URL of your website?',
      default({username}) {
        return `github.com/${username}`
      },
      store: true
    },
    typing: {
      message: 'Need typing ?',
      type: 'confirm',
      default: true
    }
  },
  move: {
    'gitignore': '.gitignore'
  },
  filters: {
    'typings/**': 'typing'
  },
  post({ log, chalk, isNewFolder, folderName, init }) {
    init()
    log.success('Done!')
    if (isNewFolder) {
      log.info(`cd ${chalk.yellow(folderName)} to get started!`)
    }
  }
}
