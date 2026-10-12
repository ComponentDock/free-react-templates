import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the dark three-widget column set', () => {
    const { container } = render(<Footer />)

    expect(container.querySelector('footer')).toHaveClass('bg-dark', 'pt-[100px]')
    expect(screen.getByRole('heading', { name: 'Top Products', level: 6 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter', level: 6 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Instagram Feed', level: 6 })).toBeInTheDocument()
  })

  it('lists four white product links that hover to brand blue', () => {
    render(<Footer />)

    const nav = screen.getByRole('navigation', { name: 'Top Products' })
    const links = nav.querySelectorAll('a')
    expect(links).toHaveLength(4)
    links.forEach((link) => {
      expect(link).toHaveClass('text-white', 'hover:text-brand')
    })
  })

  it('renders a white pill newsletter field and an azure subscribe button', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('E-mail address')
    expect(input).toHaveClass('rounded-[20px]', 'bg-surface', 'leading-[38px]')
    expect(screen.getByRole('button', { name: 'Subscribe' })).toHaveClass('bg-brand', 'mt-[20px]')

    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Enter a valid e-mail address to subscribe.')).toBeInTheDocument()
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('confirms a valid newsletter sign-up in the live region', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('E-mail address')
    await user.type(input, 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — we will keep ada@example.com posted.',
    )
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })

  it('renders eight labelled Instagram thumbnails four to a row', () => {
    const { container } = render(<Footer />)

    const thumbs = container.querySelectorAll('img')
    expect(thumbs).toHaveLength(8)
    expect(screen.getByRole('link', { name: 'Skyport Instagram photo 1' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skyport Instagram photo 8' })).toBeInTheDocument()
    expect(thumbs[0]).toHaveAttribute('src', 'https://picsum.photos/seed/skyport-gram-1/300/300')
    expect(container.querySelectorAll('li.w-1\\/4')).toHaveLength(8)
  })

  it('closes with social chips and exactly one Component Dock credit', () => {
    const { container } = render(<Footer />)

    expect(screen.getAllByRole('link', { name: 'Component Dock' })).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )

    const chips = container.querySelectorAll('.bg-darkest')
    expect(chips).toHaveLength(3)
    chips.forEach((chip) => {
      expect(chip).toHaveClass('w-[45px]', 'p-[12px]', 'text-social', 'hover:bg-brand')
    })
  })
})
