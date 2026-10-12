import { SERVICES, SECTION_IDS, photo } from '../lib/site'
import {
  containerClass,
  scheduleAddressClass,
  scheduleBandClass,
  scheduleCardClass,
  scheduleDateClass,
  scheduleDividerClass,
  schedulePhotoClass,
  schedulePhotoWrapClass,
  scheduleRowClass,
  scheduleSprigClass,
  scheduleTimeClass,
  scheduleTitleClass,
  scheduleTopClass,
} from '../lib/styles'
import { Sprig } from './Sprig'

/**
 * The running order of the day on its faint cream band: three centred columns, each a ringed
 * circular photograph under its own title and date, with the time and the address beneath and a
 * short gold rule between neighbouring columns (never after the last one).
 */
export function Schedule() {
  return (
    <section id={SECTION_IDS.schedule} className={scheduleBandClass} aria-label="The day">
      <div className={containerClass}>
        <div className={scheduleRowClass}>
          {SERVICES.map((service, position) => (
            <div key={service.title} className={scheduleCardClass} data-testid="schedule-card">
              <div className={scheduleTopClass}>
                <h3 className={scheduleTitleClass}>{service.title}</h3>
                <p className={scheduleDateClass}>{service.date}</p>
              </div>

              <div className={schedulePhotoWrapClass}>
                <img
                  src={photo(service.photo, 480, 480)}
                  alt={service.alt}
                  className={schedulePhotoClass}
                  loading="lazy"
                />
                <span className={scheduleSprigClass} data-testid="schedule-sprig">
                  <Sprig className="h-full w-full" />
                </span>
              </div>

              <span className={scheduleTimeClass}>{service.time}</span>
              <p className={scheduleAddressClass}>{service.address}</p>

              {position === SERVICES.length - 1 ? null : (
                <span className={scheduleDividerClass} data-testid="schedule-divider" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
