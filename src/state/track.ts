import { createTracker } from '#GECK/ga'
import { AuthEventAction, AuthEventCategory } from '#GECK/firebase/auth/track'
import config from '#app/config'

enum AppEventCategory {}

enum AppEventAction {}

type EventAction = AppEventAction | AuthEventAction

type EventCategory = AppEventCategory | AuthEventCategory

export const { track, identifyUser, trackPageView, trackEvent } = createTracker<
  EventCategory,
  EventAction
>(config.gtag)
