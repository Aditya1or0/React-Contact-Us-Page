import "./App.css";
import Navbar from "./components/Navbar";
import ContactHeader from "./components/ContactHeader";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <main className="mainContainer">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
