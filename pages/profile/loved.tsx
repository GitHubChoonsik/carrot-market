import type { NextPage } from "next";
import Layout from "@/components/layout";
import ProductList from "@/components/product-list";
import { Kind } from "@prisma/client";

const Loved: NextPage = () => {
  return (
    <Layout title="관심목록" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        <ProductList kind={Kind.Fav} />
      </div>
    </Layout>
  );
};

export default Loved;
