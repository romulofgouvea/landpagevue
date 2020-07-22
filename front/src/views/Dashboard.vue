<template>
  <div>
    <Header />
    <Sidebar />
    <Content />
  </div>
</template>

<script>
import Header from "../components/Dashboard/Header/Header";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import Content from "../components/Dashboard/Content/Content";

export default {
  name: "Dashboard",
  components: {
    Header,
    Sidebar,
    Content
  }
};
</script>

<style>
</style>