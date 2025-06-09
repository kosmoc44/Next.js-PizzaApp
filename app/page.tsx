import {
  Container,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import Filters from "@/components/shared/filters";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="All pizzas" size="lg" className="mb-5" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-9">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Combo"
                items={[
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
              <ProductsGroupList
                title="Combo"
                items={[
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
