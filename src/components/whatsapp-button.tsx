import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5571991988849"
      target="_blank"
      className="fixed bottom-6 right-6"
    >
      <Button size="lg" className="bg-green-500 hover:bg-green-600">
        WhatsApp
      </Button>
    </a>
  )
}
