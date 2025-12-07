import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  FileText,
  Briefcase,
  Calculator,
  Scale,
  Building2,
  ArrowRight,
  Users,
} from "lucide-react";
import { Link } from "wouter";

export default function Accounting() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-sidebar text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/accounting-card.jpg`}
            alt="Бухгалтерские услуги"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/90 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-left-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <Calculator className="h-4 w-4" />
              Направление 01
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: "#ffffff" }}
            >
              Бухгалтерия для <br />
              ИП и ООО
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Профессиональное сопровождение вашего бизнеса. Мы берем на себя
              всю рутину, чтобы вы могли сосредоточиться на развитии компании.
            </p>
            <Link href="/contacts">
              <Button
                size="lg"
                className="rounded-none h-14 px-8 text-base font-bold uppercase tracking-wide bg-primary hover:bg-primary/90 mt-4"
              >
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services for IP */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-24 space-y-4">
                <div className="h-1 w-20 bg-primary mb-6" />
                <h2 className="text-3xl font-bold text-sidebar">
                  Услуги для ИП
                </h2>
                <p className="text-muted-foreground">
                  Полный спектр услуг для индивидуальных предпринимателей на
                  любых системах налогообложения.
                </p>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Регистрация ИП",
                  desc: "Подготовка документов, подача в налоговую, открытие расчетного счета.",
                },
                {
                  title: "Бухгалтерское обслуживание",
                  desc: "Ведение учета на УСН, ПСН, ОСНО, ЕСХН.",
                },
                {
                  title: "Нулевая отчётность",
                  desc: "Подготовка и сдача нулевых деклараций при отсутствии деятельности.",
                },
                {
                  title: "Налоговые декларации",
                  desc: "Расчет налогов, подготовка и своевременная сдача отчетности.",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="border border-border shadow-sm hover:shadow-md transition-shadow rounded-none"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-sidebar flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 bg-primary rounded-full shrink-0" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services for OOO */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse gap-12">
            <div className="md:w-1/3">
              <div className="sticky top-24 space-y-4">
                <div className="h-1 w-20 bg-primary mb-6" />
                <h2 className="text-3xl font-bold text-sidebar">
                  Услуги для ООО
                </h2>
                <p className="text-muted-foreground">
                  Комплексное обслуживание юридических лиц. Гарантируем порядок
                  в документах и отсутствие штрафов.
                </p>
              </div>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Регистрация ООО",
                  desc: "Помощь в выборе кодов ОКВЭД, подготовка устава и решения о создании.",
                },
                {
                  title: "Полное сопровождение",
                  desc: "Ведение бухучета на УСН, ОСНО, ЕСХН. Работа с ВЭД.",
                },
                {
                  title: "Квартальная и годовая отчётность",
                  desc: "Сдача баланса, отчета о финрезультатах и налоговых деклараций.",
                },
                {
                  title: "Постановка учёта",
                  desc: "Организация системы бухгалтерского учета с нуля для новых предприятий.",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="border border-border shadow-sm hover:shadow-md transition-shadow rounded-none bg-white"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-sidebar flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 bg-primary rounded-full shrink-0" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16 text-sidebar">
            Дополнительные услуги
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* HR & Payroll */}
            <div className="space-y-6 p-8 border border-border hover:border-primary transition-colors group">
              <div className="h-12 w-12 bg-secondary flex items-center justify-center rounded-none mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-sidebar">
                Кадры и зарплата
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Кадровое делопроизводство (приём, увольнение)
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Расчёт зарплаты, больничных, отпускных
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Отчетность в СФР (ПФР + ФСС)
                </li>
              </ul>
            </div>

            {/* Tax Interaction */}
            <div className="space-y-6 p-8 border border-border hover:border-primary transition-colors group">
              <div className="h-12 w-12 bg-secondary flex items-center justify-center rounded-none mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-sidebar">
                Взаимодействие с ФНС
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Ответы на требования налоговой
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Разблокировка расчетных счетов
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Сверки с бюджетом
                </li>
              </ul>
            </div>

            {/* Legal Support */}
            <div className="space-y-6 p-8 border border-border hover:border-primary transition-colors group">
              <div className="h-12 w-12 bg-secondary flex items-center justify-center rounded-none mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-sidebar">
                Юридическое сопровождение
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Правовая экспертиза договоров
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Внесение изменений в ЕГРЮЛ/ЕГРИП
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Консультации по законодательству
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-sidebar text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Готовы обсудить сотрудничество?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Свяжитесь с нами для получения подробной консультации по
              бухгалтерскому обслуживанию вашего бизнеса.
            </p>
            <Link href="/contacts">
              <Button
                size="lg"
                className="bg-white text-sidebar hover:bg-white/90 font-bold uppercase tracking-wide rounded-none h-16 px-12 text-lg"
              >
                Перейти к контактам
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
