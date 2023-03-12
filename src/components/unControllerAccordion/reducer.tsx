export type ActionType ={
    type: string
}
export type StateType = {
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type){
        case TOGGLE_COLLAPSED:
            const copyState = {
                ...state,
                collapsed: !state.collapsed
            }

            return copyState
        default :
            throw new Error("bad action type")
    }

    return state
}