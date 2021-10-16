import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import CartProvider from "./context/CartProvider";

function App() {
    const [modalIsShown, setModalIsShown] = useState(false);

    const showModalHandler = () => setModalIsShown(true);
    const hideModalHandler = () => setModalIsShown(false);

    return (
        <CartProvider>
            {modalIsShown && <Cart onCloseModal={hideModalHandler}/>}
            <Header onShowModal={showModalHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
