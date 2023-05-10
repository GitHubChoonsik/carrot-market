import type { NextPage } from "next";
import Layout from "@/components/layout";
import { Kind, Product } from "@prisma/client";
import ProductList from "@/components/product-list";

const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        <ProductList kind={Kind.Sale} />
      </div>
    </Layout>
  );
};

export default Sold;
