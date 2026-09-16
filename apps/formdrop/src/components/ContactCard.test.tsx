import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCard } from './ContactCard'

describe('ContactCard', () => {
  it('renders the contact form', () => {
    render(<ContactCard />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the contact info', () => {
    render(<ContactCard />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getAllByText('Email').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Website')).toBeInTheDocument()
  })

  it('has purple background on the form side', () => {
    const { container } = render(<ContactCard />)
    const purplePanel = container.querySelector('.bg-brand-purple')
    expect(purplePanel).toBeInTheDocument()
  })

  it('stacks columns on mobile', () => {
    const { container } = render(<ContactCard />)
    const card = container.querySelector('.flex.flex-col')
    expect(card).toHaveClass('md:flex-row')
  })
})
