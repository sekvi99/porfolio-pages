import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-6 mt-12 border-t border-border text-center text-muted-foreground text-sm bg-background">
      © {new Date().getFullYear()} Filip Kozlik Portfolio.{" "}
      {t("footer.rightsReserved")}.
    </footer>
  );
};

export default Footer;
