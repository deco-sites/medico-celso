import { ImageWidget } from "apps/admin/widgets.ts";
import { useId } from "site/sdk/useId.ts";
import Section from "site/components/ui/Section.tsx";

interface Props {
  title: string;
  subtitle: string;
  cards: {
    image: ImageWidget;
    name: string;
    ratedFrom: string;
    content: string;
  }[];
}

export default function Testimonials({ title, subtitle, cards }: Props) {
  const id = useId();
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .slider-${id} .swiper-pagination-bullet {
              background-color: oklch(var(--p));
              height: 14px;
              width: 14px;
            }
            .slider-${id} .swiper-pagination-bullet-active {
              height: 14px;
              width: 32px;
              border-radius: 999999px;
            }
            .slider-${id} :is(.swiper-button-prev, .swiper-button-next){
              background-color: oklch(var(--p));
              width: 50px;
              padding: 8px;
              height: 50px;
              border-radius: 50%;
              bottom: 0px;
              box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
              transition: all .3s;
            }
            .slider-${id} :is(.swiper-button-prev, .swiper-button-next):hover{
              opacity: 0.6;
            }
            .slider-${id} :is(.swiper-button-prev, .swiper-button-next):after{
              font-size: 26px;
              color: var(--pc);
            }
            @media (max-width: 768px) {
              .slider-${id} :is(.swiper-button-prev, .swiper-button-next){
                display: none;
              }
            }
          `,
        }}
      />
      <div class="pt-16 lg:pt-24">
        <div className={`container mx-auto slider-${id} flex flex-col`}>
          <h2 className="text-xl lg:text-[32px] font-medium uppercase text-center">
            {title}
          </h2>
          <p className="mt-5 text-sm lg:text-xl text-center">{subtitle}</p>
          <div className={"swiper-container mt-8 overflow-hidden relative pb-10"}>
            <div className="swiper-wrapper">
              {cards?.map((card) => (
                <div
                  className="swiper-slide p-10 min-h-[365px]"
                  style={{
                    boxShadow: `0px 4px 20px 0px rgba(0, 0, 0, 0.10);`,
                  }}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-5 items-center">
                      <img src={card.image} alt={card.name} />
                      <div class="flex flex-col gap-1">
                        <span class="text-2xl">{card.name}</span>
                        <p>{card.ratedFrom}</p>
                      </div>
                    </div>
                    <p>{card.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            new Swiper(".slider-${id} .swiper-container", {
              slidesPerView: 1,
              loop: true,
              navigation: {
                nextEl: ".slider-${id} .swiper-container .swiper-button-next",
                prevEl: ".slider-${id} .swiper-container .swiper-button-prev",
              },
              pagination: {
                el: ".slider-${id} .swiper-container .swiper-pagination",
                clickable: true,
              },
              breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              },
            });
            `,
        }}
      >
      </script>
    </>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;