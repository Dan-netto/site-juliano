import { cn } from "@/lib/utils"

export function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="border p-6 rounded-xl hover:shadow-lg transition-shadow bg-white">
      <Icon className="w-10 h-10 text-indigo-600 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
