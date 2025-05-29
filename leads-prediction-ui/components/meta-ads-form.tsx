"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Loader2, Facebook, TrendingUp } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface MetaAdsFormProps {
  onPrediction: (prediction: number) => void
  prediction: number | null
}

export function MetaAdsForm({ onPrediction, prediction }: MetaAdsFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    cost: [1000],
    reach: [10000],
    impressions: [50000],
    ctr: [2.5],
    cpc: [1.5],
    cvr: [3],
    mql: [20],
    sql: [10],
  })

  const handlePredict = async () => {
    setLoading(true)
    setError(null)

    // Simulate API call
    setTimeout(() => {
      try {
        // Mock prediction calculation
        const mockPrediction = Math.floor(Math.random() * 120) + 40
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
    <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-green-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Facebook className="w-6 h-6" />
          Meta Ads Predictor
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

        {/* Reach */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Alcance: {formData.reach[0].toLocaleString()}
          </Label>
          <Slider
            value={formData.reach}
            onValueChange={(value) => updateFormData("reach", value)}
            max={100000}
            min={1000}
            step={1000}
            className="w-full"
          />
        </div>

        {/* Impressions */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Impresiones: {formData.impressions[0].toLocaleString()}
          </Label>
          <Slider
            value={formData.impressions}
            onValueChange={(value) => updateFormData("impressions", value)}
            max={500000}
            min={5000}
            step={5000}
            className="w-full"
          />
        </div>

        {/* CTR */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">CTR: {formData.ctr[0]}%</Label>
          <Slider
            value={formData.ctr}
            onValueChange={(value) => updateFormData("ctr", value)}
            max={10}
            min={0.1}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* CPC */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            CPC: ${formData.cpc[0].toFixed(2)}
          </Label>
          <Slider
            value={formData.cpc}
            onValueChange={(value) => updateFormData("cpc", value)}
            max={5}
            min={0.1}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* CVR */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">CVR: {formData.cvr[0]}%</Label>
          <Slider
            value={formData.cvr}
            onValueChange={(value) => updateFormData("cvr", value)}
            max={15}
            min={0.1}
            step={0.1}
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

        {/* SQL */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">SQL: {formData.sql[0]}</Label>
          <Slider
            value={formData.sql}
            onValueChange={(value) => updateFormData("sql", value)}
            max={100}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Predict Button */}
        <Button
          onClick={handlePredict}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Prediciendo...
            </>
          ) : (
            <>🔮 Predecir Leads Meta</>
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
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-green-200 dark:border-green-700">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">Predicción Meta Ads:</span>
            </div>
            <div className="text-3xl font-bold text-green-600">{prediction} leads</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
