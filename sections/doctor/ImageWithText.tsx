import { ImageWidget, RichText } from "apps/admin/widgets.ts";
import { Picture, SourceWithFit } from "site/components/PictureWithFit.tsx";
import { useId } from "site/sdk/useId.ts";
import { clx } from "site/sdk/clx.ts";
import { useDevice } from "@deco/deco/hooks";
import Section from "site/components/ui/Section.tsx";

type Item = {
  title: string;
  /** @format rich-text */
  content: string;
};
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
  accordion?: {
    title: string;
    /** @format rich-text */
    content: RichText;
  }[];
  textBox?: RichText
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
    accordion,
    textBox
  }: Props,
) {
  const device = useDevice();
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
      <div>
        <div className="container">
          {(device === "desktop" && invert)
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
                <div className="lg:max-w-full text-center lg:text-start p-5 my-8 lg:my-0 lg:p-24 lg:mt-0 flex lg:items-start justify-center flex-col">
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

                <div className="lg:max-w-full text-center lg:text-start p-5 lg:p-24 my-8 lg:my-0 flex lg:items-start justify-center flex-col">
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
        </div>
        <div class="mb-8 container">
          {accordion?.length > 0 && (
            <div className="mt-8 space-y-8">
              {accordion.map((item, index) => (
                <details key={index} class="group">
                  <summary class="flex justify-between items-center cursor-pointer lg:text-xl font-medium list-none bg-base-200 text-base-content p-5 lg:px-8 lg:py-9">
                    <span>{item.title}</span>

                    <div class="relative w-[31px] h-[31px]">
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-[20px] h-[3px] bg-base-content"></div>
                      </div>

                      <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-open:opacity-0">
                        <div class="w-[3px] h-[20px] bg-base-content"></div>
                      </div>
                    </div>
                  </summary>
                  <div class="lg:text-xl text-content p-5">
                    <div
                      class={`content-${id}`}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    >
                    </div>
                  </div>
                </details>
              ))}
            </div>
          )}
          {textBox && (
            <div class="p-8 bg-base-200 text-base-content mt-8">
              <div
                class={`content-${id}`}
                dangerouslySetInnerHTML={{ __html: textBox }}
              >
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;
