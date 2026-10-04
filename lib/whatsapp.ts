import { siteConfig } from './site.config';

/**
 * Returns a wa.me URL with pre-filled message text.
 * @param message The message text to pre-fill
 * @param number Optional phone number overriding the default in siteConfig
 */
export function getWhatsAppLink(message: string, number?: string): string {
  const phone = number || siteConfig.contact.whatsapp;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function getGeneralConsultationLink(): string {
  return getWhatsAppLink(
    `Hi Nivaas, I would like to book a free design consultation for my home in ${siteConfig.brand.city}.`
  );
}

export function getPackageQuoteLink(packageName: string, price: string): string {
  return getWhatsAppLink(
    `Hi Nivaas, I am interested in the ${packageName} package (${price}) for my home in ${siteConfig.brand.city}. Please share more details and arrange a site visit.`
  );
}

export function getProjectInquiryLink(projectName: string, location: string): string {
  return getWhatsAppLink(
    `Hi Nivaas, I loved your "${projectName}" project in ${location}. I'd love to discuss a similar interior design for my space.`
  );
}

export function getServiceInquiryLink(serviceName: string): string {
  return getWhatsAppLink(
    `Hi Nivaas, I'm looking for ${serviceName} interior design in ${siteConfig.brand.city}. Could we connect?`
  );
}
