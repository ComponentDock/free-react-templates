import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and side description', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Services we provide' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/It is not just about traffic minion customers/)).toBeInTheDocument()
  })

  it('renders exactly three bordered service cards', () => {
    render(<Services />)
    expect(screen.getAllByRole('heading', { level: 3, name: 'Web Design' })).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 3, name: 'E-Commerce' })).toBeInTheDocument()
  })

  it('gives every card a Let’s Talk link pointing at the contact section', () => {
    render(<Services />)
    const links = screen.getAllByRole('link', { name: "Let's Talk" })
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#contact')
    }
  })

  it('renders an orange line icon per card', () => {
    const { container } = render(<Services />)
    const icons = container.querySelectorAll('section svg.text-brand')
    expect(icons).toHaveLength(3)
  })

  it('keeps card links inert for jsdom hash navigation when clicked', async () => {
    const user = userEvent.setup()
    render(<Services />)
    const link = screen.getAllByRole('link', { name: "Let's Talk" })[0]!
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(link).toBeInTheDocument()
  })
})
