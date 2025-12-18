import ServicePageTemplate, {
  ServiceGroup,
} from "@/components/ServicePageTemplate";
import {
  Calculator,
  FileText,
  Briefcase,
  Users,
  Building2,
  Scale,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Accounting() {
  const services: ServiceGroup[] = [
    {
      id: "ip-registration",
      title: "Регистрация ИП",
      icon: FileText,
      items: [
        "Подготовка документов",
        "Подача в налоговую",
        "Открытие расчетного счета",
      ],
    },
    {
      id: "ip-accounting",
      title: "Бухгалтерское обслуживание ИП",
      icon: Calculator,
      items: [
        "Ведение учета на УСН, ПСН, ОСНО, ЕСХН",
        "Нулевая отчётность при отсутствии деятельности",
        "Расчет налогов и сдача деклараций",
      ],
    },
    {
      id: "ooo-registration",
      title: "Регистрация ООО",
      icon: Building2,
      items: [
        "Помощь в выборе кодов ОКВЭД",
        "Подготовка устава и решения о создании",
        "Регистрация в налоговой",
      ],
    },
    {
      id: "ooo-accounting",
      title: "Полное сопровождение ООО",
      icon: Briefcase,
      items: [
        "Ведение бухучета на УСН, ОСНО, ЕСХН",
        "Работа с ВЭД",
        "Квартальная и годовая отчётность",
      ],
    },
    {
      id: "hr-payroll",
      title: "Кадры и зарплата",
      icon: Users,
      items: [
        "Кадровое делопроизводство (приём, увольнение)",
        "Расчёт зарплаты, больничных, отпускных",
        "Отчетность в СФР (ПФР + ФСС)",
      ],
    },
    {
      id: "legal-support",
      title: "Юридическое сопровождение",
      icon: Scale,
      items: [
        "Правовая экспертиза договоров",
        "Внесение изменений в ЕГРЮЛ/ЕГРИП",
        "Консультации по законодательству",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Бухгалтерские услуги для ИП и ООО — УЦ Свободный Сокол</title>
        <meta
          name="description"
          content="Бухгалтерское сопровождение бизнеса в Липецке: регистрация ИП и ООО, ведение учёта, налоговая отчётность, кадровый учёт"
        />
      </Helmet>
      <ServicePageTemplate
        directionNumber="01"
        directionIcon={Calculator}
        title={
          <>
            Бухгалтерия для <br />
            ИП и ООО
          </>
        }
        description="Профессиональное сопровождение вашего бизнеса. Мы берем на себя всю рутину, чтобы вы могли сосредоточиться на развитии компании."
        heroImage={`${import.meta.env.BASE_URL}images/accounting-card.jpg`}
        ctaButtonText="Связаться с нами"
        services={services}
        ctaTitle="Готовы обсудить сотрудничество?"
        ctaDescription="Свяжитесь с нами для получения подробной консультации по бухгалтерскому обслуживанию вашего бизнеса."
        ctaButtonLabel="Перейти к контактам"
      />
    </>
  );
}
