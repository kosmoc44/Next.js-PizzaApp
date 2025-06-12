import {
  Container,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import Filters from "@/components/shared/filters";
import { Suspense } from "react";

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
            <Suspense fallback={<div>Загрузка фильтров...</div>}>
              <Filters />
            </Suspense>
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
                    id: 2,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
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
                    id: 7,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 12,
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
                    id: 13,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 14,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 15,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 16,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 17,
                    name: "Chesse Bomb",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11ee89722ed2d2f992155a94fa4d383a.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 18,
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
