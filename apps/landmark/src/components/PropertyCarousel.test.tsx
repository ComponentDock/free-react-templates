import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { PropertyCarousel } from './PropertyCarousel'
import { FEATURED_PROPERTIES } from '../data'

const PROPS = {
  id: 'properties',
  title: 'Display Latest & Featured Properties',
  subtitle: 'Hand-picked homes and offices ready for you to move in.',
  properties: FEATURED_PROPERTIES,
  previousLabel: 'Previous featured properties',
  nextLabel: 'Next featured properties',
}

describe('PropertyCarousel', () => {
  it('renders the section heading, subtitle and all four property cards', () => {
    const { container } = render(<PropertyCarousel {...PROPS} />)

    expect(screen.getByRole('heading', { name: PROPS.title })).toBeInTheDocument()
    expect(screen.getByText(PROPS.subtitle)).toBeInTheDocument()

    const images = container.querySelectorAll('article img')
    expect(images).toHaveLength(FEATURED_PROPERTIES.length)

    const articles = Array.from(container.querySelectorAll('article'))
    FEATURED_PROPERTIES.forEach((property, i) => {
      const article = within(articles[i]!)
      expect(article.getByText(property.price)).toBeInTheDocument()
      expect(article.getByText(property.type)).toBeInTheDocument()
      expect(article.getByText(property.blurb)).toBeInTheDocument()
      expect(article.getByText(property.beds)).toBeInTheDocument()
      expect(article.getByText(property.baths)).toBeInTheDocument()
      expect(article.getByText(property.sqft)).toBeInTheDocument()
    })
  })

  it('scrolls the carousel with the arrow buttons and disables them at the ends', () => {
    const { container } = render(<PropertyCarousel {...PROPS} />)

    const track = container.querySelector('.flex.transition-transform')!
    const prev = screen.getByRole('button', { name: PROPS.previousLabel })
    const next = screen.getByRole('button', { name: PROPS.nextLabel })

    expect(prev).toBeDisabled()
    expect(track).toHaveStyle({ transform: 'translateX(-0%)' })

    fireEvent.click(next)
    expect(track).toHaveStyle({ transform: 'translateX(-33.333333333333336%)' })
    expect(prev).toBeEnabled()
    expect(next).toBeDisabled()

    fireEvent.click(prev)
    expect(prev).toBeDisabled()
    expect(next).toBeEnabled()
  })

  it('renders no arrows when the item count fits the view', () => {
    render(<PropertyCarousel {...PROPS} properties={FEATURED_PROPERTIES.slice(0, 3)} />)
    expect(screen.queryByRole('button', { name: PROPS.previousLabel })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: PROPS.nextLabel })).not.toBeInTheDocument()
  })
})
