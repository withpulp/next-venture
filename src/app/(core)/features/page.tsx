import { Link, Section } from "@/components"
import app from "@/config/app.config"

const FeaturesPage = () => (
  <>
    <Section as="header" className="justify-end gap-4 md:gap-6 xl:gap-8">
      <h1 className="mt-8 md:mt-10 xl:mt-12">Features</h1>
      <p>{app.description}</p>
    </Section>
    <Section className="gap-6 md:gap-8 xl:gap-10">
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🏎️ Fast Performance</h5>
        <p className="max-w-2xl">
          Utilizing{" "}
          <Link href="https://nextjs.org/" size="inherit" underline="always" isExternal>
            Next.js
          </Link>{" "}
          for blazing fast performance with an optimized configuration and the App Directory for enhanced productivity.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>💅 Tailored Styling</h5>
        <p className="max-w-2xl">
          Rapid UI development with{" "}
          <Link href="https://tailwindcss.com/" size="inherit" underline="always" isExternal>
            Tailwind CSS
          </Link>
          , a utility-first CSS framework designed for customizing your design faster and easier.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>✨ Code Quality</h5>
        <p className="max-w-2xl">
          Ensure clean, consistent, and error-free code with{" "}
          <Link href="https://eslint.org/" size="inherit" underline="always" isExternal>
            ESlint
          </Link>{" "}
          and{" "}
          <Link href="https://prettier.io/" size="inherit" underline="always" isExternal>
            Prettier
          </Link>
          , integrated for best practices and style consistency.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🛠️ Ultimate Type Safety</h5>
        <p className="max-w-2xl">
          Employing{" "}
          <Link href="https://www.typescriptlang.org/" size="inherit" underline="always" isExternal>
            Extremely Strict TypeScript
          </Link>{" "}
          with the <code>ts-reset</code> library for unparalleled type safety.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🚀 Seamless Workflows</h5>
        <p className="max-w-2xl">
          Pre-configured{" "}
          <Link href="https://github.com/features/actions" size="inherit" underline="always" isExternal>
            GitHub Actions
          </Link>{" "}
          for smooth development workflows, including bundle size and performance statistics.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>💯 Optimized Performance</h5>
        <p className="max-w-2xl">
          Achieve a perfect score with{" "}
          <Link
            href="https://developer.chrome.com/docs/lighthouse/overview"
            size="inherit"
            underline="always"
            isExternal
          >
            Lighthouse
          </Link>{" "}
          for your site's performance, accessibility, and SEO.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>⚙️ Next Bundle Analyzer</h5>
        <p className="max-w-2xl">
          Keep an eye on your bundle size with{" "}
          <Link href="https://www.npmjs.com/package/@next/bundle-analyzer" size="inherit" underline="always" isExternal>
            Next Bundle Analyzer
          </Link>
          , ensuring your application remains efficient and optimized.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🦺 Jest & React Testing Library</h5>
        <p className="max-w-2xl">
          For rock-solid unit and integration tests, we use{" "}
          <Link href="https://jestjs.io/" size="inherit" underline="always" isExternal>
            Jest
          </Link>{" "}
          and{" "}
          <Link href="https://testing-library.com/react" size="inherit" underline="always" isExternal>
            React Testing Library
          </Link>{" "}
          to ensure reliability and developer confidence.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🧪 Playwright</h5>
        <p className="max-w-2xl">
          Write end-to-end and integration tests like a pro with{" "}
          <Link href="https://playwright.dev/" size="inherit" underline="always" isExternal>
            Playwright
          </Link>
          , enhancing your testing capabilities and application quality.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🎉 Storybook</h5>
        <p className="max-w-2xl">
          Create, test, and showcase your components interactively with{" "}
          <Link href="https://storybook.js.org/" size="inherit" underline="always" isExternal>
            Storybook
          </Link>
          , a powerful tool for developing UI components in isolation.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🚬 Smoke Testing & Acceptance Tests</h5>
        <p className="max-w-2xl">
          Ensure the integrity of your deployments with comprehensive smoke testing and acceptance tests, crucial for
          maintaining high-quality production environments.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🦊 Husky for Git Hooks</h5>
        <p className="max-w-2xl">
          Simplify your Git hooks management with{" "}
          <Link href="https://typicode.github.io/husky/" size="inherit" underline="always" isExternal>
            Husky
          </Link>
          , making pre-commit checks and other git hooks easy and efficient.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🚫 Lint-staged</h5>
        <p className="max-w-2xl">
          Automate running linters on Git staged files with{" "}
          <Link href="https://github.com/lint-staged/lint-staged" size="inherit" underline="always" isExternal>
            Lint-staged
          </Link>
          , ensuring code quality before commits are even made.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🚓 Commitlint</h5>
        <p className="max-w-2xl">
          Maintain clean and consistent git commit messages with{" "}
          <Link href="https://commitlint.js.org/" size="inherit" underline="always" isExternal>
            Commitlint
          </Link>
          , aiding in automated changelog generation and project maintainability.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>💡 Absolute Imports</h5>
        <p className="max-w-2xl">
          Simplify your import statements and decrease complexity with Absolute Imports, leveraging the `@` prefix to
          streamline your project's structure and import process.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🏄 Next UI</h5>
        <p className="max-w-2xl">
          Build beautiful, fast, and modern user interfaces with{" "}
          <Link href="https://nextui.org/" size="inherit" underline="always" isExternal>
            Next UI
          </Link>
          , a React UI library that's designed for the future of interface design.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🎨 Tailwind Variants</h5>
        <p className="max-w-2xl">
          Unlock the full potential of Tailwind CSS with custom variants, enabling a more expressive and dynamic design
          system for your projects.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>📝 Automated Package Patching</h5>
        <p className="max-w-2xl">
          Manage external dependencies with ease using Automated Package Patching, ensuring your projects stay up to
          date and secure without manual oversight.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>📈 Components Coupling and Cohesion Graphs</h5>
        <p className="max-w-2xl">
          Visualize and manage your component relationships with Components Coupling and Cohesion Graphs, helping to
          maintain a clean and efficient architecture.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🤖 Automated ChatGPT Code Reviews</h5>
        <p className="max-w-2xl">
          Stay on the cutting edge with AI-powered code reviews from Automated ChatGPT, enhancing code quality and
          development practices for solo developers and startups.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>🎁 Semantic Release</h5>
        <p className="max-w-2xl">
          Streamline your release process with Semantic Release, automating changelog generation and versioning with a
          high level of precision and efficiency.
        </p>
      </div>
      <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
        <h5>💻 T3 Env</h5>
        <p className="max-w-2xl">
          Manage your environment variables effortlessly with T3 Env, providing a robust and secure method to handle
          configuration across different environments.
        </p>
      </div>
    </Section>
  </>
)

export default FeaturesPage
