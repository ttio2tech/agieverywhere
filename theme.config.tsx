import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Link from 'next/link'

const config: DocsThemeConfig = {
  logo: <span>AGIeverywhere</span>,
  project: {
    link: 'https://github.com/ttio2tech/agieverywhere',
  },
  banner: {
    key: 'docs-launch1',
    text: (
      <div className="flex justify-center items-center gap-2">
        Welcome to our website! 👋 Please subscribe to<Link href="https://www.youtube.com/@tech-practice9805?sub_confirmation=1" target='blank'>youtube channel</Link> 
      </div>
    ),
  },
  chat: {
    link: 'https://discord.com/invite/SgmBydQ2Mn',
  },
  docsRepositoryBase: 'https://github.com/ttio2tech/agieverywhere',
  footer: {
    text: `${new Date().getFullYear()} © AGIeverywhere.com`,
  },
}

export default config
