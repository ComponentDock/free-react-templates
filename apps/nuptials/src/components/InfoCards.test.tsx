import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InfoCards } from './InfoCards'
import { INFO_CARDS } from '../lib/site'

const plates = () => screen.getAllByTestId('info-card')

describe('InfoCards', () => {
  it('lays the three plates out with the information plate carrying the band heading', () => {
    render(<InfoCards />)

    expect(plates()).toHaveLength(3)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Wedding Information')
    expect(screen.getByRole('heading', { level: 3, name: 'Main Ceremony' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Wedding Party' })).toBeInTheDocument()

    // The design's offset plate shadow is passed as an arbitrary value so it wins over the shared
    // Card's own shadow-sm (a custom shadow token is not classified by tailwind-merge, so the
    // stylesheet order decides — verified in the built page: the computed shadow is the offset one).
    expect(plates()[0]).toHaveClass('shadow-[-35.355px_35.355px_50px_0_rgba(157,157,157,0.3)]')
  })

  it('gives each ceremony plate its date, its time and its address', () => {
    render(<InfoCards />)

    const information = plates()[0] as HTMLElement
    const ceremony = plates()[1] as HTMLElement
    const party = plates()[2] as HTMLElement

    expect(information.querySelector('dl')).toBeNull()
    expect(Array.from(ceremony.querySelectorAll('dt')).map((term) => term.textContent)).toEqual([
      'Date',
      'Time',
      'Address',
    ])
    expect(within(ceremony).getByText('56 Lantern Row, Whitby')).toBeInTheDocument()
    expect(within(ceremony).getByText('19.00')).toBeInTheDocument()
    expect(within(party).getByText('2 Quay Steps, Whitby')).toBeInTheDocument()
    expect(ceremony.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(3)
  })

  it('carries the design own card copy for each plate', () => {
    render(<InfoCards />)

    expect(INFO_CARDS.map((card) => card.title)).toEqual([
      'Wedding Information',
      'Main Ceremony',
      'Wedding Party',
    ])
    expect(INFO_CARDS.map((card) => card.rows.length)).toEqual([0, 3, 3])
  })
})
