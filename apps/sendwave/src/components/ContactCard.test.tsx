import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCard } from './ContactCard'

describe('ContactCard', () => {
  it('renders the wrapper card with shadow', () => {
    const { container } = render(<ContactCard />)
    const card = container.querySelector('.overflow-hidden')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('rounded-[10px]')
  })

  it('renders Contact us heading', () => {
    render(<ContactCard />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders contact info items', () => {
    render(<ContactCard />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByText(/info@yoursite.com/)).toBeInTheDocument()
    expect(screen.getByText(/\+ 1235 2355 98/)).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<ContactCard />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Create a message here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<ContactCard />)
    expect(screen.getByRole('heading', { name: /follow us here/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dribbble/i })).toBeInTheDocument()
  })

  it('renders background image panel', () => {
    const { container } = render(<ContactCard />)
    const bgPanel = container.querySelector('[aria-hidden="true"]')
    expect(bgPanel).toBeInTheDocument()
    expect(bgPanel).toHaveClass('bg-cover')
  })

  it('has a descriptive subtitle', () => {
    render(<ContactCard />)
    expect(screen.getByText(/open for any suggestion/i)).toBeInTheDocument()
  })
})
