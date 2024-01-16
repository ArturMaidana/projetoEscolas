// Importações de Componentes
import Footer from "../Style/footer.png";
import Tucano from "../Style/tucano.png";

function FooterComponent() {
    return (
        <div
            style={{
                backgroundImage: `url(${Footer})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                width: "100%",
                height: "20vh",
            }}
        ></div>
    );
}

function TucanoComponent() {
    return (
        <div
            style={{
                backgroundImage: `url(${Tucano})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                width: "10%",
                height: "20vh",
            }}
        ></div>
    );
}

export { FooterComponent, TucanoComponent };
