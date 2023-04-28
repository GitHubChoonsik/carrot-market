import type { NextPage } from "next";
import Item from "@/components/item";
import Layout from "@/components/layout";
import { Kind } from "@prisma/client";
import useSWR from "swr";

const Sold: NextPage = () => {
  const { data } = useSWR(`/api/users/me/records?kind=${Kind.Sale}`);
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        {data?.records?.map((record) => (
          <Item
            id={record.product.id}
            key={record.id}
            title={record.product.name}
            price={record.product.price}
            comments={1}
            hearts={record.product._count.records}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
