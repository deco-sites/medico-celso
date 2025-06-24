import Section from "site/components/ui/Section.tsx";

export default function Footer() {
  return (
    <footer class="bg-secondary text-secondary-content">
      <div className="container mx-auto flex items-center justify-center py-2 lg:py-5 text-lg gap-1 lg:gap-8 flex-col lg:flex-row">
        <span>Todos os direitos reservados</span>
        <div class="hidden lg:block h-[20px] w-[2px] bg-secondary-content"></div>
        <a
          href="https://www.beepdigital.com.br/?utm_source=personalizado&utm_medium=rodape&utm_campaign=LandingPageCelsoSavioliOtorrinolaringologista"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por: Beep digital
        </a>
      </div>
    </footer>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="200px" />;