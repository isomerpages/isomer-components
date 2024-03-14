import type { OrderedListProps } from "~/common"
import UnorderedList from "../UnorderedList"
import Paragraph from "../Paragraph"

const OrderedList = ({ start, items }: OrderedListProps) => {
  return (
    <ol className="list-decimal ps-8 my-1" start={start}>
      {items.map((item) => {
        if (typeof item === "string") {
          return (
            <li key={Math.random()} className="[&_p]:inline pl-2 my-1">
              <Paragraph content={item} />
            </li>
          )
        } else if (item._kind === "OrderedList") {
          return <OrderedList key={Math.random()} {...item} />
        } else {
          return <UnorderedList key={Math.random()} {...item} />
        }
      })}
    </ol>
  )
}

export default OrderedList
