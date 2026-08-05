import { describe, expect, it } from 'vitest'
import { render, within } from '@testing-library/react'
import { AboutTwo } from './AboutTwo'

describe('AboutTwo', () => {
  it('renders the heading, store buttons, and phone image on the right', () => {
    const { container } = render(<AboutTwo />)

    const section = container.querySelector('#about-2')
    expect(section).not.toBeNull()

    const heading = within(section as HTMLElement).getByRole('heading', {
      level: 2,
      name: 'We Believe that Interior beautifies the Total Architecture',
    })
    const image = within(section as HTMLElement).getByRole('img', {
      name: 'Appru app on a phone screen',
    })

    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/appru-about-2/600/800')

    expect(
      within(section as HTMLElement).getByRole('link', { name: 'Available on App Store' }),
    ).toBeInTheDocument()
    expect(
      within(section as HTMLElement).getByRole('link', { name: 'Available on Play Store' }),
    ).toBeInTheDocument()

    // Copy comes before the image in DOM order (image on the right on desktop).
    expect(heading.compareDocumentPosition(image) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    )
  })
})
