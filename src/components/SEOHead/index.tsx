import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export function SEOHead({
  title = "Timer Pomodoro - Gerencie seu tempo com eficiência",
  description = "Aplicativo moderno para gerenciamento de tempo usando a técnica Pomodoro. Aumente sua produtividade com ciclos de foco e descanso.",
  keywords = "pomodoro, timer, produtividade, gestão de tempo, foco, concentração, trabalho, estudo",
  canonicalUrl = "https://focoflowpomodoro.netlify.app/",
  ogImage = "https://focoflowpomodoro.netlify.app/src/assets/Logo.svg",
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
