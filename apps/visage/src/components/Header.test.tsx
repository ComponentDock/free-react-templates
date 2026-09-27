import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  const onNavigate = vi.fn()

  beforeEach(() => {
    onNavigate.mockClear()
  })

  it('renders the logo text', () => {
    render(<Header activeTab="about" onNavigate={onNavigate} />)
    expect(screen.getByText(/Visage/)).toBeInTheDocument()
  })

  it('renders all navigation tabs as buttons', () => {
    render(<Header activeTab="about" onNavigate={onNavigate} />)
    const tabs = [
      'About',
      'Skills',
      'Services',
      'Experience',
      'Education',
      'Portfolio',
      'Testimonials',
      'Contact',
    ]
    for (const tab of tabs) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
  })

  it('renders the CTA link', () => {
    render(<Header activeTab="about" onNavigate={onNavigate} />)
    expect(screen.getByText(/Available for freelance work/i)).toBeInTheDocument()
  })

  it('calls onNavigate when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Header activeTab="about" onNavigate={onNavigate} />)
    await user.click(screen.getByRole('button', { name: 'Skills' }))
    expect(onNavigate).toHaveBeenCalledWith('skills')
  })

  it('highlights the active tab', () => {
    render(<Header activeTab="skills" onNavigate={onNavigate} />)
    const skillsBtn = screen.getByRole('button', { name: 'Skills' })
    expect(skillsBtn).toHaveClass('bg-brand')
  })
})
