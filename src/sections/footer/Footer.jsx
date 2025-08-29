import { cn } from "@/lib/utils";
import LaunchUI from "@/components/logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { ModeToggle } from "@/components/ui/mode-toggle";

/**
 * @typedef {{ text: string, href: string }} FooterLink
 * @typedef {{ title: string, links: FooterLink[] }} FooterColumnProps
 * @typedef {{
 *   logo?: React.ReactNode,
 *   name?: string,
 *   columns?: FooterColumnProps[],
 *   copyright?: string,
 *   policies?: FooterLink[],
 *   showModeToggle?: boolean,
 *   className?: string
 * }} FooterProps
 */

/**
 * @param {FooterProps} props
 */
export default function FooterSection({
  name = "Muh Saputra",
  columns = [
    {
      title: "Portfolio",
      links: [
        { text: "Web Development", href: "#portfolio" },
        { text: "Fotografi", href: "#portfolio" },
        { text: "Videografi", href: "#portfolio" },
      ],
    },
    {
      title: "About",
      links: [
        { text: "Profil", href: "#about" },
        { text: "Keahlian", href: "#about" },
        { text: "Edukasi", href: "#about" },
        { text: "pengalaman", href: "#about" },
      ],
    },
    {
      title: "Kontak",
      links: [
        { text: "Email", href: "mailto:me@muhsaputrabiz@gmail.com" },
        {
          text: "LinkedIn",
          href: "https://www.linkedin.com/in/muhamad-tri-saputra/",
        },
        { text: "GitHub", href: "https://github.com/muhsaputra" },
      ],
    },
  ],
  copyright = "© 2025 Muh Saputra. All rights reserved",
  policies = [
    { text: "Resume", href: "/MUHAMAD TRI SAPUTRA RESUME 2025.pdf" },
    { text: "Hire Me", href: "mailto:me@muhsaputrabiz@gmail.com" },
  ],
  showModeToggle = true,
  className,
}) {
  return (
    <footer className={cn("bg-background w-full px-20", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-muted-foreground text-sm hover:text-foreground transition"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
