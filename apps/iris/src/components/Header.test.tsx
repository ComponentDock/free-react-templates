import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand wordmark, link items and dropdown triggers with Home active', () => {
    const { container } = render(<Header />)
    expect(screen.getByRole('link', { name: /iris home/i })).toBeInTheDocument()
    expect(container.querySelector('header')).toHaveClass('bg-night')
    for (const label of ['Home', 'About', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label, hidden: true }).length).toBeGreaterThan(0)
    }
    for (const label of ['Projects', 'Pages', 'Blog']) {
      expect(
        screen.getAllByRole('button', { name: new RegExp(`^${label}`), hidden: true }).length,
      ).toBeGreaterThan(0)
    }
    const homeLinks = screen.getAllByRole('link', { name: 'Home', hidden: true })
    expect(homeLinks[0]).toHaveAttribute('href', '#home')
    expect(homeLinks[0]).toHaveClass('text-brand')
  })

  it('opens and closes a dropdown on desktop hover', () => {
    render(<Header />)
    const projectsButton = screen.getAllByRole('button', { name: /^Projects/, hidden: true })[0]
    fireEvent.mouseEnter(projectsButton!.parentElement!)
    expect(screen.getByRole('link', { name: 'Project Details', hidden: true })).toHaveAttribute(
      'href',
      '#gallery',
    )
    fireEvent.mouseLeave(projectsButton!.parentElement!)
    expect(
      screen.queryByRole('link', { name: 'Project Details', hidden: true }),
    ).not.toBeInTheDocument()
  })

  it('toggles a dropdown from the trigger button and collapses it on a second click', () => {
    render(<Header />)
    const pagesButton = screen.getAllByRole('button', { name: /^Pages/, hidden: true })[0]
    fireEvent.click(pagesButton!)
    expect(screen.getByRole('link', { name: 'Elements', hidden: true })).toHaveAttribute(
      'href',
      '#services',
    )
    fireEvent.click(pagesButton!)
    expect(screen.queryByRole('link', { name: 'Elements', hidden: true })).not.toBeInTheDocument()
  })

  it('opens the mobile menu, shows stacked links with sub-links, and closes it', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu', hidden: true })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // desktop link + mobile link for About
    expect(screen.getAllByRole('link', { name: 'About', hidden: true })).toHaveLength(2)
    const mobileProjects = screen.getAllByRole('button', { name: /^Projects/, hidden: true })
    fireEvent.click(mobileProjects[mobileProjects.length - 1]!)
    expect(screen.getAllByRole('link', { name: 'Project Details', hidden: true })).toHaveLength(1)
    // collapsing the mobile dropdown again
    fireEvent.click(mobileProjects[mobileProjects.length - 1]!)
    expect(
      screen.queryByRole('link', { name: 'Project Details', hidden: true }),
    ).not.toBeInTheDocument()
    // closing via a mobile link click
    const aboutLinks = screen.getAllByRole('link', { name: 'About', hidden: true })
    fireEvent.click(aboutLinks[aboutLinks.length - 1]!)
    expect(screen.getAllByRole('link', { name: 'About', hidden: true })).toHaveLength(1)
    // reopening and closing again via the toggle button
    fireEvent.click(toggle)
    expect(screen.getAllByRole('link', { name: 'About', hidden: true })).toHaveLength(2)
    fireEvent.click(toggle)
    expect(screen.getAllByRole('link', { name: 'About', hidden: true })).toHaveLength(1)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('turns the header solid black when scrolled and back when at the top', () => {
    const { container, unmount } = render(<Header />)
    const header = container.querySelector('header')!
    expect(header.className).toContain('lg:bg-transparent')
    Object.defineProperty(window, 'scrollY', { value: 250, configurable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('shadow-md')
    expect(header.className).not.toContain('lg:bg-transparent')
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('lg:bg-transparent')
    unmount()
  })
})
