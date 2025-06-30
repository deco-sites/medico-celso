import { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, SourceWithFit } from "site/components/PictureWithFit.tsx";
import { useId } from "site/sdk/useId.ts";
import { clx } from "site/sdk/clx.ts";
import { useDevice } from "@deco/deco/hooks";
import Section from "site/components/ui/Section.tsx";

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
  backgroundColor?: "primary" | "neutral" | "secondary" | "normal";
  invert?: boolean;
}
export default function ImageWithText(
  {
    title,
    content,
    images,
    cta,
    allowMargin = true,
    backgroundColor = "normal",
    invert = false,
  }: Props,
) {
  const device = useDevice()
  const id = useId();
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .content-${id} p:not(:first-of-type) {
          margin-top: 20px;
        }
        @media (min-width: 1024px) {
          .content-${id} ul{
            list-style-type: disc;
            margin-left: 20px;
          }
        }
      `,
        }}
      >
      </style>
      {(device === 'desktop' && invert)
        ? (
          <div
            class={clx(
              "relative grid grid-cols-1 lg:grid-cols-2",
              allowMargin && "mt-16 lg:mt-24",
              backgroundColor === "primary" &&
                "bg-primary text-primary-content",
              backgroundColor === "secondary" &&
                "bg-secondary text-secondary-content",
              backgroundColor === "neutral" &&
                "bg-neutral text-neutral-content",
            )}
          >
            <div className="container lg:max-w-full lg:p-24 lg:pr-2 lg:mt-0">
              <h2 className="text-[20px] lg:text-[32px] font-semibold">
                {title}
              </h2>
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
            <Picture className="">
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
          </div>
        )
        : (
          <div
            class={clx(
              "relative grid grid-cols-1 lg:grid-cols-2",
              allowMargin && "mt-16 lg:mt-24",
              backgroundColor === "primary" &&
                "bg-primary text-primary-content",
              backgroundColor === "secondary" &&
                "bg-secondary text-secondary-content",
            )}
          >
            <Picture className="">
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

            <div className="container lg:max-w-full lg:p-24 lg:pr-0 my-8 lg:my-0">
              <h2 className="text-[20px] lg:text-[32px] font-semibold">
                {title}
              </h2>
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
        )}
    </>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;