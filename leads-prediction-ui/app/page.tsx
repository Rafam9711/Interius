"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { GoogleAdsForm } from "@/components/google-ads-form"
import { MetaAdsForm } from "@/components/meta-ads-form"
import { ComparisonChart } from "@/components/comparison-chart"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [googlePrediction, setGooglePrediction] = useState<number | null>(null)
  const [metaPrediction, setMetaPrediction] = useState<number | null>(null)

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Header />

        <main className="container mx-auto px-4 py-8 space-y-8">
          {/* Forms Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GoogleAdsForm onPrediction={setGooglePrediction} prediction={googlePrediction} />
            <MetaAdsForm onPrediction={setMetaPrediction} prediction={metaPrediction} />
          </div>

          {/* Comparison Section */}
          {(googlePrediction !== null || metaPrediction !== null) && (
            <ComparisonChart googlePrediction={googlePrediction} metaPrediction={metaPrediction} />
          )}
        </main>
      </div>
    </ThemeProvider>
  )
}
