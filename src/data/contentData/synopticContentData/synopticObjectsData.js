import { Paragraph, Picture } from "../../../components/atoms"
import { antizyclon, zyclon } from "../../../constants/images"

export const Ziclon = () => {
    return (
        <>
            <Picture source={zyclon} />
            <Paragraph>
                <Paragraph bold>Циклон</Paragraph> — воздушная масса в виде атмосферного вихря с вертикальной осью огромного (от сотен до нескольких тысяч километров) диаметра с пониженным давлением воздуха в его центре.
            </Paragraph>
            <Paragraph>
                Воздух в циклонах циркулирует против часовой стрелки в Северном полушарии и по часовой стрелке в Южном. В пограничном слое атмосферы действие внутреннего трения приводит к появлению у вектора скорости ветра слагаемого, направленного к центру циклона, против направления барического градиента (в сторону убывания давления). Величина силы трения уменьшается с высотой, что приводит к повороту ветра.
            </Paragraph>
            <Paragraph>
                Циклон — не просто противоположность антициклону, у них различается механизм возникновения. Циклоны постоянно и естественным образом появляются из-за вращения Земли. Следствием теоремы Брауэра о неподвижной точке является наличие в атмосфере как минимум одного циклона или антициклона.
            </Paragraph>
            <Paragraph>
                Различают два основных вида циклонов — <Paragraph bold>внетропические и тропические</Paragraph>. Первые образуются в умеренных или полярных широтах и имеют диаметр от тысячи километров в начале развития и до нескольких тысяч в случае так называемого центрального циклона.
            </Paragraph>
            <Paragraph>
                Среди внетропических циклонов выделяют южные циклоны, образующиеся на южной границе умеренных широт (средиземноморские, балканские, черноморские, южнокаспийские и т. д.) и смещающиеся на север и северо-восток. Южные циклоны обладают колоссальными запасами энергии; именно с южными циклонами в средней полосе России и СНГ связаны наиболее сильные осадки, ветры, грозы, шквалы и другие явления погоды.
            </Paragraph>
            <Paragraph>
                Тропические циклоны образуются в тропических широтах и имеют меньшие размеры (сотни, редко — более тысячи километров), но бо́льшие барические градиенты и скорости ветра, доходящие до буревых. Для таких циклонов свойственен также т. н. «глаз бури» — центральная область диаметром 20—30 км с относительно ясной и безветренной погодой. Тропические циклоны могут в ходе своего развития превращаться во внетропические.
            </Paragraph>
            <Paragraph>
                Ниже 8—10° северной и южной широты циклоны возникают очень редко, а в непосредственной близости от экватора — не возникают вообще.
            </Paragraph>
        </>
    )
}

export const Antizyclon = () => {
    return (
        <>
            <Picture source={antizyclon} />
            <Paragraph>
                <Paragraph bold>Антициклон</Paragraph> — область повышенного атмосферного давления с замкнутыми концентрическими изобарами на уровне моря и с соответствующим распределением ветра. В отличие от циклона ветер в Северном полушарии циркулирует по направлению движения часовой стрелки, а в Южном полушарии — в обратную сторону.
            </Paragraph>
            <Paragraph>
                В <Paragraph bold>низком антициклоне</Paragraph> — холодном, изобары остаются замкнутыми только в самых нижних слоях тропосферы (до 1,5 км), а в средней тропосфере повышенное давление вообще не обнаруживается; возможно также наличие над таким антициклоном высотного циклона.
            </Paragraph>
            <Paragraph>
                <Paragraph bold>Высокий антициклон</Paragraph> — теплый и сохраняет замкнутые изобары с антициклонической циркуляцией даже и в верхней тропосфере. Иногда антициклон бывает многоцентровым. Воздух в антициклоне в Северном полушарии движется, огибая центр по часовой стрелке (то есть отклоняясь от барического градиента вправо), в Южном полушарии — против часовой стрелки.
            </Paragraph>
            <Paragraph>
                Для антициклона характерно преобладание ясной или малооблачной погоды. Вследствие охлаждения воздуха от земной поверхности в холодное время года и ночью в антициклоне возможно образование приземных инверсий и низких слоистых облаков (St) и туманов. Летом над сушей возможна умеренная дневная конвекция с образованием кучевых облаков. Конвекция с образованием кучевых облаков наблюдается и в пассатах на обращенной к экватору периферии субтропических антициклонов. При стабилизации антициклона в низких широтах возникают мощные, высокие и теплые субтропические антициклоны.
            </Paragraph>
            <Paragraph>
                Стабилизация антициклонов происходит также в средних и в полярных широтах. Высокие малоподвижные антициклоны, нарушающие общий западный перенос средних широт, называются блокирующими.
            </Paragraph>
            <Paragraph>
                <Paragraph bold>Антициклоны достигают размера</Paragraph> несколько тысяч километров в поперечнике. В центре антициклона давление обычно 1020—1030 мбар, но может достигать 1070—1080 мбар. Как и циклоны, антициклоны перемещаются в направлении общего переноса воздуха в тропосфере, то есть с запада на восток, отклоняясь при этом к низким широтам. Средняя скорость перемещения антициклона составляет около 30 км/ч в Северном полушарии и около 40 км/ч в Южном, но нередко антициклон надолго принимает малоподвижное состояние.
            </Paragraph>
            <Paragraph>
                Важной особенностью антициклонов является образование их на <Paragraph bold>определённых участках</Paragraph>. В частности, над ледовыми полями формируются антициклоны. И чем мощнее ледовый покров, тем сильнее выражен антициклон; именно поэтому антициклон над Антарктидой очень мощный, а над Гренландией маломощный, над Арктикой — средний по выраженности. Мощные антициклоны также развиваются в тропическом поясе.
            </Paragraph>
            <Paragraph>
                Евразия служит интересным примером сезонных изменений в атмосфере. В летнее время над её центральными районами формируется область низкого давления — циклон, куда засасывается воздух с соседних океанов. Особенно сильно это проявляется в Южной и Восточной Азии: бесконечная вереница циклонов несет влажный тёплый воздух вглубь материка. Зимой ситуация резко меняется: над центром Евразии формируется область высокого давления — антициклон (Азиатский максимум), холодные и сухие ветры из центра которого (Монголия, Тыва, Юг Сибири), расходящиеся по часовой стрелке, разносят холод вплоть до восточных окраин материка и вызывают ясную, морозную, практически бесснежную погоду на Дальнем Востоке и Северном Китае. В западной части Евразии влияние этого антициклона слабее и наблюдается значительно реже. Резкие снижения температуры возможны только, если центр антициклона переместится к западу, поскольку при таком перемещении антициклона направление ветра в точке наблюдения изменится с южного на северное. Подобные процессы часто наблюдаются на Восточно-Европейской равнине. Начиная с 90-х годов XX века этот антициклон значительно ослабел, что приводит к проникновению атлантических циклонов глубоко внутрь Евразии, а в 2010-е году — вплоть до Тихого океана, где они регенерируются и сливаются с тихоокеанскими циклонами.
            </Paragraph>
            <Paragraph>
                <Paragraph bold>Блокирующий антициклон</Paragraph> — практически неподвижный мощный антициклон, который обладает способностью не пропускать другие воздушные массы на занятую собой территорию. Средний срок жизни такого антициклона — от трёх до пяти суток, лишь 1 % антициклонов дотягивает до 15 суток.
            </Paragraph>
        </>
    )
}