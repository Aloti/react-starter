

const DEFAULT_STATE = {
    loading: false,
    companies: [],
    contacts: [],
    company: {
        name: '',
        address: '',
        phone: '',
    },
    contact: {
        name: '',
        email: '',
        phone: '',
        position: '',
    },
    error: ''
}

const crm = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case 'GET_COMPANIES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_COMPANIES_SUCCESS':
            return {
                ...state,
                loading: false,
                companies: action.companies
            }
        case 'GET_COMPANIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case 'GET_COMPANY_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_COMPANY_SUCCESS':
            return {
                ...state,
                loading: false,
                company: action.company
            }
        case 'GET_COMPANY_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case 'GET_CONTACTS_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'GET_CONTACTS_SUCCESS':
            return {
                ...state,
                loading: false,
                contacts: action.contacts
            }
        case 'GET_CONTACTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            }
        

        case 'ADD_COMPANY_SUCCESS':
            return {
                ...state,
                companies: [...state.companies, { ...action.company }],
            }
        
        case 'ADD_CONTACT_SUCCESS':
            return {
                ...state,
                companies: [...state.companies, { ...action.company }],
            }

        case 'DELETE_COMPANY_SUCCESS':
            return {
                ...state,
                companies: state.companies.filter(item => item.id !== action.id)
            }

        case 'DELETE_CONTACT_SUCCESS':
            return {
                ...state,
                contacts: state.contacts.filter(item => item.id !== action.id)
            }

        default:
            return state;
    }
}

export default crm