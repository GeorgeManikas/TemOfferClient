import {
    FETCH_SWITCHES,
    SELECTED_SWITCH_TYPE,
    SELECTED_COLOR,
    FETCH_INDIVIDUAL_SWITCH,
    FETCH_SERIE,
    RESET_SWITCHES
} from './types'

const reducer = (state,action) => {
    switch (action.type){
        case RESET_SWITCHES:
            return {
                ...state,
                selectedColor : 'PW',
                selectedSwitchType:'Απλός',
                serie:'Ekonomik'
            }
        case FETCH_SERIE:
            return {
                ...state,
                serie :action.payload
            }
        case FETCH_SWITCHES:
            return {
                ...state,
                switches: action.payload
            }
        case SELECTED_SWITCH_TYPE:
            return {
                ...state,
                selectedSwitchType: action.payload
            }
        case SELECTED_COLOR:
            return {
                ...state,
                selectedColor : action.payload
            }
        case FETCH_INDIVIDUAL_SWITCH:
            return {
                ...state,
                currentSwitch : state.switches.filter( sw => sw.ekonomik_switch.description === state.selectedSwitchType && sw.switch_color.code === state.selectedColor)
            }
        default:
            throw new Error('Unknown action type')
    }
}

export default reducer