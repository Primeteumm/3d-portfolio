const config = {
  title: "Enes Aydın | Student Developer",
  description: {
    long: "Explore the portfolio of Enes, a third-year Computer Engineering student who turns ideas into things people can actually use: web and mobile apps, games, developer utilities and open-source tools like Screenshot Enhancer. Let's build something amazing together!",
    short:
      "Discover the portfolio of Enes, a Computer Engineering student building web apps, games and open-source developer tools.",
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
    "TypeScript",
    "Flutter",
    "Python",
    "Electron",
    "Unity",
    "Godot",
    "open source"
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
