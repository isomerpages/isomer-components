import { BiChevronDown } from "react-icons/bi"
import type { AccordionProps } from "~/interfaces"
import { Prose } from "../../native"
import { Paragraph } from "~/templates/next/typography/Paragraph"

const Accordion = ({ summary, details }: AccordionProps) => {
  return (
    <details className="[&_>_summary]:open:font-semibold [&_>_summary_>_svg]:open:rotate-180 border-y has-[+_details]:border-b-0 border-divider-medium hover:cursor-pointer">
      <summary className={`${Paragraph[1]} my-[0.125rem] px-4 py-5 flex flex-row gap-3 outline-none list-none text-content focus:ring-2 focus:ring-offset-0 focus:ring-focus-outline`}>
        {summary}
        <BiChevronDown className="ml-auto mb-auto min-w-6 text-2xl transition-all duration-200 ease-in-out" />
      </summary>

      <div className="mt-2 mb-4 ml-4 mr-6">
        <Prose content={details} />
      </div>
    </details>
  )
}

export default Accordion
