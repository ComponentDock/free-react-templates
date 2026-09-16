import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCard } from './ContactCard'

describe('ContactCard', () => {
  it('renders the contact form', () => {
    render(<ContactCard />)
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('renders the placeholder image', () => {
    render(<ContactCard />)
    const img = screen.getByAltText('Contact')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/formcatch/800/600')
  })

  it('hides image on mobile and shows on desktop', () => {
    render(<ContactCard />)
    const imgContainer = screen.getByAltText('Contact').parentElement
    expect(imgContainer).toHaveClass('hidden', 'md:block')
  })
})
