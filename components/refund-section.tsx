import { RotateCcw, XCircle, AlertTriangle, Wrench, Info } from "lucide-react"

const refundCases = [
  {
    icon: <XCircle className="size-5" />,
    title: "Отмена заведением",
    description: "Отмена заказа заведением.",
  },
  {
    icon: <AlertTriangle className="size-5" />,
    title: "Невозможность исполнения",
    description: "Невозможность исполнения заказа.",
  },
  {
    icon: <Wrench className="size-5" />,
    title: "Технический сбой",
    description: "Технический сбой оплаты.",
  },
]

export function RefundSection() {
  return (
    <section id="refund-rules" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Возврат денежных средств"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {"Условия и порядок возврата"}
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <RotateCcw className="size-5 text-accent" />
            <h3 className="text-base font-semibold text-foreground">
              {"Возврат средств возможен в следующих случаях:"}
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {refundCases.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-accent/40 hover:shadow-sm"
              >
                <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                  {c.icon}
                </div>
                <h4 className="mb-1 text-sm font-semibold text-foreground">{c.title}</h4>
                <p className="text-sm text-muted-foreground">{c.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-5">
            <p className="text-sm leading-relaxed text-foreground">
              {"Возврат денежных средств осуществляется на банковскую карту пользователя через платёжного провайдера в сроки, установленные правилами платёжных систем."}
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-border bg-secondary/50 p-5">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 size-4 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"В случае получения заказа клиентом возврат средств не производится."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
