const config = {
  title: "Enes Aydın | Student Developer",
  description: {
    long: "Explore the portfolio of Enes, a student developer and creative technologist specializing in interactive web experiences, Mobile Apps, and innovative projects. Discover my latest work. Let's build something amazing together!",
    short:
      "Discover the portfolio of Enes, a student developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Enes",
    "portfolio",
    "student developer",
    "creative developer",
    "web development",
    "Mobile Apps",
    "web design",
    "React",
    "Next.js",
    "Java",
    "Flutter",
    "Python"
  ],
  author: "Enes Aydın",
  email: "aydinenes.dev@gmail.com",
  site: "https://enesaydin.site",

  // for github stars button
  githubUsername: "Primeteumm",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/enes-ayd%C4%B1n-3594773a0/",
    instagram: "https://www.instagram.com/eness_aydiin",
    twitter: "",
    github: "https://github.com/Primeteumm",
  },
};
export { config };
