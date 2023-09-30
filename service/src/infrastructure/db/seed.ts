import { AccountService, ProductService } from "../../services";

const seed = async () => {
  const admin = await AccountService.create(
    "admin@email.com",
    "password",
    "ADMIN",
  );
  const user = await AccountService.create("user@email.com", "password");

  const exampleProduct = await ProductService.create(
    "Single White Goose",
    "Very Friendly Goose",
    1,
  );

  const exampleProduct2 = await ProductService.create(
    "Flying Goose",
    "This Goose can take you places",
    12.99,
  );

  const exampleProduct3 = await ProductService.create(
    "River Goose",
    "He lives in a river",
    88.99,
  );

  const exampleProduct4 = await ProductService.create(
    "Henry",
    "Watch out for henry",
    34.99,
  );

  const exampleProduct5 = await ProductService.create(
    "Bonked White Goose",
    "This one is a fighter",
    74.99,
  );

  const exampleProduct6 = await ProductService.create(
    "Bulk White Geese",
    "Why would you buy these?",
    345.99,
  );
};

seed();
