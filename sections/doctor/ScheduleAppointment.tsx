import { ImageWidget } from "apps/admin/widgets.ts";
import Section from "site/components/ui/Section.tsx";

interface Props {
  title: string;
  description: string;
  backgroundImage?: ImageWidget;
  buttons?: {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
  }[];
}
export default function ScheduleAppointment(
  { title, description, buttons, backgroundImage }: Props,
) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="w-full mt-16 lg:mt-24 py-[137px] lg:py-[182px] bg-center bg-no-repeat bg-cover px-5 lg:px-0"
    >
      <div className="container mx-auto bg-base-100 flex flex-col items-center justify-center text-center py-16 lg:py-24">
        <h2 className="text-xl lg:text-[32px] font-medium uppercase">{title}</h2>
        <p className="mt-5 text-sm lg:text-xl max-w-[900px]">{description}</p>
        <div class="mt-5 flex items-center justify-center gap-[10px] flex-col lg:flex-row w-full">
          {buttons?.map((item) => (
            <a
              key={item?.id}
              id={item?.id}
              href={item?.href ?? "#"}
              target={item?.href.includes("http") ? "_blank" : "_self"}
              class={`font-normal btn btn-lg btn-primary w-full lg:h-[85px] lg:px-12 lg:w-auto ${
                item.outline && "btn-secondary"
              }`}
            >
              {item?.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;