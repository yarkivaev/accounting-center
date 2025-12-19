import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Contacts() {
  return (
    <Layout>
      <Helmet>
        <title>Контакты — УЦ Свободный Сокол</title>
        <meta
          name="description"
          content="Контактная информация УЦ Свободный Сокол: адрес в Липецке, телефон, email, режим работы и реквизиты компании"
        />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-sidebar text-white py-20">
        <div className="container">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#fafafa" }}
          >
            Контакты
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на
            ваши вопросы и обсудить сотрудничество.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-wider text-sm">
                    <MapPin className="h-5 w-5" />
                    Почтовый/фактический адрес
                  </div>
                  <p className="text-lg text-sidebar font-medium">
                    398007, г. Липецк,
                    <br />
                    Заводская пл., 1
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-wider text-sm">
                    <MapPin className="h-5 w-5" />
                    Юридический адрес
                  </div>
                  <p className="text-lg text-sidebar font-medium">
                    127495, г. Москва,
                    <br />
                    Дмитровское ш., д. 163а к. 2,
                    <br />
                    помещ. 18.3
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-wider text-sm">
                    <Clock className="h-5 w-5" />
                    Режим работы
                  </div>
                  <p className="text-lg text-sidebar font-medium">
                    Пн-Пт: 8:00 — 17:00
                    <br />
                    Сб-Вс: Выходной
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-sidebar border-b border-border pb-4">
                  Телефон и E-mail
                </h3>

                <div className="space-y-2">
                  <p className="text-base font-bold text-sidebar">
                    Людмила Пошевалова
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Генеральный директор ООО «УЦ «Свободный сокол»
                  </p>
                  <a
                    href="tel:+79205292360"
                    className="block text-base font-medium text-sidebar hover:text-primary transition-colors"
                  >
                    +7 920 529-23-60
                  </a>
                  <a
                    href="mailto:poshevalova_la@svsokol.ru"
                    className="block text-sm text-primary hover:underline"
                  >
                    poshevalova_la@svsokol.ru
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-sidebar border-b border-border pb-4">
                  Руководители направлений
                </h3>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-base font-bold text-sidebar">
                      Елена Попова
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Начальник лаборатории ООО «УЦ «Свободный сокол»
                    </p>
                    <a
                      href="tel:+79508073519"
                      className="block text-base font-medium text-sidebar hover:text-primary transition-colors"
                    >
                      +7 950 807-35-19
                    </a>
                    <a
                      href="mailto:popova_ev@svsokol.ru"
                      className="block text-sm text-primary hover:underline"
                    >
                      popova_ev@svsokol.ru
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="text-base font-bold text-sidebar">
                      Анастасия Ларина
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Заместитель генерального директора по правовым вопросам
                    </p>
                    <a
                      href="tel:+79508032071"
                      className="block text-base font-medium text-sidebar hover:text-primary transition-colors"
                    >
                      +7 950 803-20-71
                    </a>
                    <a
                      href="mailto:panarina_ae@svsokol.ru"
                      className="block text-sm text-primary hover:underline"
                    >
                      panarina_ae@svsokol.ru
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-[400px] bg-secondary w-full relative border border-border">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=39.658154,52.631802&z=17&pt=39.658154,52.631802,pm2rdm"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-secondary/30 p-8 md:p-12 border border-border h-fit sticky top-24">
              <h2 className="text-2xl font-bold text-sidebar mb-6">
                Информация
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Мы всегда готовы ответить на ваши вопросы и предоставить
                  подробную консультацию по нашим услугам.
                </p>
                <p>
                  Для заключения договора или получения коммерческого
                  предложения, пожалуйста, свяжитесь с нами по телефону или
                  электронной почте.
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-bold text-sidebar uppercase tracking-wide mb-2">
                    Реквизиты
                  </p>
                  <p className="text-sm">
                    ООО «Учетный центр «Свободный сокол»
                    <br />
                    ИНН: 7719733183
                    <br />
                    КПП: 771501001
                    <br />
                    ОГРН: 1097746629232
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
