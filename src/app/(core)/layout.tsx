import type { ReactNode } from "react"

import { Header, Main } from "@/components"

interface CoreLayoutProps {
  children: ReactNode
}

const CoreLayout = ({ children }: CoreLayoutProps) => (
  <>
    <Header />
    <Main className="container gap-unit-4 md:gap-unit-6 xl:gap-unit-8">{children}</Main>
  </>
)

export default CoreLayout
