import { body } from "express-validator"

const userValidators = [
    body("email").isLength({min:3}).withMessage("must-be-at-least-3-char-long"),
    body("firstName").isLength({min:3}).withMessage("must-be-at-least-3-char-long"),
    body("firstName").isLength({max:15}).withMessage("too-long"),
    body("firstName").isAlpha().withMessage("shouldnt-contain-numbers"),
    body("lastName").isAlpha().withMessage("shouldnt-contain-numbers"),
    body("lastName").isLength({min:3}).withMessage("must-be-at-least-3-char-long"),
    body("email").isLength({max:140}).withMessage("too-long"),
]

export default userValidators