"use server";

import { items, collection } from "@/data/items.json";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;

  if (!email || !password) return null;

  // check user
  const isExist = await items(collection.USER).findOne({ email });
  if (isExist) return null;

  // create user
  const newUser = {
    providerId: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user"
  };

  // insert user
  const result = await items(collection.USER).insertOne(newUser);

  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString()
    };
  }

  

  return null;
};


