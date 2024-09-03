import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter py-10 bg-gray-10">
      <div className="padding-container max-container flex w-full flex-col gap-8">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/unifi-logo-footer.png" alt="logo" width={120} height={100} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 text-sm text-gray-50'>
            {FOOTER_LINKS.map((columns, colIndex) => (
              <FooterColumn title={columns.title} key={colIndex}>
                <ul className="flex flex-col gap-4 text-gray-30 font-light">
                  {columns.links.map((link, linkIndex) => (
                    <Link 
                      href={link} 
                      key={`${colIndex}-${linkIndex}`} 
                      className="hover:text-gray-90 hover:underline"
                    >
                      {columns.semititle[linkIndex]}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title} key="contact-info">
                {FOOTER_CONTACT_INFO.links.map((link, linkIndex) => (
                  <Link
                    href="/contact-us"
                    key={`${link.label}-${linkIndex}`}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap text-gray-600">
                      {link.label}:
                    </p>
                    <p className="whitespace-nowrap text-gray-30">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
  <FooterColumn title={SOCIALS.title} key="socials">
    <ul className="regular-14 flex gap-4 text-gray-30">
      {SOCIALS.icons.map((social, socialIndex) => (
        <Link href={social.href} key={`${socialIndex}-${social.icon}`} target="_blank" rel="noopener noreferrer">
          <Image src={social.icon} alt={`${social.href} logo`} width={24} height={24} />
        </Link>
      ))}
    </ul>
  </FooterColumn>
</div>

          </div>
        </div>

        <div className="border border-gray-300" />
        <div>
          <p className="regular-14 w-full text-center text-gray-30">©2024 UniFi | All rights reserved.</p>
          <p className="regular-14 w-full text-center text-gray-30">created by Mounsif Derhay</p>
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-semibold whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
