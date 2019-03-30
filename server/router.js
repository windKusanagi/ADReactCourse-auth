import { signup, signin } from "./controllers/authentication";
import "./services/passport";
import passport from "passport";

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

export default app => {
	app.get("/", requireAuth, (req, res) => res.send({ hi: "there" }));
	app.post("/signin", requireSignin, signin);
	app.post("/signup", signup);
};
