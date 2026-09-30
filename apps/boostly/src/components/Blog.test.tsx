import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our latest blog' })).toBeInTheDocument()
  })

  it('renders three post cards with title and excerpt', () => {
    render(<Blog />)
    expect(
      screen.getAllByRole('heading', { level: 3, name: 'Starts the automated process.' }),
    ).toHaveLength(3)
    expect(
      screen.getAllByText(
        'The automated process starts as soon as your clothes go into the machine.',
      ),
    ).toHaveLength(3)
  })

  it('tags every card with an Urban category badge (first one orange-filled)', () => {
    const { container } = render(<Blog />)
    const badges = screen.getAllByText('Urban')
    expect(badges).toHaveLength(3)
    expect(badges[0]?.className).toContain('bg-brand')
    expect(badges[1]?.className).not.toContain('bg-brand')
    expect(badges[1]?.className).toContain('border')
    const imgs = container.querySelectorAll('img')
    expect(imgs).toHaveLength(3)
    for (const img of imgs) {
      expect(img).toHaveAttribute('alt', 'Blog post cover')
    }
  })

  it('keeps card links inert for jsdom hash navigation when clicked', async () => {
    const user = userEvent.setup()
    render(<Blog />)
    const link = screen.getAllByRole('link', { name: 'Starts the automated process.' })[0]!
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(link).toHaveAttribute('href', '#blog')
  })
})
