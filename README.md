# Faith Covenant's Digital Bulletin Builder

A full-stack admin tool for [Faith Covenant Church](www.faithecc.org) in Wheaton, IL to populate their weekly online bulletin (www.faithecc.org/bulletin).

## Tech Stack

This is a Meteor Project, utilizing React + TypeScript

### Prerequisites to running locally

To run this project, you will need to have the following installed on your machine:

- [node/npm](https://nodejs.org/en/download/)
- [meteor](https://www.meteor.com/developers/install)

### Running Locally

- Clone this repo
- `cd digital-bulletin-admin-tool` to get into the project
- run `npm install` to install all the dependencies
- run `meteor run` to fire up the project locally

### Workflow

To contribute to this project:

- Create a new branch in github (ex. `my-new-branch`)
- In your local environment, pull the latest changes from main (which should also pull the available remote branches, including the one you just created) - `git checkout main` & `git pull`.
- Checkout your new branch locally - `git checkout my-new-branch`.
- Commit your code and push your local branch to your remote branch: `git push`.
- When your work is ready to be merged in, open a Pull Request in Github
- Your work will be reviewed, and possible suggestions made
- Make any necessary edits based on the feedback
- Merge the branch into `main`, and delete the remote branch.
- Delete your local branch. (ex. `git checkout main && git branch -D my-new-branch`)

### Tips

#### If your branch has merge conflicts with `main`:

- On your branch on your local machine run `git pull origin main`. This will attempt to merge the latest code of `main` into your branch.
- Resolve the merge conflicts locally. VS Code makes this very easy by clicking the git side menu and following the prompts.
- After resolving, save your files, commit, and push your code again.

#### Pro Tips for local development

- Make sure you have the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) installed in VS Code.
- Set your editor's settings to format on save
  - Open VS Code's settings
  - Search for `formatOnSave`
  - Click enable

### Contributing Devs

- [Zack Zboncak](https://github.com/zzboncak)
- [Nate Forgille](https://github.com/NathanForgille)

mini edit
