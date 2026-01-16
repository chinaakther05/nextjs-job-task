import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


const demoUser = {
  email: "admin@gmail.com",
  password: "123456"
}

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
       
        

        if (!demoUser.email=== credentials.email) throw new Error("User not found");

       
        if (!demoUser.password===credentials.password) throw new Error("Invalid password");
        delete demoUser.password;

        return demoUser;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};