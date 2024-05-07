import express from "express";

import {
  checkCompanyEmail,
  checkCompanyName,
  companyGoogle,
  companySignUp,
} from "../../controllers/company/companyAuth.controller.js";

const router = express.Router();

router.post("/signup", companySignUp);
router.post("/check-company", checkCompanyName);
router.post("/check-email", checkCompanyEmail);
router.post("/google", companyGoogle);

export default router;
