import { clx } from "site/sdk/clx.ts";
import { useId } from "site/sdk/useId.ts";

interface Props {
  cards: {
    title: string;
    description: string;
    invertColor?: boolean;
  }[];
}
export default function Cards({ cards }: Props) {
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
              color: #000;
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
        <div className={`container mx-auto slider-${id}`}>
          <div
            className={`swiper-container relative overflow-hidden`}
            id={id}
          >
            <div class="swiper-wrapper">
              {cards.map((card) => {
                return (
                  <div
                    class="swiper-slide"
                    key={card.title}
                  >
                    <div
                      key={card.title}
                      class={clx(
                        "p-8 flex flex-col gap-5 text-center items-center justify-center min-h-[250px]",
                        card.invertColor
                          ? "bg-primary text-primary-content"
                          : "bg-neutral text-neutral-content",
                      )}
                    >
                      <strong class="text-sm">{card.title}</strong>
                      <p class="text-xs">{card.description}</p>
                    </div>
                  </div>
                );
              })}
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
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              },
            });
            `,
        }}
      ></script>
    </>
  );
}
