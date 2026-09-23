import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import logoAsset from "@/assets/karen-keller-logo.png.asset.json";
import karenAsset from "@/assets/karen.jpg.asset.json";

const WHATSAPP = "https://wa.me/5548974008889";
const INSTAGRAM = "https://instagram.com/karen_keller_neuropsico";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karen Keller | Neuropsicopedagoga" },
      {
        name: "description",
        content:
          "Karen Keller — atendimento em neuropsicopedagogia para crianças, adolescentes, adultos e idosos, com avaliação neuropsicopedagógica, mapeamento cerebral, reabilitação cognitiva e terapia neuropsicopedagógica.",
      },
      { property: "og:title", content: "Karen Keller | Neuropsicopedagoga" },
      {
        property: "og:description",
        content:
          "Avaliação neuropsicopedagógica, mapeamento cerebral, reabilitação cognitiva e terapia neuropsicopedagógica com Karen Keller.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Atendimento", href: "#atendimento" },
];

const SERVICOS = [
  {
    title: "Avaliação neuropsicopedagógica",
    text: "Processo investigativo para compreender como a pessoa aprende, identificando potencialidades e possíveis dificuldades relacionadas à atenção, memória, linguagem, leitura, escrita, raciocínio e outras funções cognitivas envolvidas na aprendizagem.",
  },
  {
    title: "Mapeamento cerebral",
    text: "Exame complementar que analisa a atividade elétrica cerebral por meio de sensores colocados no couro cabeludo, contribuindo para uma compreensão mais ampla do funcionamento cerebral.",
  },
  {
    title: "Reabilitação cognitiva",
    text: "Trabalho direcionado ao desenvolvimento e fortalecimento de habilidades cognitivas de acordo com as necessidades individuais.",
  },
  {
    title: "Terapia Neuropsicopedagógica",
    text: "Atendimento voltado às dificuldades relacionadas ao processo de aprendizagem, buscando estratégias individualizadas para favorecer o desenvolvimento.",
  },
];

const INVESTIGADO = [
  "Atenção",
  "Memória",
  "Linguagem",
  "Leitura",
  "Escrita",
  "Raciocínio lógico-matemático",
  "Percepção",
  "Funções executivas",
  "Organização",
  "Planejamento",
  "Controle inibitório",
];

const ETAPAS = [
  {
    n: "01",
    title: "Anamnese e entrevista com a família",
    text: "Conhecimento da história do estudante, seu desenvolvimento, rotina, comportamento, trajetória escolar e principais dificuldades.",
  },
  {
    n: "02",
    title: "Criação de vínculo e escuta do estudante",
    text: "Acolhimento e construção de uma relação de confiança para compreender suas dificuldades, sentimentos, interesses e experiências escolares.",
  },
  {
    n: "03",
    title: "Aplicação de testes acadêmicos",
    text: "Avaliação de habilidades relacionadas à leitura, escrita, compreensão, raciocínio matemático e demais competências acadêmicas.",
  },
  {
    n: "04",
    title: "Avaliação das Funções Executivas I",
    text: "Investigação de atenção, memória de trabalho, controle inibitório e velocidade de processamento.",
  },
  {
    n: "05",
    title: "Avaliação das Funções Executivas II",
    text: "Aprofundamento de planejamento, organização, flexibilidade cognitiva, resolução de problemas, tomada de decisões e autorregulação.",
  },
  {
    n: "06",
    title: "Avaliação socioemocional",
    text: "Compreensão de aspectos emocionais, comportamentais e sociais que podem interferir na aprendizagem.",
  },
  {
    n: "07",
    title: "Observação e entrevista escolar",
    text: "Informações sobre o desempenho do estudante no ambiente acadêmico, sua participação, comportamento e interação.",
  },
  {
    n: "08",
    title: "Devolutiva para a família",
    text: "Apresentação e explicação dos resultados, habilidades, dificuldades, possíveis hipóteses e orientações sobre os próximos passos.",
  },
];

const MAPEAMENTO = [
  {
    q: "O que é?",
    a: "É um exame que analisa a atividade elétrica do cérebro e ajuda a compreender como diferentes regiões cerebrais estão funcionando e se comunicando.",
  },
  {
    q: "Como é realizado?",
    a: "É realizado por meio de sensores colocados no couro cabeludo, que registram as ondas cerebrais. Quando esses dados são analisados de forma quantitativa, o exame também pode ser chamado de qEEG.",
  },
  {
    q: "O que pode avaliar?",
    a: "O exame avalia aspectos como nível de ativação cerebral, atenção, concentração, estado de alerta, ansiedade, hiperatividade, depressão, processamento de informações, autorregulação e padrões de funcionamento de diferentes áreas do cérebro. Mostra padrões que podem gerar possíveis transtornos.",
  },
  {
    q: "Por que é importante?",
    a: "Sua importância está em fornecer informações complementares sobre o funcionamento cerebral, principalmente quando associado à avaliação clínica, neuropsicológica, neuropsicopedagógica ou médica.",
  },
];

const SITUACOES = [
  {
    t: "TDAH",
    d: "Atenção, controle inibitório, planejamento, organização, memória de trabalho e estratégias de estudo.",
  },
  {
    t: "Dislexia",
    d: "Consciência fonológica, leitura, decodificação, fluência, compreensão e estratégias compensatórias.",
  },
  {
    t: "Discalculia",
    d: "Senso numérico, raciocínio matemático, cálculos, resolução de problemas e compreensão de quantidades.",
  },
  {
    t: "Dificuldades de escrita e ortografia",
    d: "Incluindo dificuldades associadas à disortografia e disgrafia, conforme a origem da dificuldade.",
  },
  {
    t: "TEA",
    d: "Apoio às funções executivas, flexibilidade cognitiva, autonomia, aprendizagem, organização e adaptação escolar.",
  },
  {
    t: "Deficiência intelectual e atrasos do desenvolvimento",
    d: "Desenvolvimento de habilidades cognitivas e acadêmicas dentro das potencialidades de cada pessoa.",
  },
  {
    t: "Alterações de atenção, memória e funções executivas",
    d: "Trabalho direcionado às necessidades cognitivas identificadas.",
  },
  {
    t: "Dificuldades de compreensão, raciocínio, planejamento e organização",
    d: "Aspectos que podem interferir diretamente no rendimento escolar.",
  },
  {
    t: "Questões emocionais ou comportamentais relacionadas à aprendizagem",
    d: "Trabalho com estratégias cognitivas em conjunto com psicologia e outros profissionais quando necessário.",
  },
];

const PUBLICO = ["Crianças", "Adolescentes", "Adultos", "Idosos"];

const FAQ = [
  {
    question: "Quem pode fazer uma avaliação neuropsicopedagógica?",
    answer: "A avaliação pode ser realizada por crianças, adolescentes e adultos, de acordo com as necessidades apresentadas.",
  },
  {
    question: "O que é a avaliação neuropsicopedagógica?",
    answer: "É um processo investigativo que busca compreender como a pessoa aprende, identificando potencialidades e possíveis dificuldades relacionadas às funções cognitivas envolvidas na aprendizagem.",
  },
  {
    question: "O que é o mapeamento cerebral?",
    answer: "É um exame que analisa a atividade elétrica cerebral e pode fornecer informações complementares sobre o funcionamento do cérebro.",
  },
  {
    question: "O mapeamento cerebral diagnostica TDAH ou outros transtornos?",
    answer: "Não. O mapeamento cerebral não deve ser utilizado isoladamente para diagnosticar TDAH, autismo, ansiedade, dislexia ou outros transtornos. Os resultados devem ser analisados em conjunto com a história clínica, sintomas e demais avaliações.",
  },
  {
    question: "Quais situações podem ser trabalhadas na Neuropsicopedagogia?",
    answer: "Podem ser trabalhadas dificuldades relacionadas à atenção, memória, funções executivas, leitura, escrita, raciocínio matemático, organização, planejamento e outras dificuldades relacionadas à aprendizagem.",
  },
  {
    question: "Como funciona a avaliação?",
    answer: "A avaliação envolve etapas como anamnese, vínculo e escuta, aplicação de testes acadêmicos, avaliação das funções executivas, avaliação socioemocional, observação/entrevista escolar e devolutiva para a família.",
  },
  {
    question: "Quais são os serviços oferecidos por Karen Keller?",
    answer: "Karen Keller oferece avaliação neuropsicopedagógica, mapeamento cerebral, reabilitação cognitiva e terapia neuropsicopedagógica.",
  },
];

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.45 0 .07 5.38.07 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62a11.94 11.94 0 0 0 5.87 1.5h.01c6.6 0 11.98-5.37 11.98-11.97 0-3.2-1.25-6.21-3.52-8.43ZM12.06 21.86a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.38a9.9 9.9 0 0 1-1.52-5.25c0-5.46 4.44-9.9 9.91-9.9 2.65 0 5.14 1.03 7 2.91a9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.44 9.9-9.92 9.9Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <Button asChild className={`h-12 rounded-full bg-teal px-7 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal/80 ${className}`}>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon /> Agendar avaliação
      </a>
    </Button>
  );
}

function SectionTitle({ children, kicker }: { children: string; kicker?: string }) {
  return (
    <Reveal>
      {kicker ? (
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">{kicker}</p>
      ) : null}
      <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">{children}</h2>
    </Reveal>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" aria-label="Karen Keller — início">
          <img src={logoAsset.url} alt="Karen Keller — neuropsicopedagogia" className="h-10 w-auto max-w-[180px] object-contain sm:h-12 sm:max-w-[230px]" />
        </a>
        <nav className="hidden gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>
        {!open && <Button variant="ghost" size="icon"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="text-foreground md:hidden"
        >
          <Menu className="size-6" />
        </Button>}
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 h-dvh overflow-y-auto bg-background md:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <img src={logoAsset.url} alt="Karen Keller — neuropsicopedagogia" className="h-10 w-auto max-w-[180px] object-contain" />
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X className="size-6" />
            </Button>
          </div>
          <nav className="flex flex-col gap-2 px-5 pt-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-display text-2xl text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section id="inicio" className="wash-hero px-5 pb-10 pt-10 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal delay={80} className="max-lg:text-center">
            <h1 className="max-w-xl font-display text-[2.55rem] leading-[1.06] text-foreground max-lg:mx-auto sm:text-5xl lg:text-[4rem]">
              Cuidar da aprendizagem é compreender cada pessoa de forma única.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground max-lg:mx-auto sm:text-base">
              Avaliação neuropsicopedagógica, mapeamento cerebral e reabilitação cognitiva para crianças, adolescentes e adultos.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground max-lg:justify-center"><span className="text-rose" aria-hidden="true">✦</span> Mais de 15 anos de experiência</p>
            <div className="mt-5 sm:mt-7">
              <CtaButton />
            </div>
          </Reveal>
          <Reveal delay={120} className="mx-auto w-full max-w-72 md:max-w-[440px] lg:mr-0">
            <div className="relative w-full">
              <img
                src={karenAsset.url}
                alt="Karen Keller, neuropsicopedagoga"
                className="blob-hero aspect-[4/5] w-full object-cover object-center shadow-soft md:aspect-[4/4.6]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="wash-about px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[minmax(300px,0.85fr)_minmax(0,1fr)] lg:gap-14">
          <Reveal className="order-2 mx-auto w-60 sm:w-72 lg:order-1 lg:w-full">
            <img src={karenAsset.url} alt="Karen Keller" loading="lazy" className="blob-soft aspect-[4/5] w-full object-cover object-center shadow-soft" />
            <span className="rule-duo mx-auto mt-5 block h-0.5 w-16 rounded-full" />
          </Reveal>
          <div className="order-1 lg:order-2">
          <SectionTitle>Quem sou eu?</SectionTitle>
          <Reveal delay={80}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              KAREN KELLER, Pedagoga, pós graduada em Neuropsicopedagoga, Neurociências, Neuroanatomia, Autismo avaliação e intervenção, TDAH, Educação especial e inclusão, Terapia complementar. Especialização em Dislexia, Psiquiatria infantil, Neuropsicologia. Cursando doutorado em Naturopatia e Terapia Ortomolecular. autora da coleção "Ler; super poder", Protocolo de Avaliação Funcional da Atenção Auditiva (PROAFA) e Protocolo de Avaliação Funcional da Atenção Visual (PROAFA-V) e criadora do Protocolo ROTA. Assessoria de educação especial e capacitação de professores.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 rounded-2xl bg-background p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Atendimento para
              </p>
              <p className="mt-3 font-display text-xl text-foreground">
                Crianças <span className="text-gold">•</span> Adolescentes{" "}
                <span className="text-gold">•</span> Adultos <span className="text-gold">•</span>{" "}
                Idosos
              </p>
            </div>
          </Reveal>

          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>Como posso ajudar?</SectionTitle>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {SERVICOS.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 90}
                className="rounded-lg border-t-2 border-rose-soft bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="rule-duo block h-1 w-10 rounded-full" />
                <h3 className="mt-5 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-12 border-l-2 border-teal bg-teal-soft/25 px-6 py-6 sm:px-8">
            <h3 className="text-2xl text-foreground">Intervenção com Neurofeedback</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              O neurofeedback é um treinamento em que sensores registram a atividade cerebral enquanto você realiza atividades interativas. As respostas aparecem na tela em tempo real, criando oportunidades para praticar a autorregulação. É um recurso no tratamento de TDAH, autismo, deficiência intelectual, Dislexia, Discalculia, ansiedade, depressão, estresse pós-traumático e dificuldades do sono. A indicação é individual e pode fazer parte de um acompanhamento mais amplo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AVALIAÇÃO */}
      <section className="bg-rose-soft px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal className="rounded-lg bg-card p-7 shadow-soft sm:p-10">
            <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">Avaliação Neuropsicopedagógica</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A Avaliação Neuropsicopedagógica é um processo investigativo que busca compreender
              como a criança, o adolescente ou o adulto aprende, identificando suas potencialidades
              e possíveis dificuldades relacionadas à atenção, memória, linguagem, leitura, escrita,
              raciocínio lógico-matemático, percepção, organização, planejamento, controle inibitório
              e demais funções cognitivas envolvidas na aprendizagem.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              O objetivo não é apenas identificar dificuldades, mas compreender quais processos
              cognitivos podem estar interferindo no desempenho acadêmico e funcional.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-5 rounded-lg bg-card p-7 shadow-soft sm:p-10">
            <h3 className="text-2xl text-foreground">O que pode ser investigado?</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {INVESTIGADO.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-rose-soft/40 px-4 py-2 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="mt-5 rounded-lg bg-card p-7 shadow-soft sm:p-10">
            <p className="leading-relaxed text-foreground">
              A avaliação pode contribuir para a investigação de condições como TDAH, dislexia, discalculia, dificuldades de aprendizagem, alterações nas funções executivas, TEA, deficiência intelectual, entre outras situações que impactam o processo de aprender.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>Como funciona?</SectionTitle>

          <div className="mt-12 hidden md:block">
            <ol className="relative border-l border-border pl-10">
              {ETAPAS.map((e, i) => (
                <Reveal key={e.n} as="li" delay={i * 60} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[46px] flex size-6 items-center justify-center rounded-full bg-teal-soft text-[10px] font-medium text-accent-foreground">
                    {e.n}
                  </span>
                  <h3 className="text-xl text-foreground">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="mt-10 md:hidden">
            <Accordion type="single" collapsible className="space-y-3">
              {ETAPAS.map((e) => (
                <AccordionItem
                  key={e.n}
                  value={e.n}
                  className="rounded-2xl border-b-0 bg-card px-5 shadow-soft"
                >
                  <AccordionTrigger className="text-left text-base hover:no-underline">
                    <span className="flex gap-3">
                      <span className="text-teal">{e.n}</span>
                      <span className="font-display">{e.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {e.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* MAPEAMENTO CEREBRAL */}
      <section className="bg-sky-soft px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>Mapeamento Cerebral</SectionTitle>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {MAPEAMENTO.map((m, i) => (
              <Reveal key={m.q} delay={i * 80} className="rounded-lg bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                <h3 className="text-xl text-foreground">{m.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{m.a}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <div className="mt-8 rounded-lg border border-gold bg-card p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Importante</p>
              <p className="mt-3 leading-relaxed text-foreground">
                O mapeamento cerebral não deve ser utilizado isoladamente para diagnosticar TDAH,
                autismo, ansiedade, dislexia ou outros transtornos. Seus resultados devem ser
                analisados em conjunto com a história clínica, sintomas, observações e demais
                avaliações realizadas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SITUAÇÕES */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>Em quais situações a Neuropsicopedagogia pode ajudar?</SectionTitle>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SITUACOES.map((s, i) => (
              <Reveal
                key={s.t}
                delay={(i % 3) * 80}
                className={`rounded-lg border-l-2 ${i % 2 ? "border-teal" : "border-rose"} bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1`}
              >
                <h3 className="text-lg leading-snug text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAMÍLIA E ESCOLA */}
      <section className="wash-rose px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-background p-8 shadow-soft">
            <h3 className="text-2xl text-foreground">Para a família</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A família passa a entender que muitos comportamentos podem estar relacionados ao
              funcionamento cognitivo, emocional ou às dificuldades de aprendizagem. Com informação e
              orientação, torna-se mais fácil reduzir conflitos, ajustar expectativas e criar
              estratégias mais adequadas para ajudar no dia a dia.
            </p>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl bg-background p-8 shadow-soft">
            <h3 className="text-2xl text-foreground">Para a escola</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Com orientações adequadas, o professor consegue planejar intervenções mais
              individualizadas, reduzir frustrações, favorecer a inclusão e oferecer ao estudante
              melhores condições para aprender, participar e desenvolver autonomia.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PÚBLICO */}
      <section id="atendimento" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle>Quem pode ser atendido?</SectionTitle>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {PUBLICO.map((p, i) => (
              <Reveal
                key={p}
                delay={i * 70}
                className={`rounded-lg px-4 py-8 font-display text-xl text-foreground ${i % 2 ? "bg-teal/35" : "bg-teal-soft/70"}`}
              >
                {p}
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
              Cada pessoa possui necessidades e formas de aprender diferentes. O atendimento é
              pensado de forma individualizada.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-rose-soft/35 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>Perguntas frequentes</SectionTitle>
          <Reveal delay={80}>
            <Accordion type="single" collapsible className="mt-10 divide-y divide-rose/35 border-y border-rose/35">
              {FAQ.map((item, i) => (
                <AccordionItem key={item.question} value={`faq-${i}`} className="border-none px-1">
                  <AccordionTrigger className="py-5 text-left font-display text-lg text-foreground hover:text-rose hover:no-underline sm:text-xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-background px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mx-auto max-w-4xl rounded-3xl bg-sky-soft px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl">
            Vamos compreender melhor suas necessidades?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-foreground">
            Entre em contato para saber mais sobre os atendimentos e entender qual serviço pode ser adequado para você.
          </p>
          <div className="mt-8">
            <CtaButton />
          </div>
        </Reveal>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-background px-5 pb-20 pt-4 sm:px-8 sm:pb-28 sm:pt-6">
        <div className="mx-auto max-w-3xl">
          <div className="max-lg:text-center"><SectionTitle>Entre em contato</SectionTitle></div>
          <Reveal delay={80} className="mt-8 rounded-3xl bg-card p-8 shadow-soft">
            <p className="font-display text-2xl text-foreground">Karen Keller</p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  WhatsApp
                </dt>
                <dd className="mt-1">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-teal">
                    +55 48 9740-8889
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">E-mail</dt>
                <dd className="mt-1">
                  <a href="mailto:karen.keller78@gmail.com" className="text-teal">
                    karen.keller78@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Instagram
                </dt>
                <dd className="mt-1">
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal"
                  >
                    @karen_keller_neuropsico
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border bg-background px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
          <div className="lg:hidden">
            <img src={logoAsset.url} alt="Karen Keller — neuropsicopedagogia" className="mx-auto h-11 w-auto max-w-[190px] object-contain sm:h-12 sm:max-w-[220px]" />
            <p className="text-xs text-muted-foreground">Neuropsicopedagoga</p>
          </div>
          <div className="hidden lg:block">
            <p className="font-display text-xl text-foreground">Karen Keller</p>
            <p className="text-xs text-muted-foreground">Neuropsicopedagoga</p>
          </div>
          <nav aria-label="Links do rodapé" className="hidden flex-wrap justify-center gap-x-5 gap-y-1 text-xs lg:flex">
            {[...NAV.slice(0, 4), { label: "FAQ", href: "#faq" }, { label: "Contato", href: "#contato" }].map((item) => (
              <a key={item.href} href={item.href} className="text-muted-foreground transition-colors hover:text-rose">{item.label}</a>
            ))}
          </nav>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-identity-blue transition-colors hover:text-teal lg:text-muted-foreground">WhatsApp</a>
            <a href="mailto:karen.keller78@gmail.com" className="text-identity-blue transition-colors hover:text-teal lg:text-muted-foreground">E-mail</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-identity-blue transition-colors hover:text-teal lg:text-muted-foreground">Instagram</a>
          </div>
          <p className="text-xs text-muted-foreground">Karen Keller © 2026</p>
          <p>
            <span className="text-xs text-muted-foreground">criado com <span aria-hidden="true" className="text-sm text-footer-heart lg:hidden">♡</span><span aria-hidden="true" className="hidden lg:inline">❤️</span> por{" "}</span>
            <a
              href="https://dufrimeunegocio.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-teal"
            >
              @Dufrimeunegocio
            </a>
          </p>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6">
        <span className="max-w-32 rounded-lg border border-border bg-background px-2 py-1.5 text-center text-[11px] leading-tight text-foreground shadow-soft sm:max-w-none sm:px-3 sm:py-2 sm:text-xs">Como posso te ajudar?</span>
        <Button asChild size="icon" className="size-12 rounded-full bg-teal text-foreground shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:bg-teal/80" title="Conversar pelo WhatsApp">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Conversar pelo WhatsApp">
            <WhatsAppIcon className="size-6" />
          </a>
        </Button>
      </div>
    </div>
  );
}
