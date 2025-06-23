import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, SourceWithFit } from "site/components/PictureWithFit.tsx";
import { useId } from "site/sdk/useId.ts";
import { clx } from "site/sdk/clx.ts";

interface Props {
  title: string
  subtitle: string
  images: {
    mobile: ImageWidget;
    desktop: ImageWidget;
  };
  cta?: {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
  };
  allowMargin?: boolean;
}
export default function ImageWithTextHero(
  { title, subtitle, images, cta, allowMargin = false }: Props,
) {
  const id = useId();
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .content-${id} p:not(:first-of-type) {
          margin-top: 20px;
        }
      `,
        }}
      >
      </style>
      <div
        class={clx(
          "relative grid grid-cols-2",
          allowMargin && "mt-16 lg:mt-24",
        )}
      >
        <Picture className="flex-1">
          <SourceWithFit
            fit="contain"
            media="(max-width: 640px)"
            src={images.mobile}
            width={500}
            height={500}
          />
          <SourceWithFit
            fit="contain"
            media="(min-width: 640px)"
            src={images.desktop}
            width={1000}
            height={1000}
          />
          <img
            src={images.desktop}
            alt={title}
            class="w-full h-full lg:object-cover"
          />
        </Picture>

        <div className="text-center lg:text-start mt-8 lg:mt-0 bg-primary text-primary-content p-16 lg:p-24 pr-0">
          <h1 className="text-[20px] lg:text-[36px] uppercase w-full lg:max-w-[600px] font-normal">{title}<strong class="text-[85px] font-extrabold block">{subtitle}</strong></h1>
          {cta && (
            <a
              key={cta?.id}
              id={cta?.id}
              href={cta?.href}
              target={cta?.href.includes("http") ? "_blank" : "_self"}
              class={`font-normal mt-8 btn btn-lg btn-primary ${
                cta.outline && "btn-outline"
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
