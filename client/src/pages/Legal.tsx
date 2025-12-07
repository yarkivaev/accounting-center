import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  Gavel,
  FileText,
  Shield,
  Briefcase,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

export default function Legal() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-sidebar text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/accounting-card.jpg`}
            alt="Юридические услуги"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/90 to-sidebar/70" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-left-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary-foreground text-xs font-mono uppercase tracking-widest backdrop-blur-sm">
              <Scale className="h-3 w-3" />
              Направление 03
            </div>

            <h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: "#fafafa" }}
            >
              Юридические услуги <br />
              для бизнеса
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Оказываем весь спектр юридических услуг: от регистрации компании и
              договорной работы до представительства в судах и сопровождения
              сложных сделок.
            </p>

            <div className="pt-4">
              <Link href="/contacts">
                <Button
                  size="lg"
                  className="rounded-none h-14 px-8 text-base font-bold uppercase tracking-wide bg-primary hover:bg-primary/90"
                >
                  Связаться с юристом
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Корпоративное право",
                items: [
                  "Регистрация ООО и ИП",
                  "Внесение изменений в ЕГРЮЛ",
                  "Ликвидация и реорганизация",
                  "Корпоративные споры",
                ],
              },
              {
                icon: FileText,
                title: "Договорная работа",
                items: [
                  "Разработка договоров",
                  "Правовая экспертиза",
                  "Составление протоколов разногласий",
                  "Участие в переговорах",
                ],
              },
              {
                icon: Gavel,
                title: "Судебное представительство",
                items: [
                  "Арбитражные споры",
                  "Взыскание задолженности",
                  "Защита деловой репутации",
                  "Банкротство",
                ],
              },
              {
                icon: Shield,
                title: "Сопровождение проверок",
                items: [
                  "Подготовка к проверкам",
                  "Участие при проведении",
                  "Обжалование результатов",
                  "Взаимодействие с госорганами",
                ],
              },
              {
                icon: Briefcase,
                title: "Трудовое право",
                items: [
                  "Трудовые споры",
                  "Разработка локальных актов",
                  "Охрана труда",
                  "Кадровый аудит",
                ],
              },
              {
                icon: Scale,
                title: "Сделки с недвижимостью",
                items: [
                  "Сопровождение сделок",
                  "Регистрация прав",
                  "Земельные споры",
                  "Снижение кадастровой стоимости",
                ],
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-none group bg-white"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-sidebar">
                    {service.title}
                  </h3>

                  <ul className="space-y-3">
                    {service.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-muted-foreground text-sm"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sidebar text-white relative">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        ></div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#fafafa" }}
            >
              Нужна юридическая помощь?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Запишитесь на консультацию к нашим экспертам. Мы проанализируем
              вашу ситуацию и предложим оптимальное решение.
            </p>
            <Link href="/contacts">
              <Button
                size="lg"
                className="rounded-none h-14 px-10 text-base font-bold uppercase tracking-wide bg-white text-sidebar hover:bg-gray-100"
              >
                Получить консультацию
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
