import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";

const Introduction = () => {
  const { t } = useTranslation();

  const skills = {
    frontend: [
      "Angular",
      "RxJS",
      "NgRx",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind",
      "React",
      "Redux",
    ],
    backend: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
      "RESTful APIs",
      "CQRS",
      "Kafka",  
      "MongoDB",
      "Python",
      "Fastapi"
    ],
    devops: [
      "Azure",
      "Aws (little exp)",
      "Docker",
      "Docker-compose",
      "Kubernetes",
      'Powershell'
    ],
  };

  return (
    <section id="introduction" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {t("introduction.title")}
              </h1>
              <p className="text-xl text-muted-foreground">
                {t("introduction.subtitle")}
              </p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("introduction.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                size="lg"
                className="group"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Filip_Kozlik_CV.pdf";
                  link.download = "Filip_Kozlik_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                {t("introduction.downloadCV")}
                </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() =>
                  window.open("https://github.com/sekvi99", "_blank")
                }
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                {t("introduction.viewProfile")}
              </Button>
            </div>
          </div>

          <div
            className="space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Profile Image Placeholder */}
            <div className="relative mx-auto w-64 h-64 lg:w-80 lg:h-80">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center animate-float">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">
                    <img className="rounded-full" src="/avatar.jpg" />
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent animate-pulse-soft"></div>
            </div>

            {/* Skills Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                {t("introduction.skills")}
              </h3>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2 text-primary">
                    {t("introduction.frontend")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2 text-primary">
                    {t("introduction.backend")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2 text-primary">
                    {t("introduction.devops")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.devops.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
