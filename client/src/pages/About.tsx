import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Award, Building, History, Users } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-sidebar text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/about-bg.jpg`}
            alt="О центре"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/90 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-left-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <Building className="h-4 w-4" />О компании
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: "#f0f2f5" }}
            >
              УЦ Свободный Сокол
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Надежный партнер для вашего бизнеса, объединяющий промышленную
              экспертизу и современные стандарты бухгалтерского обслуживания.
            </p>
          </div>
        </div>
      </section>

      {/* History & Status */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-sidebar">
                История и статус
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  «УЦ Свободный Сокол» — это уникальная организация, выросшая из
                  структурных подразделений крупного промышленного предприятия.
                  Мы сохранили лучшие традиции заводской точности и
                  ответственности, адаптировав их под современные рыночные
                  реалии.
                </p>
                <p>
                  Наш центр объединяет два ключевых направления:
                  профессиональное бухгалтерское сопровождение бизнеса и
                  независимую заводскую лабораторию. Такой симбиоз позволяет нам
                  предлагать комплексные решения для производственных и торговых
                  предприятий.
                </p>
                <p>
                  Мы гордимся своей связью с промышленностью Липецкого региона и
                  продолжаем развивать культуру производства и ведения бизнеса.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-secondary/50 p-8 h-48 flex flex-col justify-center items-center text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Лет опыта
                </div>
              </div>
              <div className="bg-secondary/50 p-8 h-48 flex flex-col justify-center items-center text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Клиентов
                </div>
              </div>
              <div className="bg-secondary/50 p-8 h-48 flex flex-col justify-center items-center text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Экспертов
                </div>
              </div>
              <div className="bg-secondary/50 p-8 h-48 flex flex-col justify-center items-center text-center border border-border">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Гарантия
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-sidebar mb-4">
              Наши Руководители
            </h2>
            <p className="text-muted-foreground">
              Квалифицированные специалисты, готовые решить любую задачу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className="group bg-white border border-border p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  {/* Placeholder for team photo */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Users className="h-12 w-12" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-sidebar">
                  Сотрудник {i}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  Должность
                </p>
                <p className="text-xs text-muted-foreground">
                  Краткое описание опыта и компетенций специалиста.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Placeholder */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 space-y-6">
              <h2 className="text-3xl font-bold text-sidebar">
                Лицензии и сертификаты
              </h2>
              <p className="text-muted-foreground">
                Наша деятельность полностью лицензирована и соответствует всем
                государственным стандартам. Лаборатория аккредитована в
                национальной системе.
              </p>
              <Button
                variant="outline"
                className="rounded-none border-sidebar text-sidebar hover:bg-sidebar hover:text-white uppercase font-bold tracking-wide"
              >
                Показать все документы
              </Button>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="aspect-[3/4] bg-white border border-border p-4 shadow-sm flex flex-col items-center justify-center text-center group hover:border-primary transition-colors cursor-pointer"
                >
                  <Award className="h-16 w-16 text-gray-300 mb-4 group-hover:text-primary transition-colors" />
                  <span className="text-xs font-bold uppercase text-gray-400 group-hover:text-sidebar transition-colors">
                    Сертификат {i}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
