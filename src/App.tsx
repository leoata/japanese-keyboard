import React, {useState} from 'react';
import './styles/App.css';
import {Container} from "@material-ui/core";
import {Header} from "./components/Header";
import TextBox from "./components/TextBox";
import {ToggleButton} from "./components/ToggleButton";
import {Footer} from "./components/Footer";

function App() {
    const [hiragana, setHiragana] = useState(true);

    return (
        <Container maxWidth={"md"}>
            <Header/>
            <TextBox hiragana={hiragana}/>
            <ToggleButton hiragana={hiragana} setHiragana={setHiragana}/>
            <Footer/>
        </Container>
    );
}

export default App;
