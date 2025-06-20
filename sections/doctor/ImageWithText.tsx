import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, SourceWithFit } from "site/components/PictureWithFit.tsx";
import { useId } from "site/sdk/useId.ts";
import { clx } from "site/sdk/clx.ts";

interface Props {
  title: string;
  /** @format rich-text */
  content: string;
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
export default function ImageWithText(
  { title, content, images, cta, allowMargin = true }: Props,
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
          "relative flex overflow-hidden flex-col lg:flex-row",
          allowMargin && "mt-16 lg:mt-24",
        )}
      >
        <Picture className="lg:absolute left-0 top-0 lg:w-1/2 h-full z-0">
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
            class="w-full lg:object-cover"
          />
        </Picture>

        <div className="container mx-auto lg:pl-[40%] text-center lg:text-start mt-8 lg:mt-0">
          <h2 className="text-[20px] lg:text-[32px] font-semibold">{title}</h2>
          <div
            class={`mt-8 content-${id}`}
            dangerouslySetInnerHTML={{ __html: content }}
          >
          </div>
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
