import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const { t } = useTranslation();

  const experience = [
    {
      title: t("experience.work.globalLogic.title"),
      company: t("experience.work.globalLogic.company"),
      period: t("experience.work.globalLogic.period"),
      description: t("experience.work.globalLogic.description"),
      technologies: [
        "Angular",
        "TypeScript",
        ".NET Core",
        "Azure",
        "SQL Server",
        "Kafka",
        "Docker",
        "Powershell"
      ],
      type: "work",
    },
    {
      title: t("experience.work.smartepcMid.title"),
      company: t("experience.work.smartepcMid.company"),
      period: t("experience.work.smartepcMid.period"),
      description: t("experience.work.smartepcMid.description"),
      technologies: [
        "Angular",
        "C#",
        ".NET",
        "Entity Framework",
        "SQL Server",
        "Python",
        "FastApi",
        "Docker",
      ],
      type: "work",
    },
    {
      title: t("experience.work.smartepcJr.title"),
      company: t("experience.work.smartepcJr.company"),
      period: t("experience.work.smartepcJr.period"),
      description: t("experience.work.smartepcJr.description"),
      technologies: [
        "Python",
        "Django",
        "SQL Server",
        "Web scrapping",
        "Regex",
      ],
      type: "work",
    },
  ];

  const education = [
    {
      title: t("experience.education.master.title"),
      institution: t("experience.education.master.institution"),
      period: t("experience.education.master.period"),
      description: t("experience.education.master.description"),
      type: "education",
    },
    {
      title: t("experience.education.bachelor.title"),
      institution: t("experience.education.bachelor.institution"),
      period: t("experience.education.bachelor.period"),
      description: t("experience.education.bachelor.description"),
      type: "education",
    },
    {
      title: t("experience.education.bachelor.title"),
      institution: t("experience.education.bachelor.institution"),
      period: t("experience.education.bachelor.period"),
      description: t("experience.education.bachelor.description"),
      type: "education",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Experience & Education Timeline */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center space-x-2">
              <Briefcase className="w-6 h-6" />
              <span>{t("experience.work.title")}</span>
            </h3>
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="flex items-center space-x-1"
                    >
                      <CalendarDays className="w-3 h-3" />
                      <span className="text-xs">{exp.period}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center space-x-2">
              <GraduationCap className="w-6 h-6" />
              <span>{t("experience.education.title")}</span>
            </h3>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="animate-fade-in-up hover:shadow-lg transition-all duration-300"
                style={{
                  animationDelay: `${(index + experience.length) * 0.1}s`,
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{edu.title}</CardTitle>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="flex items-center space-x-1"
                    >
                      <CalendarDays className="w-3 h-3" />
                      <span className="text-xs">{edu.period}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
