import Header from "./components/Header.tsx";
import Input from "./components/Input.tsx";
import Result from "./components/Result.tsx";
import Section from "./components/Section.tsx";
import { useEffect, useState } from "react";
export default function App() {
  const [isReset, setIsReset] = useState(false);
  const [wilgotnoscZmierzona, setWilgotnoscZmierzona] = useState("");
  const [wilgotnoscDocelowa, setWilgotnoscDocelowa] = useState("");
  const [masaWilgotna, setMasaWilgotna] = useState("");
  const [masaWysuszona, setMasaWysuszona] = useState("");
  useEffect(() => {
    if (isReset) {
      setWilgotnoscZmierzona("");
      setWilgotnoscDocelowa("");
      setMasaWilgotna("");
      setMasaWysuszona("");
    }
    setIsReset(false);
  }, [isReset]);

  useEffect(() => {
    const b1 = Number(wilgotnoscZmierzona);
    const b2 = Number(wilgotnoscDocelowa);
    const b3 = Number(masaWilgotna);
    setMasaWysuszona(((b3 * (100 - b1)) / (100 - b2)).toFixed(2));
  }, [wilgotnoscZmierzona, wilgotnoscDocelowa, masaWilgotna]);

  return (
    <div className="w-full min-h-screen h-full text-[var(--detail-color)] flex items-center flex-col bg-[#E6FFE6] p-2">
      <div className="flex justify-center w-fit flex-wrap gap-10 p-4 bg-[var(--bg-color)] rounded-3xl shadow-[0_0_15px_var(--primary-color)]">
        <Header
          title="Kalkulator wilgotności"
          resetBtnText={"Reset"}
          reset={setIsReset}
        />
        <Section title="" showTitleOnMobile={false}>
          <Input
            number
            title="Wilgotność zmierzona"
            placeholder="podaj wilgotność zmierzoną"
            value={wilgotnoscZmierzona}
            setValue={setWilgotnoscZmierzona}
            decimalPlaces={1}
            unit="%"
          />
          <Input
            select
            title="Wilgotność docelowa"
            placeholder="podaj wilgotność docelową"
            value={wilgotnoscDocelowa}
            setValue={setWilgotnoscDocelowa}
            options={[
              { name: "8%", value: "8" },
              { name: "9%", value: "9" },
              { name: "10%", value: "10" },
              { name: "11%", value: "11" },
              { name: "12%", value: "12" },
              { name: "13%", value: "13" },
              { name: "14%", value: "14" },
            ]}
          />
          <Input
            number
            title="Masa wilgotna"
            placeholder="podaj masę wilgotną"
            value={masaWilgotna}
            setValue={setMasaWilgotna}
            decimalPlaces={2}
            unit="t"
          />
          <Result title="Masa wysuszona" result={masaWysuszona} />
        </Section>
      </div>
    </div>
  );
}
