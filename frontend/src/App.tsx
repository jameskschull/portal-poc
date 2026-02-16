import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "@/components/Layout"
import Onboarding from "@/pages/Onboarding"
import Eligibility from "@/pages/Eligibility"
import Account from "@/pages/Account"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Navigate to="/onboarding" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
