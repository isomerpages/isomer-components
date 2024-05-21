import type { InfopicProps } from "~/interfaces"
import Button from "../Button"
import { ComponentContent } from "../../internal/customCssClass"

const TextComponent = ({
  title,
  description,
  buttonLabel,
  buttonUrl,
  className,
}: Omit<InfopicProps, "type" | "sectionIndex" | "imageSrc" | "imageAlt"> & {
  className?: string
}) => {
  return (
    <div className={`flex flex-col gap-10 ${className ?? ""}`}>
      <div className="flex flex-col gap-4 sm:gap-6">
        <h1 className="text-2xl font-semibold text-content sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-content sm:text-lg">{description}</p>
        )}
      </div>
      {buttonLabel && buttonUrl && (
        <Button label={buttonLabel} href={buttonUrl} rightIcon="right-arrow" />
      )}
    </div>
  )
}

const ImageComponent = ({
  src,
  alt,
  className,
}: {
  src: InfopicProps["imageSrc"]
  alt: InfopicProps["imageAlt"]
  className?: string
}) => {
  return (
    <div className={`aspect-h-1 aspect-w-1 overflow-hidden ${className ?? ""}`}>
      <img
        src={src}
        alt={alt}
        className="h-full max-h-[22.5rem] w-full object-cover object-center object-center lg:max-h-[38.75rem]"
      />
    </div>
  )
}

const SideBySideInfoPic = ({
  title,
  description,
  imageAlt: alt,
  imageSrc: src,
  buttonLabel: button,
  buttonUrl: url,
  isTextOnRight,
}: InfopicProps) => {
  return (
    <>
      {/* Mobile-Tablet */}
      <div className="lg:hidden">
        <div
          className={`${ComponentContent} flex flex-col gap-14 py-16 sm:px-14 sm:py-24`}
        >
          <TextComponent
            title={title}
            description={description}
            buttonLabel={button}
            buttonUrl={url}
          />
          <ImageComponent src={src} alt={alt} />
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div
          className={`${ComponentContent} flex ${
            isTextOnRight ? "flex-row" : "flex-row-reverse"
          } gap-14 py-24`}
        >
          <ImageComponent src={src} alt={alt} className="w-1/3" />
          <TextComponent
            title={title}
            description={description}
            buttonLabel={button}
            buttonUrl={url}
            className="w-2/3"
          />
        </div>
      </div>
    </>
  )
}

const SidePartInfoPic = ({
  title,
  description,
  imageAlt: alt,
  imageSrc: src,
  buttonLabel: button,
  buttonUrl: url,
  isTextOnRight,
}: InfopicProps) => {
  return (
    <>
      {/* Mobile-Tablet */}
      <div className="lg:hidden">
        <div className="flex flex-col gap-0">
          <ImageComponent src={src} alt={alt} />
          <div className={`${ComponentContent} py-10`}>
            <TextComponent
              title={title}
              description={description}
              buttonLabel={button}
              buttonUrl={url}
            />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div
          className={`flex ${isTextOnRight ? "flex-row" : "flex-row-reverse"}`}
        >
          <ImageComponent src={src} alt={alt} className="w-1/2" />
          <div className="my-auto w-1/2 py-24 pl-10">
            <TextComponent
              title={title}
              description={description}
              buttonLabel={button}
              buttonUrl={url}
              className="max-w-screen-sm"
            />
          </div>
        </div>
      </div>
    </>
  )
}

const InfoPic = (props: InfopicProps) => {
  if (props.variant === "side-by-side") {
    return <SideBySideInfoPic {...props} />
  }
  return <SidePartInfoPic {...props} />
}

export default InfoPic
