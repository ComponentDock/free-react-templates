import { describe, expect, it } from 'vitest'
import { EMPTY_FILTERS, MODELS, matchesFilters } from './models'

describe('models data', () => {
  it('exposes six models with display stats and search attributes', () => {
    expect(MODELS).toHaveLength(6)
    for (const model of MODELS) {
      expect(model.name).not.toBe('')
      expect(model.image).toMatch(/^https:\/\/picsum\.photos\/seed\/catwalk-/)
      expect(model.age).toBeGreaterThan(0)
      expect(model.height).toBeGreaterThan(0)
      expect(model.bust).toBeGreaterThan(0)
      expect(model.waist).toBeGreaterThan(0)
      expect(model.hips).toBeGreaterThan(0)
      expect(model.shoes).toBeGreaterThan(0)
      expect(model.eyes).not.toBe('')
      expect(model.search.height).not.toBe('')
      expect(model.search.bust).not.toBe('')
      expect(model.search.waist).not.toBe('')
      expect(model.search.hips).not.toBe('')
      expect(model.search.eyes).not.toBe('')
    }
  })

  it('includes the models named in the spec', () => {
    const names = MODELS.map((model) => model.name)
    expect(names).toEqual(
      expect.arrayContaining([
        'Patricia Becket',
        'Emily Stewart',
        'Sofia Scott',
        'Chloe Johnson',
        'Victoria Henderson',
        'Ella Turner',
      ]),
    )
  })
})

describe('matchesFilters', () => {
  const patricia = MODELS[0]!

  it('matches every model when no filter is set', () => {
    for (const model of MODELS) {
      expect(matchesFilters(model, EMPTY_FILTERS)).toBe(true)
    }
  })

  it('matches only models with the selected height', () => {
    const filters = { ...EMPTY_FILTERS, height: '5.8' }
    const matching = MODELS.filter((model) => matchesFilters(model, filters))
    expect(matching.map((model) => model.name)).toEqual(['Emily Stewart'])
    expect(matchesFilters(patricia, filters)).toBe(false)
  })

  it('matches only models with the selected eye color', () => {
    const filters = { ...EMPTY_FILTERS, eyes: 'Blue' }
    const matching = MODELS.filter((model) => matchesFilters(model, filters))
    expect(matching.map((model) => model.name)).toEqual(['Patricia Becket'])
  })

  it('matches only models with the selected bust size', () => {
    const filters = { ...EMPTY_FILTERS, bust: '90cm' }
    const matching = MODELS.filter((model) => matchesFilters(model, filters))
    expect(matching.map((model) => model.name)).toEqual(['Patricia Becket', 'Chloe Johnson'])
  })

  it('matches only models with the selected hips size', () => {
    const filters = { ...EMPTY_FILTERS, hips: '95' }
    const matching = MODELS.filter((model) => matchesFilters(model, filters))
    expect(matching.map((model) => model.name)).toEqual(['Emily Stewart', 'Chloe Johnson'])
  })

  it('combines filters with AND semantics', () => {
    const filters = { ...EMPTY_FILTERS, height: '5.9', eyes: 'Gray' }
    const matching = MODELS.filter((model) => matchesFilters(model, filters))
    expect(matching.map((model) => model.name)).toEqual(['Chloe Johnson'])
  })

  it('rejects a model when any selected filter mismatches', () => {
    const filters = { ...EMPTY_FILTERS, waist: '65', eyes: 'Blue' }
    expect(matchesFilters(patricia, filters)).toBe(true)
    expect(matchesFilters(MODELS[5]!, filters)).toBe(false)
  })
})
