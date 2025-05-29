import { ThemeToggle } from "@/components/theme-toggle"
import { TrendingUp, Zap } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                Predicción de Leads
                <Zap className="w-6 h-6 text-yellow-500" />
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                Optimiza tus campañas de Google Ads & Meta Ads con IA predictiva
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
