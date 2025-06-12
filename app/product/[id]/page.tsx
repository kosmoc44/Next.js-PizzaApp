interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params: { id } }: ProductPageProps) {
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
}
