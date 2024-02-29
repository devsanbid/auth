"use server";

import { getSession } from "@/utils";
import { redirect } from "next/navigation";

const my_email = "damsandesh@gmail.com";
const my_password = "12345";

export const registerAction = async (formdata: FormData) => {
  const session = await getSession();

  const email = formdata.get("email") as string;
  const password = formdata.get("password");
  if (my_email !== email || my_password !== password) {
    return {
      status: false,
      message: "Invalid credientials",
    };
  }
  session.email = email;
  session.isLoggin = true
  await session.save();
  redirect("/profile");
};

export const logoutAction = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/login");
};
