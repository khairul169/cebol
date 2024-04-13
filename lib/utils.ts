import crypto from "node:crypto";

export const randomChars = (length = 8) => {
  return crypto.randomBytes(length / 2).toString("hex");
};
