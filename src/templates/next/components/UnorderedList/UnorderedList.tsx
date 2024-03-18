import type { UnorderedListProps } from "~/common"
import OrderedList from "../OrderedList"
import Paragraph from "../Paragraph"

const UnorderedList = ({ items }: UnorderedListProps) => {
  return (
    <ul className="list-disc ps-8 my-2.5">
      {items.map((item) => {
        if (typeof item === "string") {
          return (
            <li key={Math.random()} className="[&_p]:inline pl-2 my-2.5">
              <Paragraph content={item} />
            </li>
          )
        } else if (item.type === "orderedlist") {
          return <OrderedList key={Math.random()} {...item} />
        } else {
          return <UnorderedList key={Math.random()} {...item} />
        }
      })}
    </ul>
  )
}

export default UnorderedList