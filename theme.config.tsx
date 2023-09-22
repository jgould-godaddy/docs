import React from 'react'
import Image from 'next/image'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { BsTwitter } from 'react-icons/bs';

const config: DocsThemeConfig = {
  logo: <span style={{display: "flex", alignItems: "center"}}><Image alt="logo" width={30} height={30} src="/docs/logo-400x400-rounded.png" />&nbsp;<b>Pipeless</b></span>,
  logoLink: 'https://pipeless.ai',
  primaryHue: 297, // Equivalent to #701a75
  project: {
    link: 'https://github.com/miguelaeh/pipeless',
  },
  chat: {
    link: 'https://twitter.com/pipeless_ai',
    icon: <BsTwitter size={25} />
  },
  docsRepositoryBase: 'https://github.com/pipeless/docs',
  footer: {
    text: <p>Pipeless Docs - Copyright &copy; 2023</p>,
  },
  search: {
    loading: "Loading...",
  },
  head: (
    <>
      <meta property="og:image" content="https://www.pipeless.ai/docs/logo-400x400-rounded.png" />
      <meta property="og:title" content="Pipeless Documentation" />
      <meta property="og:description" content="Documentation about the Pipeless computer vision framework" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Pipeless'
    }
  }
}

export default config
