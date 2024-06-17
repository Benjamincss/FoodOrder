import styled from 'styled-components';
import Cart from "../component/Cart.jsx";
import Menu from "../component/Menu.jsx";
import Index from "./index.jsx";



const MainContainer = styled.div`
  display: flex;


`;

const Main = () => {
    return (
        <MainContainer>
            <Index />

                <Cart />

        </MainContainer>
    );
}
export default Main;
