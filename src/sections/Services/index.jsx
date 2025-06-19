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
            id="services"
        >
            <CardService
                title="Dermatologia Clínica"
                icon={dermclinica}
            >
                <li>Tratamento de acne, eczema, infecções, melasma e manchas.</li>
                <li>Controle de doenças capilares e raras do couro cabeludo.</li>
                <li>Terapias para cicatrizes, queloides e infecções ungueais.</li>
                <li>Dermatite atopica, psoriase, câncer de pele.</li>
            </CardService>

            <CardService
                title="Dermatologia Estética I"
                icon={dermestetica}
            >
                <li>Gerenciamento global do envelhecimento com foco em prevenção e tratamento personalizado;</li>
                <li>Palestrante (Speaker) sobre fios de sustentação PDO;</li>
                <li>Lifting facial sem cirurgia, promovendo efeito tensor e rejuvenescimento natural;</li>
                <li>Correção de fratura glabelar (sulco entre as sobrancelhas) com técnicas avançadas de preenchimento;</li>
                <li>Expertise em preenchimento facial full face, respeitando proporções e harmonia facial;</li>
                <li>Técnica avançada em preenchimento labial com foco em naturalidade, definição e cuidado estético;</li>
                <li>Ajuste das proporções faciais, como prolongamento do queixo, definição da mandíbula e projeção do malar.;</li>
            </CardService>

            <CardService
                title="Dermatologia Estética II"
                icon={dermestetica}
            >
                <li>Correção e suavização do aspecto das olheiras;</li>
                <li>Bioestímulo de colágeno com Radiesse, Sculptra e tecnologias associadas;</li>
                <li>Tratamento avançado do envelhecimento das mãos, pescoço e colo;</li>
                <li>Melhora da aparência de rugas finas e rugas profundas da face;</li>
                <li>Tratamento do aspecto conhecido como “arcos acordeon”;</li>
                <li>Aplicação de toxina botulínica (Botox) para relaxamento muscular, suavização de rugas, elevação da face e correção de sorriso com queda;</li>
                <li>Microagulhamento para tratamento de cicatrizes de acne, rejuvenescimento global, estímulo de colágeno, melasma e cicatrizes pós-queimadura.</li>
            </CardService>

            <CardService
                title="Dermatologia Cirúrgica"
                icon={dermcirurgica}
            >
                <li>Remoção de lesões cutâneas, correção de cicatrizes e reconstrução de áreas da pele;</li>
                <li>Remoção de sinais, verrugas e condilomas, por método tradicional ou a laser;</li>
                <li>Shaving, eletrocautério, exérese e biópsia de pele e couro cabeludo;</li>
                <li>Tratamento de câncer de pele (Carcinoma Basocelular – CBC, e Carcinoma Espinocelular – CEC);</li>
                <li>Transplante capilar e de sobrancelhas.</li>
            </CardService>

            <CardService
                title="Tecnologia Avançada"
                icon={tecavancada}
            >
                <li>Bioestimuladores de Colágeno: Sculptra, Radiesse, Fios de PDO, Ultraformer MPT;</li>
                <li>Esvaziadores de Gordura: Emptiers;</li>
                <li>Equipamentos: Exilis Face, Ultraformer III, Agnis, Luz Intensa Pulsada, Lasers (Ablativo, Não Ablativo, Nd:YAG Q-Switched, PicoUniverse), X-WAVE.</li>
            </CardService>

            <CardService
                title="Tricologia"
                icon={tricologia}
            >
                <li>Diagnóstico e tratamento das diversas patologias do couro cabeludo;</li>
                <li>Diagnosticado precoce de doenças auto imune;</li>
                <li>Tratamento da descamação do couro cabeludo, assim como diagnósticos diferenciais;</li>
                <li>Biopsia couro cabeludo;</li>
                <li>Terapia Regenerativa do couro cabeludo;</li>
                <li>Mesoterapia capilar com diferentes mesclas;</li>
                <li>Microagulhamento capilar;</li>
                <li>Laser capilar;</li>
                <li>Ledterapia;</li>
                <li>Tricoscopia robótica;</li>
                <li>Acompanhamento a longo prazo.</li>
            </CardService>
        </section>
    );
}