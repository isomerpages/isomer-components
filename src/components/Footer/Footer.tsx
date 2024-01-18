import { Footer } from "@govtechsg/sgds-react/Footer"

export interface FooterProps {
  agencyName: string
  lastUpdated: Date
  items?: FooterItem[]
}

export interface FooterItem {
  title: string
  subitems?: FooterSubitem[]
  link?: string
}

export interface FooterSubitem {
  title: string
  link: string
}

const IsomerFooter = ({ agencyName, lastUpdated, items }: FooterProps) => {
  return (
    <Footer>
      <Footer.Top>
        <Footer.Top.Header headerTitle={agencyName} />
        <Footer.Top.ItemGroup>
          {items?.map((item) => {
            return (
              <Footer.Top.Item>
                <a href={item.link} className="-mt-8 font-bold">
                  {item.title}
                </a>
                {item.subitems?.map((subItem) => {
                  return <a href={subItem.link}>{subItem.title}</a>
                })}
              </Footer.Top.Item>
            )
          })}
        </Footer.Top.ItemGroup>
        <Footer.Top.ContactLinks>
          <a href="">Contact</a>
          <a href="">Feedback</a>
          <a
            href="https://www.reach.gov.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reach.gov.sg
          </a>
        </Footer.Top.ContactLinks>
      </Footer.Top>
      <Footer.Bottom>
        <Footer.Bottom.Links>
          <a
            href="https://tech.gov.sg/report_vulnerability"
            target="_blank"
            rel="noopener noreferrer"
          >
            Report Vulnerability
          </a>
          <a href="">Privacy</a>
          <a href="">Terms of use</a>
        </Footer.Bottom.Links>
        <Footer.Bottom.Copyrights>
          © {`${new Date().getFullYear()}`} {`${agencyName}`}. Last Updated{" "}
          {`${lastUpdated.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}`}
        </Footer.Bottom.Copyrights>
      </Footer.Bottom>
    </Footer>
  )
}

export default IsomerFooter
