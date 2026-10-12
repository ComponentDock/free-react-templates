import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  ALL_FILTER,
  FEATURES_LEAD,
  FEATURES_TITLE,
  FILTERS,
  GALLERY,
  GALLERY_FILTER_LABEL,
  SECTION_IDS,
  TILE_TARGET,
  VIEW_MORE_LABEL,
  type Filter,
} from '../lib/site'
import {
  containerClass,
  featuresSectionClass,
  filterActiveClass,
  filterButtonClass,
  filterRowClass,
  galleryClass,
  tileClass,
  tileHiddenClass,
  tileLabelClass,
  tilePhotoClass,
  tileSizes,
  tileTextClass,
  tileTitleClass,
  tileVeilClass,
  viewMoreClass,
  viewMoreRowClass,
} from '../lib/styles'
import { SectionTitle } from './SectionTitle'

/**
 * The filterable gallery: the design's six-tile masonry, kept as a CSS grid whose items span a
 * varying number of rows, with a hidden-until-hover veil over each frame. The filter row hides the
 * frames that do not answer it — the same behaviour the reference's own script has, and every
 * frame stays in the document so the layout never jumps.
 */
export function Features() {
  const [filter, setFilter] = useState<Filter>(ALL_FILTER)

  return (
    <section id={SECTION_IDS.portfolio} className={featuresSectionClass}>
      <div className={containerClass}>
        <SectionTitle title={FEATURES_TITLE} lead={FEATURES_LEAD} />

        <div className={filterRowClass} role="group" aria-label={GALLERY_FILTER_LABEL}>
          {FILTERS.map((name) => (
            <button
              key={name}
              type="button"
              className={cn(filterButtonClass, filter === name && filterActiveClass)}
              aria-pressed={filter === name}
              onClick={() => {
                setFilter(name)
              }}
            >
              {name}
            </button>
          ))}
        </div>

        <div className={galleryClass}>
          {GALLERY.map((tile) => {
            const shown = filter === ALL_FILTER || tile.category === filter

            return (
              <a
                key={tile.id}
                href={TILE_TARGET}
                className={cn(tileClass, tileSizes[tile.size], shown ? undefined : tileHiddenClass)}
              >
                <img
                  className={tilePhotoClass}
                  src={tile.photo}
                  alt=""
                  width={900}
                  height={900}
                  loading="lazy"
                  aria-hidden="true"
                />
                <span className={tileVeilClass} aria-hidden="true" />
                <div className={tileTextClass}>
                  <span className={tileLabelClass}>{tile.label}</span>
                  <h2 className={tileTitleClass}>{tile.title}</h2>
                </div>
              </a>
            )
          })}
        </div>

        <p className={viewMoreRowClass}>
          <a className={viewMoreClass} href={TILE_TARGET}>
            {VIEW_MORE_LABEL}
          </a>
        </p>
      </div>
    </section>
  )
}
