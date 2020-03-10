<template>
  <div>
    <div class="grid-container">
      <h1>Components</h1>
      <hr />
    </div>
    <div>
      <h2>Navbar</h2>
      <hr />
      <div>
        <navbar />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>
