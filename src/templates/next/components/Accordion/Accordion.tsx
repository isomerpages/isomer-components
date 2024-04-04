import { BiChevronDown } from "react-icons/bi"
import { AccordionProps } from "~/common"
import BaseParagraph from "../shared/Paragraph"
import { Paragraph } from "../../typography/Paragraph"
import Image from "../Image"
import OrderedList from "../OrderedList"
import UnorderedList from "../UnorderedList"

const Accordion = ({ summary, details }: AccordionProps) => {
  return (
    <details className="[&_>_summary]:open:font-semibold [&_>_summary_>_svg]:open:rotate-180 border-y has-[+_details]:border-b-0 border-divider-medium">
      <summary className="my-2 px-4 py-3 flex flex-row gap-3 outline-none list-none focus:ring-2 focus:ring-offset-0 focus:ring-focus-outline">
        {summary}
        <BiChevronDown className="ml-auto mb-auto min-w-6 text-2xl transition-all duration-200 ease-in-out" />
      </summary>

      <div className="mt-2 mb-4 ml-4 mr-6">
        {details.map((detail, index) => {
          if (typeof detail === "string") {
            return (
              <BaseParagraph
                content={detail}
                className={`text-content ${Paragraph[1]}`}
              />
            )
          } else if (detail.type === "image") {
            return <Image key={index} {...detail} />
          } else if (detail.type === "orderedlist") {
            return <OrderedList key={index} {...detail} />
          } else if (detail.type === "unorderedlist") {
            return <UnorderedList key={index} {...detail} />
          } else {
            return <></>
          }
        })}
      </div>
    </details>
  )
}

export default Accordion
