import uuid from 'uuid/v1'

// API URL Constant
const API_URL = 'http://localhost:3000/companies/'

const GET_COMPANIES_REQUEST = 'GET_COMPANIES_REQUEST'
const GET_COMPANIES_SUCCESS = 'GET_COMPANIES_SUCCESS'
const GET_COMPANIES_FAILURE = 'GET_COMPANIES_FAILURE'
const GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST'
const GET_COMPANY_SUCCESS = 'GET_COMPANY_SUCCESS'
const GET_COMPANY_FAILURE = 'GET_COMPANY_FAILURE'
const ADD_COMPANY_REQUEST = 'ADD_COMPANY_REQUEST'
const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS'
const ADD_COMPANY_FAILURE = 'ADD_COMPANY_FAILURE'
const DELETE_COMPANY_REQUEST = 'DELETE_COMPANY_REQUEST'
const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS'
const DELETE_COMPANY_FAILURE = 'DELETE_COMPANY_FAILURE'


export function getCompanies() {
    return function (dispatch) {
        dispatch({
            type: GET_COMPANIES_REQUEST
        })
        fetch(API_URL)
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
        fetch(API_URL+id)
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

export function addCompany(company) {
    return function (dispatch) {
        dispatch({
            type: ADD_COMPANY_REQUEST
        })
        fetch(API_URL, {
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

export function deleteCompany(id) {
    return function (dispatch) {
        dispatch({
            type: DELETE_COMPANY_REQUEST
        })
        fetch(API_URL+id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: DELETE_COMPANY_SUCCESS,
                    id: id
                })
            })
            .catch(error => {
                dispatch({
                    type: DELETE_COMPANY_FAILURE,
                    error: error
                })
            })
    }
}