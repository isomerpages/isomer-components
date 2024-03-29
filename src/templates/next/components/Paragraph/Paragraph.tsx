import { ParagraphProps } from "~/common"
import BaseParagraph from "../shared/Paragraph"
import { Paragraph as ParagraphStyle } from "../../typography/Paragraph"

const Paragraph = ({ content }: Omit<ParagraphProps, "type">) => {
  return (
    <BaseParagraph
      content={content}
      className={`${ParagraphStyle[1]} text-content-strong`}
    />
  )
}

export default Paragraph
