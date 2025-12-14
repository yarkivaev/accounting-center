import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Calculator,
  FileText,
  Users,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>УЦ Свободный Сокол — Бухгалтерия, Лаборатория, Юридические услуги в Липецке</title>
        <meta name="description" content="Комплексное сопровождение бизнеса: бухгалтерские услуги для ИП и ООО, заводская лаборатория и юридическая поддержка в Липецке" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-sidebar text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.jpg`}
            alt="Industrial Office and Laboratory"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/80 to-transparent" />
        </div>

        <div className="container relative z-10 pt-20 pb-32">
          <div className="max-w-3xl space-y-8 animate-in slide-in-from-left-10 fade-in duration-700">
            <h1
              className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-balance"
              style={{ color: "#fafafa" }}
            >
              Бухгалтерия и <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                Заводская Лаборатория
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Комплексное сопровождение вашего бизнеса: от профессионального
              бухгалтерского учёта до высокоточных лабораторных испытаний в
              одном надежном центре.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/accounting">
                <Button
                  size="lg"
                  className="rounded-none h-14 px-8 text-base font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 border-2 border-transparent"
                >
                  Услуги бухгалтерии
                </Button>
              </Link>
              <Link href="/laboratory">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none h-14 px-8 text-base font-bold uppercase tracking-wide text-white border-white/30 hover:bg-white hover:text-sidebar-primary backdrop-blur-sm"
                >
                  Услуги лаборатории
                </Button>
              </Link>
              <Link href="/legal">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-none h-14 px-8 text-base font-bold uppercase tracking-wide text-white border-white/30 hover:bg-white hover:text-sidebar-primary backdrop-blur-sm"
                >
                  Юридические услуги
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </section>

      {/* Main Directions Section */}
      <section className="py-24 bg-background relative z-20 -mt-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Accounting Card */}
            <Link href="/accounting" className="group">
              <Card className="h-full overflow-hidden border-0 shadow-2xl bg-white rounded-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-sidebar/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/accounting-card.jpg`}
                    alt="Бухгалтерские услуги"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest text-sidebar">
                    Направление 01
                  </div>
                </div>
                <CardContent className="p-10 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-sidebar group-hover:text-primary transition-colors">
                      Бухгалтерские услуги
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Полное сопровождение ИП и ООО. Регистрация бизнеса,
                      налоговая отчётность, кадровый учёт.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-sm group-hover:gap-4 transition-all">
                    Подробнее <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Laboratory Card */}
            <Link href="/laboratory" className="group">
              <Card className="h-full overflow-hidden border-0 shadow-2xl bg-sidebar text-white rounded-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-sidebar/40 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/lab-card.jpg`}
                    alt="Заводская лаборатория"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-primary/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                    Направление 02
                  </div>
                </div>
                <CardContent className="p-10 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white group-hover:text-primary-foreground transition-colors">
                      Центральная заводская лаборатория
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      Химический анализ, физико-механические испытания, контроль
                      воды и неразрушающий контроль материалов.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground font-bold uppercase tracking-wide text-sm group-hover:gap-4 transition-all">
                    Подробнее <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Legal Card */}
            <Link href="/legal" className="group">
              <Card className="h-full overflow-hidden border-0 shadow-2xl bg-white rounded-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-sidebar/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/legal-card.jpg`}
                    alt="Юридические услуги"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest text-sidebar">
                    Направление 03
                  </div>
                </div>
                <CardContent className="p-10 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-sidebar group-hover:text-primary transition-colors">
                      Юридические услуги
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Корпоративное право, договорная работа, судебное
                      представительство, сопровождение сделок.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-sm group-hover:gap-4 transition-all">
                    Подробнее <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-sidebar">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground">
              Сочетание многолетнего промышленного опыта и современных
              стандартов обслуживания
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Надёжность",
                desc: "Гарантия качества услуг, подтвержденная репутацией завода",
              },
              {
                icon: Users,
                title: "Опыт экспертов",
                desc: "Квалифицированные специалисты с многолетним стажем",
              },
              {
                icon: FlaskConical,
                title: "Собственная база",
                desc: "Современное лабораторное оборудование и ПО",
              },
              {
                icon: Clock,
                title: "Точность сроков",
                desc: "Строгое соблюдение регламентов и договорных обязательств",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-4 p-6 group hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border"
              >
                <div className="h-16 w-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-2 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-sidebar">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accounting Teaser */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 space-y-8 md:sticky md:top-24">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                  <Calculator className="h-4 w-4" />
                  Бухгалтерия
                </div>
                <h2 className="text-4xl font-bold text-sidebar leading-tight">
                  Порядок в документах — <br />
                  стабильность бизнеса
                </h2>
                <p className="text-muted-foreground text-lg">
                  Берем на себя всю рутину: от регистрации компании до сдачи
                  сложной отчетности и общения с налоговой.
                </p>
              </div>
              <Link href="/accounting">
                <Button className="rounded-none px-8 py-6 text-sm font-bold uppercase tracking-wide w-full md:w-auto">
                  Все услуги бухгалтерии
                </Button>
              </Link>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {[
                "Регистрация ИП и ООО",
                "Бухгалтерское обслуживание (УСН, ПСН, ОСНО)",
                "Подготовка налоговых деклараций",
                "Нулевая отчётность",
                "Кадровое делопроизводство",
                "Расчёт заработной платы",
                "Ответы на требования ФНС",
                "Разблокировка счетов",
              ].map((service, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1 h-2 w-2 bg-primary/30 rounded-full group-hover:bg-primary transition-colors" />
                  <span className="text-lg font-medium text-sidebar group-hover:text-primary transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Teaser */}
      <section className="py-24 bg-sidebar text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-primary-foreground/80 font-bold uppercase tracking-widest text-xs">
                <FlaskConical className="h-4 w-4" />
                Лаборатория
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                Точность измерений <br />
                промышленного уровня
              </h2>
            </div>
            <Link href="/laboratory">
              <Button
                variant="outline"
                className="rounded-none px-8 py-6 text-sm font-bold uppercase tracking-wide border-white/20 text-white hover:bg-white hover:text-sidebar"
              >
                Все виды испытаний
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "Аналитическая химия",
                desc: "Полный хим. анализ металлов, руд, песка и цемента",
              },
              {
                title: "Органическая химия",
                desc: "Анализ нефтяных масел, топлива, бензина и СОЖ",
              },
              {
                title: "Формовочные материалы",
                desc: "Испытания песка, цемента и бетона",
              },
              {
                title: "Механические испытания",
                desc: "Прочность, твердость, ударная вязкость металлов",
              },
              {
                title: "Контроль водной среды",
                desc: "Анализ питьевой и сточной воды по всем показателям",
              },
              {
                title: "Неразрушающий контроль",
                desc: "Ультразвуковой контроль с выездом на объект",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-sidebar p-8 border border-transparent"
              >
                <div className="text-primary-foreground/20 text-4xl font-mono font-bold mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16 text-sidebar">
            Как мы работаем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-border -z-10" />

            {[
              {
                step: "01",
                title: "Заявка",
                desc: "Оставьте заявку на сайте или позвоните нам",
              },
              {
                step: "02",
                title: "Согласование",
                desc: "Уточняем детали и подбираем оптимальное решение",
              },
              {
                step: "03",
                title: "Договор",
                desc: "Заключаем официальный договор на оказание услуг",
              },
              {
                step: "04",
                title: "Результат",
                desc: "Выполняем работу качественно и точно в срок",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center bg-background p-6 shadow-sm border border-border relative"
              >
                <div className="w-16 h-16 bg-sidebar text-white rounded-full flex items-center justify-center font-mono text-xl font-bold mb-6 border-4 border-background absolute -top-8">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mt-8 mb-2 text-sidebar">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
