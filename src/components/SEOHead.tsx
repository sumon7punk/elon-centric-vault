import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string; }>;
}

export const SEOHead = ({ 
  title = "Elon Musk Biography, Age, Net Worth, Career, Family (2025)",
  description = "Learn about Elon Musk – biography, age, career, net worth, achievements, family, and legacy. Complete guide to the Tesla CEO and SpaceX founder.",
  keywords = "Elon Musk, biography, Tesla, SpaceX, net worth, entrepreneur, CEO, electric cars, space exploration, Neuralink, Twitter, X",
  canonicalUrl = "https://elon-musk-biography.lovable.app",
  structuredData,
  breadcrumbs
}: SEOHeadProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Elon Musk",
    "alternateName": "Elon Reeve Musk",
    "description": "Entrepreneur, CEO of Tesla and SpaceX",
    "birthDate": "1971-06-28",
    "birthPlace": {
      "@type": "Place",
      "name": "Pretoria, South Africa"
    },
    "nationality": "American, Canadian, South African",
    "occupation": [
      "Entrepreneur",
      "Business magnate",
      "Engineer"
    ],
    "knowsAbout": [
      "Electric vehicles",
      "Space exploration",
      "Artificial intelligence",
      "Renewable energy"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Tesla, Inc.",
        "description": "CEO"
      },
      {
        "@type": "Organization", 
        "name": "SpaceX",
        "description": "CEO and CTO"
      }
    ],
    "url": canonicalUrl,
    "sameAs": [
      "https://twitter.com/elonmusk",
      "https://www.linkedin.com/in/elon-musk",
      "https://en.wikipedia.org/wiki/Elon_Musk"
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Elon Musk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Elon Musk is a South African-born American entrepreneur and business magnate, best known as the CEO of Tesla Inc. and SpaceX. He's also involved with Neuralink, The Boring Company, and formerly Twitter (now X)."
        }
      },
      {
        "@type": "Question", 
        "name": "How old is Elon Musk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Elon Musk was born on June 28, 1971, making him 52 years old as of 2024."
        }
      },
      {
        "@type": "Question",
        "name": "What is Elon Musk famous for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Elon Musk is famous for revolutionizing the electric vehicle industry with Tesla, advancing space exploration through SpaceX, and his work in artificial intelligence and neural technology."
        }
      },
      {
        "@type": "Question",
        "name": "What is Elon Musk's net worth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As of 2024, Elon Musk's net worth is estimated to be over $200 billion, making him one of the world's richest individuals."
        }
      }
    ]
  };

  const breadcrumbStructuredData = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${canonicalUrl}/elon-musk-hero.jpg`} />
      <meta property="og:site_name" content="Elon Musk Biography" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${canonicalUrl}/elon-musk-hero.jpg`} />
      <meta name="twitter:creator" content="@elonmusk" />
      
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-VJ6GPPK5V9"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VJ6GPPK5V9');
        `}
      </script>
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Elon Musk Biography Team" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google-site-verification" content="HxBe5_Qx3yG5yi1bynNtRFkQSsFG1JtFY_81ralbiGw" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
    </Helmet>
  );
};