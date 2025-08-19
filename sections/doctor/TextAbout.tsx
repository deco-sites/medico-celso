import { RichText } from "apps/admin/widgets.ts";
import { useId } from "site/sdk/useId.ts";

interface Props {
  content: RichText;
  cards: {
    title: string;
    content: string;
  }[];
}
export default function TextAbout({ content, cards }: Props) {
  const id = useId();
  return (
    <div id={id} class="py-16 lg:py-24 ">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        #${id} h2{
          color: #243451;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: 32px;
          margin-bottom: 20px;
        }
        #${id} p {
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 125% */
          color: var(--bc);
        }
        #${id} h2:not(:first-of-type) {
          margin-top: 40px;
        }
        #${id} p + p{
          margin-top: 20px;
        }
        `,
        }}
      >
      </style>
      <div className="container">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        >
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full mt-5">
          {cards?.map((card, index) => (
            <div key={index} class="bg-base-200 text-base-content flex flex-col items-center justify-center text-center min-h-[250px] p-5">
              <span class="text-2xl font-semibold mb-5">{card.title}</span>
              <p class="text-base text-base-content">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
