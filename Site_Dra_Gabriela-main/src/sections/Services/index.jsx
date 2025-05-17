import { CardService } from "../../components/CardService";
import styles from "./styles.module.css";

import dermclinica from "../../assets/dermclinica.svg";
import dermestetica from "../../assets/dermestetica.svg";
import dermcirurgica from "../../assets/dermcirurgica.svg";
import tecavancada from "../../assets/tecavancada.svg";
import tricologia from "../../assets/tricologia.svg";

import bkgServices from "../../assets/servicesbkg.jpg";

export function Services() {
    return (
        <section className={styles.container}
            style={{backgroundImage: `url(${bkgServices})`}}
        >
            <CardService
                title="Dermatologia Clínica"
                icon={dermclinica}
            >
                <li>Tratamento de acne, eczema, infecções, melasma e manchas.</li>
                <li>Controle de doenças capilares e raras do couro cabeludo.</li>
                <li>Terapias para cicatrizes, queloides e infecções ungueais.</li>
            </CardService>

            <CardService
                title="Dermatologia Estética I"
                icon={dermestetica}
            >
                <li>Lifting facial sem cirurgia.</li>
                <li>Preenchimento labial e contorno da mandíbula.</li>
                <li>Tratamento para estrias, poros dilatados e rejuvenescimento de mãos e pescoço.</li>
                <li>Laser: Para tratar manchas, cicatrizes, vasinhos e outras imperfeições. </li>
            </CardService>

            <CardService
                title="Dermatologia Cirúrgica"
                icon={dermcirurgica}
            >
                <li>Remoção de lesões, correção de cicatrizes, reconstrução de partes da pele, etc.</li>
                <li>Tratamento de câncer de pele (basocelular, espinocelular, melanoma, etc.).</li>
                <li>Transplante capilar e de sobrancelhas.</li>
            </CardService>

            <CardService
                title="Dermatologia Estética II"
                icon={dermestetica}
            >
                <li>Toxina Botulínica (Botox): Para relaxar os músculos e suavizar rugas de expressão.</li>
                <li>Microagulhamento: Para estimular a produção de colágeno e melhorar a aparência da pele.</li>
                <li>Outros: Como depilação a laser, tratamento de celulite, estrias e gordura localizada. </li>
            </CardService>

            <CardService
                title="Tecnologia Avançada"
                icon={tecavancada}
            >
                <li>Bioestimuladores de Colágeno: Sculptra, Radiesse, Fios de PDO, Ultraformer MPT.</li>
                <li>Esvaziadores de Gordura: Emptiers.</li>
                <li>Equipamentos: Exilis Face, Ultraformer III, Agnis, Luz Intensa Pulsada, Lasers (Ablativo, Não Ablativo, Nd:YAG Q-Switched, PicoUniverse), X-WAVE.</li>
            </CardService>

            <CardService
                title="Tricologia"
                icon={tricologia}
            >
                <li>Diagnóstico e tratamento de diversas condições, como queda de cabelo (alopecia), caspa, dermatite seborreica, infecções fúngicas e outras doenças do couro cabeludo.</li>
                <li>Terapias com laser, bioestimulação com PRP (plasma rico em plaquetas).</li>
            </CardService>
        </section>
    );
}