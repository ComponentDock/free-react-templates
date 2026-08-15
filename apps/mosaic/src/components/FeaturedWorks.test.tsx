import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedWorks } from './FeaturedWorks'

describe('FeaturedWorks', () => {
  it('renders all six portfolio tiles with tag and credit', () => {
    render(<FeaturedWorks />)

    const section = screen.getByRole('region', { name: 'Featured works' })
    for (const title of ['The Verge', 'Racks', 'Zendesk', 'Curator', 'Tasty', 'Voyage']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    const credits = section.querySelectorAll('p')
    expect(credits).toHaveLength(6)
    for (const credit of credits) {
      expect(credit.textContent).toBe('John Bruce')
    }
    expect(section.querySelectorAll('img')).toHaveLength(6)
    expect(screen.getAllByText('Website')).toHaveLength(6)
  })

  it('renders the About split heading with a Get in touch CTA', () => {
    render(<FeaturedWorks />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /UI\/UX, visual, Web designer with more than 12 years/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact')
  })
})
