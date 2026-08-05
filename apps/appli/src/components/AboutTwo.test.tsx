import { describe, expect, it } from 'vitest'
import { render, within } from '@testing-library/react'
import { AboutTwo } from './AboutTwo'

describe('AboutTwo', () => {
  it('renders the heading, copy, link, and image with the image on the left', () => {
    const { container } = render(<AboutTwo />)

    const section = container.querySelector('#convert')
    expect(section).not.toBeNull()

    const heading = within(section as HTMLElement).getByRole('heading', {
      level: 2,
      name: 'Personalized experiences are proven to increase conversions',
    })
    const image = within(section as HTMLElement).getByRole('img', {
      name: 'Appli conversion insights',
    })

    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/appli-about-2/800/700')

    expect(
      within(section as HTMLElement).getByRole('link', { name: 'See how it work' }),
    ).toHaveAttribute('href', '#features')

    // Image comes before the copy in DOM order (image on the left on desktop).
    expect(heading.compareDocumentPosition(image) & Node.DOCUMENT_POSITION_PRECEDING).toBe(
      Node.DOCUMENT_POSITION_PRECEDING,
    )
  })
})
