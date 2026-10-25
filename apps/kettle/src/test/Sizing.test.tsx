import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Sizing } from '../components/Sizing'
import { CLIMATES, FIXTURES, PEOPLE } from '../data'

describe('Sizing', () => {
  it('lands on the reference defaults — both showers, Virginia average, four people', () => {
    render(<Sizing />)

    expect(screen.getByTestId('sizing-gpm')).toHaveTextContent('4.0 gpm')
    expect(screen.getByTestId('sizing-rise')).toHaveTextContent(
      'At a 68 degree rise, which is what a unit has to deliver in your coldest month.',
    )
    expect(screen.getByTestId('sizing-tank')).toHaveTextContent('40 gallon')
    expect(screen.getByTestId('sizing-note')).toHaveTextContent(
      'Covers about 52 gallons in your busiest hour.',
    )
    expect(screen.getByTestId('sizing-verdict')).toHaveTextContent(
      'Tankless is a reasonable fit at this flow',
    )
  })

  it('renders the three chip groups in the reference order', () => {
    render(<Sizing />)

    const fixtures = screen.getAllByRole('checkbox')
    expect(fixtures).toHaveLength(FIXTURES.length)
    expect(fixtures.map((input) => input.getAttribute('value'))).toEqual(
      FIXTURES.map((fixture) => fixture.value),
    )
    expect(screen.getByLabelText(/Shower/)).toBeChecked()
    expect(screen.getByLabelText(/Filling a bath/)).not.toBeChecked()
    expect(screen.getAllByText('2 gpm')[0]).toHaveClass('chip-unit')

    const climates = screen.getAllByRole('radio', { name: /winter|Virginia average/ })
    expect(climates).toHaveLength(CLIMATES.length)
    expect(screen.getByRole('radio', { name: /Virginia average/ })).toBeChecked()
    expect(screen.getByText('52°F')).toHaveClass('chip-unit')

    const people = screen.getAllByRole('radio', { name: /^[1-6]\+?$/ })
    expect(people).toHaveLength(PEOPLE.length)
    people.forEach((input) => expect(input).not.toBeChecked())
    expect(screen.getByRole('radio', { name: '6+' })).toBeInTheDocument()
  })

  it('recomputes the verdict on the same change event', async () => {
    render(<Sizing />)

    await userEvent.click(screen.getByRole('checkbox', { name: /^Shower / }))

    expect(screen.getByTestId('sizing-gpm')).toHaveTextContent('2.0 gpm')
    expect(screen.getByTestId('sizing-tank')).toHaveTextContent('40 gallon')
    expect(screen.getByTestId('sizing-note')).toHaveTextContent('Covers about 32 gallons')
    expect(screen.getByTestId('sizing-verdict')).toHaveTextContent('Either works.')
  })

  it('warns when a hard winter pushes the rise past what one unit can carry', async () => {
    render(<Sizing />)

    await userEvent.click(screen.getByLabelText(/Filling a bath/))
    await userEvent.click(screen.getByRole('radio', { name: /Hard winter/ }))

    expect(screen.getByTestId('sizing-gpm')).toHaveTextContent('8.0 gpm')
    expect(screen.getByTestId('sizing-rise')).toHaveTextContent('At a 78 degree rise')
    expect(screen.getByTestId('sizing-verdict')).toHaveTextContent('will struggle')
  })

  it('upsizes the tank when the household grows', async () => {
    render(<Sizing />)

    await userEvent.click(screen.getByLabelText(/Filling a bath/))
    await userEvent.click(screen.getByRole('radio', { name: '6+' }))

    expect(screen.getByTestId('sizing-tank')).toHaveTextContent('65 gallon')
    expect(screen.getByTestId('sizing-note')).toHaveTextContent('Covers about 88 gallons')
  })

  it('swaps one climate for another without stacking them', async () => {
    render(<Sizing />)

    await userEvent.click(screen.getByRole('radio', { name: /Mild winter/ }))

    expect(screen.getByRole('radio', { name: /Mild winter/ })).toBeChecked()
    expect(screen.getByRole('radio', { name: /Virginia average/ })).not.toBeChecked()
    expect(screen.getByTestId('sizing-rise')).toHaveTextContent('At a 58 degree rise')
  })

  it('handles every fixture being unchecked and recovers', async () => {
    render(<Sizing />)

    await userEvent.click(screen.getByRole('checkbox', { name: /^Shower / }))
    await userEvent.click(screen.getByRole('checkbox', { name: /^Second shower/ }))

    expect(screen.getByTestId('sizing-gpm')).toHaveTextContent('—')
    expect(screen.getByTestId('sizing-rise')).toHaveTextContent('Pick at least one fixture.')
    expect(screen.getByTestId('sizing-tank')).toHaveTextContent('—')
    expect(screen.getByTestId('sizing-note')).toHaveTextContent('')
    expect(screen.getByTestId('sizing-verdict')).toHaveTextContent(
      'Choose what might run at once and we will size both options.',
    )

    await userEvent.click(screen.getByRole('checkbox', { name: /^Shower / }))
    expect(screen.getByTestId('sizing-gpm')).toHaveTextContent('2.0 gpm')
  })

  it('announces both numbers politely and never submits anything', () => {
    render(<Sizing />)

    expect(screen.getByTestId('sizing-gpm')).toHaveAttribute('aria-live', 'polite')
    expect(screen.getByTestId('sizing-tank')).toHaveAttribute('aria-live', 'polite')
    expect(screen.getByRole('link', { name: 'Get a fixed quote' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByText(/Illustrative sizing for demonstration/)).toHaveClass('text-white/50')
    expect(document.querySelector('form')).toBeNull()
  })
})
