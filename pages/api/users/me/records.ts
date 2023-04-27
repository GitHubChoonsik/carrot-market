import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";
import { Kind } from "@prisma/client";

export function getRecordKind(string: any): Kind | undefined {
  if (typeof string !== "string") return undefined;
  const small = string.toLowerCase();
  switch (small) {
    case Kind.Purchase.toLowerCase():
      return Kind.Purchase;
    case Kind.Sale.toLowerCase():
      return Kind.Sale;
    case Kind.Fav.toLowerCase():
      return Kind.Fav;
    default:
      return undefined;
  }
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
    query: { kind },
  } = req;
  const recordKind = getRecordKind(kind);
  if (recordKind) {
    const records = await client.record.findMany({
      where: {
        userId: user?.id,
        kind: recordKind,
      },
      include: {
        product: true,
      },
    });
    res.json({
      ok: true,
      records,
    });
  } else {
    res.json({
      ok: false,
    });
  }
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
