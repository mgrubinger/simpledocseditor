# Table of Contents
1. [Fluxguide Core Events](#List-of-all-Fluxguide-Core-Events)
2. [Quiz](#modules-quiz)
3. [Third Example](#third-example)

---

# List of all Fluxguide-Core Events

## ajax.js
- submit_to_server_done
- visitor_data_was_loaded

## cards.js
- new_card_was_written

## custom_jquery_plugins.js
- fgPinch

## events.js
- tap_detail_back_button (.toolbar_back_button -> tap)

## functions.js
- restart_app_with_same_visitor
- restart_app_with_new_visitor
- change_language
- change_exhibition_section
- start_offline_mode
- start_online_mode


## cards.js
- change_card_done
- show_card_before_animation
- show_card_done
- hide_card_before_animation
- hide_card_done

## refresh.js
- refresh
- get_status_update_success

## start.js
- app_is_running_start
- custom_js_loaded
- before_startup_download
- app_is_running

## views.js
- build_init_views
- build_init_views_done
- only_media_stop_was_written
- detail_card_was_written
- language_card_written
- tutorial_was_written

## modules/audioplayer
- audioplayer_was_written

## modules/ibeacon
- ibeacons_found
- write_aroundme_stops

## modules/map
- map_initialized
- geocode_done
- geocode_error

## modules/master-slave
- master_ibeacon_changed

## modules/notifications
- notification_popup_was_closed_[ID]

## modules/quiz
- quiz_card_was_built
- quiz_tour_card_was_build
- quiz_stop_card_was_build
- update_quiz_topbar_markup_start
- quiz_tour_countdown_is_over
- update_quiz_topbar_markup_end
- quiz_item_initialized
- quiz_was_solved
- quiz_stop_was_solved
- quiz_stop_was_solved_after_animation
- write_quiz_tour_certificate_start
- quiz_certificate_card_was_build
- teamcode_entered_successfully

