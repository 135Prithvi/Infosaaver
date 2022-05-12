import { getToken } from "next-auth/jwt"
import type { NextApiRequest, NextApiResponse } from "next"
process.env.NEXTAUTH_SECRET

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = await getToken({ req})
  res.send(JSON.stringify(token, null, 2))
}
