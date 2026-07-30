import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import ServicePageClient from "./ServicePageClient";

// Generate static params for all 7 service pages to enable pre-rendering
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

// Generate dynamic metadata (SEO Page Title & Meta Description)
export async function generateMetadata(props) {
  const { slug } = await props.params;
  const service = servicesData[slug];
  
  if (!service) {
    return {
      title: "Service Not Found | Moshi Moshi",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage(props) {
  const { slug } = await props.params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} />;
}

