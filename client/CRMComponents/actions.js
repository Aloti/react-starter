import uuid from 'uuid/v1'

// API URL Constant
const API_URL = 'http://localhost:3000/'

const GET_COMPANIES_REQUEST = 'GET_COMPANIES_REQUEST'
const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
const GET_COMPANIES_FAILURE = 'GET_COMPANIES_FAILURE'
const ADD_COMPANY_REQUEST = 'ADD_COMPANIES_REQUEST'
const ADD_COMPANY_SUCCESS = 'ADD_COMPANIES_SUCCESS'
const ADD_COMPANY_FAILURE = 'ADD_COMPANIES_FAILURE'


const GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST'
const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS'
const GET_COMPANY_FAILURE = 'GET_COMPANY_FAILURE'


const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST'
const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS'
const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE'


export function getCompanies() {
    return function (dispatch) {
        dispatch({
            type: GET_COMPANIES_REQUEST
        })
        fetch(API_URL+'companies')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_COMPANIES_SUCCESS,
                    companies: data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_COMPANIES_FAILURE,
                    error: error
                })
            })
    }
}

export function getCompany(id) {
    return function (dispatch) {
        dispatch({
            type: GET_COMPANY_REQUEST
        })
        fetch(API_URL+'companies/'+id)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_COMPANY_SUCCESS,
                    company: data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_COMPANY_FAILURE,
                    error: error
                })
            })
    }
}

export function getContacts(){
    return function (dispatch) {
        dispatch({
            type: GET_CONTACTS_REQUEST
        })
        fetch(API_URL+'contacts')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: GET_CONTACTS_SUCCESS,
                    contacts: data
                })
            })
            .catch(error => {
                dispatch({
                    type: GET_CONTACTS_FAILURE,
                    error: error
                })
            })
    }
    
}

export function addCompany(company) {
    return function (dispatch) {
        dispatch({
            type: ADD_COMPANY_REQUEST
        })
        fetch(API_URL+'companies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: uuid(),
                name: company.name,
                address: company.address,
                phone: company.phone
            }),
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: ADD_COMPANY_SUCCESS,
                    company: data
                })
            })
            .catch(error => {
                dispatch({
                    type: ADD_COMPANY_FAILURE,
                    error: error
                })
            })
    }
}

