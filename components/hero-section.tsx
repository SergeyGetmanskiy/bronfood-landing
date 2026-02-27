import { ShoppingBag, Clock, CreditCard } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row">
          <div className="m-auto">
            <Image className="" src="/landing/mobileApp.png" alt="Bronfood mobile app" width={200} height={300} />
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <ShoppingBag className="size-3.5" />
              {"Заказ еды на вынос"}
            </span>

            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {"Bronfood — сервис заказа еды на вынос"}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {"Цифровая платформа для предварительного заказа еды на вынос (самовывоз) из кофеен и заведений общественного питания."}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<ShoppingBag className="size-5" />}
            title="Оформите заказ онлайн"
            description="Выберите заведение, сформируйте заказ и оплатите банковской картой."
          />
          <FeatureCard
            icon={<CreditCard className="size-5" />}
            title="Оплатите картой"
            description="Безопасная онлайн-оплата через сертифицированного платёжного провайдера."
          />
          <FeatureCard
            icon={<Clock className="size-5" />}
            title="Заберите без очереди"
            description="Заберите заказ в выбранное время без ожидания в очереди."
          />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          {"Bronfood не является службой доставки и не осуществляет курьерскую деятельность."}
        </p>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-sm">
      <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        {icon}
      </div>
      <h3 className="mb-2 text-sm font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
