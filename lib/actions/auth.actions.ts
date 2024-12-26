import { ID } from "node-appwrite";

import { account } from "../appwrite.config";

export const generateMagicLink = async (email: string) => {
  try {
    const token = await account.createMagicURLToken(
      ID.unique(),
      email,
      `${process.env.NEXT_PUBLIC_APP_DOMAIN}/login/magic-link",`
    );
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const loginWithMagicLink = async (secret: string, userId: string) => {
  try {
    const response = await account.createSession(secret, userId);
    return response;
  } catch (error) {
    console.log(error);
  }
};
