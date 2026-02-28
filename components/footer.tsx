import { Mail, Phone, MapPin, Building2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const legalLinks = [
  { label: "Публичная оферта", href: "/landing/Bronfood_Oferta.docx" },
  { label: "Пользовательское соглашение", href: "/landing/Bronfood_User_Agreement.docx" },
  { label: "Политика конфиденциальности", href: "/landing/Bronfood_Privacy_Policy.docx" },
  { label: "Правила возврата", href: "#refund-rules" },
]

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-6 text-lg font-bold">Bronfood</h3>
            <div className="flex flex-col gap-4 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 size-4 shrink-0" />
                <span>
                  {"ТОО «Бронфуд»"}
                  <br />
                  {"БИН: 240340023652"}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="sr-only">{"Руководитель"}</span>
                <span className="ml-7">
                  {"Руководитель: АМАНЖОЛОВ АЛЬКЕЙ ЖУМАНОВИЧ"}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              {"Контакты"}
            </h3>
            <div className="flex flex-col gap-4 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {"Казахстан, город Астана, район Алматы,"}
                  <br />
                  {"улица Шәмші Қалдаяқов, дом 1, кв. 3,"}
                  <br />
                  {"почтовый индекс Z01B9H2"}
                </span>
              </div>
              <a
                href="tel:+77028363777"
                className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
              >
                <Phone className="size-4 shrink-0" />
                {"+7 702 836 37 77"}
              </a>
              <a
                href="mailto:bronfood.main@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
              >
                <Mail className="size-4 shrink-0" />
                {"bronfood.main@gmail.com"}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              {"Документы"}
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Legal documents">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.href !== "#refund-rules" ? "" : null}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            {"© 2024–2026 ТОО «Бронфуд». Все права защищены."}
          </p>
          <div className="flex items-center gap-4">
            <span className="rounded-md border border-primary-foreground/20 px-3 py-1 text-xs font-medium text-primary-foreground/60">
              Visa
            </span>
            <span className="rounded-md border border-primary-foreground/20 px-3 py-1 text-xs font-medium text-primary-foreground/60">
              Mastercard
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
