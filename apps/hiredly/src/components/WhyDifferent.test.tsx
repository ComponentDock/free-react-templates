import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { WhyDifferent } from './WhyDifferent'

describe('WhyDifferent', () => {
  it('renders the heading, three icon items, and the about image', () => {
    render(<WhyDifferent />)

    const section = screen.getByRole('region', { name: /why we are different/i })
    const heading = within(section).getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Why we are different')

    const items = within(section).getAllByRole('listitem')
    expect(items).toHaveLength(3)

    expect(within(items[0] as HTMLElement).getByText('Save Time')).toBeInTheDocument()
    expect(within(items[1] as HTMLElement).getByText('24/7 Support')).toBeInTheDocument()
    expect(within(items[2] as HTMLElement).getByText('Verified Companies')).toBeInTheDocument()

    const image = within(section).getByRole('img', { name: /recruiting team/i })
    expect(image).toBeInTheDocument()
    expect(image.getAttribute('src')).toContain('picsum.photos')
  })

  it('shows an icon inside every feature item', () => {
    render(<WhyDifferent />)

    const section = screen.getByRole('region', { name: /why we are different/i })
    expect(section.querySelectorAll('svg')).toHaveLength(3)
  })
})
