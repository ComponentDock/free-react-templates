import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactImage } from './ContactImage'

describe('ContactImage', () => {
  it('renders an image with the correct src', () => {
    render(<ContactImage />)
    const img = screen.getByRole('img', { name: /contact us/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/formwell/600/600')
  })

  it('applies hidden class on small screens', () => {
    render(<ContactImage />)
    const container = screen.getByRole('img').parentElement
    expect(container).toHaveClass('hidden')
  })
})
