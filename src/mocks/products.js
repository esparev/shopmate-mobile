const products = [
  {
    id: 1,
    name: 'Apples',
    description:
      'A sweet and juicy fruit that is a great source of fiber and antioxidants. Apples are a good source of fiber, vitamin C, and potassium. They are also a good source of vitamin K, folate, and copper. Apples are a good source of fiber, which helps keep the digestive system healthy. Apples are a good source of vitamin C, which helps the body absorb iron. Apples are a good source of potassium, which helps maintain healthy blood pressure. Apples are a good source of vitamin K, which helps the body form blood clots. Apples are a good source of folate, which helps the body form red blood cells. Apples are a good source of copper, which helps the body form red blood cells and maintain nerve function.',
    price: 39.99,
    image: '',
    weight: 1.5,
    measurementUnit: 'kg',
  },
  {
    id: 2,
    name: 'Bananas',
    description:
      'A long yellow fruit with a curved shape and soft flesh. Bananas are a good source of vitamin B6, vitamin C, and potassium. They are also a good source of fiber, vitamin B12, and manganese. Bananas are a good source of vitamin B6, which is important for brain function and the immune system. Bananas are a good source of vitamin C, which helps the body absorb iron. Bananas are a good source of potassium, which helps maintain healthy blood pressure. Bananas are a good source of fiber, which helps keep the digestive system healthy. Bananas are a good source of vitamin B12, which helps keep the nervous system healthy. Bananas are a good source of manganese, which helps the body form connective tissue and bones.',
    price: 19.99,
    image: '',
    weight: 1.2,
    measurementUnit: 'kg',
  },
  {
    id: 3,
    name: 'Milk',
    description:
      'A white liquid produced by mammals for their young. Milk is a good source of calcium, vitamin D, and protein. It is also a good source of vitamin A, vitamin B12, and potassium. Milk is a good source of calcium, which is important for bone health. Milk is a good source of vitamin D, which helps the body absorb calcium. Milk is a good source of protein, which helps build and repair muscles. Milk is a good source of vitamin A, which helps keep the skin, hair, and eyes healthy. Milk is a good source of vitamin B12, which helps keep the nervous system healthy. Milk is a good source of potassium, which helps maintain healthy blood pressure.',
    price: 48.49,
    image: '',
    weight: 1,
    measurementUnit: 'L',
  },
  {
    id: 4,
    name: 'Bread',
    description:
      'A staple food made from flour, water, and yeast or another leavening agent. Bread is a good source of carbohydrates, fiber, and protein. It is also a good source of vitamin B6, niacin, and iron. Bread is a good source of carbohydrates, which is the body’s main source of energy. Bread is a good source of fiber, which helps keep the digestive system healthy. Bread is a good source of protein, which helps build and repair muscles. Bread is a good source of vitamin B6, which is important for brain function and the immune system. Bread is a good source of niacin, which helps the body use carbohydrates, fats, and proteins. Bread is a good source of iron, which helps the body form red blood cells and maintain nerve function.',
    price: 27.0,
    image: '',
    weight: 500,
    measurementUnit: 'gr',
  },
  {
    id: 5,
    name: 'Pasta',
    description:
      'A staple food made from flour and water and cooked in boiling water. Pasta is a good source of carbohydrates, fiber, and protein. It is also a good source of vitamin B6, niacin, and iron. Pasta is a good source of carbohydrates, which is the body’s main source of energy. Pasta is a good source of fiber, which helps keep the digestive system healthy. Pasta is a good source of protein, which helps build and repair muscles. Pasta is a good source of vitamin B6, which is important for brain function and the immune system. Pasta is a good source of niacin, which helps the body use carbohydrates, fats, and proteins. Pasta is a good source of iron, which helps the body form red blood cells and maintain nerve function.',
    price: 19.99,
    image: '',
    weight: 500,
    measurementUnit: 'gr',
  },
  {
    id: 6,
    name: 'Tomatoes',
    description:
      'A red fruit commonly used in cooking and salads. Tomatoes are a good source of vitamin C, vitamin K, and potassium. They are also a good source of vitamin B6, folate, and manganese. Tomatoes are a good source of vitamin C, which helps the body absorb iron. Tomatoes are a good source of vitamin K, which helps the body form blood clots. Tomatoes are a good source of potassium, which helps maintain healthy blood pressure. Tomatoes are a good source of vitamin B6, which is important for brain function and the immune system. Tomatoes are a good source of folate, which helps the body form red blood cells. Tomatoes are a good source of manganese, which helps the body form connective tissue and bones.',
    price: 56.99,
    image: '.',
    weight: 750,
    measurementUnit: 'gr',
  },
  {
    id: 7,
    name: 'Chicken Breast',
    description:
      'A lean cut of chicken meat with no skin or visible fat. Chicken breast is a good source of protein, niacin, and vitamin B6. It is also a good source of vitamin B12, phosphorus, and selenium. Chicken breast is a good source of protein, which helps build and repair muscles. Chicken breast is a good source of niacin, which helps the body use carbohydrates, fats, and proteins. Chicken breast is a good source of vitamin B6, which is important for brain function and the immune system. Chicken breast is a good source of vitamin B12, which helps keep the nervous system healthy. Chicken breast is a good source of phosphorus, which helps keep bones and teeth healthy. Chicken breast is a good source of selenium, which helps the body form red blood cells and maintain nerve function.',
    price: 115.99,
    image: '',
    weight: 1,
    measurementUnit: 'kg',
  },
  {
    id: 8,
    name: 'Cheese',
    description:
      'A dairy product made from milk that is usually hard, yellow, and salty. Cheese is a good source of calcium, protein, and vitamin B12. It is also a good source of phosphorus, vitamin A, and zinc. Cheese is a good source of calcium, which is important for bone health. Cheese is a good source of protein, which helps build and repair muscles. Cheese is a good source of vitamin B12, which helps keep the nervous system healthy. Cheese is a good source of phosphorus, which helps keep bones and teeth healthy. Cheese is a good source of vitamin A, which helps keep the skin, hair, and eyes healthy. Cheese is a good source of zinc, which helps the body form red blood cells and maintain nerve function.',
    price: 75.99,
    image: '',
    weight: 250,
    measurementUnit: 'gr',
  },
  {
    id: 9,
    name: 'Oranges',
    description:
      'A round, orange fruit with a sweet taste. Oranges are a good source of vitamin C, folate, and potassium. They are also a good source of vitamin B6, vitamin A, and fiber. Oranges are a good source of vitamin C, which helps the body absorb iron. Oranges are a good source of folate, which helps the body form red blood cells. Oranges are a good source of potassium, which helps maintain healthy blood pressure. Oranges are a good source of vitamin B6, which is important for brain function and the immune system. Oranges are a good source of vitamin A, which helps keep the skin, hair, and eyes healthy. Oranges are a good source of fiber, which helps keep the digestive system healthy.',
    price: 27.49,
    image: '',
    weight: 1.5,
    measurementUnit: 'kg',
  },
  {
    id: 10,
    name: 'Salmon',
    description:
      'A fatty fish with a pink flesh and a sweet flavor. Salmon is a good source of protein, vitamin B12, and selenium. It is also a good source of vitamin D, niacin, and phosphorus. Salmon is a good source of protein, which helps build and repair muscles. Salmon is a good source of vitamin B12, which helps keep the nervous system healthy. Salmon is a good source of selenium, which helps the body form red blood cells and maintain nerve function. Salmon is a good source of vitamin D, which helps the body absorb calcium. Salmon is a good source of niacin, which helps the body use carbohydrates, fats, and proteins. Salmon is a good source of phosphorus, which helps keep bones and teeth healthy.',
    price: 170.99,
    image: '',
    weight: 250,
    measurementUnit: 'gr',
  },
];

export default products;
