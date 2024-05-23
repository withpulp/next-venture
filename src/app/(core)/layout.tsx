import type { ReactNode } from "react"

import { Header, Main } from "@/components"

interface CoreLayoutProps {
  children: ReactNode
}

const CoreLayout = ({ children }: CoreLayoutProps) => (
  <>
    <Header />
    <Main className="container gap-4 md:gap-6 xl:gap-8">{children}</Main>
  </>
)

export default CoreLayout
