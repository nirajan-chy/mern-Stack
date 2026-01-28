import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const result = await bcrypt.hash(password, 10);
  return result;
};

export const verifyPassword = async ({ hashedPassword, plainPassword }) => {
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
};
