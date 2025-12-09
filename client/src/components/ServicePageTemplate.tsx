import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FileCheck, ZoomIn, LucideIcon } from "lucide-react";
import { Link } from "wouter";

/**
 * Represents a group of services with an icon and list of items.
 * Used to render service cards in a unified grid layout.
 */
export interface ServiceGroup {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
  cert?: string;
}

/**
 * Represents a tab in the service page.
 * Allows for custom content beyond the standard service grid.
 */
export interface ServiceTab {
  id: string;
  label: string;
  content: React.ReactNode;
}

/**
 * Props for the ServicePageTemplate component.
 * Provides a unified layout for all service pages.
 */
export interface ServicePageTemplateProps {
  directionNumber: string;
  directionIcon: LucideIcon;
  title: React.ReactNode;
  description: string;
  heroImage: string;
  ctaButtonText: string;
  services: ServiceGroup[];
  tabs?: ServiceTab[];
  defaultTab?: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonLabel: string;
}

/**
 * Renders a single service card with icon, title, and items list.
 * Optionally includes a certificate preview link.
 */
function ServiceCard({ service }: { service: ServiceGroup }) {
  const Icon = service.icon;
  return (
    <Card className="border border-border shadow-sm rounded-none h-full flex flex-col">
      <CardContent className="p-8 space-y-6 flex-1">
        <div className="h-14 w-14 bg-secondary flex items-center justify-center rounded-none">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-sidebar">{service.title}</h3>
        <ul className="space-y-3">
          {service.items.map((item, idx) => (
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
      {service.cert && (
        <div className="px-8 pb-8 pt-0 mt-auto overflow-hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent font-medium text-sm group/link text-left whitespace-normal"
              >
                <FileCheck className="h-4 w-4 mr-2 shrink-0" />
                Посмотреть область аттестации
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none">
              <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-auto p-4">
                <img
                  src={`${import.meta.env.BASE_URL}certificates/${service.cert}`}
                  alt={`Сертификат - ${service.title}`}
                  className="w-full h-auto"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </Card>
  );
}

/**
 * Renders a grid of service cards.
 */
function ServiceGrid({ services }: { services: ServiceGroup[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <ServiceCard key={i} service={service} />
      ))}
    </div>
  );
}

/**
 * Unified template for service pages (Accounting, Laboratory, Legal).
 * Provides consistent hero section, services grid with optional tabs, and CTA.
 */
export default function ServicePageTemplate({
  directionNumber,
  directionIcon: DirectionIcon,
  title,
  description,
  heroImage,
  ctaButtonText,
  services,
  tabs,
  defaultTab,
  ctaTitle,
  ctaDescription,
  ctaButtonLabel,
}: ServicePageTemplateProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-sidebar text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sidebar via-sidebar/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6 animate-in slide-in-from-left-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 text-primary-foreground font-bold uppercase tracking-widest text-sm">
              <DirectionIcon className="h-4 w-4" />
              Направление {directionNumber}
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: "#ffffff" }}
            >
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {description}
            </p>
            <Link href="/contacts">
              <Button
                size="lg"
                variant="outline"
                className="rounded-none h-14 px-8 text-base font-bold uppercase tracking-wide border-white text-white hover:bg-white hover:text-sidebar mt-4"
              >
                {ctaButtonText}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-background">
        <div className="container">
          {tabs && tabs.length > 0 ? (
            <Tabs defaultValue={defaultTab || tabs[0].id} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList
                  className={`grid w-full max-w-2xl h-14 bg-secondary/50 p-1 rounded-none`}
                  style={{
                    gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
                  }}
                >
                  {tabs.map(tab => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="h-full text-base font-bold uppercase tracking-wide data-[state=active]:bg-primary data-[state=active]:text-white rounded-none transition-all"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {tabs.map(tab => (
                <TabsContent
                  key={tab.id}
                  value={tab.id}
                  className="mt-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  {tab.content}
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <ServiceGrid services={services} />
          )}
        </div>
      </section>

      {/* CTA Section */}
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
        />
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: "#fcfcfc" }}
            >
              {ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {ctaDescription}
            </p>
            <Link href="/contacts">
              <Button
                size="lg"
                className="bg-white text-sidebar hover:bg-white/90 font-bold uppercase tracking-wide rounded-none h-16 px-12 text-lg"
              >
                {ctaButtonLabel}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export { ServiceGrid, ServiceCard };
