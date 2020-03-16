import React, { Component } from "react";
import AdminLTE, { Sidebar, Footer } from "adminlte-2-react";

import Dashboard from "./components/Dashboard/index";
import Usuarios from "./components/Usuarios/index";
import Contatos from "./components/Contatos/index";
import Emails from "./components/Emails/index";
import Reservas from "./components/Reservas/index";
import Menus from "./components/Menus/index";

const { Item } = Sidebar;

class App extends Component {
  sidebar = [
    <Item
      key="dashboard"
      text="Dashboard"
      exact
      to="/"
      icon="fas-chart-line"
    />,
    <Item key="usuarios" text="Usuários" to="/usuarios" icon="fas-users" />,
    <Item
      key="contatos"
      text="Contatos"
      to="/contatos"
      icon="fas-phone-volume"
    />,
    <Item key="emails" text="E-mails" to="/emails" icon="fas-envelope" />,
    <Item key="menus" text="Menus" to="/menus" icon="fas-book-open" />,
    <Item
      key="reservas"
      text="Reservas"
      to="/reservas"
      icon="fas-calendar-alt"
    />
  ];

  render() {
    return (
      <AdminLTE
        title={["Projeto", "Saboroso"]}
        titleShort={["Pj", "Sb"]}
        theme="purple"
        sidebar={this.sidebar}
      >
        <Dashboard path="/" exact />
        <Usuarios path="/usuarios" />
        <Contatos path="/contatos" />
        <Emails path="/emails" />
        <Menus path="/menus" />
        <Reservas path="/reservas" />

        <Footer
          children="&copy; Restaurante Saboroso - 2020"
          includeVersionInfo={false}
        />
      </AdminLTE>
    );
  }
}

export default App;
