import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

const MASTER_USER = "Peter";
const MASTER_USER_PASSWORD = "Keys2DaKindum";

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(MASTER_USER ?? "")) {
    Accounts.createUser({
      username: MASTER_USER,
      password: MASTER_USER_PASSWORD
    });
  }
});
