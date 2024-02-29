import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

type sessionDataTypes = {
  email?: string;
  isLoggin: boolean;
};


export const getSession = async () => {
  const session = await getIronSession<sessionDataTypes>(cookies(), {
    password: String(process.env.SECRET_KEY),
    cookieName: "session",
  });

  if (!session.isLoggin) {
    session.isLoggin = false
  }

  return session;
};
