import Topo from "../../compomentes/Topo";
import Rodape from "../../compomentes/Rodape";

import "./style.css";

export default function Sabores() {
  return (
    <div>
      <Topo />
      <main>
        <section className="secao-banner-sabores">
          <div className="titulo-banner-sabores">
            <h1>NOSSOS SABORES</h1>
          </div>
        </section>

        <section className="limitar-secao secao-sabores">
          <h2> SABORES DE SORVETE</h2>
          <div className="container-sorvetes">
            <div className="box-sorvete">
              <img src="assets/img/sabor-oreo.png"></img>
              <h3> Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>

            <div className="box-sorvete">
              <img src="assets/img/sabor-pistache.png"></img>
              <h3> Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>

            <div className="box-sorvete">
              <img src="assets/img/sabor-cookies-avela.png"></img>
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>

            <div className="box-sorvete">
              <img src="assets/img/sorbet-kiwi.png"></img>
              <h3> Sorvete de Kiwi</h3>
              <p>
                Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C
              </p>
            </div>

            <div className="box-sorvete">
              <img src="assets/img/sorbet-morango.png"></img>
              <h3> Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>

            <div className="box-sorvete">
              <img src="assets/img/sorbet-limao.png"></img>
              <h3> Sorvete de Limão Siciliano</h3>
              <p>
                O incrivel sorvete gourmet de limão siciliano vai te encantar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
}
