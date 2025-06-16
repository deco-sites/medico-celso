import { type ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Section from "../../components/ui/Section.tsx";
import { clx } from "../../sdk/clx.ts";
import { SourceWithFit } from "../../components/PictureWithFit.tsx";

export interface Props {
  images: {
    mobile: ImageWidget;
    desktop: ImageWidget;
  };
  /** @title Como o banner deve se comportar? */
  size?: "fit" | "full";
  allowMargin?: boolean;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title?: string;
    /** @description Image text subtitle */
    subTitle?: string;
    /** @description Button label */
    label?: string;
  };
}

function Banner({ images, action, size = "fit", allowMargin = true }: Props) {
  return (
    <a
      href={action?.href ?? "#"}
      aria-label={action?.label}
      class={clx("relative block overflow-y-hidden w-full", 
        allowMargin && "mt-16"
      )}
    >
      <div
        class={clx(
          size === "full" ? "w-full" : "container",
        )}
      >
        <Picture>
          <SourceWithFit
            fit="contain"
            media="(max-width: 640px)"
            src={images.mobile}
            width={335}
            height={572}
          />
          <SourceWithFit
            fit="contain"
            media="(min-width: 640px)"
            src={images.desktop}
            width={1200}
            height={500}
          />
          <img
            src={images.desktop}
            alt={action?.title}
            class="w-full object-cover"
          />
        </Picture>
      </div>
    </a>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;

export default Banner;
