module.exports = {
  description: 'Scaffolding out a empty ts project.',
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project?',
        default: this.outFolder
      },
      {
        name: 'description',
        message: 'How would you descripe the new project?',
        default: `my cool project`
      },
      {
        name: 'author',
        message: 'What is your name',
        default: this.gitUser.name,
        store: true,
        required: true
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.name,
        store: true,
        required: true
      },
      {
        name: 'email',
        message: 'What is your GitHub email',
        default: this.gitUser.email,
        store: true,
        required: true,
        validate: v => /.+@.+/.test(v)
      },
      {
        name: 'website',
        default(answers) {
          return `https://github.com/${answers.username}`
        },
        store: true
      }
    ]
  },
  actions() {
    return [
      {
        type: 'add',
        files: '**'
      },
      {
        type: 'move',
        patterns: {
          // We keep `.gitignore` as `gitignore` in the project
          // Because when it's published to npm
          // `.gitignore` file will be ignored!
          gitignore: '.gitignore',
        }
      }
    ]
  },
  async completed() {
    await this.gitInit()
    this.showProjectTips()
  }
}
