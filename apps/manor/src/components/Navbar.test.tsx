import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('the manor')).toBeInTheDocument()
    expect(screen.getByText('home')).toBeInTheDocument()
    expect(screen.getByText('about us')).toBeInTheDocument()
    expect(screen.getByText('listings')).toBeInTheDocument()
    expect(screen.getByText('news')).toBeInTheDocument()
    expect(screen.getByText('contact')).toBeInTheDocument()
    expect(screen.getByText('+0080 234 567 84441')).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('adds scrolled class on scroll', async () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-navy-800')
  })

  it('has transparent bg when not scrolled', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')
  })
})
