import { ImageWidget } from "apps/admin/widgets.ts";
import { useDevice } from "@deco/deco/hooks";
import Section from "site/components/ui/Section.tsx";

interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  backgroundImage?: ImageWidget;
  backgroundImageMobile?: ImageWidget;
  cta?: CTA;
}

export default function MainHero(
  { title, backgroundImage, backgroundImageMobile, cta }: Props,
) {
  const device = useDevice();
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .hero-main-title h1{
            font-size: 36px;
            width: 100%;
            max-width: 607px;
            text-transform: uppercase;
            line-height: 40px; /* 111.111% */
            letter-spacing: 1.8px;
          }
          .hero-main-title h1 strong{
            font-weight: 800;
            font-size: 85px;
            display: block;
            line-height: 100px; /* 117.647% */
            letter-spacing: 4.25px;
            margin-top: 8px;
          }

          .hero-main-title p {
            margin-top: 10px;
            font-size: 20px;
          }
          
          @media (max-width: 1024px) {
            .hero-main-title h1{
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px; /* 111.111% */
              letter-spacing: 0.9px;
            }
            .hero-main-title h1 strong{
              font-size: 40px;
              font-style: normal;
              font-weight: 800;
              line-height: 40px; /* 100% */
              letter-spacing: 4px;
            }
          }
        `,
        }}
      />
      <div
        className="w-full bg-center bg-cover bg-no-repeat pt-16 pb-[300px] lg:py-[182px]"
        style={{
          backgroundImage: `url(${
            device === "desktop" ? backgroundImage : backgroundImageMobile
          })`,
        }}
      >
        <div className="container mx-auto">
          {title && (
            <div
              class="mb-8 hero-main-title"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          )}
          {cta && (
            <a
              key={cta?.id}
              id={cta?.id}
              href={cta?.href}
              target={cta?.href.includes("http") ? "_blank" : "_self"}
              class={`font-normal btn-primary btn btn-lg rounded-none${
                cta?.outline && "btn-outline"
              }`}
            >
              {cta?.text}
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;