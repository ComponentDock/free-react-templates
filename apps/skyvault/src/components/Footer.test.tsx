import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { FooterLinks } from './FooterLinks'

describe('FooterLinks', () => {
  it('renders four mint-titled columns with 6/5/4/3 links', () => {
    const { container } = render(<FooterLinks />)

    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles.map((title) => title.textContent)).toEqual([
      'Hosting',
      'Domain names',
      'For resellers',
      'Help & support',
    ])
    titles.forEach((title) => expect(title).toHaveClass('text-[20px]', 'font-bold', 'text-mint'))

    const lists = Array.from(container.querySelectorAll('ul'))
    expect(lists.map((list) => list.querySelectorAll('a').length)).toEqual([6, 5, 4, 3])
    expect(lists[0]).toHaveClass('mt-[36px]', 'gap-[14px]')
  })

  it('points every link in at the matching in-page anchor with a mint hover', () => {
    const { container } = render(<FooterLinks />)

    const links = Array.from(container.querySelectorAll('a'))
    expect(links).toHaveLength(18)
    links.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/^#/)
      expect(link).toHaveClass('text-[15px]', 'text-white', 'hover:text-mint')
    })

    expect(container.querySelectorAll('a[href="#plans"]')).toHaveLength(10)
    expect(container.querySelectorAll('a[href="#home"]')).toHaveLength(5)
    expect(container.querySelectorAll('a[href="#contact"]')).toHaveLength(3)
  })

  it('keeps the first two columns 45px apart once the halves split', () => {
    const { container } = render(<FooterLinks />)

    const columns = Array.from(container.firstElementChild!.children)
    expect(columns).toHaveLength(4)
    expect(columns[0]).toHaveClass('min-[992px]:mb-[45px]')
    expect(columns[1]).toHaveClass('min-[992px]:mb-[45px]')
    expect(columns[2]).not.toHaveClass('min-[992px]:mb-[45px]')
  })
})

describe('Footer', () => {
  it('renders the violet band with the wordmark, credit and contact form', () => {
    render(<Footer />)

    const footer = document.querySelector('footer')!
    expect(footer).toHaveAttribute('id', 'contact')
    expect(footer).toHaveClass('bg-plum-deep', 'pt-[95px]', 'pb-[95px]', 'scroll-mt-[124px]')

    expect(screen.getByText('Sky')).toHaveClass('text-[47px]')
    expect(screen.getByRole('textbox', { name: 'Your name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'How can we help?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toHaveClass('bg-mint', 'h-[52px]')
  })

  it('credits Component Dock exactly once instead of any external attribution', () => {
    render(<Footer />)

    const credits = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(credits).toHaveLength(1)
    expect(credits[0]).toHaveAttribute('href', 'https://www.componentdock.com/')

    const credit = screen.getByText(/all rights reserved/)
    expect(credit).toHaveClass('text-[11px]', 'text-plum-mid')

    const links = Array.from(document.querySelectorAll('a'))
    links.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/^(#|https:\/\/www\.componentdock\.com\/$)/)
    })
  })

  it('renders the four link columns beside the form half', () => {
    const { container } = render(<Footer />)

    const halves = Array.from(container.querySelector('.flex.flex-wrap')!.children)
    expect(halves).toHaveLength(2)
    expect(halves[0]).toHaveClass('min-[992px]:w-1/2', 'max-[991px]:mb-[95px]')
    expect(halves[1]).toHaveClass('min-[992px]:w-1/2', 'min-[992px]:pt-[13px]')
    expect(screen.getByRole('heading', { level: 3, name: 'Domain names' })).toBeInTheDocument()
  })

  it('stacks the halves and keeps the footer copy white', () => {
    render(<Footer />)

    expect(screen.getByText(/Domains, hosting and managed servers from one dashboard/)).toHaveClass(
      'text-white',
      'mt-[33px]',
    )
  })

  it('accepts a fully filled form without leaving the page', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByRole('textbox', { name: 'Your name' }), 'Ada')
    await user.type(screen.getByRole('textbox', { name: 'Your e-mail' }), 'ada@example.com')
    await user.type(screen.getByRole('textbox', { name: 'How can we help?' }), 'Move a site')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks Ada — we will reply to ada@example.com shortly.')
  })
})
