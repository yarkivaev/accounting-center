import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Building, ZoomIn } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function About() {
  const certificates = [
    { src: "chemistry_1.jpg", title: "Аналитическая химия" },
    { src: "organic_1.jpg", title: "Органическая химия" },
    { src: "mechanical_1.jpg", title: "Механические испытания" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>О компании — УЦ Свободный Сокол</title>
        <meta name="description" content="УЦ Свободный Сокол — надежный партнёр для бизнеса в Липецке. История компании, наша команда и сертификаты качества" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-24 bg-sidebar text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/about-bg.jpg`}
            alt="О центре"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-left-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 text-primary-foreground font-bold uppercase tracking-widest text-sm">
              <Building className="h-4 w-4" />О компании
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: "#ffffff" }}
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

      {/* Certificates Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 space-y-6">
              <h2 className="text-3xl font-bold text-sidebar">
                Лицензии и сертификаты
              </h2>
              <p className="text-muted-foreground">
                Наша деятельность полностью лицензирована и соответствует всем
                государственным стандартам. Лаборатория аттестована в
                национальной системе.
              </p>
              <Link href="/laboratory?tab=certificates">
                <Button
                  variant="outline"
                  className="rounded-none border-sidebar text-sidebar hover:bg-sidebar hover:text-white uppercase font-bold tracking-wide"
                >
                  Показать все документы
                </Button>
              </Link>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
              {certificates.map((cert, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[1/1.414] bg-white border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <img
                        src={`${import.meta.env.BASE_URL}certificates/${cert.src}`}
                        alt={`Сертификат - ${cert.title}`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-sidebar/0 group-hover:bg-sidebar/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <ZoomIn className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-3 border-t border-border">
                        <p className="text-xs font-bold text-sidebar line-clamp-2">
                          {cert.title}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                    <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-auto p-4">
                      <img
                        src={`${import.meta.env.BASE_URL}certificates/${cert.src}`}
                        alt={`Сертификат - ${cert.title}`}
                        className="w-full h-auto"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
