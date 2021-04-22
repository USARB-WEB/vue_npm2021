<template>
  <div class="about container">
    <h1>Products</h1>
    <div class="d-flex">
      <Product v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import Product from "@/components/products/Product";
export default {
  components: {
    Product,
  },
  data: () => {
    return {
      products: [
        {
          id: 1,
          name: "Product 1",
          description: "Product 1 Lorem ipsum dolor sit amet",
          price: 123.45,
        },
        {
          id: 2,
          name: "Product 2",
          description: "Product 2 Lorem ipsum dolor sit amet",
          price: 123.45,
        },
        {
          id: 3,
          name: "Product 3",
          description: "Product 3 Lorem ipsum dolor sit amet",
          price: 123.45,
        },
      ],
    };
  },
  methods: {
    addToCart(product) {
      console.log(product);
    },
  },
};
</script>