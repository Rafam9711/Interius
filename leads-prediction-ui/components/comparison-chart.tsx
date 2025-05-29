"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Trophy } from "lucide-react"

interface ComparisonChartProps {
  googlePrediction: number | null
  metaPrediction: number | null
}

export function ComparisonChart({ googlePrediction, metaPrediction }: ComparisonChartProps) {
  const maxValue = Math.max(googlePrediction || 0, metaPrediction || 0)
  const googlePercentage = googlePrediction ? (googlePrediction / maxValue) * 100 : 0
  const metaPercentage = metaPrediction ? (metaPrediction / maxValue) * 100 : 0

  const winner = googlePrediction && metaPrediction ? (googlePrediction > metaPrediction ? "google" : "meta") : null

  return (
    <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-yellow-200 dark:border-yellow-800 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-xl">
          <BarChart3 className="w-6 h-6" />
          Comparación de Predicciones
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Google Ads Bar */}
          {googlePrediction !== null && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  Google Ads
                  {winner === "google" && <Trophy className="w-4 h-4 text-yellow-500" />}
                </span>
                <span className="text-2xl font-bold text-blue-600">{googlePrediction} leads</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${googlePercentage}%` }}
                />
              </div>
            </div>
          )}

          {/* Meta Ads Bar */}
          {metaPrediction !== null && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  Meta Ads
                  {winner === "meta" && <Trophy className="w-4 h-4 text-yellow-500" />}
                </span>
                <span className="text-2xl font-bold text-green-600">{metaPrediction} leads</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${metaPercentage}%` }}
                />
              </div>
            </div>
          )}

          {/* Summary */}
          {googlePrediction !== null && metaPrediction !== null && (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-yellow-200 dark:border-yellow-700">
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Resumen:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Total Leads:</span>
                  <div className="font-bold text-lg">{googlePrediction + metaPrediction}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Diferencia:</span>
                  <div className="font-bold text-lg">{Math.abs(googlePrediction - metaPrediction)}</div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Mejor Plataforma:</span>
                  <div className={`font-bold text-lg ${winner === "google" ? "text-blue-600" : "text-green-600"}`}>
                    {winner === "google" ? "Google Ads" : "Meta Ads"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
