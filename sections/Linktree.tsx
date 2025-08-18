import type { ImageWidget } from "apps/admin/widgets.ts";

type Link = {
  title: string;
  url: string;
};
interface Props {
  background?: ImageWidget;
  picture?: ImageWidget;
  title?: string;
  subtitle?: string;
  links: Link[];
}
export default function Linktree(
  { picture, title, subtitle, links, background }: Props,
) {
  return (
    <div
      class="bg-cover bg-center bg-no-repeat text-base-content min-h-screen flex flex-col items-center justify-center text-white py-5"
      style={{ backgroundImage: `url('${background}')` }}
    >
      <div className="container flex flex-col text-center max-w-xl">
        <img
          class="h-[145px] w-[145px] rounded-full overflow-hidden mx-auto"
          src={picture}
          alt={title}
        />
        {title && <h1 class="text-xl mt-5">{title}</h1>}
        {subtitle && <span class="block text-center mt-5">{subtitle}</span>}
        <ul class="flex flex-col gap-5 mt-8">
          {links?.map((link, index) => (
            <li
              key={index}
              class="bg-base-100 text-[#0C2037] h-[60px] flex items-center justify-center text-center hover:opacity-60 transition-all"
            >
              <a class="w-full h-full text-center flex items-center justify-center" href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
