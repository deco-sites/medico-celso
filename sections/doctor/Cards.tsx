import { clx } from "site/sdk/clx.ts";
import { useId } from "site/sdk/useId.ts";
import Section from "site/components/ui/Section.tsx";

interface Props {
  cards: {
    title: string;
    description: string;
    modalDescription: string;
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
            className={`swiper-container relative overflow-hidden pb-10`}
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
                          : "bg-base-200 text-base-content",
                      )}
                    >
                      <strong class="text-2xl">{card.title}</strong>
                      <p class="text-base">{card.description}</p>
                      <button
                        className="text-base underline"
                        onclick={`${card.title.split(' ')[0]}.showModal()`}
                      >
                        Saiba mais
                      </button>
                      <dialog id={card.title.split(' ')[0]} className="modal">
                        <div className="modal-box bg-base-100 text-base-content">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <h3 className="font-bold text-lg">{card.title}</h3>
                          <p className="py-4">
                            {card.modalDescription}
                          </p>
                        </div>
                      </dialog>
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
      >
      </script>
    </>
  );
}

export const LoadingFallback = () => <Section.Placeholder height="635px" />;
