import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { HomepageSectionWrapper } from "../HomepageSectionWrapper"
import type { InfopicProps } from "~/common"

const InfopicContentWrapper = ({
  children,
  shouldShowMobile,
}: {
  children: JSX.Element | JSX.Element[]
  shouldShowMobile: boolean
}) => (
  <div
    className={`mx-auto px-6 py-12 md:grid md:grid-cols-2 md:gap-x-16 md:p-16 xl:max-w-7xl ${
      shouldShowMobile ? "md:hidden" : "hidden"
    }`}
  >
    {children}
  </div>
)

const TextComponent = ({
  title,
  subtitle,
  description,
  buttonLabel,
  buttonUrl,
}: Omit<InfopicProps, "sectionIndex" | "imageSrc" | "imageAlt" | "type">) => {
  return (
    <div className="flex flex-col gap-4 lg:px-8">
      {subtitle && (
        <p className="text-subtitle uppercase tracking-widest">{subtitle}</p>
      )}
      <h1 className="text-site-secondary text-5xl font-semibold">{title}</h1>
      {description && <p className="text-paragraph text-xl">{description}</p>}
      {buttonLabel && buttonUrl && (
        <div className="text-lg font-semibold uppercase tracking-wid">
          <a
            className="flex gap-2 text-site-secondary font-semibold underline uppercase"
            href={buttonUrl}
            target={buttonUrl.startsWith("http") ? "_blank" : undefined}
            rel={
              buttonUrl.startsWith("http")
                ? "noopener noreferrer nofollow"
                : undefined
            }
          >
            {buttonLabel}

            <div className="my-auto">
              <ArrowRightIcon className="text-site-secondary size-5" />
            </div>
          </a>
        </div>
      )}
    </div>
  )
}

const ImageComponent = ({
  src,
  alt,
}: {
  src: InfopicProps["imageSrc"]
  alt: InfopicProps["imageAlt"]
}) => {
  return (
    <div className="mt-12 md:row-span-2 md:mt-0">
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  )
}

const InfoPic = ({
  sectionIndex,
  title,
  subtitle,
  description,
  imageAlt: alt,
  imageSrc: src,
  buttonLabel: button,
  buttonUrl: url,
  isTextOnRight,
}: InfopicProps) => {
  return (
    <HomepageSectionWrapper sectionIndex={sectionIndex}>
      <InfopicContentWrapper shouldShowMobile={false}>
        {isTextOnRight ? (
          <>
            <ImageComponent src={src} alt={alt} />
            <TextComponent
              title={title}
              subtitle={subtitle}
              description={description}
              buttonLabel={button}
              buttonUrl={url}
            />
          </>
        ) : (
          <>
            <TextComponent
              title={title}
              subtitle={subtitle}
              description={description}
              buttonLabel={button}
              buttonUrl={url}
            />
            <ImageComponent src={src} alt={alt} />
          </>
        )}
      </InfopicContentWrapper>
      <InfopicContentWrapper shouldShowMobile>
        <TextComponent
          title={title}
          subtitle={subtitle}
          description={description}
          buttonLabel={button}
          buttonUrl={url}
        />
        <ImageComponent src={src} alt={alt} />
      </InfopicContentWrapper>
    </HomepageSectionWrapper>
  )
}

export default InfoPic
