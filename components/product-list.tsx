import { ProductWithCount } from "@/pages";
import { Kind } from "@prisma/client";
import useSWR from "swr";
import Item from "@/components/item";

interface ProductListProps {
  kind: Kind;
}

interface Record {
  id: number;
  product: ProductWithCount;
}

interface ProductListResponse {
  ok: boolean;
  records: Record[];
}

export default function ProductList({ kind }: ProductListProps) {
  const { data } = useSWR<ProductListResponse>(
    `/api/users/me/records?kind=${kind}`
  );
  return data ? (
    <>
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
    </>
  ) : null;
}
