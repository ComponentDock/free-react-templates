import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step2, SocialField } from './Step2'

describe('Step2', () => {
  it('renders the gender select', () => {
    render(<Step2 />)
    expect(screen.getByRole('listbox', { name: /gender/i })).toBeInTheDocument()
  })

  it('renders the language select', () => {
    render(<Step2 />)
    expect(screen.getByRole('listbox', { name: /language/i })).toBeInTheDocument()
  })

  it('opens gender dropdown and selects an option', async () => {
    render(<Step2 />)
    await userEvent.click(screen.getByRole('listbox', { name: /gender/i }))
    expect(screen.getByRole('option', { name: 'Male' })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('option', { name: 'Female' }))
    expect(screen.getByRole('listbox', { name: /gender/i })).toHaveTextContent('Female')
  })

  it('opens language dropdown and selects an option', async () => {
    render(<Step2 />)
    await userEvent.click(screen.getByRole('listbox', { name: /language/i }))
    expect(screen.getByRole('option', { name: 'English' })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('option', { name: 'Vietnamese' }))
    expect(screen.getByRole('listbox', { name: /language/i })).toHaveTextContent('Vietnamese')
  })

  it('closes dropdown when clicking outside', async () => {
    render(<Step2 />)
    await userEvent.click(screen.getByRole('listbox', { name: /gender/i }))
    expect(screen.getByRole('option', { name: 'Male' })).toBeInTheDocument()
    await userEvent.click(document.body)
    expect(screen.queryByRole('option', { name: 'Male' })).not.toBeInTheDocument()
  })

  it('renders Date of Birth input', () => {
    render(<Step2 />)
    expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument()
  })

  it('renders Slogan input', () => {
    render(<Step2 />)
    expect(screen.getByLabelText('Slogan')).toBeInTheDocument()
  })

  it('renders social fields', () => {
    render(<Step2 />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Linked In')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Google')).toBeInTheDocument()
  })

  it('has correct tabpanel role', () => {
    render(<Step2 />)
    expect(screen.getByRole('tabpanel', { name: /step 2/i })).toBeInTheDocument()
  })
})

describe('SocialField', () => {
  it('renders full-width when half is false', () => {
    const { container } = render(
      <SocialField label="Test" placeholder="Test" icon={<span>icon</span>} half={false} />,
    )
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('w-full')
  })

  it('renders half-width when half is true', () => {
    const { container } = render(
      <SocialField label="Test" placeholder="Test" icon={<span>icon</span>} half />,
    )
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('calc(50%-12.5px)')
  })
})
