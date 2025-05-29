"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Loader2, Search, TrendingUp } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface GoogleAdsFormProps {
  onPrediction: (prediction: number) => void
  prediction: number | null
}

export function GoogleAdsForm({ onPrediction, prediction }: GoogleAdsFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    cost: [1000],
    clicks: [500],
    conversions: [25],
    mql: [15],
    avgCpc: [2.5],
    convRate: [5],
  })

  const handlePredict = async () => {
    setLoading(true)
    setError(null)

    // Simulate API call
    setTimeout(() => {
      try {
        // Mock prediction calculation
        const mockPrediction = Math.floor(Math.random() * 100) + 50
        onPrediction(mockPrediction)
        setLoading(false)
      } catch (err) {
        setError("Error al procesar la predicción. Intenta nuevamente.")
        setLoading(false)
      }
    }, 2000)
  }

  const updateFormData = (field: string, value: number[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Search className="w-6 h-6" />
          Google Ads Predictor
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Cost */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Presupuesto (USD): ${formData.cost[0]}
          </Label>
          <Slider
            value={formData.cost}
            onValueChange={(value) => updateFormData("cost", value)}
            max={10000}
            min={100}
            step={100}
            className="w-full"
          />
        </div>

        {/* Clicks */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Clicks: {formData.clicks[0]}</Label>
          <Slider
            value={formData.clicks}
            onValueChange={(value) => updateFormData("clicks", value)}
            max={5000}
            min={50}
            step={50}
            className="w-full"
          />
        </div>

        {/* Conversions */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Conversiones: {formData.conversions[0]}
          </Label>
          <Slider
            value={formData.conversions}
            onValueChange={(value) => updateFormData("conversions", value)}
            max={500}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* MQL */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">MQL: {formData.mql[0]}</Label>
          <Slider
            value={formData.mql}
            onValueChange={(value) => updateFormData("mql", value)}
            max={200}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Avg CPC */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            CPC Promedio: ${formData.avgCpc[0].toFixed(2)}
          </Label>
          <Slider
            value={formData.avgCpc}
            onValueChange={(value) => updateFormData("avgCpc", value)}
            max={10}
            min={0.1}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Conversion Rate */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Tasa de Conversión: {formData.convRate[0]}%
          </Label>
          <Slider
            value={formData.convRate}
            onValueChange={(value) => updateFormData("convRate", value)}
            max={20}
            min={0.1}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Predict Button */}
        <Button
          onClick={handlePredict}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Prediciendo...
            </>
          ) : (
            <>🔮 Predecir Leads Google</>
          )}
        </Button>

        {/* Error Alert */}
        {error && (
          <Alert className="border-red-200 bg-red-50 dark:bg-red-950">
            <AlertDescription className="text-red-700 dark:text-red-300">{error}</AlertDescription>
          </Alert>
        )}

        {/* Prediction Result */}
        {prediction !== null && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-700">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Predicción Google Ads:</span>
            </div>
            <div className="text-3xl font-bold text-blue-600">{prediction} leads</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
