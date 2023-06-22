const title = "GrowBike";
const description = "Rent the best bike wherever you are!";
const url = process.env.NEXT_PUBLIC_CLIENT_BASE_URL;

const SEO = {
  title,
  description,
  titleTemplate: "%s | GrowBike",
  canonical: url,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: url,
    title,
    description,
    images: [
      {
        url: `${url}/static/images/main.png`,
        alt: title,
        width: 600,
        height: 600,
        type: "image/jpeg",
      },
    ],
    site_name: "growbike",
  },
};

export default SEO;
