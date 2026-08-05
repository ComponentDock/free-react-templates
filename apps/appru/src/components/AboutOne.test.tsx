import { describe, expect, it } from 'vitest'
import { render, within } from '@testing-library/react'
import { AboutOne } from './AboutOne'

describe('AboutOne', () => {
  it('renders the heading, blurb, Get Details button, and phone image on the left', () => {
    const { container } = render(<AboutOne />)

    const section = container.querySelector('#about-1')
    expect(section).not.toBeNull()

    const heading = within(section as HTMLElement).getByRole('heading', {
      level: 2,
      name: 'We Believe that Interior beautifies the Total Architecture',
    })
    const image = within(section as HTMLElement).getByRole('img', {
      name: 'Appru phone in hand',
    })

    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/appru-about-1/600/800')

    const details = within(section as HTMLElement).getByRole('link', { name: 'Get Details' })
    expect(details).toHaveAttribute('href', '#pricing')

    // Image comes before the copy in DOM order (image on the left on desktop).
    expect(heading.compareDocumentPosition(image) & Node.DOCUMENT_POSITION_PRECEDING).toBe(
      Node.DOCUMENT_POSITION_PRECEDING,
    )
  })
})
