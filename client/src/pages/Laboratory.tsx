import ServicePageTemplate, {
  ServiceGroup,
  ServiceGrid,
} from "@/components/ServicePageTemplate";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  FlaskConical,
  Droplets,
  Microscope,
  Hammer,
  Activity,
  Search,
  ZoomIn,
} from "lucide-react";
import { useSearch } from "wouter";
import { Helmet } from "react-helmet-async";

export default function Laboratory() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const tab = params.get("tab");
  const equipment = [
    { src: "equipment-3.jpg", title: "Лабораторное оборудование" },
    { src: "equipment-2.png", title: "Химическая лаборатория" },
    { src: "equipment-1.jpg", title: "Спектрометр" },
    { src: "IMG_7041.JPG" },
    { src: "IMG_7046.JPG" },
    { src: "IMG_7056.JPG" },
    { src: "IMG_7061.JPG" },
    { src: "IMG_7065.JPG" },
    { src: "IMG_7069.JPG" },
    { src: "IMG_7070.JPG" },
    { src: "IMG_7075.JPG" },
    { src: "IMG_7079.JPG" },
    { src: "IMG_7084.JPG" },
    { src: "IMG_7085.JPG" },
  ];

  const labGroups: ServiceGroup[] = [
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
      cert: "metallography_1.jpg",
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

  const tabs = [
    {
      id: "services",
      label: "Услуги и направления",
      content: <ServiceGrid services={labGroups} />,
    },
    {
      id: "certificates",
      label: "Сертификаты",
      content: (
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
      ),
    },
    {
      id: "equipment",
      label: "Оборудование",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-[4/3] bg-white border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <img
                      src={`${import.meta.env.BASE_URL}images/equipment/${item.src}`}
                      alt={item.title || "Лабораторное оборудование"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-sidebar/0 group-hover:bg-sidebar/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ZoomIn className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    {item.title && (
                      <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 border-t border-border">
                        <p className="text-sm font-bold text-sidebar line-clamp-2">
                          {item.title}
                        </p>
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
                  <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-auto p-4 flex items-center justify-center">
                    <img
                      src={`${import.meta.env.BASE_URL}images/equipment/${item.src}`}
                      alt={item.title || "Лабораторное оборудование"}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Центральная заводская лаборатория — УЦ Свободный Сокол</title>
        <meta name="description" content="Лабораторные испытания в Липецке: химический анализ металлов, механические испытания, контроль воды, неразрушающий контроль материалов" />
      </Helmet>
      <ServicePageTemplate
        directionNumber="02"
        directionIcon={FlaskConical}
        title={
          <>
            Центральная <br />
            Заводская Лаборатория
          </>
        }
        description="Высокоточные испытания материалов и контроль качества с использованием современного оборудования и многолетнего промышленного опыта."
        heroImage={`${import.meta.env.BASE_URL}images/lab-card.jpg`}
        ctaButtonText="Связаться с лабораторией"
        services={labGroups}
        tabs={tabs}
        defaultTab={tab || undefined}
        ctaTitle="Необходимы лабораторные испытания?"
        ctaDescription="Свяжитесь с нами для обсуждения программы испытаний и получения коммерческого предложения."
        ctaButtonLabel="Перейти к контактам"
      />
    </>
  );
}
