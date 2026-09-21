import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the logo text', () => {
    render(<Sidebar />)
    expect(screen.getByText('Galleryvue')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar />)
    for (const link of ['Home', 'Gallery', 'About', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders social media icons', () => {
    render(<Sidebar />)
    const social = screen.getByTestId('sidebar-social')
    expect(social).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const toggle = screen.getByTestId('sidebar-toggle')
    expect(toggle).toHaveAttribute('aria-label', 'Open menu')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-label', 'Close menu')
    expect(screen.getByTestId('sidebar-backdrop')).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-label', 'Open menu')
  })

  it('closes mobile menu when backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const toggle = screen.getByTestId('sidebar-toggle')
    await user.click(toggle)

    const backdrop = screen.getByTestId('sidebar-backdrop')
    await user.click(backdrop)
    expect(toggle).toHaveAttribute('aria-label', 'Open menu')
  })

  it('applies custom className', () => {
    render(<Sidebar className="custom-class" />)
    expect(screen.getByTestId('sidebar')).toHaveClass('custom-class')
  })
})
