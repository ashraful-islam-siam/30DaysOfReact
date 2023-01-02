import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import TechListMain from "./TechList";

class Seven extends Component {
  render() {
    const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
        date: new Date().getFullYear(),
      }
    return (
      <div>
        <Header data={data} />
        <TechListMain />
        <Footer />
      </div>
    );
  }
}
export default Seven;
