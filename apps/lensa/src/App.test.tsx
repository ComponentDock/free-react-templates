import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Lensa' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'My name is Michael Smith.' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /see my portfolio/ })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()

    const tags = [...container.querySelectorAll('header, aside, main, section')].map((el) =>
      el.tagName.toLowerCase(),
    )
    expect(tags).toContain('header')
    expect(tags).toContain('aside')
    expect(tags).toContain('main')
    expect(tags).toContain('section')
  })

  it('opens the off-canvas menu from the hamburger and closes it via the X', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument()
  })

  it('closes the menu when a nav link is chosen', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const about = screen.getByRole('link', { name: 'About Me' })
    about.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(about)

    expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument()
  })
})
