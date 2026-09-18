import { render, screen, within } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders Quick Menu column with links', () => {
    render(<Footer />)
    const quickMenu = screen.getByText('Quick Menu').closest('div')!
    expect(within(quickMenu).getByText('Home')).toBeInTheDocument()
    expect(within(quickMenu).getByText('Blog')).toBeInTheDocument()
    expect(within(quickMenu).getByText('Privacy')).toBeInTheDocument()
  })

  it('renders Insurance column with links', () => {
    render(<Footer />)
    const heading = screen.getAllByText('Insurance').find((el) => el.tagName === 'H3')!
    const col = heading.closest('div')!
    expect(within(col).getByText('Home Insurance')).toBeInTheDocument()
    expect(within(col).getByText('Auto Insurance')).toBeInTheDocument()
    expect(within(col).getByText('Travel Insurance')).toBeInTheDocument()
    expect(within(col).getByText('Business Insurance')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders About section with Read More', () => {
    render(<Footer />)
    const about = screen.getAllByText('About').find((el) => el.tagName === 'H3')!
    const col = about.closest('div')!
    expect(within(col).getByText('Read More')).toBeInTheDocument()
  })
})
