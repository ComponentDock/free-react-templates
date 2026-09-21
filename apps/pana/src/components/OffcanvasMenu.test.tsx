import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OffcanvasMenu } from './OffcanvasMenu'

describe('OffcanvasMenu', () => {
  it('renders the hamburger button', () => {
    render(<OffcanvasMenu />)
    expect(screen.getByLabelText('Open menu')).toBeDefined()
  })

  it('opens the sidebar when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<OffcanvasMenu />)
    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Sidebar menu')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Gallery')).toBeDefined()
  })

  it('closes the sidebar when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<OffcanvasMenu />)
    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Sidebar menu')).toBeDefined()
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.queryByLabelText('Sidebar menu')).toBeNull()
  })

  it('closes the sidebar when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<OffcanvasMenu />)
    await user.click(screen.getByLabelText('Open menu'))
    const overlay = document.querySelector('.fixed.inset-0.z-50.bg-black\\/60')
    expect(overlay).toBeDefined()
    if (overlay) await user.click(overlay)
    expect(screen.queryByLabelText('Sidebar menu')).toBeNull()
  })

  it('renders all navigation links', async () => {
    const user = userEvent.setup()
    render(<OffcanvasMenu />)
    await user.click(screen.getByLabelText('Open menu'))
    const links = ['Home', 'About', 'Gallery', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByText(link)).toBeDefined()
    }
  })

  it('renders all social icon links', async () => {
    const user = userEvent.setup()
    render(<OffcanvasMenu />)
    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('Twitter')).toBeDefined()
    expect(screen.getByLabelText('LinkedIn')).toBeDefined()
    expect(screen.getByLabelText('Instagram')).toBeDefined()
  })
})
