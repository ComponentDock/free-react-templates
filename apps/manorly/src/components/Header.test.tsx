import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the Manorly mark and the primary navigation links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Manorly home' })).toBeInTheDocument()
    expect(screen.getByText('Manorly')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Contact Us']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('button', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pages' })).toBeInTheDocument()
  })

  it('opens and closes the Pages disclosure', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Pages' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    for (const label of ['Project', 'Apartment', 'Elements']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryAllByRole('link', { name: 'Apartment' })).toHaveLength(0)
  })

  it('closes the Blog disclosure when one of its items is followed', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Blog' }))
    expect(screen.getAllByRole('link', { name: 'Single Blog' })).toHaveLength(1)

    const single = screen.getAllByRole('link', { name: 'Single Blog' })[0]!
    single.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(single)

    expect(screen.queryByRole('link', { name: 'Single Blog' })).not.toBeInTheDocument()
  })

  it('opens the mobile navigation and closes it when a link is followed', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    const project = screen.getAllByRole('link', { name: 'Project' })[0]!
    project.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(project)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
