import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import styled from "styled-components";

const StyleApp = styled.div`
    background-color: #cfd8dc;
    height: 2000px;
`;
function App() {
    return (
        <StyleApp>
            <Header />
            <Nav />

            <Footer />
        </StyleApp>
    );
}

export default App;
