import { Container, HomeWrapper, Img, ImgWrapper } from "./styles"
import SideNavigation from "../../components/SideNavigation"
import NovadirecaoLogo from '../../assets/novadirecaoLogo.png'

const Index = ()=>{
    return(
        <Container>
            <SideNavigation/>
            <HomeWrapper>
                <ImgWrapper>
                    <Img src={NovadirecaoLogo}/>
                </ImgWrapper>
            </HomeWrapper>
        </Container>
    )
}

export default Index;