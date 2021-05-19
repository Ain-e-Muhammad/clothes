import axios from 'axios'

export const loadData = () => {
    return (dispatch) => {
        return axios.post("https://b09d209f-7838-4cf5-afc3-109c5544e27a.mock.pstmn.io").then( (res) => {
            dispatch(updateCollections(res.data))
        })
    }
}

export const updateCollections = (collectionsMap) => ({
    type: 'UPDATE_COLLECTIONS',
    payload: collectionsMap
})  