import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import logoAsset from "@/assets/logo.png.asset.json";
import karenAsset from "@/assets/karen.jpg.asset.json";

const WHATSAPP = "https://wa.me/5548974008889";
const INSTAGRAM = "https://instagram.com/karen_keller_neuropsico";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Alegremente | Neuropsicopedagogia em Garopaba" },
      {
        name: "description",
        content:
          "Clínica Alegremente — atendimento em neuropsicopedagogia para crianças, adolescentes, adultos e idosos, com avaliação neuropsicopedagógica, mapeamento cerebral, reabilitação cognitiva e terapia psicopedagógica.",
      },
      { property: "og:title", content: "Clínica Alegremente | Neuropsicopedagogia em Garopaba" },
      {
        property: "og:description",
        content:
          "Avaliação neuropsicopedagógica, mapeamento cerebral, reabilitação cognitiva e terapia psicopedagógica em Garopaba, com a neuropsicopedagoga Karen Keller.",
      },
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

const FORMACAO = [
  "Pedagogia",
  "Pós-graduação em Neuropsicopedagogia",
  "Neurociências",
  "Neuroanatomia",
  "Autismo — avaliação e intervenção",
  "TDAH",
  "Educação especial e inclusão",
  "Terapia complementar",
  "Especialização em Dislexia",
  "Psiquiatria infantil",
  "Neuropsicologia",
  "Cursando doutorado em Naturopatia e Terapia Ortomolecular",
  "Proprietária da Clínica Alegremente",
  'Autora da coleção "Ler: super poder"',
  "Autora do Protocolo de Avaliação Funcional da Atenção Auditiva (PROAFA)",
  "Autora do Protocolo de Avaliação Funcional da Atenção Visual (PROAFA-V)",
  "Criadora do Protocolo ROTA",
  "Assessoria de educação especial e capacitação de professores",
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
    title: "Terapia psicopedagógica",
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
    a: "Pode fornecer informações complementares sobre aspectos como nível de ativação cerebral, atenção, concentração, estado de alerta, processamento de informações, autorregulação e padrões de funcionamento de diferentes áreas do cérebro.",
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

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose ${className}`}
    >
      Agendar avaliação
    </a>
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
        <a href="#inicio" aria-label="Clínica Alegremente">
          <img src={logoAsset.url} alt="Clínica Alegremente" className="h-9 w-auto sm:h-11" />
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
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="text-foreground md:hidden"
        >
          {open ? <Menu className="size-6 opacity-0" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <img src={logoAsset.url} alt="Clínica Alegremente" className="h-9 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X className="size-6" />
            </button>
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
      <section id="inicio" className="px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="order-2 md:order-1">
            <h1 className="max-w-xl font-display text-4xl leading-[1.15] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Cuidar da aprendizagem é compreender cada pessoa de forma única.
            </h1>
            <div className="mt-10">
              <CtaButton />
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 md:order-2">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="absolute -left-5 -top-5 hidden size-40 rounded-full bg-teal-soft/50 blur-2xl md:block" />
              <div className="absolute -bottom-6 -right-4 hidden size-32 rounded-full bg-rose-soft/60 blur-2xl md:block" />
              <img
                src={karenAsset.url}
                alt="Karen Keller, neuropsicopedagoga da Clínica Alegremente"
                className="relative w-full rounded-[2rem] object-cover shadow-soft"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-teal-soft/25 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>Quem sou eu?</SectionTitle>
          <Reveal delay={80}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Karen Keller é pedagoga e pós-graduada em Neuropsicopedagogia, com formação
              complementar em Neurociências, Neuroanatomia, Autismo — avaliação e intervenção, TDAH,
              Educação Especial e Inclusão, Terapia Complementar, Dislexia, Psiquiatria Infantil e
              Neuropsicologia.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Atua há mais de 15 anos com crianças, adolescentes e adultos e também realiza
              assessoria para municípios na adaptação escolar e capacitação de professores.
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

          <Reveal delay={180}>
            <Accordion type="single" collapsible className="mt-8">
              <AccordionItem value="formacao" className="border-b-0">
                <AccordionTrigger className="text-sm text-teal hover:no-underline">
                  Conheça minha formação
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                    {FORMACAO.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Reveal>
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
                className="rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="block h-1 w-10 rounded-full bg-rose-soft" />
                <h3 className="mt-5 text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÃO */}
      <section className="bg-rose-soft/30 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>Avaliação Neuropsicopedagógica</SectionTitle>
          <Reveal delay={80}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A Avaliação Neuropsicopedagógica é um processo investigativo que busca compreender
              como a criança, o adolescente ou o adulto aprende, identificando suas potencialidades
              e possíveis dificuldades relacionadas à atenção, memória, linguagem, leitura, escrita,
              raciocínio lógico-matemático, percepção, organização, planejamento, controle inibitório
              e demais funções cognitivas envolvidas na aprendizagem.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="mt-12 text-xl text-foreground">O que pode ser investigado?</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {INVESTIGADO.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-background px-4 py-2 text-sm text-foreground shadow-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-10 leading-relaxed text-muted-foreground">
              O objetivo não é apenas identificar dificuldades, mas compreender quais processos
              cognitivos podem estar interferindo no desempenho acadêmico e funcional.
            </p>
            <div className="mt-8 rounded-2xl border-l-2 border-teal bg-background p-6">
              <p className="leading-relaxed text-foreground">
                A avaliação pode contribuir para a investigação de condições como TDAH, dislexia,
                discalculia, dificuldades de aprendizagem e alterações nas funções executivas, entre
                outras situações que impactam o processo de aprender.
              </p>
            </div>
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
      <section className="bg-teal-soft/25 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>Mapeamento Cerebral</SectionTitle>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {MAPEAMENTO.map((m, i) => (
              <Reveal key={m.q} delay={i * 80} className="rounded-3xl bg-background p-7 shadow-soft">
                <h3 className="text-xl text-foreground">{m.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.a}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <div className="mt-8 rounded-2xl border border-gold/40 bg-background p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Importante</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
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
                className="rounded-2xl bg-card p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg leading-snug text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAMÍLIA E ESCOLA */}
      <section className="bg-rose-soft/30 px-5 py-20 sm:px-8 sm:py-28">
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
                className="rounded-2xl bg-teal-soft/40 px-4 py-8 font-display text-xl text-foreground"
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

      {/* CTA FINAL */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <Reveal className="mx-auto max-w-4xl rounded-[2.5rem] bg-teal-soft/50 px-6 py-16 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-foreground sm:text-4xl">
            Vamos compreender melhor suas necessidades?
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
            Entre em contato para saber mais sobre os atendimentos da Clínica Alegremente.
          </p>
          <div className="mt-8">
            <CtaButton />
          </div>
        </Reveal>
      </section>

      {/* CONTATO */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>Entre em contato</SectionTitle>
          <Reveal delay={80} className="mt-8 rounded-3xl bg-card p-8 shadow-soft">
            <p className="font-display text-2xl text-foreground">Clínica Alegremente</p>
            <p className="mt-1 text-sm text-muted-foreground">Karen Keller</p>
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
                  Endereço
                </dt>
                <dd className="mt-1 text-foreground">Rua Doraci de Andrade, Garopaba</dd>
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
      <footer className="border-t border-border px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <img src={logoAsset.url} alt="Clínica Alegremente" className="h-10 w-auto" />
          <p className="text-sm text-muted-foreground">Karen Keller — Neuropsicopedagoga</p>
          <div className="flex gap-6 text-sm">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-teal">
              Instagram
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-teal">
              WhatsApp
            </a>
            <a href="mailto:karen.keller78@gmail.com" className="text-teal">
              E-mail
            </a>
          </div>
          <p className="text-xs text-muted-foreground">Clínica Alegremente © 2026</p>
          <p className="text-xs text-muted-foreground">
            criado com ❤️ por{" "}
            <a
              href="https://dufrimeunegocio.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal"
            >
              @Dufrimeunegocio
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
