import { useReducer} from 'react';
import SwitchContext from './SwitchContext'
import reducer from './reducer'

const SwitchState = ({ children }) => {

    const initialState = {
        serie : 'Modul',
        selectedSwitchType : 'Απλός',
        selectedColor : 'PW',
        currentSwitch : null,
        switches : []
        
    }

    const [ value, dispatch ] = useReducer(reducer, initialState)

    return (
        <SwitchContext.Provider value={{ value, dispatch}} >
            {children}
        </SwitchContext.Provider>
    )


}

export default SwitchState