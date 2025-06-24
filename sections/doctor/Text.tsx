import { clx } from "site/sdk/clx.ts";
import Section from "site/components/ui/Section.tsx";

interface Props {
  title: string;
  /** @format rich-text */
  content: string;
  primaryBackground?: boolean;
  textCenter?: boolean;
}
export default function Text(
  { title, content, primaryBackground = false, textCenter = false }: Props,
) {
  return (
    <div
      class={clx(
        "py-16 lg:py-24",
        primaryBackground && "bg-primary text-primary-content",
        textCenter && "text-center",
      )}
    >
      <div className="container">
        <h2 className="text-[20px] lg:text-[32px] font-semibold">{title}</h2>
        <div
          class={`mt-8`}
          dangerouslySetInnerHTML={{ __html: content }}
        >
        </div>
      </div>
    </div>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;