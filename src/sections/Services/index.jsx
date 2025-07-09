import { CardService } from "../../components/CardService";
import { CaretDown, CaretUp } from "phosphor-react";
import { useState, useRef } from "react";
import styles from "./styles.module.css";

import dermclinica from "../../assets/dermclinica.svg";
import dermestetica from "../../assets/dermestetica.svg";
import dermcirurgica from "../../assets/dermcirurgica.svg";
import tecavancada from "../../assets/tecavancada.svg";
import tricologia from "../../assets/tricologia.svg";

import bkgServices from "../../assets/servicesbkg.jpg";

export function Services() {
    const [op1Open, setOp1Open] = useState(false);
    const [op2Open, setOp2Open] = useState(false);
    const [op3Open, setOp3Open] = useState(false);
    const [op4Open, setOp4Open] = useState(false);
    const [op5Open, setOp5Open] = useState(false);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    const handleToggle1 = () => setOp1Open(!op1Open);
    const handleToggle2 = () => setOp2Open(!op2Open);
    const handleToggle3 = () => setOp3Open(!op3Open);
    const handleToggle4 = () => setOp4Open(!op4Open);
    const handleToggle5 = () => setOp5Open(!op5Open);


    return (
        <section className={styles.container}
            style={{backgroundImage: `url(${bkgServices})`}}
            id="services"
        >

            <div className={styles.content}>
                <details ref={ref1} onToggle={handleToggle1}>
                    <summary>
                        <img src={dermclinica} alt="Dermatologia Clínica" />
                        <h3>Dermatologia Clínica</h3>
                        {op1Open ? <CaretUp size={24} /> : <CaretDown size={24} />}
                    </summary>
                    <ul>
                        <li>Tratamento de acne, eczema, infecções, melasma e manchas.</li>
                        <li>Controle de doenças capilares e raras do couro cabeludo.</li>
                        <li>Terapias para cicatrizes, queloides e infecções ungueais.</li>
                        <li>Dermatite atopica, psoriase, câncer de pele.</li>
                    </ul>
                </details>
                <details ref={ref2} onToggle={handleToggle2}>
                    <summary>
                        <img src={dermestetica} alt="Dermatologia Estética I" />
                        <h3>Dermatologia Estética I</h3>
                        {op2Open ? <CaretUp size={24} /> : <CaretDown size={24} />}
                    </summary>
                    <ul>
                        <li>Gerenciamento global do envelhecimento com foco em prevenção e tratamento personalizado;</li>
                        <li>Palestrante (Speaker) sobre fios de sustentação PDO;</li>
                        <li>Lifting facial sem cirurgia, promovendo efeito tensor e rejuvenescimento natural;</li>
                        <li>Correção de fratura glabelar (sulco entre as sobrancelhas) com técnicas avançadas de preenchimento;</li>
                        <li>Expertise em preenchimento facial full face, respeitando proporções e harmonia facial;</li>
                        <li>Técnica avançada em preenchimento labial com foco em naturalidade, definição e cuidado estético;</li>
                        <li>Ajuste das proporções faciais, como prolongamento do queixo, definição da mandíbula e projeção do malar.;</li>
                    </ul>
                </details>
                <details ref={ref2} onToggle={handleToggle2}>
                    <summary>
                        <img src={dermestetica} alt="Dermatologia Estética II" />
                        <h3>Dermatologia Estética II</h3>
                        {op2Open ? <CaretUp size={24} /> : <CaretDown size={24} />}
                    </summary>
                    <ul>
                        <li>Correção e suavização do aspecto das olheiras;</li>
                        <li>Bioestímulo de colágeno com Radiesse, Sculptra e tecnologias associadas;</li>
                        <li>Tratamento avançado do envelhecimento das mãos, pescoço e colo;</li>
                        <li>Melhora da aparência de rugas finas e rugas profundas da face;</li>
                        <li>Tratamento do aspecto conhecido como “arcos acordeon”;</li>
                        <li>Aplicação de toxina botulínica (Botox) para relaxamento muscular, suavização de rugas, elevação da face e correção de sorriso com queda;</li>
                        <li>Microagulhamento para tratamento de cicatrizes de acne, rejuvenescimento global, estímulo de colágeno, melasma e cicatrizes pós-queimadura.</li>
                    </ul>
                </details>
                <details ref={ref3} onToggle={handleToggle3}>
                    <summary>
                        <img src={dermcirurgica} alt="Dermatologia Cirúrgica" />
                        <h3>Dermatologia Cirúrgica</h3>
                        {op3Open ? <CaretUp size={24} /> : <CaretDown size={24} />}
                    </summary>
                    <ul>
                        <li>Remoção de lesões cutâneas, correção de cicatrizes e reconstrução de áreas da pele;</li>
                        <li>Remoção de sinais, verrugas e condilomas, por método tradicional ou a laser;</li>
                        <li>Shaving, eletrocautério, exérese e biópsia de pele e couro cabeludo;</li>
                        <li>Tratamento de câncer de pele (Carcinoma Basocelular – CBC, e Carcinoma Espinocelular – CEC);</li>
                        <li>Transplante capilar e de sobrancelhas.</li>
                    </ul>
                </details>
                <details ref={ref4} onToggle={handleToggle4}>
                    <summary>
                        <img src={tecavancada} alt="Tecnologia Avançada" />
                        <h3>Tecnologia Avançada</h3>
                        {op4Open ? <CaretUp size={24} /> : <CaretDown size={24} />}
                    </summary>
                    <ul>
                        <li>Bioestimuladores de Colágeno: Sculptra, Radiesse, Fios de PDO, Ultraformer MPT;</li>
                        <li>Esvaziadores de Gordura: Emptiers;</li>
                        <li>Equipamentos: Exilis Face, Ultraformer III, Agnis, Luz Intensa Pulsada, Lasers (Ablativo, Não Ablativo, Nd:YAG Q-Switched, PicoUniverse), X-WAVE.</li>
                    </ul>
                </details>
                <details ref={ref5} onToggle={handleToggle5}>
                    <summary>
                        <img src={tricologia} alt="Tricologia" />
                        <h3>Tricologia</h3>
                        {op5Open ? <CaretUp size={24} /> : <CaretDown size={24} />}
                    </summary>
                    <ul>
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
                    </ul>
                </details>
            </div>
        </section>
    );
}