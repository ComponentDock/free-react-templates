import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Capitex')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Loan')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Apply For Loan')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('is transparent before scroll', () => {
    render(<Navbar />)
    const header = screen.getByText('Capitex').closest('header')!
    expect(header.className).toContain('bg-transparent')
  })

  it('becomes blue on scroll', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const header = screen.getByText('Capitex').closest('header')!
    expect(header.className).toContain('bg-blue')
    expect(header.className).toContain('shadow-lg')
  })

  it('adds scroll listener on mount and cleans up on unmount', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
    addSpy.mockRestore()
    removeSpy.mockRestore()
  })

  it('clicking mobile link closes the menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    const mobileHomeLinks = screen.getAllByText('Home')
    await user.click(mobileHomeLinks[1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('clicking mobile Apply For Loan closes the menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    const mobileApply = screen.getAllByText('Apply For Loan')
    await user.click(mobileApply[mobileApply.length - 1]!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
