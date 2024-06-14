import express from "express";

const router = express.Router();

const data = {
  "mcyber@gdid.com": [
    "mcyber user info",
    "doc_1 / doc_2 / doc_3",
  ],
  "user1@gdid.com": [
    "user1 user info",
    "doc_4 / doc_5 / doc_6",
  ],
};

const getDocuments = async (req, res) => {
  try {
    const email = req.user;

    res.status(200).send(data[email]);
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get("/", getDocuments);

export default router;