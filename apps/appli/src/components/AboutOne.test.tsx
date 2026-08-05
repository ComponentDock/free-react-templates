import { describe, expect, it } from 'vitest'
import { render, within } from '@testing-library/react'
import { AboutOne } from './AboutOne'

describe('AboutOne', () => {
  it('renders the heading, copy, link, and image with the copy on the left', () => {
    const { container } = render(<AboutOne />)

    const section = container.querySelector('#about')
    expect(section).not.toBeNull()

    const heading = within(section as HTMLElement).getByRole('heading', {
      level: 2,
      name: 'You have the power to personalize your website coding.',
    })
    const image = within(section as HTMLElement).getByRole('img', {
      name: 'Appli personalization dashboard',
    })

    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/appli-about-1/800/700')

    const link = within(section as HTMLElement).getByRole('link', { name: 'See how it work' })
    expect(link).toHaveAttribute('href', '#features')

    // Copy comes before the image in DOM order (text on the left on desktop).
    expect(heading.compareDocumentPosition(image) & Node.DOCUMENT_POSITION_FOLLOWING).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    )
  })
})
