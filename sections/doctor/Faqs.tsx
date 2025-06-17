interface Props {
  title: string;
  faqs: {
    title: string;
    content: string;
  }[];
}
export default function FAQs({ title, faqs }: Props) {
  return (
    <div class="bg-primary text-primary-content w-full mt-16 lg:mt-24 py-16 lg:py-[182px]">
      <div className="container mx-auto">
        <h2 class="text-[32px] text-center uppercase">{title}</h2>
        <div class="space-y-9 mt-5">
          {faqs.map((faq, index) => (
            <details key={index} class="group">
              <summary class="flex justify-between items-center cursor-pointer text-xl font-medium list-none bg-base-100 text-base-content px-[50px] py-9">
                <span>{faq.title}</span>

                <div class="relative w-[31px] h-[31px]">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="w-[20px] h-[3px] bg-base-content"></div>
                  </div>

                  <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-open:opacity-0">
                    <div class="w-[3px] h-[20px] bg-base-content"></div>
                  </div>
                </div>
              </summary>
              <div class="text-2xl text-primary-content mt-9 px-[50px]">
                {faq.content}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
