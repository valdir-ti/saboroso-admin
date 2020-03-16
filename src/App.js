import React, { Component } from "react";
import AdminLTE, { Sidebar, Footer } from "adminlte-2-react";

import Reservas from "./components/Reservas/index";
import Menus from "./components/Menus/index";

const { Item } = Sidebar;

class App extends Component {
  sidebar = [
    <Item key="reservas" text="Reservas" to="/reservas" />,
    <Item key="menus" text="Menus" to="/menus" />
  ];

  render() {
    return (
      <AdminLTE
        title={["Projeto", "Saboroso"]}
        titleShort={["Pj", "Sb"]}
        theme="purple"
        sidebar={this.sidebar}
      >
        <Reservas path="/reservas" />
        <Menus path="/menus" />

        <Footer
          children="&copy; Restaurante Saboroso - 2020"
          includeVersionInfo={false}
        />
      </AdminLTE>
    );
  }
}

export default App;
