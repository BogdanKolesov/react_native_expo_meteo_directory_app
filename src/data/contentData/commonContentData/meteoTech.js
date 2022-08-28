import { Paragraph, Picture } from "../../../components/atoms"
import { tgc11, tgc12 } from "../../../constants/images"

export const Tgc1 = () => {
    return (
        <>
            <Picture width='50%' source={tgc11} />
            <Picture width='50%' source={tgc12} />
            <Paragraph>
                Прибор предназначен для приземных метеорологических измерений температуры и относительной влажности воздуха.
            </Paragraph>
            <Paragraph>
                Измерения осуществляются как в автономном режиме, так и в составе метеорологических информационных измерительных комплексов в круглосуточном режиме в любом регионе Земного шара.
            </Paragraph>
            <Paragraph bold>Технические характеристики:</Paragraph>
            <Paragraph big>
                Датчик температур
            </Paragraph>
            <Paragraph>
                Диапазон рабочих температур от -60 до +50оС
            </Paragraph>
            <Paragraph>
                Предельная температура от -60 до 65оС
            </Paragraph>
            <Paragraph>
                Относительная влажность 100%
            </Paragraph>
            <Paragraph>
                Абсолютная погрешность ±0,2оС
            </Paragraph>
            <Paragraph big>
                Датчик относительной влажности
            </Paragraph>
            <Paragraph>
                Диапазон рабочих температур от - 40 до + 50оС
            </Paragraph>
            <Paragraph big>
                Блок обработки индикации
            </Paragraph>
            <Paragraph>
                Диапазон рабочих температур от -30 до +50оС
            </Paragraph>
            <Paragraph>
                Предельная температура от -50 до 60оС
            </Paragraph>
            <Paragraph>
                Относительная влажность 100%
            </Paragraph>
            <Paragraph>
                Абсолютная погрешность ±3% от 0 до 50оС, ±5% от -40 до 0оС
            </Paragraph>
        </>
    )
}