import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  FlaskConical,
  Droplets,
  Microscope,
  Hammer,
  Activity,
  Search,
  FileCheck,
  ZoomIn,
} from "lucide-react";
import { Link } from "wouter";

export default function Laboratory() {
  const equipment = [
    { src: "equipment-1.jpg", title: "Спектрометр" },
    { src: "equipment-2.png", title: "Химическая лаборатория" },
    { src: "equipment-3.jpg", title: "Лабораторное оборудование" },
  ];

  const labGroups = [
    {
      id: "analytical",
      title: "Группа аналитической химии",
      icon: FlaskConical,
      cert: "chemistry_1.jpg",
      items: [
        "Чугун и сталь (полный химический анализ)",
        "Ферросплавы (Mn, Si, P, C, S)",
        "Железные руды (CaO, MgO, Al2O3, SiO2, Fe, P, S)",
        "Песок и цемент (основные оксиды)",
      ],
    },
    {
      id: "organic",
      title: "Группа органической химии",
      icon: Droplets,
      cert: "organic_1.jpg",
      items: [
        "Нефтяные масла (вязкость, плотность, кислотное число, механические примеси, температура вспышки)",
        "Дизельное топливо (вода, механические примеси, температуры вспышки, вязкость, плотность)",
        "Бензин (плотность, вода и механические примеси)",
        "СОЖ (вязкость, плотность, вода, механические примеси)",
      ],
    },
    {
      id: "molding",
      title: "Группа формовочных материалов",
      icon: Microscope,
      cert: "metallography_1.jpg", // Using metallography as closest match or placeholder if specific cert missing
      items: [
        "Песок (гранулометрия, влага, глинистые частицы)",
        "Цемент (сроки схватывания, прочность)",
        "Бетон (водопоглощение, прочность при сжатии)",
      ],
    },
    {
      id: "mechanical",
      title: "Группа механических испытаний",
      icon: Hammer,
      cert: "mechanical_1.jpg",
      items: [
        "Временное сопротивление, предел текучести",
        "Твердость (Бринелль, Роквелл), ударная вязкость",
        "Металлографические испытания чугуна",
        "Контроль труб (герметичность, геометрия)",
      ],
    },
    {
      id: "water",
      title: "Группа по контролю водной среды",
      icon: Activity,
      cert: "water_1.jpg",
      items: [
        "Питьевая и сточная вода",
        "Жесткость, кальций, хлориды, сульфаты",
        "Нитриты, нитраты, аммиак, железо",
        "Мутность, цветность, сухой остаток",
      ],
    },
    {
      id: "ndt",
      title: "Группа неразрушающего контроля",
      icon: Search,
      cert: "ndt_1.jpg",
      items: [
        "Ультразвуковой контроль",
        "Выезд специалиста на объект заказчика",
        "Дефектоскопия сварных соединений",
        "Контроль толщины стенок",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-sidebar text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/lab-card.jpg`}
            alt="Заводская лаборатория"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/80 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-left-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 text-primary-foreground font-bold uppercase tracking-widest text-sm">
              <FlaskConical className="h-4 w-4" />
              Направление 02
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: "#ffffff" }}
            >
              Центральная <br />
              Заводская Лаборатория
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Высокоточные испытания материалов и контроль качества с
              использованием современного оборудования и многолетнего
              промышленного опыта.
            </p>
            <Link href="/contacts">
              <Button
                size="lg"
                variant="outline"
                className="rounded-none h-14 px-8 text-base font-bold uppercase tracking-wide border-white text-white hover:bg-white hover:text-sidebar mt-4"
              >
                Связаться с лабораторией
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 bg-background">
        <div className="container">
          <Tabs defaultValue="services" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-3 h-14 bg-secondary/50 p-1 rounded-none">
                <TabsTrigger
                  value="services"
                  className="h-full text-base font-bold uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-white rounded-none transition-all"
                >
                  Услуги и направления
                </TabsTrigger>
                <TabsTrigger
                  value="certificates"
                  className="h-full text-base font-bold uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-white rounded-none transition-all"
                >
                  Сертификаты
                </TabsTrigger>
                <TabsTrigger
                  value="equipment"
                  className="h-full text-base font-bold uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-white rounded-none transition-all"
                >
                  Оборудование
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value="services"
              className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {labGroups.map((group, i) => (
                  <Card
                    key={i}
                    className="border border-border shadow-sm hover:shadow-lg transition-all duration-300 rounded-none group h-full flex flex-col"
                  >
                    <CardContent className="p-8 space-y-6 flex-1">
                      <div className="h-14 w-14 bg-secondary flex items-center justify-center rounded-none group-hover:bg-primary group-hover:text-white transition-colors">
                        <group.icon className="h-7 w-7" />
                      </div>

                      <h3 className="text-xl font-bold text-sidebar min-h-[3.5rem] flex items-center">
                        {group.title}
                      </h3>

                      <ul className="space-y-3">
                        {group.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <div className="h-1.5 w-1.5 bg-primary/40 mt-1.5 rounded-full shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    {/* Certificate Preview Link */}
                    <div className="px-8 pb-8 pt-0 mt-auto">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent font-medium text-sm group/link"
                          >
                            <FileCheck className="h-4 w-4 mr-2" />
                            Посмотреть область аттестации
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                          <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-auto p-4">
                            <img
                              src={`${import.meta.env.BASE_URL}certificates/${group.cert}`}
                              alt={`Сертификат - ${group.title}`}
                              className="w-full h-auto"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent
              value="certificates"
              className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {labGroups.map((group, i) => (
                  <div key={i} className="group cursor-pointer">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative aspect-[1/1.414] bg-white border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                          <img
                            src={`${import.meta.env.BASE_URL}certificates/${group.cert}`}
                            alt={`Сертификат - ${group.title}`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-sidebar/0 group-hover:bg-sidebar/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                              <ZoomIn className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 border-t border-border">
                            <p className="text-sm font-bold text-sidebar line-clamp-2">
                              {group.title}
                            </p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                        <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-auto p-4">
                          <img
                            src={`${import.meta.env.BASE_URL}certificates/${group.cert}`}
                            alt={`Сертификат - ${group.title}`}
                            className="w-full h-auto"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent
              value="equipment"
              className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {equipment.map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative aspect-[4/3] bg-white border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                          <img
                            src={`${import.meta.env.BASE_URL}images/${item.src}`}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-sidebar/0 group-hover:bg-sidebar/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                              <ZoomIn className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 border-t border-border">
                            <p className="text-sm font-bold text-sidebar line-clamp-2">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                        <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-auto p-4 flex items-center justify-center">
                          <img
                            src={`${import.meta.env.BASE_URL}images/${item.src}`}
                            alt={item.title}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-24 bg-sidebar text-white relative"
        style={{ backgroundColor: "#002b57" }}
      >
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
              style={{ color: "#fcfcfc" }}
            >
              Необходимы лабораторные испытания?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Свяжитесь с нами для обсуждения программы испытаний и получения
              коммерческого предложения.
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
