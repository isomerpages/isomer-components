import { HomePageSchema } from "~/engine"
import { Skeleton } from "../Skeleton"
import { renderComponent } from "../render"

const HomepageLayout = ({
  site,
  page,
  content,
  LinkComponent,
}: HomePageSchema) => {
  return (
    <Skeleton site={site} page={page} LinkComponent={LinkComponent}>
      <div
        // ComponentContent = "component-content" (customCssClass.ts) is imported by all Homepage components,
        // but cannot be used here as tailwind does not support dynamic class names
        className={`[&_.component-content]:max-w-[1240px] [&_.component-content]:px-6 [&_.component-content]:md:px-10 [&_.component-content]:mx-auto`}
      >
        {content.map((component) =>
          renderComponent({ component, LinkComponent }),
        )}
      </div>
    </Skeleton>
  )
}

export default HomepageLayout
